// Comprehensive Role-Based Improvement System
// Detailed guides, drills, and tips for ALL roles

export const roleImprovement = {
  Top: {
    name: "Top Lane",
    icon: "🗡️",
    description: "The island of 1v1s. Top lane is about wave management, trading patterns, and knowing your matchups. You'll often be left alone, so self-sufficiency is key.",
    coreConcepts: [
      { name: "Wave Management", description: "Control minions to create advantages - freeze to deny, slow push for dives, fast push for roams" },
      { name: "Trading Stance", description: "Position to threaten enemy when they go for CS. Force them to choose: trade or farm" },
      { name: "Matchup Knowledge", description: "Know your win conditions vs each champion. Some you beat early, some you outscale" },
      { name: "TP Usage", description: "Use TP for lane or for plays? This decision wins/loses games" },
      { name: "Split Push Timing", description: "When to group vs when to pressure side lanes" }
    ],
    practiceDrills: [
      {
        name: "CS Challenge",
        difficulty: "Beginner",
        duration: "10 min",
        description: "In practice tool, get 90+ CS by 10 minutes with no items. Then try with enemy bot harassing you.",
        goal: "Perfect last hitting under pressure"
      },
      {
        name: "Freeze Practice",
        difficulty: "Intermediate",
        duration: "15 min",
        description: "Practice tool: Let wave push to you, then maintain freeze outside tower range for 3 minutes straight.",
        goal: "Master wave freezing"
      },
      {
        name: "Trade Timing",
        difficulty: "Intermediate",
        duration: "Custom games",
        description: "Only trade when enemy goes for cannon minion. Track your success rate over 10 games.",
        goal: "Punish enemy CS attempts"
      },
      {
        name: "Level 2 All-in",
        difficulty: "Advanced",
        duration: "Ranked games",
        description: "Hit level 2 first (first wave + 1 melee) and immediately all-in. Track kill rate.",
        goal: "Abuse level advantages"
      },
      {
        name: "TP Tracking",
        difficulty: "Advanced",
        duration: "Every game",
        description: "Write down every TP you use - was it worth? Review after game.",
        goal: "Optimize TP decisions"
      }
    ],
    commonMistakes: [
      "Pushing wave without vision - you WILL get ganked",
      "Not respecting level/item power spikes",
      "Using TP to get back to lane when you could walk",
      "Fighting in enemy minion wave early",
      "Not tracking enemy jungler",
      "Greeding for CS when you should back",
      "Building the same items every game regardless of matchup"
    ],
    advancedTips: [
      "Ward enemy raptors at 1:15 to track jungler start",
      "Count enemy abilities - trade when key spell is down",
      "Slow push 3 waves before diving with jungler",
      "If you're ahead, freeze. If you're behind, shove and roam",
      "Your TP is worth more than theirs if you have a lead",
      "Take enemy jungle camps when pushing",
      "Pink ward tribush and play toward it"
    ],
    waveManagement: {
      freeze: "Keep 4+ enemy minions alive outside tower range. Last hit only at last moment.",
      slowPush: "Kill casters first, let melees build up. Creates a huge wave for dives/roams.",
      fastPush: "Kill all minions ASAP. Use when backing, roaming, or taking plates.",
      bounce: "Fast push into tower so wave bounces back to you. Use to reset wave state."
    },
    championPool: {
      beginner: ["Garen", "Malphite", "Mordekaiser", "Sett", "Cho'Gath"],
      intermediate: ["Darius", "Renekton", "Jax", "Urgot", "Volibear"],
      advanced: ["Fiora", "Camille", "Irelia", "Gangplank", "Jayce"]
    }
  },

  Jungle: {
    name: "Jungle",
    icon: "🌲",
    description: "The most impactful role in the game. You control objectives, enable lanes, and dictate the pace. High responsibility, high reward.",
    coreConcepts: [
      { name: "Pathing", description: "Plan your route before the game starts. Efficient pathing = more ganks + more farm" },
      { name: "Tracking Enemy Jungler", description: "If you know where they are, you know where they aren't. Ping your laners!" },
      { name: "Gank Timing", description: "Gank when lanes are pushed to you, when you have level advantage, or after enemy uses key abilities" },
      { name: "Objective Control", description: "Dragons, Rift Herald, Baron - these win games. Play around spawn timers" },
      { name: "Counter Jungling", description: "Invade when you're stronger or when you see enemy jungler on opposite side" }
    ],
    practiceDrills: [
      {
        name: "Clear Speed Test",
        difficulty: "Beginner",
        duration: "Practice tool",
        description: "Full clear both sides. Target: 3:15 or faster. Try different champions to learn clear speeds.",
        goal: "Maximize early game efficiency"
      },
      {
        name: "Kiting Camps",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Practice kiting every camp to reduce damage taken. Move between autos toward next camp.",
        goal: "Stay healthy while clearing"
      },
      {
        name: "Gank Path Practice",
        difficulty: "Intermediate",
        duration: "Custom games",
        description: "Practice every gank angle for each lane. River, lane, tribush, blast cone, tower dive angles.",
        goal: "Know all gank routes"
      },
      {
        name: "Jungle Tracking",
        difficulty: "Intermediate",
        duration: "Every game",
        description: "At 3:00, write where you think enemy jungler is. Check if correct. Improve accuracy over time.",
        goal: "Predict enemy position"
      },
      {
        name: "Objective Setup",
        difficulty: "Advanced",
        duration: "Ranked games",
        description: "30 seconds before dragon/baron, have vision, clear enemy wards, position your team.",
        goal: "Win objective fights"
      },
      {
        name: "Counter Gank Practice",
        difficulty: "Advanced",
        duration: "Ranked games",
        description: "When you predict enemy gank, be there first. Track success rate.",
        goal: "Turn fights 2v2 or 3v2"
      }
    ],
    commonMistakes: [
      "Farming when lanes are gankable",
      "Ganking losing lanes instead of winning lanes",
      "Not tracking enemy jungler at all",
      "Starting objectives without lane priority",
      "Forcing ganks when lanes are pushed",
      "Ignoring dragon until it's too late",
      "Full clearing every game regardless of game state",
      "Not adapting path to enemy jungler"
    ],
    advancedTips: [
      "Check lanes at 2:30 to identify gank opportunities",
      "Gank lanes that have CC - it's free kills",
      "Ward enemy buff at 1:15 to track their start",
      "Reset camps spawn timers by leaving 1 small monster",
      "Herald is worth more than first dragon usually",
      "If 3 lanes are losing, just farm and scale",
      "Smite deals 450/900 damage at levels 1-14 - know the breakpoints",
      "Your jungle item gives bonus XP from large monsters - don't share camps"
    ],
    junglePaths: {
      fullClear: {
        name: "Full Clear",
        path: "Buff → Camps → Buff → Camps",
        when: "When you want to farm to 6, or when no lanes are gankable",
        champions: ["Karthus", "Shyvana", "Diana", "Evelynn"]
      },
      threeCampGank: {
        name: "3-Camp Gank",
        path: "Buff → Camp → Buff → Gank",
        when: "When you have a strong level 3 and a gankable lane",
        champions: ["Lee Sin", "Elise", "Jarvan IV", "Xin Zhao"]
      },
      verticalJungle: {
        name: "Vertical Jungle",
        path: "Your buff → Their opposite buff",
        when: "When you're stronger 1v1 and want to disrupt enemy",
        champions: ["Graves", "Nidalee", "Kindred"]
      },
      levelTwoGank: {
        name: "Level 2 Gank",
        path: "Buff → Gank immediately",
        when: "Enemy lane is pushing early with no flash",
        champions: ["Twitch", "Shaco", "Jarvan IV"]
      }
    },
    objectivePriority: [
      "First Herald > First Dragon (usually)",
      "Dragon Soul > Baron (usually)",
      "Mountain/Infernal Soul > Other souls",
      "Baron when you can't end but have advantage",
      "Elder Dragon = Instant win if you're not behind"
    ],
    championPool: {
      beginner: ["Warwick", "Amumu", "Vi", "Nunu", "Master Yi"],
      intermediate: ["Hecarim", "Viego", "Graves", "Diana", "Kayn"],
      advanced: ["Lee Sin", "Elise", "Nidalee", "Kindred", "Rengar"]
    }
  },

  Mid: {
    name: "Mid Lane",
    icon: "⚡",
    description: "The center of the map. Mid laners have the most map influence through roaming. You're the playmaker who can impact every lane.",
    coreConcepts: [
      { name: "Wave Priority", description: "Push your wave before roaming so you don't lose CS and XP" },
      { name: "Roam Timing", description: "Roam when you push cannon wave. Enemy can't follow without losing a lot" },
      { name: "Trading in Lane", description: "Respect mana and cooldowns. Know when to poke vs when to all-in" },
      { name: "Vision Control", description: "Ward pixel brush and raptor entrance to spot roams and ganks" },
      { name: "Assassin vs Mage", description: "Know if you're the poker or the all-in threat" }
    ],
    practiceDrills: [
      {
        name: "CS Under Tower",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Practice tool: Let waves crash into tower. Tower hits: Melee 2x + AA, Caster 1x + AA (with some AP).",
        goal: "Never miss CS under tower"
      },
      {
        name: "Combo Practice",
        difficulty: "Beginner",
        duration: "15 min",
        description: "Practice tool: Execute your champion's combos on dummies. Do 100 reps.",
        goal: "Muscle memory for combos"
      },
      {
        name: "Roam Timer",
        difficulty: "Intermediate",
        duration: "Ranked games",
        description: "Every cannon wave, look at minimap. Is bot gankable? Track roam opportunities per game.",
        goal: "Identify roam windows"
      },
      {
        name: "1v1 Practice",
        difficulty: "Intermediate",
        duration: "Custom 1v1s",
        description: "Play 1v1s against friends on Howling Abyss or mid lane only. First to 2 kills wins.",
        goal: "Master trading patterns"
      },
      {
        name: "Vision Score",
        difficulty: "Advanced",
        duration: "Every game",
        description: "Aim for 1.5 vision score per minute. Track improvement over time.",
        goal: "Control mid lane vision"
      }
    ],
    commonMistakes: [
      "Roaming without pushing wave first",
      "Standing too far up without vision",
      "Not respecting enemy level 6 power spike",
      "Using abilities on wave when you might get ganked",
      "Ignoring side waves in mid/late game",
      "Not pinging when enemy roams",
      "Fighting for CS against assassins at level 6"
    ],
    advancedTips: [
      "Ward raptor entrance at 2:45 to see jungler",
      "If enemy roams and you can't follow, push and take plates",
      "Ping enemy roam 3+ times - your teammates won't see 1 ping",
      "Stand on opposite side of where enemy jungler is",
      "Cannon waves give 6+ minions of XP lead if enemy roams",
      "At level 9, one-shot casters with your waveclear ability",
      "Hug the wall when walking to lane to avoid skillshots"
    ],
    roamingGuide: {
      when: [
        "After pushing cannon wave",
        "When bot lane is pushed toward you",
        "When you have ultimate advantage",
        "When enemy mid is low mana/HP",
        "When dragon is spawning"
      ],
      how: [
        "Push wave first so enemy can't follow for free",
        "Take the path enemy won't see (through jungle)",
        "Ping your roam so lanes know you're coming",
        "If roam fails, don't stay - get back to lane",
        "Place a ward during your roam"
      ]
    },
    championPool: {
      beginner: ["Annie", "Veigar", "Lux", "Malzahar", "Ahri"],
      intermediate: ["Syndra", "Viktor", "Orianna", "Sylas", "Yone"],
      advanced: ["Zed", "LeBlanc", "Akali", "Azir", "Qiyana"]
    }
  },

  ADC: {
    name: "Bot Lane (ADC)",
    icon: "🎯",
    description: "The late game carry. Your job is to farm safely, survive, and deal consistent damage in teamfights. Positioning is everything.",
    coreConcepts: [
      { name: "Kiting", description: "Attack-move-attack-move. Never stand still while fighting" },
      { name: "Positioning", description: "Stay at max range. If you can hit them, they can often hit you" },
      { name: "Support Synergy", description: "Play around your support's cooldowns. Their engage = your damage" },
      { name: "CS Priority", description: "Every CS matters. 15 CS = 1 kill worth of gold" },
      { name: "Target Selection", description: "In fights, hit whoever is closest and safe to hit" }
    ],
    practiceDrills: [
      {
        name: "Attack Move Practice",
        difficulty: "Beginner",
        duration: "15 min",
        description: "Practice tool: Bind attack-move-click to a comfortable key. Practice orbwalking on dummies.",
        goal: "Smooth kiting mechanics"
      },
      {
        name: "Last Hit Challenge",
        difficulty: "Beginner",
        duration: "10 min",
        description: "Practice tool: Get 100 CS by 10 minutes with Doran's Blade only. No abilities.",
        goal: "Perfect last hitting"
      },
      {
        name: "2v2 Trading",
        difficulty: "Intermediate",
        duration: "Ranked games",
        description: "Only trade when your support trades. Track how often you sync with support.",
        goal: "Support coordination"
      },
      {
        name: "Camera Control",
        difficulty: "Intermediate",
        duration: "All games",
        description: "Practice unlocking camera and using F keys to check other lanes while farming.",
        goal: "Map awareness while CSing"
      },
      {
        name: "Teamfight Review",
        difficulty: "Advanced",
        duration: "After every game",
        description: "Watch replay of teamfights. Did you die? Why? Could you have positioned better?",
        goal: "Learn from deaths"
      }
    ],
    commonMistakes: [
      "Walking up to CS when support has no cooldowns",
      "Getting hit by every skillshot while CSing",
      "Chasing kills instead of hitting whoever is closest",
      "Not using attack-move (right clicking only)",
      "Ignoring CS for bad trades",
      "Being in front of your team in fights",
      "Not buying control wards",
      "Face-checking bushes"
    ],
    advancedTips: [
      "Your support dying doesn't mean you fight - often run",
      "If support gets hooked, don't follow them into death",
      "Back on cannon waves so you miss fewer minions",
      "Freeze when ahead, push when behind",
      "Use abilities to last hit under tower if needed",
      "Stand at max auto range in teamfights",
      "Flash defensively, not offensively (usually)",
      "Buy a QSS against Malzahar, Skarner, Mordekaiser"
    ],
    positioningGuide: {
      laning: "Stand behind your support but in range to farm. Move forward when trading.",
      teamfights: "Stay in the BACK. Let tanks go first. Only move forward when enemy cooldowns are down.",
      sieging: "Hit tower, but be ready to back off. Don't greed for tower plates.",
      objectives: "Stand at max range from dragon/baron. Be ready to flash away."
    },
    championPool: {
      beginner: ["Ashe", "Miss Fortune", "Jinx", "Caitlyn", "Jhin"],
      intermediate: ["Kai'Sa", "Ezreal", "Tristana", "Xayah", "Varus"],
      advanced: ["Vayne", "Draven", "Kalista", "Aphelios", "Zeri"]
    }
  },

  Support: {
    name: "Support",
    icon: "🛡️",
    description: "The playmaker and protector. Supports control vision, enable their team, and dictate the lane. Your impact is game-winning even without kills.",
    coreConcepts: [
      { name: "Vision Control", description: "Wards win games. Know where to ward and when to ward" },
      { name: "Lane Pressure", description: "Stand forward to zone enemy ADC from CS. You're the threat" },
      { name: "Roam Timing", description: "Roam when your ADC backs or when wave is pushing toward them" },
      { name: "Peel vs Engage", description: "Know when to protect your carry vs when to dive theirs" },
      { name: "Ability Usage", description: "Your cooldowns are precious. Don't waste them" }
    ],
    practiceDrills: [
      {
        name: "Vision Score Goal",
        difficulty: "Beginner",
        duration: "Every game",
        description: "Aim for 2.0 vision score per minute. That's 60+ vision score in a 30 min game.",
        goal: "Master vision control"
      },
      {
        name: "Bush Control",
        difficulty: "Beginner",
        duration: "Laning phase",
        description: "Control the bottom lane bushes. If you're in bush and they're not, you control the lane.",
        goal: "Lane dominance"
      },
      {
        name: "Roam Practice",
        difficulty: "Intermediate",
        duration: "Ranked games",
        description: "After every recall, look mid. Can you roam? Track successful roams per game.",
        goal: "Expand map impact"
      },
      {
        name: "Hook/Skillshot Practice",
        difficulty: "Intermediate",
        duration: "Practice tool",
        description: "Throw 100 hooks/skillshots at moving dummies. Track hit rate.",
        goal: "Mechanical consistency"
      },
      {
        name: "Engage/Peel Decision",
        difficulty: "Advanced",
        duration: "Teamfights",
        description: "Before each fight, decide: Am I engaging or peeling? Commit to it.",
        goal: "Clear teamfight identity"
      }
    ],
    commonMistakes: [
      "Standing behind ADC instead of in front/beside",
      "Using abilities randomly instead of waiting for right moment",
      "Roaming when ADC will die alone",
      "Not buying control wards",
      "Warding in the same spots every game",
      "All-inning when ADC has no mana/HP",
      "Taking CS from ADC (unless they're dead/backing)",
      "Leaving ADC alone against dive champions"
    ],
    advancedTips: [
      "Stand in bushes to drop minion aggro after trading",
      "Pink ward dragon pit at 4:30",
      "Sweeper after completing support item (at 20 stacks)",
      "Roam mid after enemy ADC backs",
      "Your life is worth more than ADC's sometimes (if you have key ultimate)",
      "Zone enemy off CS by standing in minion wave",
      "Track enemy support's cooldowns before trading",
      "Build items based on game state, not same build every game"
    ],
    wardingGuide: {
      earlyGame: [
        "River bush (prevents ganks)",
        "Tribush (your side for safety, enemy side for aggression)",
        "Lane bushes (control the lane)"
      ],
      midGame: [
        "Dragon/Baron pit entrance",
        "Enemy jungle entrances",
        "Around objectives 30s before spawn"
      ],
      lateGame: [
        "Baron pit and surroundings",
        "Enemy jungle (if winning)",
        "Your jungle (if losing)",
        "Flanking paths to your carries"
      ]
    },
    championPool: {
      beginner: ["Leona", "Nautilus", "Soraka", "Lulu", "Blitzcrank"],
      intermediate: ["Thresh", "Nami", "Morgana", "Karma", "Alistar"],
      advanced: ["Bard", "Pyke", "Rakan", "Renata Glasc", "Senna"]
    }
  },

  OffMeta: {
    name: "Off-Meta",
    icon: "🎭",
    description: "Playing champions in unusual roles or with unusual builds. Sometimes it's genius, sometimes it's trolling. Know the difference.",
    coreConcepts: [
      { name: "Know Why It Works", description: "Off-meta picks need a reason to work. What does your pick do that meta picks don't?" },
      { name: "Surprise Factor", description: "Enemies don't know how to play against you. Use that advantage early" },
      { name: "Adaptation", description: "Be ready to adjust. If your cheese fails, have a backup plan" },
      { name: "Team Comp Awareness", description: "Don't ruin your team's comp. AP bot lane when you have AP mid/jg is grief" },
      { name: "Mental Fortitude", description: "Your team will flame you. Mute and prove them wrong" }
    ],
    practiceDrills: [
      {
        name: "Normal Games First",
        difficulty: "Required",
        duration: "10+ games",
        description: "NEVER first-time off-meta in ranked. Play at least 10 normals first.",
        goal: "Learn the pick without LP loss"
      },
      {
        name: "Identify Win Condition",
        difficulty: "Beginner",
        duration: "Before each game",
        description: "Write down: Why will this pick win? If you can't answer, don't play it.",
        goal: "Strategic thinking"
      },
      {
        name: "Matchup Notes",
        difficulty: "Intermediate",
        duration: "Every game",
        description: "Track which matchups work and which don't. Build your own tier list.",
        goal: "Optimize pick selection"
      },
      {
        name: "Build Optimization",
        difficulty: "Advanced",
        duration: "Ongoing",
        description: "Experiment with builds. What items synergize with your off-meta pick?",
        goal: "Perfect your build path"
      }
    ],
    viablePicks: {
      topLane: [
        { champ: "Vayne", why: "Shreds tanks, lane bully against melees" },
        { champ: "Heimerdinger", why: "Lane bully, tower push, impossible to dive" },
        { champ: "Quinn", why: "Ranged bully, roams with R" },
        { champ: "Karma", why: "Safe laning, utility for team" },
        { champ: "Soraka", why: "Sustain, global presence, surprisingly tanky with items" }
      ],
      jungle: [
        { champ: "Twitch", why: "Stealth ganks, scales into hyper carry" },
        { champ: "Morgana", why: "Fast clear with W, ganks with Q root" },
        { champ: "Brand", why: "Objective damage, teamfight presence" },
        { champ: "Talon", why: "Fast clear, wall hops for unique ganks" },
        { champ: "Karthus", why: "Farm to 6, press R, free assists" }
      ],
      midLane: [
        { champ: "Miss Fortune", why: "E poke, R wombo combos, lane bully" },
        { champ: "Sion", why: "AD or AP, roams with R, scales infinitely" },
        { champ: "Riven", why: "High skill ceiling, snowballs hard" },
        { champ: "Tryndamere", why: "Split push threat, hard to gank" },
        { champ: "Lucian", why: "Lane bully, early game pressure" }
      ],
      botLane: [
        { champ: "Yasuo", why: "With knockup support, late game monster" },
        { champ: "Ziggs", why: "Tower taker, safe farming, late game poke" },
        { champ: "Swain", why: "Sustain, teamfight presence, pairs with CC supports" },
        { champ: "Karthus", why: "Farm lane, press R, win game" },
        { champ: "Seraphine", why: "Scaling, utility, works as APC or support" }
      ],
      support: [
        { champ: "Ashe", why: "Global R engage, vision with E, slows" },
        { champ: "Miss Fortune", why: "E poke, R zoning in teamfights" },
        { champ: "Pantheon", why: "Point-click stun, roams with R" },
        { champ: "Zac", why: "Engage from fog, tankiness" },
        { champ: "Neeko", why: "R engage, W clone baits, root for peel" }
      ]
    },
    commonMistakes: [
      "Playing off-meta because you saw a streamer do it (they're better than you)",
      "First-timing in ranked",
      "Not having a reason for the pick",
      "Tilting when it doesn't work",
      "Blaming team when you're the one on off-meta",
      "Picking it into counters",
      "Not adjusting build for the role"
    ],
    advancedTips: [
      "Off-meta works best when you one-trick it",
      "The surprise factor disappears after first blood",
      "If your off-meta pick falls behind, play for your team, not for yourself",
      "Some picks are 'off-meta' but actually good (they're called sleeper OPs)",
      "Watch one-tricks of your off-meta pick on YouTube/Twitch",
      "Your team comp still needs a tank, damage, and CC",
      "Know when to dodge - some team comps just don't work with off-meta"
    ]
  }
};

