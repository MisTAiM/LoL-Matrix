// Elite Coaching System - World Class League of Legends Training
// Advanced concepts, decision trees, game theory, and professional-level analysis

// ==================== MICRO COACHING ====================
export const microCoaching = {
  lastHitting: {
    name: "Last Hitting Mastery",
    description: "The fundamental skill that separates ranks more than anything else.",
    goldMath: {
      minionValue: {
        meleeMinion: "21g (increases over time)",
        casterMinion: "14g (increases over time)",
        cannonMinion: "60-90g (increases over time)",
        superMinion: "90g"
      },
      csComparison: {
        perfect: "10 CS/min = 114+ gold/min from minions alone",
        good: "8 CS/min = 91 gold/min",
        average: "6 CS/min = 68 gold/min",
        bad: "4 CS/min = 46 gold/min",
        difference: "Over 20 minutes: Perfect vs Average = 920 gold difference = ~1/3 of an item"
      },
      killEquivalent: "15 CS = 1 kill worth of gold (~300g)"
    },
    techniques: {
      basic: [
        "Watch minion HP bars, not your champion",
        "Let tower set up minions: Melee = 2 tower shots + AA, Caster = AA + tower + AA",
        "Use abilities to secure CS under pressure, not to push mindlessly"
      ],
      advanced: [
        "Prep caster minions with one auto before tower shots",
        "Last hit at the EXACT moment - don't auto early",
        "Animation cancel your auto attacks for faster CS"
      ],
      pro: [
        "Track enemy abilities to know when you can safely walk up",
        "Sacrifice CS to avoid losing HP that costs you more later",
        "Know exactly which abilities one-shot casters at each level/item"
      ]
    },
    drills: [
      { name: "No Items Challenge", goal: "90 CS at 10 min with no items", difficulty: "Hard" },
      { name: "Under Tower Practice", goal: "100% CS under tower for 5 waves straight", difficulty: "Medium" },
      { name: "Harass + CS", goal: "80 CS at 10 min while hitting enemy 30+ times", difficulty: "Expert" }
    ]
  },

  tradingPatterns: {
    name: "Trading Fundamentals",
    description: "Dealing damage while taking less damage in return.",
    concepts: {
      tradingStance: "Position to threaten enemy when they go for CS. They choose: trade or CS.",
      cooldownTracking: "Trade AFTER enemy uses their main ability. Your damage > their damage.",
      minionAdvantage: "Early game, minions deal huge damage. Don't fight in enemy wave.",
      healthAdvantage: "Trade when you have more HP. The player with more HP dictates the lane.",
      manaManagement: "Don't run OOM trading. Save enough for all-in or escape."
    },
    patterns: {
      shortTrade: {
        description: "Quick damage then back off",
        when: "Enemy has stronger extended trades",
        how: "Use one ability + auto, then back off before they retaliate"
      },
      extendedTrade: {
        description: "Keep fighting for multiple rotations",
        when: "You have sustain, DPS, or stat advantage",
        how: "Stay in range, use all cooldowns, auto attack constantly"
      },
      allIn: {
        description: "Commit to killing or dying",
        when: "Enemy is low, your cooldowns are up, jungler is away",
        how: "Flash + full combo + ignite. Don't hesitate once committed"
      }
    },
    mathExample: {
      scenario: "Level 3 Darius vs Level 3 Garen",
      dariusDamage: "Q(blade): 40 + E: 10 + W: 50 + 3 Autos: 180 + Passive(5stack): 30 = ~310 damage",
      garenDamage: "Q: 60 + E(3s): 120 + 3 Autos: 150 = ~330 damage",
      conclusion: "Garen wins short trade (Q silence stops Darius), Darius wins extended (passive stacking)",
      correctPlay: "Darius should E to start, auto-W-Q, keep autoing to stack passive. Garen should Q-E then walk away."
    }
  },

  mechanicalSkills: {
    name: "Mechanical Excellence",
    description: "The physical execution of your champion's abilities.",
    fundamentals: [
      { skill: "Orbwalking/Kiting", description: "Moving between auto attacks to reposition while dealing damage" },
      { skill: "Animation Canceling", description: "Cutting ability animations short by immediately inputting another command" },
      { skill: "Skillshot Prediction", description: "Aiming where enemies WILL be, not where they are" },
      { skill: "Flash Mechanics", description: "Using flash mid-ability to redirect or extend range" },
      { skill: "Combo Execution", description: "Performing ability sequences quickly and correctly" }
    ],
    advancedTechniques: {
      inputBuffering: "Queue up abilities during CC so they cast immediately when CC ends",
      autoReset: "Use auto-reset abilities right after an auto attack for instant double damage",
      rangeAbuse: "Stay at maximum range to hit enemies without them being able to hit back",
      dashManagement: "Save dashes for escaping, not engaging (unless you're sure of the kill)",
      cooldownWeaving: "Use abilities between auto attacks, never cancel autos with abilities"
    },
    practiceRoutine: {
      daily: [
        "10 minutes CS practice (aim for 100 CS at 10 min)",
        "20 combo executions on practice dummies",
        "5 minutes flash combo practice"
      ],
      weekly: [
        "1v1 customs against friends",
        "VOD review of your mechanical mistakes",
        "Try new animation cancels/combos"
      ]
    }
  }
};

