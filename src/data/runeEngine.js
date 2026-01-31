// Advanced Rune Recommendation System
// Matchup-specific rune pages with mathematical analysis for ALL champions

// ==================== RUNE MATH & FORMULAS ====================
export const runeMath = {
  // PRECISION KEYSTONES
  Conqueror: {
    description: "Stacks up to 12 times. At max stacks, gain Adaptive Force and heal for a portion of damage dealt.",
    formula: "Adaptive Force = 2-4.5 per stack (based on level) = 24-54 total at max stacks",
    healing: "Heals for 8% of damage dealt to champions (5% for ranged)",
    stackRate: "1 stack per ability hit, 2 stacks per auto attack",
    math: {
      level1: { perStack: 2, maxAD: 24, maxAP: 40 },
      level6: { perStack: 2.7, maxAD: 32.4, maxAP: 54 },
      level11: { perStack: 3.5, maxAD: 42, maxAP: 70 },
      level18: { perStack: 4.5, maxAD: 54, maxAP: 90 }
    },
    bestFor: ["Extended trades", "Drain tanks", "Bruisers", "DPS mages"],
    worstAgainst: ["Burst champions", "Poke lanes", "Short trades"],
    goldValue: "At level 18 max stacks: ~1890g worth of AD or ~1980g worth of AP"
  },

  LethalTempo: {
    description: "Gain attack speed with each auto. At max stacks, gain bonus range.",
    formula: "5-15% AS per stack (based on level), 6 stacks max = 30-90% AS",
    rangeBonus: "+50 range at max stacks (melee: +75 range)",
    math: {
      level1: { perStack: 5, maxAS: 30 },
      level6: { perStack: 8, maxAS: 48 },
      level11: { perStack: 12, maxAS: 72 },
      level18: { perStack: 15, maxAS: 90 }
    },
    bestFor: ["Auto-attackers", "ADCs", "On-hit builds", "Extended fights"],
    worstAgainst: ["Burst trades", "Kiting enemies", "Short engages"],
    goldValue: "At level 18 max stacks: ~2700g worth of attack speed"
  },

  FleetFootwork: {
    description: "Energized attacks heal you and grant movement speed.",
    formula: "Heal = 10-100 (+30% bonus AD)(+20% AP) based on level",
    movementSpeed: "20% for 1 second",
    energizeRate: "Charges via movement and attacks (100 stacks needed)",
    math: {
      level1: { baseHeal: 10 },
      level6: { baseHeal: 35 },
      level11: { baseHeal: 60 },
      level18: { baseHeal: 100 }
    },
    bestFor: ["Sustain lanes", "Kiting ADCs", "Poke matchups", "Immobile carries"],
    worstAgainst: ["All-in matchups where damage > sustain"],
    goldValue: "Varies by game length, ~500-1500g in healing over lane phase"
  },

  PressTheAttack: {
    description: "3 consecutive attacks expose target for bonus damage.",
    formula: "Proc damage = 40-180 (based on level). Exposed targets take 8-12% increased damage for 6s.",
    math: {
      level1: { procDamage: 40, ampPercent: 8 },
      level6: { procDamage: 75, ampPercent: 9 },
      level11: { procDamage: 120, ampPercent: 10.5 },
      level18: { procDamage: 180, ampPercent: 12 }
    },
    bestFor: ["Short trades", "Burst ADCs", "Dueling", "Team amplification"],
    worstAgainst: ["Tanks that you can't 3-hit", "Kiting enemies"],
    goldValue: "The 12% damage amp on a 2000 damage combo = 240 extra damage"
  },

  // DOMINATION KEYSTONES
  Electrocute: {
    description: "3 unique attacks/abilities deal bonus adaptive damage.",
    formula: "30-180 (+40% bonus AD)(+25% AP) based on level",
    cooldown: "25-20 seconds based on level",
    math: {
      level1: { baseDamage: 30 },
      level6: { baseDamage: 70 },
      level11: { baseDamage: 120 },
      level18: { baseDamage: 180 }
    },
    bestFor: ["Burst assassins", "All-in combos", "Short trades"],
    worstAgainst: ["Poke lanes", "Extended trades", "Tanks"],
    goldValue: "At level 18 with 100 bonus AD: 180+40 = 220 burst damage"
  },

  DarkHarvest: {
    description: "Damaging low HP champions deals bonus damage and harvests their soul.",
    formula: "20-60 (+5 per soul)(+25% bonus AD)(+15% AP) based on level",
    threshold: "Enemy must be below 50% HP",
    math: {
      level1: { baseDamage: 20 },
      level6: { baseDamage: 35 },
      level18: { baseDamage: 60 },
      perSoul: 5
    },
    bestFor: ["Scaling assassins", "Reset champions", "Teamfight divers"],
    worstAgainst: ["Lane bullies", "Early game pressure"],
    scaling: "30 souls = +150 damage. Infinite scaling potential."
  },

  HailOfBlades: {
    description: "First 3 attacks against champions have 110% bonus attack speed.",
    formula: "110% AS for 3 attacks, can exceed AS cap",
    cooldown: "12 seconds out of combat",
    bestFor: ["Burst ADCs", "On-hit burst", "Quick trades"],
    worstAgainst: ["Extended fights", "Kiting"],
    goldValue: "110% AS = ~3300g worth of stats for 3 autos"
  },

  // SORCERY KEYSTONES
  ArcaneComet: {
    description: "Damaging abilities hurl a comet.",
    formula: "30-100 (+20% bonus AD)(+10% AP) based on level",
    cooldown: "20-8 seconds, reduced by ability hits",
    math: {
      level1: { baseDamage: 30, cooldown: 20 },
      level6: { baseDamage: 55, cooldown: 16 },
      level11: { baseDamage: 75, cooldown: 13 },
      level18: { baseDamage: 100, cooldown: 8 }
    },
    bestFor: ["Poke mages", "CC abilities (guaranteed hit)", "Lane bullies"],
    worstAgainst: ["Mobile enemies", "All-in matchups"],
    goldValue: "At level 18 with 200 AP: 100+20 = 120 damage per hit"
  },

  SummonAery: {
    description: "Attacks and abilities send Aery to damage enemies or shield allies.",
    formula: "Damage: 10-40 (+10% bonus AD)(+15% AP). Shield: 30-75 (+25% bonus AD)(+40% AP)",
    cooldown: "Aery travel time (returns to you)",
    math: {
      level1: { damage: 10, shield: 30 },
      level6: { damage: 20, shield: 45 },
      level18: { damage: 40, shield: 75 }
    },
    bestFor: ["Enchanters", "Poke supports", "DOT mages"],
    worstAgainst: ["Burst lanes where poke doesn't matter"],
    goldValue: "Shield scales well with AP - 40% ratio is very efficient"
  },

  PhaseRush: {
    description: "3 attacks/abilities grant 25-40% MS and 75% slow resist.",
    formula: "25-40% MS based on level for 3 seconds",
    cooldown: "15 seconds",
    bestFor: ["Kiting mages", "Chasing bruisers", "Escaping ganks"],
    worstAgainst: ["Lanes where you don't need mobility"],
    goldValue: "Mobility is hard to value but very impactful"
  },

  // RESOLVE KEYSTONES
  GraspOfTheUndying: {
    description: "Every 4 seconds in combat, next auto steals HP permanently.",
    formula: "Damage/Heal: 4% of max HP (2.4% for ranged). Permanent HP: +5 (+2.5 for ranged)",
    math: {
      at1000HP: { damage: 40, heal: 40, permanent: 5 },
      at2000HP: { damage: 80, heal: 80, permanent: 5 },
      at3000HP: { damage: 120, heal: 120, permanent: 5 }
    },
    bestFor: ["Tanks", "Short trades", "HP stacking"],
    worstAgainst: ["Poke lanes", "Can't get in auto range"],
    scaling: "20 procs = +100 permanent HP = 267g value per 20 procs"
  },

  Aftershock: {
    description: "Immobilizing enemies grants armor/MR, then explodes.",
    formula: "Resists: 35 + 80% bonus resists. Explosion: 25-120 (+8% bonus HP)",
    duration: "2.5 seconds",
    math: {
      level1: { explosion: 25, baseResists: 35 },
      level6: { explosion: 50, baseResists: 35 },
      level11: { explosion: 80, baseResists: 35 },
      level18: { explosion: 120, baseResists: 35 }
    },
    bestFor: ["Engage tanks", "CC supports", "Diving"],
    worstAgainst: ["No CC in kit"],
    goldValue: "35 armor/MR = ~1400g in resists for 2.5s"
  },

  Guardian: {
    description: "Shield nearby ally when you or they take damage.",
    formula: "Shield: 45-120 (+15% AP)(+9% bonus HP) for 1.5s. MS: 20% for 1.5s",
    cooldown: "70-40 seconds based on level",
    math: {
      level1: { shield: 45 },
      level6: { shield: 70 },
      level11: { shield: 95 },
      level18: { shield: 120 }
    },
    bestFor: ["Defensive supports", "Protecting ADC", "Poke lanes"],
    worstAgainst: ["All-in where shield isn't enough"],
    goldValue: "At 1000 bonus HP: 120 + 90 = 210 shield value"
  },

  // INSPIRATION KEYSTONES
  GlacialAugment: {
    description: "Immobilizing enemies creates a freeze ray slowing zone.",
    formula: "30% slow + 3% per 100 AP, up to 40% slow. Zone lasts 3s.",
    cooldown: "25 seconds per enemy",
    bestFor: ["CC mages", "Engage supports", "Zone control"],
    worstAgainst: ["Enemies with dashes", "No CC in kit"]
  },

  UnsealedSpellbook: {
    description: "Swap summoner spells during the game.",
    formula: "First swap at 6 min, then every 4 min. Summoner spell haste: 15-40%",
    bestFor: ["High elo flexibility", "Support roaming"],
    worstAgainst: ["Consistency reliant", "Need specific summoners"]
  },

  FirstStrike: {
    description: "If you damage an enemy first, deal 9% bonus damage and gain gold.",
    formula: "9% bonus TRUE damage for 3s. Gold: 100% damage dealt to champions (70% for ranged) × 0.05",
    cooldown: "25-15 seconds",
    math: {
      example: "1000 damage dealt = 90 bonus true damage + 50 gold (35 for ranged)"
    },
    bestFor: ["Poke champions", "Burst champions", "Gold generation"],
    worstAgainst: ["Aggressive lanes that hit you first"],
    goldValue: "Can generate 300-600+ gold per game"
  }
};

