// =====================================================
// ULTIMATE RUNE ENGINE - ALL CHAMPIONS, ALL MATCHUPS
// Complete mathematical analysis and matchup-specific rune pages
// =====================================================

// ==================== KEYSTONE MATH ====================
export const runeMath = {
  // PRECISION TREE
  Conqueror: {
    name: "Conqueror",
    description: "Gain stacks of Adaptive Force when attacking champions. At max stacks, heal for a portion of damage dealt.",
    formula: "Per Stack: 2-4.5 AD or 3.3-7.5 AP (based on level). Max Stacks: 12",
    math: {
      level1: { perStack: 2, maxAD: 24, maxAP: 40, healing: "8% (5% ranged)" },
      level6: { perStack: 2.7, maxAD: 32, maxAP: 54, healing: "8% (5% ranged)" },
      level11: { perStack: 3.5, maxAD: 42, maxAP: 70, healing: "8% (5% ranged)" },
      level18: { perStack: 4.5, maxAD: 54, maxAP: 90, healing: "8% (5% ranged)" }
    },
    goldValue: "Level 18: 54 AD = ~1890g | 90 AP = ~1958g",
    bestFor: ["Extended trades", "Bruisers", "Drain tanks", "DPS fighters"],
    worstAgainst: ["Burst champions", "Poke lanes"]
  },
  LethalTempo: {
    name: "Lethal Tempo",
    description: "Gain attack speed when attacking champions. At max stacks, gain bonus range.",
    formula: "Per Stack: 5-15% AS (level scaling). Max: 6 stacks = 30-90% AS. Breaks AS cap.",
    math: {
      level1: { perStack: "5%", maxAS: "30%", range: "+50 (ranged) / +75 (melee)" },
      level6: { perStack: "8%", maxAS: "48%", range: "+50 (ranged) / +75 (melee)" },
      level11: { perStack: "12%", maxAS: "72%", range: "+50 (ranged) / +75 (melee)" },
      level18: { perStack: "15%", maxAS: "90%", range: "+50 (ranged) / +75 (melee)" }
    },
    goldValue: "Level 18: 90% AS = ~2700g worth of stats",
    bestFor: ["Hypercarries", "Auto-attackers", "On-hit builds"],
    worstAgainst: ["Burst trades", "Short engages"]
  },
  FleetFootwork: {
    name: "Fleet Footwork",
    description: "Energized attacks heal and grant movement speed.",
    formula: "Heal: 10-100 (+30% bonus AD)(+20% AP). MS: 20% for 1s.",
    math: {
      level1: { heal: 10, bonusADRatio: "30%", apRatio: "20%", ms: "20%" },
      level6: { heal: 35, bonusADRatio: "30%", apRatio: "20%", ms: "20%" },
      level11: { heal: 60, bonusADRatio: "30%", apRatio: "20%", ms: "20%" },
      level18: { heal: 100, bonusADRatio: "30%", apRatio: "20%", ms: "20%" }
    },
    goldValue: "~500-1500g in healing over lane phase",
    bestFor: ["Sustain lanes", "Poke matchups", "Kiting ADCs"],
    worstAgainst: ["All-in matchups", "Heavy burst"]
  },
  PressTheAttack: {
    name: "Press the Attack",
    description: "3 consecutive attacks deal bonus damage and expose the target.",
    formula: "Proc: 40-180 (based on level). Exposure: 8-12% increased damage for 6s.",
    math: {
      level1: { proc: 40, exposure: "8%", duration: "6s" },
      level6: { proc: 75, exposure: "9%", duration: "6s" },
      level11: { proc: 120, exposure: "10.5%", duration: "6s" },
      level18: { proc: 180, exposure: "12%", duration: "6s" }
    },
    goldValue: "12% amp on 2000 damage combo = 240 extra damage",
    bestFor: ["Short trades", "Burst ADCs", "Team amplification"],
    worstAgainst: ["Kiting enemies", "Tanks you can't burst"]
  },

  // DOMINATION TREE
  Electrocute: {
    name: "Electrocute",
    description: "3 unique attacks/abilities within 3s deal bonus adaptive damage.",
    formula: "30-180 (+40% bonus AD)(+25% AP). CD: 25-20s (based on level).",
    math: {
      level1: { damage: 30, adRatio: "40%", apRatio: "25%", cd: "25s" },
      level6: { damage: 70, adRatio: "40%", apRatio: "25%", cd: "23s" },
      level11: { damage: 120, adRatio: "40%", apRatio: "25%", cd: "21s" },
      level18: { damage: 180, adRatio: "40%", apRatio: "25%", cd: "20s" }
    },
    goldValue: "180 + 40% of 100 bonus AD = 220 burst damage",
    bestFor: ["Assassins", "Burst mages", "All-in combos"],
    worstAgainst: ["Extended trades", "Poke lanes"]
  },
  DarkHarvest: {
    name: "Dark Harvest",
    description: "Damage low HP champions for bonus damage. Collect souls on takedown.",
    formula: "20-60 (+5 per soul)(+25% bonus AD)(+15% AP). Threshold: Below 50% HP.",
    math: {
      level1: { base: 20, perSoul: 5, adRatio: "25%", apRatio: "15%" },
      level18: { base: 60, perSoul: 5, adRatio: "25%", apRatio: "15%" },
      example: "30 souls + 200 AD: 60 + 150 + 50 = 260 damage"
    },
    goldValue: "Infinite scaling potential",
    bestFor: ["Scaling assassins", "Teamfight resets", "Jungle ganks"],
    worstAgainst: ["Lane bullies", "Early game pressure"]
  },
  HailOfBlades: {
    name: "Hail of Blades",
    description: "First 3 attacks have 110% bonus attack speed. Breaks AS cap.",
    formula: "+110% AS for 3 attacks. CD: 12s (out of combat).",
    math: {
      attackSpeed: "+110%",
      attacks: 3,
      cooldown: "12s (resets out of combat)"
    },
    goldValue: "Massive burst window for 3 autos",
    bestFor: ["On-hit burst", "Quick trades", "Specific combos (Kai'Sa, Xin)"],
    worstAgainst: ["Extended fights", "Kiting"]
  },

  // SORCERY TREE
  SummonAery: {
    name: "Summon Aery",
    description: "Abilities send Aery to damage enemies or shield allies.",
    formula: "Damage: 10-40 (+15% bonus AD)(+10% AP). Shield: 20-80 (+25% bonus AD)(+20% AP).",
    math: {
      level1: { damage: 10, shield: 20 },
      level18: { damage: 40, shield: 80 },
      cooldown: "None (travel time only)"
    },
    goldValue: "Very consistent poke/shield value",
    bestFor: ["Enchanters", "Poke mages", "DoT champions"],
    worstAgainst: ["All-in matchups"]
  },
  ArcaneComet: {
    name: "Arcane Comet",
    description: "Abilities hurl a comet at enemies. CD reduced by ability hits.",
    formula: "30-100 (+35% bonus AD)(+20% AP). CD: 20-8s (reduced by hitting abilities).",
    math: {
      level1: { damage: 30, adRatio: "35%", apRatio: "20%", cd: "20s" },
      level18: { damage: 100, adRatio: "35%", apRatio: "20%", cd: "8s" }
    },
    goldValue: "Best with CC to guarantee hits",
    bestFor: ["Poke mages", "CC champions", "Artillery"],
    worstAgainst: ["Mobile champions who dodge"]
  },
  PhaseRush: {
    name: "Phase Rush",
    description: "3 attacks/abilities grant movement speed and slow resistance.",
    formula: "25-40% MS (based on level) + 75% slow resist for 3s. CD: 15s.",
    math: {
      level1: { ms: "25%", slowResist: "75%", duration: "3s" },
      level18: { ms: "40%", slowResist: "75%", duration: "3s" }
    },
    goldValue: "Utility - enables kiting and chasing",
    bestFor: ["Kiting mages", "Melee vs ranged", "Chase/escape"],
    worstAgainst: ["Matchups where damage matters more"]
  },

  // RESOLVE TREE
  GraspOfTheUndying: {
    name: "Grasp of the Undying",
    description: "In combat, attacks deal bonus damage, heal you, and grant permanent HP.",
    formula: "Damage: 4% max HP (2.4% ranged). Heal: 2% max HP (1.2% ranged). +5 permanent HP (+3 ranged).",
    math: {
      melee: { damage: "4% max HP", heal: "2% max HP", permanent: "+5 HP" },
      ranged: { damage: "2.4% max HP", heal: "1.2% max HP", permanent: "+3 HP" },
      example: "3000 HP: 120 damage, 60 heal per proc"
    },
    goldValue: "20 procs = +100 permanent HP = ~267g",
    bestFor: ["Short trades", "Tanks", "Lane sustain"],
    worstAgainst: ["Ranged poke", "All-in matchups"]
  },
  Aftershock: {
    name: "Aftershock",
    description: "After immobilizing an enemy, gain resistances then deal AoE damage.",
    formula: "35 + 80% bonus Armor/MR for 2.5s. Then: 25-120 (+8% max HP) AoE damage.",
    math: {
      level1: { armor: 35, mr: 35, damage: 25, hpRatio: "8%" },
      level18: { armor: 80, mr: 80, damage: 120, hpRatio: "8%" },
      duration: "2.5s resist buff"
    },
    goldValue: "80 Armor/MR = ~2800g worth of tank stats for 2.5s",
    bestFor: ["Engage tanks", "CC supports", "Divers"],
    worstAgainst: ["Poke lanes", "No CC champions"]
  },
  Guardian: {
    name: "Guardian",
    description: "Shield nearby ally when they take damage.",
    formula: "Shield: 50-130 (+15% AP)(+9% bonus HP). MS: 20% for 1.5s. CD: 70-40s.",
    math: {
      level1: { shield: 50, apRatio: "15%", hpRatio: "9%", cd: "70s" },
      level18: { shield: 130, apRatio: "15%", hpRatio: "9%", cd: "40s" }
    },
    goldValue: "Protective value for duo lanes",
    bestFor: ["Protective supports", "Duo lanes"],
    worstAgainst: ["Solo lanes", "Poke matchups"]
  },

  // INSPIRATION TREE
  GlacialAugment: {
    name: "Glacial Augment",
    description: "Immobilizing creates a zone that slows enemies.",
    formula: "3 freeze rays. 30% slow + 15% damage reduction for 3s.",
    math: {
      slow: "30%",
      damageReduction: "15%",
      duration: "3s",
      rays: 3
    },
    goldValue: "Zone control utility",
    bestFor: ["CC mages", "Utility supports", "Engage setups"],
    worstAgainst: ["No CC champions"]
  },
  FirstStrike: {
    name: "First Strike",
    description: "If you damage first, deal bonus damage and gain gold.",
    formula: "9% bonus true damage (7% ranged). Gain 70% of bonus damage as gold (50% ranged).",
    math: {
      melee: { damage: "9% bonus true damage", gold: "70% of bonus damage" },
      ranged: { damage: "7% bonus true damage", gold: "50% of bonus damage" },
      window: "3s after hitting first"
    },
    goldValue: "Generates 100-500g per game with good poke",
    bestFor: ["Poke champions", "First-strike traders"],
    worstAgainst: ["Aggressive lanes that hit you first"]
  }
};

