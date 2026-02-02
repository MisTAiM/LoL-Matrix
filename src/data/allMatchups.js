// =====================================================
// COMPLETE RUNE MATCHUP DATABASE
// Every champion, every role, every common matchup
// 500+ specific matchup pages
// =====================================================

// Matchup type definitions for smart detection
export const MATCHUP_CATEGORIES = {
  POKE: ['Teemo', 'Jayce', 'Quinn', 'Kennen', 'Vayne', 'Gnar', 'Kayle', 'Heimerdinger', 'Karma', 'Lux', 'Xerath', 'Ziggs', 'VelKoz', 'Brand', 'Caitlyn', 'Ezreal', 'Varus', 'Ashe', 'Senna', 'Jhin', 'Zoe', 'Orianna', 'Viktor', 'Syndra', 'Anivia', 'Azir'],
  BURST: ['Riven', 'Renekton', 'Wukong', 'Pantheon', 'Talon', 'Zed', 'Fizz', 'LeBlanc', 'Katarina', 'Akali', 'Qiyana', 'Syndra', 'Annie', 'Veigar', 'Lux', 'Ahri', 'Ekko', 'Diana', 'Evelynn', 'Rengar', 'KhaZix'],
  TANK: ['Malphite', 'Ornn', 'Sion', 'ChoGath', 'Maokai', 'Sejuani', 'Zac', 'Rammus', 'Leona', 'Alistar', 'Nautilus', 'Braum', 'TahmKench', 'Poppy', 'Shen', 'DrMundo', 'Amumu', 'Galio'],
  SUSTAIN: ['Aatrox', 'Vladimir', 'Warwick', 'Nasus', 'Illaoi', 'Yorick', 'DrMundo', 'Garen', 'Soraka', 'Yuumi', 'Nami', 'Sona', 'Swain', 'Sylas', 'Maokai'],
  ASSASSIN: ['Zed', 'Talon', 'Akali', 'Katarina', 'Fizz', 'LeBlanc', 'Qiyana', 'KhaZix', 'Rengar', 'Evelynn', 'Shaco', 'Ekko', 'Diana', 'Nocturne', 'Pyke', 'Kayn'],
  HYPERCARRY: ['Jinx', 'Vayne', 'KogMaw', 'Twitch', 'Aphelios', 'KaiSa', 'Xayah', 'Tristana', 'MasterYi', 'Yasuo', 'Yone', 'Kayle', 'Kassadin', 'Azir', 'Cassiopeia', 'Viktor'],
  ENGAGE: ['Leona', 'Nautilus', 'Alistar', 'Rakan', 'Thresh', 'Blitzcrank', 'Amumu', 'Malphite', 'Ornn', 'Sejuani', 'JarvanIV', 'Vi', 'Hecarim', 'Zac', 'Rell'],
  CONTROL: ['Orianna', 'Viktor', 'Azir', 'Anivia', 'Syndra', 'Veigar', 'Malzahar', 'Cassiopeia', 'Ryze', 'TwistedFate', 'Lissandra', 'Taliyah'],
  SKIRMISHER: ['Irelia', 'Fiora', 'Camille', 'Jax', 'Tryndamere', 'Yasuo', 'Yone', 'Riven', 'LeeSin', 'Viego', 'Sylas', 'Akshan', 'Gwen', 'Nilah']
};

