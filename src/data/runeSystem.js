// Ultimate Rune System with Matchup-Specific Pages & Math
// Complete rune recommendations for every champion and situation

// ============================================
// RUNE MATH & CALCULATIONS
// ============================================

export const runeMath = {
  // PRECISION KEYSTONES
  PressTheAttack: {
    name: "Press the Attack",
    damage: (level) => 40 + (level * 10),
    ampDamage: 0.08,
    description: "3 attacks → bonus damage + 8% vulnerability",
    math: "Damage: 40 + (Level × 10). At level 18: 180 damage. 8% amp on 1000 damage = 80 extra.",
    bestWhen: "Short trades with 3 quick autos, bursty ADCs",
    formula: (level, followUpDamage) => ({
      procDamage: 40 + (level * 10),
      ampedDamage: followUpDamage * 0.08,
      total: 40 + (level * 10) + (followUpDamage * 0.08)
    })
  },
  
  LethalTempo: {
    name: "Lethal Tempo",
    bonusAS: 0.30,
    meleeBonus: 0.45,
    rangeBonus: 50,
    description: "Stacking attack speed, breaks AS cap at max stacks",
    math: "6 stacks = 30% AS (ranged) or 45% AS (melee). Breaks 2.5 AS cap. +50 range at max.",
    bestWhen: "Extended fights, auto-attack reliant champions",
    formula: (baseAS, bonusAS, isMelee) => {
      const ltBonus = isMelee ? 0.45 : 0.30;
      return { 
        attackSpeed: (baseAS * (1 + bonusAS + ltBonus)).toFixed(2),
        dpsIncrease: `+${(ltBonus * 100)}% AS`
      };
    }
  },
  
  Conqueror: {
    name: "Conqueror",
    adPerStack: (level) => 1.2 + (level * 0.1),
    apPerStack: (level) => 2 + (level * 0.2),
    maxStacks: 12,
    healing: 0.08,
    description: "Stacking AD/AP, healing at max stacks",
    math: "12 stacks at level 18: 54 AD or 90 AP. Heals 8% of damage dealt at max stacks.",
    bestWhen: "Extended fights, bruisers, drain tanks",
    formula: (level, isAP, damageDealt) => {
      const adPerStack = 1.2 + (level * 0.1);
      const apPerStack = 2 + (level * 0.2);
      const totalStats = isAP ? apPerStack * 12 : adPerStack * 12;
      return { 
        bonusStats: totalStats.toFixed(1),
        statType: isAP ? 'AP' : 'AD',
        healingPerCombo: (damageDealt * 0.08).toFixed(0)
      };
    }
  },
  
  FleetFootwork: {
    name: "Fleet Footwork",
    baseHeal: (level) => 10 + (level * 10),
    adRatio: 0.30,
    apRatio: 0.20,
    movementSpeed: 20,
    description: "Energized attack heals and grants MS",
    math: "Heal: 10 + (Level × 10) + 30% bonus AD + 20% AP. At 18 with 100 bonus AD: 130 heal.",
    bestWhen: "Sustain lanes, kiting, poke matchups",
    formula: (level, bonusAD, AP) => ({
      healing: (10 + (level * 10) + (bonusAD * 0.3) + (AP * 0.2)).toFixed(0),
      movementSpeed: '20% for 1s'
    })
  },

  Electrocute: {
    name: "Electrocute",
    baseDamage: (level) => 30 + (level * 10),
    adRatio: 0.40,
    apRatio: 0.25,
    cooldown: (level) => 25 - (level * 0.5),
    description: "3 hits in 3s = burst damage",
    math: "Damage: 30 + (Level × 10) + 40% bonus AD or 25% AP. Level 18 + 300 AP: 255 damage.",
    bestWhen: "Burst assassins, short trades, lane dominance",
    formula: (level, bonusAD, AP) => ({
      damage: (30 + (level * 10) + Math.max(bonusAD * 0.4, AP * 0.25)).toFixed(0),
      cooldown: (25 - (level * 0.5)).toFixed(1)
    })
  },
  
  DarkHarvest: {
    name: "Dark Harvest",
    baseDamage: 20,
    damagePerSoul: 9,
    adRatio: 0.25,
    apRatio: 0.15,
    description: "Stacking damage on low HP targets",
    math: "20 base + 9 per soul + 25% bonus AD or 15% AP. 20 souls + 200 AD: 250 damage.",
    bestWhen: "Scaling, teamfight resets, jungle ganks",
    formula: (souls, bonusAD, AP) => ({
      damage: (20 + (souls * 9) + Math.max(bonusAD * 0.25, AP * 0.15)).toFixed(0),
      souls
    })
  },
  
  HailOfBlades: {
    name: "Hail of Blades",
    bonusAS: 1.10,
    attacks: 3,
    cooldown: 12,
    description: "First 3 attacks have massive AS boost",
    math: "110% bonus AS for 3 attacks. Ignores AS cap. 12s CD (out of combat).",
    bestWhen: "All-in burst, on-hit champions, quick trades"
  },

  SummonAery: {
    name: "Summon Aery",
    damageAD: 0.15,
    damageAP: 0.10,
    shieldAD: 0.25,
    shieldAP: 0.20,
    description: "Auto-targeting damage/shield familiar",
    math: "Damage: 10 + 15% AD or 10% AP. Shield: 20 + 25% AD or 20% AP. No cooldown.",
    bestWhen: "Poke mages, enchanters, DoT champions",
    formula: (bonusAD, AP, isShielding) => {
      if (isShielding) return { shield: (20 + Math.max(bonusAD * 0.25, AP * 0.20)).toFixed(0) };
      return { damage: (10 + Math.max(bonusAD * 0.15, AP * 0.10)).toFixed(0) };
    }
  },
  
  ArcaneComet: {
    name: "Arcane Comet",
    baseDamage: (level) => 30 + (level * 5),
    adRatio: 0.35,
    apRatio: 0.20,
    description: "Skillshot comet after ability hit",
    math: "30 + (Level × 5) + 35% bonus AD + 20% AP. CD reduced by hitting abilities.",
    bestWhen: "Poke mages with CC or slows",
    formula: (level, bonusAD, AP) => ({
      damage: (30 + (level * 5) + (bonusAD * 0.35) + (AP * 0.20)).toFixed(0),
      cooldown: (20 - level * 0.5).toFixed(1)
    })
  },
  
  PhaseRush: {
    name: "Phase Rush",
    movementSpeed: "15-40%",
    slowResist: 0.75,
    duration: 3,
    description: "3 hits = burst of movement speed + slow resist",
    math: "15-40% MS (based on level) + 75% slow resist for 3s.",
    bestWhen: "Kiting mages, melee into ranged, chase/escape"
  },

  GraspOfTheUndying: {
    name: "Grasp of the Undying",
    damagePercent: 0.04,
    healPercent: 0.02,
    permanentHP: 5,
    description: "In-combat proc: damage, heal, permanent HP",
    math: "4% max HP damage, 2% heal, +5 permanent HP. At 3000 HP: 120 damage, 60 heal.",
    bestWhen: "Short trades, tanks, lane sustain",
    formula: (maxHP, isMelee) => {
      const mult = isMelee ? 1 : 0.6;
      return {
        damage: (maxHP * 0.04 * mult).toFixed(0),
        healing: (maxHP * 0.02 * mult).toFixed(0),
        permanentHP: isMelee ? 5 : 3
      };
    }
  },
  
  Aftershock: {
    name: "Aftershock",
    bonusArmor: (level) => 35 + (level * 5),
    bonusMR: (level) => 35 + (level * 5),
    damageBase: (level) => 25 + (level * 5),
    damageHPRatio: 0.08,
    description: "After immobilizing: resists then AoE damage",
    math: "35-80 Armor/MR for 2.5s, then 25 + (Level × 5) + 8% max HP AoE damage.",
    bestWhen: "Engage tanks/supports with hard CC",
    formula: (level, maxHP) => ({
      armor: 35 + (level * 5),
      mr: 35 + (level * 5),
      damage: (25 + (level * 5) + (maxHP * 0.08)).toFixed(0)
    })
  },
  
  Guardian: {
    name: "Guardian",
    baseShield: (level) => 50 + (level * 10),
    apRatio: 0.25,
    movementSpeed: 0.20,
    description: "Shield nearby ally when taking damage",
    math: "Shield: 50 + (Level × 10) + 25% AP. 20% MS for 1.5s.",
    bestWhen: "Protective supports, duo lane safety",
    formula: (level, AP) => ({
      shield: (50 + (level * 10) + (AP * 0.25)).toFixed(0),
      movementSpeed: '20%',
      duration: '1.5s'
    })
  },

  GlacialAugment: {
    name: "Glacial Augment",
    slow: 0.30,
    duration: 3,
    damageReduction: 0.15,
    description: "Immobilizing creates slow zone",
    math: "3 freeze rays, 30% slow for 3s. Reduces damage of slowed enemies by 15%.",
    bestWhen: "CC mages, engage supports, utility picks"
  },
  
  FirstStrike: {
    name: "First Strike",
    bonusDamageMelee: 0.09,
    bonusDamageRanged: 0.07,
    goldMelee: 0.70,
    goldRanged: 0.50,
    window: 3,
    description: "Hit first = bonus damage + gold",
    math: "9% bonus damage (7% ranged), 70% of bonus damage as gold (50% ranged).",
    bestWhen: "Poke champions, gold scaling, first strike traders",
    formula: (damageDealt, isMelee) => {
      const dmgMult = isMelee ? 0.09 : 0.07;
      const goldMult = isMelee ? 0.70 : 0.50;
      const bonusDamage = damageDealt * dmgMult;
      return {
        bonusDamage: bonusDamage.toFixed(0),
        goldEarned: (bonusDamage * goldMult).toFixed(0)
      };
    }
  },
  
  UnsealedSpellbook: {
    name: "Unsealed Spellbook",
    summonerCDR: 0.25,
    description: "Swap summoner spells, reduced cooldowns",
    math: "25% Summoner Spell CDR. Flash goes from 300s → 225s.",
    bestWhen: "Flexible champions, utility, high elo macro"
  }
};

