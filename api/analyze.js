// Vercel Serverless Function - Match Analysis
// Analyzes match data and provides improvement recommendations

// Benchmarks by rank
const BENCHMARKS = {
  csPerMin: {
    iron: 4.0, bronze: 4.5, silver: 5.0, gold: 5.5, platinum: 6.0,
    emerald: 6.5, diamond: 7.0, master: 7.5, grandmaster: 8.0, challenger: 8.5
  },
  visionPerMin: {
    top: 0.8, jungle: 1.2, mid: 0.9, adc: 0.7, support: 2.0, bottom: 0.7, utility: 2.0
  },
  killParticipation: {
    top: 45, jungle: 60, mid: 55, adc: 55, bottom: 55, support: 60, utility: 60
  },
  damageShare: {
    top: 18, jungle: 16, mid: 26, adc: 28, bottom: 28, support: 12, utility: 12
  }
};

// Champion scaling classification
const EARLY_GAME = ['Pantheon', 'Renekton', 'Lee Sin', 'Elise', 'Draven', 'Lucian', 'Jayce', 'Leblanc', 'Talon', 'Zed', 'Olaf', 'Xin Zhao', 'Darius'];
const LATE_GAME = ['Kayle', 'Kassadin', 'Vladimir', 'Vayne', 'Kog\'Maw', 'Jinx', 'Twitch', 'Nasus', 'Veigar', 'Gangplank', 'Yi', 'Karthus', 'Smolder', 'Zeri'];

// Item categories for build analysis
const ANTI_HEAL = ['3033', '3165', '3076', '3075', '3011']; // Mortal, Morello, Bramble, Thornmail, Chemtech
const ARMOR_PEN = ['3036', '3033', '3035', '3071']; // LDR, Mortal, Last Whisper, Cleaver
const MAGIC_PEN = ['3135', '3020', '3916']; // Void, Sorcs, Oblivion
const MR_ITEMS = ['3111', '3194', '3156', '3091', '3065']; // Mercs, Adaptive, Maw, Wit's, SV

// Healers and tanks for build recommendations
const HEALERS = ['Soraka', 'Yuumi', 'Aatrox', 'Vladimir', 'Sylas', 'Warwick', 'Dr. Mundo', 'Swain', 'Fiora', 'Senna'];
const TANKS = ['Ornn', 'Malphite', 'Sion', 'Cho\'Gath', 'Sejuani', 'Zac', 'Maokai', 'Shen', 'Tahm Kench', 'Leona', 'Nautilus', 'Alistar', 'Braum', 'Amumu'];
const AP_CHAMPS = ['Syndra', 'Ahri', 'Viktor', 'Orianna', 'Azir', 'Cassiopeia', 'Ryze', 'Vladimir', 'Brand', 'Zyra', 'Veigar', 'Lux', 'Xerath', 'Vel\'Koz'];