// ==================== MINOR RUNES MATH ====================
export const minorRuneMath = {
  // Precision
  Overheal: { formula: "Excess healing becomes shield up to 10% max HP", value: "At 2000 HP = 200 shield max" },
  Triumph: { formula: "Takedowns restore 10% missing HP + 20 gold", value: "10 kills = 200 bonus gold" },
  PresenceOfMind: { formula: "Takedowns restore 15% max mana", value: "Sustain for mana-hungry champs" },
  LegendAlacrity: { formula: "3% AS + 1.5% per stack (max 10) = 18% AS", value: "~540g worth of AS" },
  LegendTenacity: { formula: "5% + 2.5% per stack (max 10) = 30% Tenacity", value: "Stacks with Mercury Treads" },
  LegendBloodline: { formula: "0.4% per stack (max 10) = 4% Lifesteal", value: "~350g worth of lifesteal" },
  CoupDeGrace: { formula: "8% more damage to targets below 40% HP", value: "Great for executes" },
  CutDown: { formula: "5-15% more damage based on HP difference", value: "Best vs tanks" },
  LastStand: { formula: "5-11% more damage when below 60% HP", value: "Best for drain tanks" },

  // Domination
  CheapShot: { formula: "10-45 bonus true damage to CC'd targets", value: "~300-500 damage per game" },
  TasteOfBlood: { formula: "16-30 (+15% bonus AD)(+8% AP) healing", value: "20s CD, good sustain" },
  SuddenImpact: { formula: "7 Lethality + 6 Magic Pen after dash/blink", value: "~200g worth of pen" },
  ZombieWard: { formula: "Killing wards spawns allied ward + 1.2 AD/2 AP per ward", value: "Up to 30 AD/50 AP" },
  GhostPoro: { formula: "Poro in bush gives vision + 1.2 AD/2 AP per poro", value: "Up to 30 AD/50 AP" },
  EyeballCollection: { formula: "1.2 AD/2 AP per takedown (max 10) = 12 AD/20 AP", value: "~420g AD or ~435g AP" },
  TreasureHunter: { formula: "50g per unique takedown (max 5) = 250g", value: "Fast gold generation" },
  RelentlessHunter: { formula: "5 + 8 per stack out of combat MS (max 45)", value: "Great for roaming" },
  UltimateHunter: { formula: "5 + 5% per stack ultimate CDR (max 30%)", value: "Ult-dependent champions" },

  // Sorcery
  NullifyingOrb: { formula: "Shield vs magic: 35-110 (+15% bonus AD)(+10% AP)", value: "Clutch vs AP burst" },
  ManaflowBand: { formula: "25 max mana per hit (max 250) then 1% mana regen", value: "Great for mana issues" },
  NimbusCloak: { formula: "5-25% MS after summoner spell for 2s", value: "Flash engage/escape" },
  Transcendence: { formula: "5 AH at 5, 5 AH at 8, ability refund at 11", value: "10 AH = ~263g" },
  Celerity: { formula: "7% bonus MS, MS bonuses +7% effective", value: "Good for MS stacking" },
  AbsoluteFocus: { formula: "1.8-18 AD or 3-30 AP when above 70% HP", value: "~630g AD or ~650g AP" },
  Scorch: { formula: "20-40 magic damage over 1s", value: "~100-200 damage per lane" },
  Waterwalking: { formula: "25 MS + 3-18 AD/5-30 AP in river", value: "Great for junglers" },
  GatheringStorm: { formula: "10 min: 4.8 AD/8 AP, 20 min: 14.4 AD/24 AP, 30 min: 28.8 AD/48 AP", value: "Best scaling rune" },

  // Resolve
  Demolish: { formula: "30% max HP + 100-350 damage to tower every 45s", value: "~2 plates per game" },
  FontOfLife: { formula: "CC'd enemies marked, allies heal 5+1% max HP", value: "Team sustain" },
  ShieldBash: { formula: "1-10 bonus AR/MR when shielded, empowered auto", value: "Synergy with shields" },
  Conditioning: { formula: "After 12 min: +8 AR/MR + 3% bonus resists", value: "~540g worth of resists" },
  SecondWind: { formula: "Heal 3% missing HP over 10s after taking damage", value: "Great vs poke" },
  BonePlating: { formula: "Next 3 attacks/abilities deal 30-60 less damage", value: "Blocks 90-180 damage" },
  Overgrowth: { formula: "+3 HP per 8 nearby minion deaths, +3.5% HP at 120", value: "~200-400 bonus HP" },
  Revitalize: { formula: "+5% heals/shields, +10% on low HP targets", value: "Enchanter synergy" },
  Unflinching: { formula: "10-30% tenacity/slow resist based on missing HP", value: "Anti-CC" },

  // Inspiration
  HextechFlashtraption: { formula: "Channel flash over walls", value: "Unique engage angles" },
  MagicalFootwear: { formula: "Free boots at 12 min (+10 MS)", value: "300g saved + better boots" },
  CashBack: { formula: "Refund 3% of item cost as gold", value: "~150-300g over full build" },
  TripleTonicFormula: { formula: "Elixir gives 3 buffs instead of 1", value: "Strong late game" },
  TimeWarpTonic: { formula: "Potions give 50% effect instantly + 5% MS", value: "Strong lane sustain" },
  BiscuitDelivery: { formula: "3 biscuits (12% max HP/mana) + 40 mana", value: "120 permanent mana" },
  CosmicInsight: { formula: "18 summoner spell haste, 10 item haste", value: "More flash/exhaust" },
  ApproachVelocity: { formula: "+7.5% MS toward CC'd/movement impaired enemies", value: "Chase potential" },
  JackOfAllTrades: { formula: "5 AH + 9 adaptive per 2 unique stats", value: "Diverse builds" }
};

