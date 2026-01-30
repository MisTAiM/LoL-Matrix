// Master Guide Generator - Generates guides for ALL 172 champions
// Combines manual guides with dynamic generation for complete coverage

import { championTraits } from './matchupEngine';

// Import manual detailed guides
import { championGuides as topGuides1 } from './guides/topGuides1';
import { championGuides2 as topGuides2 } from './guides/topGuides2';
import { midGuides } from './guides/midGuides';
import { adcGuides, supportGuides } from './guides/adcSupportGuides';

// Combine all manual guides
const manualGuides = {
  ...topGuides1,
  ...topGuides2,
  ...midGuides,
  ...adcGuides,
  ...supportGuides
};

// Role-specific templates for dynamic generation
const roleTemplates = {
  Top: {
    summonerSpells: ["Flash", "Teleport"],
    starterItems: ["Doran's Blade", "Health Potion"],
    boots: ["Plated Steelcaps", "Mercury's Treads"],
    lanePhase: {
      early: "Focus on farming and short trades. Manage wave to avoid ganks. Trade when enemy uses key abilities.",
      mid: "Look for roams with TP or push for plates. Coordinate with jungler for dives if ahead."
    },
    teamfighting: "Play around your strengths - engage if you're a tank, split push if you're a duelist, or peel for carries if needed."
  },
  Jungle: {
    summonerSpells: ["Flash", "Smite"],
    starterItems: ["Gustwalker Hatchling"],
    boots: ["Plated Steelcaps", "Mercury's Treads", "Ionian Boots of Lucidity"],
    lanePhase: {
      early: "Full clear or 3-camp into gank depending on champion. Track enemy jungler. Secure crabs.",
      mid: "Contest objectives. Gank winning lanes. Invade if stronger. Control vision around dragon/baron."
    },
    teamfighting: "Engage for your team if you're a tank, assassinate carries if you're a diver, or peel if needed."
  },
  Mid: {
    summonerSpells: ["Flash", "Ignite"],
    starterItems: ["Doran's Ring", "Health Potion x2"],
    boots: ["Sorcerer's Shoes", "Mercury's Treads"],
    lanePhase: {
      early: "Farm safely, look for poke when enemy goes for CS. Respect enemy's kill pressure at level 6.",
      mid: "Shove and roam. Help jungler at objectives. Your roams can snowball side lanes."
    },
    teamfighting: "Position safely in backline for mages, or look for flanks if you're an assassin. Prioritize high-value targets."
  },
  ADC: {
    summonerSpells: ["Flash", "Heal"],
    starterItems: ["Doran's Blade", "Health Potion"],
    boots: ["Berserker's Greaves"],
    lanePhase: {
      early: "Focus on farming. Trade when support engages. Position safely to avoid hooks/engages.",
      mid: "Group with team for objectives. Stay near your support or peel. Farm side waves safely."
    },
    teamfighting: "Stay in backline. Attack the closest safe target. Kite backwards. Don't greed for kills. Positioning > damage."
  },
  Support: {
    summonerSpells: ["Flash", "Ignite"],
    starterItems: ["Relic Shield", "Health Potion x2"],
    boots: ["Ionian Boots of Lucidity", "Mercury's Treads"],
    lanePhase: {
      early: "Control bushes. Look for engages or protect your ADC. Ward river and tribush.",
      mid: "Roam mid if lane is pushed. Control vision around objectives. Stick with your carry."
    },
    teamfighting: "Peel for carries if you're an enchanter, engage if you're a tank. Use abilities to protect or lockdown."
  }
};

// Damage type to item mapping
const damageTypeItems = {
  physical: {
    core: ["Eclipse", "Black Cleaver", "Death's Dance"],
    situational: ["Maw of Malmortius", "Guardian Angel", "Serylda's Grudge", "Sterak's Gage"]
  },
  magic: {
    core: ["Luden's Tempest", "Shadowflame", "Zhonya's Hourglass"],
    situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Morellonomicon"]
  },
  mixed: {
    core: ["Trinity Force", "Blade of the Ruined King", "Wit's End"],
    situational: ["Death's Dance", "Maw of Malmortius", "Guardian Angel", "Sterak's Gage"]
  }
};