function analyzeMatch(match, playerRank = 'gold') {
  const issues = [];
  const strengths = [];
  const suggestions = [];
  
  const minutes = match.gameDuration / 60;
  const role = (match.role || 'MID').toLowerCase();
  const rankLower = playerRank.toLowerCase();
  
  // 1. CS Analysis
  const csPerMin = parseFloat(match.csPerMin);
  const expectedCS = BENCHMARKS.csPerMin[rankLower] || 5.5;
  const theoreticalMax = role === 'jungle' ? minutes * 5 : minutes * 10.5;
  const missedCS = Math.max(0, Math.round(theoreticalMax - match.cs));
  const goldLost = missedCS * 20;
  
  if (csPerMin < expectedCS * 0.8) {
    issues.push({
      type: 'cs',
      severity: 'high',
      message: `CS/min (${csPerMin}) is below ${rankLower} benchmark (${expectedCS})`,
      suggestion: `Missed ~${missedCS} CS = ${goldLost}g lost. Practice last-hitting in tool for 10 min daily.`
    });
  } else if (csPerMin >= expectedCS * 1.1) {
    strengths.push({
      type: 'cs',
      message: `Excellent CS/min (${csPerMin}) - above rank average`
    });
  }
  
  // 2. Vision Analysis
  const visionPerMin = match.visionScore / minutes;
  const expectedVision = BENCHMARKS.visionPerMin[role] || 1.0;
  
  if (visionPerMin < expectedVision * 0.7) {
    issues.push({
      type: 'vision',
      severity: role === 'support' || role === 'utility' ? 'high' : 'medium',
      message: `Vision score ${match.visionScore} (${visionPerMin.toFixed(1)}/min) is low for ${role}`,
      suggestion: `Target ${expectedVision}/min. Buy control wards every back. Use trinket on cooldown.`
    });
  }
  
  if (match.controlWards < Math.floor(minutes / 6) && role !== 'adc' && role !== 'bottom') {
    issues.push({
      type: 'control_wards',
      severity: 'medium',
      message: `Only ${match.controlWards} control wards in ${Math.round(minutes)} minutes`,
      suggestion: `Buy 1 control ward every back. They're 75g and provide crucial vision.`
    });
  }
  
  // 3. Kill Participation
  const expectedKP = BENCHMARKS.killParticipation[role] || 50;
  if (match.killParticipation < expectedKP * 0.7) {
    issues.push({
      type: 'participation',
      severity: 'medium',
      message: `${match.killParticipation}% kill participation is low for ${role}`,
      suggestion: role === 'top' ? 'Use TP for plays. Group for objectives.' : 'Roam more. Be present for teamfights and objectives.'
    });
  } else if (match.killParticipation >= expectedKP * 1.2) {
    strengths.push({
      type: 'participation',
      message: `Great ${match.killParticipation}% kill participation - high impact`
    });
  }
  
  // 4. Deaths Analysis
  const deathsPerMin = match.deaths / minutes;
  if (deathsPerMin > 0.25) {
    issues.push({
      type: 'deaths',
      severity: match.deaths > 8 ? 'high' : 'medium',
      message: `${match.deaths} deaths in ${Math.round(minutes)} minutes is high`,
      suggestion: 'Review death replays for positioning errors. Play safer when behind.'
    });
  } else if (match.deaths <= 2 && minutes > 20) {
    strengths.push({
      type: 'survival',
      message: `Excellent survivability - only ${match.deaths} deaths`
    });
  }
  
  // 5. Build Analysis
  const items = match.items.map(String);
  const enemyChamps = match.enemies || [];
  
  // Check for anti-heal
  const enemyHasHealers = enemyChamps.some(c => HEALERS.includes(c));
  const hasAntiHeal = items.some(i => ANTI_HEAL.includes(i));
  if (enemyHasHealers && !hasAntiHeal) {
    issues.push({
      type: 'build_antiheal',
      severity: 'high',
      message: 'Enemy has heavy healing but no anti-heal items built',
      suggestion: 'Build Mortal Reminder (AD) or Morellonomicon (AP) against healing'
    });
  }
  
  // Check for armor pen vs tanks
  const tankCount = enemyChamps.filter(c => TANKS.includes(c)).length;
  const hasArmorPen = items.some(i => ARMOR_PEN.includes(i));
  if (tankCount >= 2 && !hasArmorPen && ['adc', 'bottom', 'top'].includes(role)) {
    issues.push({
      type: 'build_pen',
      severity: 'high',
      message: `Enemy has ${tankCount} tanks but no armor penetration`,
      suggestion: 'Build Lord Dominik\'s Regards or Black Cleaver against tanks'
    });
  }
  
  // Check for MR vs AP heavy
  const apCount = enemyChamps.filter(c => AP_CHAMPS.includes(c)).length;
  const hasMR = items.some(i => MR_ITEMS.includes(i));
  if (apCount >= 3 && !hasMR && role !== 'adc' && role !== 'bottom') {
    issues.push({
      type: 'build_mr',
      severity: 'medium',
      message: `Enemy is AP heavy (${apCount} AP) but no MR built`,
      suggestion: 'Build Maw, Spirit Visage, or Force of Nature'
    });
  }
  
  // 6. Game Length Analysis
  const playerScaling = LATE_GAME.includes(match.champion) ? 'late' : EARLY_GAME.includes(match.champion) ? 'early' : 'mid';
  const teamEarly = (match.allies || []).filter(c => EARLY_GAME.includes(c)).length;
  const teamLate = (match.allies || []).filter(c => LATE_GAME.includes(c)).length;
  const teamScaling = teamLate >= 3 ? 'late' : teamEarly >= 3 ? 'early' : 'mid';
  
  if (teamScaling === 'early' && minutes > 30 && !match.win) {
    issues.push({
      type: 'game_length',
      severity: 'medium',
      message: `Early-game comp but game went ${Math.round(minutes)} minutes`,
      suggestion: 'Push advantages harder. Take objectives after won fights. Don\'t let enemies scale.'
    });
  }
  if (teamScaling === 'late' && minutes < 25 && !match.win) {
    issues.push({
      type: 'game_length',
      severity: 'medium',
      message: `Scaling comp but game ended at ${Math.round(minutes)} minutes`,
      suggestion: 'Play safer early. Farm under tower. Give up CS rather than dying.'
    });
  }
  
  // 7. Role-Specific Analysis
  if (role === 'jungle') {
    const objectives = match.objectives || {};
    if ((objectives.dragons || 0) < 2 && minutes > 25) {
      issues.push({
        type: 'objectives',
        severity: 'high',
        message: `Only ${objectives.dragons || 0} dragons secured`,
        suggestion: 'Track dragon spawns. Set up vision 1 minute before. Prioritize dragon over low-value ganks.'
      });
    }
    if ((objectives.heralds || 0) === 0 && minutes > 20) {
      issues.push({
        type: 'herald',
        severity: 'medium',
        message: 'No Rift Herald secured',
        suggestion: 'Herald spawns at 8:00. Take it for early tower gold.'
      });
    }
  }
  
  if (role === 'support' || role === 'utility') {
    if (visionPerMin < 1.5) {
      issues.push({
        type: 'support_vision',
        severity: 'high',
        message: `${visionPerMin.toFixed(1)} vision/min is critical for support`,
        suggestion: 'Use all ward charges on cooldown. Buy control wards. Clear enemy vision.'
      });
    }
  }
  
  // Calculate grade
  let score = 100;
  issues.forEach(i => {
    if (i.severity === 'high') score -= 15;
    else if (i.severity === 'medium') score -= 8;
    else score -= 3;
  });
  score += strengths.length * 5;
  score = Math.max(0, Math.min(100, score));
  
  let grade;
  if (score >= 90) grade = 'S+';
  else if (score >= 85) grade = 'S';
  else if (score >= 80) grade = 'S-';
  else if (score >= 75) grade = 'A+';
  else if (score >= 70) grade = 'A';
  else if (score >= 65) grade = 'A-';
  else if (score >= 60) grade = 'B+';
  else if (score >= 55) grade = 'B';
  else if (score >= 50) grade = 'B-';
  else if (score >= 45) grade = 'C+';
  else if (score >= 40) grade = 'C';
  else if (score >= 35) grade = 'C-';
  else if (score >= 30) grade = 'D';
  else grade = 'F';
  
  return {
    matchId: match.matchId,
    champion: match.champion,
    role: match.role,
    win: match.win,
    duration: Math.round(minutes),
    
    // Core metrics
    kda: `${match.kills}/${match.deaths}/${match.assists}`,
    kdaRatio: parseFloat(match.kda),
    cs: match.cs,
    csPerMin: parseFloat(match.csPerMin),
    missedCS,
    goldLost,
    
    // Vision
    visionScore: match.visionScore,
    visionPerMin: parseFloat(visionPerMin.toFixed(2)),
    controlWards: match.controlWards,
    
    // Combat
    damage: match.totalDamage,
    damagePerMin: match.damagePerMin,
    killParticipation: match.killParticipation,
    
    // Analysis
    teamScaling,
    playerScaling,
    issues,
    strengths,
    suggestions,
    grade,
    score
  };
}