// ==================== MINOR RUNES MATH ====================
export const minorRuneMath = {
  // Precision
  Triumph: { effect: "Takedowns restore 10% missing HP + 20g", value: "~200-400g over game" },
  PresenceOfMind: { effect: "Takedowns restore 15% max mana. Abilities restore mana on hit", value: "Mana sustain" },
  LegendAlacrity: { effect: "Up to 18% AS at max stacks", value: "18% AS = ~540g" },
  LegendTenacity: { effect: "Up to 30% tenacity at max stacks", value: "Unique stat, invaluable vs CC" },
  LegendBloodline: { effect: "Up to 6% lifesteal + 100 HP at max", value: "6% LS = ~330g + 267g HP" },
  CoupDeGrace: { effect: "8% more damage to targets below 40% HP", value: "Execute damage" },
  CutDown: { effect: "Up to 15% more damage based on HP difference", value: "Tank shred" },
  LastStand: { effect: "Up to 11% more damage when below 30% HP", value: "Clutch fights" },
  
  // Domination
  SuddenImpact: { effect: "+9 Lethality + 7 Magic Pen for 5s after dash/blink", value: "~300g in pen" },
  TasteOfBlood: { effect: "16 + 15% AD + 10% AP healing. 20s CD", value: "Lane sustain" },
  CheapShot: { effect: "10-45 bonus true damage to CC'd targets", value: "Easy extra damage" },
  EyeballCollection: { effect: "1.2 AD or 2 AP per stack (max 10). +6 AD/10 AP at max", value: "~210g AD or 217g AP" },
  TreasureHunter: { effect: "70+60+50+40+30 = 250g from unique takedowns", value: "Early gold spike" },
  UltimateHunter: { effect: "5% ult CDR per unique takedown (max 25%)", value: "100s ult → 75s" },
  
  // Sorcery
  ManaflowBand: { effect: "+250 max mana when stacked. Then 1% missing mana regen/5s", value: "~350g + sustain" },
  Transcendence: { effect: "+10 AH at level 8. Takedowns reduce CDs by 20%", value: "+10 AH = ~267g" },
  GatheringStorm: { effect: "10 min: 8 AD/14 AP. 20 min: 24 AD/42 AP. 30 min: 48 AD/84 AP", value: "Infinite scaling" },
  Scorch: { effect: "20 magic damage on ability hit. 10s CD", value: "200+ damage in lane" },
  
  // Resolve
  SecondWind: { effect: "After taking damage: 3 + 4% max HP + 4% damage taken over 10s", value: "Anti-poke sustain" },
  BonePlating: { effect: "Block 30-60 damage from next 3 attacks/spells. 45s CD", value: "Anti-burst" },
  Overgrowth: { effect: "+3 HP per 8 minions nearby. At 120: +2.5% max HP", value: "~300-500 HP late" },
  Revitalize: { effect: "+5% healing/shielding. +10% more below 40% HP", value: "Enchanter boost" },
  Conditioning: { effect: "At 12 min: +8 Armor/MR + 3% total", value: "~500g in resists" },
  Unflinching: { effect: "5-25% tenacity/slow resist based on missing HP", value: "Clutch tenacity" }
};