// ==================== MACRO COACHING ====================
export const macroCoaching = {
  waveManagement: {
    name: "Wave Manipulation Mastery",
    description: "Controlling minion waves is what separates good players from great players.",
    states: {
      pushing: {
        definition: "Killing enemy minions faster than they kill yours",
        when: [
          "Before backing (crash into tower)",
          "Before roaming (enemy loses CS to tower)",
          "When you want to take tower plates",
          "When you want to reset the wave"
        ],
        how: "Use abilities and autos to kill all minions ASAP"
      },
      freezing: {
        definition: "Keeping the wave in one spot, usually near your tower",
        when: [
          "You're ahead and want to deny CS",
          "You're behind and want safe farm",
          "You want to set up a gank",
          "Enemy has no TP and needs to walk back"
        ],
        how: "Only last hit. Tank 3-4 minions briefly to keep wave in place.",
        math: "Freezing for 3 waves = ~18 CS denied = ~250-300g denied + XP"
      },
      slowPush: {
        definition: "Building a large wave that crashes eventually",
        when: [
          "Setting up a dive with jungler",
          "Before dragon/baron to create pressure",
          "Before roaming (even bigger crash)",
          "When you want to take multiple plates"
        ],
        how: "Kill caster minions only. Let melees stack up. 2-3 waves = huge crash.",
        math: "3-wave crash = ~25 minions hitting tower = 2+ plates potentially"
      },
      bouncing: {
        definition: "Pushing into tower so the wave bounces back toward you",
        when: [
          "After a kill, push fast to bounce",
          "Reset before backing",
          "Setting up a freeze"
        ],
        how: "Fast push, let it fully crash, walk away. Wave comes back to you."
      }
    },
    commonMistakes: [
      "Pushing without vision = free gank for enemy",
      "Freezing when you should be roaming",
      "Breaking your own freeze by using abilities",
      "Not slow pushing before objectives"
    ]
  },

  mapControl: {
    name: "Map Control & Vision",
    description: "Vision wins games. Know where enemies are, and they can't kill you.",
    visionPriority: {
      laning: [
        "River (prevent ganks)",
        "Tribush (track jungler)",
        "Enemy jungle entrance (advanced tracking)"
      ],
      midGame: [
        "Dragon/Baron pit",
        "Enemy jungle (if ahead)",
        "Your jungle (if behind)",
        "Flanking paths"
      ],
      lateGame: [
        "Baron pit and all entrances",
        "Elder dragon pit",
        "Flanking bushes near objectives"
      ]
    },
    controlWardUsage: {
      cost: "75g per ward",
      value: "Denies enemy vision + provides long-term vision",
      placement: "Put in CONTESTED areas, not safe areas",
      timing: "Buy one EVERY back until you have one on map"
    },
    rotationTiming: {
      roam: "Move when you've pushed wave and enemy can't follow",
      flank: "Move through fog of war to arrive from unexpected angle",
      collapse: "Ping and move with team to turn a 1v1 into a 2v1"
    }
  },

  objectiveControl: {
    name: "Objective-Based Play",
    description: "Objectives win games. Kills mean nothing without objectives.",
    priority: {
      tier1: ["Nexus", "Inhibitor", "Baron/Elder"],
      tier2: ["Dragon Soul", "Inner Towers", "Rift Herald"],
      tier3: ["Regular Dragons", "Outer Towers", "Kills"]
    },
    dragonMath: {
      mountain: "+8% Armor/MR per stack. At 4 stacks: +32% = huge for tanks",
      infernal: "+5% AD/AP per stack. At 4 stacks: +20% = massive for carries",
      ocean: "+3% missing HP regen. At 4 stacks: +12% = sustain machine",
      cloud: "+7% Move Speed (25% out of combat). At 4 stacks: +28%",
      hextech: "+5 AH and +5% AS per stack",
      chemtech: "+5% tenacity/heal power per stack",
      soul: "Game-winning permanent buff. Prioritize!"
    },
    baronMath: {
      buff: "Empowered recall (4s), +12% AD/AP, massively buffed minions",
      duration: "180 seconds (3 minutes)",
      value: "Usually worth 2-3 towers minimum",
      when: [
        "After winning teamfight near baron",
        "Enemy jungler is dead",
        "You have number advantage",
        "Enemy can't contest"
      ]
    },
    heraldMath: {
      charge: "Deals 2000-2750 damage to tower based on game time",
      value: "Usually 1-2 plates (320g) + pressure",
      bestUse: "On mid tower (affects both sides) or to finish a low tower"
    }
  },

  teamfighting: {
    name: "Teamfight Excellence",
    description: "5v5 fights are where games are decided.",
    roles: {
      frontline: {
        job: "Absorb damage, CC enemies, zone backline",
        positioning: "In FRONT of your team",
        priority: "Peel > Engage (usually)"
      },
      assassin: {
        job: "Kill enemy carries",
        positioning: "Flanking or waiting for fight to start",
        priority: "Wait for CC to be used, then strike"
      },
      carry: {
        job: "Deal consistent damage while surviving",
        positioning: "Behind frontline, at max range",
        priority: "Survival > Damage > Target selection"
      },
      support: {
        job: "Enable carries through heals/shields/CC",
        positioning: "Near your carries",
        priority: "Keep the carry alive at all costs"
      }
    },
    targetSelection: {
      myth: "Focus the ADC!",
      reality: "Hit whoever is safe to hit",
      explanation: "A dead ADC who dove their backline dealt 0 damage. A living ADC who hit their tank dealt 3000 damage.",
      priority: "Closest safe target > High priority target"
    },
    fightTiming: {
      goodTime: [
        "After landing key CC",
        "After enemy uses important cooldowns",
        "When you have numbers advantage",
        "When you have ultimate advantage"
      ],
      badTime: [
        "Enemy has all cooldowns",
        "You're missing a member",
        "Enemy has Baron buff",
        "Your carries are underleveled"
      ]
    }
  }
};

