// Comprehensive Role-Specific Improvement Guides
// Covers Top, Jungle, Mid, ADC, Support, and Off-Meta

export const roleImprovementGuides = {
  Top: {
    name: "Top Lane",
    icon: "🛡️",
    description: "The island of 1v1s. Top lane is about wave management, trading patterns, and knowing your matchups. Master these fundamentals to dominate.",
    
    coreConcepts: [
      {
        name: "Wave Management",
        importance: "Critical",
        description: "Controlling minion waves is the #1 skill for top lane. It determines who can trade, who gets ganked, and who hits power spikes first.",
        tips: [
          "Freeze near your tower when ahead to deny CS and set up ganks",
          "Slow push before roaming or backing to crash a big wave",
          "Fast push to reset the wave and recall safely",
          "Never let waves stack against you - you'll lose tons of XP"
        ]
      },
      {
        name: "Trading Stance",
        importance: "Critical",
        description: "Position aggressively when enemy goes for CS. They have to choose between taking damage or missing gold.",
        tips: [
          "Stand in the minion wave when enemy wants to last hit",
          "Auto-attack when they animation lock on CS",
          "Track their cooldowns - trade when abilities are down",
          "Respect their trading stance too - don't take free damage"
        ]
      },
      {
        name: "Matchup Knowledge",
        importance: "High",
        description: "Know your win conditions against every champion. Some you beat early, some you outscale.",
        tips: [
          "Learn which matchups you can fight levels 1-3",
          "Identify enemy power spikes (level 6, first item, etc.)",
          "Know when to give up CS to not die",
          "Understand if you win short trades or extended fights"
        ]
      },
      {
        name: "Teleport Usage",
        importance: "High",
        description: "TP is what makes top lane impactful. Bad TP usage loses games.",
        tips: [
          "TP to save tower plates is usually not worth it",
          "TP for dragon fights if your team is committing",
          "TP behind enemy team for flanks in mid game",
          "Keep TP for cross-map plays, not just getting back to lane"
        ]
      },
      {
        name: "Split Pushing",
        importance: "High",
        description: "Many top laners excel at split pushing. Know when to group and when to split.",
        tips: [
          "Split when you can 1v1 anyone they send",
          "Make sure your team can stall 4v4 or 4v5",
          "Ward deep when splitting to see rotations",
          "Push when objectives are down, group when they're up"
        ]
      }
    ],
    
    practiceDrills: [
      {
        name: "CS Challenge",
        duration: "10 min",
        goal: "90+ CS at 10 minutes",
        description: "Practice in custom game. No abilities until you can hit 90 CS with just autos.",
        steps: ["Create custom game", "Pick your main", "Only last hit with autos", "Reset until you hit 90 CS"]
      },
      {
        name: "Freeze Practice",
        duration: "15 min",
        goal: "Hold freeze for 3+ waves",
        description: "Practice freezing the wave just outside your tower range.",
        steps: ["Let enemy push wave", "Tank minions briefly to hold position", "Only last hit", "Don't auto attack randomly"]
      },
      {
        name: "Trading Combo Practice",
        duration: "10 min",
        goal: "Execute combos without thinking",
        description: "Practice your champion's trading combos on practice dummies.",
        steps: ["Go to practice tool", "Practice short trade combo 20x", "Practice all-in combo 20x", "Practice escape combo 10x"]
      },
      {
        name: "Wave Manipulation",
        duration: "15 min",
        goal: "Slow push into crash",
        description: "Build a massive wave and crash it into tower.",
        steps: ["Kill 2-3 caster minions only", "Let wave build for 2-3 waves", "Hard shove when massive", "Back or roam during crash"]
      }
    ],
    
    commonMistakes: [
      "Pushing wave mindlessly and getting ganked",
      "Fighting in enemy minion waves (they do a lot of damage early)",
      "Not respecting enemy's level 6 power spike",
      "TPing back to lane instead of making plays",
      "Staying top when team needs you at objectives",
      "Not tracking enemy jungler's position",
      "Taking bad trades and getting zoned off CS"
    ],
    
    advancedTips: [
      "Learn to proxy farm (farming behind enemy tower) when ahead",
      "Track both summoner spell timers and ultimate cooldowns",
      "Use champion-specific tricks (animation cancels, combos)",
      "Coordinate with jungler for dive timings",
      "Learn to recognize jungle pathing to avoid ganks"
    ],
    
    mentalTips: [
      "Top lane is an island - you won't get much help",
      "It's okay to lose lane gracefully without dying",
      "One death can snowball into five - play safe when behind",
      "Your jungler has three lanes to help - don't flame them"
    ]
  },

  Jungle: {
    name: "Jungle",
    icon: "🌲",
    description: "The most impactful role in the game. You control the map, set the pace, and can single-handedly win games through smart pathing and ganking.",
    
    coreConcepts: [
      {
        name: "Jungle Pathing",
        importance: "Critical",
        description: "Your clear path determines everything - gank timings, objective control, and tempo.",
        tips: [
          "3-camp into gank (Buff-Buff-Gromp) for early pressure",
          "5-camp clear for scaling junglers",
          "Full clear (6 camps) when you can't gank effectively",
          "Always have a plan before the game starts"
        ]
      },
      {
        name: "Gank Timing",
        importance: "Critical",
        description: "Good ganks are about timing, not mechanics. Set up your laners for success.",
        tips: [
          "Gank when enemy uses escape ability",
          "Gank when wave is pushing INTO your laner",
          "Gank when enemy is overextended (past river)",
          "Don't gank losing lanes repeatedly - it's diminishing returns"
        ]
      },
      {
        name: "Objective Control",
        importance: "Critical",
        description: "Dragons, Rift Herald, and Baron win games. Everything else is secondary.",
        tips: [
          "Track enemy jungle to know if objectives are safe",
          "Get dragon when bot lane has priority (pushing)",
          "Herald is best used on mid or bot tower",
          "Baron when you ace or enemy jungler dies"
        ]
      },
      {
        name: "Tracking Enemy Jungler",
        importance: "High",
        description: "If you know where enemy jungler is, you can counter-gank, invade, or take free objectives.",
        tips: [
          "Ward enemy raptors or buff at 1:15",
          "Note which side enemy jungler started",
          "They'll usually be opposite side of map 3-4 minutes in",
          "Ping when you spot them - save your laners"
        ]
      },
      {
        name: "Counter-Jungling",
        importance: "Medium",
        description: "Stealing camps puts enemy behind and gives you lead. But it's risky.",
        tips: [
          "Invade when you see enemy on opposite side",
          "Take camps, don't waste time looking for kills",
          "Ward as you invade to track their movements",
          "Have an escape plan - don't die in enemy jungle"
        ]
      }
    ],
    
    practiceDrills: [
      {
        name: "Clear Speed Test",
        duration: "5 min",
        goal: "Full clear by 3:15",
        description: "Practice full clearing as fast as possible while staying healthy.",
        steps: ["Start at buff", "Full clear all 6 camps", "Time yourself", "Optimize pathing and kiting"]
      },
      {
        name: "Gank Path Practice",
        duration: "10 min",
        goal: "Learn all gank angles",
        description: "Practice different gank paths for each lane.",
        steps: ["Practice lane ganks (through lane)", "Practice river ganks", "Practice tower dives", "Practice counter-ganks"]
      },
      {
        name: "Smite Timing",
        duration: "10 min",
        goal: "Perfect smite every time",
        description: "Practice smiting objectives at exact HP.",
        steps: ["Check smite damage at your level", "Practice on dragon/baron", "Learn to combo ability + smite", "Account for enemy burst damage"]
      },
      {
        name: "Pathing Scenarios",
        duration: "15 min",
        goal: "Plan paths for every game state",
        description: "Practice planning your route based on lanes.",
        steps: ["Identify which lanes are gankable", "Plan 3-camp into gank", "Plan full clear with objective", "Practice vertical jungling"]
      }
    ],
    
    commonMistakes: [
      "Farming when objectives are up",
      "Ganking pushed lanes (enemy is safe under tower)",
      "Not tracking enemy jungler",
      "Forcing ganks that aren't there",
      "Neglecting farm to gank constantly",
      "Taking bad smite fights (low HP, no team)",
      "Not adapting path based on game state",
      "Tilting after failed ganks"
    ],
    
    advancedTips: [
      "Learn to read enemy jungle pathing from minion states",
      "Vertical jungle (take their camps, give yours) when ahead",
      "Chain ganks - gank same lane twice in a row",
      "Dive with your laners - it's often free kills",
      "Time summoner spells to know when to re-gank"
    ],
    
    mentalTips: [
      "You can't be everywhere - prioritize high-impact plays",
      "Sometimes lanes lose despite good ganks - it's okay",
      "Mute laners who spam ping you - focus on your game",
      "Your job is to enable carries, not to BE the carry"
    ],
    
    junglePaths: {
      blueStart: {
        name: "Blue Side Start",
        path: "Blue → Gromp → Wolves → Raptors → Red → Krugs",
        timing: "Full clear ~3:15",
        ganks: "Strong gank potential bot/mid after red"
      },
      redStart: {
        name: "Red Side Start",
        path: "Red → Krugs → Raptors → Wolves → Blue → Gromp",
        timing: "Full clear ~3:15",
        ganks: "Strong gank potential top/mid after blue"
      },
      threeCamp: {
        name: "3-Camp Gank",
        path: "Buff → Buff → Gromp → Gank",
        timing: "Ready to gank ~2:45",
        ganks: "Early pressure, sacrifice farm for tempo"
      },
      fourCamp: {
        name: "4-Camp Clear",
        path: "Buff → Camp → Camp → Buff → Gank/Crab",
        timing: "Ready ~3:00",
        ganks: "Balanced between farm and gank timing"
      }
    }
  },

  Mid: {
    name: "Mid Lane",
    icon: "⚔️",
    description: "The center of the map. Mid laners have the most roam potential and often decide which side of the map gets ahead. Master wave control and roam timing.",
    
    coreConcepts: [
      {
        name: "Wave Priority",
        importance: "Critical",
        description: "Having priority (wave pushed) lets you roam, help jungler, and control the map.",
        tips: [
          "Push wave before roaming or you'll lose too much",
          "Help jungler at scuttle if you have priority",
          "Ping when you don't have priority so team knows",
          "Don't roam if you'll lose tower plates"
        ]
      },
      {
        name: "Roaming",
        importance: "Critical",
        description: "Mid roams win games. A successful roam can snowball side lanes.",
        tips: [
          "Roam when you've crashed a big wave",
          "Follow enemy roams when possible",
          "Ping missing IMMEDIATELY when enemy leaves",
          "Bot lane roams are usually higher value (more people)"
        ]
      },
      {
        name: "Trading in Lane",
        importance: "High",
        description: "Short trades vs all-ins. Know your champion's trading pattern.",
        tips: [
          "Most mages want short trades with abilities",
          "Most assassins want all-ins at level 6",
          "Track enemy cooldowns before trading",
          "Respect enemy's kill threat at level 6"
        ]
      },
      {
        name: "Vision Control",
        importance: "High",
        description: "Mid is the center of the map. Your wards impact everyone.",
        tips: [
          "Ward the side enemy jungler started",
          "Control wards in river bushes",
          "Ward raptor camp to track jungler",
          "Deep wards when ahead for picks"
        ]
      },
      {
        name: "Matchup Specifics",
        importance: "High",
        description: "Mid has the most diverse champion pool. Learn the key matchups.",
        tips: [
          "Assassins beat mages 1v1 but mages have better waveclear",
          "Control mages outscale but are vulnerable early",
          "AD mids can bully AP mids but fall off",
          "Know which matchups you can fight and which to farm"
        ]
      }
    ],
    
    practiceDrills: [
      {
        name: "CS Under Tower",
        duration: "10 min",
        goal: "Miss 0 CS under tower",
        description: "Mages need to CS under tower when pushed in.",
        steps: ["Let wave push to tower", "Melee: 2 tower shots + AA", "Caster: 1 AA + tower + AA", "Prep minions with abilities"]
      },
      {
        name: "Roam Timing",
        duration: "15 min",
        goal: "Roam without losing waves",
        description: "Practice shoving and roaming efficiently.",
        steps: ["Hard shove wave with abilities", "Roam when cannon wave crashes", "Return before next wave hits tower", "Track time spent roaming"]
      },
      {
        name: "Skill Shot Accuracy",
        duration: "10 min",
        goal: "80%+ accuracy",
        description: "Practice landing your key skillshots.",
        steps: ["Practice on moving targets", "Predict enemy movement", "Aim where they're going, not where they are", "Practice flash combos"]
      },
      {
        name: "Assassin All-in",
        duration: "10 min",
        goal: "One-shot combo mastery",
        description: "Practice your full burst combo.",
        steps: ["Practice combo on dummies", "Time your damage output", "Practice with flash", "Practice tower diving combos"]
      }
    ],
    
    commonMistakes: [
      "Roaming without pushing wave first",
      "Not following enemy roams",
      "Forgetting to ping MIA",
      "Dying 1v1 at level 6",
      "Not respecting jungle pressure",
      "Using all mana on poke, having nothing for all-in",
      "Staying in lane when you could impact the map"
    ],
    
    advancedTips: [
      "Fake roam to bait enemy into wasting cooldowns",
      "Coordinate with jungler for 2v1 tower dives",
      "Learn animation cancels for your champion",
      "Track enemy summoner spells for kill pressure",
      "Take enemy raptors when mid is pushed"
    ],
    
    mentalTips: [
      "You will get ganked. A lot. Accept it.",
      "One bad roam doesn't mean stop roaming",
      "Sometimes enemy just outplays - learn from it",
      "Your lane isn't over if you die once"
    ]
  },

  ADC: {
    name: "Bot Lane (ADC)",
    icon: "🎯",
    description: "The late-game carry. ADCs are weak early but become monsters with items. Your job is to farm, stay alive, and deal damage in teamfights.",
    
    coreConcepts: [
      {
        name: "Positioning",
        importance: "Critical",
        description: "ADC positioning is THE most important skill. Good positioning = you live and deal damage.",
        tips: [
          "Stay behind your frontline always",
          "Attack the closest safe target, not the carry",
          "Keep track of enemy cooldowns that can kill you",
          "Don't walk forward to hit a target - let them come to you"
        ]
      },
      {
        name: "Kiting/Orbwalking",
        importance: "Critical",
        description: "Moving between auto attacks. Essential for staying alive while dealing damage.",
        tips: [
          "Right click to attack, right click to move, repeat",
          "Use attack-move click for easier kiting",
          "Move toward safety while auto attacking",
          "Practice until it's muscle memory"
        ]
      },
      {
        name: "CS Fundamentals",
        importance: "Critical",
        description: "ADCs need gold more than any other role. 10 CS = 1 kill worth of gold.",
        tips: [
          "Aim for 8-10 CS per minute",
          "Don't miss CS trying to poke",
          "Farm side waves mid-game safely",
          "CS is more important than kills early"
        ]
      },
      {
        name: "Trading in Lane",
        importance: "High",
        description: "Bot lane trades are 2v2. Coordinate with your support.",
        tips: [
          "Trade when support lands CC",
          "Don't trade in enemy minion wave",
          "Respect level 2 and level 6 spikes",
          "Back off when support has no cooldowns"
        ]
      },
      {
        name: "Team Fighting",
        importance: "High",
        description: "Late game, you're the main damage dealer. Your performance decides fights.",
        tips: [
          "Wait for fight to start before walking up",
          "Hit whoever you can safely - no target is bad",
          "Flash defensively to survive, not offensively for kills",
          "Stay with your peel support"
        ]
      }
    ],
    
    practiceDrills: [
      {
        name: "Perfect CS",
        duration: "10 min",
        goal: "100 CS at 10 minutes",
        description: "Practice CSing without any pressure.",
        steps: ["Custom game alone", "Focus only on last hitting", "No abilities initially", "Add abilities once consistent"]
      },
      {
        name: "Kiting Practice",
        duration: "15 min",
        goal: "Smooth orbwalking",
        description: "Practice moving between autos on practice dummies.",
        steps: ["Attack dummy, move, attack, move", "Use attack-move click", "Kite in circles around dummy", "Kite while moving backward"]
      },
      {
        name: "Target Switching",
        duration: "10 min",
        goal: "Fast target acquisition",
        description: "Practice quickly switching targets.",
        steps: ["Set up multiple dummies", "Attack one, switch to another", "Practice clicking accurately", "Add movement between switches"]
      },
      {
        name: "Spacing Practice",
        duration: "10 min",
        goal: "Maximum range positioning",
        description: "Practice staying at max attack range.",
        steps: ["Know your auto range", "Practice hitting at max range", "Never step closer than needed", "Practice against bots"]
      }
    ],
    
    commonMistakes: [
      "Walking forward to auto attack",
      "Focusing the wrong target (diving backline)",
      "Not attacking at all because you want 'the right target'",
      "Flashing offensively and dying",
      "CSing side lanes alone without vision",
      "Being in wrong position at fight start",
      "Tilting and playing aggressive when behind"
    ],
    
    advancedTips: [
      "Track enemy assassin cooldowns religiously",
      "Position based on enemy engage tools, not your damage",
      "Learn to CS under tower perfectly",
      "Coordinate with support for level 2 all-in",
      "Use abilities to kite, not just for damage"
    ],
    
    mentalTips: [
      "ADC is team-reliant - you need peel",
      "It's okay to not carry. Just don't int.",
      "Farm is your way back into the game",
      "Late game, one mistake = death. Stay focused."
    ]
  },

  Support: {
    name: "Support",
    icon: "💚",
    description: "The playmaker of bot lane. Supports control vision, engage fights, and keep carries alive. You have the most map impact early game.",
    
    coreConcepts: [
      {
        name: "Vision Control",
        importance: "Critical",
        description: "Vision wins games. You are responsible for map information.",
        tips: [
          "Always have a control ward on the map",
          "Ward dragon/baron before they spawn",
          "Sweep enemy wards before ganks",
          "Deep ward when ahead, defensive ward when behind"
        ]
      },
      {
        name: "Lane Presence",
        importance: "Critical",
        description: "Your positioning determines if ADC can farm safely.",
        tips: [
          "Stand in bushes to threaten engage",
          "Position to zone enemy from CS",
          "Don't stand behind your ADC doing nothing",
          "Respect enemy engage range"
        ]
      },
      {
        name: "Roaming",
        importance: "High",
        description: "Support roams have huge impact. You can turn mid lane or invade.",
        tips: [
          "Roam when ADC is safe (pushed under their tower)",
          "Roam with jungler for invades",
          "Help mid lane when you have kill pressure",
          "Don't roam if ADC will die"
        ]
      },
      {
        name: "Peeling",
        importance: "High",
        description: "Late game, your job is keeping carries alive, not engaging.",
        tips: [
          "Save CC for divers",
          "Use shields/heals on whoever is being focused",
          "Position between carries and threats",
          "Exhaust/Ignite at the right time"
        ]
      },
      {
        name: "Engage Timing",
        importance: "High",
        description: "For engage supports - knowing WHEN to go in is everything.",
        tips: [
          "Engage when ADC is ready to follow up",
          "Engage when enemy uses key ability",
          "Don't engage 2v3 or when behind",
          "Ping before engaging so ADC is ready"
        ]
      }
    ],
    
    practiceDrills: [
      {
        name: "Ward Spots",
        duration: "15 min",
        goal: "Know every ward location",
        description: "Learn optimal ward spots for every game state.",
        steps: ["Practice tri-bush, river, dragon wards", "Learn deep ward spots", "Practice vision denial", "Track ward timers"]
      },
      {
        name: "Engage Combo",
        duration: "10 min",
        goal: "Fast, accurate engages",
        description: "Practice your engage combo on dummies.",
        steps: ["Practice hook/engage skillshot", "Practice flash engage", "Practice full CC chain", "Time your combo damage"]
      },
      {
        name: "Roam Timing",
        duration: "15 min",
        goal: "Effective roams",
        description: "Practice identifying roam windows.",
        steps: ["Check if ADC is safe", "Check if mid is gankable", "Practice timing with wave state", "Track your mana for roam"]
      },
      {
        name: "Peel Practice",
        duration: "10 min",
        goal: "Protect carry from divers",
        description: "Practice using abilities to save teammates.",
        steps: ["Identify biggest threat to carry", "Save key CC for that threat", "Practice timing shields/heals", "Practice exhaust timing"]
      }
    ],
    
    commonMistakes: [
      "Forgetting to ward",
      "Warding without sweeping first",
      "Standing behind ADC doing nothing",
      "Engaging when ADC isn't ready",
      "Roaming when ADC will die",
      "Using all cooldowns randomly in fight",
      "Taking CS from ADC"
    ],
    
    advancedTips: [
      "Track enemy support cooldowns for trades",
      "Use abilities to check bushes safely",
      "Roam with jungler for 3-man ganks",
      "Sacrifice yourself to save fed carries",
      "Learn to read enemy support patterns"
    ],
    
    mentalTips: [
      "You won't get credit for good vision. That's okay.",
      "ADC mistakes aren't always your fault",
      "Your engage can win or lose fights - think before acting",
      "Support diff is real - play well and you'll climb"
    ]
  },

  OffMeta: {
    name: "Off-Meta",
    icon: "🎲",
    description: "Playing non-traditional picks and strategies. Off-meta can be powerful because enemies don't know how to play against it.",
    
    coreConcepts: [
      {
        name: "Why Off-Meta Works",
        importance: "Critical",
        description: "Unfamiliarity is a weapon. Enemies don't know your damage, cooldowns, or patterns.",
        tips: [
          "Enemies will underestimate your damage",
          "They won't know your power spikes",
          "You'll have unusual trading patterns",
          "Element of surprise is huge"
        ]
      },
      {
        name: "Picking Off-Meta",
        importance: "High",
        description: "Not all off-meta picks are equal. Some are legitimately good.",
        tips: [
          "Pick champions that counter the meta",
          "Have a clear reason why your pick works",
          "Know your win conditions",
          "Be prepared to be flamed"
        ]
      },
      {
        name: "Mastering Your Pick",
        importance: "Critical",
        description: "Off-meta only works if you're really good at the champion.",
        tips: [
          "Play 50+ games before ranked",
          "Learn every matchup manually",
          "Figure out optimal builds yourself",
          "Watch other players who play your pick"
        ]
      },
      {
        name: "Adapting Builds",
        importance: "High",
        description: "Standard builds might not work. You need to theorize and test.",
        tips: [
          "Think about what stats your champion needs",
          "Watch high elo one-tricks for build ideas",
          "Be willing to experiment",
          "Track what works and what doesn't"
        ]
      },
      {
        name: "Mental Fortitude",
        importance: "Critical",
        description: "You WILL get flamed. You need thick skin.",
        tips: [
          "Mute all if needed",
          "Don't respond to flame",
          "Let your gameplay speak",
          "Remember: winning shuts everyone up"
        ]
      }
    ],
    
    popularOffMetaPicks: [
      {
        pick: "AP Shyvana Jungle",
        why: "Dragon form E does massive damage. One-shots squishies.",
        build: "Night Harvester → Shadowflame → Rabadon's"
      },
      {
        pick: "Full Lethality Jarvan",
        why: "EQ combo one-shots. Great for snowballing.",
        build: "Eclipse → Collector → Serylda's"
      },
      {
        pick: "Tank Karma Top",
        why: "Unkillable, constant poke, great teamfight.",
        build: "Iceborn Gauntlet → Spirit Visage → Tank items"
      },
      {
        pick: "AP Kai'Sa Mid",
        why: "W poke is insane. Evolved W has huge range.",
        build: "Manamune → Nashor's → Rabadon's"
      },
      {
        pick: "Bard Top",
        why: "Constant poke, great roams, scales well.",
        build: "Imperial Mandate → Dead Man's → Tank items"
      },
      {
        pick: "Soraka Top",
        why: "Infinite sustain, global impact, annoying to lane against.",
        build: "Warmog's → Spirit Visage → Redemption"
      },
      {
        pick: "Lethality Caitlyn",
        why: "Headshots and abilities hit like a truck.",
        build: "Eclipse → Collector → Lord Dominik's"
      },
      {
        pick: "AP Twitch Support",
        why: "Insane poke with W+E. Level 2 cheese.",
        build: "Nashor's Tooth → Riftmaker → Rabadon's"
      }
    ],
    
    practiceDrills: [
      {
        name: "Damage Testing",
        duration: "20 min",
        goal: "Know your exact damage output",
        description: "Test your damage at different item spikes.",
        steps: ["Go practice tool", "Buy items progressively", "Test combos at each stage", "Note damage numbers"]
      },
      {
        name: "Matchup Learning",
        duration: "Ongoing",
        goal: "Document all matchups",
        description: "Since you're off-meta, no guides exist. Make your own.",
        steps: ["Play each matchup", "Note what works/doesn't", "Adjust strategy", "Build personal guide"]
      },
      {
        name: "Build Optimization",
        duration: "30 min",
        goal: "Find optimal build",
        description: "Test different items and runes.",
        steps: ["Try different runes", "Test item orders", "Calculate gold efficiency", "Find what feels best"]
      }
    ],
    
    commonMistakes: [
      "Picking off-meta without understanding why it works",
      "Giving up after one bad game",
      "Using standard builds without thinking",
      "Not practicing enough before ranked",
      "Letting flame tilt you"
    ],
    
    advancedTips: [
      "Study one-tricks who play your pick in high elo",
      "Join Discord communities for your champion",
      "Watch VODs of your own games to improve",
      "Keep a notebook of matchup notes",
      "Be flexible - some games your pick just won't work"
    ],
    
    mentalTips: [
      "You're playing for fun and to learn, not just LP",
      "Sometimes off-meta is the meta",
      "Your teammates' opinions don't matter if you win",
      "Confidence matters - play like you're supposed to be there"
    ]
  }
};

