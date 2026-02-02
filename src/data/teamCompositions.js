// =====================================================
// TEAM COMPOSITION SYSTEM - WORLD CLASS
// Complete team comp strategies with item builds
// Includes: Dive, Poke, Tank, Engage, Splitpush, Pick, Protect
// Patch 26.02 - February 2026
// =====================================================

// =====================================================
// TEAM COMPOSITION TYPES
// =====================================================
export const TEAM_COMP_TYPES = {
  DIVE: {
    id: 'DIVE',
    name: 'Dive Composition',
    icon: '🎯',
    color: '#ef4444',
    description: 'Focus on diving enemy backline to eliminate carries. High burst, mobility, and CC.',
    strategy: 'Coordinate to dive enemy carries simultaneously. Assassins/divers go in together for burst. Tank/support engages, carries die.',
    winCondition: 'Kill enemy ADC/Mid before they output damage. Win 5v4 after picks.',
    strengths: ['Quick objective takes after fight wins', 'Snowball potential', 'Punishes immobile carries', 'Great at tower dives'],
    weaknesses: ['Falls apart if dive fails', 'Weak to disengage/peel', 'Requires coordination', 'Weak if behind'],
    counters: ['Disengage comps (Janna, Gragas)', 'Heavy peel supports', 'Exhaust', 'Zhonyas/GA'],
    strongAgainst: ['Immobile carries', 'Poke comps', 'Teams without peel']
  },
  
  POKE: {
    id: 'POKE',
    name: 'Poke Composition',
    icon: '🏹',
    color: '#3b82f6',
    description: 'Whittle down enemies from range before committing. Siege towers, control objectives.',
    strategy: 'Stay grouped, poke from max range, only hard engage when enemies are low. Siege objectives safely.',
    winCondition: 'Get enemies low from poke, then clean up. Take objectives while enemies back.',
    strengths: ['Safe objective control', 'Tower siege', 'Low risk playstyle', 'Great at Baron/Dragon dances'],
    weaknesses: ['Weak if hard engaged on', 'Long fights favor enemies', 'Requires landing skillshots'],
    counters: ['Hard engage comps', 'Flankers (Nocturne, Camille)', 'Sustain/heal comps'],
    strongAgainst: ['Teams without engage', 'Low sustain comps', 'Melee-heavy teams']
  },
  
  ENGAGE: {
    id: 'ENGAGE',
    name: 'Engage/Wombo Composition',
    icon: '💥',
    color: '#a855f7',
    description: 'Hard engage with AoE CC and damage. Win through coordinated wombo combos.',
    strategy: 'Group as 5, look for multi-person engages, layer CC and AoE damage for devastating combos.',
    winCondition: 'Land a big engage, chain CC, wombo combo with AoE ultimates.',
    strengths: ['Wins 5v5 teamfights', 'Clear win condition', 'Easy to execute', 'Strong at objectives'],
    weaknesses: ['Requires grouping', 'Weak if behind', 'Ult dependent', 'Countered by disengage'],
    counters: ['Disengage comps', 'Splitpush', 'Poke before engage'],
    strongAgainst: ['Grouped teams', 'Immobile comps', 'Squishy teams']
  },
  
  PROTECT: {
    id: 'PROTECT',
    name: 'Protect the Carry',
    icon: '🛡️',
    color: '#22c55e',
    description: 'Build entire team around protecting 1-2 hypercarries. Peel and buff them to victory.',
    strategy: 'Keep hypercarry alive at all costs. Front-to-back teamfighting. Peel everything.',
    winCondition: 'Get to late game, protect carry in fights, they kill everyone.',
    strengths: ['Insane late game scaling', 'Clear win condition', 'Strong teamfights when ahead'],
    weaknesses: ['ADC dependent', 'Weak early game', 'Loses instantly if carry dies'],
    counters: ['Dive comps', 'Assassins', 'Pick comps'],
    strongAgainst: ['Front-to-back teams', 'Poke comps', 'Teams without assassins']
  },
  
  SPLITPUSH: {
    id: 'SPLITPUSH',
    name: 'Splitpush Composition',
    icon: '🗡️',
    color: '#f97316',
    description: 'Apply pressure across multiple lanes. 1-3-1 or 1-4 formations to create advantages.',
    strategy: 'Splitter draws 2+ enemies, team takes objectives elsewhere. Constant pressure forces mistakes.',
    winCondition: 'Create number advantages through map pressure. Take towers while enemies chase.',
    strengths: ['Map control', 'Forces rotations', 'Strong 1v1/1v2', 'Hard to defend against'],
    weaknesses: ['Coordination intensive', 'Weak 5v5', 'Punished by globals (TF, Shen)'],
    counters: ['Hard engage if caught', 'Global ultimates', 'Teleport usage'],
    strongAgainst: ['Slow rotation teams', 'Teams without waveclear', 'Engage comps without globals']
  },
  
  PICK: {
    id: 'PICK',
    name: 'Pick Composition',
    icon: '⚡',
    color: '#eab308',
    description: 'Catch isolated targets with burst and CC. Snowball through vision control and picks.',
    strategy: 'Control vision, catch enemies rotating, burst isolated targets, take objectives 5v4.',
    winCondition: 'Get picks on key targets, create number advantages, snowball lead.',
    strengths: ['Snowball potential', 'Great objective control', 'Punishes bad positioning'],
    weaknesses: ['Falls off late', 'Weak in 5v5', 'Requires vision control', 'Needs coordination'],
    counters: ['Grouped teams', 'Vision denial', 'Tank frontline'],
    strongAgainst: ['Teams with weak vision', 'Squishy teams', 'Teams that dont group']
  },
  
  TANK: {
    id: 'TANK',
    name: 'Full Tank Composition',
    icon: '🏰',
    color: '#6366f1',
    description: 'Multiple tanky champions that win through attrition and sustained fights.',
    strategy: 'Extended fights favor you. Stack resistances, sustain through damage, slowly win.',
    winCondition: 'Out-tank enemy damage, slowly grind them down in extended fights.',
    strengths: ['Hard to kill', 'Wins long fights', 'Strong objective control', 'Easy to execute'],
    weaknesses: ['Low damage', 'Easily kited', 'Loses to %HP damage and true damage'],
    counters: ['%HP damage (Vayne, BotRK)', 'Cut Down rune', 'LDR stacking', 'True damage'],
    strongAgainst: ['Burst comps', 'Assassin comps', 'Low DPS teams']
  }
};