// ==================== MENTAL COACHING ====================
export const mentalCoaching = {
  tiltManagement: {
    name: "Tilt Prevention & Management",
    description: "Mental state affects gameplay more than mechanics.",
    causes: [
      "Bad teammates",
      "Losing streak",
      "Getting camped",
      "Feeding early",
      "Toxic chat"
    ],
    symptoms: [
      "Making aggressive plays without thinking",
      "Typing in chat instead of playing",
      "Tunnel visioning on one enemy",
      "Giving up before game is over"
    ],
    solutions: {
      preventive: [
        "/mute all at game start if you tilt easily",
        "Focus on YOUR mistakes, not teammates'",
        "Set a loss limit (stop after 2-3 losses)",
        "Take 5-10 minute breaks between games"
      ],
      reactive: [
        "Take a deep breath before making plays",
        "Physically step away from computer if needed",
        "Remember: this is one game of thousands",
        "Focus on what you CAN control"
      ]
    },
    affirmations: [
      "I will learn something from every game.",
      "My teammates are not my enemies.",
      "LP doesn't define my worth.",
      "I play to improve, not just to win."
    ]
  },

  growthMindset: {
    name: "Champion's Mindset",
    description: "How you think determines how you improve.",
    principles: [
      { name: "Every death is a lesson", explanation: "Ask WHY you died, not WHO'S fault" },
      { name: "Rank is temporary", explanation: "Focus on improvement, rank follows" },
      { name: "There's always something to improve", explanation: "Challenger players still learn daily" },
      { name: "Comparison is the thief of joy", explanation: "Compare to your past self, not others" }
    ],
    reframes: {
      before: "My jungler never ganks",
      after: "How can I win lane without ganks?",
      
      before: "This matchup is unwinnable",
      after: "What can I learn about this matchup?",
      
      before: "My team is trash",
      after: "How can I carry harder?",
      
      before: "I'm hardstuck",
      after: "What am I doing wrong repeatedly?"
    }
  },

  performanceOptimization: {
    name: "Peak Performance State",
    description: "Physical and mental preparation for climbing.",
    beforePlaying: [
      "Sleep 7-8 hours (reaction time drops with less)",
      "Eat a proper meal (brain needs fuel)",
      "Warm up in practice tool or ARAM",
      "Check your mindset - are you tilted?",
      "Set a specific goal for the session"
    ],
    duringPlaying: [
      "Take 2-3 minute breaks between games",
      "Stay hydrated (water, not energy drinks)",
      "Maintain good posture",
      "Don't play more than 3-4 hours straight",
      "Stop if you lose 2-3 in a row"
    ],
    afterPlaying: [
      "Review at least one game",
      "Write down what you learned",
      "Note what to practice next session",
      "Don't dwell on losses"
    ]
  }
};

