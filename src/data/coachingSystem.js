// Elite Coaching System - Pro-Level Improvement Framework
// The most comprehensive LoL coaching system available

// ============================================
// SKILL ASSESSMENT FRAMEWORK
// ============================================

export const skillAssessment = {
  categories: {
    mechanics: {
      name: "Mechanics",
      weight: 0.25,
      skills: [
        { name: "CS'ing", description: "Last hitting accuracy", benchmarks: { iron: 3, bronze: 4, silver: 5, gold: 6, plat: 7, diamond: 8, master: 9 } },
        { name: "Trading", description: "Executing damage trades", benchmarks: { iron: 2, bronze: 3, silver: 4, gold: 5, plat: 6, diamond: 7, master: 8 } },
        { name: "Combos", description: "Champion-specific combos", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 6, diamond: 8, master: 9 } },
        { name: "Kiting", description: "Orbwalking and positioning", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 7, master: 8 } },
        { name: "Skillshots", description: "Landing/dodging skillshots", benchmarks: { iron: 2, bronze: 3, silver: 4, gold: 5, plat: 6, diamond: 7, master: 8 } }
      ]
    },
    laning: {
      name: "Laning Phase",
      weight: 0.25,
      skills: [
        { name: "Wave Management", description: "Freezing, pushing, slowpush", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 5, plat: 6, diamond: 8, master: 9 } },
        { name: "Trading Stance", description: "Positioning for trades", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 6, diamond: 7, master: 8 } },
        { name: "Back Timing", description: "When to recall", benchmarks: { iron: 2, bronze: 3, silver: 4, gold: 5, plat: 6, diamond: 7, master: 8 } },
        { name: "Lane Priority", description: "Understanding when you have prio", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 6, diamond: 7, master: 8 } },
        { name: "Jungle Tracking", description: "Knowing enemy jungler position", benchmarks: { iron: 1, bronze: 1, silver: 2, gold: 4, plat: 5, diamond: 7, master: 8 } }
      ]
    },
    macro: {
      name: "Macro Game",
      weight: 0.25,
      skills: [
        { name: "Objective Control", description: "Dragon, Baron, Herald priority", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 6, diamond: 7, master: 9 } },
        { name: "Map Awareness", description: "Minimap attention", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 7, master: 8 } },
        { name: "Rotations", description: "Moving around the map efficiently", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 7, master: 8 } },
        { name: "Vision Control", description: "Warding and sweeping", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 6, master: 8 } },
        { name: "Win Condition", description: "Understanding how to win", benchmarks: { iron: 1, bronze: 1, silver: 2, gold: 4, plat: 5, diamond: 7, master: 9 } }
      ]
    },
    teamfighting: {
      name: "Teamfighting",
      weight: 0.15,
      skills: [
        { name: "Positioning", description: "Where to stand in fights", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 6, diamond: 7, master: 9 } },
        { name: "Target Selection", description: "Who to focus", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 7, master: 8 } },
        { name: "Cooldown Tracking", description: "Tracking key enemy abilities", benchmarks: { iron: 1, bronze: 1, silver: 2, gold: 3, plat: 5, diamond: 7, master: 8 } },
        { name: "Engage/Peel", description: "Knowing your teamfight role", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 7, master: 8 } },
        { name: "Fight Timing", description: "When to fight vs when to disengage", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 6, master: 8 } }
      ]
    },
    mental: {
      name: "Mental Game",
      weight: 0.10,
      skills: [
        { name: "Tilt Resistance", description: "Staying calm after mistakes", benchmarks: { iron: 2, bronze: 3, silver: 4, gold: 5, plat: 6, diamond: 7, master: 9 } },
        { name: "Focus", description: "Maintaining concentration", benchmarks: { iron: 3, bronze: 4, silver: 5, gold: 6, plat: 7, diamond: 8, master: 9 } },
        { name: "Adaptability", description: "Adjusting to game state", benchmarks: { iron: 2, bronze: 3, silver: 4, gold: 5, plat: 6, diamond: 7, master: 8 } },
        { name: "Communication", description: "Pinging and shotcalling", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 5, diamond: 6, master: 8 } },
        { name: "Self-Review", description: "Learning from mistakes", benchmarks: { iron: 1, bronze: 2, silver: 3, gold: 4, plat: 6, diamond: 7, master: 9 } }
      ]
    }
  }
};

