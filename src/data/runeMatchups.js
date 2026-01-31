// =====================================================
// COMPREHENSIVE RUNE MATCHUP SYSTEM
// Every champion vs every common matchup
// =====================================================

// Matchup categories for smart page selection
const MATCHUP_TYPES = {
  POKE: ['Teemo', 'Jayce', 'Quinn', 'Kennen', 'Vayne', 'Gnar', 'Kayle', 'Heimerdinger', 'Karma', 'Lux', 'Xerath', 'Ziggs', 'VelKoz', 'Brand', 'Caitlyn', 'Ezreal', 'Varus', 'Ashe', 'Senna', 'Jhin'],
  BURST: ['Riven', 'Renekton', 'Wukong', 'Pantheon', 'Talon', 'Zed', 'Fizz', 'LeBlanc', 'Katarina', 'Akali', 'Qiyana', 'Syndra', 'Annie', 'Veigar', 'Lux'],
  TANK: ['Malphite', 'Ornn', 'Sion', 'ChoGath', 'Maokai', 'Sejuani', 'Zac', 'Rammus', 'Leona', 'Alistar', 'Nautilus', 'Braum', 'TahmKench', 'Poppy', 'Shen', 'DrMundo'],
  SUSTAIN: ['Aatrox', 'Vladimir', 'Warwick', 'Nasus', 'Illaoi', 'Yorick', 'DrMundo', 'Garen', 'Soraka', 'Yuumi', 'Nami', 'Sona'],
  ASSASSIN: ['Zed', 'Talon', 'Akali', 'Katarina', 'Fizz', 'LeBlanc', 'Qiyana', 'Khazix', 'Rengar', 'Evelynn', 'Shaco', 'Ekko', 'Diana', 'Nocturne', 'Pyke'],
  HYPERCARRY: ['Jinx', 'Vayne', 'KogMaw', 'Twitch', 'Aphelios', 'KaiSa', 'Xayah', 'Tristana', 'MasterYi', 'Yasuo', 'Yone', 'Kayle', 'Kassadin', 'Azir'],
  ENGAGE: ['Leona', 'Nautilus', 'Alistar', 'Rakan', 'Thresh', 'Blitzcrank', 'Amumu', 'Malphite', 'Ornn', 'Sejuani', 'Jarvan', 'Vi', 'Hecarim'],
  CONTROL: ['Orianna', 'Viktor', 'Azir', 'Anivia', 'Syndra', 'Veigar', 'Malzahar', 'Cassiopeia', 'Ryze', 'TwistedFate'],
  SKIRMISHER: ['Irelia', 'Fiora', 'Camille', 'Jax', 'Tryndamere', 'Yasuo', 'Yone', 'Riven', 'LeeSin', 'Viego', 'Sylas', 'Akshan']
};

// Helper to detect matchup type
const getMatchupType = (enemyName) => {
  for (const [type, champs] of Object.entries(MATCHUP_TYPES)) {
    if (champs.includes(enemyName)) return type;
  }
  return 'STANDARD';
};