// ==================== DECISION MAKING ====================
export const decisionMaking = {
  lanePhasseDecisions: {
    name: "Laning Decision Tree",
    description: "What to do at any point in lane.",
    tree: {
      q1: "Is enemy laner missing?",
      a1yes: "Push wave + look at map. Are they roaming? Ping, maybe follow.",
      a1no: {
        q2: "Do you have kill pressure?",
        a2yes: "Trade aggressively. Look for all-in if they're low.",
        a2no: {
          q3: "Can you farm safely?",
          a3yes: "Farm. Don't force fights. Scale.",
          a3no: "Give up CS. Stay in XP range. Don't die."
        }
      }
    },
    backTiming: {
      good: [
        "After killing enemy (push + back)",
        "When you have 1300g+ for first item",
        "After crashing cannon wave",
        "When enemy backs (match their timing)"
      ],
      bad: [
        "With a huge wave coming to your tower",
        "When enemy is pushed in (they'll take plates)",
        "With low gold (wasted trip)",
        "When objective is spawning soon"
      ]
    }
  },

  midGameDecisions: {
    name: "Mid Game Decision Making",
    description: "The most complex phase of the game.",
    priority: [
      "Is dragon/baron spawning soon? → Group for it",
      "Are there waves crashing into your towers? → Catch them",
      "Is there a free tower to take? → Take it",
      "Is there a pick to make? → Collapse",
      "None of the above? → Farm jungle/waves safely"
    ],
    splitPushDecision: {
      split: [
        "You win 1v1 against anyone they send",
        "You have TP available",
        "Your team can stall 4v5",
        "Enemy has no hard engage on your team"
      ],
      group: [
        "Dragon soul fight is coming",
        "Baron is spawning",
        "Your team needs you for fights",
        "Enemy can dive your team easily"
      ]
    }
  },

  teamfightDecisions: {
    name: "Teamfight Decision Tree",
    description: "What to do before, during, and after fights.",
    beforeFight: {
      check: [
        "Is everyone alive?",
        "Do we have vision?",
        "Do we have ultimates?",
        "Is this a good fight location?"
      ],
      if_no: "Don't force the fight. Stall, reset, or trade objectives."
    },
    duringFight: {
      tanks: "Engage → CC key targets → Peel for carries",
      assassins: "Wait for cooldowns → Flank → Kill carry → Get out or die trying",
      carries: "Stay back → Hit closest target → Kite backward → Use defensive abilities",
      supports: "Stay with carry → Shield/heal them → Use CC on divers"
    },
    afterFight: {
      won: "TAKE SOMETHING. Baron > Inhibitor > Dragon > Towers > Nothing",
      lost: "Don't stagger deaths. All die together or all retreat",
      close: "Assess what you can still take. Sometimes 1-2 dying for Baron is worth"
    }
  }
};

