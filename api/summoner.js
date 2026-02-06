// Vercel Serverless Function - Summoner Lookup
// Proxies Riot API calls to avoid exposing API key

const RIOT_API_KEY = process.env.RIOT_API_KEY;

// Platform routing for regional APIs
const PLATFORM_TO_REGION = {
  'NA1': 'americas',
  'BR1': 'americas',
  'LA1': 'americas',
  'LA2': 'americas',
  'EUW1': 'europe',
  'EUN1': 'europe',
  'TR1': 'europe',
  'RU': 'europe',
  'KR': 'asia',
  'JP1': 'asia',
  'OC1': 'sea',
  'PH2': 'sea',
  'SG2': 'sea',
  'TH2': 'sea',
  'TW2': 'sea',
  'VN2': 'sea'
};

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { gameName, tagLine, platform = 'NA1' } = req.query;

  if (!gameName || !tagLine) {
    return res.status(400).json({ error: 'Missing gameName or tagLine parameter' });
  }

  if (!RIOT_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const region = PLATFORM_TO_REGION[platform] || 'americas';

  try {
    // Step 1: Get account by Riot ID
    const accountUrl = `https://${region}.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${encodeURIComponent(gameName)}/${encodeURIComponent(tagLine)}`;
    
    const accountResponse = await fetch(accountUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    if (!accountResponse.ok) {
      if (accountResponse.status === 404) {
        return res.status(404).json({ error: 'Summoner not found' });
      }
      if (accountResponse.status === 429) {
        return res.status(429).json({ error: 'Rate limited - please try again later' });
      }
      throw new Error(`Account API error: ${accountResponse.status}`);
    }

    const accountData = await accountResponse.json();
    const puuid = accountData.puuid;

    // Step 2: Get summoner data by PUUID
    const summonerUrl = `https://${platform.toLowerCase()}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`;
    
    const summonerResponse = await fetch(summonerUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    if (!summonerResponse.ok) {
      throw new Error(`Summoner API error: ${summonerResponse.status}`);
    }

    const summonerData = await summonerResponse.json();

    // Step 3: Get ranked data
    const rankedUrl = `https://${platform.toLowerCase()}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerData.id}`;
    
    const rankedResponse = await fetch(rankedUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    let rankedData = [];
    if (rankedResponse.ok) {
      rankedData = await rankedResponse.json();
    }

    // Find solo queue rank
    const soloQueue = rankedData.find(q => q.queueType === 'RANKED_SOLO_5x5');

    return res.status(200).json({
      puuid: accountData.puuid,
      gameName: accountData.gameName,
      tagLine: accountData.tagLine,
      summonerLevel: summonerData.summonerLevel,
      profileIconId: summonerData.profileIconId,
      rank: soloQueue ? {
        tier: soloQueue.tier,
        rank: soloQueue.rank,
        lp: soloQueue.leaguePoints,
        wins: soloQueue.wins,
        losses: soloQueue.losses,
        winRate: Math.round((soloQueue.wins / (soloQueue.wins + soloQueue.losses)) * 100)
      } : null
    });

  } catch (error) {
    console.error('Summoner lookup error:', error);
    return res.status(500).json({ error: 'Failed to fetch summoner data', details: error.message });
  }
}