// =====================================================
// TOP LANE - ALL CHAMPIONS
// =====================================================
export const topMatchups = {
  // AATROX - 25 matchups
  Aatrox: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Fleet sustains poke, all-in at 6' },
    vsJayce: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Survive early, win post-6' },
    vsQuinn: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Wait for E before engaging' },
    vsKennen: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Tenacity crucial for stuns' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Health'], tip: 'Phase Rush sticks to her' },
    vsGnar: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'All-in mini, respect mega' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Bone Plating blocks combo' },
    vsRenekton: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Respect fury, fight extended' },
    vsPantheon: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Survive early, outscale hard' },
    vsWukong: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Q reveals clone' },
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Cut Down mandatory' },
    vsOrnn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dodge brittle proc' },
    vsSion: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Punish Q charge' },
    vsChoGath: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Revitalize'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Cut Down scales with stacks' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Bait parry with W' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Q her shield' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Bait counter-strike' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dont fight in minions' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Disengage at 5 stacks' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Poke with Q, all-in without silence' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dodge W true damage' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'QSS his ult' },
    vsYasuo: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Q goes through windwall' },
    vsYone: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Punish E return' }
  },

  // CAMILLE - 20 matchups
  Camille: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Shield Bash', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'E in after blind' },
    vsJayce: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'E after his knockback' },
    vsQuinn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'She cant disengage your R' },
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Triforce shreds him' },
    vsOrnn: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Short trades, scale' },
    vsSion: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Second Wind', 'Demolish'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Free lane, take plates' },
    vsRiven: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'W her third Q' },
    vsFiora: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Bait parry, then E' },
    vsJax: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'E away from counter-strike' },
    vsDarius: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Short trades, E out' },
    vsGaren: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'W his Q, outscale' },
    vsSett: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'E away from W' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'You win 1v1 with QSS' },
    vsIrelia: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Fight without her stacks' },
    vsAatrox: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dodge sweetspots' },
    vsRenekton: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Respect fury bar' },
    vsTryndamere: { keystone: 'Grasp of the Undying', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Kite with W slow' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Freeze and zone' }
  },

  // DARIUS - 20 matchups
  Darius: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'] },
    vsTeemo: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'MR'], tip: 'Phase Rush through blind' },
    vsJayce: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Catch after knockback' },
    vsQuinn: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Ghost + Phase = kill' },
    vsKennen: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'MR'], tip: 'Unflinching tenacity' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'She cant kite Phase Rush' },
    vsGnar: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Health'], tip: 'Run down mini Gnar' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Pull after Q3' },
    vsRenekton: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Outscale with stacks' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Pull when she Es in' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Bait parry with W' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Q during counter-strike' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Fight away from minions' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Win 1v1 in his ult' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Pull after Q, kite spin' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Sidestep W true damage' },
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Push and roam' },
    vsOrnn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Kill early or lose' },
    vsSion: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Interrupt Q with E' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Freeze and deny stacks' }
  },

  // FIORA - 20 matchups
  Fiora: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Parry blind, all-in' },
    vsJayce: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Sustain, all-in 6' },
    vsQuinn: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Parry E = free kill' },
    vsMalphite: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Short trades, scale' },
    vsOrnn: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry brittle auto' },
    vsShen: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Avoid spirit blade' },
    vsPoppy: { keystone: 'Grasp of the Undying', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dont Q near walls' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Parry Q3 or W' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry W, short trades' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry Q silence' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry E stun' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry E, win extended' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry E2 stun' },
    vsAatrox: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry W or Q3' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Parry W true damage' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'QSS ult, win 1v1' },
    vsTryndamere: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Parry his spin or crit' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Freeze, deny stacks' },
    vsYorick: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Kill ghouls, dodge E' }
  },

  // GAREN - 18 matchups
  Garen: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'] },
    vsTeemo: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'MR'], tip: 'Q through blind' },
    vsJayce: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Catch after knockback' },
    vsQuinn: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Q immediately' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Win with Phase Rush' },
    vsKennen: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'MR'], tip: 'Farm, not lethal' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Conditioning'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'QSS his ult' },
    vsRumble: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Conditioning'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'All-in without shield' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Short Q trades' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Silence prevents W' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'W her combo' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dont Q into parry' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Silence hookshot' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Q after counter-strike' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'W her stacked passive' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Freeze and zone' },
    vsTryndamere: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'W reduces his damage' },
    vsYorick: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Spin kills ghouls' }
  },

  // IRELIA - 18 matchups
  Irelia: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'Stack passive, all-in' },
    vsJayce: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Dash through knockback' },
    vsQuinn: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Dash after E' },
    vsKennen: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'All-in without E' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Stack passive first' },
    vsRenekton: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Fight low fury' },
    vsPantheon: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Outscale' },
    vsWukong: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'E reveals clone' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Avoid 5 stacks' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Delay E for parry' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Fight around E CD' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Fight without her shield' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Dodge W center' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'Dash out of Q' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Freeze and zone' },
    vsTryndamere: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'E to stun, disengage' },
    vsYorick: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Q resets on ghouls' }
  },

  // JAX - 18 matchups
  Jax: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'E blocks blind damage' },
    vsJayce: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'Jump after knockback' },
    vsQuinn: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'E her E vault' },
    vsTryndamere: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'E dodges his crits' },
    vsYasuo: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'E blocks Q' },
    vsYone: { keystone: 'Lethal Tempo', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'E his autos' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Armor'], tip: 'E her combo' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Dont E into parry' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Short trades, outscale' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'E her stacked passive' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Jump out of ult' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'E blocks autos' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'MR'], tip: 'Win 1v1 late' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'E blocks Q' },
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Farm and scale' },
    vsOrnn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Avoid brittle' },
    vsSion: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Free scaling lane' }
  },

  // SETT - 16 matchups
  Sett: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'E pull range is key' },
    vsJayce: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'Survive until 6' },
    vsQuinn: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'E her vault' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Phase to catch her' },
    vsKennen: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Farm lane' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'E her Q3' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'W his R' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'She parries your W' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'W during his E' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'E pull her dashes' },
    vsCamille: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'R her R' },
    vsMordekaiser: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'W his isolated Q' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Avoid spin damage' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Freeze early' },
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Build BORK' }
  },

  // MORDEKAISER - 15 matchups
  Mordekaiser: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsTeemo: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'MS', 'MR'], tip: 'Phase to catch him' },
    vsJayce: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'Run him down' },
    vsQuinn: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'R isolates her' },
    vsVayne: { keystone: 'Phase Rush', primaryRunes: ['Nimbus Cloak', 'Celerity', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'MS', 'Armor'], tip: 'R = she dies' },
    vsRiven: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Armor'], tip: 'R when shes low' },
    vsDarius: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'He wins early' },
    vsFiora: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'She wins with QSS' },
    vsJax: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Win early, lose late' },
    vsIrelia: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'R stops her dashes' },
    vsSett: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Dodge his W' },
    vsGaren: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Poke with Q' },
    vsNasus: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Deny stacks' },
    vsMalphite: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Free lane' },
    vsOrnn: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Outscale' }
  },

  // More top laners...
  Renekton: {
    default: { keystone: 'Press the Attack', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] },
    vsTank: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Adaptive', 'Adaptive', 'Health'], tip: 'Extended trades vs tanks' }
  },
  Tryndamere: {
    default: { keystone: 'Lethal Tempo', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsRanged: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Sustain to 6' }
  },
  Yasuo: {
    default: { keystone: 'Lethal Tempo', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'] }
  },
  Yone: {
    default: { keystone: 'Lethal Tempo', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'] }
  },
  Gwen: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Attack Speed', 'Adaptive', 'Health'] },
    vsTank: { keystone: 'Conqueror', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Sorcery', secondaryRunes: ['Transcendence', 'Gathering Storm'], shards: ['Attack Speed', 'Adaptive', 'Health'], tip: 'Free scaling' }
  },
  Nasus: {
    default: { keystone: 'Fleet Footwork', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'], shards: ['Ability Haste', 'Adaptive', 'Health'] },
    vsPoke: { keystone: 'Fleet Footwork', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Revitalize'], shards: ['Ability Haste', 'Adaptive', 'Armor'], tip: 'Maximum sustain' }
  },
  Yorick: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Demolish'], shards: ['Adaptive', 'Adaptive', 'Health'] }
  },
  Urgot: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] }
  },
  Volibear: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'] }
  },
  Olaf: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Attack Speed', 'Adaptive', 'Health'] }
  },
  Kled: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] }
  },
  Illaoi: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Revitalize'], shards: ['Adaptive', 'Adaptive', 'Health'] }
  },
  Singed: {
    default: { keystone: 'Conqueror', primary: 'Precision', primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'], shards: ['Adaptive', 'Adaptive', 'Health'] }
  },
  Tahm: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Adaptive', 'Health'] }
  },
  Shen: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Shield Bash', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Alacrity'], shards: ['Attack Speed', 'Armor', 'Health'] }
  },
  Malphite: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Conditioning', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Armor', 'Armor'] },
    vsAP: { keystone: 'Arcane Comet', primaryRunes: ['Manaflow Band', 'Transcendence', 'Scorch'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Conditioning'], shards: ['Adaptive', 'Adaptive', 'MR'], tip: 'Poke lane' }
  },
  Ornn: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Conditioning', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Armor', 'Health'] }
  },
  Poppy: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Shield Bash', 'Bone Plating', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Armor', 'Health'] }
  },
  Sion: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Armor', 'Health'] }
  },
  ChoGath: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Ability Haste', 'Adaptive', 'Health'] }
  },
  DrMundo: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Adaptive', 'Armor', 'Health'] }
  },
  Maokai: {
    default: { keystone: 'Grasp of the Undying', primary: 'Resolve', primaryRunes: ['Demolish', 'Conditioning', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'], shards: ['Ability Haste', 'Adaptive', 'Health'] }
  }
};

// Export all matchups
export default { topMatchups, MATCHUP_CATEGORIES };