// ============================================
// STRUCTURED LEARNING PATHS
// ============================================

export const learningPaths = {
  ironToBronze: {
    name: "Iron → Bronze",
    duration: "2-4 weeks",
    focus: ["Basic CS", "Not dying", "Using abilities"],
    weeklyPlan: [
      {
        week: 1,
        theme: "Fundamentals",
        goals: ["Learn all abilities of 3 champions", "Practice last hitting for 15 min/day", "Die less than 8 times per game"],
        drills: ["CS practice tool - 50 CS in 10 min", "Play vs bots to learn champions"]
      },
      {
        week: 2,
        theme: "Basic Trading",
        goals: ["Auto attack when enemy goes for CS", "Use abilities to trade, not just CS", "Track enemy summoner spells"],
        drills: ["Trading in normals", "Call out enemy summs in chat"]
      },
      {
        week: 3,
        theme: "Map Awareness",
        goals: ["Look at minimap every 5 seconds", "Ping when enemies are missing", "Ward at least 5 times per game"],
        drills: ["Minimap timer practice", "Force yourself to buy control wards"]
      },
      {
        week: 4,
        theme: "Consolidation",
        goals: ["Combine all skills", "Play ranked with confidence", "Focus on YOUR play, not teammates"],
        drills: ["Full games with intentional practice", "Review 1 replay per day"]
      }
    ]
  },

  bronzeToSilver: {
    name: "Bronze → Silver",
    duration: "4-6 weeks",
    focus: ["Consistent CS", "Wave management basics", "Objective awareness"],
    weeklyPlan: [
      {
        week: 1,
        theme: "CS Consistency",
        goals: ["6 CS/min average", "Miss fewer than 10 CS in first 10 min", "Practice last hitting under tower"],
        drills: ["CS practice 20 min/day", "Tower last hit practice"]
      },
      {
        week: 2,
        theme: "Wave Fundamentals",
        goals: ["Learn slow push", "Learn freeze", "Understand when to push"],
        drills: ["Practice tool wave manipulation", "Watch wave management guides"]
      },
      {
        week: 3,
        theme: "Trading Patterns",
        goals: ["Trade when enemy uses cooldowns", "Punish CS attempts", "Respect enemy's kill threat"],
        drills: ["1v1 customs", "VOD review your trades"]
      },
      {
        week: 4,
        theme: "Objective Awareness",
        goals: ["Track dragon/baron timers", "Group for objectives", "Don't die for no reason"],
        drills: ["Objective timer practice", "Review fights at objectives"]
      },
      {
        week: 5,
        theme: "Vision Control",
        goals: ["Buy control wards every back", "Ward before objectives", "Learn key ward spots"],
        drills: ["Ward spot study", "Vision score tracking"]
      },
      {
        week: 6,
        theme: "Ranked Grind",
        goals: ["Apply all skills in ranked", "Track improvement metrics", "Stay mentally strong"],
        drills: ["Consistent ranked play", "Daily VOD review"]
      }
    ]
  },

  silverToGold: {
    name: "Silver → Gold",
    duration: "6-8 weeks",
    focus: ["Wave mastery", "Trading stance", "Jungle tracking", "Roaming"],
    weeklyPlan: [
      {
        week: 1,
        theme: "Advanced Wave Control",
        goals: ["Perfect slow push execution", "Set up freezes intentionally", "Understand wave bounce"],
        drills: ["30 min daily wave practice", "Study pro player laning"]
      },
      {
        week: 2,
        theme: "Trading Mastery",
        goals: ["Zone enemy off CS", "Trade only when advantageous", "Respect power spikes"],
        drills: ["1v1 ranked practice", "Analyze trading in VODs"]
      },
      {
        week: 3,
        theme: "Jungle Tracking",
        goals: ["Predict jungler location", "Play accordingly to jungle position", "Help your jungler invade"],
        drills: ["Track enemy jungler every game", "Review jungler pathing"]
      },
      {
        week: 4,
        theme: "Back Timing",
        goals: ["Back on cannon waves", "Crash wave before backing", "Don't lose plates to bad backs"],
        drills: ["Track back timing decisions", "Review gold efficiency"]
      },
      {
        week: 5,
        theme: "Roaming",
        goals: ["Roam when wave is pushed", "Impact other lanes", "Follow enemy roams"],
        drills: ["Roam timing practice", "Track roam success rate"]
      },
      {
        week: 6,
        theme: "Objective Control",
        goals: ["Set up for objectives 30s early", "Contest or trade objectives", "Understand when to give up objectives"],
        drills: ["Objective setup practice", "Review objective fights"]
      },
      {
        week: 7,
        theme: "Mid Game Macro",
        goals: ["Side lane management", "Group when needed", "Split push effectively"],
        drills: ["Mid game decision tracking", "Study split push timing"]
      },
      {
        week: 8,
        theme: "Ranked Push",
        goals: ["Consistent performance", "Mental fortitude", "Climb to Gold"],
        drills: ["Daily ranked with focus", "Track improvement"]
      }
    ]
  },

  goldToPlat: {
    name: "Gold → Platinum",
    duration: "8-12 weeks",
    focus: ["Micro optimization", "Macro consistency", "Champion mastery", "Teamfight execution"],
    weeklyPlan: [
      { week: 1, theme: "Champion Pool Refinement", goals: ["Master 3 champions", "Know every matchup", "Perfect your combos"] },
      { week: 2, theme: "Laning Excellence", goals: ["Win lane 60%+", "Perfect CS under pressure", "Abuse enemy mistakes"] },
      { week: 3, theme: "Vision Mastery", goals: ["Control ward always placed", "Deny enemy vision", "Track vision timers"] },
      { week: 4, theme: "Teamfight Positioning", goals: ["Never get caught", "Perfect target selection", "Track key cooldowns"] },
      { week: 5, theme: "Objective Trading", goals: ["Trade objectives effectively", "Never int for objectives", "Set up vision"] },
      { week: 6, theme: "Tempo Play", goals: ["Create tempo advantages", "Punish enemy tempo losses", "Efficient pathing"] },
      { week: 7, theme: "Communication", goals: ["Shotcall effectively", "Ping with purpose", "Coordinate with team"] },
      { week: 8, theme: "Consistency", goals: ["Minimize bad games", "Maximum performance always", "Mental resilience"] }
    ]
  }
};