// ==================== MATCHUP-SPECIFIC RUNE PAGES ====================
export const generateRunePage = (champion, enemyChampion, role, traits, enemyTraits) => {
  const pages = [];
  
  // Analyze matchup
  const isBurstMatchup = enemyTraits?.burst >= 4;
  const isPokeMatchup = enemyTraits?.range === 'ranged' && traits?.range === 'melee';
  const isSustainMatchup = enemyTraits?.sustain >= 4;
  const isAllInMatchup = traits?.burst >= 4 || traits?.dps >= 4;
  const isTankMatchup = enemyTraits?.tankiness >= 4;
  const isAssassinMatchup = enemyTraits?.burst >= 4 && enemyTraits?.mobility >= 4;
  
  // Determine primary tree based on champion type
  let primaryTree, keystone, primaryRunes;
  let secondaryTree, secondaryRunes;
  
  // ========== TOP LANE RUNES ==========
  if (role === 'Top') {
    if (traits?.sustain >= 4 || traits?.damage === 'physical' && traits?.dps >= 3) {
      // Bruiser/Fighter
      primaryTree = 'Precision';
      if (isPokeMatchup || isBurstMatchup) {
        keystone = 'Fleet Footwork';
        primaryRunes = ['Triumph', 'Legend: Tenacity', 'Last Stand'];
      } else {
        keystone = 'Conqueror';
        primaryRunes = ['Triumph', 'Legend: Tenacity', 'Last Stand'];
      }
      
      if (isPokeMatchup) {
        secondaryTree = 'Resolve';
        secondaryRunes = ['Second Wind', 'Unflinching'];
      } else if (isBurstMatchup) {
        secondaryTree = 'Resolve';
        secondaryRunes = ['Bone Plating', 'Overgrowth'];
      } else {
        secondaryTree = 'Resolve';
        secondaryRunes = ['Second Wind', 'Revitalize'];
      }
    } else if (traits?.tankiness >= 4) {
      // Tank
      primaryTree = 'Resolve';
      if (isPokeMatchup) {
        keystone = 'Grasp of the Undying';
        primaryRunes = ['Demolish', 'Second Wind', 'Overgrowth'];
      } else {
        keystone = 'Grasp of the Undying';
        primaryRunes = ['Demolish', 'Bone Plating', 'Overgrowth'];
      }
      secondaryTree = 'Precision';
      secondaryRunes = ['Legend: Tenacity', 'Last Stand'];
    } else if (traits?.burst >= 4) {
      // Assassin top (Akali, etc)
      primaryTree = 'Domination';
      keystone = 'Electrocute';
      primaryRunes = ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'];
      secondaryTree = 'Resolve';
      secondaryRunes = [isPokeMatchup ? 'Second Wind' : 'Bone Plating', 'Overgrowth'];
    }
  }
  
  // ========== JUNGLE RUNES ==========
  if (role === 'Jungle') {
    if (traits?.burst >= 4 && traits?.mobility >= 3) {
      // Assassin jungler
      primaryTree = 'Domination';
      keystone = 'Electrocute';
      primaryRunes = ['Sudden Impact', 'Eyeball Collection', 'Relentless Hunter'];
      secondaryTree = 'Precision';
      secondaryRunes = ['Triumph', 'Coup de Grace'];
    } else if (traits?.sustain >= 3 && traits?.dps >= 3) {
      // Bruiser jungler
      primaryTree = 'Precision';
      keystone = 'Conqueror';
      primaryRunes = ['Triumph', 'Legend: Alacrity', 'Last Stand'];
      secondaryTree = 'Resolve';
      secondaryRunes = ['Conditioning', 'Unflinching'];
    } else if (traits?.tankiness >= 4) {
      // Tank jungler
      primaryTree = 'Resolve';
      keystone = 'Aftershock';
      primaryRunes = ['Font of Life', 'Conditioning', 'Unflinching'];
      secondaryTree = 'Precision';
      secondaryRunes = ['Triumph', 'Legend: Tenacity'];
    } else if (traits?.dps >= 4) {
      // DPS jungler (Yi, Kindred)
      primaryTree = 'Precision';
      keystone = 'Lethal Tempo';
      primaryRunes = ['Triumph', 'Legend: Alacrity', 'Coup de Grace'];
      secondaryTree = 'Domination';
      secondaryRunes = ['Eyeball Collection', 'Treasure Hunter'];
    }
  }
  
  // ========== MID LANE RUNES ==========
  if (role === 'Mid') {
    if (traits?.burst >= 4 && traits?.damage === 'physical') {
      // AD Assassin
      primaryTree = 'Domination';
      keystone = 'Electrocute';
      primaryRunes = ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'];
      if (isPokeMatchup) {
        secondaryTree = 'Resolve';
        secondaryRunes = ['Second Wind', 'Unflinching'];
      } else {
        secondaryTree = 'Precision';
        secondaryRunes = ['Triumph', 'Coup de Grace'];
      }
    } else if (traits?.burst >= 4 && traits?.damage === 'magic') {
      // AP Assassin/Burst mage
      primaryTree = 'Domination';
      keystone = 'Electrocute';
      primaryRunes = ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'];
      secondaryTree = 'Sorcery';
      secondaryRunes = ['Transcendence', 'Gathering Storm'];
    } else if (traits?.dps >= 4) {
      // DPS Mage
      primaryTree = 'Sorcery';
      if (enemyTraits?.mobility >= 4) {
        keystone = 'Phase Rush';
      } else {
        keystone = 'Arcane Comet';
      }
      primaryRunes = ['Manaflow Band', 'Transcendence', 'Gathering Storm'];
      secondaryTree = 'Inspiration';
      secondaryRunes = ['Biscuit Delivery', 'Cosmic Insight'];
    } else if (traits?.range === 'ranged' && traits?.cc >= 2) {
      // Control Mage
      primaryTree = 'Sorcery';
      keystone = 'Arcane Comet';
      primaryRunes = ['Manaflow Band', 'Transcendence', 'Scorch'];
      secondaryTree = 'Inspiration';
      secondaryRunes = ['Biscuit Delivery', 'Cosmic Insight'];
    }
  }
  
  // ========== ADC RUNES ==========
  if (role === 'ADC') {
    if (traits?.dps >= 4) {
      // Hypercarry ADC
      primaryTree = 'Precision';
      keystone = 'Lethal Tempo';
      primaryRunes = ['Triumph', 'Legend: Alacrity', 'Coup de Grace'];
      secondaryTree = 'Domination';
      secondaryRunes = ['Taste of Blood', 'Treasure Hunter'];
    } else if (traits?.burst >= 4) {
      // Burst ADC (Draven, Jhin)
      primaryTree = 'Precision';
      keystone = 'Press the Attack';
      primaryRunes = ['Triumph', 'Legend: Bloodline', 'Coup de Grace'];
      secondaryTree = 'Domination';
      secondaryRunes = ['Taste of Blood', 'Eyeball Collection'];
    } else if (traits?.mobility >= 4) {
      // Mobile ADC (Ezreal, Lucian)
      primaryTree = 'Precision';
      keystone = 'Press the Attack';
      primaryRunes = ['Presence of Mind', 'Legend: Bloodline', 'Coup de Grace'];
      secondaryTree = 'Inspiration';
      secondaryRunes = ['Magical Footwear', 'Biscuit Delivery'];
    }
    
    // Adjust for hard matchups
    if (isAssassinMatchup) {
      secondaryTree = 'Resolve';
      secondaryRunes = ['Bone Plating', 'Overgrowth'];
    }
  }
  
  // ========== SUPPORT RUNES ==========
  if (role === 'Support') {
    if (traits?.cc >= 4 && traits?.tankiness >= 3) {
      // Engage Support
      primaryTree = 'Resolve';
      keystone = 'Aftershock';
      primaryRunes = ['Font of Life', 'Bone Plating', 'Unflinching'];
      secondaryTree = 'Hextech';
      secondaryRunes = ['Hextech Flashtraption', 'Cosmic Insight'];
    } else if (traits?.sustain >= 4) {
      // Enchanter
      primaryTree = 'Sorcery';
      keystone = 'Summon Aery';
      primaryRunes = ['Manaflow Band', 'Transcendence', 'Gathering Storm'];
      secondaryTree = 'Resolve';
      secondaryRunes = ['Revitalize', 'Bone Plating'];
    } else if (traits?.burst >= 4) {
      // Mage Support
      primaryTree = 'Domination';
      keystone = 'Electrocute';
      primaryRunes = ['Cheap Shot', 'Zombie Ward', 'Relentless Hunter'];
      secondaryTree = 'Precision';
      secondaryRunes = ['Presence of Mind', 'Coup de Grace'];
    } else if (traits?.cc >= 3) {
      // Hook Support
      primaryTree = 'Resolve';
      keystone = 'Aftershock';
      primaryRunes = ['Font of Life', 'Bone Plating', 'Unflinching'];
      secondaryTree = 'Inspiration';
      secondaryRunes = ['Hextech Flashtraption', 'Cosmic Insight'];
    }
  }
  
  // Stat shards based on matchup
  let statShards;
  if (traits?.damage === 'physical') {
    if (enemyTraits?.damage === 'physical') {
      statShards = ['Adaptive Force', 'Adaptive Force', 'Armor'];
    } else if (enemyTraits?.damage === 'magic') {
      statShards = ['Adaptive Force', 'Adaptive Force', 'Magic Resist'];
    } else {
      statShards = ['Adaptive Force', 'Adaptive Force', 'Health'];
    }
  } else if (traits?.damage === 'magic') {
    if (enemyTraits?.damage === 'physical') {
      statShards = ['Adaptive Force', 'Adaptive Force', 'Armor'];
    } else if (enemyTraits?.damage === 'magic') {
      statShards = ['Adaptive Force', 'Adaptive Force', 'Magic Resist'];
    } else {
      statShards = ['Adaptive Force', 'Adaptive Force', 'Health'];
    }
  } else {
    statShards = ['Attack Speed', 'Adaptive Force', 'Health'];
  }
  
  return {
    primaryTree: primaryTree || 'Precision',
    keystone: keystone || 'Conqueror',
    primaryRunes: primaryRunes || ['Triumph', 'Legend: Alacrity', 'Coup de Grace'],
    secondaryTree: secondaryTree || 'Resolve',
    secondaryRunes: secondaryRunes || ['Bone Plating', 'Overgrowth'],
    statShards: statShards || ['Adaptive Force', 'Adaptive Force', 'Health'],
    reasoning: {
      keystone: getKeystoneReasoning(keystone, traits, enemyTraits),
      secondary: getSecondaryReasoning(secondaryTree, secondaryRunes, traits, enemyTraits)
    }
  };
};