// General improvement tips that apply to all roles
export const generalImprovement = {
  fundamentals: [
    { name: "CS'ing", description: "Last hit practice. Aim for 8+ CS/min in any role (except support)" },
    { name: "Map Awareness", description: "Look at minimap every 3-5 seconds. Set a timer if needed" },
    { name: "Deaths", description: "Every death is a mistake. Review why you died and how to prevent it" },
    { name: "Objectives", description: "Kills mean nothing if you don't take objectives after" },
    { name: "Wave Management", description: "Knowing when to push, freeze, or slow push is universal" }
  ],
  mentalGame: [
    { name: "Mute Early", description: "If someone pings you once rudely, mute them. Don't wait for tilt" },
    { name: "/mute all", description: "If you tilt from chat, just mute everyone at game start" },
    { name: "Take Breaks", description: "After 2 losses in a row, take a 15 minute break minimum" },
    { name: "Review, Don't Blame", description: "Watch your replays. You'll find YOUR mistakes, not your team's" },
    { name: "Focus on Improvement", description: "LP doesn't matter. Getting better does. LP follows improvement" }
  ],
  gameKnowledge: [
    { name: "Cooldown Tracking", description: "If enemy used their main ability, you have a window to trade" },
    { name: "Summoner Spell Tracking", description: "Flash is 5 minutes. Type 'mid f 1530' when they flash at 10:30" },
    { name: "Item Spikes", description: "Know when champions spike. BOTRK Vayne, Sheen GP, etc." },
    { name: "Team Comp", description: "Who is your win condition? Play around them" },
    { name: "Win Condition", description: "Know how you win each game. Scaling? Early? Teamfight? Split?" }
  ],
  VODReview: {
    checkList: [
      "Why did I die? Could I have prevented it?",
      "Did I miss CS I could have gotten?",
      "Did I use my abilities at the right time?",
      "Was my positioning correct in fights?",
      "Did I track summoner spells?",
      "Did I look at minimap enough?",
      "Did I take objectives after winning fights?",
      "What was my biggest mistake this game?"
    ],
    howTo: [
      "Watch at 2x speed, slow down for key moments",
      "Focus on YOUR champion, not others",
      "Pick ONE thing to improve per game",
      "Write down your mistakes",
      "Watch challenger players play your champion for comparison"
    ]
  }
};