// ==================== CHAMPION RUNE PAGES ====================
// Coverage: ALL champions with default + matchup-specific pages

export const championRunePresets = {
  // ============ TOP LANE ============
  Aatrox: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsPoke: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Teemo", "Jayce", "Quinn", "Kennen", "Vayne"] },
    vsTank: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Sion", "Cho'Gath"] },
    vsBurst: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Riven", "Renekton", "Wukong", "Pantheon"] }
  },
  Camille: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Shield Bash", "Second Wind", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsSquishies: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Jayce", "Quinn", "Teemo", "Kayle"] },
    vsTanks: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Sion"] }
  },
  Darius: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Armor"] },
    vsRanged: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Celerity", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Movement Speed", "Health"], into: ["Vayne", "Quinn", "Teemo", "Jayce", "Kennen"] },
    vsTank: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Demolish", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Sion", "Cho'Gath"] }
  },
  Fiora: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsPoke: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Teemo", "Jayce", "Quinn", "Kennen"] },
    vsTank: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Demolish", "Second Wind", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Shen", "Poppy"] }
  },
  Gangplank: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Demolish", "Second Wind", "Overgrowth"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Time Warp Tonic"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAllIn: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Demolish", "Bone Plating", "Overgrowth"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Time Warp Tonic"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Riven", "Irelia", "Renekton", "Wukong"] }
  },
  Garen: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"] },
    vsRanged: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Celerity", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Movement Speed", "Health"], into: ["Vayne", "Quinn", "Teemo", "Jayce", "Kennen"] },
    vsAP: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Conditioning"], shards: ["Adaptive", "Adaptive", "MR"], into: ["Teemo", "Kennen", "Mordekaiser", "Rumble"] }
  },
  Gwen: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsTank: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Sion"] }
  },
  Illaoi: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsPoke: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Teemo", "Jayce", "Quinn", "Kennen"] }
  },
  Irelia: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsRanged: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Teemo", "Quinn", "Jayce", "Kennen", "Vayne"] },
    vsBurst: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Armor"], into: ["Riven", "Renekton", "Pantheon"] }
  },
  Jax: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsAA: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Tryndamere", "Yasuo", "Yone", "Irelia", "Fiora"] },
    vsAP: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Conditioning"], shards: ["Attack Speed", "Adaptive", "MR"], into: ["Mordekaiser", "Kennen", "Rumble", "Vladimir", "Teemo"] }
  },
  Jayce: {
    default: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAllIn: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Riven", "Irelia", "Camille", "Wukong"] }
  },
  Kayle: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsPoke: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Teemo", "Jayce", "Quinn"] }
  },
  Kennen: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAllIn: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Unflinching"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Irelia", "Riven", "Camille"] }
  },
  Kled: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Malphite: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Demolish", "Conditioning", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Armor", "Armor"] },
    vsAP: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Conditioning"], shards: ["Adaptive", "Adaptive", "MR"], into: ["Teemo", "Kennen", "Rumble", "Vladimir"] }
  },
  Mordekaiser: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsRanged: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Celerity", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Movement Speed", "Health"], into: ["Vayne", "Quinn", "Jayce", "Teemo"] }
  },
  Nasus: {
    default: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Ability Haste", "Adaptive", "Health"] },
    vsPoke: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Ability Haste", "Adaptive", "Armor"], into: ["Teemo", "Quinn", "Jayce", "Vayne", "Kennen"] }
  },
  Olaf: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Ornn: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Demolish", "Conditioning", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Armor", "Health"] }
  },
  Pantheon: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Armor"] },
    vsRanged: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Teemo", "Quinn", "Jayce"] }
  },
  Poppy: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Shield Bash", "Bone Plating", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Armor", "Health"] }
  },
  Quinn: {
    default: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Celerity", "Gathering Storm"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsTanks: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Sorcery", secondaryRunes: ["Celerity", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Sion"] }
  },
  Renekton: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsTank: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malphite", "Ornn", "Sion", "Cho'Gath"] }
  },
  Riven: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Ability Haste", "Adaptive", "Health"] },
    vsSquishies: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Ability Haste", "Adaptive", "Health"], into: ["Jayce", "Quinn", "Teemo", "Kayle"] }
  },
  Rumble: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Sett: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsPoke: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Teemo", "Quinn", "Jayce", "Kennen", "Vayne"] }
  },
  Shen: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Shield Bash", "Second Wind", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Attack Speed", "Armor", "Health"] }
  },
  Singed: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Sion: {
    default: { keystone: "Grasp of the Undying", primary: "Resolve", primaryRunes: ["Demolish", "Second Wind", "Overgrowth"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Armor", "Health"] }
  },
  Teemo: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAllIn: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Irelia", "Riven", "Camille", "Wukong"] }
  },
  Tryndamere: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsRanged: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Teemo", "Quinn", "Jayce", "Vayne", "Kennen"] }
  },
  Urgot: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Vayne: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Vladimir: {
    default: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Volibear: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Wukong: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Yasuo: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsRanged: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Quinn", "Jayce", "Kennen"] }
  },
  Yone: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Yorick: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Demolish"], shards: ["Adaptive", "Adaptive", "Health"] }
  },

  // ============ JUNGLE ============
  Amumu: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Conditioning", "Unflinching"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Attack Speed", "Armor", "Health"] }
  },
  Diana: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsSquishy: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Elise: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Relentless Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Coup de Grace"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Evelynn: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Graves: {
    default: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Hecarim: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsSquishy: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Ivern: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Inspiration", secondaryRunes: ["Future's Market", "Cosmic Insight"], shards: ["Ability Haste", "Adaptive", "Health"] }
  },
  JarvanIV: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Karthus: {
    default: { keystone: "Dark Harvest", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Kayn: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] },
    shadowAssassin: { keystone: "Dark Harvest", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  KhaZix: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Kindred: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  LeeSin: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsSquishy: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Lillia: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Sorcery", secondaryRunes: ["Celerity", "Waterwalking"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  MasterYi: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsHeavyCC: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Conditioning", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Nidalee: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Relentless Hunter"], secondary: "Sorcery", secondaryRunes: ["Waterwalking", "Absolute Focus"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Nocturne: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Nunu: {
    default: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Celerity", "Waterwalking"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Ability Haste", "Adaptive", "Health"] }
  },
  Rammus: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Conditioning", "Unflinching"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Attack Speed", "Armor", "Health"] }
  },
  RekSai: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Rengar: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] },
    bruiser: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Sejuani: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Conditioning", "Unflinching"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Attack Speed", "Armor", "Health"] }
  },
  Shaco: {
    default: { keystone: "Hail of Blades", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] },
    AP: { keystone: "Dark Harvest", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Shyvana: {
    default: { keystone: "Dark Harvest", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"] },
    AD: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Conditioning", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Skarner: {
    default: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Nimbus Cloak", "Celerity", "Waterwalking"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Taliyah: {
    default: { keystone: "Dark Harvest", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Relentless Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Waterwalking"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Trundle: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Conditioning", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Udyr: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Conditioning", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Vi: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Viego: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Warwick: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Conditioning", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  XinZhao: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Domination", secondaryRunes: ["Sudden Impact", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Zac: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Conditioning", "Revitalize"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },

  // ============ MID LANE ============
  Ahri: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAssassin: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Zed", "Talon", "Yasuo", "Yone"] }
  },
  Akali: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsRanged: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Syndra", "Orianna", "Viktor", "Azir"] }
  },
  Anivia: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAssassin: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Zed", "Talon", "Fizz", "Katarina"] }
  },
  Annie: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Aurelion: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Azir: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Presence of Mind", "Legend: Alacrity", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsAssassin: { keystone: "Hail of Blades", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Attack Speed", "Adaptive", "Armor"], into: ["Zed", "Talon", "Fizz"] }
  },
  Cassiopeia: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Presence of Mind", "Legend: Tenacity", "Last Stand"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Corki: {
    default: { keystone: "First Strike", primary: "Inspiration", primaryRunes: ["Magical Footwear", "Biscuit Delivery", "Cosmic Insight"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Ekko: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Fizz: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Scorch"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsHard: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Bone Plating"], shards: ["Adaptive", "Adaptive", "MR"], into: ["Lissandra", "Galio", "Malzahar"] }
  },
  Galio: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Shield Bash", "Conditioning", "Unflinching"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Irelia: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Kassadin: {
    default: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Presence of Mind", "Legend: Tenacity", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAP: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Presence of Mind", "Legend: Tenacity", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "MR"], into: ["Syndra", "Orianna", "Vex"] }
  },
  Katarina: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsSquishies: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Lux", "Xerath", "Vel'Koz"] }
  },
  LeBlanc: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Scorch"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Lissandra: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Lux: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Malzahar: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Neeko: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Orianna: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Qiyana: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Scorch"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Ryze: {
    default: { keystone: "Phase Rush", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Precision", secondaryRunes: ["Presence of Mind", "Last Stand"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Syndra: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Sylas: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAD: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Zed", "Talon", "Qiyana", "Yasuo"] }
  },
  Taliyah: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Relentless Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Talon: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Sudden Impact", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Scorch"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  TwistedFate: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Veigar: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  VelKoz: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Vex: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Viktor: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsAssassin: { keystone: "First Strike", primary: "Inspiration", primaryRunes: ["Magical Footwear", "Biscuit Delivery", "Cosmic Insight"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Armor"], into: ["Zed", "Talon", "Fizz", "Katarina"] }
  },
  Xerath: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Yasuo: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsRanged: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Azir", "Viktor", "Orianna", "Syndra", "Lux"] }
  },
  Yone: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Zed: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Ultimate Hunter"], secondary: "Sorcery", secondaryRunes: ["Transcendence", "Scorch"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsHard: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Malzahar", "Lissandra", "Galio", "Pantheon"] }
  },
  Ziggs: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Zoe: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Eyeball Collection", "Treasure Hunter"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Transcendence"], shards: ["Adaptive", "Adaptive", "Health"] }
  },

  // ============ ADC ============
  Aphelios: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Ashe: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Inspiration", secondaryRunes: ["Magical Footwear", "Approach Velocity"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Caitlyn: {
    default: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Draven: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Last Stand"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Ezreal: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Inspiration", secondaryRunes: ["Magical Footwear", "Biscuit Delivery"], shards: ["Adaptive", "Adaptive", "Health"] },
    vsHard: { keystone: "First Strike", primary: "Inspiration", primaryRunes: ["Magical Footwear", "Biscuit Delivery", "Cosmic Insight"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Bloodline"], shards: ["Adaptive", "Adaptive", "Health"], into: ["Draven", "Lucian", "Samira"] }
  },
  Jhin: {
    default: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Jinx: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsKillLane: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Draven", "Lucian", "Samira", "Kalista"] }
  },
  KaiSa: {
    default: { keystone: "Hail of Blades", primary: "Domination", primaryRunes: ["Taste of Blood", "Eyeball Collection", "Treasure Hunter"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Kalista: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  KogMaw: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Lucian: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  MissFortune: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Gathering Storm"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Nilah: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Last Stand"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Samira: {
    default: { keystone: "Conqueror", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Last Stand"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Senna: {
    default: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Inspiration", secondaryRunes: ["Magical Footwear", "Approach Velocity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Sivir: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Inspiration", secondaryRunes: ["Magical Footwear", "Biscuit Delivery"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Tristana: {
    default: { keystone: "Press the Attack", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Twitch: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Cut Down"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Varus: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Manaflow Band", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Vayne: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Domination", secondaryRunes: ["Taste of Blood", "Treasure Hunter"], shards: ["Attack Speed", "Adaptive", "Health"] },
    vsHard: { keystone: "Fleet Footwork", primary: "Precision", primaryRunes: ["Triumph", "Legend: Bloodline", "Coup de Grace"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Overgrowth"], shards: ["Attack Speed", "Adaptive", "Health"], into: ["Draven", "Caitlyn", "Lucian", "MissFortune"] }
  },
  Xayah: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },
  Zeri: {
    default: { keystone: "Lethal Tempo", primary: "Precision", primaryRunes: ["Triumph", "Legend: Alacrity", "Coup de Grace"], secondary: "Sorcery", secondaryRunes: ["Absolute Focus", "Gathering Storm"], shards: ["Attack Speed", "Adaptive", "Health"] }
  },

  // ============ SUPPORT ============
  Alistar: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Bard: {
    default: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Relentless Hunter"], shards: ["Ability Haste", "Adaptive", "Health"] }
  },
  Blitzcrank: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Brand: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Braum: {
    default: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Janna: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Celerity", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Karma: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Leona: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] },
    vsPoke: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Second Wind", "Overgrowth"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Time Warp Tonic"], shards: ["Ability Haste", "Armor", "Health"], into: ["Lux", "Xerath", "Vel'Koz", "Senna"] }
  },
  Lulu: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Lux: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Milio: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Morgana: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Nami: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Nautilus: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Pyke: {
    default: { keystone: "Hail of Blades", primary: "Domination", primaryRunes: ["Cheap Shot", "Zombie Ward", "Ultimate Hunter"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Unflinching"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Rakan: {
    default: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Adaptive", "Health"] }
  },
  Rell: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Conditioning", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Renata: {
    default: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Revitalize"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Adaptive", "Health"] }
  },
  Senna: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Alacrity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Seraphine: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Bone Plating", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Sona: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Soraka: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Swain: {
    default: { keystone: "Electrocute", primary: "Domination", primaryRunes: ["Cheap Shot", "Zombie Ward", "Ultimate Hunter"], secondary: "Precision", secondaryRunes: ["Presence of Mind", "Legend: Tenacity"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  TahmKench: {
    default: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Conditioning", "Unflinching"], secondary: "Precision", secondaryRunes: ["Triumph", "Legend: Tenacity"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Taric: {
    default: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Armor", "Health"] }
  },
  Thresh: {
    default: { keystone: "Aftershock", primary: "Resolve", primaryRunes: ["Font of Life", "Bone Plating", "Unflinching"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Adaptive", "Health"] },
    vsPoke: { keystone: "Guardian", primary: "Resolve", primaryRunes: ["Font of Life", "Second Wind", "Revitalize"], secondary: "Inspiration", secondaryRunes: ["Biscuit Delivery", "Cosmic Insight"], shards: ["Ability Haste", "Adaptive", "Health"], into: ["Lux", "Xerath", "Vel'Koz", "Brand"] }
  },
  VelKoz: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Xerath: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Yuumi: {
    default: { keystone: "Summon Aery", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Gathering Storm"], secondary: "Resolve", secondaryRunes: ["Second Wind", "Revitalize"], shards: ["Adaptive", "Adaptive", "Health"] }
  },
  Zyra: {
    default: { keystone: "Arcane Comet", primary: "Sorcery", primaryRunes: ["Manaflow Band", "Transcendence", "Scorch"], secondary: "Domination", secondaryRunes: ["Cheap Shot", "Treasure Hunter"], shards: ["Adaptive", "Adaptive", "Health"] }
  }
};

// ==================== RUNE PAGE GENERATOR ====================
export const generateRunePage = (championId, enemyChampionId, role, traits, enemyTraits) => {
  // Get champion name (handle both id and name input)
  const champName = championId?.replace(/[^a-zA-Z]/g, '') || 'Unknown';
  
  // Try to find specific champion preset
  const preset = championRunePresets[champName];
  
  if (preset) {
    // Check for matchup-specific pages
    if (enemyChampionId) {
      const enemyName = enemyChampionId?.replace(/[^a-zA-Z]/g, '') || '';
      
      // Check each variant for this champion
      for (const [variant, page] of Object.entries(preset)) {
        if (variant !== 'default' && page.into && page.into.includes(enemyName)) {
          return {
            primaryTree: page.primary,
            keystone: page.keystone,
            primaryRunes: page.primaryRunes,
            secondaryTree: page.secondary,
            secondaryRunes: page.secondaryRunes,
            statShards: page.shards,
            matchupSpecific: true,
            matchupType: variant,
            reasoning: {
              keystone: `${page.keystone} is optimal vs ${enemyName} - ${getKeystoneReasoning(page.keystone)}`,
              secondary: `${page.secondary} tree provides ${getSecondaryReasoning(page.secondary, page.secondaryRunes)}`
            }
          };
        }
      }
    }
    
    // Return default if no matchup-specific found
    const defaultPage = preset.default;
    if (defaultPage) {
      return {
        primaryTree: defaultPage.primary,
        keystone: defaultPage.keystone,
        primaryRunes: defaultPage.primaryRunes,
        secondaryTree: defaultPage.secondary,
        secondaryRunes: defaultPage.secondaryRunes,
        statShards: defaultPage.shards,
        matchupSpecific: false,
        reasoning: {
          keystone: `${defaultPage.keystone} - ${getKeystoneReasoning(defaultPage.keystone)}`,
          secondary: `${defaultPage.secondary} - ${getSecondaryReasoning(defaultPage.secondary, defaultPage.secondaryRunes)}`
        }
      };
    }
  }
  
  // Fallback: Generate based on traits/role
  return generateFallbackPage(role, traits, enemyTraits);
};

// Fallback page generation for champions without presets
const generateFallbackPage = (role, traits, enemyTraits) => {
  const isPokeMatchup = enemyTraits?.range === 'ranged' && traits?.range === 'melee';
  const isBurstMatchup = enemyTraits?.burst >= 4;
  
  let page = {
    primaryTree: 'Precision',
    keystone: 'Conqueror',
    primaryRunes: ['Triumph', 'Legend: Tenacity', 'Last Stand'],
    secondaryTree: 'Resolve',
    secondaryRunes: ['Second Wind', 'Overgrowth'],
    statShards: ['Adaptive', 'Adaptive', 'Health'],
    matchupSpecific: false
  };
  
  // Adjust based on role
  if (role === 'ADC') {
    page.keystone = 'Lethal Tempo';
    page.primaryRunes = ['Triumph', 'Legend: Alacrity', 'Coup de Grace'];
    page.secondaryTree = 'Sorcery';
    page.secondaryRunes = ['Absolute Focus', 'Gathering Storm'];
    page.statShards = ['Attack Speed', 'Adaptive', 'Health'];
  } else if (role === 'Support') {
    if (traits?.tankiness >= 3 || traits?.cc >= 3) {
      page.primaryTree = 'Resolve';
      page.keystone = 'Aftershock';
      page.primaryRunes = ['Font of Life', 'Bone Plating', 'Unflinching'];
      page.secondaryTree = 'Inspiration';
      page.secondaryRunes = ['Biscuit Delivery', 'Cosmic Insight'];
    } else {
      page.primaryTree = 'Sorcery';
      page.keystone = 'Summon Aery';
      page.primaryRunes = ['Manaflow Band', 'Transcendence', 'Gathering Storm'];
      page.secondaryRunes = ['Revitalize', 'Bone Plating'];
    }
  } else if (role === 'Jungle') {
    if (traits?.burst >= 4) {
      page.primaryTree = 'Domination';
      page.keystone = 'Electrocute';
      page.primaryRunes = ['Sudden Impact', 'Eyeball Collection', 'Treasure Hunter'];
      page.secondaryTree = 'Precision';
      page.secondaryRunes = ['Triumph', 'Legend: Tenacity'];
    }
  } else if (role === 'Mid') {
    if (traits?.damage === 'magic' && traits?.burst >= 3) {
      page.primaryTree = 'Domination';
      page.keystone = 'Electrocute';
      page.primaryRunes = ['Taste of Blood', 'Eyeball Collection', 'Ultimate Hunter'];
      page.secondaryTree = 'Sorcery';
      page.secondaryRunes = ['Manaflow Band', 'Transcendence'];
    }
  }
  
  // Adjust for matchups
  if (isPokeMatchup) {
    page.secondaryTree = 'Resolve';
    page.secondaryRunes = ['Second Wind', 'Overgrowth'];
  }
  if (isBurstMatchup) {
    page.secondaryRunes = ['Bone Plating', 'Overgrowth'];
  }
  
  page.reasoning = {
    keystone: getKeystoneReasoning(page.keystone),
    secondary: getSecondaryReasoning(page.secondaryTree, page.secondaryRunes)
  };
  
  return page;
};

// Helper functions for reasoning
const getKeystoneReasoning = (keystone) => {
  const reasons = {
    'Conqueror': 'Extended fights gain up to 54 AD + 8% healing at max stacks',
    'Lethal Tempo': 'Attack speed stacking up to 90% + bonus range. Breaks AS cap.',
    'Fleet Footwork': 'Sustain in lane with heals up to 100 + scaling. Good for poke lanes.',
    'Press the Attack': 'Quick 3-hit burst with 8-12% damage amp for team follow-up',
    'Electrocute': 'Burst combo deals 180 + 40% AD/25% AP at level 18',
    'Dark Harvest': 'Scaling execute with infinite soul stacking for teamfights',
    'Hail of Blades': '110% attack speed for 3 autos. Breaks AS cap for burst.',
    'Summon Aery': 'Consistent poke/shield. 40 damage or 80 shield at level 18.',
    'Arcane Comet': 'Poke damage 100 + scaling. CD reduced by hitting abilities.',
    'Phase Rush': '40% MS + 75% slow resist for 3s. Great for kiting/chasing.',
    'Grasp of the Undying': '4% max HP damage, 2% heal, +5 permanent HP per proc',
    'Aftershock': '80 Armor/MR for 2.5s after CC. Perfect for engage tanks.',
    'Guardian': 'Shield ally for 130 + scaling when they take damage',
    'Glacial Augment': 'Zone control with 30% slow + 15% damage reduction',
    'First Strike': '9% bonus true damage + gold generation on first hit'
  };
  return reasons[keystone] || 'Standard keystone for this champion';
};

const getSecondaryReasoning = (tree, runes) => {
  if (tree === 'Resolve') {
    if (runes?.includes('Second Wind')) return 'Sustain vs poke (3% missing HP heal after damage)';
    if (runes?.includes('Bone Plating')) return 'Block 90-180 damage from burst trades';
    return 'Defensive stats and sustain';
  }
  if (tree === 'Precision') return 'Triumph heals + Tenacity/Alacrity for combat';
  if (tree === 'Domination') return 'Extra burst damage and utility from Hunter runes';
  if (tree === 'Sorcery') return 'Ability haste and scaling from Transcendence/Gathering Storm';
  if (tree === 'Inspiration') return 'Sustain from Biscuits + CDR from Cosmic Insight';
  return 'Standard secondary for this matchup';
};

export default {
  runeMath,
  minorRuneMath,
  championRunePresets,
  generateRunePage
};