// ============================================
// PRACTICE DRILLS LIBRARY
// ============================================

export const practiceLibrary = {
  mechanics: {
    csing: [
      {
        name: "No Items CS Challenge",
        difficulty: "Beginner",
        duration: "10 min",
        setup: "Practice tool, no items, no abilities",
        goal: "100 CS by 10 min",
        explanation: "This builds pure last-hitting muscle memory without crutches",
        progression: ["Start with 70 CS", "Then 80 CS", "Then 90 CS", "Finally 100 CS"]
      },
      {
        name: "Under Tower CS",
        difficulty: "Beginner",
        duration: "10 min",
        setup: "Practice tool, let wave crash into tower",
        goal: "Miss 0 CS under tower",
        explanation: "Melee: 2 tower shots + AA. Caster: AA + tower + AA (varies by AD)",
        progression: ["Learn the pattern", "Execute consistently", "Add enemy harassment"]
      },
      {
        name: "CS Under Pressure",
        difficulty: "Intermediate",
        duration: "15 min",
        setup: "1v1 custom vs friend who tries to harass you",
        goal: "80+ CS while being harassed",
        explanation: "Real games have pressure - practice CSing while taking damage",
        progression: ["CS vs passive opponent", "CS vs harassing opponent", "CS vs all-in threats"]
      },
      {
        name: "Wave Control CS",
        difficulty: "Advanced",
        duration: "15 min",
        setup: "Practice tool, manipulate waves while CSing perfectly",
        goal: "Perfect CS while executing wave states",
        explanation: "The ultimate test - control waves AND last hit perfectly",
        progression: ["Freeze and CS", "Slow push and CS", "Fast push and CS"]
      }
    ],
    combos: [
      {
        name: "100 Rep Drill",
        difficulty: "Beginner",
        duration: "20 min",
        setup: "Practice tool with dummies",
        goal: "Execute your champion's main combo 100 times",
        explanation: "Muscle memory requires repetition - 100 reps is minimum",
        progression: ["Slow execution", "Medium speed", "Full speed", "Perfect every time"]
      },
      {
        name: "Flash Combo Practice",
        difficulty: "Intermediate",
        duration: "15 min",
        setup: "Practice tool with Flash",
        goal: "Execute flash combos smoothly",
        explanation: "Flash combos are crucial for playmaking",
        progression: ["Flash + ability", "Ability + Flash", "Full combo with Flash"]
      },
      {
        name: "Target Dummy Gauntlet",
        difficulty: "Advanced",
        duration: "20 min",
        setup: "Practice tool, multiple dummies at different ranges",
        goal: "Execute combos on different targets rapidly",
        explanation: "In teamfights you need to switch targets quickly",
        progression: ["2 targets", "3 targets", "4+ targets", "Moving between targets"]
      }
    ],
    kiting: [
      {
        name: "Orbwalk Circle",
        difficulty: "Beginner",
        duration: "10 min",
        setup: "Practice tool, single dummy",
        goal: "Kite in perfect circles around dummy",
        explanation: "Builds attack-move muscle memory",
        progression: ["Walk between attacks", "Smooth circles", "Vary circle size"]
      },
      {
        name: "Attack-Move Click Training",
        difficulty: "Beginner",
        duration: "10 min",
        setup: "Bind attack-move-click to comfortable key",
        goal: "Kite without right-clicking targets",
        explanation: "Attack-move-click is more reliable for kiting",
        progression: ["Learn the binding", "Use consistently", "Combine with regular clicks"]
      },
      {
        name: "Kite the Wave",
        difficulty: "Intermediate",
        duration: "15 min",
        setup: "Practice tool, kite while last hitting",
        goal: "Perfect CS while constantly moving",
        explanation: "Combines CSing and kiting - real game scenario",
        progression: ["Slow kiting", "Medium speed", "Maximum attack speed kiting"]
      }
    ]
  },
  
  macro: {
    waveManagement: [
      {
        name: "Freeze Mastery",
        difficulty: "Intermediate",
        duration: "15 min",
        setup: "Practice tool, let enemy wave push",
        goal: "Hold freeze for 3+ waves",
        explanation: "Tank minions just outside tower range, only last hit",
        progression: ["Hold for 1 wave", "Hold for 2 waves", "Hold for 3+ waves"]
      },
      {
        name: "Slow Push Setup",
        difficulty: "Intermediate",
        duration: "10 min",
        setup: "Practice tool",
        goal: "Build a 3-wave slow push",
        explanation: "Kill only caster minions, let wave build",
        progression: ["2-wave push", "3-wave push", "Crash perfectly"]
      },
      {
        name: "Wave State Recognition",
        difficulty: "Advanced",
        duration: "Watch 5 games",
        setup: "Watch pro VODs",
        goal: "Predict wave states before they happen",
        explanation: "Understanding leads to prediction",
        progression: ["Identify states", "Predict next state", "Plan 2 waves ahead"]
      }
    ],
    vision: [
      {
        name: "Ward Spot Memorization",
        difficulty: "Beginner",
        duration: "30 min study",
        setup: "Study ward location guides",
        goal: "Know top 10 ward spots per side of map",
        explanation: "Vision wins games - know the spots",
        progression: ["Learn 5 spots", "Learn 10 spots", "Learn all optimal spots"]
      },
      {
        name: "Vision Score Goal",
        difficulty: "Intermediate",
        duration: "Every game",
        setup: "Track your vision score",
        goal: "2.0 vision score per minute",
        explanation: "30 min game = 60+ vision score",
        progression: ["1.0 per min", "1.5 per min", "2.0 per min"]
      },
      {
        name: "Sweeper Timing",
        difficulty: "Advanced",
        duration: "Every game",
        setup: "Switch to sweeper after support item",
        goal: "Clear 5+ wards per game",
        explanation: "Denying vision is as important as placing",
        progression: ["Clear obvious wards", "Clear hidden wards", "Predict ward placement"]
      }
    ]
  },

  mental: {
    tiltPrevention: [
      {
        name: "Breath Reset",
        difficulty: "Beginner",
        duration: "10 seconds",
        setup: "After a death or mistake",
        goal: "Take 3 deep breaths before next play",
        explanation: "Oxygen to brain = better decisions",
        progression: ["Remember to breathe", "Do it every death", "Do it after every mistake"]
      },
      {
        name: "Loss Limit",
        difficulty: "Beginner",
        duration: "Daily",
        setup: "Set a loss limit (2-3 losses)",
        goal: "Stop playing ranked after hitting limit",
        explanation: "Tilt compounds - stop before it gets worse",
        progression: ["Set limit", "Actually stop", "Take break before playing again"]
      },
      {
        name: "Mute Drill",
        difficulty: "Beginner",
        duration: "Every game",
        setup: "/mute all at first sign of toxicity",
        goal: "Never let chat tilt you",
        explanation: "Chat brings no value, only tilt",
        progression: ["Mute when tilted", "Mute proactively", "Consider permanent mute"]
      }
    ],
    focus: [
      {
        name: "Pre-Game Routine",
        difficulty: "Intermediate",
        duration: "5 min before playing",
        setup: "Create consistent warm-up routine",
        goal: "Enter every game in optimal state",
        explanation: "Consistency requires routine",
        progression: ["Create routine", "Follow consistently", "Optimize over time"]
      },
      {
        name: "Single Focus",
        difficulty: "Intermediate",
        duration: "Every game",
        setup: "Pick ONE thing to focus on per game",
        goal: "Actually improve that one thing",
        explanation: "Trying to fix everything = fixing nothing",
        progression: ["Pick focus", "Track focus", "Master before moving on"]
      }
    ]
  }
};

