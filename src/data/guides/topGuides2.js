// Champion Guides Part 2 - More Top Laners + Junglers

export const championGuides2 = {
  // More TOP LANERS
  Kennen: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Magic",
    playstyle: "Ranged Poke / Teamfight Engage",
    description: "Kennen is a ranged AP top laner who dominates melee matchups and brings massive teamfight CC with his ultimate. He's great at poking and then engaging with Zhonya's for devastating wombo combos.",
    strengths: ["Ranged lane bully", "Massive teamfight R", "Good engage with Flash-R", "Energy-based (no mana)", "Safe laning"],
    weaknesses: ["Weak to sustain", "Falls off 1v1 late", "Team reliant after lane", "Squishy", "R dependent"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for poke. W second for mark proc. E for utility." },
    combos: [
      { name: "Poke Combo", keys: "Q → AA → W", description: "Q hit, auto for second mark, W for stun and damage." },
      { name: "All-in", keys: "E → R → W → Zhonya's → Q", description: "E in, R for stuns, W to proc marks, Zhonya's during R." },
      { name: "Flash Engage", keys: "Flash → R → E → W → Zhonya's", description: "Flash R for surprise engage, E through team, W, Zhonya's." }
    ],
    powerSpikes: [
      { time: "Level 1", description: "Q poke is strong vs melees." },
      { time: "Level 6", description: "R gives kill potential and teamfight power." },
      { time: "Hextech Rocketbelt", description: "Extra engage range for R." },
      { time: "Zhonya's", description: "Core item - R + Zhonya's is the combo." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Hextech Rocketbelt", "Zhonya's Hourglass", "Shadowflame"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Morellonomicon"],
      boots: ["Sorcerer's Shoes", "Plated Steelcaps"]
    },
    lanePhase: { early: "Poke with Q and autos. Deny CS. Don't push too hard without vision.", mid: "Look for TP plays or 2v2 skirmishes. Your R can turn fights." },
    teamfighting: "Wait for good R opportunity. Flash-R multiple enemies, Zhonya's during R. You can single-handedly win teamfights with good R.",
    matchupTips: { hard: "Irelia, Sylas, and Vladimir can sustain or all-in you.", easy: "You bully Darius, Garen, and Sett. They can't reach you." }
  },

  Kled: {
    difficulty: "Medium",
    role: "Top",
    damageType: "Physical",
    playstyle: "Aggressive Diver / Remount Fighter",
    description: "Kled is an aggressive top laner with a unique remount mechanic. He's always looking for fights and excels at diving with his team. His ultimate provides massive engage for the entire team.",
    strengths: ["Remount gives second life", "R is amazing engage", "Very aggressive lane", "Good dive potential", "Snowballs hard"],
    weaknesses: ["Weak when dismounted", "Struggles if behind", "Kited easily", "No escape when dismounted", "Falls off late"],
    summonerSpells: ["Flash", "Ignite"],
    skillOrder: { order: "Q → W → E", explanation: "Q for damage and pull. W for burst. E for engage." },
    combos: [
      { name: "Basic Trade", keys: "E → AA → W → Q → AA → AA → AA → E out", description: "E in, W burst, Q to pull, auto spam, E out." },
      { name: "All-in", keys: "R → E → Q → W → E → AAs", description: "R engage, full combo, chain E through them." }
    ],
    powerSpikes: [
      { time: "Level 2", description: "E-Q gives strong trading." },
      { time: "Level 6", description: "R is amazing engage tool." },
      { time: "1 Item", description: "Eclipse or Goredrinker spike." }
    ],
    itemBuild: {
      starter: ["Doran's Blade", "Health Potion"],
      core: ["Eclipse", "Black Cleaver", "Death's Dance"],
      situational: ["Sterak's Gage", "Maw of Malmortius", "Gargoyle Stoneplate", "Serylda's Grudge"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    lanePhase: { early: "Be aggressive. Your level 1-3 is very strong. Fight for every CS.", mid: "Look for R engages with jungler. You're a teamfight champion now." },
    teamfighting: "R to engage on backline. Remount mechanic gives you survivability. Always be looking for R angles.",
    matchupTips: { hard: "Fiora, Kayle, and Quinn can kite or outscale you.", easy: "You beat Gangplank, Jayce, and Kennen. They can't handle your aggression." }
  },

  Malphite: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Magic",
    playstyle: "Tank / Teamfight Engage",
    description: "Malphite is a simple but effective tank who counters AD champions and provides one of the best engage ultimates in the game. His armor scaling makes him a nightmare for AD teams.",
    strengths: ["Unstoppable R engage", "Counters AD champions", "Simple to play", "Great teamfight", "Tanky with passive shield"],
    weaknesses: ["Weak to AP damage", "Useless without R", "Mana problems early", "Poor sustain", "Can be bullied early"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: { order: "Q → E → W (Poke) or E → W → Q (Tank)", explanation: "Q max for poke. E max against AA champs." },
    combos: [
      { name: "Engage", keys: "R → E → W → Q", description: "R knockup, E attack speed slow, W damage, Q slow fleeing enemies." },
      { name: "Flash R", keys: "Flash → R", description: "Flash extends R range for surprise engage." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R is game-changing. Massive engage tool." },
      { time: "1 Armor Item", description: "Against AD, you become very tanky." },
      { time: "Level 11", description: "R rank 2 with lower cooldown." }
    ],
    itemBuild: {
      starter: ["Corrupting Potion"],
      core: ["Sunfire Aegis", "Thornmail", "Force of Nature"],
      situational: ["Frozen Heart", "Randuin's Omen", "Gargoyle Stoneplate", "Abyssal Mask"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    lanePhase: { early: "Poke with Q. Farm safely. Don't fight without R.", mid: "Look for R engages. TP bot for plays. You're a teamfight champion." },
    teamfighting: "Your job is simple - R the backline. Unstoppable engage, huge knockup. Flash R if needed. One good R wins fights.",
    matchupTips: { hard: "Darius, Gwen, and Sylas are AP or sustain champs who beat you.", easy: "You destroy Jayce, Quinn, and Tryndamere. They're all AD and you stack armor." }
  },

  Mordekaiser: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Magic",
    playstyle: "AP Juggernaut / Isolation Fighter",
    description: "Mordekaiser is an AP juggernaut who excels at isolating and killing single targets with his R. He's simple but effective, with strong sustain and damage that scales well.",
    strengths: ["R isolates priority targets", "Great sustain with passive", "AP bruiser is hard to itemize", "Simple to play", "Good scaling"],
    weaknesses: ["Kitable", "QSS removes R", "No mobility", "Predictable", "Weak to %HP damage"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for damage. E second for pull. W for shield." },
    combos: [
      { name: "Basic Trade", keys: "E → Q → AA → AA → AA", description: "Pull in, Q damage, passive procs." },
      { name: "All-in", keys: "R → E → Q → AA spam", description: "Ult them, pull, Q, run them down in Death Realm." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full combo available." },
      { time: "Level 6", description: "R changes everything. 1v1 machine." },
      { time: "Riftmaker", description: "Sustain and damage spike." }
    ],
    itemBuild: {
      starter: ["Doran's Shield", "Health Potion"],
      core: ["Riftmaker", "Nashor's Tooth", "Rylai's Crystal Scepter"],
      situational: ["Zhonya's Hourglass", "Spirit Visage", "Thornmail", "Cosmic Drive"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    lanePhase: { early: "Look for E-Q trades. Your passive gives sustain. You win extended trades.", mid: "R their jungler in 2v1s. Split push is strong. You can 1v1 almost anyone." },
    teamfighting: "R their carry or fed member. Kill them in Death Realm, then rejoin fight with their stats.",
    matchupTips: { hard: "Fiora, Vayne, and Gangplank have %HP or can kite you out.", easy: "You beat Sett, Garen, and Darius. R them and win the 1v1." }
  },

  Nasus: {
    difficulty: "Easy",
    role: "Top",
    damageType: "Physical",
    playstyle: "Infinite Scaling / Stack Monster",
    description: "Nasus is the ultimate scaling champion who becomes unstoppable with enough Q stacks. He's weak early but patient farming leads to a late-game monster who two-shots towers and champions alike.",
    strengths: ["Infinite Q scaling", "Incredible late game", "Simple to play", "Great sustain passive", "Tower destroyer"],
    weaknesses: ["Very weak early game", "Easily kited", "Needs to farm stacks", "Can be frozen on", "Falls off vs %HP damage"],
    summonerSpells: ["Flash", "Teleport"],
    skillOrder: { order: "Q → E → W", explanation: "Q always max for stacks. E for waveclear vs hard lanes. W for slow." },
    combos: [
      { name: "Trade", keys: "W → Q → AA → E → Q", description: "Slow, Q, stack passive, E, Q again if available." },
      { name: "All-in", keys: "R → W → E → Q → Q → Q", description: "R for stats, slow them, E armor shred, Q spam." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R gives huge stats. Can start fighting." },
      { time: "200 Stacks", description: "You start hurting. Around 12-15 minutes ideally." },
      { time: "Sheen", description: "Q hits like a truck with Sheen." },
      { time: "400+ Stacks", description: "You two-shot squishies and melt towers." }
    ],
    itemBuild: {
      starter: ["Doran's Shield", "Health Potion"],
      core: ["Divine Sunderer", "Frozen Heart", "Spirit Visage"],
      situational: ["Force of Nature", "Thornmail", "Gargoyle Stoneplate", "Dead Man's Plate"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    lanePhase: { early: "Farm. That's it. Stack Q. Don't fight. Let them push to you.", mid: "Keep stacking. Start fighting when you have 200+ stacks and Sheen." },
    teamfighting: "You're a split pusher, not a teamfighter. Draw pressure in side lanes. If you must teamfight, run at carries with W slow.",
    matchupTips: { hard: "Darius, Illaoi, and Olaf bully you too hard. Play safe and outscale.", easy: "You outscale Kayle, Vladimir, and Cho'Gath. Just survive and you win." }
  },

  // JUNGLERS START HERE
  Amumu: {
    difficulty: "Easy",
    role: "Jungle",
    damageType: "Magic",
    playstyle: "Tank / Teamfight Engage",
    description: "Amumu is a beginner-friendly tank jungler with one of the best teamfight ultimates in the game. He's easy to play but very effective, with multiple engage options and consistent damage.",
    strengths: ["Double Q for engage", "R is massive AoE stun", "Easy to play", "Good clear speed", "Strong teamfights"],
    weaknesses: ["Weak early dueling", "Easily invaded", "Relies on R", "Needs team follow-up", "No escape"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "W → Q → E", explanation: "W max for clear. Q second for lower cooldown. E last." },
    combos: [
      { name: "Gank", keys: "Q → AA → E → W (toggle)", description: "Q engage, auto, E damage, W for constant damage." },
      { name: "Teamfight", keys: "Q → Q → R → E → W", description: "Double Q into R for massive CC chain." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full clear, ready to gank." },
      { time: "Level 6", description: "R is game-changing for fights and ganks." },
      { time: "1 Item", description: "Sunfire makes your clear and fights better." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Sunfire Aegis", "Thornmail", "Abyssal Mask"],
      situational: ["Randuin's Omen", "Force of Nature", "Gargoyle Stoneplate", "Frozen Heart"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    junglePath: "Red → Krugs → Raptors → Wolves → Blue → Gromp → Gank. Or Blue → Gromp → Wolves → Raptors → Red → Krugs → Gank.",
    ganking: "Q for engage. Save second Q for flash. R for guaranteed kills or multi-person ganks.",
    teamfighting: "Wait for good R angle. Flash R if needed. Hit 3+ people and you win the fight."
  },

  Diana: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Magic",
    playstyle: "AP Assassin / Diver",
    description: "Diana is an AP assassin jungler who excels at diving backlines with her R. She has fast clear speed and scales well into a teamfight monster with her massive AoE ultimate.",
    strengths: ["Fast jungle clear", "Great scaling", "Massive R teamfight", "Good burst", "Flexible build paths"],
    weaknesses: ["Weak early dueling", "All-in only", "No escape after engage", "Needs to hit Q", "Falls off if behind"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "W → Q → E", explanation: "W max for clear speed. Q second for damage. E for pull utility." },
    combos: [
      { name: "Basic", keys: "Q → E → E → W → AA", description: "Q mark, double E to target, W shield, auto for passive." },
      { name: "All-in", keys: "Q → E → E → R → W", description: "Q mark, E in, R for damage plus pull, W for shield." },
      { name: "Teamfight", keys: "E → Flash → R", description: "E into team, Flash to reposition, R for massive damage." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full combo available. Can gank." },
      { time: "Level 6", description: "R adds huge burst. Strong ganks." },
      { time: "Nashor's Tooth", description: "Clear speed and damage spike." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Nashor's Tooth", "Shadowflame", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Lich Bane"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    junglePath: "Blue → Gromp → Wolves → Raptors → Red → Krugs for full clear. Or 3-camp into gank.",
    ganking: "Q for mark, E twice for gap close. R for burst. Good at diving with Zhonya's.",
    teamfighting: "Look for multi-person R. E → Flash → R on grouped enemies. Zhonya's after R to survive."
  },

  Elise: {
    difficulty: "Hard",
    role: "Jungle",
    damageType: "Magic",
    playstyle: "Early Game Assassin / Tower Diver",
    description: "Elise is an early game focused jungler who excels at ganking and tower diving. Her human E cocoon sets up ganks, and spider form gives execution damage. She falls off late but dominates early.",
    strengths: ["Amazing early ganks", "Great tower dives with spider E", "Strong 1v1 early", "Versatile kit", "Can invade well"],
    weaknesses: ["Falls off hard late", "Needs to snowball", "High skill ceiling", "E is crucial", "Weak teamfighting"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "W → Q → E", explanation: "W for clear and burst. Q second for damage. E for stun duration." },
    combos: [
      { name: "Gank", keys: "Human E → W → Q → R → Q → W → AA", description: "Cocoon, W spider, Q for %HP, swap to spider, execute with spider Q." },
      { name: "Dive", keys: "Human combo → Spider E (drop aggro)", description: "Full damage, then spider E to drop tower aggro." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Strong ganker. Cocoon is deadly." },
      { time: "Level 6", description: "Stats increase. Good for diving." },
      { time: "1 Item", description: "Night Harvester or Rocketbelt for burst." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Hextech Rocketbelt", "Shadowflame", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Morellonomicon"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    junglePath: "3-camp into gank: Red → Blue → Gromp → Gank, or Blue → Gromp → Red → Gank.",
    ganking: "Human E (cocoon) is everything. Hit cocoon = kill. Miss cocoon = failed gank.",
    teamfighting: "Not your strength. Look to pick before fights. In teamfight, cocoon priority target, burst, spider E out."
  },

  Evelynn: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Magic",
    playstyle: "Invisible Assassin / Pick Champion",
    description: "Evelynn is a unique assassin who becomes permanently invisible at level 6. She excels at picking off isolated targets and has massive execute damage with her R. Weak early but terrifying mid-late.",
    strengths: ["Permanent invisibility post-6", "Massive burst damage", "R execute is huge", "Great at picks", "Scales well"],
    weaknesses: ["Very weak pre-6", "Easily invaded early", "Needs to charm for damage", "Control wards counter her", "No CC without charm"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for damage. E second for burst. W for charm setup." },
    combos: [
      { name: "Full Combo", keys: "W (wait for charm) → E → Q → Q → Q → R", description: "W to charm, E for damage, Q spam, R execute." },
      { name: "Quick Burst", keys: "E → Q → Q → R", description: "Skip charm for fast burst on squishy." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "MASSIVE spike. Permanent camo. You're a champion now." },
      { time: "1 Item", description: "Rocketbelt or Night Harvester. Burst increases significantly." },
      { time: "Rabadon's", description: "Damage becomes obscene." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Hextech Rocketbelt", "Shadowflame", "Rabadon's Deathcap"],
      situational: ["Void Staff", "Lich Bane", "Banshee's Veil", "Mejai's Soulstealer"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    junglePath: "Full clear to 6: Blue → Gromp → Wolves → Raptors → Red → Krugs. Repeat until 6.",
    ganking: "Pre-6: Very weak, only gank overextended lanes. Post-6: Walk behind enemy, W, full combo, kill.",
    teamfighting: "Not a teamfighter. Look for picks before fights. In teamfight, flank and assassinate carries."
  },

  Graves: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Ranged Bruiser / Skirmisher",
    description: "Graves is a ranged jungler who plays like a bruiser. His passive gives armor from autos, making him deceptively tanky. He excels at skirmishing and invading, with strong clear and dueling.",
    strengths: ["Very tanky for ranged", "Fast clear speed", "Strong dueling", "Good invades", "Burst damage"],
    weaknesses: ["Blocked by minions", "Short range", "Reload mechanic", "Falls off vs tanks", "Team needs AP"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for damage. E second for dash and armor stacks. W for slow." },
    combos: [
      { name: "Burst", keys: "E → AA → Q → AA → R", description: "E in, auto, Q, auto, R execute." },
      { name: "Wall Combo", keys: "Q → R (against wall)", description: "Q against wall returns immediately for double damage." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Strong dueling and clear." },
      { time: "Level 6", description: "R adds burst. Can kill anyone 1v1." },
      { time: "Eclipse", description: "Damage and sustain spike." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Eclipse", "Black Cleaver", "Bloodthirster"],
      situational: ["Maw of Malmortius", "Death's Dance", "Serylda's Grudge", "Edge of Night"],
      boots: ["Plated Steelcaps", "Mercury's Treads"]
    },
    junglePath: "Red → Krugs → Raptors → Wolves → Blue → Gromp. Fast full clear.",
    ganking: "W for slow, E for gap close, burst damage. Not the best ganker but strong invader.",
    teamfighting: "Play like an ADC but tankier. Kite, use E for repositioning and armor, Q-R for burst."
  },

  Hecarim: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Diver / Engage Tank",
    description: "Hecarim is a mobile diver who excels at running down enemies. His E gives massive movement speed, and his R fears enemies. He snowballs hard and is great at ganking.",
    strengths: ["Amazing ganks with E", "R is great engage", "Scales with movement speed", "Good clear", "Snowballs hard"],
    weaknesses: ["Weak if behind", "Easily kited without E", "Falls off late", "Needs to snowball", "Blue buff dependent"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for damage. E second for speed. W for sustain." },
    combos: [
      { name: "Gank", keys: "E → R → Q → Q → Q → W", description: "E speed, R fear, Q spam, W for healing." },
      { name: "Engage", keys: "E → Flash → R", description: "E for speed, Flash extends, R for massive fear." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "E makes ganks very strong." },
      { time: "Level 6", description: "R adds fear for ganks and teamfights." },
      { time: "Trinity Force", description: "Damage and speed spike." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Trinity Force", "Death's Dance", "Sterak's Gage"],
      situational: ["Maw of Malmortius", "Spirit Visage", "Dead Man's Plate", "Force of Nature"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    junglePath: "Blue → Gromp → Wolves → Raptors → Red → Gank. Or full clear.",
    ganking: "E from fog, run at them with massive speed. R to fear, Q spam. Very hard to escape.",
    teamfighting: "Flank and E-R into backline. Fear the carries, Q spam, W for healing. You're a diver."
  },

  Kayn: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Assassin (Blue) / Bruiser (Red)",
    description: "Kayn is unique - he transforms based on combat. Darkin (Red) is a drain tank bruiser, Shadow Assassin (Blue) is a squishy burst assassin. Pick form based on enemy team comp.",
    strengths: ["Two playstyles in one", "Wall walking is amazing", "Fast clear", "Great scaling", "Versatile"],
    weaknesses: ["Weak before form", "Takes time to transform", "Blue is squishy", "Red needs sustained fights", "Form can be forced wrong"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → W → E", explanation: "Q max always. W second for slow/heal. E for utility." },
    combos: [
      { name: "Blue Burst", keys: "W → Q → AA → R", description: "W slow, Q through, auto, R execute." },
      { name: "Red Sustain", keys: "W → Q → AA → R → AA → Q → W", description: "W knock-up, Q, R for healing, continue fighting." }
    ],
    powerSpikes: [
      { time: "Form Unlock", description: "MASSIVE spike. You become a real champion." },
      { time: "Level 6", description: "R adds damage and utility." },
      { time: "1 Item", description: "Eclipse (Blue) or Goredrinker (Red)." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Eclipse (Blue)", "Goredrinker (Red)", "Black Cleaver", "Death's Dance"],
      situational: ["Muramana", "Serylda's Grudge", "Maw of Malmortius", "Sterak's Gage"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    junglePath: "Raptors → Red → Krugs → Wolves → Blue → Gromp. Fast AoE clear.",
    ganking: "E through walls for ganks. W for slow/knockup. Q for damage. R to follow flashes.",
    teamfighting: "Blue: Assassinate backline, R out. Red: Frontline and drain tank, R for healing."
  },

  KhaZix: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Assassin / Isolation Hunter",
    description: "Kha'Zix is an assassin who deals massive damage to isolated targets. His evolutions at 6/11/16 let you customize your playstyle. He excels at picking off lone enemies and snowballing.",
    strengths: ["Isolation damage is insane", "Evolutions add power", "Great mobility evolved E", "Strong invades", "Snowballs hard"],
    weaknesses: ["Weak in teamfights", "Needs isolation", "Falls off if behind", "Squishy", "Control wards hurt R stealth"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for isolation damage. W second for poke/heal. E for mobility." },
    combos: [
      { name: "Isolated Burst", keys: "Jump → AA → Q → W → AA", description: "E in, auto, Q isolated, W slow, auto." },
      { name: "Reset", keys: "E → Q → AA → evolvedE (reset)", description: "E in, kill with Q, E resets for escape or next target." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Can invade and duel." },
      { time: "Level 6 (Evolution)", description: "Q or E evolve. Big spike." },
      { time: "Level 11 (2nd Evolve)", description: "Usually evolve E for resets." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Eclipse", "Edge of Night", "Serylda's Grudge"],
      situational: ["Maw of Malmortius", "Guardian Angel", "Death's Dance", "Muramana"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    junglePath: "Red → Krugs → Raptors → Blue → Gromp → Wolves or invade.",
    ganking: "Look for isolated targets. E in from fog, Q for burst. W to slow. Don't gank grouped lanes.",
    teamfighting: "Wait for fights to start, enemies to spread. Find isolated backline, assassinate, E out/reset."
  },

  LeeSin: {
    difficulty: "Hard",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Early Game Playmaker",
    description: "Lee Sin is the most mechanically intensive jungler with the highest skill ceiling. His early game is extremely strong, and he can make game-winning plays with InSec kicks. Falls off late but can snowball games.",
    strengths: ["Incredible early game", "High outplay potential", "InSec is game-winning", "Strong invades", "Very mobile"],
    weaknesses: ["Falls off hard late", "High skill ceiling", "Energy management", "Needs to snowball", "Unreliable if behind"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for damage. W second for shield. E for slow." },
    combos: [
      { name: "Basic", keys: "Q → Q → AA → E → AA → AA", description: "Q hit, Q follow, auto, E, auto weave." },
      { name: "InSec", keys: "Q → Q → Ward → W → R", description: "Q to target, ward behind, W to ward, R them to team." },
      { name: "Flash InSec", keys: "Q → Q → R → Flash", description: "Q to target, R, Flash behind to redirect kick." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Very strong. Can invade, duel, gank." },
      { time: "Level 6", description: "R adds burst and utility. InSec unlocked." },
      { time: "1 Item", description: "Eclipse or Goredrinker spike." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Eclipse", "Black Cleaver", "Death's Dance"],
      situational: ["Maw of Malmortius", "Sterak's Gage", "Guardian Angel", "Edge of Night"],
      boots: ["Ionian Boots of Lucidity", "Plated Steelcaps"]
    },
    junglePath: "Red → Blue → Gromp → Gank or invade. 3-camp focused.",
    ganking: "Q from fog, Q follow, E slow, R to kick into team or away from safety.",
    teamfighting: "Look for InSec on carries. Otherwise, peel with R. Not great in teamfights late - make early plays."
  },

  MasterYi: {
    difficulty: "Easy",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Hypercarry / Reset Assassin",
    description: "Master Yi is a hypercarry assassin who becomes unstoppable with items. His Q makes him untargetable, and his R makes him immune to slows. Easy to play but easily countered by CC.",
    strengths: ["Insane damage late game", "Q untargetability", "R immune to slows", "Easy to play", "Pentakill machine"],
    weaknesses: ["Hard countered by CC", "Weak early game", "Needs to scale", "Easily invaded", "Predictable"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → E → W", explanation: "Q max for damage and cooldown. E second for true damage. W for sustain/reset." },
    combos: [
      { name: "Basic", keys: "R → Q → AA → E → AA → AA → Q", description: "R for speed, Q in, auto, E for true damage, auto spam, Q again." },
      { name: "Dodge with Q", keys: "(Wait for CC) → Q", description: "Q at right time to dodge key abilities." }
    ],
    powerSpikes: [
      { time: "Level 6", description: "R makes ganks much better." },
      { time: "BOTRK", description: "Huge spike. Can duel anyone." },
      { time: "2 Items", description: "You're now a threat. Can carry fights." },
      { time: "3+ Items", description: "Pentakill machine. Unstoppable." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Blade of the Ruined King", "Kraken Slayer", "Guinsoo's Rageblade"],
      situational: ["Wit's End", "Death's Dance", "Guardian Angel", "Maw of Malmortius"],
      boots: ["Berserker's Greaves", "Mercury's Treads"]
    },
    junglePath: "Full clear: Blue → Gromp → Wolves → Raptors → Red → Krugs. Repeat until items.",
    ganking: "Wait for CC to be used, then R + Q in. Otherwise, ganks are weak. Farm to scale.",
    teamfighting: "Wait for CC to be blown. Q in when safe, R for chase, clean up with resets."
  },

  Nidalee: {
    difficulty: "Hard",
    role: "Jungle",
    damageType: "Magic",
    playstyle: "Early Game AP Poke/Assassin",
    description: "Nidalee is a high skill ceiling jungler with poke and execute. Her human Q spear into cougar form is deadly. She dominates early but falls off hard and requires perfect mechanics to be effective.",
    strengths: ["Strong early invades", "Great poke with spear", "Execute damage", "Fast clear", "High skill ceiling"],
    weaknesses: ["Falls off late", "Useless if spear misses", "Squishy", "Needs to snowball", "Hard to master"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Cougar Q → Human Q → W → E", explanation: "Cougar Q for execute. Human Q for poke. Level all forms." },
    combos: [
      { name: "Full Combo", keys: "Human Q → Human W → R → Cougar W → Cougar E → Cougar Q", description: "Spear, trap, pounce, swipe, execute." },
      { name: "Execute", keys: "Land spear → R → W → Q", description: "Hunt mark from spear, pounce, execute with Q." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Full clear done, can invade." },
      { time: "Level 6", description: "More forms level up. Damage spike." },
      { time: "1 Item", description: "Night Harvester or Lich Bane spike." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Night Harvester", "Lich Bane", "Zhonya's Hourglass"],
      situational: ["Rabadon's Deathcap", "Void Staff", "Banshee's Veil", "Shadowflame"],
      boots: ["Sorcerer's Shoes", "Mercury's Treads"]
    },
    junglePath: "Blue → Gromp → Wolves → Raptors → Red → Krugs. Fast AoE clear.",
    ganking: "Land spear from fog. If hit, full combo kills. If miss, gank fails. Very spear dependent.",
    teamfighting: "Poke with spears from range. Cougar in to execute low targets. Don't go in without spear mark."
  },

  Viego: {
    difficulty: "Medium",
    role: "Jungle",
    damageType: "Physical",
    playstyle: "Skirmisher / Possession Fighter",
    description: "Viego is a unique skirmisher who possesses enemy champions when they die. This lets him chain kills in teamfights. He has great sustain and is strong in extended fights.",
    strengths: ["Possession resets are broken", "Good sustain", "Strong skirmishing", "Fun and unique kit", "Scales well"],
    weaknesses: ["Needs resets to shine", "Squishy without possessions", "Weak early clear", "Can be burst down", "Possession can be awkward"],
    summonerSpells: ["Flash", "Smite"],
    skillOrder: { order: "Q → W → E", explanation: "Q max for damage and healing. W second for stun. E for camo." },
    combos: [
      { name: "Basic", keys: "E (camo) → W → Q → AA → AA", description: "E for approach, W stun, Q, auto spam." },
      { name: "Reset", keys: "Kill → Possess → use their kit → R out", description: "Get a kill, possess, use abilities, R to next target." }
    ],
    powerSpikes: [
      { time: "Level 3", description: "Can gank with W stun." },
      { time: "Level 6", description: "R adds execute and mobility." },
      { time: "BOTRK", description: "Core item spike. Sustain and damage." }
    ],
    itemBuild: {
      starter: ["Gustwalker Hatchling"],
      core: ["Blade of the Ruined King", "Trinity Force", "Death's Dance"],
      situational: ["Sterak's Gage", "Maw of Malmortius", "Guardian Angel", "Wit's End"],
      boots: ["Berserker's Greaves", "Plated Steelcaps"]
    },
    junglePath: "Red → Krugs → Raptors → Wolves → Blue → Gromp. Standard clear.",
    ganking: "E for camo approach, W for stun, Q and autos. R to execute.",
    teamfighting: "Look for resets. Kill one, possess, kill another, possess. Chain possessions win fights."
  }
};

export default championGuides2;