// ==================== RANK-SPECIFIC COACHING ====================
export const rankCoaching = {
  Iron: {
    name: "Iron → Bronze",
    mainFocus: "Basic game understanding",
    goals: [
      "Don't die more than 8 times per game",
      "Hit at least 5 CS per minute",
      "Use all your abilities in fights",
      "Buy items (don't sit on gold)"
    ],
    biggestMistakes: [
      "Running into 1v5s",
      "Never looking at minimap",
      "Not using abilities",
      "Not buying items"
    ],
    tip: "Focus on not dying. Literally just don't die. You'll climb to Bronze."
  },
  
  Bronze: {
    name: "Bronze → Silver",
    mainFocus: "Mechanical basics",
    goals: [
      "Hit 6 CS per minute",
      "Die less than 6 times per game",
      "Use abilities for trading, not just randomly",
      "Look at minimap every 10 seconds"
    ],
    biggestMistakes: [
      "Chasing kills through the entire map",
      "Never warding",
      "Not knowing their champion's combo",
      "Fighting with no mana/cooldowns"
    ],
    tip: "Learn your champion's combo. Practice it until you can do it without thinking."
  },
  
  Silver: {
    name: "Silver → Gold",
    mainFocus: "Basic macro",
    goals: [
      "Hit 7 CS per minute",
      "Track enemy jungler",
      "Take tower after kills",
      "Buy control wards"
    ],
    biggestMistakes: [
      "Winning lane, losing game",
      "No objective focus",
      "Wave management is random",
      "Fighting without purpose"
    ],
    tip: "After every kill, ask: what can I take? Tower? Dragon? Stop ARAMing mid."
  },
  
  Gold: {
    name: "Gold → Platinum",
    mainFocus: "Consistency",
    goals: [
      "Hit 8 CS per minute",
      "Consistent wave management",
      "Track summoner spell cooldowns",
      "Understand win conditions"
    ],
    biggestMistakes: [
      "Inconsistent performance game to game",
      "Bad wave manipulation",
      "Forcing fights at wrong times",
      "Not playing to win condition"
    ],
    tip: "You're decent. Now be consistent. Same high level every game, not just some games."
  },
  
  Platinum: {
    name: "Platinum → Diamond",
    mainFocus: "Optimization",
    goals: [
      "Miss almost no CS in lane",
      "Perfect wave management",
      "Predict enemy movements",
      "Lead your team with pings"
    ],
    biggestMistakes: [
      "Small mechanical mistakes that add up",
      "Not punishing enemy mistakes",
      "Poor tempo (too slow, too fast)",
      "Ego plays"
    ],
    tip: "Everything matters now. Every CS, every trade, every rotation. Optimize everything."
  },
  
  Diamond: {
    name: "Diamond → Master",
    mainFocus: "Perfection",
    goals: [
      "Perfect fundamentals every game",
      "Adapt to any game state",
      "Mental fortitude",
      "Lead team to victory"
    ],
    biggestMistakes: [
      "Autopiloting on known information",
      "Not adapting to this specific game",
      "Tilting and ego",
      "Inconsistency"
    ],
    tip: "You know what to do. Now do it every single game without fail."
  },
  
  Master: {
    name: "Master → Challenger",
    mainFocus: "Mastery",
    goals: [
      "Be unpredictable while consistent",
      "Perfect mental state",
      "Master multiple champions",
      "Outthink opponents"
    ],
    biggestMistakes: [
      "Being readable",
      "Mental boom",
      "Champion pool issues",
      "Not innovating"
    ],
    tip: "At this level, it's mind games. Who can outthink who. And who has better mental."
  }
};