// ============================================
// VOD REVIEW SYSTEM
// ============================================

export const vodReviewSystem = {
  quickReview: {
    name: "5-Minute Review",
    duration: "5 min",
    when: "After every ranked game",
    focus: ["Deaths only"],
    questions: [
      "Why did I die?",
      "Could I have prevented it?",
      "What information did I miss?",
      "What will I do differently next time?"
    ]
  },
  
  standardReview: {
    name: "15-Minute Review",
    duration: "15 min",
    when: "Daily",
    focus: ["Full early game", "Deaths", "Objective fights"],
    questions: [
      "Did I hit my CS benchmarks?",
      "Did I trade effectively?",
      "Did I track the jungler?",
      "Were my backs well-timed?",
      "Did I have impact on objectives?",
      "What was my biggest mistake?",
      "What did I do well?"
    ]
  },
  
  deepReview: {
    name: "Full Game Analysis",
    duration: "45-60 min",
    when: "Weekly",
    focus: ["Every decision", "Wave states", "Map movements", "Item timings"],
    sections: {
      earlyGame: {
        name: "Early Game (0-14 min)",
        checkpoints: [
          { time: "1:30", check: "Level 1 positioning" },
          { time: "2:30", check: "Wave state at level 2" },
          { time: "3:00", check: "First back timing" },
          { time: "5:00", check: "CS count (should be 40+)" },
          { time: "6:00", check: "First dragon setup" },
          { time: "8:00", check: "Herald timing" },
          { time: "10:00", check: "CS count (should be 80+)" },
          { time: "14:00", check: "Plates status, tower status" }
        ]
      },
      midGame: {
        name: "Mid Game (14-25 min)",
        checkpoints: [
          { time: "14:00", check: "First item completion" },
          { time: "15:00", check: "Lane phase ending decisions" },
          { time: "20:00", check: "Second dragon timing" },
          { time: "20:00", check: "Side lane management" },
          { time: "25:00", check: "Third objective timing" }
        ]
      },
      lateGame: {
        name: "Late Game (25+ min)",
        checkpoints: [
          { time: "25:00", check: "Soul dragon timing" },
          { time: "25:00", check: "Baron setup" },
          { time: "30:00", check: "Teamfight positioning" },
          { time: "35:00", check: "Win condition execution" }
        ]
      }
    }
  },
  
  coachingReview: {
    name: "Pro-Level Analysis",
    duration: "2+ hours",
    when: "Monthly or with coach",
    sections: [
      "Frame-by-frame laning analysis",
      "Decision tree mapping",
      "Comparison to pro player same champion",
      "Pattern identification across multiple games",
      "Personalized improvement plan creation"
    ]
  }
};