// ============================================
// STAT SHARDS
// ============================================

export const statShards = {
  row1: [
    { name: "Adaptive Force", value: "+9 AD / +15 AP" },
    { name: "Attack Speed", value: "+10% AS" },
    { name: "Ability Haste", value: "+8 AH" }
  ],
  row2: [
    { name: "Adaptive Force", value: "+9 AD / +15 AP" },
    { name: "Movement Speed", value: "+2% MS" },
    { name: "Health Scaling", value: "+10-38 HP (by level)" }
  ],
  row3: [
    { name: "Health", value: "+65 HP" },
    { name: "Tenacity", value: "+10% Tenacity" },
    { name: "Health Scaling", value: "+10-38 HP (by level)" }
  ]
};

// ============================================
// MATCHUP-SPECIFIC RUNE PAGES (ALL CHAMPIONS)
// ============================================

export const matchupRunes = {
  // ===== TOP LANE =====
  Aatrox: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror for extended trades, Last Stand synergy with ult"
    },
    vsPoke: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Second Wind + Doran's Shield = massive sustain vs poke",
      examples: ["Teemo", "Jayce", "Quinn", "Kennen", "Vayne"]
    },
    vsTank: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Cut Down"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Cut Down for tank shred, Alacrity for more DPS",
      examples: ["Malphite", "Ornn", "Sion", "Cho'Gath", "Tahm Kench"]
    },
    vsBurst: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "Bone Plating blocks burst combo",
      examples: ["Riven", "Renekton", "Pantheon", "Wukong", "Kled"]
    }
  },

  Camille: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror stacks with Q2, Alacrity for faster combos"
    },
    vsShortTrades: {
      keystone: "Grasp of the Undying",
      primary: ["Shield Bash", "Second Wind", "Overgrowth"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Alacrity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Grasp + Shield Bash + passive = huge short trades",
      examples: ["Jax", "Fiora", "Irelia", "Renekton"]
    },
    vsPoke: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Revitalize"] },
      shards: ["Adaptive", "Movement Speed", "Health"],
      reasoning: "MS shard helps gap close",
      examples: ["Teemo", "Quinn", "Jayce", "Kennen"]
    }
  },

  Darius: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "Ghost + Conqueror + 5 stacks = pentakill potential"
    },
    vsRanged: {
      keystone: "Phase Rush",
      primary: ["Nimbus Cloak", "Celerity", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Movement Speed", "Health"],
      reasoning: "Phase Rush lets you stick to ranged champions",
      examples: ["Vayne", "Quinn", "Teemo", "Jayce", "Kennen"]
    },
    vsAllIn: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "Alacrity for faster 5 stacks",
      examples: ["Riven", "Irelia", "Fiora", "Jax", "Tryndamere"]
    }
  },

  Fiora: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Alacrity for vital procs, Last Stand synergy with ult"
    },
    vsShortTrades: {
      keystone: "Grasp of the Undying",
      primary: ["Demolish", "Second Wind", "Overgrowth"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Alacrity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Grasp for short trade lanes",
      examples: ["Malphite", "Shen", "Poppy", "Ornn", "Maokai"]
    },
    vsPoke: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Fleet sustain + Second Wind = infinite sustain",
      examples: ["Teemo", "Kennen", "Jayce", "Quinn", "Vayne"]
    }
  },

  Garen: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "E stacks Conqueror fast, passive + Second Wind = immortal"
    },
    vsAP: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Conditioning"] },
      shards: ["Adaptive", "Adaptive", "MR"],
      reasoning: "MR shard + Conditioning for AP matchups",
      examples: ["Teemo", "Kennen", "Mordekaiser", "Rumble", "Vladimir"]
    },
    vsRanged: {
      keystone: "Phase Rush",
      primary: ["Nimbus Cloak", "Celerity", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Movement Speed", "Health"],
      reasoning: "Phase Rush lets you stick to ranged champions",
      examples: ["Vayne", "Quinn", "Jayce", "Teemo", "Kennen"]
    }
  },

  Gwen: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "AS shard mandatory for Q stacks"
    },
    vsTanks: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Cut Down"],
      secondary: { tree: "Sorcery", runes: ["Transcendence", "Gathering Storm"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Cut Down + true damage = tank destroyer",
      examples: ["Malphite", "Ornn", "Sion", "Cho'Gath", "Shen"]
    }
  },

  Irelia: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "AS shard mandatory, Conqueror stacks with Q resets"
    },
    vsRanged: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo helps run down ranged champions",
      examples: ["Teemo", "Quinn", "Jayce", "Kennen", "Vayne"]
    },
    vsBurst: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Unflinching"] },
      shards: ["Attack Speed", "Adaptive", "Armor"],
      reasoning: "Bone Plating survives burst",
      examples: ["Riven", "Renekton", "Pantheon", "Wukong"]
    }
  },

  Jax: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "AS shard mandatory, scales infinitely"
    },
    vsAA: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo + E = auto-attack champions hate you",
      examples: ["Tryndamere", "Yasuo", "Yone", "Irelia", "Fiora"]
    },
    vsAP: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Conditioning"] },
      shards: ["Attack Speed", "Adaptive", "MR"],
      reasoning: "MR shard for AP tops",
      examples: ["Mordekaiser", "Kennen", "Rumble", "Vladimir", "Teemo"]
    }
  },

  Mordekaiser: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror + passive = drain tank nightmare"
    },
    vsRanged: {
      keystone: "Phase Rush",
      primary: ["Nimbus Cloak", "Celerity", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Movement Speed", "Health"],
      reasoning: "Phase Rush to stick in Death Realm",
      examples: ["Vayne", "Quinn", "Jayce", "Teemo", "Kennen"]
    }
  },

  Nasus: {
    default: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "Fleet sustain for safe stacking, AH shard for more Q"
    },
    vsHardPoke: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Revitalize"] },
      shards: ["Ability Haste", "Adaptive", "Armor"],
      reasoning: "Maximum sustain for hard poke lanes",
      examples: ["Teemo", "Quinn", "Jayce", "Vayne", "Kennen"]
    }
  },

  Renekton: {
    default: {
      keystone: "Press the Attack",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "PTA procs instantly with empowered W"
    },
    vsTanks: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror for extended tank fights",
      examples: ["Malphite", "Ornn", "Sion", "Cho'Gath", "Shen"]
    },
    vsSquishies: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Electrocute one-shots squishies",
      examples: ["Jayce", "Quinn", "Teemo", "Kayle", "Vayne"]
    }
  },

  Riven: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "AH shard for more combos, Conqueror for sustain"
    },
    vsSquishies: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "Electrocute burst for squishy targets",
      examples: ["Jayce", "Quinn", "Teemo", "Kayle", "Gangplank"]
    },
    vsTanks: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Cut Down"],
      secondary: { tree: "Sorcery", runes: ["Transcendence", "Gathering Storm"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "Cut Down + Conqueror for tank shred",
      examples: ["Malphite", "Ornn", "Sion", "Cho'Gath"]
    }
  },

  Sett: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror + W grit = massive true damage"
    },
    vsPoke: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Fleet for sustain in poke lanes",
      examples: ["Teemo", "Quinn", "Jayce", "Kennen", "Vayne"]
    }
  },

  Tryndamere: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo = infinite crits"
    },
    vsRanged: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Fleet sustain to survive until you can spin on them",
      examples: ["Teemo", "Quinn", "Jayce", "Vayne", "Kennen"]
    }
  },

  // ===== MID LANE =====
  Ahri: {
    default: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Sorcery", runes: ["Manaflow Band", "Transcendence"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst mage, Ultimate Hunter for mobility"
    },
    vsAssassin: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "Bone Plating survives assassin burst",
      examples: ["Zed", "Talon", "Qiyana", "Pantheon", "Yasuo"]
    },
    vsPoke: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Scorch"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Aery for consistent poke in farm lanes",
      examples: ["Lux", "Xerath", "Ziggs", "Vel'Koz", "Syndra"]
    }
  },

  Akali: {
    default: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst assassin, Resolve for sustain"
    },
    vsRanged: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Tenacity", "Coup de Grace"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Fleet sustain vs ranged poke",
      examples: ["Syndra", "Orianna", "Viktor", "Azir", "Xerath"]
    },
    vsMelee: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror for extended melee fights",
      examples: ["Yasuo", "Yone", "Sylas", "Diana", "Fizz"]
    }
  },

  Anivia: {
    default: {
      keystone: "Arcane Comet",
      primary: ["Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Comet + stun = guaranteed hit"
    },
    vsAssassin: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "Electrocute burst + Bone Plating survival",
      examples: ["Zed", "Talon", "Fizz", "Katarina", "Yasuo"]
    }
  },

  Fizz: {
    default: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Sorcery", runes: ["Transcendence", "Scorch"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst assassin, Sudden Impact for magic pen"
    },
    vsHardMatchup: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Bone Plating"] },
      shards: ["Adaptive", "Adaptive", "MR"],
      reasoning: "Resolve for survival in hard lanes",
      examples: ["Lissandra", "Galio", "Malzahar", "Annie"]
    }
  },

  Katarina: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror stacks instantly with ult"
    },
    vsSquishy: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Electrocute for one-shot potential",
      examples: ["Lux", "Xerath", "Vel'Koz", "Twisted Fate"]
    },
    vsPokeHeavy: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Fleet sustain for poke heavy lanes",
      examples: ["Syndra", "Orianna", "Viktor", "Azir"]
    }
  },

  LeBlanc: {
    default: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Sorcery", runes: ["Transcendence", "Scorch"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst mage assassin"
    },
    vsHardCC: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Tenacity vs CC-heavy mids",
      examples: ["Lissandra", "Twisted Fate", "Ahri", "Neeko"]
    }
  },

  Sylas: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror + W healing = drain tank"
    },
    vsAD: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "Bone Plating vs AD assassins",
      examples: ["Zed", "Talon", "Qiyana", "Pantheon", "Yasuo"]
    }
  },

  Yasuo: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo for Q cooldown, AS shard mandatory"
    },
    vsRanged: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Fleet sustain through poke",
      examples: ["Azir", "Viktor", "Orianna", "Syndra", "Lux"]
    },
    vsMelee: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Aggressive secondaries vs melee",
      examples: ["Sylas", "Diana", "Akali", "Fizz", "Talon"]
    }
  },

  Yone: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Same as Yasuo - Lethal Tempo + AS shard"
    },
    vsHeavyPoke: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Fleet sustain",
      examples: ["Azir", "Viktor", "Syndra", "Orianna", "Xerath"]
    }
  },

  Zed: {
    default: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Sorcery", runes: ["Transcendence", "Scorch"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst assassin"
    },
    vsHardMatchup: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror for extended fights when can't burst",
      examples: ["Malzahar", "Lissandra", "Galio", "Pantheon"]
    },
    vsSquishy: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Inspiration", runes: ["Magical Footwear", "Cosmic Insight"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Maximum snowball potential",
      examples: ["Lux", "Vel'Koz", "Xerath", "Syndra", "Twisted Fate"]
    }
  },

  Viktor: {
    default: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Scorch"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Aery for consistent poke"
    },
    vsAssassin: {
      keystone: "First Strike",
      primary: ["Magical Footwear", "Biscuit Delivery", "Cosmic Insight"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      reasoning: "First Strike gold + survival vs assassins",
      examples: ["Zed", "Talon", "Fizz", "Katarina", "Yasuo"]
    }
  },

  // ===== ADC =====
  Ashe: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Cut Down"],
      secondary: { tree: "Inspiration", runes: ["Magical Footwear", "Approach Velocity"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Approach Velocity + slow = infinite kiting"
    },
    vsHardLane: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Bloodline", "Cut Down"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Fleet for survival",
      examples: ["Draven", "Lucian", "Samira", "Kalista"]
    }
  },

  Caitlyn: {
    default: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Sorcery", runes: ["Absolute Focus", "Gathering Storm"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Fleet + range = lane bully"
    },
    vsKillLane: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Resolve survival",
      examples: ["Draven", "Samira", "Lucian", "Kalista"]
    }
  },

  Draven: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Bloodline", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Conqueror for extended fights, cash in stacks"
    },
    vsKillLane: {
      keystone: "Hail of Blades",
      primary: ["Taste of Blood", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Bloodline"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "HoB for instant burst kills",
      examples: ["Draven", "Samira", "Lucian"]
    }
  },

  Ezreal: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Inspiration", runes: ["Magical Footwear", "Biscuit Delivery"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror + Q spam = infinite stacks"
    },
    vsHardLane: {
      keystone: "First Strike",
      primary: ["Magical Footwear", "Biscuit Delivery", "Cosmic Insight"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Bloodline"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "First Strike gold scaling",
      examples: ["Draven", "Lucian", "Samira"]
    }
  },

  Jhin: {
    default: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Sorcery", runes: ["Absolute Focus", "Gathering Storm"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Fleet + 4th shot crit = huge MS"
    },
    vsPoke: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Sustain for poke lanes",
      examples: ["Caitlyn", "Varus", "Ashe", "Senna"]
    }
  },

  Jinx: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: { tree: "Sorcery", runes: ["Absolute Focus", "Gathering Storm"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Hypercarry scaling"
    },
    vsKillLane: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Resolve for survival",
      examples: ["Draven", "Lucian", "Samira", "Kalista"]
    }
  },

  KaiSa: {
    default: {
      keystone: "Hail of Blades",
      primary: ["Taste of Blood", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Alacrity"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "HoB for instant plasma stacks"
    },
    vsLongFights: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo for extended fights",
      examples: ["Vayne", "Kog'Maw", "Twitch"]
    }
  },

  Lucian: {
    default: {
      keystone: "Press the Attack",
      primary: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "PTA procs instantly with passive"
    },
    vsTanks: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Cut Down"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Conqueror + Cut Down vs tanks",
      examples: ["Zac", "Leona", "Nautilus", "Braum"]
    }
  },

  MissFortune: {
    default: {
      keystone: "Press the Attack",
      primary: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: { tree: "Sorcery", runes: ["Manaflow Band", "Gathering Storm"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "PTA for burst, AD shards for Q poke"
    },
    vsKillLane: {
      keystone: "Dark Harvest",
      primary: ["Taste of Blood", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Alacrity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Dark Harvest for teamfight resets",
      examples: ["Draven", "Lucian", "Samira"]
    }
  },

  Samira: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Bloodline", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Conqueror for extended ult, Bloodline sustain"
    }
  },

  Vayne: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo for W procs"
    },
    vsHardLane: {
      keystone: "Fleet Footwork",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Overgrowth"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Fleet to survive lane",
      examples: ["Draven", "Caitlyn", "Lucian", "Miss Fortune"]
    },
    vsTanks: {
      keystone: "Press the Attack",
      primary: ["Triumph", "Legend: Alacrity", "Cut Down"],
      secondary: { tree: "Sorcery", runes: ["Absolute Focus", "Gathering Storm"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "PTA + Cut Down for maximum tank shred"
    }
  },

  // ===== JUNGLE =====
  Amumu: {
    default: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Conditioning", "Unflinching"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Attack Speed", "Armor", "Health"],
      reasoning: "Aftershock for engage tankiness"
    }
  },

  Diana: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Conqueror + passive = drain tank"
    },
    vsSquishy: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Alacrity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Electrocute for one-shots"
    }
  },

  Evelynn: {
    default: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Sorcery", runes: ["Absolute Focus", "Gathering Storm"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst assassin, Ultimate Hunter for more R"
    }
  },

  Hecarim: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror for extended fights"
    },
    vsSquishies: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Electrocute for burst ganks"
    }
  },

  KhaZix: {
    default: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Burst assassin"
    },
    vsHeavyCC: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Tenacity mandatory vs CC"
    }
  },

  LeeSin: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Conqueror stacks fast with combos"
    },
    vsSquishy: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Electrocute for one-shot insecs"
    }
  },

  MasterYi: {
    default: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Lethal Tempo = infinite autos"
    },
    vsHeavyCC: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Conditioning", "Unflinching"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Triple Tenacity vs CC comps"
    }
  },

  Viego: {
    default: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      reasoning: "Conqueror + resets = infinite fights"
    }
  },

  // ===== SUPPORT =====
  Alistar: {
    default: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Bone Plating", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Armor", "Health"],
      reasoning: "Aftershock for engage tankiness"
    },
    vsPoke: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Second Wind", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Armor", "Health"],
      reasoning: "Second Wind for poke sustain",
      examples: ["Lux", "Xerath", "Vel'Koz", "Brand"]
    }
  },

  Blitzcrank: {
    default: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Bone Plating", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Armor", "Health"],
      reasoning: "Aftershock after Q pull"
    }
  },

  Janna: {
    default: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Celerity", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Revitalize"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Aery for shields, Celerity for W passive"
    },
    vsAllIn: {
      keystone: "Glacial Augment",
      primary: ["Magical Footwear", "Biscuit Delivery", "Cosmic Insight"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Revitalize"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "Glacial disengage vs all-in",
      examples: ["Leona", "Nautilus", "Alistar", "Rell"]
    }
  },

  Leona: {
    default: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Bone Plating", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Armor", "Health"],
      reasoning: "Aftershock = unkillable during engage"
    },
    vsPoke: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Second Wind", "Overgrowth"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Time Warp Tonic"] },
      shards: ["Ability Haste", "Armor", "Health"],
      reasoning: "Second Wind + Biscuits to survive poke",
      examples: ["Lux", "Xerath", "Vel'Koz", "Senna"]
    }
  },

  Lulu: {
    default: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Scorch"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Revitalize"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Aery procs on poke AND shields"
    },
    vsAllIn: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Bone Plating", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Bone Plating + Unflinching vs engage",
      examples: ["Leona", "Nautilus", "Alistar", "Rell"]
    }
  },

  Morgana: {
    default: {
      keystone: "Arcane Comet",
      primary: ["Manaflow Band", "Transcendence", "Scorch"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Comet + Q bind = guaranteed hit"
    }
  },

  Nami: {
    default: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Scorch"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Revitalize"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Aery for W bounces, Revitalize for heals"
    }
  },

  Nautilus: {
    default: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Bone Plating", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Armor", "Health"],
      reasoning: "Aftershock after Q hook"
    }
  },

  Thresh: {
    default: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Bone Plating", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "Aftershock for engage"
    },
    vsPoke: {
      keystone: "Guardian",
      primary: ["Font of Life", "Second Wind", "Revitalize"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Adaptive", "Health"],
      reasoning: "Guardian to protect ADC from poke",
      examples: ["Lux", "Xerath", "Vel'Koz", "Brand"]
    }
  },

  Soraka: {
    default: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Revitalize"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      reasoning: "Aery for heals, Revitalize amplifies W"
    }
  }
};