// Practice drills shared across all roles
export const universalDrills = [
  {
    name: "Map Awareness Exercise",
    duration: "Every game",
    goal: "Look at minimap every 3 seconds",
    description: "Set a timer or remind yourself to constantly check the map.",
    steps: ["Glance at minimap after every CS", "Note missing enemies immediately", "Predict where enemies are", "Ping for teammates"]
  },
  {
    name: "Death Review",
    duration: "After each death",
    goal: "Learn from every death",
    description: "Ask yourself why you died and how to prevent it.",
    steps: ["Was it avoidable?", "Did I have vision?", "Did I track cooldowns?", "What should I do differently?"]
  },
  {
    name: "VOD Review",
    duration: "20-30 min",
    goal: "Identify patterns in your mistakes",
    description: "Watch your own gameplay critically.",
    steps: ["Record your games", "Watch at 1.5x speed", "Pause at deaths/mistakes", "Note patterns to fix"]
  },
  {
    name: "Minimap Only Mode",
    duration: "5 min",
    goal: "Improve map reading",
    description: "Try to play while looking primarily at minimap.",
    steps: ["Focus on minimap", "Only look at main screen to CS", "Track all enemy positions", "Practice in normals first"]
  },
  {
    name: "Cooldown Tracking",
    duration: "Every game",
    goal: "Know enemy ability timers",
    description: "Track key enemy cooldowns mentally.",
    steps: ["Note when enemy uses key ability", "Know approximate cooldown", "Trade when it's down", "All-in when ultimate is down"]
  }
];