// Rank-specific improvement goals
export const rankGoals = {
  Iron: {
    focus: ["CS'ing basics", "Not dying", "Using abilities", "Buying items"],
    csGoal: "5 CS/min",
    deathGoal: "Less than 10 deaths/game",
    tip: "Focus on the very basics. Don't worry about macro yet."
  },
  Bronze: {
    focus: ["Better CS", "Map awareness", "Trading patterns", "Objective focus"],
    csGoal: "6 CS/min",
    deathGoal: "Less than 8 deaths/game",
    tip: "You're making LOTS of mechanical mistakes. Focus on fundamentals."
  },
  Silver: {
    focus: ["Wave management", "Jungle tracking", "Power spikes", "Vision"],
    csGoal: "7 CS/min",
    deathGoal: "Less than 6 deaths/game",
    tip: "You have fundamentals but make many decision mistakes. Think before acting."
  },
  Gold: {
    focus: ["Macro decisions", "Team coordination", "Objective trading", "Matchup knowledge"],
    csGoal: "7.5 CS/min",
    deathGoal: "Less than 5 deaths/game",
    tip: "You're decent but inconsistent. Focus on playing YOUR game every game."
  },
  Platinum: {
    focus: ["Lane kingdom", "Roam timing", "Mid/late game macro", "Team comp understanding"],
    csGoal: "8 CS/min",
    deathGoal: "Less than 4 deaths/game",
    tip: "Small optimizations matter now. Every CS, every trade, every roam counts."
  },
  Diamond: {
    focus: ["Micro optimization", "Wave manipulation", "Jungle pathing", "Tempo plays"],
    csGoal: "8.5 CS/min",
    deathGoal: "Less than 3 deaths/game",
    tip: "You're good. Focus on exploiting every tiny advantage."
  },
  Master: {
    focus: ["Perfect fundamentals", "Reading the game", "Team leadership", "Mental fortitude"],
    csGoal: "9+ CS/min",
    deathGoal: "Every death is unacceptable",
    tip: "At this level, it's about consistency and mental."
  }
};

export default {
  roleImprovement,
  generalImprovement,
  rankGoals
};
