// Champion Guides Part 4 - ADCs and Supports

export const adcGuides = {
  Ashe: {
    difficulty: "Easy",
    role: "ADC",
    damageType: "Physical",
    playstyle: "Utility ADC / Kite Machine",
    description: "Ashe is the most beginner-friendly ADC with global engage and built-in slow. She provides vision with E and engages teamfights with R. Great for learning ADC fundamentals.",
    strengths: ["Global R engage", "Built-in slow", "E provides vision", "Easy to learn", "Good kiting"],
    weaknesses: ["No dash or escape", "Weak to assassins", "Low burst damage", "R can be sidestepped", "Team reliant"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "W → Q → E", explanation: "W max for poke. Q second for DPS. E for utility." },
    combos: [
      { name: "Poke", keys: "W → AA", description: "W slow, auto while slowed." },
      { name: "All-in", keys: "R → W → Q → AA spam", description: "R stun, W, Q active, auto spam." },
      { name: "Kite", keys: "AA → W → AA → AA → AA", description: "Weave W between autos while kiting." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R is global engage/catch." },
      { time: "Kraken Slayer", description: "DPS becomes respectable." },
      { time: "2 Items", description: "Q is devastating with attack speed." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Runaan's Hurricane", "Infinity Edge"],
      situational: ["Lord Dominik's Regards", "Mortal Reminder", "Guardian Angel", "Wit's End"],
      boots: ["Berserker's Greaves"]
    },
    lanePhase: { early: "Poke with W. Farm safely. Use E for vision. Don't get caught.", mid: "Look for R picks. Group with team. Kite in fights." },
    teamfighting: "R to start fights. Stay back, auto and W constantly. Q for maximum DPS. Kite backwards.",
    matchupTips: { hard: "Draven, Samira, and Kalista can all-in and kill you.", easy: "You're good into Ezreal, Sivir, and Jhin with your constant slows." }
  },

  Caitlyn: {
    difficulty: "Medium",
    role: "ADC",
    damageType: "Physical",
    playstyle: "Lane Bully / Siege ADC",
    description: "Caitlyn is the queen of bot lane with the longest auto range. She dominates laning phase and excels at sieging. Her traps provide zone control and her R is a long-range execute.",
    strengths: ["Longest auto range", "Amazing lane bully", "Trap zone control", "Great siege", "R execute"],
    weaknesses: ["Weak mid game", "Falls off vs tanks", "Positioning dependent", "Traps can be avoided", "R can be blocked"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → W → E", explanation: "Q for poke and waveclear. W second for traps. E for safety." },
    combos: [
      { name: "Trap Combo", keys: "W → E → Q → Headshot", description: "Trap under CC'd enemy, E back, Q, headshot." },
      { name: "Poke", keys: "Q (through minions)", description: "Q poke through minions." },
      { name: "All-in", keys: "E → Q → Headshot → W → AA spam", description: "E forward, Q, headshot, trap, continue." }
    ],
    powerSpikes: [
      { time: "Level 1-5", description: "Range advantage wins lane." },
      { time: "Galeforce/Kraken", description: "First item spike." },
      { time: "3 Items", description: "Headshots hurt a lot." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Galeforce", "Infinity Edge", "Rapid Firecannon"],
      situational: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mortal Reminder"],
      boots: ["Berserker's Greaves"]
    },
    lanePhase: { early: "Abuse range. Auto harass constantly. Push for plates. Zone with traps.", mid: "Siege towers. Group for objectives. Your mid game is weak - farm up." },
    teamfighting: "Stay max range. Trap choke points. Q-Headshot poke. R low targets. Don't get caught.",
    matchupTips: { hard: "Samira, Vayne, and Kai'Sa outscale you hard.", easy: "You bully Ezreal, Jhin, and Ashe in lane with range." }
  },

  Jinx: {
    difficulty: "Medium",
    role: "ADC",
    damageType: "Physical",
    playstyle: "Hypercarry / Reset Machine",
    description: "Jinx is the quintessential hypercarry. Her passive gives movement speed on kills, and her rockets do AoE damage. She's weak early but becomes a teamfight monster late game.",
    strengths: ["Insane late game", "AoE rockets", "Passive resets", "Global R", "Team fight monster"],
    weaknesses: ["Weak early game", "No mobility", "Easy to dive", "Needs peel", "Slow without passive"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → W → E", explanation: "Q for damage mode switching. W for slow. E for traps." },
    combos: [
      { name: "Poke", keys: "Q (rockets) → AA → W", description: "Rocket poke, W slow." },
      { name: "All-in", keys: "E → W → Q (minigun) → AA spam", description: "Trap, slow, minigun for attack speed." },
      { name: "Cleanup", keys: "Get reset → Q (rockets) → AA → AA → AA", description: "Get kill, passive speed, rocket everyone." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R adds global execute." },
      { time: "2 Items", description: "Rockets start hurting." },
      { time: "3 Items", description: "You're now the carry. Game is yours to win." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Runaan's Hurricane", "Infinity Edge"],
      situational: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Rapid Firecannon"],
      boots: ["Berserker's Greaves"]
    },
    lanePhase: { early: "Farm safely. Use rockets for safer farm. Don't fight without support.", mid: "Scale. Get items. Group for teamfights." },
    teamfighting: "Stay back with rockets. Get one reset and go crazy. Use passive speed to clean up.",
    matchupTips: { hard: "Draven, Lucian, and Samira can bully you early.", easy: "You outscale Ezreal, Jhin, and Ashe late game." }
  },

  Kaisa: {
    difficulty: "Medium",
    role: "ADC",
    damageType: "Mixed",
    playstyle: "Hybrid Assassin ADC",
    description: "Kai'Sa is a hybrid damage ADC who evolves abilities. Her R lets her dive onto marked targets. She scales well and can assassinate or DPS depending on build.",
    strengths: ["Hybrid damage", "R dive is unique", "Evolutions are strong", "Can assassinate or DPS", "Good scaling"],
    weaknesses: ["Short range early", "Needs evolutions", "R can be baited", "Positioning dependent", "Weak lane phase"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for damage. E second for stealth. W for poke." },
    combos: [
      { name: "Burst", keys: "R → AA → Q → E → AA → AA", description: "R in, auto, Q, E for stealth, autos." },
      { name: "Poke", keys: "W → (wait for team CC) → R", description: "W poke to stack passive, R to follow up." },
      { name: "Isolated", keys: "AA → AA → AA → AA → AA → Q", description: "Stack passive, Q isolated target." }
    ],
    powerSpikes: [
      { time: "Q Evolution", description: "Q missiles go from meh to great." },
      { time: "E Evolution", description: "Invisibility makes you safe." },
      { time: "2 Items", description: "Usually both Q and E evolved. Strong." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Nashor's Tooth", "Rabadon's Deathcap"],
      situational: ["Zhonya's Hourglass", "Guardian Angel", "Wit's End", "Void Staff"],
      boots: ["Berserker's Greaves", "Sorcerer's Shoes"]
    },
    lanePhase: { early: "Farm for evolutions. Trade with isolated Q if possible.", mid: "Once evolved, look for fights. Your R lets you dive." },
    teamfighting: "Wait for CC or low target. R in, burst, E to stealth and reposition.",
    matchupTips: { hard: "Caitlyn, Varus, and Ashe outrange you.", easy: "You outscale Ezreal, Jhin, and Sivir." }
  },

  Vayne: {
    difficulty: "Hard",
    role: "ADC",
    damageType: "Physical (True Damage)",
    playstyle: "Tank Shredder / Outplay ADC",
    description: "Vayne is the ultimate tank killer with W true damage. Her kit requires precise mechanics to dodge and kite. Weak early but becomes the best late game 1v1 ADC.",
    strengths: ["%HP true damage shreds tanks", "R stealth outplays", "Amazing late game", "Q mobility", "Can 1v9"],
    weaknesses: ["Very weak early", "Short range", "Needs perfect positioning", "Relies on mechanics", "Easy to bully"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for mobility. W second for damage. E for condemn." },
    combos: [
      { name: "Trade", keys: "AA → AA → Q → AA (W proc)", description: "Auto, auto, Q, proc W." },
      { name: "Wall Stun", keys: "E → AA → AA → AA → Q", description: "Condemn to wall, full combo." },
      { name: "Kite", keys: "R → AA → Q (stealth) → AA → Q → AA", description: "R for stealth Qs, kite with tumbles." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R adds stealth and AD. Can fight." },
      { time: "Blade of the Ruined King", description: "Sustain and damage spike." },
      { time: "3 Items", description: "You're now the strongest ADC in the game." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Guinsoo's Rageblade", "Blade of the Ruined King"],
      situational: ["Wit's End", "Guardian Angel", "Immortal Shieldbow", "Bloodthirster"],
      boots: ["Berserker's Greaves"]
    },
    lanePhase: { early: "Farm. Don't fight. Survive. Give up CS if needed.", mid: "Start trading after 6. Scale to your spikes." },
    teamfighting: "Stay safe. Kite backwards. Proc W on whoever is closest. R for outplays.",
    matchupTips: { hard: "Draven, Caitlyn, and Lucian bully you in lane.", easy: "You outscale everyone. Just survive early." }
  },

  Ezreal: {
    difficulty: "Medium",
    role: "ADC",
    damageType: "Mixed",
    playstyle: "Safe Poke ADC",
    description: "Ezreal is the safest ADC with his E blink. He pokes with Q and scales well with ability haste. Great for playing safe but requires landing skillshots.",
    strengths: ["E is a free flash", "Safe laning", "Q poke", "Scales well", "Flexible builds"],
    weaknesses: ["Lower DPS than other ADCs", "Skillshot dependent", "Falls off vs tanks", "Needs to land Q", "Weak waveclear"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for poke. E second for safety. W for burst." },
    combos: [
      { name: "Poke", keys: "Q → Q → Q", description: "Just spam Q for poke." },
      { name: "Burst", keys: "W → E → AA → Q", description: "W through enemy, E in, auto, Q." },
      { name: "Safe Trade", keys: "E → AA → W → Q", description: "E in for surprise, auto, W, Q, kite." }
    ],
    powerSpikes: [
      { time: "Tear + Sheen", description: "Q starts hitting hard." },
      { time: "Muramana", description: "Q does insane damage." },
      { time: "3 Items", description: "You're now scary with burst." }
    ],
    itemBuild: {
      starter: ["Tear of the Goddess", "Health Potion x2"],
      core: ["Muramana", "Trinity Force", "Serylda's Grudge"],
      situational: ["Blade of the Ruined King", "Maw of Malmortius", "Guardian Angel", "Frozen Heart"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    lanePhase: { early: "Farm with Q. Poke when you can. Save E for escapes.", mid: "Poke with Q. Group for fights. Don't get caught without E." },
    teamfighting: "Poke with Q. E only to escape, not engage. W-E for burst if safe.",
    matchupTips: { hard: "Draven, Samira, and Kai'Sa can all-in you.", easy: "You're safe into Ashe, Jhin, and Sivir with your E." }
  },

  Draven: {
    difficulty: "Hard",
    role: "ADC",
    damageType: "Physical",
    playstyle: "Snowball ADC / Axe Catcher",
    description: "Draven is the highest damage ADC early game with his spinning axes. He needs to catch axes while fighting, making him mechanically demanding. His passive gives bonus gold on kills.",
    strengths: ["Insane early damage", "Passive gold advantage", "Lane bully", "Snowballs hard", "Can 1v2 with lead"],
    weaknesses: ["Needs to catch axes", "Hard to master", "Falls behind if camped", "Predictable movement", "Weak from behind"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for damage. W second for speed. E for disengage." },
    combos: [
      { name: "Trade", keys: "Q → AA → W → AA → Q catch", description: "Q auto, W reset, auto, catch axe." },
      { name: "All-in", keys: "Q → Q → E → W → AA → AA → R", description: "Two axes, E slow, W speed, autos, R." },
      { name: "Catch and Kite", keys: "AA → move to catch → AA → move", description: "Auto, catch axe, auto. Repeat forever." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q makes you the strongest level 1 ADC." },
      { time: "Level 2", description: "W adds chase potential." },
      { time: "First Kill", description: "Passive gold = item advantage." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Bloodthirster", "Infinity Edge"],
      situational: ["Lord Dominik's Regards", "Mortal Reminder", "Guardian Angel", "Rapid Firecannon"],
      boots: ["Berserker's Greaves"]
    },
    lanePhase: { early: "Be aggressive. Your Q does ridiculous damage. Look for kills.", mid: "Cash in passive on kills. Keep snowballing." },
    teamfighting: "Catch axes. Position to catch safely. Your damage is insane if you keep axes spinning.",
    matchupTips: { hard: "Samira, Vayne, and Tristana can all-in and disrupt your axes.", easy: "You bully Ezreal, Jhin, and Ashe with raw damage." }
  },

  Jhin: {
    difficulty: "Medium",
    role: "ADC",
    damageType: "Physical",
    playstyle: "Utility ADC / Fourth Shot Burst",
    description: "Jhin is a unique ADC with 4-shot reload and no attack speed scaling. His 4th shot is an execute, and his R provides global utility. Great at picks and teamfight followup.",
    strengths: ["4th shot execute", "Long range R", "Traps for vision/CC", "Good at picks", "High burst"],
    weaknesses: ["No DPS like other ADCs", "Reload mechanic", "No mobility", "Falls off vs tanks", "R can miss"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "Q → W → E", explanation: "Q for poke and waveclear. W for root. E for traps." },
    combos: [
      { name: "Poke", keys: "Q (bounce through minions)", description: "Q through dying minions to enemy." },
      { name: "Root Combo", keys: "W (after CC) → Q → 4th shot", description: "W root followup, Q, 4th shot execute." },
      { name: "All-in", keys: "E → W → Q → AA → AA → AA → 4th shot", description: "Trap, root, Q, three autos, execute." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R adds global pressure." },
      { time: "Galeforce", description: "Mobility you desperately need." },
      { time: "3 Items", description: "4th shot crits for 1000+." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Galeforce", "Rapid Firecannon", "Infinity Edge"],
      situational: ["Lord Dominik's Regards", "Bloodthirster", "Guardian Angel", "Mortal Reminder"],
      boots: ["Berserker's Greaves", "Swiftness Boots"]
    },
    lanePhase: { early: "Poke with Q bounces. Farm for items. Save 4th shot for trades.", mid: "Use R for picks. Group for teamfights." },
    teamfighting: "Stay back. Poke with W and Q. 4th shot priority targets. R to start or cleanup.",
    matchupTips: { hard: "Samira, Kai'Sa, and Vayne can dive and kill you.", easy: "You're good into Ezreal, Ashe, and Sivir with your burst." }
  }
};

export const supportGuides = {
  Leona: {
    difficulty: "Easy",
    role: "Support",
    damageType: "Magic",
    playstyle: "Engage Tank",
    description: "Leona is the premier engage support with massive CC chain. She's tanky and straightforward - hit E, CC them forever. Great for beginners learning engage timing.",
    strengths: ["Tons of CC", "Very tanky", "Easy to play", "Great engage", "Wins all-ins"],
    weaknesses: ["No disengage", "All-in or nothing", "Weak if behind", "No poke", "Countered by disengage"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "W → E → Q", explanation: "W max for tankiness. E second for engage. Q for stun." },
    combos: [
      { name: "Engage", keys: "E → Q → W → R", description: "E in, Q stun, W tank, R for more CC." },
      { name: "Flash Engage", keys: "Flash → R → E → Q", description: "Flash R surprise, E, Q chain." },
      { name: "CC Chain", keys: "E → Q → (wait) → R", description: "Space out CC for maximum duration." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "E-Q is a kill threat." },
      { time: "Level 6", description: "R adds massive CC." },
      { time: "Locket/Shurelya's", description: "You're very tanky and have utility." }
    ],
    itemBuild: {
      starter: ["Relic Shield", "Health Potion x2"],
      core: ["Locket of the Iron Solari", "Knight's Vow", "Thornmail"],
      situational: ["Zeke's Convergence", "Randuin's Omen", "Force of Nature", "Gargoyle Stoneplate"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    lanePhase: { early: "Look for E-Q engages. All-in at level 2. Be aggressive.", mid: "Engage teamfights. Peel for carry if needed." },
    teamfighting: "Engage with E-Q-R. Peel if your carry is fed. Tank damage with W.",
    matchupTips: { hard: "Morgana, Janna, and Lulu can block your engage.", easy: "You beat Sona, Soraka, and Brand - squishy targets." }
  },

  Thresh: {
    difficulty: "Hard",
    role: "Support",
    damageType: "Magic",
    playstyle: "Playmaking Support",
    description: "Thresh is the most versatile support with hook, lantern, flay, and box. His kit allows for incredible plays but requires practice. The lantern save is iconic.",
    strengths: ["Hook is deadly", "Lantern saves lives", "Very versatile", "Can engage or peel", "High skill ceiling"],
    weaknesses: ["Hook is skillshot", "Falls off late", "Squishy for a tank", "Hard to master", "Soul collection takes time"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for hook CD. E second for flay. W for lantern." },
    combos: [
      { name: "Engage", keys: "Q → Q → E → R", description: "Hook, follow, flay back, box." },
      { name: "Flay Hook", keys: "E (back) → Q", description: "Flay first to slow, easier hook." },
      { name: "Lantern Engage", keys: "W (to ally) → Q → Q → ally takes lantern", description: "Hook, lantern for ally to follow." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "Hook + Flay is deadly." },
      { time: "Level 6", description: "Box adds zone control." },
      { time: "Mobility Boots", description: "Roaming and hooks." }
    ],
    itemBuild: {
      starter: ["Relic Shield", "Health Potion x2"],
      core: ["Locket of the Iron Solari", "Knight's Vow", "Zeke's Convergence"],
      situational: ["Thornmail", "Redemption", "Mikael's Blessing", "Gargoyle Stoneplate"],
      boots: ["Mobility Boots", "Mercury's Treads"]
    },
    lanePhase: { early: "Fish for hooks. Punish with E. Save lantern for saves.", mid: "Roam with Mobi boots. Create picks with hooks." },
    teamfighting: "Hook priority targets. Box for zone. Lantern to save carries. Flay to peel.",
    matchupTips: { hard: "Morgana, Sivir, and Ezreal can block or dodge hooks.", easy: "You beat Sona, Soraka, and Brand with all-in." }
  },

  Nautilus: {
    difficulty: "Easy",
    role: "Support",
    damageType: "Magic",
    playstyle: "CC Tank",
    description: "Nautilus has the most CC of any champion. His hook, passive root, and R knockup chain together for eternal lockdown. Easy to play but terrifying to face.",
    strengths: ["Most CC in the game", "Point-click R", "Easy to play", "Tanky", "Hook + passive root"],
    weaknesses: ["Predictable", "No disengage", "Slow", "Mana hungry", "Hook can grab wrong targets"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for hook CD. E for damage. W for shield." },
    combos: [
      { name: "Engage", keys: "Q → AA (root) → E → R", description: "Hook, auto root, E slow, R knockup." },
      { name: "R Engage", keys: "R → Q → AA → E", description: "R to start, hook followup, root, E." },
      { name: "Flash Hook", keys: "Flash → Q", description: "Flash extends hook range." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "Q + AA root is deadly." },
      { time: "Level 6", description: "R is point-click death sentence." },
      { time: "Tank Items", description: "You become unkillable." }
    ],
    itemBuild: {
      starter: ["Relic Shield", "Health Potion x2"],
      core: ["Locket of the Iron Solari", "Knight's Vow", "Thornmail"],
      situational: ["Zeke's Convergence", "Force of Nature", "Randuin's Omen", "Gargoyle Stoneplate"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    lanePhase: { early: "Hook + auto root level 2 for kills. Be aggressive.", mid: "Engage fights with R. It's point-click." },
    teamfighting: "R their carry. Hook to follow up. Chain CC everything.",
    matchupTips: { hard: "Morgana, Janna, and Lulu counter your CC.", easy: "You destroy Sona, Soraka, and Brand." }
  },

  Lulu: {
    difficulty: "Medium",
    role: "Support",
    damageType: "Magic",
    playstyle: "Enchanter / Peel Support",
    description: "Lulu is the premier peel enchanter who turns her ADC into a monster. Her R gives HP and knockup, W polymorphs divers, and E shields. Great with hypercarries.",
    strengths: ["Amazing peel", "R is huge save", "W polymorph", "Good poke", "Empowers hypercarries"],
    weaknesses: ["Squishy", "No engage", "Weak solo", "Mana hungry", "Needs carry to be good"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "E → Q → W", explanation: "E max for shield. Q for poke. W for polymorph." },
    combos: [
      { name: "Poke", keys: "E (on enemy) → Q", description: "E to enemy, Q through them." },
      { name: "Peel", keys: "W (enemy diver) → E (ally) → R", description: "Polymorph diver, shield ally, ult if needed." },
      { name: "Buff Carry", keys: "E → W (ally) → R", description: "Shield, speed buff, ult for huge HP." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "E-Q poke is strong." },
      { time: "Level 6", description: "R saves lives." },
      { time: "Shurelya's/Moonstone", description: "Your heals/shields are strong." }
    ],
    itemBuild: {
      starter: ["Spellthief's Edge", "Health Potion x2"],
      core: ["Moonstone Renewer", "Staff of Flowing Water", "Ardent Censer"],
      situational: ["Mikael's Blessing", "Redemption", "Zhonya's Hourglass", "Banshee's Veil"],
      boots: ["Ionian Boots of Lucidity", "Mercury's Treads"]
    },
    lanePhase: { early: "Poke with E-Q. Shield ADC in trades. Don't get caught.", mid: "Stick with carry. Peel in fights. Your job is to keep them alive." },
    teamfighting: "Stay near carry. W divers. E-R to save. Never leave their side.",
    matchupTips: { hard: "Leona, Nautilus, and Blitzcrank can engage on you.", easy: "You counter assassins and divers with W and R." }
  },

  Morgana: {
    difficulty: "Easy",
    role: "Support",
    damageType: "Magic",
    playstyle: "Anti-CC Mage Support",
    description: "Morgana's Black Shield is the ultimate anti-engage tool. Her Q root is incredibly long, and her R can stun entire teams. Great into CC-heavy engage supports.",
    strengths: ["E blocks all CC", "Q is 3 second root", "R stuns teams", "Good damage", "Counters engage"],
    weaknesses: ["Squishy", "Q is easy to dodge", "No sustain", "E has long cooldown", "Falls off"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for damage and root. W for poke. E for shield." },
    combos: [
      { name: "Catch", keys: "Q → W (under them)", description: "Q root, W for damage while rooted." },
      { name: "All-in", keys: "Q → R → Zhonya's → E (self)", description: "Q, R, Zhonya's during R for stun." },
      { name: "Save Ally", keys: "E → Q (enemy)", description: "Shield ally from CC, root diver." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "Q-W poke is strong." },
      { time: "Level 6", description: "R adds teamfight presence." },
      { time: "Zhonya's", description: "R-Zhonya's combo unlocked." }
    ],
    itemBuild: {
      starter: ["Spellthief's Edge", "Health Potion x2"],
      core: ["Zhonya's Hourglass", "Liandry's Anguish", "Rylai's Crystal Scepter"],
      situational: ["Morellonomicon", "Banshee's Veil", "Redemption", "Mikael's Blessing"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Fish for Q. W for poke. E to block engage.", mid: "E your carry against engage. Land Qs for picks." },
    teamfighting: "E your carry. Q priority targets. R-Zhonya's if you can hit multiple.",
    matchupTips: { hard: "Sona, Soraka, and Nami can sustain through your poke.", easy: "You counter Leona, Nautilus, and Thresh with E." }
  },

  Soraka: {
    difficulty: "Easy",
    role: "Support",
    damageType: "Magic",
    playstyle: "Healer Support",
    description: "Soraka is the ultimate healer with infinite sustain for her team. Her R is global healing, and her E silences zones. She's squishy but keeps her team alive forever.",
    strengths: ["Massive healing", "Global R", "E silence", "Q sustains self", "Keeps team alive"],
    weaknesses: ["Very squishy", "Weak to all-in", "No escape", "W costs HP", "Anti-heal destroys her"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "W → Q → E", explanation: "W max for healing. Q for sustain. E for silence." },
    combos: [
      { name: "Sustain", keys: "Q → W", description: "Q to heal self, W to heal ally." },
      { name: "Disengage", keys: "E → Q", description: "E silence zone, Q slow." },
      { name: "Save", keys: "R → W → W → W", description: "Global heal, then spam W." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "Q-W sustain is online." },
      { time: "Level 6", description: "Global R saves lives." },
      { time: "Moonstone", description: "Healing goes crazy." }
    ],
    itemBuild: {
      starter: ["Spellthief's Edge", "Health Potion x2"],
      core: ["Moonstone Renewer", "Redemption", "Staff of Flowing Water"],
      situational: ["Warmog's Armor", "Mikael's Blessing", "Ardent Censer", "Zhonya's Hourglass"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    lanePhase: { early: "Q for sustain. W your ADC. Stay safe - you're squishy.", mid: "Stay with team. Spam W. R to save anyone on map." },
    teamfighting: "Stay far back. W whoever is low. E to zone. R when needed. Don't die.",
    matchupTips: { hard: "Leona, Nautilus, and Blitzcrank can kill you instantly.", easy: "You outsustain Lulu, Janna, and Nami in poke wars." }
  },

  Blitzcrank: {
    difficulty: "Easy",
    role: "Support",
    damageType: "Magic",
    playstyle: "Hook Champion",
    description: "Blitzcrank is the original hook champion. Land Q, they die. Miss Q, you're useless for 20 seconds. High risk, high reward. One hook can win a game.",
    strengths: ["Hook is instant death", "Passive shield", "E knockup", "R silence", "One hook wins games"],
    weaknesses: ["Useless if Q misses", "Long Q cooldown", "No sustain", "Falls off late", "Predictable"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for lower cooldown. E for knockup. W for speed." },
    combos: [
      { name: "Engage", keys: "Q → E → R", description: "Hook, knockup, silence." },
      { name: "W Engage", keys: "W → Q → E → R", description: "Speed boost hook for surprise." },
      { name: "Flash Hook", keys: "Flash → Q", description: "Flash to extend hook range." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q can get first blood." },
      { time: "Level 2", description: "Q-E is kill combo." },
      { time: "Mobility Boots", description: "Roaming hooks." }
    ],
    itemBuild: {
      starter: ["Relic Shield", "Health Potion x2"],
      core: ["Locket of the Iron Solari", "Knight's Vow", "Zeke's Convergence"],
      situational: ["Thornmail", "Force of Nature", "Randuin's Omen", "Dead Man's Plate"],
      boots: ["Mobility Boots", "Plated Steelcaps"]
    },
    lanePhase: { early: "Fish for hooks. One hook = one kill. Zone with hook threat.", mid: "Roam and hook. Create picks. Objective control." },
    teamfighting: "Hook their carry. E knockup, R silence. One hook wins teamfight.",
    matchupTips: { hard: "Morgana, Sivir, and Ezreal can block or dodge hooks.", easy: "You destroy Sona, Soraka, and Yuumi with one hook." }
  },

  Janna: {
    difficulty: "Medium",
    role: "Support",
    damageType: "Magic",
    playstyle: "Disengage Enchanter",
    description: "Janna is the ultimate disengage support who excels at peeling. Her tornado and ultimate knockback stop any engage. She turns losing fights into winning ones.",
    strengths: ["Best disengage in the game", "R heals and knockbacks", "W slow + poke", "Shield with AD", "Counters engage"],
    weaknesses: ["No engage", "Squishy", "Q is slow", "Team reliant", "Weak in lane fights"],
    summonerSpells: ["Flash", "Heal"],
    skillOrder: { order: "E → W → Q", explanation: "E max for shield. W for slow and poke. Q for tornado." },
    combos: [
      { name: "Poke", keys: "W → AA", description: "W slow, auto while slowed." },
      { name: "Disengage", keys: "Q (instant) → R", description: "Quick Q knockup, R to push away." },
      { name: "Peel", keys: "E (ally) → W (enemy) → Q", description: "Shield ADC, slow diver, tornado." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "E-W poke is good." },
      { time: "Level 6", description: "R is massive disengage." },
      { time: "Shurelya's/Moonstone", description: "Utility items online." }
    ],
    itemBuild: {
      starter: ["Spellthief's Edge", "Health Potion x2"],
      core: ["Moonstone Renewer", "Staff of Flowing Water", "Redemption"],
      situational: ["Mikael's Blessing", "Ardent Censer", "Zhonya's Hourglass", "Banshee's Veil"],
      boots: ["Ionian Boots of Lucidity", "Mercury's Treads"]
    },
    lanePhase: { early: "Poke with W. Shield ADC in trades. Save Q for disengage.", mid: "Stick with team. Disengage bad fights. Peel for carry." },
    teamfighting: "Stay back with carry. Q-R to stop any engage. E shield carry. Don't die.",
    matchupTips: { hard: "Sona, Soraka, and Nami outsustain you.", easy: "You counter Leona, Nautilus, and Alistar with R." }
  }
};

export default { adcGuides, supportGuides };