// Playstyle to runes mapping
const playstyleRunes = {
  'assassin': { keystone: "Electrocute", primary: "Domination", secondary: "Precision" },
  'burst': { keystone: "Electrocute", primary: "Domination", secondary: "Sorcery" },
  'dps': { keystone: "Lethal Tempo", primary: "Precision", secondary: "Resolve" },
  'tank': { keystone: "Grasp of the Undying", primary: "Resolve", secondary: "Precision" },
  'drain tank': { keystone: "Conqueror", primary: "Precision", secondary: "Resolve" },
  'poke': { keystone: "Arcane Comet", primary: "Sorcery", secondary: "Inspiration" },
  'enchanter': { keystone: "Summon Aery", primary: "Sorcery", secondary: "Resolve" },
  'engage': { keystone: "Aftershock", primary: "Resolve", secondary: "Hextech" },
  'scaling': { keystone: "Conqueror", primary: "Precision", secondary: "Sorcery" },
  'default': { keystone: "Conqueror", primary: "Precision", secondary: "Resolve" }
};

// Generate combos based on champion traits
const generateCombos = (champName, traits) => {
  const combos = [];
  
  if (traits.mobility >= 4) {
    combos.push({
      name: "Engage",
      keys: "Gap closer → AA → Main damage ability",
      description: `Use your mobility to engage, auto attack, then use your primary damage ability.`
    });
  }
  
  if (traits.burst >= 4) {
    combos.push({
      name: "Burst Combo",
      keys: "All abilities in quick succession",
      description: `Unload all your abilities quickly to burst down targets before they can react.`
    });
  }
  
  if (traits.cc >= 3) {
    combos.push({
      name: "CC Chain",
      keys: "CC ability → Follow-up damage",
      description: `Land your CC first, then follow up with damage while they're locked down.`
    });
  }
  
  if (traits.sustain >= 4) {
    combos.push({
      name: "Extended Trade",
      keys: "Trade → Sustain → Trade again",
      description: `Take short trades, heal up with your sustain, then trade again. You win long fights.`
    });
  }
  
  // Default combo
  combos.push({
    name: "Basic Trade",
    keys: "Poke ability → Auto attack → Disengage",
    description: `Standard trading pattern. Poke, auto, back off before they can trade back.`
  });
  
  return combos;
};

// Generate power spikes based on traits
const generatePowerSpikes = (champName, traits) => {
  const spikes = [];
  
  if (traits.earlygame >= 4) {
    spikes.push({
      time: "Level 1-3",
      description: "Strong early game. Look for aggressive trades and potential kills."
    });
  }
  
  spikes.push({
    time: "Level 6",
    description: "Ultimate unlocked. Significant power increase for fights and all-ins."
  });
  
  spikes.push({
    time: "1 Item",
    description: "First item completion. Your core gameplay pattern is now online."
  });
  
  if (traits.lategame >= 4) {
    spikes.push({
      time: "3+ Items",
      description: "You scale very well. At this point you're at your strongest."
    });
  }
  
  if (traits.lategame <= 2) {
    spikes.push({
      time: "Mid Game (15-25 min)",
      description: "Your peak power. Look to force fights and close out the game."
    });
  }
  
  return spikes;
};

