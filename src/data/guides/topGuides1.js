// Complete Champion Guides Database
// In-depth guides for ALL 172 champions

export const championGuides = {
  // ==================== TOP LANERS ====================
  Aatrox: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Physical",
    playstyle: "Drain Tank / Teamfight Juggernaut",
    description: "Aatrox is a powerful drain tank who excels in extended fights. His kit revolves around landing Q sweetspots for maximum damage and healing. He's a lane bully against most melees but struggles against champions who can kite him or reduce his healing.",
    strengths: ["Massive sustain in teamfights", "Strong lane bully vs melees", "Great teamfight ultimate", "Good waveclear", "Can 1v2 with R active"],
    weaknesses: ["Countered by anti-heal", "All abilities are skillshots", "Kitable without E", "Falls off if behind", "Weak to true damage"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Max Q first for damage, E second for lower cooldown repositioning, W last as it's mainly utility"
    },
    combos: [
      { name: "Basic Trade", keys: "Q1 → E → Q2 → Q3", description: "Use E to reposition and guarantee Q sweetspots. This is your bread and butter trading pattern." },
      { name: "Extended Trade", keys: "Q1 → AA → E → Q2 → AA → W → Q3 → AA", description: "Weave auto attacks between abilities for maximum damage output." },
      { name: "All-in Combo", keys: "R → Q1 → E → Q2 → W → Q3 → AA", description: "Pop R first for bonus AD and healing amp. Use W between Q2 and Q3 to guarantee the knockup." },
      { name: "Flash Combo", keys: "Q3 → Flash", description: "Flash during Q3 animation to surprise enemies with an unavoidable knockup. Great for engages." },
      { name: "Poke Combo", keys: "W → Q1 → E back", description: "Safe poke pattern - pull them in with W, hit Q1 sweetspot, E away before they can trade back." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q is surprisingly strong level 1, especially the sweetspot. Look for early trades." },
      { time: "Level 2", description: "Q + E combo allows aggressive repositioning and guaranteed sweetspots." },
      { time: "Level 3", description: "Full combo available. W adds catch potential and trading power." },
      { time: "Level 6", description: "R is a massive spike - you become nearly unkillable in all-ins. Look for solo kills." },
      { time: "1 Item (Eclipse/Goredrinker)", description: "Huge power spike. You can look for aggressive plays and skirmishes." },
      { time: "Level 9", description: "Q is maxed - your damage is at its peak relative to enemy HP." },
      { time: "Level 13", description: "E maxed gives very low cooldown for repositioning. Second major spike." },
      { time: "3 Items", description: "You're at your strongest point. After this, ADCs start outscaling you." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Eclipse", "Black Cleaver", "Death's Dance"],
      situational: ["Maw of Malmortius", "Serylda's Grudge", "Guardian Angel", "Spirit Visage", "Sterak's Gage"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Look to trade with Q1-E-Q2 when enemy goes for CS. Your level 2-3 is very strong. Play around your passive for extra sustain.",
      mid: "After level 6, you can look for all-ins. Use R when committing to fights - the bonus AD and healing amp are massive.",
      tips: [
        "Always try to hit Q sweetspots (the edges) for bonus damage and knockups",
        "Use E to extend Q range or reposition mid-Q animation",
        "Your passive heals you - track it and trade when it's up",
        "W is great for setting up ganks - pull enemies toward your jungler",
        "Don't waste R - it's on a long cooldown early"
      ]
    },
    teamfighting: "In teamfights, look to flank or dive the backline with R active. Your job is to disrupt, drain tank, and hit as many people with Q sweetspots as possible. R resets on takedowns - use this to chase down kills. Don't be afraid to dive deep with R up.",
    matchupTips: {
      hard: "Against Fiora, Irelia, and Camille, respect their early power. They can outplay your Q timing. Look for short trades and don't commit to extended fights.",
      easy: "Against tanks like Malphite, Ornn, and Sion, you can bully them early. They can't stop your healing and you win extended trades.",
      general: "Rush Bramble Vest against heavy healing. Against ranged, use bushes and look for all-ins when they waste abilities."
    }
  },

  Camille: {
    difficulty: "Hard",
    role: "Top",
    damageType: "Mixed (Physical + True)",
    playstyle: "Precision Diver / Split Pusher",
    description: "Camille is a highly mobile diver who excels at locking down single targets. Her true damage from Q2 makes her a threat to any champion regardless of armor. She has a weak early game but scales into one of the best split pushers and duelists.",
    strengths: ["True damage shreds tanks", "Excellent target access with E-R", "Strong split push", "Great scaling", "Versatile build paths"],
    weaknesses: ["Weak early game", "E is telegraphed", "R can be interrupted", "Struggles in teamfights without good engage", "Mana hungry early"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for damage and true damage scaling. E second for lower cooldown engages. W is one point wonder."
    },
    combos: [
      { name: "Basic Trade", keys: "W → Q1 → AA → Q2", description: "Slow with W outer edge, then use Q reset for quick damage." },
      { name: "Short Trade", keys: "E → AA → Q1 → Q2 → E out", description: "Quick trade pattern - E in, quick damage, E back to wall." },
      { name: "All-in Combo", keys: "E → E → R → AA → Q1 → W → AA → Q2", description: "Full engage combo. R locks them in, giving time for Q2 to charge." },
      { name: "Flash E", keys: "E → Flash → E", description: "Flash during E to change direction mid-hookshot. Very hard to react to." },
      { name: "Tower Dive", keys: "E → R (under tower) → full combo → E out", description: "R makes you untargetable briefly and keeps them locked under tower." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q gives decent trading with auto resets, but don't force fights." },
      { time: "Level 2", description: "E gives you escape/engage. You can start trading more aggressively." },
      { time: "Level 3", description: "Full kit available but still weak. Play for short trades with W slow." },
      { time: "Level 6", description: "R is a big spike - you can lock down targets for ganks or all-ins." },
      { time: "1 Item (Trinity/Ravenous)", description: "Massive spike. Your Q damage becomes very threatening." },
      { time: "Level 9", description: "Q maxed - true damage from Q2 starts really hurting." },
      { time: "2 Items", description: "You're now one of the strongest duelists. Look for split push pressure." },
      { time: "Level 16", description: "R has huge area and low cooldown. You can lock down multiple people." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Trinity Force", "Ravenous Hydra", "Death's Dance"],
      situational: ["Maw of Malmortius", "Guardian Angel", "Sterak's Gage", "Hullbreaker", "Wit's End"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Bone Plating", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Play safe levels 1-5. Farm with Q, use W to poke safely. Don't take extended trades - you lose to most top laners early.",
      mid: "After level 6 and first item, you can start playing aggressively. Look for E engages when enemy wastes cooldowns.",
      tips: [
        "Q2 does true damage - wait for it to charge (indicated by glow)",
        "W outer edge heals you and slows enemies - always hit the outer edge",
        "E has two parts - first dash to wall, second dash is the stun",
        "R locks you in too - make sure you can win the 1v1",
        "Passive shield blocks one damage type - check what enemy does"
      ]
    },
    teamfighting: "Look for flanks to access the backline. E-R onto the enemy carry and burst them with Q2 true damage. Your R keeps them trapped while your team follows up. Avoid frontline - you're not tanky enough to survive focus.",
    matchupTips: {
      hard: "Jax, Renekton, and Poppy are tough. Jax blocks your autos, Renekton bullies you early, Poppy blocks your E. Play safe and outscale.",
      easy: "You beat Gangplank, Vladimir, and Kayle. They can't stop your all-in and you outscale them in side lane.",
      general: "Rush Tiamat for waveclear in hard lanes. Against poke, sustain with W and look for all-in opportunities."
    }
  },

  Chogath: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Magic",
    playstyle: "Scaling Tank / AP Bruiser",
    description: "Cho'Gath is a simple but effective tank who scales infinitely with R stacks. He has strong CC, good sustain, and becomes an unkillable monster late game. He struggles with mobility but makes up for it with raw stats and burst damage.",
    strengths: ["Infinite HP scaling with R", "Strong CC with Q knockup and W silence", "Built-in sustain passive", "True damage execute", "Flexible builds (tank or AP)"],
    weaknesses: ["Very immobile", "Q is easy to dodge", "Kited easily", "Weak to %HP damage", "R stacks lost on death"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "E → Q → W (Tank) or Q → W → E (AP)",
      explanation: "Tank Cho maxes E for consistent damage. AP Cho maxes Q for burst. W max second for longer silence."
    },
    combos: [
      { name: "Basic Combo", keys: "Q → W → E → R", description: "Standard combo - Q knockup into W silence prevents escape, finish with R." },
      { name: "Guaranteed Q", keys: "Flash → Q", description: "Flash on top of enemy and immediately Q - very hard to dodge." },
      { name: "Execute Combo", keys: "Q → R (immediately)", description: "If they're in R execute range, you can combo Q knockup into instant R." },
      { name: "Trading Pattern", keys: "E → AA → AA → AA", description: "Use E empowered autos to trade in lane. Simple but effective." },
      { name: "Peel Combo", keys: "W → Q (on diver)", description: "Silence first to prevent dashes, then Q for knockup. Great for protecting carries." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "E gives good trading with empowered autos." },
      { time: "Level 3", description: "Full combo available. Q-W-E is strong if you land Q." },
      { time: "Level 6", description: "R execute is huge. Look for kills when enemy is low." },
      { time: "1 Item", description: "Heartsteel or Riftmaker spike - you start becoming very tanky or doing big damage." },
      { time: "6 R Stacks", description: "You've gained substantial HP. You're now hard to kill." },
      { time: "Level 11", description: "R rank 2 has lower cooldown and more true damage." },
      { time: "10+ R Stacks", description: "You're a raid boss. 1000+ bonus HP makes you nearly unkillable." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion"],
      core: ["Heartsteel", "Unending Despair", "Warmog's Armor"],
      situational: ["Riftmaker", "Force of Nature", "Thornmail", "Gargoyle Stoneplate", "Randuin's Omen"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Resolve",
      keystone: "Grasp of the Undying",
      primaryRunes: ["Demolish", "Conditioning", "Overgrowth"],
      secondary: "Precision",
      secondaryRunes: ["Legend: Tenacity", "Last Stand"],
      statShards: ["Ability Haste", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Focus on farming and landing Qs. Your passive sustain helps you stay healthy. Don't force fights unless jungle ganks.",
      mid: "Stack R on cannon minions and kills. Look for roams with TP if lane is pushed. You provide great CC for ganks.",
      tips: [
        "R executes - use it to last hit champions, not as poke",
        "Passive restores HP and mana on kills - use it to sustain",
        "Q has a delay - predict enemy movement or use during CC",
        "W silence interrupts channels and prevents escapes",
        "Stack R on cannons if you can't get champion stacks"
      ]
    },
    teamfighting: "Your job is to frontline and land CC. Q knockup into W silence can lock down multiple enemies. Look to R execute priority targets - it does true damage so armor/MR doesn't matter. Peel for carries with your CC if needed.",
    matchupTips: {
      hard: "Vayne, Fiora, and Gwen destroy you with %HP damage and mobility. Don't fight them 1v1. Just farm and group.",
      easy: "You beat Yasuo, Yone, and Riven. They can't burst through your HP and your CC stops their combos.",
      general: "Against poke, sustain with passive. Against all-in, save Q for when they engage. Rush Bramble vs heavy healing."
    }
  },

  Darius: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Physical",
    playstyle: "Lane Bully / Teamfight Juggernaut",
    description: "Darius is the quintessential lane bully who dominates melee matchups. His passive bleed stacks into a massive AD steroid, and his R resets on kills make him a pentakill machine in teamfights. However, he's easily kited and falls off against mobile comps.",
    strengths: ["Dominates melee matchups", "5-stack passive gives huge AD", "R resets on kills", "Strong early and mid game", "Snowballs hard"],
    weaknesses: ["No mobility", "Easily kited", "Weak to ranged top laners", "Falls off late game", "Needs to stack passive to be effective"],
    summonerSpells: ["Flash", "Ghost"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for damage and healing. E second for lower cooldown pulls. W is one point wonder."
    },
    combos: [
      { name: "Basic Trade", keys: "E → AA → W → Q", description: "Pull them in, auto-W for slow, then Q for damage and heal." },
      { name: "Extended Trade", keys: "E → AA → W → AA → AA → AA → Q → R", description: "Stack passive to 5, then unleash empowered Q and R." },
      { name: "All-in Combo", keys: "Ghost → E → AA → W → Q → AA → AA → R", description: "Ghost prevents kiting while you stack passive and execute." },
      { name: "Flash E", keys: "Flash → E", description: "Flash extends E range significantly for surprise pulls." },
      { name: "5-Stack Start", keys: "E → AA → W → AA → Q (5 stacks) → R", description: "Fastest combo to 5 stacks - each auto applies 1 stack, Q applies 1." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "W is deceptively strong level 1 in all-ins. Can cheese first blood." },
      { time: "Level 2", description: "E pull gives you kill threat. Look for aggressive trades." },
      { time: "Level 3", description: "Full combo can kill most enemies if you stack passive." },
      { time: "Level 6", description: "R execute is massive. At 5 stacks, R does 200+ true damage." },
      { time: "1 Item (Stridebreaker/Trinity)", description: "Big spike - the mobility helps you stick to targets." },
      { time: "Level 9", description: "Q maxed - your sustain and damage peak." },
      { time: "Level 11", description: "R rank 2 - lower cooldown, more execute damage." },
      { time: "5-Stack Passive", description: "At any point, 5-stack Noxian Might gives 30-230 bonus AD." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Trinity Force", "Sterak's Gage", "Dead Man's Plate"],
      situational: ["Stridebreaker", "Death's Dance", "Force of Nature", "Randuin's Omen", "Gargoyle Stoneplate"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Bully melee opponents. Pull them with E when they go for CS. Stack passive and all-in with R.",
      mid: "Push your lead. Freeze if ahead to deny CS. Look for dives with jungler - you're great at tower dives.",
      tips: [
        "Q blade (outer edge) heals you - always hit the blade, not the handle",
        "5 stacks gives Noxian Might - massive AD steroid",
        "R cooldown resets on kill - chain kills in teamfights",
        "Ghost is usually better than TP for sticking to targets",
        "W auto-reset - use it right after an auto for fast stacks"
      ]
    },
    teamfighting: "Look to flank and get a 5-stack reset going. Once you have Noxian Might, you can 1v5. Target squishy enemies first for R resets, then clean up. Ghost helps you stick to targets. You're a teamfight monster when ahead.",
    matchupTips: {
      hard: "Quinn, Vayne, and Kayle kite you forever. You need jungle help or to all-in when they waste escape cooldowns.",
      easy: "You destroy Garen, Sett, and Mordekaiser. You out-trade and out-sustain them in extended fights.",
      general: "Take Ghost in most matchups. Rush Plated Steelcaps vs AA-heavy champs. Freeze lane to force them into your pull range."
    }
  },

  DrMundo: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Magic",
    playstyle: "Unkillable Regeneration Tank",
    description: "Dr. Mundo is the ultimate tank who simply refuses to die. His passive makes him immune to CC, his Q is infinite poke, and his R gives massive regeneration. He farms safely and becomes an unkillable monster who runs at carries.",
    strengths: ["Insane regeneration with R", "Passive blocks CC", "Safe laning with Q poke", "Very tanky late game", "Simple to play"],
    weaknesses: ["No hard CC", "Countered by anti-heal", "Weak early game", "Can be kited", "Needs to scale"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for poke and slow. E max second for damage. W is mainly for tenacity."
    },
    combos: [
      { name: "Basic Trade", keys: "Q → E → AA", description: "Hit Q slow, E empowered auto for chunk damage." },
      { name: "All-in", keys: "R → Q → E → AA → W (if needed)", description: "R for regen, Q to stick, E for damage, W if you need tenacity." },
      { name: "Poke Pattern", keys: "Q → Q → Q", description: "Just spam Q from range. It's free damage and slow." },
      { name: "Passive Proc", keys: "Walk into CC → AA → E → AA", description: "Bait CC with passive, then trade back while they're on cooldown." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q gives safe farming and poke. Very safe start." },
      { time: "Level 6", description: "R is a massive spike - you become very hard to kill in all-ins." },
      { time: "1 Item (Heartsteel)", description: "You start stacking HP infinitely. Sustain becomes insane." },
      { time: "Level 11", description: "R rank 2 heals 50% max HP. Very hard to kill." },
      { time: "2-3 Items", description: "You're now a raid boss. Walk at carries and run them down." },
      { time: "Level 16", description: "R rank 3 heals 75% max HP over 10 seconds. Nearly immortal." }
    ],
    itemBuild: {
      starter: ["Doran's Shield", "Health Potion"],
      core: ["Heartsteel", "Warmog's Armor", "Spirit Visage"],
      situational: ["Thornmail", "Randuin's Omen", "Force of Nature", "Sunfire Aegis", "Titanic Hydra"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Resolve",
      keystone: "Grasp of the Undying",
      primaryRunes: ["Demolish", "Second Wind", "Overgrowth"],
      secondary: "Domination",
      secondaryRunes: ["Taste of Blood", "Treasure Hunter"],
      statShards: ["Ability Haste", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Farm safely with Q. Don't fight early - you lose most 1v1s before level 6. Let them push and farm under tower.",
      mid: "After level 6 and first item, you can start trading. Use R liberally - it's on a short cooldown.",
      tips: [
        "Passive drops a canister when CC'd - pick it up for HP and cooldown",
        "Q refunds cost if it kills a unit - last hit with Q for free",
        "E gives bonus AD based on missing HP - use it when low",
        "R heals based on max HP - build HP for more healing",
        "Spirit Visage increases all your healing by 25%"
      ]
    },
    teamfighting: "Your job is simple - run at the enemy carries. R makes you nearly immortal. Absorb cooldowns while your team follows up. You don't have CC so focus on being a damage sponge and threatening backline.",
    matchupTips: {
      hard: "Fiora, Gwen, and Vayne have %HP damage that shreds you. Avoid fighting them. Just farm and outscale with team.",
      easy: "You beat Maokai, Ornn, and Malphite. You out-sustain them and they can't kill you. Free farm lane.",
      general: "Take Second Wind and Doran's Shield against poke. Build Spirit Visage for more healing. Don't fight until level 6+."
    }
  },

  Fiora: {
    difficulty: "Hard",
    role: "Top",
    damageType: "Physical (True Damage)",
    playstyle: "Elite Duelist / Split Push Queen",
    description: "Fiora is the ultimate 1v1 duelist who can outplay any champion with perfect mechanics. Her passive vitals deal %max HP true damage, making her a tank killer. She requires precise timing and positioning but rewards mastery with unmatched split push power.",
    strengths: ["%HP true damage shreds any target", "W parry is game-changing", "Insane 1v1 and split push", "Great scaling", "Can outplay any champion"],
    weaknesses: ["High skill ceiling", "Weak in teamfights", "W timing is crucial", "Struggles when behind", "Needs side lane to be effective"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for mobility and damage. E second for attack speed slow. W is one point wonder."
    },
    combos: [
      { name: "Basic Trade", keys: "Q (vital) → AA → E → AA", description: "Q to proc vital, auto-E for double auto reset." },
      { name: "Short Trade", keys: "Q (vital) → E1 → E2 → Q out", description: "Quick vital proc then E slow, Q to escape." },
      { name: "All-in", keys: "R → Q (vital) → AA → E → Q (vital) → AA → Q (vital) → AA → Q (vital)", description: "Ult, then chase down all 4 vitals for massive heal zone." },
      { name: "Parry Combo", keys: "W (predict CC) → Q → AA → E", description: "Parry their CC, then full trade while they're stunned." },
      { name: "Tower Dive", keys: "Q in → R → proc vitals → W (tower shot)", description: "Parry can block tower shot for safe dives." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q + vital proc is strong trading. Zone enemy from CS." },
      { time: "Level 2", description: "W allows you to parry and trade more aggressively." },
      { time: "Level 3", description: "E gives attack speed slow. Full trading pattern unlocked." },
      { time: "Level 6", description: "R is huge - hitting all 4 vitals heals massively and deals tons of damage." },
      { time: "1 Item (Ravenous)", description: "Big spike. Q damage and sustain become very strong." },
      { time: "2 Items", description: "You're now one of the best duelists in the game." },
      { time: "Level 13", description: "E maxed. Attack speed slow is very strong against AA-based champs." },
      { time: "3+ Items", description: "You can 1v2 most combinations. Split push pressure is immense." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Ravenous Hydra", "Trinity Force", "Death's Dance"],
      situational: ["Maw of Malmortius", "Guardian Angel", "Hullbreaker", "Wit's End", "Blade of the Ruined King"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Trade whenever vital is in good position. Q in, proc vital, E, Q out. Short trades are your strength.",
      mid: "Look for all-ins when enemy wastes key ability. Parry their main CC/damage and run them down.",
      tips: [
        "Vitals spawn in patterns - after proccing, next spawns opposite side",
        "W parry stuns if it blocks CC, otherwise just slows",
        "You can parry anything - even tower shots and ignite damage",
        "Q cooldown resets partially when hitting anything, fully on champions",
        "E first hit slows, second hit crits - auto reset both attacks"
      ]
    },
    teamfighting: "Fiora is weak in teamfights. Focus on split pushing and drawing multiple enemies. If you must teamfight, look to flank and R a priority target. The heal zone can turn fights if you proc all 4 vitals.",
    matchupTips: {
      hard: "Malphite and Poppy are tough - they have easy CC that's hard to parry and you can't kill them. Jax can also be tricky if he times E well.",
      easy: "You destroy Aatrox, Darius, and Sett. Parry their main ability and run them down. They can't escape you.",
      general: "Practice W timing - it makes or breaks matchups. Against tanks, just farm and scale. Rush Executioner's vs healing champs."
    }
  },

  Gangplank: {
    difficulty: "Hard",
    role: "Top",
    damageType: "Physical",
    playstyle: "Global Threat / Barrel Master",
    description: "Gangplank is a high skill ceiling champion who scales into a late-game monster. His barrel combos can one-shot entire teams, and his ultimate provides global pressure. He requires perfect barrel timing but rewards mastery with incredible carry potential.",
    strengths: ["Insane late game scaling", "Global R pressure", "Barrel combos one-shot teams", "Silver serpents buy upgrades", "Great poke with Q"],
    weaknesses: ["Very weak early game", "High skill ceiling", "Barrels can be destroyed", "No mobility", "Needs gold to scale"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for poke and Grasp procs. E second for barrel damage. W is utility."
    },
    combos: [
      { name: "Basic Barrel", keys: "E → Q (immediately)", description: "Place barrel and Q it before enemy can auto. Basic farming/poking." },
      { name: "One-Part Combo", keys: "E (on enemy) → Q", description: "Place barrel directly on enemy, Q for instant damage." },
      { name: "Two-Part Combo", keys: "E → E (chain) → Q first barrel", description: "Chain barrels and Q the first one to extend range." },
      { name: "Triple Barrel", keys: "E → E → E → Q → E", description: "Place two barrels, Q as third barrel comes up, place fourth mid-chain." },
      { name: "Ghost Barrel", keys: "E (melee range) → AA → Q → E (chain)", description: "Auto a barrel at 1HP, Q for instant explosion, chain for surprise range." },
      { name: "Flash Combo", keys: "E → Flash → E → Q", description: "Flash to extend barrel chain range. Used for surprise burst." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q + Grasp gives safe poke and farm. Play for scaling." },
      { time: "Level 7", description: "E is level 4, barrels have enough damage to hurt." },
      { time: "Sheen", description: "Q + Sheen starts to chunk. Laning becomes easier." },
      { time: "Level 11", description: "R rank 2 + upgrade is huge. Global pressure increases." },
      { time: "2 Items", description: "You start hurting. Barrels chunk squishies for 50%+ HP." },
      { time: "Level 13", description: "E is maxed. Barrels do massive damage and have 5 charges." },
      { time: "3+ Items + IE", description: "You one-shot entire teams with barrel crits. Peak Gangplank." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Trinity Force", "Infinity Edge", "Mortal Reminder"],
      situational: ["Essence Reaver", "Navori Quickblades", "Death's Dance", "Malmortius", "Serpent's Fang"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Inspiration",
      keystone: "First Strike",
      primaryRunes: ["Cash Back", "Biscuit Delivery", "Cosmic Insight"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Ability Haste", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Farm safely with Q. Don't fight - you lose to almost everyone early. Use W to cleanse slows/CC.",
      mid: "Poke with Q when you have Sheen. Farm silver serpents from Q last hits. Look for R assists globally.",
      tips: [
        "Q on champions procs Grasp and First Strike - poke for gold",
        "W removes all CC including suppression - use it reactively",
        "Barrels decay over time - learn the tick timing (2/1/0.5s based on level)",
        "R has 3 upgrades from silver serpents - buy them in order",
        "Barrel crits apply to all enemies hit - position for multi-hits"
      ]
    },
    teamfighting: "Stay in the backline and look for barrel combos on grouped enemies. R the fight for slow and damage. One good barrel chain can win the entire fight. Don't get caught - you're squishy.",
    matchupTips: {
      hard: "Camille, Irelia, and Lucian destroy you early. They close the gap and all-in. Play safe, farm, outscale.",
      easy: "You beat Nasus, Cho'Gath, and Ornn. They can't stop your poke and you outscale them.",
      general: "Rush Sheen for Q damage. Against all-in, save W for their CC. Farm for late game - you're useless early."
    }
  },

  Garen: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Physical (True Damage R)",
    playstyle: "Simple Juggernaut / Villain Hunter",
    description: "Garen is the most straightforward champion in League. He has no mana, built-in regeneration, and a simple but effective kit. His R executes villains with true damage. He's perfect for learning top lane fundamentals.",
    strengths: ["No mana costs", "Massive passive regeneration", "Simple kit", "True damage execute on villain", "Very tanky with W"],
    weaknesses: ["Easily kited", "No gap closer besides Q", "Predictable", "Weak to ranged", "Falls off against tanks"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for damage and silence. E second for spin damage. W is one point wonder early."
    },
    combos: [
      { name: "Basic Trade", keys: "Q → AA → E (cancel early) → walk away", description: "Q silence prevents trading back, E for damage, cancel E to chase or escape." },
      { name: "All-in", keys: "Q → AA → E (full spin) → R", description: "Full rotation. Wait for E to tick low then R execute." },
      { name: "Flash R", keys: "Flash → R", description: "Flash extends R range for surprise executes." },
      { name: "E Flash", keys: "E → Flash (during spin)", description: "Flash repositions while spinning for guaranteed damage." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q is very strong level 1. Look for early trades." },
      { time: "Level 3", description: "Full combo unlocked. Q-E-W is strong all-in." },
      { time: "Level 6", description: "R execute is huge. Look for kills when enemy is below 30% HP." },
      { time: "Berserker's Greaves", description: "Attack speed increases E spins. Cheap spike." },
      { time: "1 Item", description: "Stridebreaker or Trinity spike. You can run people down." },
      { time: "Level 11", description: "R rank 2 has lower cooldown and more damage." },
      { time: "2+ Items", description: "You become a tanky damage threat. Very hard to deal with." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Stridebreaker", "Dead Man's Plate", "Mortal Reminder"],
      situational: ["Trinity Force", "Force of Nature", "Randuin's Omen", "Sterak's Gage", "Gargoyle Stoneplate"],
      boots: ["Berserker's Greaves", "Plated Steelcaps"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Look for short trades with Q. Your passive heals you between trades. Zone enemy from CS with threat of Q.",
      mid: "After level 6, look for all-ins when enemy is ~40% HP. R executes based on missing health.",
      tips: [
        "Passive regeneration activates after not taking damage - back off to heal",
        "Q removes slows - use it to escape ganks",
        "W gives huge resists when activated + shield - use during trades",
        "E does more damage per spin based on target's missing HP",
        "Villain takes true damage from R - always hunt the villain"
      ]
    },
    teamfighting: "Run at the villain (enemy with most recent kills) and try to R them. W gives massive resists in teamfights. E does AoE damage. You're a frontline threat who looks to execute low HP targets.",
    matchupTips: {
      hard: "Vayne, Quinn, and Kayle kite you forever. You need jungle help or Flash engages to reach them.",
      easy: "You beat Yasuo, Yone, and Akali. Your silence stops their combos and you win short trades.",
      general: "Against ranged, use bushes and Q speed to engage. Against tanks, R still does true damage to villain. Rush Stridebreaker for sticking power."
    }
  },

  Gnar: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Physical",
    playstyle: "Transform Fighter / Ranged-Melee Hybrid",
    description: "Gnar is a unique champion who transforms between ranged poke (Mini) and melee CC monster (Mega). Managing rage correctly is the key to mastering him. He's safe in lane but has huge teamfight impact with Mega Gnar ultimates.",
    strengths: ["Safe ranged laning (Mini)", "Huge teamfight CC (Mega)", "% HP damage on W", "Versatile - poke and engage", "Good into melees"],
    weaknesses: ["Rage management is crucial", "Can be forced to fight at bad times", "Mega Gnar is slow", "Falls off 1v1 late game", "Team-dependent"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → W → E",
      explanation: "Q max for poke/slow. W second for %HP and Mega W stun. E last as it's mobility."
    },
    combos: [
      { name: "Mini Poke", keys: "AA → AA → AA (W proc) → Q", description: "Stack W passive, Q for slow, chase with speed boost." },
      { name: "Mini Kite", keys: "Q → AA → E away", description: "Poke pattern then hop away safely." },
      { name: "Mega Engage", keys: "E → R (into wall) → W → Q", description: "Hop in, ult into wall for stun, W stun followup, Q slow." },
      { name: "Flash R", keys: "E → Flash → R (into wall)", description: "Flash extends R for surprise engage into wall stun." },
      { name: "Transform Engage", keys: "(Almost Mega) E → transform mid-air → R", description: "E as Mini, transform to Mega mid-hop for big R engage." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q gives safe poke. Good start vs melees." },
      { time: "Level 3", description: "W passive gives %HP damage. Very strong trading." },
      { time: "Level 6", description: "Mega R is massive. Look for wall stuns for kills or ganks." },
      { time: "1 Item", description: "Black Cleaver or Trinity gives good damage and survivability." },
      { time: "Level 11", description: "R rank 2 has bigger area and more damage." },
      { time: "Full Mega Rage", description: "At any point, full rage bar = you're strongest. Time your transforms." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Black Cleaver", "Stridebreaker", "Sterak's Gage"],
      situational: ["Maw of Malmortius", "Death's Dance", "Randuin's Omen", "Force of Nature", "Wit's End"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Fleet Footwork",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Overgrowth"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Poke with Mini Q and W procs. Manage rage - don't transform at bad times. Trade aggressively when Mega is ready.",
      mid: "Look for Mega R plays on ganks or all-ins. Transform timing is everything. Control rage by last hitting.",
      tips: [
        "Mini W gives movement speed - chase after 3 stacks",
        "Mega W is an AoE stun - huge teamfight ability",
        "E in Mega bounces off enemies for extra range",
        "R stuns if you push enemies into walls",
        "Build rage slowly by last hitting, fast by attacking champions"
      ]
    },
    teamfighting: "Save Mega Gnar for teamfights. Look for a flank angle to R multiple enemies into walls. Your R-W combo can CC entire teams. In Mini form, play like an ADC - kite and poke from range.",
    matchupTips: {
      hard: "Irelia, Camille, and Riven can all-in you before you get Mega. Respect their engage and don't overextend.",
      easy: "You beat Darius, Garen, and Sett. Kite them in Mini, all-in them when Mega. They can't reach you.",
      general: "Freeze rage at 80-90% to threaten Mega form. Transform near walls for easier R stuns. Against all-in, save E for escape."
    }
  },

  Gwen: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Magic (AP)",
    playstyle: "AP Fighter / Skirmish Duelist",
    description: "Gwen is an AP fighter who shreds tanks with %HP magic damage. Her W makes her invulnerable to enemies outside the mist. She has a weak early game but becomes a 1v9 teamfight monster with enough items.",
    strengths: ["%HP magic damage shreds tanks", "W makes her untargetable by ranged", "Great late game scaling", "Strong in sustained fights", "Good sustain with Q heal"],
    weaknesses: ["Weak early game", "W doesn't help vs melee", "Vulnerable to CC", "Needs items to function", "R is tricky to use"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for damage. E second for attack speed. W is one point wonder."
    },
    combos: [
      { name: "Basic Trade", keys: "E → AA → AA → AA → AA (4 stacks) → Q", description: "E in, stack autos, Q at max stacks for center damage." },
      { name: "Short Trade", keys: "E → AA → AA → Q → E out", description: "Quick damage then E to escape." },
      { name: "All-in", keys: "E → AA → Q → AA → R1 → AA → R2 → Q → R3", description: "Weave R casts with autos and Q for maximum damage." },
      { name: "W Safety", keys: "W (when ranged enemy attacks)", description: "Time W to block ranged abilities/autos. Reposition inside mist." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "E gives attack speed and dash. Decent trading." },
      { time: "Level 3", description: "Full combo available. Still weak but can trade." },
      { time: "Level 6", description: "R adds significant burst to your kit." },
      { time: "1 Item (Riftmaker)", description: "Riftmaker omnivamp + ramp damage is huge. You sustain and deal damage." },
      { time: "Nashor's Tooth", description: "Attack speed and AP. Your DPS skyrockets." },
      { time: "2+ Items", description: "You're now a monster. Can 1v2 with W + healing." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion"],
      core: ["Riftmaker", "Nashor's Tooth", "Cosmic Drive"],
      situational: ["Zhonya's Hourglass", "Shadowflame", "Rabadon's Deathcap", "Void Staff", "Banshee's Veil"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Play safe. Farm with Q. Don't fight until you have items. Use W to block ranged poke.",
      mid: "After level 6 and first item, you can start trading. Look for extended fights where you stack passive.",
      tips: [
        "Q center does more damage and heals you - aim the center",
        "E gives massive attack speed - use it before trading",
        "W makes you immune to enemies outside - use against ranged",
        "R has 3 casts - weave them between abilities",
        "Passive stacks with autos - need 4 for full Q damage"
      ]
    },
    teamfighting: "Look to dive the backline with E-R. Use W to block ranged damage while you kill carries. You're a sustained damage threat - the longer the fight, the stronger you get with Conqueror and Riftmaker.",
    matchupTips: {
      hard: "Irelia, Riven, and Camille can burst you before you scale. Respect their early power.",
      easy: "You beat Ornn, Malphite, and Sion. They can't stop your %HP damage and you outscale.",
      general: "Rush Plated Steelcaps vs AD. Farm for 1 item spike. W early against ranged poke."
    }
  },

  Illaoi: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Physical",
    playstyle: "Tentacle Zone Controller / 1vX Monster",
    description: "Illaoi is a unique juggernaut who controls zones with tentacles. Her E soul grab creates pressure, and her R turns ganks into double kills. She's weak to kiting but destroys melees who fight in her territory.",
    strengths: ["Insane 1v2/1v3 potential with R", "E soul creates pressure", "Great sustain from tentacles", "Zone control", "Wins most melee matchups"],
    weaknesses: ["Very immobile", "Easily kited", "Useless if E misses", "R requires enemies to fight in it", "Falls off in teamfights"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → E → W",
      explanation: "Q max for damage and sustain. E second for soul duration. W is utility."
    },
    combos: [
      { name: "Basic Trade", keys: "E → W → Q", description: "Pull soul, W to slam it, Q for damage to both soul and champion." },
      { name: "E Combo", keys: "E → Q (hit both) → W → tentacles slam", description: "Soul and champion take damage from all tentacles." },
      { name: "All-in", keys: "E → R → W → Q → W → Q", description: "Soul pull, R for tentacles, W to make them slam, Q for damage." },
      { name: "1vX", keys: "Wait for gank → E → R (hit multiple) → W spam", description: "Bait the gank, R for tentacles, W resets them. Triple kill potential." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q gives sustain and poke. Set up tentacles." },
      { time: "Level 3", description: "E combo is very strong. Land E for kill pressure." },
      { time: "Level 6", description: "R turns ganks into double kills. Huge spike." },
      { time: "1 Item", description: "Black Cleaver or Eclipse spike. Damage becomes scary." },
      { time: "2+ Items", description: "You can 1v2 reliably. Split push becomes very strong." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Black Cleaver", "Eclipse", "Sterak's Gage"],
      situational: ["Death's Dance", "Maw of Malmortius", "Serylda's Grudge", "Hullbreaker", "Guardian Angel"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Tenacity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Set up tentacles. Look for E poke. If they fight the soul, you win. If they run, they're slowed and you poke.",
      mid: "Force fights near your tentacles. Bait ganks for 1v2 outplays. R is your best friend.",
      tips: [
        "Set up tentacles on walls near wave for E combo",
        "Vessels spawn tentacles near them - use this in fights",
        "R spawns a tentacle for each enemy hit - hit multiple",
        "W makes all nearby tentacles slam - spam it in R",
        "Don't fight without E soul or R - you're weak without them"
      ]
    },
    teamfighting: "Illaoi is weak in teamfights where enemies can walk out of her R. Look to split push and 1v2. If you must teamfight, land E and R multiple people.",
    matchupTips: {
      hard: "Mordekaiser R removes your tentacles. Kayle and Vayne kite you forever. Play safe and split.",
      easy: "You beat Darius, Garen, and Sett. They want to fight - you love fighting. R their engage.",
      general: "Don't R unless you have E soul or they're committed. Save R for ganks. Set up tentacles before fighting."
    }
  },

  Irelia: {
    difficulty: "Hard",
    role: "Top",
    damageType: "Physical",
    playstyle: "Mobile Fighter / Reset Dancer",
    description: "Irelia is a high skill ceiling fighter who dances through fights with Q resets. At max passive stacks, she's one of the strongest duelists in the game. She requires good mechanics but rewards mastery with incredible outplay potential.",
    strengths: ["Incredible mobility with Q resets", "Strong at all stages with passive", "Great sustain with Q heal", "Can outplay any champion", "Versatile engage/escape"],
    weaknesses: ["High skill ceiling", "Weak without passive stacks", "Falls off slightly late", "Struggles vs hard CC", "Minion dependent for mobility"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → W → E",
      explanation: "Q max for damage and sustain. W second for damage reduction. E is utility."
    },
    combos: [
      { name: "Basic Trade", keys: "E → Q → AA → AA → Q", description: "E mark, Q to mark, auto with passive, Q to second E mark." },
      { name: "Stack Passive", keys: "Q (minion) → Q (minion) → Q (minion) → Q (champion)", description: "Stack passive on minions, then engage with 4 stacks." },
      { name: "All-in", keys: "R → E → Q → AA → W → AA → Q → AA → Q", description: "R marks, E marks, chain Q resets while autoing." },
      { name: "Triple Q", keys: "E → Q1 → E2 → Q2 → R → Q3", description: "E both parts hit, Q to each, R for third Q reset." },
      { name: "Wave Engage", keys: "Q (dying minion) → Q (dying minion) → E → Q (champion)", description: "Use minion Qs to gap close, then E for stun." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q + passive stacks can win level 1 all-ins." },
      { time: "Level 2", description: "E gives stun mark. Very strong trading." },
      { time: "Level 3", description: "Full combo available. You can kill at 5 stacks." },
      { time: "Level 6", description: "R adds burst and marks for Q reset. Huge kill pressure." },
      { time: "BOTRK", description: "Blade of the Ruined King is massive. %HP damage + sustain." },
      { time: "2 Items", description: "You're at your strongest relative to enemies." },
      { time: "5 Passive Stacks", description: "At any point, 5 stacks = massively increased damage." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Blade of the Ruined King", "Wit's End", "Death's Dance"],
      situational: ["Sterak's Gage", "Guardian Angel", "Maw of Malmortius", "Randuin's Omen", "Spirit Visage"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Look to stack passive on minions and then trade. At 5 stacks, you win most trades. E is your main trading tool.",
      mid: "With R unlocked, you have huge all-in potential. Look for kills when enemy is pushed up.",
      tips: [
        "Q resets on kill and on marked targets (E and R)",
        "5-stack passive gives massive attack speed and damage",
        "W reduces damage and can't be canceled - use during burst",
        "E has two parts - hit both for stun",
        "R marks all enemies hit - enables multiple Q resets"
      ]
    },
    teamfighting: "Look to flank and hit multi-person R. Q through enemy team, hitting R marks for resets. Target squishies but you can also drain tank with W + sustain.",
    matchupTips: {
      hard: "Tryndamere, Volibear, and Sett are stat-check champions who beat you. Don't fight them head-on early.",
      easy: "You beat Fiora, Riven, and Gangplank. You can match their mobility and out-trade them.",
      general: "Stack passive before trading. Don't fight in minion waves (they can Q to escape). W their main damage ability."
    }
  },

  Jax: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Mixed (Physical + Magic)",
    playstyle: "Late Game Duelist / Split Push King",
    description: "Jax is THE late game 1v1 champion. His E dodges all auto attacks, and his passive gives infinite attack speed scaling. He's weak early but becomes unstoppable in side lanes and 1v1 situations.",
    strengths: ["E dodges all auto attacks", "Insane late game scaling", "Mixed damage hard to itemize", "Best split pusher in the game", "Great tower taking"],
    weaknesses: ["Weak early game", "E on cooldown = vulnerable", "Kitable without E/Q", "Struggles in teamfights", "Needs items to function"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "E → W → Q (Top) or Q → W → E (Jungle)",
      explanation: "E max top for lower cooldown dodge. W second for burst. Q last."
    },
    combos: [
      { name: "Basic Trade", keys: "Q → AA → W → E (as they attack)", description: "Jump in, auto-W reset, E to block their damage." },
      { name: "Short Trade", keys: "E (activate) → Q → AA → W → E (stun)", description: "Pre-activate E, jump in for guaranteed stun." },
      { name: "All-in", keys: "E → Q → AA → W → AA → R → AA → AA → AA", description: "Stun combo into R empowered autos for maximum DPS." },
      { name: "Tower Dive", keys: "E (absorb tower shot) → Q → combo → E stun → Q out to minion", description: "E blocks tower, kill, Q to minion for escape." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "E can cheese level 1 vs auto attackers." },
      { time: "Level 3", description: "Full combo available. Still weak but can trade." },
      { time: "Level 6", description: "R gives burst on third auto and armor/MR. Good spike." },
      { time: "Trinity Force", description: "Massive spike. Q becomes a nuke and you stick to targets." },
      { time: "2 Items", description: "You're now very strong in 1v1s." },
      { time: "3+ Items", description: "You're the best 1v1 champion in the game. Nobody can duel you." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Trinity Force", "Blade of the Ruined King", "Sterak's Gage"],
      situational: ["Death's Dance", "Wit's End", "Maw of Malmortius", "Randuin's Omen", "Guardian Angel"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    runes: {
      primary: "Precision",
      keystone: "Conqueror",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Unflinching"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Play safe. Farm with abilities if needed. Don't fight until level 6 at earliest.",
      mid: "After Sheen, you can start trading. Look for E stuns when enemy tries to trade.",
      tips: [
        "E dodges ALL auto attacks - including from towers",
        "W resets auto timer - always auto → W → auto",
        "R third hit does massive bonus damage - count your autos",
        "Passive stacks attack speed - extended fights favor you",
        "Q can jump to wards - use for escapes"
      ]
    },
    teamfighting: "Jax isn't great in teamfights. Focus on split pushing and 1v1/1v2. If you must teamfight, flank to backline and try to stun priority targets.",
    matchupTips: {
      hard: "Malphite, Gragas, and Akali are AP champions who don't auto much. E is less useful. Farm and outscale.",
      easy: "You beat Fiora, Irelia, and Tryndamere late game. E their main damage, out-sustain them.",
      general: "Stack passive before trading. Save E for when they commit. Rush Sheen for Q burst."
    }
  },

  Jayce: {
    difficulty: "Hard",
    role: "Top",
    damageType: "Physical",
    playstyle: "Ranged Poke / Transform Bully",
    description: "Jayce is a ranged top laner who bullies melees with poke but can also all-in with hammer form. He has a high skill ceiling with form management and falls off late game. Perfect for snowballing leads early.",
    strengths: ["Ranged bully in top lane", "Massive poke with Q-E combo", "Strong early/mid game", "Versatile with two forms", "Good tower pressure"],
    weaknesses: ["Falls off late game", "High skill ceiling", "Mana hungry", "No sustain", "Needs to snowball"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "Q → W → E",
      explanation: "Q max for poke damage. W second for DPS. E last."
    },
    combos: [
      { name: "Poke Combo", keys: "Q → E (acceleration gate)", description: "Shoot Q through E gate for long range poke." },
      { name: "Full Burst", keys: "Ranged Q-E → R → Q → E → W → AA", description: "Poke, switch to hammer, knock them up, burst." },
      { name: "All-in", keys: "E-Q (ranged) → R → Q → AA → W → AA → E", description: "Full rotation from ranged into melee." },
      { name: "Melee Trade", keys: "Q → AA → W → AA → AA → AA → E (away)", description: "Jump in, W for attack speed, E to disengage." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Ranged Q poke is strong. Zone enemy early." },
      { time: "Level 2", description: "Q-E combo unlocked. Massive poke damage." },
      { time: "Level 4", description: "Melee Q has good damage now for all-ins." },
      { time: "1 Item", description: "Eclipse or Muramana spike. Your poke chunks." },
      { time: "2 Items", description: "Peak Jayce power. You can one-shot squishies." },
      { time: "3 Items", description: "Still strong but starting to fall off vs scaling champs." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Eclipse", "Muramana", "Serylda's Grudge"],
      situational: ["Black Cleaver", "Edge of Night", "Maw of Malmortius", "Guardian Angel", "Death's Dance"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    runes: {
      primary: "Domination",
      keystone: "First Strike",
      primaryRunes: ["Cash Back", "Biscuit Delivery", "Cosmic Insight"],
      secondary: "Sorcery",
      secondaryRunes: ["Transcendence", "Gathering Storm"],
      statShards: ["Adaptive Force", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Bully with ranged autos and Q-E poke. Deny CS. Build a lead before they get to you.",
      mid: "Push your lead. Roam mid with E gate for ganks. Look for dives with jungler.",
      tips: [
        "E-Q in cannon form accelerates Q for more damage",
        "Hammer E knocks back + does %max HP damage",
        "Hammer W is an auto-reset with AoE",
        "Switching forms gives burst of movement speed",
        "Manage mana - you're useless when OOM"
      ]
    },
    teamfighting: "Stay in ranged form and poke with Q-E. Switch to hammer only to burst or peel. Don't get caught in melee range - you're squishy.",
    matchupTips: {
      hard: "Irelia, Wukong, and Malphite can engage on you easily. Respect their gap closers.",
      easy: "You beat Gangplank, Kayle, and Nasus. Bully them forever and deny CS.",
      general: "Q-E through minions for safe poke. Against all-in, save hammer E for disengage. Rush Tear for mana sustain."
    }
  },

  Kayle: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Magic",
    playstyle: "Hyperscaling Carry / Ranged Late Game",
    description: "Kayle is the ultimate scaling champion who transforms from weak melee to ranged hypercarry. Her level 6/11/16 are massive spikes. She's very weak early but becomes a 1v9 machine late game.",
    strengths: ["Best scaling champion in the game", "Becomes ranged at 6, then 11", "True damage at 16", "Invulnerability ultimate", "Can carry any game late"],
    weaknesses: ["Extremely weak early", "Melee until level 6", "Easy to dive and camp", "No CC", "Team needs to play around her"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: {
      order: "E → Q → W",
      explanation: "E max for execute damage. Q second for slow and shred. W for utility."
    },
    combos: [
      { name: "Pre-6 Trade", keys: "E → AA → Q → AA", description: "E empowered auto, Q slow, auto again." },
      { name: "Post-6 Trade", keys: "Q → AA → AA → E → AA → AA → AA", description: "Q shreds, auto spam, E execute." },
      { name: "Level 11+ All-in", keys: "Q → E → AA → AA → R (on self at low HP)", description: "Full DPS, ult yourself when low to survive." },
      { name: "Save Carry", keys: "W (ally) → R (ally)", description: "Speed up ally and ulti them to save." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "HUGE spike. You become ranged permanently. Game changes." },
      { time: "Level 11", description: "Waves on autos. You become a real champion. Very strong." },
      { time: "Level 16", description: "True damage waves. You're now the strongest champion in the game." },
      { time: "1 Item", description: "Nashor's gives you DPS to actually threaten." },
      { time: "2 Items", description: "Riftmaker + Nashor's. You're now a threat." },
      { time: "3+ Items", description: "You hard carry. Nobody can 1v1 you." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion"],
      core: ["Nashor's Tooth", "Riftmaker", "Rabadon's Deathcap"],
      situational: ["Zhonya's Hourglass", "Void Staff", "Wit's End", "Banshee's Veil", "Lich Bane"],
      boots: ["Berserker's Greaves", "Plated Steelcaps"]
    },
    runes: {
      primary: "Precision",
      keystone: "Lethal Tempo",
      primaryRunes: ["Triumph", "Legend: Alacrity", "Last Stand"],
      secondary: "Resolve",
      secondaryRunes: ["Second Wind", "Overgrowth"],
      statShards: ["Attack Speed", "Adaptive Force", "Health"]
    },
    lanePhase: {
      early: "Survive. That's it. Farm what you can, don't die. Give up CS if needed.",
      mid: "After level 6, you can start trading. After 11, you can fight most champions.",
      tips: [
        "Level 6 = ranged. Level 11 = waves. Level 16 = true damage waves.",
        "R can be cast on allies - save them from burst",
        "Q shreds armor/MR - always use before DPS",
        "W heals and speeds up - use for escapes or all-ins",
        "E is an execute - save it for low HP targets"
      ]
    },
    teamfighting: "At level 16, you ARE the teamfight. Position like an ADC and DPS from range. R yourself or ally when bursted. You can 1v9 with proper positioning.",
    matchupTips: {
      hard: "Irelia, Riven, and Camille destroy you pre-6. Let them push, farm under tower, wait for 6.",
      easy: "You outscale Nasus, Cho'Gath, and Ornn. Just survive early and you win late.",
      general: "Give up CS to not die. Level 6 is everything. Build for late game. Don't fight until 11."
    }
  }
};

export default championGuides;
