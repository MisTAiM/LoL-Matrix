// Champion Guides Part 3 - Mid Laners

export const midGuides = {
  Ahri: {
    difficulty: "Easy",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Mobile Mage / Pick Champion",
    description: "Ahri is a mobile mage with great pick potential. Her E charm sets up kills, and her R gives three dashes for safety or aggression. She's beginner-friendly with consistent damage and good roaming.",
    strengths: ["Very safe with R dashes", "Charm is strong CC", "Good roaming", "Easy to learn", "Consistent damage"],
    weaknesses: ["Low burst compared to assassins", "Charm is crucial", "Falls off late", "Dependent on R", "Mana hungry"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for waveclear and damage. W second for burst. E for charm." },
    combos: [
      { name: "Basic", keys: "E → Q → W → AA", description: "Charm, Q through, W foxfires, auto." },
      { name: "All-in", keys: "E → R → W → Q → R → R", description: "Charm, R in, burst, R chase or escape." },
      { name: "Poke", keys: "Q (through wave)", description: "Q through minions and enemy for return damage." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Charm combo available." },
      { time: "Level 6", description: "R adds massive safety and kill pressure." },
      { time: "1 Item", description: "Luden's or Everfrost spike." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Luden's Tempest", "Shadowflame", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Morellonomicon"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Farm with Q. Poke when possible. Look for charm openings. Shove and roam.", mid: "Roam constantly. Your R lets you make plays safely. Ward for your roams." },
    teamfighting: "Stay safe, look for charm on priority targets. Use R to reposition, not just for damage.",
    matchupTips: { hard: "Kassadin, Fizz, and Zed can burst you. Play safe, poke, don't get all-inned.", easy: "You beat Veigar, Lux, and Xerath. You can dodge their skillshots and all-in with R." }
  },

  Akali: {
    difficulty: "Hard",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Assassin / Shroud Fighter",
    description: "Akali is a high skill ceiling assassin who uses energy and shroud for extended fights. Her kit allows for incredible outplay potential but requires precise execution. She's weak to hard CC but dominates if ahead.",
    strengths: ["Shroud outplays", "High mobility", "Strong burst", "Can kill anyone", "Great scaling"],
    weaknesses: ["High skill ceiling", "Weak to CC", "Energy management", "Falls behind if camped", "Hard to master"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for poke and waveclear. E second for mobility. W for shroud." },
    combos: [
      { name: "Short Trade", keys: "Q → AA (passive) → Q → W back", description: "Q poke, passive proc, Q again, shroud out." },
      { name: "All-in", keys: "E → E → Q → AA → R1 → Q → R2", description: "E in, Q, passive, R execute." },
      { name: "Tower Dive", keys: "E → E → burst → W (drop aggro) → R out", description: "E in, burst, W to drop tower, R escape." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full combo available." },
      { time: "Level 6", description: "R adds execute and gap close. Kill pressure." },
      { time: "Hextech Rocketbelt", description: "More mobility and burst." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Hextech Rocketbelt", "Shadowflame", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Lich Bane", "Banshee's Veil"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Q poke, farm. Don't overcommit without W available. Wait for level 6 for kills.", mid: "Roam and assassinate. You're very strong mid game. Snowball your lead." },
    teamfighting: "Wait for fight to start. Shroud in, assassinate carry, R out or W to survive.",
    matchupTips: { hard: "Annie, Malzahar, and Lissandra have point-click CC. Play safe, roam instead.", easy: "You beat Kassadin, Veigar, and Syndra. You can all-in them and they can't escape shroud." }
  },

  Anivia: {
    difficulty: "Medium",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Control Mage / Zone Controller",
    description: "Anivia is a control mage with incredible zone control and late-game scaling. Her wall can single-handedly win fights, and her passive gives her a second life. She's weak early but becomes a teamfight monster.",
    strengths: ["Wall is game-changing", "Passive second life", "Great scaling", "Zone control with R", "High damage late"],
    weaknesses: ["Very weak early", "Immobile", "Mana hungry", "Slow and squishy", "Egg can be killed"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for stun damage. E second for burst. W for wall utility." },
    combos: [
      { name: "Basic", keys: "Q → E → R → E", description: "Q stun, E double damage, R zone, E again if they stay." },
      { name: "Wall Combo", keys: "W (behind enemy) → R → Q → E", description: "Wall traps them, R slow, Q stun, E burst." },
      { name: "Instant E", keys: "R (under enemy) → E", description: "R instant chill for double E damage." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R zone control is massive." },
      { time: "Tear + Lost Chapter", description: "Mana issues solved. Can spam." },
      { time: "2 Items", description: "You're now a damage threat." }
    ],
    itemBuild: {
      starter: ["Tear of the Goddess", "Health Potion x2"],
      core: ["Archangel's Staff", "Liandry's Anguish", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Morellonomicon"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Farm safely. Don't fight. Stack tear. Survive until 6.", mid: "Control fights with R and W. Zone enemies off objectives." },
    teamfighting: "R for zone, W to split team, Q for stuns. Control the entire fight with zones.",
    matchupTips: { hard: "Fizz, Kassadin, and Zed can dive you easily.", easy: "You beat Veigar, Viktor, and Orianna. You outscale and zone them." }
  },

  Fizz: {
    difficulty: "Medium",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Assassin / Slippery Fighter",
    description: "Fizz is an AP assassin known for his E untargetability. He can dodge any ability with proper timing and bursts squishies instantly. Weak early but terrifying after level 6.",
    strengths: ["E dodges everything", "High burst damage", "Slippery", "R is great engage", "Snowballs hard"],
    weaknesses: ["Weak early game", "Short range", "E on cooldown = vulnerable", "Falls off vs tanks", "Mana issues"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "E → Q → W", explanation: "E max for damage and lower cooldown. Q second for gap close. W for damage." },
    combos: [
      { name: "Basic", keys: "Q → AA → W → E", description: "Q in, auto, W reset, E for damage/escape." },
      { name: "All-in", keys: "R → Q → AA → W → E", description: "R fish, Q follow-up, W, E to finish." },
      { name: "Safe Poke", keys: "Q → E back", description: "Q poke, E to safety immediately." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full combo, can trade well." },
      { time: "Level 6", description: "R adds massive burst. Kill pressure." },
      { time: "1 Item", description: "Night Harvester or Rocketbelt spike." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Hextech Rocketbelt", "Lich Bane", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Shadowflame", "Banshee's Veil"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Farm with W. Poke carefully. Don't fight much pre-6.", mid: "R fish on cooldown. Roam and assassinate. Snowball your lead." },
    teamfighting: "Flank, R a carry, full combo, E out or Zhonya's.",
    matchupTips: { hard: "Malzahar, Lissandra, and Galio have easy CC.", easy: "You beat Lux, Veigar, and Xerath. E dodges their skillshots, you all-in." }
  },

  Katarina: {
    difficulty: "Hard",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Reset Assassin / Teamfight Monster",
    description: "Katarina is the ultimate reset champion. Her E resets on kills/assists, and her R shreds in teamfights. High skill ceiling but can 1v9 when mastered. Weak to CC but destroys uncoordinated teams.",
    strengths: ["Resets are infinite", "Insane teamfight damage", "High outplay potential", "No mana", "Snowballs hard"],
    weaknesses: ["Very weak to CC", "Hard to master", "Needs resets", "Weak laning phase", "Team-reliant early"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for poke. E second for mobility. W for speed boost." },
    combos: [
      { name: "Basic", keys: "Q → E (to dagger) → W → E (out)", description: "Q poke, E to dagger damage, W, E escape." },
      { name: "All-in", keys: "E → W → Q → R → E (to dagger)", description: "E in, W, Q dagger behind, R, E to dagger for burst." },
      { name: "Reset", keys: "Kill → E → Q → W → E → E → E", description: "Chain E resets through team." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "E-W combo is strong." },
      { time: "Level 6", description: "R adds massive damage. Can solo kill." },
      { time: "Hextech Rocketbelt", description: "Another gap closer + burst." }
    ],
    itemBuild: {
      starter: ["Long Sword", "Refillable Potion"],
      core: ["Hextech Rocketbelt", "Nashor's Tooth", "Shadowflame"],
      situational: ["Zhonya's Hourglass", "Rabadon's Deathcap", "Void Staff", "Lich Bane"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Farm safely. Trade with Q-E-W when you can. Don't get CC'd.", mid: "Roam constantly. You need kills to snowball. Fight in skirmishes." },
    teamfighting: "Wait for CC to be blown. E in when you can get reset. Chain E through entire team.",
    matchupTips: { hard: "Diana, Kassadin, and Malzahar survive your burst and CC you.", easy: "You beat Veigar, Lux, and Xerath. Dodge with E, all-in post-6." }
  },

  LeBlanc: {
    difficulty: "Hard",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Burst Assassin / Deceptive Fighter",
    description: "LeBlanc is a burst mage/assassin with high mobility and deception. Her W dash and passive clone allow for incredible outplay potential. She dominates lane but requires fast hands and decision-making.",
    strengths: ["High burst damage", "Very mobile", "Clone mindgames", "Lane bully", "Good roaming"],
    weaknesses: ["Falls off late", "High skill ceiling", "Squishy", "W cooldown dependency", "CC shuts her down"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "W → Q → E", explanation: "W max for waveclear and burst. Q second for damage. E for chain." },
    combos: [
      { name: "Quick Trade", keys: "W → Q → W back", description: "W in, Q, W back to safety." },
      { name: "Full Burst", keys: "Q → R(Q) → W → E", description: "Q, mimic Q, W, chain if needed." },
      { name: "Chain Combo", keys: "E → R(E) → Q → W", description: "Double chain for long CC, then burst." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "W-Q combo is strong." },
      { time: "Level 3", description: "E adds more burst and CC." },
      { time: "Level 6", description: "Mimic doubles any ability. Huge spike." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Luden's Tempest", "Shadowflame", "Rabadon's Deathcap"],
      situational: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Mejai's Soulstealer"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "W-Q trade constantly. Zone enemy. Roam when you have priority.", mid: "Assassinate side lanes. You're very strong mid game." },
    teamfighting: "Pick off isolated targets. Don't go in 5v5 - you'll die. Flank and burst.",
    matchupTips: { hard: "Galio, Kassadin, and Malzahar are tanky or have point-click CC.", easy: "You beat Veigar, Lux, and Xerath. You burst them before they can react." }
  },

  Lux: {
    difficulty: "Easy",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Burst Mage / Artillery",
    description: "Lux is a burst mage with long range skillshots. Her Q root into full combo deletes squishies. She's beginner-friendly with simple but effective kit. Great at sieging and teamfighting from range.",
    strengths: ["Long range", "Easy to play", "High burst", "Shield for team", "Great waveclear"],
    weaknesses: ["Immobile", "Skillshot dependent", "Weak to assassins", "Falls off if behind", "No escapes"],
    summonerSpells: ["Flash", "Barrier"],
    skillOrder: { order: "Q → E → W", explanation: "Q for root. E for poke and waveclear. W for shield." },
    combos: [
      { name: "Basic", keys: "Q → E → R → AA", description: "Root, E, R, auto for passive proc." },
      { name: "Poke", keys: "E → AA", description: "E poke, auto for passive if safe." },
      { name: "Full Combo", keys: "E → Q → R", description: "E slow, easier Q, R delete." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full combo available." },
      { time: "Level 6", description: "R adds massive execute damage." },
      { time: "Luden's", description: "Burst increases significantly." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Luden's Tempest", "Shadowflame", "Rabadon's Deathcap"],
      situational: ["Zhonya's Hourglass", "Void Staff", "Morellonomicon", "Banshee's Veil"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Poke with E. Fish for Q roots. Don't get engaged on.", mid: "Shove and roam. Your R can assist from range. Siege with team." },
    teamfighting: "Stay back, Q priority targets, full combo. Shield allies with W.",
    matchupTips: { hard: "Zed, Fizz, and Katarina can dodge your skillshots and all-in.", easy: "You beat Veigar, Viktor, and Xerath in poke wars." }
  },

  Syndra: {
    difficulty: "Medium",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Burst Mage / Ball Controller",
    description: "Syndra is a burst mage who controls dark spheres. Her R throws all spheres for massive single-target burst. She's a lane bully with high skill expression in sphere management.",
    strengths: ["Massive single-target R burst", "Lane bully", "Good CC with E", "Stacking spheres for damage", "Can zone with spheres"],
    weaknesses: ["Immobile", "Needs setup for max damage", "Mana hungry", "Skillshot dependent", "Weak to assassins"],
    summonerSpells: ["Flash", "Barrier"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for poke. W second for damage. E for stun." },
    combos: [
      { name: "Basic", keys: "Q → E", description: "Q sphere, E to stun." },
      { name: "Full Burst", keys: "Q → Q → Q → W → E → R", description: "Stack spheres, W, E stun, R for max balls." },
      { name: "Quick Burst", keys: "Q → W → Q → E → R", description: "Fast combo for picks." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Q-E stun available." },
      { time: "Level 6", description: "R is huge burst. Can 100-0 squishies." },
      { time: "Luden's", description: "Damage becomes very threatening." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Luden's Tempest", "Shadowflame", "Rabadon's Deathcap"],
      situational: ["Zhonya's Hourglass", "Void Staff", "Morellonomicon", "Banshee's Veil"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Poke with Q constantly. Zone with sphere threat. Look for E stuns.", mid: "Threaten R burst. Zone in teamfights. Pick off isolated targets." },
    teamfighting: "E stun priority targets, R whoever you can delete. Stay safe, you're immobile.",
    matchupTips: { hard: "Fizz, Zed, and Kassadin can dodge your skillshots and burst you.", easy: "You beat Veigar, Viktor, and Orianna in range and burst." }
  },

  Yasuo: {
    difficulty: "Hard",
    role: "Mid",
    damageType: "Physical",
    playstyle: "Crit Fighter / Windwall Master",
    description: "Yasuo is a melee carry with infinite dashes and windwall. He scales incredibly well with crit and can outplay any champion with proper mechanics. High skill ceiling but rewarding when mastered.",
    strengths: ["Windwall blocks all projectiles", "Infinite dashes", "Great scaling", "High outplay potential", "0/10 power spike meme"],
    weaknesses: ["Hard to master", "Weak to CC", "Squishy early", "Needs knockups for R", "Feast or famine"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q for damage and tornado. E for dashing. W for windwall." },
    combos: [
      { name: "Trade", keys: "E → Q → AA → E out", description: "E in, Q, auto, E to minion out." },
      { name: "All-in", keys: "E → Q (tornado) → R → Q → AA → AA", description: "Stack Q, E in, tornado, R, burst." },
      { name: "Beyblade", keys: "E → Q → Flash", description: "E-Q, Flash to change tornado direction." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "E-Q combo is strong." },
      { time: "Level 6", description: "R adds huge burst if you have knockup." },
      { time: "2 Items (100% crit)", description: "You're now a real champion. Damage is insane." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Infinity Edge", "Blade of the Ruined King"],
      situational: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Immortal Shieldbow"],
      boots: ["Berserker's Greaves", "Plated Steelcaps"]
    },
    lanePhase: { early: "Farm safely. Trade with E-Q. Don't int for tornado knockups.", mid: "Look for picks with tornado. Split push. Get your 2 item spike." },
    teamfighting: "Wait for teammate knockup, or land your tornado. R in, burst, windwall enemy skills.",
    matchupTips: { hard: "Pantheon, Renekton, and Annie have point-click CC that destroys you.", easy: "You beat Lux, Xerath, and Ahri. Windwall their abilities, all-in." }
  },

  Yone: {
    difficulty: "Medium",
    role: "Mid",
    damageType: "Mixed",
    playstyle: "Scaling Fighter / Dive Assassin",
    description: "Yone is Yasuo's brother with a safer lane phase. His E lets him engage and return, and his R is a massive teamfight engage. He scales incredibly well and can 1v9 with items.",
    strengths: ["E safety for trading", "R is massive engage", "Great scaling", "Mixed damage", "Can 1v9 late"],
    weaknesses: ["Weak early game", "E timing is crucial", "Needs to scale", "CC shuts him down", "Can be punished in E"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → W → E", explanation: "Q for damage and knockup. W for shield and damage. E for trading." },
    combos: [
      { name: "Trade", keys: "E → Q → W → AA → AA → E back", description: "E in, Q, W shield, autos, E back to safety." },
      { name: "All-in", keys: "E → Q3 → R → Q → W → AA → E back", description: "E, tornado, R, full combo, E back if needed." },
      { name: "Engage", keys: "Q3 → Flash → R → E", description: "Tornado, Flash R for surprise engage." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full combo available for trading." },
      { time: "Level 6", description: "R adds huge engage and burst." },
      { time: "2 Items (100% crit)", description: "Damage becomes insane." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Kraken Slayer", "Infinity Edge", "Blade of the Ruined King"],
      situational: ["Death's Dance", "Guardian Angel", "Maw of Malmortius", "Wit's End"],
      boots: ["Berserker's Greaves", "Plated Steelcaps"]
    },
    lanePhase: { early: "E trade safely. Farm for 2 items. Don't overcommit.", mid: "Look for R engages. Split push. Scale to your spike." },
    teamfighting: "Flank with E-R combo. Hit multiple people with R. E back if you need to escape.",
    matchupTips: { hard: "Pantheon, Renekton, and Sett can punish your E timing.", easy: "You beat Lux, Xerath, and Veigar. You outscale and E makes you safe." }
  },

  Zed: {
    difficulty: "Hard",
    role: "Mid",
    damageType: "Physical",
    playstyle: "AD Assassin / Shadow Master",
    description: "Zed is the iconic AD assassin with shadow clones. His R makes him untargetable and applies death mark. High skill ceiling with shadow management but can delete any squishy instantly.",
    strengths: ["High burst damage", "R untargetability", "Great split push", "Shadow outplay potential", "Can kill anyone"],
    weaknesses: ["Countered by Zhonya's", "High skill ceiling", "Weak to tanks", "Needs to snowball", "Falls off late in teamfights"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for poke and burst. E second for slow. W for shadow." },
    combos: [
      { name: "Poke", keys: "W → E → Q", description: "W shadow, E slow, Q poke through shadow." },
      { name: "All-in", keys: "R → E → Q → AA → R back", description: "R in, burst, R back to safety." },
      { name: "Triple Q", keys: "W → R → Q (3 shurikens)", description: "Position for triple Q hit." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "W-E-Q poke combo available." },
      { time: "Level 6", description: "R is massive. Can solo kill anyone." },
      { time: "1 Item", description: "Eclipse spike. Very lethal." }
    ],
    itemBuild: {
      starter: ["Long Sword", "Refillable Potion"],
      core: ["Eclipse", "Youmuu's Ghostblade", "Serylda's Grudge"],
      situational: ["Maw of Malmortius", "Edge of Night", "Guardian Angel", "Black Cleaver"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    lanePhase: { early: "Farm with Q. Poke with W-E-Q. Save W for escapes if needed.", mid: "Roam and assassinate. R carries, win game." },
    teamfighting: "Flank, R the carry, kill them, R out or die with them. Split push if teamfight is bad.",
    matchupTips: { hard: "Malzahar, Lissandra, and Pantheon have point-click CC that stops you.", easy: "You beat Lux, Xerath, and Veigar. They have no escapes." }
  },

  Viktor: {
    difficulty: "Medium",
    role: "Mid",
    damageType: "Magic",
    playstyle: "Scaling Control Mage",
    description: "Viktor is a scaling mage who upgrades abilities with his Hexcore. He has weak early game but becomes a teamfight monster with zone control and burst. His E laser is his primary damage tool.",
    strengths: ["Amazing scaling", "Great waveclear", "Zone control with W and R", "High DPS late", "Hexcore upgrades"],
    weaknesses: ["Weak early game", "Immobile", "Needs to scale", "First back is awkward", "Vulnerable to dives"],
    summonerSpells: ["Flash", "Barrier"],
    skillOrder: { order: "E → Q → W", explanation: "E max for waveclear and damage. Q second for trading. W for zone." },
    combos: [
      { name: "Trade", keys: "Q → AA → E", description: "Q for shield and empowered auto, E for damage." },
      { name: "Full Combo", keys: "W → R → E → Q → AA", description: "W zone, R on them, E laser, Q, auto." },
      { name: "Waveclear", keys: "E (through wave)", description: "Upgraded E one-shots waves." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "E-Q trade available." },
      { time: "Hexcore E Upgrade", description: "E one-shots waves. Huge spike." },
      { time: "2 Items", description: "You're now a damage threat." }
    ],
    itemBuild: {
      starter: ["Doran's Ring", "Health Potion x2"],
      core: ["Luden's Tempest", "Shadowflame", "Rabadon's Deathcap"],
      situational: ["Zhonya's Hourglass", "Void Staff", "Banshee's Veil", "Lich Bane"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    lanePhase: { early: "Farm safely. Survive. Rush Hexcore E upgrade.", mid: "Waveclear and scale. Group for teamfights." },
    teamfighting: "R for zone damage, W to zone, E for poke and burst. Stay safe and DPS.",
    matchupTips: { hard: "Fizz, Zed, and Kassadin can dive you easily.", easy: "You outscale Veigar, Orianna, and Syndra." }
  }
};

export default midGuides;
