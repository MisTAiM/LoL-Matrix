// Vercel Serverless Function - Match History
// Gets recent matches for a player

const RIOT_API_KEY = process.env.RIOT_API_KEY;

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
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { puuid, platform = 'NA1', count = '10', queue = '420' } = req.query;
  // queue 420 = Ranked Solo/Duo, 440 = Ranked Flex, 400 = Normal Draft

  if (!puuid) {
    return res.status(400).json({ error: 'Missing puuid parameter' });
  }

  if (!RIOT_API_KEY) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const region = PLATFORM_TO_REGION[platform] || 'americas';

  try {
    // Get match IDs
    const matchListUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?count=${count}&queue=${queue}`;
    
    const matchListResponse = await fetch(matchListUrl, {
      headers: { 'X-Riot-Token': RIOT_API_KEY }
    });

    if (!matchListResponse.ok) {
      if (matchListResponse.status === 429) {
        return res.status(429).json({ error: 'Rate limited - please try again later' });
      }
      throw new Error(`Match list API error: ${matchListResponse.status}`);
    }

    const matchIds = await matchListResponse.json();

    // Fetch details for each match (limit to avoid rate limits)
    const matchDetails = [];
    
    for (const matchId of matchIds.slice(0, 10)) {
      try {
        const matchUrl = `https://${region}.api.riotgames.com/lol/match/v5/matches/${matchId}`;
        
        const matchResponse = await fetch(matchUrl, {
          headers: { 'X-Riot-Token': RIOT_API_KEY }
        });

        if (matchResponse.ok) {
          const matchData = await matchResponse.json();
          
          // Find the player in the match
          const playerIndex = matchData.metadata.participants.indexOf(puuid);
          const player = matchData.info.participants[playerIndex];
          
          if (player) {
            // Get team data for objectives
            const team = matchData.info.teams.find(t => t.teamId === player.teamId);
            const enemyTeam = matchData.info.teams.find(t => t.teamId !== player.teamId);
            
            // Get all participants for team comps
            const allies = matchData.info.participants
              .filter(p => p.teamId === player.teamId)
              .map(p => ({
                champion: p.championName,
                role: p.teamPosition,
                kills: p.kills,
                deaths: p.deaths,
                assists: p.assists
              }));
            
            const enemies = matchData.info.participants
              .filter(p => p.teamId !== player.teamId)
              .map(p => ({
                champion: p.championName,
                role: p.teamPosition,
                kills: p.kills,
                deaths: p.deaths,
                assists: p.assists
              }));

            matchDetails.push({
              matchId,
              gameCreation: matchData.info.gameCreation,
              gameDuration: matchData.info.gameDuration,
              gameMode: matchData.info.gameMode,
              queueId: matchData.info.queueId,
              
              // Player stats
              champion: player.championName,
              championId: player.championId,
              role: player.teamPosition || player.individualPosition,
              win: player.win,
              
              // KDA
              kills: player.kills,
              deaths: player.deaths,
              assists: player.assists,
              kda: ((player.kills + player.assists) / Math.max(1, player.deaths)).toFixed(2),
              
              // CS
              cs: player.totalMinionsKilled + player.neutralMinionsKilled,
              csPerMin: ((player.totalMinionsKilled + player.neutralMinionsKilled) / (matchData.info.gameDuration / 60)).toFixed(1),
              
              // Damage
              totalDamage: player.totalDamageDealtToChampions,
              damagePerMin: Math.round(player.totalDamageDealtToChampions / (matchData.info.gameDuration / 60)),
              
              // Vision
              visionScore: player.visionScore,
              wardsPlaced: player.wardsPlaced,
              wardsKilled: player.wardsKilled,
              controlWards: player.visionWardsBoughtInGame,
              
              // Gold
              goldEarned: player.goldEarned,
              goldPerMin: Math.round(player.goldEarned / (matchData.info.gameDuration / 60)),
              
              // Items
              items: [player.item0, player.item1, player.item2, player.item3, player.item4, player.item5, player.item6].filter(i => i > 0),
              
              // Summoner spells
              summoner1Id: player.summoner1Id,
              summoner2Id: player.summoner2Id,
              
              // Runes
              primaryRune: player.perks?.styles?.[0]?.selections?.[0]?.perk,
              
              // Team stats
              teamKills: allies.reduce((sum, p) => sum + p.kills, 0),
              killParticipation: Math.round(((player.kills + player.assists) / Math.max(1, allies.reduce((sum, p) => sum + p.kills, 0))) * 100),
              
              // Objectives
              objectives: team ? {
                dragons: team.objectives.dragon?.kills || 0,
                barons: team.objectives.baron?.kills || 0,
                heralds: team.objectives.riftHerald?.kills || 0,
                towers: team.objectives.tower?.kills || 0,
                inhibitors: team.objectives.inhibitor?.kills || 0
              } : null,
              
              // Team comps
              allies: allies.map(a => a.champion),
              enemies: enemies.map(e => e.champion),
              
              // Additional stats
              firstBlood: player.firstBloodKill,
              turretKills: player.turretKills,
              objectivesTaken: player.objectivesStolen || 0,
              
              // Challenges (if available)
              challenges: player.challenges ? {
                soloKills: player.challenges.soloKills,
                killParticipation: player.challenges.killParticipation,
                teamDamagePercentage: player.challenges.teamDamagePercentage,
                visionScorePerMinute: player.challenges.visionScorePerMinute,
                effectiveHealAndShielding: player.challenges.effectiveHealAndShielding
              } : null
            });
          }
        }
        
        // Small delay to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (matchError) {
        console.error(`Error fetching match ${matchId}:`, matchError);
      }
    }

    return res.status(200).json({
      puuid,
      matchCount: matchDetails.length,
      matches: matchDetails
    });

  } catch (error) {
    console.error('Match history error:', error);
    return res.status(500).json({ error: 'Failed to fetch match history', details: error.message });
  }
}