// ============================================
// ROLE-BASED DEFAULTS
// ============================================

export const roleRuneDefaults = {
  Top: {
    bruiser: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Resolve", runes: ["Second Wind", "Unflinching"] },
      shards: ["Adaptive", "Adaptive", "Health/Armor"],
      champions: ["Darius", "Aatrox", "Riven", "Renekton", "Jax", "Sett", "Fiora", "Camille"]
    },
    tank: {
      keystone: "Grasp of the Undying",
      primary: ["Demolish", "Conditioning", "Overgrowth"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Armor", "Health"],
      champions: ["Malphite", "Ornn", "Sion", "Cho'Gath", "Shen", "Poppy", "Maokai"]
    }
  },
  Jungle: {
    bruiser: {
      keystone: "Conqueror",
      primary: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: { tree: "Domination", runes: ["Sudden Impact", "Treasure Hunter"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      champions: ["Lee Sin", "Viego", "Xin Zhao", "Vi", "Jarvan IV", "Hecarim"]
    },
    assassin: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      champions: ["Kha'Zix", "Rengar", "Evelynn", "Elise", "Nidalee"]
    },
    tank: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Conditioning", "Unflinching"],
      secondary: { tree: "Precision", runes: ["Triumph", "Legend: Tenacity"] },
      shards: ["Attack Speed", "Armor", "Health"],
      champions: ["Amumu", "Sejuani", "Zac", "Rammus", "Nunu"]
    }
  },
  Mid: {
    burstMage: {
      keystone: "Electrocute",
      primary: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"],
      secondary: { tree: "Sorcery", runes: ["Manaflow Band", "Transcendence"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      champions: ["Ahri", "Syndra", "LeBlanc", "Annie", "Vex"]
    },
    controlMage: {
      keystone: "Arcane Comet",
      primary: ["Manaflow Band", "Transcendence", "Scorch"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      champions: ["Viktor", "Orianna", "Azir", "Anivia"]
    },
    assassin: {
      keystone: "Electrocute",
      primary: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"],
      secondary: { tree: "Sorcery", runes: ["Transcendence", "Scorch"] },
      shards: ["Adaptive", "Adaptive", "Armor"],
      champions: ["Zed", "Talon", "Qiyana", "Akali", "Fizz"]
    }
  },
  ADC: {
    hypercarry: {
      keystone: "Lethal Tempo",
      primary: ["Triumph", "Legend: Alacrity", "Coup de Grace"],
      secondary: { tree: "Sorcery", runes: ["Absolute Focus", "Gathering Storm"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      champions: ["Jinx", "Kog'Maw", "Twitch", "Aphelios", "Zeri", "Vayne"]
    },
    laneBully: {
      keystone: "Press the Attack",
      primary: ["Triumph", "Legend: Bloodline", "Coup de Grace"],
      secondary: { tree: "Domination", runes: ["Taste of Blood", "Treasure Hunter"] },
      shards: ["Attack Speed", "Adaptive", "Health"],
      champions: ["Draven", "Lucian", "Kalista", "Samira", "Tristana"]
    }
  },
  Support: {
    engageTank: {
      keystone: "Aftershock",
      primary: ["Font of Life", "Bone Plating", "Unflinching"],
      secondary: { tree: "Inspiration", runes: ["Biscuit Delivery", "Cosmic Insight"] },
      shards: ["Ability Haste", "Armor", "Health"],
      champions: ["Leona", "Nautilus", "Alistar", "Rell", "Thresh", "Blitzcrank"]
    },
    enchanter: {
      keystone: "Summon Aery",
      primary: ["Manaflow Band", "Transcendence", "Gathering Storm"],
      secondary: { tree: "Resolve", runes: ["Revitalize", "Second Wind"] },
      shards: ["Adaptive", "Adaptive", "Health"],
      champions: ["Lulu", "Nami", "Janna", "Soraka", "Yuumi", "Milio"]
    }
  }
};

// ============================================
// RUNE RECOMMENDATION FUNCTION
// ============================================

export const getRecommendedRunes = (champion, role, enemyChampion = null) => {
  if (enemyChampion && matchupRunes[champion]) {
    const champMatchups = matchupRunes[champion];
    for (const [matchupType, matchup] of Object.entries(champMatchups)) {
      if (matchup.examples && matchup.examples.includes(enemyChampion)) {
        return { ...matchup, source: `${champion} vs ${enemyChampion}`, isMatchupSpecific: true };
      }
    }
  }
  
  if (matchupRunes[champion]?.default) {
    return { ...matchupRunes[champion].default, source: `${champion} default`, isMatchupSpecific: false };
  }
  
  const roleDefaults = roleRuneDefaults[role];
  if (roleDefaults) {
    for (const [style, page] of Object.entries(roleDefaults)) {
      if (page.champions?.includes(champion)) {
        return { ...page, source: `${role} ${style}`, isMatchupSpecific: false };
      }
    }
  }
  
  return null;
};

export default { runeMath, statShards, matchupRunes, roleRuneDefaults, getRecommendedRunes };