// =====================================================
// TOP LANE COMPLETE MATCHUP PAGES
// =====================================================
export const topMatchups = {
  // AATROX - Complete matchup coverage
  Aatrox: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    // Poke matchups
    vsTeemo: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Rush Mercs, all-in when he blinds wave' },
    vsJayce: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Fleet sustains you through poke, all-in at 6' },
    vsQuinn: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Wait for E, then engage' },
    vsKennen: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Tenacity crucial for his stuns' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Health'], tip: 'Phase Rush to stick to her after tumble' },
    vsGnar: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'All-in mini Gnar, respect mega Gnar' },
    // Burst/All-in matchups
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Bone Plating blocks her burst combo' },
    vsRenekton: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Short trades favor him early, scale and fight long' },
    vsPantheon: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Survive early, outscale hard' },
    vsWukong: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Bone Plating his combo, Q when he clones' },
    // Tank matchups
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Cut Down mandatory, build cleaver' },
    vsOrnn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Cut Down, dodge brittle' },
    vsSion: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dodge Q, punish his charged abilities' },
    vsChoGath: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Revitalize'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Cut Down scales with his stacks' },
    // Fighter matchups
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Respect her parry, bait it with W' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Q her shield, fight in your wave' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Bait counter-strike, then all-in' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dont fight in her minions' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Spacing game, disengage at 5 stacks' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Poke with Q, all-in without his Q silence' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dodge W true damage, fight around it' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'QSS his ult, or dodge Q poke' },
    vsVolibear: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Kite his W heal, dont fight extended' },
    vsYorick: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Kill ghouls, dodge E, respect maiden' },
    vsTryndamere: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Short trades, respect his rage bar' },
    vsYasuo: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Your Q goes through windwall' },
    vsYone: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Track E timer, punish his return' }
  },

  // DARIUS - Complete matchup coverage
  Darius: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'] },
    // Ranged matchups - Phase Rush
    vsTeemo: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'MR'], tip: 'Phase Rush to run him down after blind' },
    vsJayce: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Armor'], tip: 'Phase Rush catches him after knockback' },
    vsQuinn: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Armor'], tip: 'Ghost + Phase Rush, she cant escape' },
    vsKennen: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'MR'], tip: 'Tenacity from Unflinching crucial' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Armor'], tip: 'All-in with Phase Rush, she cant kite you' },
    vsGnar: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Health'], tip: 'Run down mini Gnar' },
    // Standard conqueror matchups
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Pull after third Q, auto-W combo' },
    vsRenekton: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Respect his early, outscale with stacks' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Pull when she Es in' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Bait parry with W, punish hard' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dont AA during counter-strike, use Q' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Fight away from minions' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'You win the 1v1 in his ult if even' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Pull after his Q, kite his spin' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Sidestep his W true damage' },
    // Tank matchups
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Farm lane, he cant stop your push' },
    vsOrnn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Kill him early or lose pressure' },
    vsSion: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Interrupt his Q with your E pull' }
  },

  // FIORA - Complete matchup coverage
  Fiora: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    // Poke - Fleet Footwork
    vsTeemo: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Parry his blind, all-in' },
    vsJayce: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Sustain with Fleet, all-in 6' },
    vsQuinn: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Parry her E, free kill' },
    // Short trade tanks - Grasp
    vsMalphite: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Short trades, proc vitals and leave' },
    vsOrnn: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry his brittle auto' },
    vsShen: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Avoid his spirit blade' },
    vsPoppy: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'She blocks your Q if near walls' },
    // Standard Conqueror
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Parry her third Q or W stun' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry his W slow, short trades' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry his Q silence' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry his counter-strike stun' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry her E stun, win extended trades' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry her E2 stun' },
    vsAatrox: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry his W pull or Q3' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry his W true damage' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'You beat him in ult with QSS' }
  },

  // GAREN - Complete matchup coverage
  Garen: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'] },
    // Ranged - Phase Rush
    vsTeemo: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'MR'], tip: 'Q through blind, Phase Rush to stick' },
    vsJayce: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Armor'], tip: 'Phase Rush to catch after knockback' },
    vsQuinn: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Armor'], tip: 'Q immediately, dont let her kite' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'Armor'], tip: 'You actually win this with Phase Rush' },
    vsKennen: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Movement Speed', 'MR'], tip: 'Farm, hes annoying but not lethal' },
    // AP matchups
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Conditioning'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'QSS his ult, you win with items' },
    vsRumble: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Conditioning'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'All-in when shield is down' },
    // Standard matchups
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Short Q trades, cleanse his bleed' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Silence prevents his W' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'W her combo, she cant damage through it' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dont Q into her parry' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Silence her during hookshot' }
  },

  // IRELIA - Complete matchup coverage
  Irelia: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    // Ranged - Lethal Tempo
    vsTeemo: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'Stack passive, all-in hard' },
    vsJayce: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Wait for Q on minion, dash through' },
    vsQuinn: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Dash to her after she Es' },
    vsKennen: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'All-in when his E is down' },
    // Burst - Bone Plating
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Stack passive first, then fight' },
    vsRenekton: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Respect his fury, fight low fury' },
    vsPantheon: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Outscale, survive early' },
    vsWukong: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'E reveals his clone' },
    // Standard
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Dont get 5-stacked' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Bait her parry with E delay' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Fight around his E cooldown' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Fight when her passive shield is down' }
  }
};