// Determine role from champion data
const determineRole = (champName, traits) => {
  const jungleChamps = ['Amumu', 'BelVeth', 'Briar', 'Diana', 'Ekko', 'Elise', 'Evelynn', 'Fiddlesticks', 
    'Gragas', 'Graves', 'Hecarim', 'Ivern', 'JarvanIV', 'Karthus', 'Kayn', 'KhaZix', 'Kindred', 
    'LeeSin', 'Lillia', 'MasterYi', 'Nidalee', 'Nocturne', 'Nunu', 'Poppy', 'Rammus', 'RekSai', 
    'Rengar', 'Sejuani', 'Shaco', 'Shyvana', 'Skarner', 'Taliyah', 'Trundle', 'Udyr', 'Vi', 
    'Viego', 'Warwick', 'XinZhao', 'Zac'];
  
  const midChamps = ['Ahri', 'Akali', 'Akshan', 'Anivia', 'Annie', 'AurelionSol', 'Aurora', 'Azir', 
    'Cassiopeia', 'Corki', 'Ekko', 'Fizz', 'Galio', 'Heimerdinger', 'Hwei', 'Kassadin', 'Katarina', 
    'LeBlanc', 'Lissandra', 'Lux', 'Malzahar', 'Naafiri', 'Neeko', 'Orianna', 'Pantheon', 'Qiyana', 
    'Ryze', 'Sylas', 'Syndra', 'Talon', 'TwistedFate', 'Veigar', 'VelKoz', 'Vex', 'Viktor', 
    'Vladimir', 'Xerath', 'Yasuo', 'Yone', 'Zed', 'Ziggs', 'Zoe'];
  
  const adcChamps = ['Aphelios', 'Ashe', 'Caitlyn', 'Draven', 'Ezreal', 'Jhin', 'Jinx', 'KaiSa', 
    'Kalista', 'KogMaw', 'Lucian', 'MissFortune', 'Nilah', 'Samira', 'Sivir', 'Smolder', 
    'Tristana', 'Twitch', 'Varus', 'Vayne', 'Xayah', 'Zeri'];
  
  const supportChamps = ['Alistar', 'Bard', 'Blitzcrank', 'Brand', 'Braum', 'Janna', 'Karma', 
    'Leona', 'Lulu', 'Lux', 'Maokai', 'Milio', 'Morgana', 'Nami', 'Nautilus', 'Pyke', 'Rakan', 
    'Rell', 'Renata', 'Senna', 'Seraphine', 'Sona', 'Soraka', 'Swain', 'TahmKench', 'Taric', 
    'Thresh', 'VelKoz', 'Xerath', 'Yuumi', 'Zyra'];
  
  if (jungleChamps.includes(champName)) return 'Jungle';
  if (midChamps.includes(champName)) return 'Mid';
  if (adcChamps.includes(champName)) return 'ADC';
  if (supportChamps.includes(champName)) return 'Support';
  return 'Top';
};