// =====================================================
// CHAMPION POOLS BY COMP TYPE
// =====================================================
export const COMP_CHAMPIONS = {
  DIVE: {
    top: [
      { name: 'Camille', tier: 'S', reason: 'Hookshot engage, ult locks targets' },
      { name: 'Irelia', tier: 'S', reason: 'Mobile, high burst, good tower dives' },
      { name: 'Jax', tier: 'A', reason: 'Strong dive with E stun and ult tankiness' },
      { name: 'Renekton', tier: 'A', reason: 'Point-click stun, tanky with ult' },
      { name: 'Kled', tier: 'A', reason: 'Ult engages entire team' },
      { name: 'Gwen', tier: 'B', reason: 'Untargetable W for diving' }
    ],
    jungle: [
      { name: 'Vi', tier: 'S', reason: 'Point-click ult, great lockdown' },
      { name: 'Jarvan IV', tier: 'S', reason: 'Flag+drag engage, ult traps' },
      { name: 'Lee Sin', tier: 'A', reason: 'Kick priority targets, high mobility' },
      { name: 'Diana', tier: 'A', reason: 'AoE pull, high burst' },
      { name: 'Nocturne', tier: 'S', reason: 'Global dive, vision denial' },
      { name: 'Rek\'Sai', tier: 'B', reason: 'Tunnel engage, ult dive' }
    ],
    mid: [
      { name: 'Akali', tier: 'S', reason: 'Extreme mobility, high burst' },
      { name: 'Diana', tier: 'S', reason: 'AoE engage and burst' },
      { name: 'Sylas', tier: 'A', reason: 'Flexible, steals dive ults' },
      { name: 'Ekko', tier: 'A', reason: 'Safe dive with R' },
      { name: 'Fizz', tier: 'A', reason: 'Untargetable, high burst' },
      { name: 'Qiyana', tier: 'B', reason: 'Good dive, AoE CC' }
    ],
    adc: [
      { name: 'Kai\'Sa', tier: 'S', reason: 'Ult follows dive, high burst' },
      { name: 'Tristana', tier: 'A', reason: 'Jump resets, tower shred' },
      { name: 'Samira', tier: 'A', reason: 'Wants to be in melee, high AoE' },
      { name: 'Nilah', tier: 'B', reason: 'Short range, wants to dive' }
    ],
    support: [
      { name: 'Leona', tier: 'S', reason: 'Point-click CC, tanky dive' },
      { name: 'Nautilus', tier: 'S', reason: 'Point-click ult, multiple CCs' },
      { name: 'Alistar', tier: 'A', reason: 'Headbutt+Pulv engage, ult tankiness' },
      { name: 'Rell', tier: 'A', reason: 'AoE CC, pulls enemies' },
      { name: 'Thresh', tier: 'B', reason: 'Lantern for dive follow-up' }
    ]
  },
  
  POKE: {
    top: [
      { name: 'Jayce', tier: 'S', reason: 'Long range poke, siege power' },
      { name: 'Gnar', tier: 'A', reason: 'Mini Gnar poke, Mega engage fallback' },
      { name: 'Gangplank', tier: 'A', reason: 'Global poke, barrel zoning' },
      { name: 'Kennen', tier: 'B', reason: 'Q poke, engage if needed' }
    ],
    jungle: [
      { name: 'Nidalee', tier: 'S', reason: 'Spear poke, high damage' },
      { name: 'Graves', tier: 'A', reason: 'Q poke, smoke screen zone' },
      { name: 'Taliyah', tier: 'A', reason: 'W-E combo poke' },
      { name: 'Karthus', tier: 'B', reason: 'Q poke, global ult' }
    ],
    mid: [
      { name: 'Xerath', tier: 'S', reason: 'Insane range, siege god' },
      { name: 'Lux', tier: 'S', reason: 'Long range Q-E-R poke' },
      { name: 'Zoe', tier: 'S', reason: 'E-Q oneshot poke' },
      { name: 'Vel\'Koz', tier: 'A', reason: 'Long range poke and burst' },
      { name: 'Ziggs', tier: 'A', reason: 'Siege, tower execute' },
      { name: 'Syndra', tier: 'B', reason: 'Q poke, zone control' }
    ],
    adc: [
      { name: 'Ezreal', tier: 'S', reason: 'Q poke, safe positioning' },
      { name: 'Caitlyn', tier: 'S', reason: 'Longest AA range, trap zoning' },
      { name: 'Varus', tier: 'A', reason: 'Q poke, R engage option' },
      { name: 'Jhin', tier: 'A', reason: 'W root, R poke' },
      { name: 'Kog\'Maw', tier: 'B', reason: 'R poke, but immobile' }
    ],
    support: [
      { name: 'Lux', tier: 'S', reason: 'E poke, shield for defense' },
      { name: 'Xerath', tier: 'A', reason: 'Long range poke' },
      { name: 'Karma', tier: 'A', reason: 'Q poke, R-E speedup for disengage' },
      { name: 'Janna', tier: 'A', reason: 'Disengage queen, W poke' },
      { name: 'Vel\'Koz', tier: 'B', reason: 'High damage poke support' }
    ]
  },
  
  ENGAGE: {
    top: [
      { name: 'Malphite', tier: 'S', reason: 'Ult is THE engage tool' },
      { name: 'Ornn', tier: 'S', reason: 'R engage, item upgrades' },
      { name: 'Kennen', tier: 'A', reason: 'Flash R teamfight' },
      { name: 'Wukong', tier: 'A', reason: 'Double knockup ult' },
      { name: 'Gragas', tier: 'B', reason: 'E-R engage, disengage flex' }
    ],
    jungle: [
      { name: 'Amumu', tier: 'S', reason: 'Double Q, massive R' },
      { name: 'Sejuani', tier: 'S', reason: 'Multiple CC, tanky engage' },
      { name: 'Zac', tier: 'A', reason: 'Long range E engage' },
      { name: 'Jarvan IV', tier: 'A', reason: 'Flag+drag, ult trap' },
      { name: 'Diana', tier: 'A', reason: 'Huge AoE pull' }
    ],
    mid: [
      { name: 'Orianna', tier: 'S', reason: 'Ball delivery + Shockwave' },
      { name: 'Neeko', tier: 'A', reason: 'Huge R stun' },
      { name: 'Galio', tier: 'A', reason: 'Taunt, global follow-up R' },
      { name: 'Lissandra', tier: 'A', reason: 'Self-ult engage' },
      { name: 'Yone', tier: 'B', reason: 'R knockup engage' }
    ],
    adc: [
      { name: 'Miss Fortune', tier: 'S', reason: 'Ult is perfect wombo follow-up' },
      { name: 'Jinx', tier: 'A', reason: 'AoE rockets after engage' },
      { name: 'Twitch', tier: 'A', reason: 'Spray and Pray AoE' },
      { name: 'Aphelios', tier: 'B', reason: 'Massive AoE with right weapons' }
    ],
    support: [
      { name: 'Leona', tier: 'S', reason: 'E-Q-R engage chain' },
      { name: 'Nautilus', tier: 'S', reason: 'Hook or R to start' },
      { name: 'Rakan', tier: 'S', reason: 'Fastest engage in game' },
      { name: 'Alistar', tier: 'A', reason: 'Flash W-Q combo' },
      { name: 'Rell', tier: 'A', reason: 'W engage, massive R' }
    ]
  },
  
  PROTECT: {
    top: [
      { name: 'Ornn', tier: 'S', reason: 'Item upgrades for carry, tanky peel' },
      { name: 'Maokai', tier: 'A', reason: 'Point-click root, ult zone' },
      { name: 'Shen', tier: 'S', reason: 'Global ult shield for carry' },
      { name: 'Cho\'Gath', tier: 'B', reason: 'Silence and knockup peel' },
      { name: 'Sion', tier: 'B', reason: 'CC machine, massive shield' }
    ],
    jungle: [
      { name: 'Ivern', tier: 'S', reason: 'Shields, Daisy tank, bushes' },
      { name: 'Nunu', tier: 'A', reason: 'Peel, zone with R' },
      { name: 'Sejuani', tier: 'A', reason: 'Heavy CC peel' },
      { name: 'Zac', tier: 'B', reason: 'Knockup peel' }
    ],
    mid: [
      { name: 'Orianna', tier: 'S', reason: 'Shield, speedup, zone with ball' },
      { name: 'Lulu', tier: 'S', reason: 'Polymorph, shield, ult knockup' },
      { name: 'Zilean', tier: 'S', reason: 'Revive ult, speedup' },
      { name: 'Karma', tier: 'A', reason: 'Shield, speedup, poke' },
      { name: 'Seraphine', tier: 'A', reason: 'Heal, shield, CC' }
    ],
    adc: [
      { name: 'Jinx', tier: 'S', reason: 'Hyperscales, needs protection' },
      { name: 'Kog\'Maw', tier: 'S', reason: 'Highest DPS late, immobile' },
      { name: 'Vayne', tier: 'S', reason: 'Tank shred, needs peel' },
      { name: 'Aphelios', tier: 'A', reason: 'Insane damage if protected' },
      { name: 'Twitch', tier: 'A', reason: 'AoE damage late' }
    ],
    support: [
      { name: 'Lulu', tier: 'S', reason: 'THE protect support' },
      { name: 'Janna', tier: 'S', reason: 'Disengage and shields' },
      { name: 'Yuumi', tier: 'A', reason: 'Untargetable heals' },
      { name: 'Taric', tier: 'A', reason: 'Invulnerability ult' },
      { name: 'Braum', tier: 'A', reason: 'Shield wall, CC' }
    ]
  },
  
  SPLITPUSH: {
    top: [
      { name: 'Fiora', tier: 'S', reason: 'Best 1v1, tower shred' },
      { name: 'Jax', tier: 'S', reason: 'Scales infinitely, tower killer' },
      { name: 'Tryndamere', tier: 'S', reason: 'Cannot die with R, fast push' },
      { name: 'Camille', tier: 'A', reason: 'Great 1v1, escape tools' },
      { name: 'Yorick', tier: 'A', reason: 'Maiden push, tower destroyer' },
      { name: 'Shen', tier: 'A', reason: 'Split then R to team' }
    ],
    jungle: [
      { name: 'Master Yi', tier: 'A', reason: 'Fast clear, tower shred' },
      { name: 'Graves', tier: 'B', reason: 'Can duel and clear fast' },
      { name: 'Viego', tier: 'B', reason: 'Good dueling, reset potential' },
      { name: 'Kindred', tier: 'B', reason: 'Kiting potential in side' }
    ],
    mid: [
      { name: 'Twisted Fate', tier: 'S', reason: 'R to join fights while splitting' },
      { name: 'Ryze', tier: 'A', reason: 'Waveclear, R for team' },
      { name: 'Ekko', tier: 'A', reason: 'Fast push, safe escape' },
      { name: 'Kassadin', tier: 'A', reason: 'Scale then split' }
    ],
    adc: [
      { name: 'Sivir', tier: 'A', reason: 'Fast waveclear for 4-man group' },
      { name: 'Ezreal', tier: 'A', reason: 'Safe waveclear' },
      { name: 'Caitlyn', tier: 'B', reason: 'Tower damage from range' },
      { name: 'Xayah', tier: 'B', reason: 'Safe waveclear with feathers' }
    ],
    support: [
      { name: 'Janna', tier: 'A', reason: 'Disengage for 4-man' },
      { name: 'Morgana', tier: 'A', reason: 'Black shield, waveclear' },
      { name: 'Karma', tier: 'A', reason: 'Speedup, waveclear' },
      { name: 'Bard', tier: 'S', reason: 'Roam to help splitter' }
    ]
  },
  
  PICK: {
    top: [
      { name: 'Camille', tier: 'S', reason: 'Ult isolates targets' },
      { name: 'Gwen', tier: 'A', reason: 'Good skirmish, zone with W' },
      { name: 'Rengar', tier: 'A', reason: 'Bush control, burst' },
      { name: 'Kled', tier: 'B', reason: 'Charge to catches' }
    ],
    jungle: [
      { name: 'Elise', tier: 'S', reason: 'Cocoon pick, burst' },
      { name: 'Lee Sin', tier: 'S', reason: 'Ward hop kicks, insec' },
      { name: 'Evelynn', tier: 'S', reason: 'Stealth picks' },
      { name: 'Rengar', tier: 'S', reason: 'Stealth burst' },
      { name: 'Kha\'Zix', tier: 'A', reason: 'Isolation damage' }
    ],
    mid: [
      { name: 'Ahri', tier: 'S', reason: 'Charm picks, mobility' },
      { name: 'Zoe', tier: 'S', reason: 'E picks from fog' },
      { name: 'LeBlanc', tier: 'A', reason: 'Burst and escape' },
      { name: 'Syndra', tier: 'A', reason: 'E stun, burst' },
      { name: 'Twisted Fate', tier: 'A', reason: 'Gold card picks, R reveal' }
    ],
    adc: [
      { name: 'Jhin', tier: 'S', reason: 'W root, R picks' },
      { name: 'Ashe', tier: 'S', reason: 'R across map picks' },
      { name: 'Varus', tier: 'A', reason: 'R root spread' },
      { name: 'Kai\'Sa', tier: 'B', reason: 'R follow-up' }
    ],
    support: [
      { name: 'Thresh', tier: 'S', reason: 'Hook catches, lantern' },
      { name: 'Blitzcrank', tier: 'S', reason: 'THE pick support' },
      { name: 'Pyke', tier: 'S', reason: 'Hook, stun, execute' },
      { name: 'Morgana', tier: 'A', reason: 'Binding catches' },
      { name: 'Bard', tier: 'A', reason: 'Tunnel flanks, R catches' }
    ]
  },
  
  TANK: {
    top: [
      { name: 'Ornn', tier: 'S', reason: 'Tankiest, item upgrades' },
      { name: 'Sion', tier: 'S', reason: 'Infinite HP scaling' },
      { name: 'Malphite', tier: 'A', reason: 'Armor stacking, engage' },
      { name: 'Cho\'Gath', tier: 'A', reason: 'HP stacking, feast' },
      { name: 'Dr. Mundo', tier: 'A', reason: 'Unkillable late' },
      { name: 'Maokai', tier: 'B', reason: 'Sustain, CC' }
    ],
    jungle: [
      { name: 'Zac', tier: 'S', reason: 'Tanky engage, revive passive' },
      { name: 'Sejuani', tier: 'S', reason: 'CC machine, tanky' },
      { name: 'Rammus', tier: 'A', reason: 'OK, armor stacking' },
      { name: 'Amumu', tier: 'A', reason: 'Tanky, CC' },
      { name: 'Nunu', tier: 'B', reason: 'Tanky, objective control' }
    ],
    mid: [
      { name: 'Galio', tier: 'S', reason: 'Tank mid, global presence' },
      { name: 'Malphite', tier: 'A', reason: 'AP tank mid flex' },
      { name: 'Gragas', tier: 'B', reason: 'Tanky AP bruiser' },
      { name: 'Cho\'Gath', tier: 'B', reason: 'AP tank flex' }
    ],
    adc: [
      { name: 'Vayne', tier: 'S', reason: 'True damage shreds tanks' },
      { name: 'Kog\'Maw', tier: 'S', reason: '%HP magic damage' },
      { name: 'Kai\'Sa', tier: 'A', reason: '%HP passive damage' }
    ],
    support: [
      { name: 'Braum', tier: 'S', reason: 'Shield wall, tanky' },
      { name: 'Alistar', tier: 'A', reason: 'Ult damage reduction' },
      { name: 'Tahm Kench', tier: 'A', reason: 'HP scaling, devour' },
      { name: 'Leona', tier: 'A', reason: 'Tanky CC bot' }
    ]
  }
};