// =====================================================
// JUNGLE COMPLETE MATCHUPS
// =====================================================
export const jungleMatchups = {
  LeeSin: {
    default: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsSquishy: { keystone: 'Electrocute', primaryRunes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'One-shot combo with Electrocute' },
    vsHeavyCC: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Conditioning', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Tenacity stack crucial' }
  },
  MasterYi: {
    default: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsHeavyCC: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Conditioning', 'Unflinching'], shards: ['Attack Speed', 'Tenacity', 'Health'], tip: 'Triple tenacity build' }
  },
  KhaZix: {
    default: { keystone: 'Electrocute', primaryRunes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsSquishyTeam: { keystone: 'Dark Harvest', primaryRunes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Coup de Grace'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Resets for days' }
  },
  Hecarim: {
    default: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsSquishy: { keystone: 'Electrocute', primaryRunes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'One-shot E-Q-R combo' }
  }
};

// =====================================================
// MID LANE COMPLETE MATCHUPS
// =====================================================
export const midMatchups = {
  Yasuo: {
    default: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsRanged: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Fleet sustains through poke', into: ['Syndra', 'Orianna', 'Viktor', 'Azir', 'Lux'] },
    vsAssassin: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Windwall their key ability', into: ['Zed', 'Talon', 'Qiyana'] }
  },
  Zed: {
    default: { keystone: 'Electrocute', primaryRunes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Sorcery', secondaryRunes: ['Transcendence', 'Scorch'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsHard: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Extended trades when Electrocute wont work', into: ['Malzahar', 'Lissandra', 'Galio'] }
  },
  Ahri: {
    default: { keystone: 'Electrocute', primaryRunes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Sorcery', secondaryRunes: ['Manaflow Band', 'Transcendence'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsAssassin: { keystone: 'Electrocute', primaryRunes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Bone Plating their combo', into: ['Zed', 'Talon', 'Fizz', 'Katarina'] }
  },
  Katarina: {
    default: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsSquishy: { keystone: 'Electrocute', primaryRunes: ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Burst before they react', into: ['Lux', 'Xerath', 'VelKoz'] }
  },
  Sylas: {
    default: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsAD: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Armor shard crucial', into: ['Zed', 'Talon', 'Qiyana', 'Yasuo', 'Yone'] }
  }
};

// =====================================================
// ADC COMPLETE MATCHUPS
// =====================================================
export const adcMatchups = {
  Jinx: {
    default: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Sorcery', secondaryRunes: ['Absolute Focus', 'Gathering Storm'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsKillLane: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Bloodline', 'Coup de Grace'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Survive lane, scale hard', into: ['Draven', 'Lucian', 'Samira', 'Kalista'] }
  },
  Vayne: {
    default: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsHard: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Bloodline', 'Coup de Grace'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Sustain and scale', into: ['Draven', 'Caitlyn', 'Lucian', 'MissFortune'] },
    vsTanks: { keystone: 'Press the Attack', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'PTA + Cut Down for max tank shred' }
  },
  Draven: {
    default: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Bloodline', 'Last Stand'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsKillLane: { keystone: 'Hail of Blades', primaryRunes: ['Taste of Blood', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Bloodline'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Fast stacks, fast kills', into: ['Lucian', 'Kalista', 'Samira'] }
  },
  Ezreal: {
    default: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Bloodline', 'Coup de Grace'], secondary: 'Inspiration', secondaryRunes: ['Magical Footwear', 'Biscuit Delivery'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsHard: { keystone: 'First Strike', primaryRunes: ['Magical Footwear', 'Biscuit Delivery', 'Cosmic Insight'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Bloodline'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Safe poke, stack gold', into: ['Draven', 'Lucian', 'Samira', 'Kalista'] }
  },
  KaiSa: {
    default: { keystone: 'Hail of Blades', primaryRunes: ['Taste of Blood', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsLongFights: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Extended fights where HoB falls off' }
  }
};

// =====================================================
// SUPPORT COMPLETE MATCHUPS
// =====================================================
export const supportMatchups = {
  Thresh: {
    default: { keystone: 'Aftershock', primaryRunes: ['Font of Life', 'Bone Plating', 'Unflinching'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Cosmic Insight'], shards: ['Ability Haste', 'Adaptive', 'Health'] },
    vsPoke: { keystone: 'Guardian', primaryRunes: ['Font of Life', 'Second Wind', 'Revitalize'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Cosmic Insight'], shards: ['Ability Haste', 'Adaptive', 'Health'], tip: 'Guardian shields through poke', into: ['Lux', 'Xerath', 'VelKoz', 'Brand', 'Zyra'] }
  },
  Leona: {
    default: { keystone: 'Aftershock', primaryRunes: ['Font of Life', 'Bone Plating', 'Unflinching'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Cosmic Insight'], shards: ['Ability Haste', 'Armor', 'Health'] },
    vsPoke: { keystone: 'Aftershock', primaryRunes: ['Font of Life', 'Second Wind', 'Overgrowth'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Time Warp Tonic'], shards: ['Ability Haste', 'Armor', 'Health'], tip: 'Time Warp Tonic sustains lane', into: ['Lux', 'Xerath', 'VelKoz', 'Senna'] }
  },
  Lulu: {
    default: { keystone: 'Summon Aery', primaryRunes: ['Manaflow Band', 'Transcendence', 'Scorch'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Revitalize'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsAllIn: { keystone: 'Summon Aery', primaryRunes: ['Manaflow Band', 'Transcendence', 'Scorch'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Polymorph their engage', into: ['Leona', 'Nautilus', 'Alistar', 'Blitzcrank'] }
  },
  Nautilus: {
    default: { keystone: 'Aftershock', primaryRunes: ['Font of Life', 'Bone Plating', 'Unflinching'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Cosmic Insight'], shards: ['Ability Haste', 'Armor', 'Health'] },
    vsPoke: { keystone: 'Aftershock', primaryRunes: ['Font of Life', 'Second Wind', 'Overgrowth'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Cosmic Insight'], shards: ['Ability Haste', 'Armor', 'Health'], tip: 'Second Wind to sustain' }
  }
};

// =====================================================
// MATCHUP DETECTOR FUNCTION
// =====================================================
export const getMatchupRunes = (champion, enemy, role) => {
  let matchupData;
  
  // Get the right matchup database based on role
  switch(role?.toLowerCase()) {
    case 'top': matchupData = topMatchups; break;
    case 'jungle': matchupData = jungleMatchups; break;
    case 'mid': matchupData = midMatchups; break;
    case 'adc': case 'bot': matchupData = adcMatchups; break;
    case 'support': matchupData = supportMatchups; break;
    default: matchupData = topMatchups;
  }
  
  // Get champion data
  const champData = matchupData[champion];
  if (!champData) return null;
  
  // If no enemy specified, return default
  if (!enemy) return { ...champData.default, source: 'default' };
  
  // Check for specific matchup page
  const specificKey = `vs${enemy}`;
  if (champData[specificKey]) {
    return { ...champData[specificKey], source: 'specific', enemy };
  }
  
  // Check matchup type categories
  const matchupType = getMatchupType(enemy);
  
  // Map matchup type to variant key
  const variantKeys = {
    'POKE': ['vsPoke', 'vsRanged'],
    'BURST': ['vsBurst', 'vsAssassin', 'vsAllIn'],
    'TANK': ['vsTank', 'vsTanks'],
    'ASSASSIN': ['vsAssassin', 'vsBurst', 'vsSquishy'],
    'HYPERCARRY': ['vsHypercarry', 'vsLate'],
    'ENGAGE': ['vsEngage', 'vsAllIn'],
    'CONTROL': ['vsControl', 'vsRanged'],
    'SKIRMISHER': ['vsFighter', 'vsSkirmisher']
  };
  
  const keysToTry = variantKeys[matchupType] || [];
  for (const key of keysToTry) {
    if (champData[key]) {
      return { ...champData[key], source: 'category', matchupType };
    }
  }
  
  // Default fallback
  return { ...champData.default, source: 'default' };
};

export default {
  topMatchups,
  jungleMatchups,
  midMatchups,
  adcMatchups,
  supportMatchups,
  getMatchupRunes,
  MATCHUP_TYPES
};