// Helper function for keystone reasoning
const getKeystoneReasoning = (keystone, traits, enemyTraits) => {
  const reasons = {
    'Conqueror': `Extended fights favor you. At max stacks, gain ${runeMath.Conqueror.math.level18.maxAD} AD and 8% healing.`,
    'Lethal Tempo': `Your DPS scales with attack speed. At max stacks, +${runeMath.LethalTempo.math.level18.maxAS}% AS + 50 range.`,
    'Fleet Footwork': `Sustain through poke/hard matchup. Heals ${runeMath.FleetFootwork.math.level18.baseHeal}+ and gives MS to kite.`,
    'Press the Attack': `Short trades are your strength. 8-12% damage amp for team after 3 hits.`,
    'Electrocute': `Burst combo deals ${runeMath.Electrocute.math.level18.baseDamage}+ bonus damage. Perfect for assassinations.`,
    'Dark Harvest': `Scales infinitely. Each soul = +5 damage. Great for teamfight resets.`,
    'Hail of Blades': `110% AS for 3 autos = massive burst. Breaks AS cap.`,
    'Arcane Comet': `Poke pattern with abilities. ${runeMath.ArcaneComet.math.level18.baseDamage}+ damage per hit.`,
    'Summon Aery': `Poke and protect. Damage on enemies, shield on allies. Very versatile.`,
    'Phase Rush': `Kiting and chasing. 25-40% MS to escape or chase after combo.`,
    'Grasp of the Undying': `Tank sustain. 4% max HP damage/heal + permanent HP stacking.`,
    'Aftershock': `Engage survivability. 35+ armor/MR for 2.5s after CC.`,
    'Guardian': `Protect your carry. ${runeMath.Guardian.math.level18.shield}+ shield when taking damage.`,
    'Glacial Augment': `Zone control. 30-40% slow field after CC.`,
    'First Strike': `Poke for gold. 9% bonus true damage + gold generation.`
  };
  return reasons[keystone] || 'Standard keystone for this champion and matchup.';
};