// =====================================================
// ITEM BUILDS BY TEAM COMP
// =====================================================
export const COMP_ITEM_BUILDS = {
  DIVE: {
    top: {
      fighter: {
        core: ['Eclipse', 'Black Cleaver', "Death's Dance"],
        situational: ["Sterak's Gage", 'Maw of Malmortius', 'Guardian Angel'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Burst damage + survivability for diving. Deaths Dance lets you survive after burst.'
      },
      tank: {
        core: ["Jak'Sho", 'Thornmail', 'Force of Nature'],
        situational: ['Dead Man\'s Plate', "Randuin's Omen", 'Gargoyle Stoneplate'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Tank engage builds. Dead Man\'s to catch targets.'
      }
    },
    jungle: {
      assassin: {
        core: ['Eclipse', 'Youmuu\'s Ghostblade', 'Opportunity'],
        situational: ['Edge of Night', "Serpent's Fang", 'Guardian Angel'],
        boots: ['Ionian Boots', "Mercury's Treads"],
        notes: 'Full lethality for burst. Edge of Night helps dive safely.'
      },
      bruiser: {
        core: ['Goredrinker', 'Black Cleaver', "Death's Dance"],
        situational: ["Sterak's Gage", 'Maw of Malmortius'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Sustain through dives with Goredrinker healing.'
      }
    },
    mid: {
      ap: {
        core: ['Stormsurge', 'Lich Bane', "Zhonya's Hourglass"],
        situational: ['Shadowflame', "Rabadon's Deathcap", "Banshee's Veil"],
        boots: ["Sorcerer's Shoes"],
        notes: "Zhonyas mandatory for surviving dive. Burst items for killing."
      }
    },
    adc: {
      standard: {
        core: ['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge'],
        situational: ['Galeforce', 'Bloodthirster', 'Guardian Angel'],
        boots: ["Berserker's Greaves"],
        notes: 'Galeforce for dash to follow dive. GA for second chance.'
      }
    },
    support: {
      tank: {
        core: ['Locket of the Iron Solari', "Zeke's Convergence", "Knight's Vow"],
        situational: ['Gargoyle Stoneplate', 'Thornmail'],
        boots: ['Mobility Boots', 'Plated Steelcaps'],
        notes: 'Locket shields team during dive. Tank stats to survive.'
      }
    }
  },
  
  POKE: {
    top: {
      poke: {
        core: ['Muramana', 'Eclipse', "Serylda's Grudge"],
        situational: ['Edge of Night', "Death's Dance", 'Maw of Malmortius'],
        boots: ['Ionian Boots', "Mercury's Treads"],
        notes: 'Poke builds. Seryldas slow helps land more poke.'
      }
    },
    jungle: {
      ap: {
        core: ["Luden's Companion", 'Shadowflame', "Rabadon's Deathcap"],
        situational: ["Zhonya's Hourglass", 'Void Staff'],
        boots: ["Sorcerer's Shoes"],
        notes: 'Max magic pen for poke damage.'
      }
    },
    mid: {
      mage: {
        core: ["Luden's Companion", 'Shadowflame', 'Void Staff'],
        situational: ["Rabadon's Deathcap", "Zhonya's Hourglass", "Banshee's Veil"],
        boots: ["Sorcerer's Shoes"],
        notes: "Ludens mandatory for poke burst. Pen items for damage."
      }
    },
    adc: {
      poke: {
        core: ['Essence Reaver', 'Rapid Firecannon', 'Infinity Edge'],
        situational: ['Galeforce', 'Bloodthirster', "Lord Dominik's Regards"],
        boots: ["Berserker's Greaves"],
        notes: 'RFC extends poke range. Essence Reaver for Ezreal Q spam.'
      }
    },
    support: {
      mage: {
        core: ["Luden's Companion", 'Shadowflame', "Zhonya's Hourglass"],
        situational: ['Void Staff', "Banshee's Veil"],
        boots: ["Sorcerer's Shoes"],
        notes: 'Full damage poke support. Zhonya for safety.'
      },
      enchanter: {
        core: ['Staff of Flowing Water', 'Ardent Censer', 'Redemption'],
        situational: ["Mikael's Blessing", "Zhonya's Hourglass"],
        boots: ['Ionian Boots', 'Boots of Swiftness'],
        notes: 'Buffs for ADC, disengage capabilities.'
      }
    }
  },
  
  ENGAGE: {
    top: {
      tank: {
        core: ['Sunfire Aegis', "Jak'Sho", 'Force of Nature'],
        situational: ['Thornmail', "Randuin's Omen", 'Gargoyle Stoneplate'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Full tank for front line engage. Sunfire for damage while CCing.'
      }
    },
    jungle: {
      tank: {
        core: ['Sunfire Aegis', "Jak'Sho", 'Abyssal Mask'],
        situational: ['Thornmail', 'Dead Man\'s Plate', 'Force of Nature'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Abyssal Mask amplifies magic damage for AP followup.'
      }
    },
    mid: {
      mage: {
        core: ["Zhonya's Hourglass", "Rabadon's Deathcap", 'Void Staff'],
        situational: ['Shadowflame', "Banshee's Veil", "Luden's Companion"],
        boots: ["Sorcerer's Shoes"],
        notes: "Zhonyas mandatory for diving with engage. Max AoE damage."
      }
    },
    adc: {
      standard: {
        core: ['Kraken Slayer', 'Infinity Edge', "Lord Dominik's Regards"],
        situational: ['Rapid Firecannon', 'Bloodthirster', 'Guardian Angel'],
        boots: ["Berserker's Greaves"],
        notes: 'Standard crit for follow-up damage after engage lands.'
      }
    },
    support: {
      tank: {
        core: ['Locket of the Iron Solari', "Zeke's Convergence", "Knight's Vow"],
        situational: ['Redemption', 'Gargoyle Stoneplate'],
        boots: ['Mobility Boots', "Mercury's Treads"],
        notes: 'Locket mandatory. Zekes for ADC damage amp.'
      }
    }
  },
  
  PROTECT: {
    top: {
      tank: {
        core: ["Jak'Sho", "Knight's Vow", 'Force of Nature'],
        situational: ['Locket of the Iron Solari', 'Thornmail', "Randuin's Omen"],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: "Knight's Vow to protect carry. Full tank."
      }
    },
    jungle: {
      support: {
        core: ['Redemption', 'Staff of Flowing Water', 'Ardent Censer'],
        situational: ["Mikael's Blessing", "Zhonya's Hourglass"],
        boots: ['Ionian Boots'],
        notes: 'Ivern/support jungle build. Buff the carry.'
      },
      tank: {
        core: ["Jak'Sho", "Zeke's Convergence", 'Force of Nature'],
        situational: ['Thornmail', 'Locket of the Iron Solari'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Tank peel jungle.'
      }
    },
    mid: {
      enchanter: {
        core: ['Staff of Flowing Water', 'Ardent Censer', 'Redemption'],
        situational: ["Mikael's Blessing", "Zhonya's Hourglass", "Banshee's Veil"],
        boots: ['Ionian Boots'],
        notes: 'Lulu/Karma/Zilean build. Buff the carry.'
      }
    },
    adc: {
      hypercarry: {
        core: ['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge'],
        situational: ['Bloodthirster', "Lord Dominik's Regards", 'Guardian Angel'],
        boots: ["Berserker's Greaves"],
        notes: 'Maximum DPS. You are the win condition.'
      }
    },
    support: {
      enchanter: {
        core: ['Ardent Censer', 'Staff of Flowing Water', 'Redemption'],
        situational: ["Mikael's Blessing", 'Locket of the Iron Solari'],
        boots: ['Ionian Boots'],
        notes: 'Mandatory build. Buff your hypercarry.'
      }
    }
  },
  
  SPLITPUSH: {
    top: {
      splitpusher: {
        core: ['Hullbreaker', 'Trinity Force', 'Blade of the Ruined King'],
        situational: ["Death's Dance", "Sterak's Gage", 'Maw of Malmortius'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Hullbreaker mandatory. Trinity for tower damage. BORK for dueling.'
      }
    },
    jungle: {
      duelist: {
        core: ['Blade of the Ruined King', 'Kraken Slayer', "Death's Dance"],
        situational: ['Wit\'s End', "Guinsoo's Rageblade"],
        boots: ["Berserker's Greaves"],
        notes: 'Dueling build for Master Yi/Viego side lane.'
      }
    },
    mid: {
      waveclear: {
        core: ["Luden's Companion", 'Lich Bane', "Zhonya's Hourglass"],
        situational: ["Rabadon's Deathcap", 'Void Staff'],
        boots: ["Sorcerer's Shoes"],
        notes: 'Lich Bane for tower damage. Fast waveclear.'
      }
    },
    adc: {
      waveclear: {
        core: ['Essence Reaver', 'Navori Flickerblade', 'Infinity Edge'],
        situational: ['Rapid Firecannon', 'Bloodthirster'],
        boots: ["Berserker's Greaves"],
        notes: 'Sivir-style waveclear builds.'
      }
    },
    support: {
      disengage: {
        core: ['Staff of Flowing Water', 'Redemption', "Mikael's Blessing"],
        situational: ["Zhonya's Hourglass", 'Locket of the Iron Solari'],
        boots: ['Ionian Boots', 'Boots of Swiftness'],
        notes: 'Help 4-man survive. Dont get engaged on.'
      }
    }
  },
  
  PICK: {
    top: {
      burst: {
        core: ['Eclipse', 'Youmuu\'s Ghostblade', 'Opportunity'],
        situational: ['Edge of Night', "Death's Dance", 'Guardian Angel'],
        boots: ['Ionian Boots'],
        notes: 'Full lethality burst for picks. Mobility boots for roams.'
      }
    },
    jungle: {
      assassin: {
        core: ['Eclipse', 'Youmuu\'s Ghostblade', 'Opportunity'],
        situational: ['Edge of Night', "Serpent's Fang"],
        boots: ['Ionian Boots'],
        notes: 'Vision control items. One-shot burst.'
      }
    },
    mid: {
      burst: {
        core: ['Stormsurge', 'Shadowflame', "Rabadon's Deathcap"],
        situational: ["Zhonya's Hourglass", 'Void Staff', "Banshee's Veil"],
        boots: ["Sorcerer's Shoes"],
        notes: 'Maximum burst for picks. Void Staff if needed.'
      }
    },
    adc: {
      utility: {
        core: ['Kraken Slayer', 'Rapid Firecannon', 'Infinity Edge'],
        situational: ['Galeforce', "Lord Dominik's Regards"],
        boots: ["Berserker's Greaves"],
        notes: 'Jhin/Ashe builds. RFC for range on picks. Galeforce to follow.'
      }
    },
    support: {
      hook: {
        core: ['Mobility Boots', 'Dead Man\'s Plate', 'Locket of the Iron Solari'],
        situational: ["Knight's Vow", "Zeke's Convergence"],
        boots: ['Mobility Boots'],
        notes: 'Mobility to roam and find picks. Sweeper always.'
      }
    }
  },
  
  TANK: {
    top: {
      supertank: {
        core: ['Heartsteel', "Jak'Sho", 'Thornmail'],
        situational: ['Force of Nature', "Randuin's Omen", 'Gargoyle Stoneplate'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Heartsteel for infinite scaling. Full tank.'
      }
    },
    jungle: {
      fulltank: {
        core: ['Sunfire Aegis', "Jak'Sho", 'Force of Nature'],
        situational: ['Thornmail', 'Abyssal Mask', 'Gargoyle Stoneplate'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Sunfire for damage. Stack resistances.'
      }
    },
    mid: {
      tank: {
        core: ['Hollow Radiance', "Jak'Sho", 'Force of Nature'],
        situational: ['Abyssal Mask', 'Thornmail', "Zhonya's Hourglass"],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Galio/tank mid. Abyssal for team damage amp.'
      }
    },
    adc: {
      tankKiller: {
        core: ['Blade of the Ruined King', 'Kraken Slayer', "Lord Dominik's Regards"],
        situational: ['Infinity Edge', 'Phantom Dancer'],
        boots: ["Berserker's Greaves"],
        notes: 'BORK + LDR mandatory for tank shred. Cut Down rune.'
      }
    },
    support: {
      tank: {
        core: ['Locket of the Iron Solari', "Knight's Vow", "Zeke's Convergence"],
        situational: ['Thornmail', 'Frozen Heart'],
        boots: ['Plated Steelcaps', "Mercury's Treads"],
        notes: 'Full tank support. Locket for team.'
      }
    }
  }
};

// =====================================================
// SITUATIONAL ITEM BUILDS
// =====================================================
export const SITUATIONAL_BUILDS = {
  vsHeavyAP: {
    name: 'vs Heavy AP / Double AP',
    condition: 'Enemy has 3+ AP threats or fed AP carry',
    fighters: ['Maw of Malmortius', 'Spirit Visage', 'Force of Nature'],
    tanks: ['Force of Nature', 'Kaenic Rookern', 'Abyssal Mask', 'Hollow Radiance', 'Spirit Visage'],
    adcs: ['Maw of Malmortius', "Wit's End"],
    mages: ["Banshee's Veil", 'Abyssal Mask'],
    supports: ["Mikael's Blessing", 'Locket of the Iron Solari'],
    boots: "Mercury's Treads",
    tips: [
      'Force of Nature gives 20% magic damage reduction at max stacks',
      'Kaenic Rookern provides magic shield equal to 18% max HP',
      "Mikael's can cleanse CC"
    ]
  },
  
  vsHeavyAD: {
    name: 'vs Heavy AD / Full AD Team',
    condition: 'Enemy has 4+ AD threats or fed AD carries',
    fighters: ["Death's Dance", "Randuin's Omen", 'Frozen Heart'],
    tanks: ['Thornmail', "Randuin's Omen", 'Frozen Heart', 'Unending Despair'],
    adcs: ['Guardian Angel', "Randuin's Omen (edge case)"],
    mages: ["Zhonya's Hourglass"],
    supports: ['Locket of the Iron Solari', 'Frozen Heart'],
    boots: 'Plated Steelcaps',
    tips: [
      'Thornmail + Randuins combo is devastating vs auto-attackers',
      'Frozen Heart attack speed slow is 20%',
      "Death's Dance bleed passive buys time to heal"
    ]
  },
  
  vsHeavyHealing: {
    name: 'vs Heavy Healing',
    condition: 'Enemy has Soraka, Yuumi, Aatrox, Vladimir, or 2+ healing sources',
    fighters: ['Thornmail (if tanky)', 'Mortal Reminder', 'Chempunk Chainsword'],
    tanks: ['Thornmail'],
    adcs: ['Mortal Reminder'],
    mages: ['Morellonomicon'],
    supports: ['Thornmail (tank)', 'Oblivion Orb → Morellonomicon'],
    tips: [
      'ALWAYS build Grievous Wounds vs heavy healing',
      'Thornmail is best for tanks - auto-applies on being attacked',
      'Mortal Reminder is 40% GW for ADCs',
      'Build GW component early, finish later'
    ]
  },
  
  vsHeavyShields: {
    name: 'vs Heavy Shields',
    condition: 'Enemy has Lulu, Janna, Seraphine, or multiple shield items',
    assassins: ["Serpent's Fang"],
    fighters: ["Serpent's Fang (if lethality viable)"],
    mages: ['Shadowflame (executes through shields)'],
    tips: [
      "Serpent's Fang reduces shields by 50% for melee",
      "It's only 2500g - very gold efficient vs shields",
      'Shadowflame bonus damage helps execute low targets through shields'
    ]
  },
  
  vsDiveComps: {
    name: 'vs Dive Compositions',
    condition: 'Enemy wants to dive your backline (Camille, Vi, Nocturne, etc.)',
    adcs: ['Galeforce (dash)', 'Guardian Angel', 'Bloodthirster (shield)'],
    mages: ["Zhonya's Hourglass", "Banshee's Veil"],
    supports: ['Locket of the Iron Solari', 'Redemption', "Mikael's Blessing"],
    tips: [
      "Zhonya's buys 2.5s for team to peel",
      'GA gives second chance',
      'Galeforce dash helps reposition',
      'Stay near your support'
    ]
  },
  
  vsTankComps: {
    name: 'vs Tank Compositions',
    condition: 'Enemy has 3+ tanks or high HP stacking',
    fighters: ['Black Cleaver', 'Blade of the Ruined King', "Serylda's Grudge"],
    adcs: ["Lord Dominik's Regards", 'Blade of the Ruined King', 'Kraken Slayer'],
    mages: ['Void Staff', "Liandry's Torment", 'Cryptbloom'],
    runes: ['Cut Down (Precision tree)'],
    tips: [
      'LDR + Cut Down combo shreds tanks',
      'BORK does 9% current HP per hit',
      'Black Cleaver shreds 30% armor for whole team',
      'Kraken Slayer true damage ignores armor'
    ]
  },
  
  splitPushing: {
    name: 'Splitpush Build',
    condition: 'You are designated splitpusher',
    top: ['Hullbreaker', 'Trinity Force', 'Blade of the Ruined King', "Sterak's Gage"],
    jungle: ['Blade of the Ruined King', 'Trinity Force', "Death's Dance"],
    boots: 'Boots of Swiftness (or defensive)',
    warding: 'Control ward in river, defensive ward in enemy jungle',
    tips: [
      'Hullbreaker is mandatory - gives 60 armor/MR alone',
      'Trinity Force gives tower damage',
      'BORK for 1v1 dueling',
      'Always have TP or watch map carefully'
    ]
  }
};

// =====================================================
// HELPER FUNCTIONS
// =====================================================
export const getCompInfo = (compType) => {
  return TEAM_COMP_TYPES[compType] || null;
};

export const getChampionsForComp = (compType, role) => {
  return COMP_CHAMPIONS[compType]?.[role] || [];
};

export const getBuildForComp = (compType, role, buildType) => {
  return COMP_ITEM_BUILDS[compType]?.[role]?.[buildType] || null;
};

export const getSituationalBuild = (situation) => {
  return SITUATIONAL_BUILDS[situation] || null;
};

export const analyzeEnemyTeam = (enemyChampions) => {
  // Count damage types
  let apCount = 0;
  let adCount = 0;
  let healingChamps = [];
  let shieldChamps = [];
  let tankCount = 0;
  let diveChamps = [];
  
  const apChamps = ['Ahri', 'Annie', 'Brand', 'Cassiopeia', 'Diana', 'Ekko', 'Evelynn', 'Fizz', 'Karthus', 'Kassadin', 'Katarina', 'LeBlanc', 'Lissandra', 'Lux', 'Malzahar', 'Morgana', 'Neeko', 'Orianna', 'Ryze', 'Syndra', 'Taliyah', 'Twisted Fate', 'Veigar', 'Vel\'Koz', 'Viktor', 'Vladimir', 'Xerath', 'Ziggs', 'Zoe', 'Zyra'];
  const healChamps = ['Soraka', 'Yuumi', 'Nami', 'Sona', 'Aatrox', 'Vladimir', 'Dr. Mundo', 'Warwick', 'Swain'];
  const shieldSupports = ['Lulu', 'Janna', 'Karma', 'Seraphine', 'Ivern', 'Shen'];
  const tankChamps = ['Ornn', 'Sion', 'Malphite', 'Cho\'Gath', 'Maokai', 'Zac', 'Sejuani', 'Rammus', 'Alistar', 'Braum', 'Leona', 'Nautilus', 'Tahm Kench'];
  const diveChampsList = ['Camille', 'Vi', 'Nocturne', 'Diana', 'Irelia', 'Renekton', 'Jarvan IV', 'Lee Sin', 'Zed', 'Talon', 'Akali'];
  
  enemyChampions.forEach(champ => {
    if (!champ) return;
    if (apChamps.includes(champ)) apCount++;
    else adCount++;
    if (healChamps.includes(champ)) healingChamps.push(champ);
    if (shieldSupports.includes(champ)) shieldChamps.push(champ);
    if (tankChamps.includes(champ)) tankCount++;
    if (diveChampsList.includes(champ)) diveChamps.push(champ);
  });
  
  const recommendations = [];
  
  if (apCount >= 3) recommendations.push({ type: 'vsHeavyAP', priority: 'HIGH', reason: `${apCount} AP threats on enemy team` });
  if (adCount >= 4) recommendations.push({ type: 'vsHeavyAD', priority: 'HIGH', reason: `${adCount} AD threats on enemy team` });
  if (healingChamps.length >= 2) recommendations.push({ type: 'vsHeavyHealing', priority: 'HIGH', reason: `Healing from: ${healingChamps.join(', ')}` });
  if (shieldChamps.length >= 1) recommendations.push({ type: 'vsHeavyShields', priority: 'MEDIUM', reason: `Shield support: ${shieldChamps.join(', ')}` });
  if (tankCount >= 3) recommendations.push({ type: 'vsTankComps', priority: 'HIGH', reason: `${tankCount} tanks on enemy team` });
  if (diveChamps.length >= 2) recommendations.push({ type: 'vsDiveComps', priority: 'HIGH', reason: `Dive threats: ${diveChamps.join(', ')}` });
  
  return {
    apCount,
    adCount,
    healingChamps,
    shieldChamps,
    tankCount,
    diveChamps,
    recommendations
  };
};

export default {
  TEAM_COMP_TYPES,
  COMP_CHAMPIONS,
  COMP_ITEM_BUILDS,
  SITUATIONAL_BUILDS,
  getCompInfo,
  getChampionsForComp,
  getBuildForComp,
  getSituationalBuild,
  analyzeEnemyTeam
};