// ============================================
// WARM-UP ROUTINES
// ============================================

export const warmUpRoutines = {
  quick: {
    name: "5-Minute Warm-Up",
    duration: "5 min",
    when: "Before every session",
    routine: [
      { time: "0-2 min", activity: "CS practice in tool (no abilities)" },
      { time: "2-4 min", activity: "Combo practice on dummies" },
      { time: "4-5 min", activity: "Kiting practice" }
    ]
  },
  
  standard: {
    name: "15-Minute Warm-Up",
    duration: "15 min",
    when: "Before ranked",
    routine: [
      { time: "0-5 min", activity: "CS practice - aim for 50 in 5 min" },
      { time: "5-10 min", activity: "Combo practice - 20 reps each combo" },
      { time: "10-12 min", activity: "Kiting practice - circles and retreating" },
      { time: "12-15 min", activity: "Flash combos - 5 reps each" }
    ]
  },
  
  intensive: {
    name: "30-Minute Warm-Up",
    duration: "30 min",
    when: "Before important games",
    routine: [
      { time: "0-10 min", activity: "Full CS practice (100 in 10 min goal)" },
      { time: "10-15 min", activity: "All combos - 10 reps each" },
      { time: "15-20 min", activity: "Kiting drills - all patterns" },
      { time: "20-25 min", activity: "Flash combos and limit testing" },
      { time: "25-30 min", activity: "ARAM or normal game warm-up" }
    ]
  }
};