function analyzeHistory(matches, playerRank = 'gold') {
  if (!matches || matches.length === 0) {
    return null;
  }
  
  const analyses = matches.map(m => analyzeMatch(m, playerRank));
  const totalGames = analyses.length;
  const wins = analyses.filter(a => a.win).length;
  
  // Aggregate stats
  const avgCS = analyses.reduce((sum, a) => sum + a.csPerMin, 0) / totalGames;
  const avgKDA = analyses.reduce((sum, a) => sum + a.kdaRatio, 0) / totalGames;
  const avgVision = analyses.reduce((sum, a) => sum + a.visionPerMin, 0) / totalGames;
  const avgKP = analyses.reduce((sum, a) => sum + a.killParticipation, 0) / totalGames;
  
  // Recurring issues
  const issueCounts = {};
  analyses.forEach(a => {
    a.issues.forEach(i => {
      issueCounts[i.type] = (issueCounts[i.type] || 0) + 1;
    });
  });
  
  const recurringIssues = Object.entries(issueCounts)
    .filter(([_, count]) => count >= totalGames * 0.3)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([type, count]) => ({
      type,
      frequency: Math.round((count / totalGames) * 100),
      games: count
    }));
  
  // Role stats
  const roleStats = {};
  analyses.forEach(a => {
    const role = a.role || 'UNKNOWN';
    if (!roleStats[role]) {
      roleStats[role] = { games: 0, wins: 0 };
    }
    roleStats[role].games++;
    if (a.win) roleStats[role].wins++;
  });
  Object.keys(roleStats).forEach(role => {
    roleStats[role].winRate = Math.round((roleStats[role].wins / roleStats[role].games) * 100);
  });
  
  // Champion stats
  const champStats = {};
  analyses.forEach(a => {
    if (!champStats[a.champion]) {
      champStats[a.champion] = { games: 0, wins: 0, totalCS: 0, totalKDA: 0 };
    }
    champStats[a.champion].games++;
    if (a.win) champStats[a.champion].wins++;
    champStats[a.champion].totalCS += a.csPerMin;
    champStats[a.champion].totalKDA += a.kdaRatio;
  });
  Object.keys(champStats).forEach(champ => {
    const c = champStats[champ];
    c.winRate = Math.round((c.wins / c.games) * 100);
    c.avgCS = (c.totalCS / c.games).toFixed(1);
    c.avgKDA = (c.totalKDA / c.games).toFixed(2);
    delete c.totalCS;
    delete c.totalKDA;
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
      killParticipation: Math.round(avgKP)
    },
    recurringIssues,
    roleStats,
    champStats,
    matches: analyses,
    topPriorities: recurringIssues.slice(0, 3).map(i => i.type)
  };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { matches, playerRank } = req.body;

    if (!matches || !Array.isArray(matches)) {
      return res.status(400).json({ error: 'Missing matches array' });
    }

    const analysis = analyzeHistory(matches, playerRank || 'gold');
    
    return res.status(200).json(analysis);

  } catch (error) {
    console.error('Analysis error:', error);
    return res.status(500).json({ error: 'Analysis failed', details: error.message });
  }
}