// ==================== COACHING EXERCISES ====================
export const coachingExercises = {
  daily: [
    {
      name: "CS Drill",
      duration: "10 minutes",
      description: "Practice tool, 10 min CS test. Track your score daily.",
      goal: "Improvement over time, not perfection"
    },
    {
      name: "Combo Practice",
      duration: "5 minutes",
      description: "Practice your champion's combos on dummies.",
      goal: "50+ repetitions"
    },
    {
      name: "VOD Review",
      duration: "15 minutes",
      description: "Watch your last game. Note 3 mistakes.",
      goal: "Identify recurring patterns"
    }
  ],
  weekly: [
    {
      name: "1v1 Practice",
      duration: "30 minutes",
      description: "Custom 1v1 against similar skill player.",
      goal: "Test trading patterns"
    },
    {
      name: "New Champion Study",
      duration: "20 minutes",
      description: "Watch a guide on a champion you don't play.",
      goal: "Understand their kit for matchups"
    },
    {
      name: "Full VOD Review",
      duration: "45 minutes",
      description: "Watch an entire game start to finish.",
      goal: "Understand macro mistakes"
    }
  ],
  monthly: [
    {
      name: "Stats Review",
      duration: "30 minutes",
      description: "Check op.gg stats. What's improved? What hasn't?",
      goal: "Track long-term progress"
    },
    {
      name: "Champion Pool Audit",
      duration: "20 minutes",
      description: "Are you playing the right champions? Winrates check.",
      goal: "Optimize champion pool"
    }
  ]
};

// ==================== COACHING MATH ====================
export const gameTheoryMath = {
  goldEfficiency: {
    explanation: "Gold efficiency = stat value / gold cost",
    examples: {
      longsword: { cost: 350, ad: 10, efficiency: "100% (baseline)" },
      pickaxe: { cost: 875, ad: 25, efficiency: "100% (baseline)" },
      vampiricScepter: { cost: 900, ad: 15, lifesteal: "10%", efficiency: "~130%" },
      BOTRK: { cost: 3200, stats: "40 AD, 25% AS, 10% LS, Passive", efficiency: "~110% + passive" }
    }
  },
  
  damageCalculation: {
    physical: {
      formula: "Post-Mitigation Damage = Raw Damage × (100 / (100 + Armor))",
      example: "100 damage vs 100 armor = 100 × (100/200) = 50 damage taken",
      armorEfficiency: [
        { armor: 0, damageReduction: "0%" },
        { armor: 50, damageReduction: "33%" },
        { armor: 100, damageReduction: "50%" },
        { armor: 200, damageReduction: "67%" },
        { armor: 300, damageReduction: "75%" }
      ]
    },
    magic: {
      formula: "Same as physical but with Magic Resist",
      note: "This is why %armor pen is better vs tanks, flat pen is better vs squishies"
    }
  },
  
  experienceMath: {
    soloXP: "Full XP from minions when alone",
    sharedXP: "Split XP when two or more in range",
    levelAdvantage: "Each level = ~600g worth of stats",
    level2: "First wave (6 minions) + 1 melee minion = Level 2",
    level3: "First 2 waves + 3 melee minions = Level 3",
    level6: "~65 CS puts you at level 6 solo"
  },
  
  objectiveMath: {
    tower: {
      outerTower: "1000g (250 local + 150 global)",
      innerTower: "1250g",
      inhibTower: "1000g",
      inhibitor: "50g but enables super minions"
    },
    dragon: {
      gold: "25g per player + 25g to killer",
      soulValue: "Worth ~3000-5000g in stats depending on soul"
    },
    baron: {
      gold: "300g per player",
      buffValue: "Worth 2000-4000g in tower damage + stats"
    }
  }
};

export default {
  microCoaching,
  macroCoaching,
  mentalCoaching,
  decisionMaking,
  rankCoaching,
  coachingExercises,
  gameTheoryMath
};