// Generate a complete guide for any champion
const generateGuide = (champName, traits) => {
  const role = determineRole(champName, traits);
  const template = roleTemplates[role];
  const dmgType = traits.damage || 'physical';
  const items = damageTypeItems[dmgType] || damageTypeItems.physical;
  
  // Determine playstyle for runes
  let playstyle = traits.playstyle || 'default';
  if (traits.burst >= 4 && traits.tankiness <= 2) playstyle = 'assassin';
  else if (traits.tankiness >= 4) playstyle = 'tank';
  else if (traits.sustain >= 4) playstyle = 'drain tank';
  else if (traits.dps >= 4) playstyle = 'dps';
  
  const runeSet = playstyleRunes[playstyle] || playstyleRunes.default;
  
  // Build strengths from traits
  const strengths = [];
  if (traits.sustain >= 4) strengths.push("High sustain");
  if (traits.mobility >= 4) strengths.push("Very mobile");
  if (traits.cc >= 4) strengths.push("Strong crowd control");
  if (traits.burst >= 4) strengths.push("High burst damage");
  if (traits.dps >= 4) strengths.push("Excellent sustained DPS");
  if (traits.tankiness >= 4) strengths.push("Very tanky");
  if (traits.earlygame >= 4) strengths.push("Strong early game");
  if (traits.lategame >= 4) strengths.push("Scales well into late game");
  if (strengths.length < 3) strengths.push("Versatile kit", "Good teamfight presence");
  
  // Build weaknesses from traits
  const weaknesses = [];
  if (traits.sustain <= 2) weaknesses.push("Low sustain");
  if (traits.mobility <= 2) weaknesses.push("Immobile / easy to kite");
  if (traits.cc <= 1) weaknesses.push("Limited crowd control");
  if (traits.tankiness <= 2) weaknesses.push("Squishy");
  if (traits.earlygame <= 2) weaknesses.push("Weak early game");
  if (traits.lategame <= 2) weaknesses.push("Falls off late game");
  if (weaknesses.length < 3) weaknesses.push("Skill dependent", "Positioning matters");
  
  // Difficulty based on traits
  let difficulty = "Medium";
  if (traits.difficulty === 'easy' || (traits.mobility <= 2 && traits.cc <= 2)) difficulty = "Easy";
  if (traits.difficulty === 'hard' || traits.mobility >= 5 || (traits.burst >= 4 && traits.tankiness <= 2)) difficulty = "Hard";
  
  return {
    difficulty,
    role,
    damageType: dmgType.charAt(0).toUpperCase() + dmgType.slice(1),
    playstyle: traits.playstyle || `${role} ${dmgType === 'magic' ? 'Mage' : 'Fighter'}`,
    description: `${champName} is a ${difficulty.toLowerCase()} difficulty ${role} champion who excels at ${traits.goodInto?.[0] || 'skirmishing'}. ${traits.keyAbility ? `Their key ability is ${traits.keyAbility}.` : ''} Play around your ${traits.earlygame >= 4 ? 'strong early game' : traits.lategame >= 4 ? 'scaling' : 'power spikes'} to maximize effectiveness.`,
    strengths: strengths.slice(0, 5),
    weaknesses: weaknesses.slice(0, 5),
    summonerSpells: template.summonerSpells,
    skillOrder: {
      order: "Varies by game",
      explanation: "Max your primary damage ability first, then your secondary ability, with ultimate whenever possible."
    },
    combos: generateCombos(champName, traits),
    powerSpikes: generatePowerSpikes(champName, traits),
    itemBuild: {
      starter: template.starterItems,
      core: items.core,
      situational: items.situational,
      boots: template.boots
    },
    runes: {
      primary: runeSet.primary,
      keystone: runeSet.keystone,
      primaryRunes: ["Standard runes for " + runeSet.primary],
      secondary: runeSet.secondary,
      secondaryRunes: ["Flex runes based on matchup"],
      statShards: ["Adaptive Force", "Adaptive Force", "Health/Armor/MR"]
    },
    lanePhase: template.lanePhase,
    teamfighting: template.teamfighting,
    matchupTips: {
      hard: traits.weakTo ? `Watch out for: ${traits.weakTo.join(', ')}. They counter your kit.` : "Respect champions who counter your playstyle.",
      easy: traits.strongVs ? `You're strong against: ${traits.strongVs.join(', ')}.` : "Look for favorable matchups in your role.",
      general: traits.counters ? `Your main counters are: ${traits.counters.slice(0, 2).join(', ')}.` : "Play around your strengths and avoid unfavorable fights."
    }
  };
};

// Main export - get guide for any champion
export const getChampionGuide = (champName) => {
  // First check if we have a detailed manual guide
  if (manualGuides[champName]) {
    return manualGuides[champName];
  }
  
  // Otherwise generate one from traits
  const traits = championTraits[champName];
  if (traits) {
    return generateGuide(champName, traits);
  }
  
  // Fallback for unknown champions
  return null;
};

// Get all available guides
export const getAllGuides = () => {
  const allGuides = { ...manualGuides };
  
  // Add generated guides for champions without manual ones
  Object.keys(championTraits).forEach(champName => {
    if (!allGuides[champName]) {
      allGuides[champName] = generateGuide(champName, championTraits[champName]);
    }
  });
  
  return allGuides;
};

// Get list of champions with guides
export const getGuidedChampions = () => {
  return Object.keys(getAllGuides()).sort();
};

// Stats
export const guideStats = {
  manualGuides: Object.keys(manualGuides).length,
  totalChampions: Object.keys(championTraits).length,
  get totalGuides() {
    return Object.keys(getAllGuides()).length;
  }
};

export default {
  getChampionGuide,
  getAllGuides,
  getGuidedChampions,
  guideStats
};