// ============================================
// MENTAL PERFORMANCE
// ============================================

export const mentalPerformance = {
  preGame: {
    name: "Pre-Game Mental Prep",
    checklist: [
      "Am I well rested?",
      "Am I hydrated?",
      "Am I tilted from previous games?",
      "Do I have time to play a full game?",
      "Am I focused and ready to try hard?",
      "Have I warmed up?"
    ],
    redFlags: [
      "Playing tired",
      "Playing tilted",
      "Playing hungry",
      "Playing distracted",
      "Playing for LP, not improvement"
    ]
  },
  
  inGame: {
    name: "In-Game Mental",
    mantras: [
      "Focus on MY play, not teammates",
      "Every death is MY fault",
      "What can I learn from this?",
      "Stay calm, make good decisions",
      "The game isn't over until the nexus dies"
    ],
    triggers: {
      death: "Take 3 deep breaths before respawning",
      mistake: "Say 'next play' out loud",
      teammateMistake: "Do NOT type anything, ping once maximum",
      flame: "Mute immediately, no response",
      losing: "Focus on what YOU can do, not team"
    }
  },
  
  postGame: {
    name: "Post-Game Protocol",
    win: [
      "What did I do well?",
      "What could I have done better?",
      "Was I lucky or skilled?",
      "Stay humble, queue again"
    ],
    loss: [
      "What was MY biggest mistake?",
      "What could I have done to win?",
      "Am I tilted? Take break if yes",
      "Learn the lesson, move on"
    ],
    lossStreak: [
      "STOP after 2-3 losses",
      "Take 15-30 minute break minimum",
      "Do something else entirely",
      "Come back fresh or don't play ranked"
    ]
  }
};

// ============================================
// RANK-SPECIFIC COACHING
// ============================================

