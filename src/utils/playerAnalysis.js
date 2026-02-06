// =====================================================
// PLAYER ANALYSIS ENGINE
// Comprehensive match analysis with Riot API integration
// Real-time feedback on performance, builds, and improvement areas
// Auto-updates with each patch via Data Dragon
// =====================================================

// Note: Riot API requires an API key. For production, you'll need:
// 1. Development key (rate limited) from developer.riotgames.com
// 2. Production key (requires application approval)
// The frontend will call your backend proxy to avoid exposing the key

const RIOT_API_BASE = 'https://americas.api.riotgames.com'; // Americas routing
const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com';

// Platform routing for different regions
const PLATFORM_ROUTING = {
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

// =====================================================
// BENCHMARK DATA - Updated per patch
// These represent "good" performance at various ranks
// =====================================================
export const BENCHMARKS = {
  csPerMin: {
    iron: 4.0,
    bronze: 4.5,
    silver: 5.0,
    gold: 5.5,
    platinum: 6.0,
    emerald: 6.5,
    diamond: 7.0,
    master: 7.5,
    grandmaster: 8.0,
    challenger: 8.5
  },
  visionScorePerMin: {
    top: 0.8,
    jungle: 1.2,
    mid: 0.9,
    adc: 0.7,
    support: 2.0
  },
  kda: {
    iron: 1.5,
    bronze: 1.8,
    silver: 2.0,
    gold: 2.3,
    platinum: 2.5,
    emerald: 2.8,
    diamond: 3.0,
    master: 3.5,
    grandmaster: 4.0,
    challenger: 4.5
  },
  killParticipation: {
    top: 0.45,
    jungle: 0.60,
    mid: 0.55,
    adc: 0.55,
    support: 0.60
  },
  damageShare: {
    top: 0.18,
    jungle: 0.16,
    mid: 0.26,
    adc: 0.28,
    support: 0.12
  },
  objectiveParticipation: {
    jungle: 0.80,
    other: 0.50
  },
  // CS at specific times (perfect farm reference)
  csAtTime: {
    5: 44,    // ~8.8/min theoretical max
    10: 107,
    15: 158,
    20: 210,
    25: 260,
    30: 310
  },
  // Gold per minute benchmarks
  goldPerMin: {
    top: 380,
    jungle: 350,
    mid: 400,
    adc: 420,
    support: 280
  }
};

// =====================================================
// CHAMPION SCALING DATA
// Determines if champion is early/mid/late game
// =====================================================
export const CHAMPION_SCALING = {
  // Early game champions (want to end <25 min)
  early: [
    'Pantheon', 'Renekton', 'Lee Sin', 'Elise', 'Nidalee', 'Draven', 
    'Caitlyn', 'Lucian', 'Jayce', 'Quinn', 'Leblanc', 'Talon', 'Zed',
    'Rek\'Sai', 'Olaf', 'Jarvan IV', 'Xin Zhao', 'Warwick', 'Shaco',
    'Twisted Fate', 'Rumble', 'Darius', 'Garen', 'Tryndamere'
  ],
  // Mid game champions (spike at 2-3 items, 20-30 min)
  mid: [
    'Ahri', 'Syndra', 'Orianna', 'Viktor', 'Akali', 'Katarina',
    'Fiora', 'Camille', 'Irelia', 'Riven', 'Jax', 'Aatrox',
    'Graves', 'Kindred', 'Kha\'Zix', 'Rengar', 'Vi', 'Hecarim',
    'Kai\'Sa', 'Samira', 'Nilah', 'Miss Fortune', 'Jhin'
  ],
  // Late game champions (scale infinitely, want 30+ min)
  late: [
    'Kayle', 'Kassadin', 'Vladimir', 'Ryze', 'Azir', 'Cassiopeia',
    'Vayne', 'Kog\'Maw', 'Jinx', 'Twitch', 'Aphelios', 'Zeri',
    'Nasus', 'Veigar', 'Senna', 'Gangplank', 'Sion', 'Cho\'Gath',
    'Yi', 'Karthus', 'Bel\'Veth', 'Kindred', 'Smolder'
  ]
};

// =====================================================
// ITEM BUILD ANALYSIS
// Optimal builds based on enemy team composition
// =====================================================
export const ITEM_CATEGORIES = {
  antiTank: ['3036', '3033', '3135', '3153', '3091'], // LDR, Mortal, Void, BOTRK, Wit's
  antiHeal: ['3033', '3165', '3076', '3075', '3011'], // Mortal, Morello, Bramble, Thornmail, Chemtech
  armor: ['3047', '3143', '3742', '3110', '3075'], // Plated, Randuin, Dead Man's, Frozen Heart, Thornmail
  magicResist: ['3111', '3194', '3156', '3091', '3065'], // Mercs, Adaptive, Maw, Wit's, Spirit Visage
  antiShield: ['6609', '3179'], // Serpent's, Shadowflame (magic)
  waveclear: ['3077', '3074', '3748'], // Tiamat, Ravenous, Titanic
  sustain: ['3072', '3153', '3074', '3065', '6673'], // BT, BOTRK, Ravenous, SV, Shieldbow
};

// =====================================================
// ANALYSIS FUNCTIONS
// =====================================================

/**
 * Calculate CS efficiency (how many minions missed)
 */
export function analyzeCS(cs, gameDuration, role) {
  const minutes = gameDuration / 60;
  const csPerMin = cs / minutes;
  
  // Calculate theoretical max CS (accounting for jungle camps for junglers)
  let theoreticalMax;
  if (role === 'JUNGLE') {
    // Junglers get ~4 CS/min from camps + some lane farm
    theoreticalMax = minutes * 5;
  } else {
    theoreticalMax = minutes * 10.5; // ~10.5 CS/min is perfect
  }
  
  const missedCS = Math.max(0, Math.round(theoreticalMax - cs));
  const efficiency = (cs / theoreticalMax) * 100;
  
  // Gold lost calculation (~20g average per minion)
  const goldLost = missedCS * 20;
  
  return {
    csPerMin: parseFloat(csPerMin.toFixed(1)),
    theoreticalMax: Math.round(theoreticalMax),
    missedCS,
    efficiency: parseFloat(efficiency.toFixed(1)),
    goldLost,
    rating: csPerMin >= 8 ? 'Excellent' : csPerMin >= 7 ? 'Good' : csPerMin >= 6 ? 'Average' : csPerMin >= 5 ? 'Below Average' : 'Needs Work',
    color: csPerMin >= 8 ? '#22C55E' : csPerMin >= 7 ? '#84CC16' : csPerMin >= 6 ? '#EAB308' : csPerMin >= 5 ? '#F97316' : '#EF4444'
  };
}

/**
 * Analyze game length vs team composition scaling
 */
export function analyzeGameLength(gameDuration, teamChampions, enemyChampions, didWin) {
  const minutes = gameDuration / 60;
  
  // Calculate team scaling
  const getTeamScaling = (champs) => {
    let earlyCount = 0, midCount = 0, lateCount = 0;
    champs.forEach(champ => {
      if (CHAMPION_SCALING.early.includes(champ)) earlyCount++;
      else if (CHAMPION_SCALING.late.includes(champ)) lateCount++;
      else midCount++;
    });
    
    if (earlyCount >= 3) return 'early';
    if (lateCount >= 3) return 'late';
    return 'mid';
  };
  
  const teamScaling = getTeamScaling(teamChampions);
  const enemyScaling = getTeamScaling(enemyChampions);
  
  // Optimal game length based on scaling
  const optimalLength = {
    early: { min: 15, max: 25, ideal: 22 },
    mid: { min: 25, max: 32, ideal: 28 },
    late: { min: 30, max: 45, ideal: 35 }
  };
  
  const optimal = optimalLength[teamScaling];
  const wasOptimalLength = minutes >= optimal.min && minutes <= optimal.max;
  
  // Did they play to their win condition?
  let analysis = '';
  let issues = [];
  
  if (teamScaling === 'early' && minutes > 30) {
    issues.push('Game went too long for your early-game comp. Should have pushed advantages harder before 25 minutes.');
  }
  if (teamScaling === 'late' && minutes < 25 && !didWin) {
    issues.push('Game ended too early for your scaling comp. Focus on safe farming and avoiding unnecessary fights.');
  }
  if (teamScaling === 'early' && enemyScaling === 'late' && minutes > 30) {
    issues.push('You had an early comp vs late-game enemies. Every minute past 30 favored them.');
  }
  
  return {
    gameLengthMinutes: parseFloat(minutes.toFixed(1)),
    teamScaling,
    enemyScaling,
    optimalGameLength: optimal,
    wasOptimalLength,
    issues,
    recommendation: teamScaling === 'early' 
      ? 'Force objectives and end quickly. Don\'t let enemies scale.'
      : teamScaling === 'late'
      ? 'Farm safely, avoid risky fights, scale to 3+ items.'
      : 'Look for picks and objectives at item spikes.'
  };
}

/**
 * Analyze item build decisions
 */
export function analyzeBuild(items, championId, role, enemyTeam, gameDuration) {
  const issues = [];
  const suggestions = [];
  
  // Check enemy team composition
  const enemyHasHealers = enemyTeam.some(c => 
    ['Soraka', 'Yuumi', 'Aatrox', 'Vladimir', 'Sylas', 'Warwick', 'Dr. Mundo', 'Swain', 'Fiora'].includes(c)
  );
  const enemyHasTanks = enemyTeam.filter(c => 
    ['Ornn', 'Malphite', 'Sion', 'Cho\'Gath', 'Sejuani', 'Zac', 'Maokai', 'Shen', 'Tahm Kench', 'Leona', 'Nautilus', 'Alistar', 'Braum'].includes(c)
  ).length;
  const enemyHasShields = enemyTeam.some(c =>
    ['Lulu', 'Karma', 'Janna', 'Shen', 'Ivern', 'Seraphine', 'Sona'].includes(c)
  );
  const enemyAPHeavy = enemyTeam.filter(c => 
    ['Syndra', 'Ahri', 'Viktor', 'Orianna', 'Azir', 'Cassiopeia', 'Ryze', 'Vladimir', 'Brand', 'Zyra', 'Veigar', 'Lux', 'Xerath'].includes(c)
  ).length >= 3;
  const enemyADHeavy = enemyTeam.filter(c =>
    ['Zed', 'Talon', 'Qiyana', 'Jayce', 'Pantheon', 'Kha\'Zix', 'Rengar', 'Lee Sin', 'Graves'].includes(c)
  ).length >= 3;
  
  const itemIds = items.map(i => String(i));
  
  // Check for anti-heal
  const hasAntiHeal = itemIds.some(id => ITEM_CATEGORIES.antiHeal.includes(id));
  if (enemyHasHealers && !hasAntiHeal) {
    issues.push({
      type: 'missing_antiheal',
      severity: 'high',
      message: 'Enemy has heavy healing but you didn\'t build anti-heal',
      suggestion: role === 'SUPPORT' ? 'Build Chemtech Putrifier' : 'Build Mortal Reminder or Morellonomicon'
    });
  }
  
  // Check for armor pen vs tanks
  const hasArmorPen = itemIds.some(id => ['3036', '3033', '3035'].includes(id));
  if (enemyHasTanks >= 2 && !hasArmorPen && ['ADC', 'TOP'].includes(role)) {
    issues.push({
      type: 'missing_pen',
      severity: 'high',
      message: `Enemy has ${enemyHasTanks} tanks but you have no armor penetration`,
      suggestion: 'Build Lord Dominik\'s Regards or Black Cleaver'
    });
  }
  
  // Check for MR vs AP heavy
  const hasMR = itemIds.some(id => ITEM_CATEGORIES.magicResist.includes(id));
  if (enemyAPHeavy && !hasMR && role !== 'ADC') {
    issues.push({
      type: 'missing_mr',
      severity: 'medium',
      message: 'Enemy team is AP heavy but you have no magic resist',
      suggestion: 'Build Maw of Malmortius, Spirit Visage, or Force of Nature'
    });
  }
  
  // Check for anti-shield
  const hasAntiShield = itemIds.some(id => ITEM_CATEGORIES.antiShield.includes(id));
  if (enemyHasShields && !hasAntiShield) {
    suggestions.push({
      type: 'anti_shield',
      message: 'Consider Serpent\'s Fang or Shadowflame against shield-heavy enemies'
    });
  }
  
  // Calculate gold efficiency
  // (This would ideally pull from Data Dragon item data)
  
  return {
    issues,
    suggestions,
    buildScore: Math.max(0, 100 - (issues.filter(i => i.severity === 'high').length * 20) - (issues.filter(i => i.severity === 'medium').length * 10))
  };
}

/**
 * Analyze vision control
 */
export function analyzeVision(visionScore, wardsPlaced, wardsKilled, controlWardsBought, gameDuration, role) {
  const minutes = gameDuration / 60;
  const visionPerMin = visionScore / minutes;
  const expectedVisionPerMin = BENCHMARKS.visionScorePerMin[role.toLowerCase()] || 1.0;
  
  const issues = [];
  
  // Vision score analysis
  if (visionPerMin < expectedVisionPerMin * 0.7) {
    issues.push({
      type: 'low_vision',
      severity: 'high',
      message: `Vision score is ${visionPerMin.toFixed(1)}/min, expected ${expectedVisionPerMin}/min for ${role}`,
      suggestion: 'Buy more control wards and use trinket on cooldown'
    });
  }
  
  // Control ward analysis
  const expectedControlWards = Math.floor(minutes / 5); // ~1 per 5 minutes minimum
  if (controlWardsBought < expectedControlWards && role !== 'ADC') {
    issues.push({
      type: 'low_control_wards',
      severity: 'medium',
      message: `Only bought ${controlWardsBought} control wards in ${Math.round(minutes)} minutes`,
      suggestion: `Should buy at least ${expectedControlWards} control wards (1 every 5 min)`
    });
  }
  
  // Wards killed
  if (wardsKilled < Math.floor(minutes / 10) && role !== 'ADC') {
    issues.push({
      type: 'low_wards_cleared',
      severity: 'low',
      message: 'Not clearing enough enemy vision',
      suggestion: 'Use sweeper/control wards to deny enemy vision'
    });
  }
  
  return {
    visionScore,
    visionPerMin: parseFloat(visionPerMin.toFixed(2)),
    expectedVisionPerMin,
    wardsPlaced,
    wardsKilled,
    controlWardsBought,
    issues,
    rating: visionPerMin >= expectedVisionPerMin * 1.2 ? 'Excellent' : 
            visionPerMin >= expectedVisionPerMin ? 'Good' : 
            visionPerMin >= expectedVisionPerMin * 0.7 ? 'Average' : 'Needs Work'
  };
}

/**
 * Analyze jungle specific metrics
 */
export function analyzeJungle(stats, gameDuration, objectives) {
  const minutes = gameDuration / 60;
  const issues = [];
  
  // Objective control
  const { dragons, barons, heralds, voidGrubs } = objectives;
  const totalObjectives = dragons + barons + heralds + (voidGrubs || 0);
  const objectiveParticipation = stats.objectiveParticipation || 0;
  
  if (dragons < 2 && minutes > 25) {
    issues.push({
      type: 'low_dragon_control',
      severity: 'high',
      message: `Only ${dragons} dragons secured in ${Math.round(minutes)} minutes`,
      suggestion: 'Track dragon spawns (5 min CD). Set up vision 1 min before spawn.'
    });
  }
  
  if (heralds === 0 && minutes > 20) {
    issues.push({
      type: 'missed_herald',
      severity: 'medium',
      message: 'No Rift Herald secured',
      suggestion: 'Herald spawns at 8:00, prioritize it for early tower gold'
    });
  }
  
  // Farm vs gank balance
  const csPerMin = stats.cs / minutes;
  if (csPerMin > 6 && stats.killParticipation < 0.4) {
    issues.push({
      type: 'too_much_farming',
      severity: 'medium',
      message: 'High CS but low kill participation - farming too much',
      suggestion: 'Balance farming with ganks. Look for opportunities after clearing quadrants.'
    });
  } else if (csPerMin < 4.5 && stats.killParticipation < 0.5) {
    issues.push({
      type: 'inefficient_pathing',
      severity: 'high',
      message: 'Low CS and low kill participation - inefficient pathing',
      suggestion: 'Practice full clears and identify gank windows based on lane states'
    });
  }
  
  // First clear timing
  // (Would need timeline data from Riot API)
  
  return {
    objectives: { dragons, barons, heralds, voidGrubs },
    totalObjectives,
    objectiveParticipation,
    issues,
    pathing: csPerMin >= 5.5 ? 'Efficient' : csPerMin >= 4.5 ? 'Average' : 'Inefficient'
  };
}

/**
 * Analyze support specific metrics
 */
export function analyzeSupport(stats, gameDuration, teamStats) {
  const minutes = gameDuration / 60;
  const issues = [];
  
  // Vision is critical for supports
  const visionPerMin = stats.visionScore / minutes;
  if (visionPerMin < 1.5) {
    issues.push({
      type: 'critical_vision',
      severity: 'high',
      message: `Vision score ${visionPerMin.toFixed(1)}/min is too low for support`,
      suggestion: 'Target 1.5-2.0 vision score per minute. Use all ward charges on cooldown.'
    });
  }
  
  // Kill participation is crucial
  if (stats.killParticipation < 0.5) {
    issues.push({
      type: 'low_participation',
      severity: 'medium',
      message: `${Math.round(stats.killParticipation * 100)}% kill participation is low for support`,
      suggestion: 'Roam to help other lanes after pushing bot. Be present for objectives.'
    });
  }
  
  // Deaths analysis
  const deathsPerMin = stats.deaths / minutes;
  if (deathsPerMin > 0.25) {
    issues.push({
      type: 'dying_too_much',
      severity: 'medium',
      message: 'Dying too frequently - check positioning',
      suggestion: 'Stay behind your carries in fights. Die less, provide more utility.'
    });
  }
  
  // CC Score (if available)
  if (stats.ccScore && stats.ccScore < minutes * 30) {
    issues.push({
      type: 'low_cc',
      severity: 'low',
      message: 'CC score is lower than expected',
      suggestion: 'Look for more engage/peel opportunities'
    });
  }
  
  return {
    visionPerMin,
    killParticipation: stats.killParticipation,
    issues,
    supportScore: 100 - (issues.length * 15)
  };
}

/**
 * Calculate overall performance grade
 */
export function calculateGrade(analysisResults) {
  let totalScore = 100;
  let weights = {
    cs: 25,
    kda: 20,
    vision: 15,
    damage: 15,
    objectives: 15,
    build: 10
  };
  
  // Deduct points for issues
  analysisResults.issues?.forEach(issue => {
    if (issue.severity === 'high') totalScore -= 15;
    else if (issue.severity === 'medium') totalScore -= 8;
    else totalScore -= 3;
  });
  
  // Bonus for exceptional performance
  if (analysisResults.csAnalysis?.csPerMin >= 8) totalScore += 5;
  if (analysisResults.kda >= 4) totalScore += 5;
  
  totalScore = Math.max(0, Math.min(100, totalScore));
  
  let grade;
  if (totalScore >= 90) grade = 'S+';
  else if (totalScore >= 85) grade = 'S';
  else if (totalScore >= 80) grade = 'S-';
  else if (totalScore >= 75) grade = 'A+';
  else if (totalScore >= 70) grade = 'A';
  else if (totalScore >= 65) grade = 'A-';
  else if (totalScore >= 60) grade = 'B+';
  else if (totalScore >= 55) grade = 'B';
  else if (totalScore >= 50) grade = 'B-';
  else if (totalScore >= 45) grade = 'C+';
  else if (totalScore >= 40) grade = 'C';
  else if (totalScore >= 35) grade = 'C-';
  else if (totalScore >= 30) grade = 'D';
  else grade = 'F';
  
  return { score: totalScore, grade };
}

/**
 * Generate improvement priorities
 */
export function generateImprovementPlan(analysisResults, role) {
  const priorities = [];
  
  // Sort issues by severity
  const allIssues = [
    ...(analysisResults.csAnalysis?.issues || []),
    ...(analysisResults.buildAnalysis?.issues || []),
    ...(analysisResults.visionAnalysis?.issues || []),
    ...(analysisResults.roleAnalysis?.issues || [])
  ].sort((a, b) => {
    const severityOrder = { high: 0, medium: 1, low: 2 };
    return severityOrder[a.severity] - severityOrder[b.severity];
  });
  
  // Top 3 priorities
  allIssues.slice(0, 3).forEach((issue, i) => {
    priorities.push({
      rank: i + 1,
      area: issue.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      issue: issue.message,
      action: issue.suggestion,
      impact: issue.severity === 'high' ? 'High' : issue.severity === 'medium' ? 'Medium' : 'Low'
    });
  });
  
  return priorities;
}

// =====================================================
// MAIN ANALYSIS FUNCTION
// =====================================================
export async function analyzeMatch(matchData, summonerPuuid) {
  // Find the player in the match
  const playerIndex = matchData.metadata.participants.indexOf(summonerPuuid);
  const player = matchData.info.participants[playerIndex];
  
  if (!player) {
    throw new Error('Player not found in match data');
  }
  
  const gameDuration = matchData.info.gameDuration;
  const minutes = gameDuration / 60;
  
  // Get team compositions
  const teamId = player.teamId;
  const allies = matchData.info.participants
    .filter(p => p.teamId === teamId)
    .map(p => p.championName);
  const enemies = matchData.info.participants
    .filter(p => p.teamId !== teamId)
    .map(p => p.championName);
  
  // Determine role
  const role = player.teamPosition || player.individualPosition || 'UNKNOWN';
  
  // Run all analyses
  const csAnalysis = analyzeCS(player.totalMinionsKilled + player.neutralMinionsKilled, gameDuration, role);
  const gameLengthAnalysis = analyzeGameLength(gameDuration, allies, enemies, player.win);
  const buildAnalysis = analyzeBuild(
    [player.item0, player.item1, player.item2, player.item3, player.item4, player.item5].filter(i => i > 0),
    player.championName,
    role,
    enemies,
    gameDuration
  );
  const visionAnalysis = analyzeVision(
    player.visionScore,
    player.wardsPlaced,
    player.wardsKilled,
    player.visionWardsBoughtInGame,
    gameDuration,
    role
  );
  
  // Role-specific analysis
  let roleAnalysis = null;
  if (role === 'JUNGLE') {
    // Get objective data from teams
    const team = matchData.info.teams.find(t => t.teamId === teamId);
    roleAnalysis = analyzeJungle(
      {
        cs: player.totalMinionsKilled + player.neutralMinionsKilled,
        killParticipation: (player.kills + player.assists) / Math.max(1, matchData.info.participants.filter(p => p.teamId === teamId).reduce((sum, p) => sum + p.kills, 0)),
        objectiveParticipation: player.challenges?.teamBaronKills || 0
      },
      gameDuration,
      {
        dragons: team?.objectives?.dragon?.kills || 0,
        barons: team?.objectives?.baron?.kills || 0,
        heralds: team?.objectives?.riftHerald?.kills || 0,
        voidGrubs: team?.objectives?.horde?.kills || 0
      }
    );
  } else if (role === 'SUPPORT' || role === 'UTILITY') {
    roleAnalysis = analyzeSupport(
      {
        visionScore: player.visionScore,
        killParticipation: (player.kills + player.assists) / Math.max(1, matchData.info.participants.filter(p => p.teamId === teamId).reduce((sum, p) => sum + p.kills, 0)),
        deaths: player.deaths,
        ccScore: player.timeCCingOthers
      },
      gameDuration,
      {}
    );
  }
  
  // Calculate KDA
  const kda = (player.kills + player.assists) / Math.max(1, player.deaths);
  
  // Calculate damage share
  const teamDamage = matchData.info.participants
    .filter(p => p.teamId === teamId)
    .reduce((sum, p) => sum + p.totalDamageDealtToChampions, 0);
  const damageShare = player.totalDamageDealtToChampions / teamDamage;
  
  // Compile all issues
  const allIssues = [
    ...(csAnalysis.missedCS > 50 ? [{ type: 'cs', severity: csAnalysis.missedCS > 100 ? 'high' : 'medium', message: `Missed ${csAnalysis.missedCS} CS (${csAnalysis.goldLost}g)`, suggestion: 'Practice last hitting in practice tool' }] : []),
    ...(buildAnalysis.issues || []),
    ...(visionAnalysis.issues || []),
    ...(roleAnalysis?.issues || []),
    ...(gameLengthAnalysis.issues?.map(i => ({ type: 'game_length', severity: 'medium', message: i })) || [])
  ];
  
  // Calculate grade
  const grade = calculateGrade({
    csAnalysis,
    kda,
    visionAnalysis,
    damageShare,
    buildAnalysis,
    issues: allIssues
  });
  
  // Generate improvement plan
  const improvementPlan = generateImprovementPlan({
    csAnalysis: { issues: csAnalysis.missedCS > 50 ? [{ type: 'cs', severity: csAnalysis.missedCS > 100 ? 'high' : 'medium', message: `Missed ${csAnalysis.missedCS} CS`, suggestion: 'Practice last hitting' }] : [] },
    buildAnalysis,
    visionAnalysis,
    roleAnalysis
  }, role);
  
  return {
    // Basic info
    champion: player.championName,
    role,
    win: player.win,
    gameDuration: minutes,
    
    // Core stats
    kills: player.kills,
    deaths: player.deaths,
    assists: player.assists,
    kda: parseFloat(kda.toFixed(2)),
    
    // CS Analysis
    cs: player.totalMinionsKilled + player.neutralMinionsKilled,
    csAnalysis,
    
    // Damage
    damage: player.totalDamageDealtToChampions,
    damageShare: parseFloat((damageShare * 100).toFixed(1)),
    expectedDamageShare: parseFloat((BENCHMARKS.damageShare[role.toLowerCase()] * 100 || 20).toFixed(1)),
    
    // Vision
    visionAnalysis,
    
    // Build
    items: [player.item0, player.item1, player.item2, player.item3, player.item4, player.item5, player.item6].filter(i => i > 0),
    buildAnalysis,
    
    // Game flow
    gameLengthAnalysis,
    
    // Role specific
    roleAnalysis,
    
    // Team context
    teamComp: allies,
    enemyComp: enemies,
    
    // Overall assessment
    grade,
    issues: allIssues,
    improvementPlan,
    
    // Gold
    goldEarned: player.goldEarned,
    goldPerMin: parseFloat((player.goldEarned / minutes).toFixed(0))
  };
}

/**
 * Analyze multiple matches for trends
 */
export function analyzeMatchHistory(matchAnalyses) {
  if (!matchAnalyses || matchAnalyses.length === 0) return null;
  
  const totalGames = matchAnalyses.length;
  const wins = matchAnalyses.filter(m => m.win).length;
  
  // Aggregate stats
  const avgCS = matchAnalyses.reduce((sum, m) => sum + m.csAnalysis.csPerMin, 0) / totalGames;
  const avgKDA = matchAnalyses.reduce((sum, m) => sum + m.kda, 0) / totalGames;
  const avgVision = matchAnalyses.reduce((sum, m) => sum + m.visionAnalysis.visionPerMin, 0) / totalGames;
  const avgDamageShare = matchAnalyses.reduce((sum, m) => sum + m.damageShare, 0) / totalGames;
  
  // Find recurring issues
  const issueFrequency = {};
  matchAnalyses.forEach(m => {
    m.issues.forEach(issue => {
      issueFrequency[issue.type] = (issueFrequency[issue.type] || 0) + 1;
    });
  });
  
  // Sort by frequency
  const recurringIssues = Object.entries(issueFrequency)
    .filter(([_, count]) => count >= totalGames * 0.3) // Issues in 30%+ of games
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => ({
      type,
      frequency: Math.round((count / totalGames) * 100),
      gamesAffected: count
    }));
  
  // Role performance
  const roleStats = {};
  matchAnalyses.forEach(m => {
    if (!roleStats[m.role]) {
      roleStats[m.role] = { games: 0, wins: 0, avgKDA: 0 };
    }
    roleStats[m.role].games++;
    if (m.win) roleStats[m.role].wins++;
    roleStats[m.role].avgKDA += m.kda;
  });
  Object.keys(roleStats).forEach(role => {
    roleStats[role].avgKDA = (roleStats[role].avgKDA / roleStats[role].games).toFixed(2);
    roleStats[role].winRate = Math.round((roleStats[role].wins / roleStats[role].games) * 100);
  });
  
  // Champion performance
  const champStats = {};
  matchAnalyses.forEach(m => {
    if (!champStats[m.champion]) {
      champStats[m.champion] = { games: 0, wins: 0, avgKDA: 0, avgCS: 0 };
    }
    champStats[m.champion].games++;
    if (m.win) champStats[m.champion].wins++;
    champStats[m.champion].avgKDA += m.kda;
    champStats[m.champion].avgCS += m.csAnalysis.csPerMin;
  });
  Object.keys(champStats).forEach(champ => {
    champStats[champ].avgKDA = (champStats[champ].avgKDA / champStats[champ].games).toFixed(2);
    champStats[champ].avgCS = (champStats[champ].avgCS / champStats[champ].games).toFixed(1);
    champStats[champ].winRate = Math.round((champStats[champ].wins / champStats[champ].games) * 100);
  });
  
  return {
    overview: {
      totalGames,
      wins,
      losses: totalGames - wins,
      winRate: Math.round((wins / totalGames) * 100)
    },
    averages: {
      csPerMin: parseFloat(avgCS.toFixed(1)),
      kda: parseFloat(avgKDA.toFixed(2)),
      visionPerMin: parseFloat(avgVision.toFixed(2)),
      damageShare: parseFloat(avgDamageShare.toFixed(1))
    },
    recurringIssues,
    roleStats,
    champStats,
    improvementFocus: recurringIssues.slice(0, 3).map(i => i.type.replace(/_/g, ' '))
  };
}

export default {
  analyzeMatch,
  analyzeMatchHistory,
  analyzeCS,
  analyzeGameLength,
  analyzeBuild,
  analyzeVision,
  analyzeJungle,
  analyzeSupport,
  calculateGrade,
  generateImprovementPlan,
  BENCHMARKS,
  CHAMPION_SCALING,
  ITEM_CATEGORIES
};