// VOD Review checklist
export const vodReviewChecklist = {
  earlyGame: [
    "Did I have a good leash / start?",
    "Did I hit my early CS numbers?",
    "Did I die to ganks? Could I have warded better?",
    "Did I trade effectively?",
    "Did I respect power spikes?"
  ],
  midGame: [
    "Did I rotate for objectives?",
    "Was my vision control good?",
    "Did I catch side waves safely?",
    "Did I group when I should have?",
    "Did I push advantages?"
  ],
  lateGame: [
    "Was my positioning good in teamfights?",
    "Did I focus the right targets?",
    "Did I use cooldowns correctly?",
    "Did I get caught out?",
    "Did I play around objectives?"
  ],
  overall: [
    "What was my biggest mistake?",
    "What did I do well?",
    "What can I practice to improve?",
    "Did I tilt? How did it affect my play?",
    "Was my champion/role choice good for the game?"
  ]
};

// Improvement goals template
export const improvementGoals = {
  shortTerm: [
    "Hit 7 CS/min average",
    "Die less than 5 times per game",
    "Ward at least 10 times per game",
    "Track enemy jungler position",
    "Don't flame teammates"
  ],
  mediumTerm: [
    "Master 3 champions in your role",
    "Hit 8 CS/min average",
    "Achieve positive win rate",
    "Learn all matchups for mains",
    "Review 1 VOD per week"
  ],
  longTerm: [
    "Reach next rank",
    "Master wave management",
    "Develop game sense for predictions",
    "Lead team through macro calls",
    "Maintain mental fortitude"
  ]
};

export default {
  roleImprovementGuides,
  universalDrills,
  vodReviewChecklist,
  improvementGoals
};