export const rankCoaching = {
  Iron: {
    biggestIssues: [
      "Not understanding abilities",
      "Random clicking",
      "Zero CS",
      "Feeding uncontrollably"
    ],
    quickWins: [
      "Learn what your abilities do",
      "Practice last hitting 15 min/day",
      "Don't fight when behind",
      "Stay with your team"
    ],
    weeklyGoals: [
      { week: 1, goal: "Learn 3 champions completely" },
      { week: 2, goal: "Average 4 CS/min" },
      { week: 3, goal: "Die less than 8 times average" },
      { week: 4, goal: "Play ranked with confidence" }
    ]
  },
  
  Bronze: {
    biggestIssues: [
      "Terrible CS",
      "No wave management",
      "Fighting randomly",
      "No objective focus"
    ],
    quickWins: [
      "CS practice daily - aim for 6/min",
      "Don't fight without reason",
      "Show up to dragons",
      "Ward river at minimum"
    ],
    weeklyGoals: [
      { week: 1, goal: "6 CS/min every game" },
      { week: 2, goal: "Learn freeze vs push" },
      { week: 3, goal: "Track dragon timer" },
      { week: 4, goal: "Vision score 1.0 per min" }
    ]
  },
  
  Silver: {
    biggestIssues: [
      "Inconsistent CSing",
      "Poor back timing",
      "Ignoring waves mid game",
      "No jungle tracking"
    ],
    quickWins: [
      "Back on cannon waves",
      "Watch minimap every 3 seconds",
      "Catch side waves",
      "Pink ward always placed"
    ],
    weeklyGoals: [
      { week: 1, goal: "7 CS/min every game" },
      { week: 2, goal: "Perfect back timing" },
      { week: 3, goal: "Track enemy jungler" },
      { week: 4, goal: "Side lane management" }
    ]
  },
  
  Gold: {
    biggestIssues: [
      "Mechanical errors under pressure",
      "Macro inconsistency",
      "Tilting",
      "One-dimensional play"
    ],
    quickWins: [
      "Warm up before ranked",
      "Follow consistent game plan",
      "Mute at first sign of toxicity",
      "Adapt builds to game state"
    ],
    weeklyGoals: [
      { week: 1, goal: "Consistent pre-game routine" },
      { week: 2, goal: "Master wave manipulation" },
      { week: 3, goal: "Perfect objective setup" },
      { week: 4, goal: "Zero tilt games" }
    ]
  },
  
  Platinum: {
    biggestIssues: [
      "Small mechanical mistakes",
      "Suboptimal decisions",
      "Inconsistent performance",
      "Ego"
    ],
    quickWins: [
      "VOD review every death",
      "Track improvement metrics",
      "Study matchups deeply",
      "Accept you make mistakes"
    ],
    weeklyGoals: [
      { week: 1, goal: "8 CS/min every game" },
      { week: 2, goal: "Zero preventable deaths" },
      { week: 3, goal: "Perfect teamfight positioning" },
      { week: 4, goal: "Lead your team" }
    ]
  },
  
  Diamond: {
    biggestIssues: [
      "Micro optimization",
      "Consistency over many games",
      "Mental under pressure",
      "Playing on autopilot"
    ],
    quickWins: [
      "Frame-by-frame VOD review",
      "Watch your own gameplay critically",
      "Study pro players",
      "Focus on edge cases"
    ],
    weeklyGoals: [
      { week: 1, goal: "Identify 3 consistent mistakes" },
      { week: 2, goal: "Fix mistake #1" },
      { week: 3, goal: "Fix mistake #2" },
      { week: 4, goal: "Fix mistake #3" }
    ]
  }
};

// ============================================
// GAME REVIEW STATS TO TRACK
// ============================================

export const statsToTrack = {
  perGame: [
    { stat: "CS/min", goal: "8+" },
    { stat: "Deaths", goal: "<4" },
    { stat: "Vision Score", goal: "2× game length" },
    { stat: "Kill Participation", goal: ">60%" },
    { stat: "Damage Share", goal: "Role dependent" },
    { stat: "Gold Difference @15", goal: "Positive" }
  ],
  
  weekly: [
    { stat: "Win Rate", goal: ">52%" },
    { stat: "Average CS/min", goal: "Improving" },
    { stat: "Average Deaths", goal: "Decreasing" },
    { stat: "Games Played", goal: "Consistent" },
    { stat: "VODs Reviewed", goal: "7+" }
  ],
  
  monthly: [
    { stat: "LP Gained", goal: "Positive" },
    { stat: "Rank Change", goal: "Climbing" },
    { stat: "Champion Pool Size", goal: "3-5" },
    { stat: "Skill Assessment Change", goal: "Improving" }
  ]
};

export default {
  skillAssessment,
  learningPaths,
  practiceLibrary,
  vodReviewSystem,
  warmUpRoutines,
  mentalPerformance,
  rankCoaching,
  statsToTrack
};