// Helper function for secondary reasoning
const getSecondaryReasoning = (tree, runes, traits, enemyTraits) => {
  if (tree === 'Resolve') {
    if (runes.includes('Second Wind')) {
      return 'Second Wind for sustain vs poke. Heals 3% missing HP over 10s after taking damage.';
    }
    if (runes.includes('Bone Plating')) {
      return 'Bone Plating blocks 90-180 damage from burst trades. Crucial vs all-in.';
    }
  }
  if (tree === 'Precision') {
    return 'Precision secondary for Triumph (10% missing HP on takedown) and damage/tenacity.';
  }
  if (tree === 'Domination') {
    return 'Domination for extra damage and utility from Eyeball/Hunter runes.';
  }
  if (tree === 'Sorcery') {
    return 'Sorcery for ability haste (Transcendence) and scaling (Gathering Storm).';
  }
  if (tree === 'Inspiration') {
    return 'Inspiration for sustain (Biscuits) and summoner spell CDR (Cosmic Insight).';
  }
  return 'Standard secondary tree for this matchup.';
};

// ==================== CHAMPION-SPECIFIC RUNE PRESETS ====================
export const championRunePresets = {
  // Top Lane
  Aatrox: {
    standard: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'] },
    vsBurst: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'] },
    vsPoke: { keystone: 'Fleet Footwork', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Revitalize'] }
  },
  Darius: {
    standard: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'] },
    vsRanged: { keystone: 'Fleet Footwork', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Approach Velocity'] },
    allIn: { keystone: 'Ghost', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Unflinching'] }
  },
  Fiora: {
    standard: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'] },
    vsAP: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Unflinching'] },
    grasp: { keystone: 'Grasp of the Undying', primary: 'Resolve', runes: ['Demolish', 'Second Wind', 'Overgrowth'], secondary: 'Precision', secondaryRunes: ['Legend: Alacrity', 'Last Stand'] }
  },
  
  // Jungle
  LeeSin: {
    standard: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'] },
    electrocute: { keystone: 'Electrocute', primary: 'Domination', runes: ['Sudden Impact', 'Eyeball Collection', 'Relentless Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Coup de Grace'] }
  },
  Kayn: {
    shadow: { keystone: 'Dark Harvest', primary: 'Domination', runes: ['Sudden Impact', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Coup de Grace'] },
    rhaast: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Tenacity', 'Last Stand'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'] }
  },
  MasterYi: {
    standard: { keystone: 'Lethal Tempo', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Eyeball Collection', 'Treasure Hunter'] },
    onHit: { keystone: 'Lethal Tempo', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Domination', secondaryRunes: ['Sudden Impact', 'Treasure Hunter'] }
  },
  
  // Mid Lane
  Ahri: {
    standard: { keystone: 'Electrocute', primary: 'Domination', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Sorcery', secondaryRunes: ['Manaflow Band', 'Transcendence'] },
    safe: { keystone: 'Summon Aery', primary: 'Sorcery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Ultimate Hunter'] }
  },
  Zed: {
    standard: { keystone: 'Electrocute', primary: 'Domination', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Sorcery', secondaryRunes: ['Transcendence', 'Scorch'] },
    hardLane: { keystone: 'Electrocute', primary: 'Domination', runes: ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'] }
  },
  Yasuo: {
    standard: { keystone: 'Lethal Tempo', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Second Wind', 'Overgrowth'] },
    vsMelee: { keystone: 'Conqueror', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Last Stand'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'] }
  },
  
  // ADC
  Jinx: {
    standard: { keystone: 'Lethal Tempo', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'] },
    vsAssassin: { keystone: 'Lethal Tempo', primary: 'Precision', runes: ['Triumph', 'Legend: Bloodline', 'Coup de Grace'], secondary: 'Resolve', secondaryRunes: ['Bone Plating', 'Overgrowth'] }
  },
  Vayne: {
    standard: { keystone: 'Lethal Tempo', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'] },
    pta: { keystone: 'Press the Attack', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Cut Down'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Treasure Hunter'] }
  },
  Draven: {
    standard: { keystone: 'Press the Attack', primary: 'Precision', runes: ['Triumph', 'Legend: Alacrity', 'Coup de Grace'], secondary: 'Domination', secondaryRunes: ['Taste of Blood', 'Eyeball Collection'] },
    hob: { keystone: 'Hail of Blades', primary: 'Domination', runes: ['Taste of Blood', 'Eyeball Collection', 'Treasure Hunter'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Bloodline'] }
  },
  
  // Support
  Thresh: {
    standard: { keystone: 'Aftershock', primary: 'Resolve', runes: ['Font of Life', 'Bone Plating', 'Unflinching'], secondary: 'Inspiration', secondaryRunes: ['Hextech Flashtraption', 'Cosmic Insight'] },
    guardian: { keystone: 'Guardian', primary: 'Resolve', runes: ['Font of Life', 'Bone Plating', 'Unflinching'], secondary: 'Inspiration', secondaryRunes: ['Biscuit Delivery', 'Cosmic Insight'] }
  },
  Lulu: {
    standard: { keystone: 'Summon Aery', primary: 'Sorcery', runes: ['Manaflow Band', 'Transcendence', 'Scorch'], secondary: 'Resolve', secondaryRunes: ['Revitalize', 'Bone Plating'] },
    scaling: { keystone: 'Summon Aery', primary: 'Sorcery', runes: ['Manaflow Band', 'Transcendence', 'Gathering Storm'], secondary: 'Resolve', secondaryRunes: ['Revitalize', 'Second Wind'] }
  },
  Leona: {
    standard: { keystone: 'Aftershock', primary: 'Resolve', runes: ['Font of Life', 'Bone Plating', 'Unflinching'], secondary: 'Hextech', secondaryRunes: ['Hextech Flashtraption', 'Cosmic Insight'] },
    aggressive: { keystone: 'Aftershock', primary: 'Resolve', runes: ['Demolish', 'Bone Plating', 'Unflinching'], secondary: 'Precision', secondaryRunes: ['Triumph', 'Legend: Tenacity'] }
  }
};

export default {
  runeMath,
  minorRuneMath,
  generateRunePage,
  championRunePresets
};
