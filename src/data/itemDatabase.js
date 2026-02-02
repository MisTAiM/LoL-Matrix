// =====================================================
// COMPLETE ITEM DATABASE & SITUATIONAL BUILDING SYSTEM
// Professional-grade item recommendations
// =====================================================

// All current Season 14 items with stats, costs, and use cases
export const ITEMS_DATABASE = {
  // ==================== FIGHTER/BRUISER ITEMS ====================
  fighter: {
    trinityForce: {
      id: 'trinityForce', name: 'Trinity Force', cost: 3333, 
      stats: { ad: 35, as: 35, hp: 300, ah: 20 },
      passive: 'Spellblade: After using ability, next attack deals bonus damage',
      bestOn: ['Jax', 'Camille', 'Irelia', 'Hecarim', 'Vi', 'Nasus', 'Yorick'],
      when: 'Need mixed damage, mobility, and dueling power',
      vsComp: ['STANDARD', 'SQUISHY', 'MIXED']
    },
    sunderedSky: {
      id: 'sunderedSky', name: 'Sundered Sky', cost: 3100,
      stats: { ad: 55, hp: 300, ah: 15 },
      passive: 'First hit on champion crits and heals you',
      bestOn: ['Aatrox', 'Riven', 'Renekton', 'Pantheon', 'Lee Sin', 'Jarvan IV'],
      when: 'Need sustain and burst in fights',
      vsComp: ['DIVE', 'SKIRMISH', 'STANDARD']
    },
    blackCleaver: {
      id: 'blackCleaver', name: 'Black Cleaver', cost: 3100,
      stats: { ad: 55, hp: 350, ah: 20 },
      passive: 'Carve: Attacks shred 5% armor per stack (max 30%)',
      bestOn: ['Aatrox', 'Darius', 'Garen', 'Urgot', 'Pantheon', 'Riven'],
      when: 'Enemy has 2+ tanks/bruisers stacking armor',
      vsComp: ['TANK', 'BRUISER']
    },
    steraksGage: {
      id: 'steraksGage', name: "Sterak's Gage", cost: 3100,
      stats: { ad: 50, hp: 400 },
      passive: 'Lifeline: Shield when taking burst damage',
      bestOn: ['Darius', 'Irelia', 'Jax', 'Camille', 'Sett', 'Garen'],
      when: 'vs burst/assassin comps, need anti-burst',
      vsComp: ['DIVE', 'ASSASSIN', 'BURST']
    },
    deathsDance: {
      id: 'deathsDance', name: "Death's Dance", cost: 3300,
      stats: { ad: 55, armor: 45, ah: 15 },
      passive: 'Ignore Pain: Store damage as bleed. Heal on takedown',
      bestOn: ['Aatrox', 'Riven', 'Fiora', 'Irelia', 'Camille', 'Lee Sin'],
      when: 'vs AD heavy teams, need sustained fighting',
      vsComp: ['AD_HEAVY', 'BRUISER', 'STANDARD']
    },
    mawOfMalmortius: {
      id: 'mawOfMalmortius', name: 'Maw of Malmortius', cost: 2900,
      stats: { ad: 65, mr: 40, ah: 20 },
      passive: 'Lifeline: Magic shield when low HP + omnivamp',
      bestOn: ['Aatrox', 'Riven', 'Irelia', 'Jayce', 'Talon', 'Zed'],
      when: 'vs AP heavy/burst mage teams',
      vsComp: ['AP_HEAVY', 'BURST_MAGE', 'POKE']
    },
    ravenousHydra: {
      id: 'ravenousHydra', name: 'Ravenous Hydra', cost: 3300,
      stats: { ad: 70, ah: 20, omnivamp: 10 },
      passive: 'Cleave: AoE damage on attacks. Heals from damage',
      bestOn: ['Fiora', 'Riven', 'Camille', 'Kled', 'Tryndamere', 'Yasuo', 'Yone'],
      when: 'Need waveclear and sustain, ahead in lane',
      vsComp: ['STANDARD', 'SPLITPUSH']
    },
    titanicHydra: {
      id: 'titanicHydra', name: 'Titanic Hydra', cost: 3300,
      stats: { ad: 50, hp: 500, hpRegen: 100 },
      passive: 'Cleave: AoE damage scaling with HP',
      bestOn: ['Sett', 'Sion', 'Tahm Kench', 'Volibear', 'Warwick', 'Urgot'],
      when: 'Building HP tank/bruiser, need waveclear',
      vsComp: ['STANDARD', 'TANK', 'SPLITPUSH']
    },
    bladeOfRuinedKing: {
      id: 'botrk', name: 'Blade of the Ruined King', cost: 3200,
      stats: { ad: 40, as: 25, lifesteal: 10 },
      passive: 'Mist: Deals %current HP damage on-hit',
      bestOn: ['Irelia', 'Jax', 'Yasuo', 'Yone', 'Viego', 'Vayne', 'Kog\'Maw'],
      when: 'vs HP stackers, need anti-tank DPS',
      vsComp: ['TANK', 'HP_STACKING', 'BRUISER']
    }
  },

  // ==================== TANK ITEMS ====================
  tank: {
    sunfireAegis: {
      id: 'sunfireAegis', name: 'Sunfire Aegis', cost: 2700,
      stats: { hp: 350, armor: 50, mr: 50 },
      passive: 'Immolate: Burn nearby enemies',
      bestOn: ['Ornn', 'Sion', 'Shen', 'Zac', 'Amumu', 'Sejuani'],
      when: 'Default tank item, need AoE damage',
      vsComp: ['STANDARD', 'MIXED']
    },
    hollowRadiance: {
      id: 'hollowRadiance', name: 'Hollow Radiance', cost: 2850,
      stats: { hp: 350, mr: 60, ah: 10 },
      passive: 'Detonates like Tristana E, MR + waveclear',
      bestOn: ['Ornn', 'Maokai', 'Galio', 'Sion', 'Cho\'Gath'],
      when: 'vs AP heavy, need waveclear',
      vsComp: ['AP_HEAVY', 'POKE_MAGE']
    },
    jakShoIndomitable: {
      id: 'jakSho', name: "Jak'Sho, The Protean", cost: 3200,
      stats: { hp: 400, armor: 30, mr: 30 },
      passive: 'Voidborn: Gain stacking resists in combat',
      bestOn: ['Sion', 'Ornn', 'Cho\'Gath', 'Maokai', 'Zac'],
      when: 'vs mixed damage, extended fights',
      vsComp: ['MIXED', 'SKIRMISH', 'TEAMFIGHT']
    },
    frozenHeart: {
      id: 'frozenHeart', name: 'Frozen Heart', cost: 2400,
      stats: { armor: 90, mana: 400, ah: 20 },
      passive: 'Rock Solid: Reduce damage from attacks',
      bestOn: ['Malphite', 'Rammus', 'Nasus', 'Ryze', 'Galio'],
      when: 'vs auto-attack heavy (ADC, Yasuo, Yone, Yi)',
      vsComp: ['ADC_FOCUSED', 'AUTO_ATTACK', 'ON_HIT']
    },
    randuinsOmen: {
      id: 'randuins', name: "Randuin's Omen", cost: 2700,
      stats: { hp: 400, armor: 60 },
      passive: 'Active: Slow nearby enemies. Reduce crit damage taken',
      bestOn: ['Shen', 'Ornn', 'Maokai', 'Leona', 'Nautilus'],
      when: 'vs crit ADCs (Jinx, Caitlyn, Jhin)',
      vsComp: ['CRIT_ADC', 'HYPERCARRY']
    },
    thornmail: {
      id: 'thornmail', name: 'Thornmail', cost: 2450,
      stats: { hp: 350, armor: 70 },
      passive: 'Thorns: Reflect damage + Grievous Wounds on hit',
      bestOn: ['Rammus', 'Malphite', 'Leona', 'Shen', 'Nautilus'],
      when: 'vs heavy sustain + auto attackers (Aatrox, Fiora, ADCs)',
      vsComp: ['SUSTAIN', 'AUTO_ATTACK', 'LIFESTEAL']
    },
    spiritVisage: {
      id: 'spiritVisage', name: 'Spirit Visage', cost: 2900,
      stats: { hp: 450, mr: 60, ah: 10, hpRegen: 100 },
      passive: 'Boundless Vitality: +25% healing/shielding received',
      bestOn: ['Mundo', 'Maokai', 'Zac', 'Warwick', 'Volibear', 'Aatrox'],
      when: 'You have self-healing, vs AP teams',
      vsComp: ['AP_HEAVY', 'SUSTAIN_SELF']
    },
    forceOfNature: {
      id: 'forceOfNature', name: 'Force of Nature', cost: 2800,
      stats: { hp: 350, mr: 70, movespeed: 5 },
      passive: 'Absorb: Stack MR when taking magic damage',
      bestOn: ['Sion', 'Ornn', 'Mundo', 'Garen', 'Singed'],
      when: 'vs AP poke/DPS mages (Cassio, Azir, Ryze)',
      vsComp: ['AP_DPS', 'POKE_MAGE', 'CONTROL_MAGE']
    },
    gargoyleStoneplate: {
      id: 'gargoyle', name: 'Gargoyle Stoneplate', cost: 3200,
      stats: { armor: 60, mr: 60, ah: 15 },
      passive: 'Fortify: Active shield based on bonus HP',
      bestOn: ['Sion', 'Ornn', 'Cho\'Gath', 'Sett', 'Tahm Kench'],
      when: 'Late game teamfights, need massive shield',
      vsComp: ['TEAMFIGHT', 'MIXED', 'BURST']
    },
    warmogs: {
      id: 'warmogs', name: "Warmog's Armor", cost: 3000,
      stats: { hp: 800, hpRegen: 200, ah: 10 },
      passive: 'Warmog\'s Heart: Rapidly regen out of combat',
      bestOn: ['Mundo', 'Sion', 'Cho\'Gath', 'Tahm Kench', 'Braum'],
      when: 'Poke wars, need out-of-combat sustain, ARAM',
      vsComp: ['POKE', 'SIEGE']
    }
  },

  // ==================== ADC/MARKSMAN ITEMS ====================
  adc: {
    infinityEdge: {
      id: 'ie', name: 'Infinity Edge', cost: 3400,
      stats: { ad: 70, crit: 25 },
      passive: 'Perfection: Crits deal 235% damage (req 60% crit)',
      bestOn: ['Jinx', 'Caitlyn', 'Tristana', 'Jhin', 'Draven', 'Aphelios'],
      when: 'Always 3rd+ crit item when at 60%+ crit',
      vsComp: ['STANDARD', 'SQUISHY', 'TEAMFIGHT']
    },
    krakenSlayer: {
      id: 'kraken', name: 'Kraken Slayer', cost: 3100,
      stats: { ad: 50, as: 25, crit: 20 },
      passive: 'Bring It Down: Every 3rd attack deals bonus true damage',
      bestOn: ['Kog\'Maw', 'Vayne', 'Kai\'Sa', 'Jinx', 'Twitch'],
      when: 'vs tanks, need DPS not burst',
      vsComp: ['TANK', 'BRUISER', 'HP_STACKING']
    },
    galeforce: {
      id: 'galeforce', name: 'Galeforce', cost: 3200,
      stats: { ad: 55, as: 20, crit: 20, movespeed: 7 },
      passive: 'Cloudburst: Dash + execute damage',
      bestOn: ['Jhin', 'Miss Fortune', 'Samira', 'Caitlyn'],
      when: 'Need mobility/dodge, vs skillshot heavy',
      vsComp: ['DIVE', 'ASSASSIN', 'SKILLSHOT']
    },
    immortalShieldbow: {
      id: 'shieldbow', name: 'Immortal Shieldbow', cost: 3000,
      stats: { ad: 50, as: 20, crit: 20, lifesteal: 10 },
      passive: 'Lifeline: Shield + lifesteal when low HP',
      bestOn: ['Samira', 'Yasuo', 'Yone', 'Aphelios', 'Nilah'],
      when: 'vs assassins/burst, need survivability',
      vsComp: ['ASSASSIN', 'DIVE', 'BURST']
    },
    lordDominiksRegards: {
      id: 'ldr', name: "Lord Dominik's Regards", cost: 3000,
      stats: { ad: 35, crit: 20, armorPen: 35 },
      passive: 'Giant Slayer: +15% damage vs higher HP targets',
      bestOn: ['All ADCs when enemy has tanks'],
      when: 'Enemy has 2+ tanks/bruisers (150+ armor)',
      vsComp: ['TANK', 'BRUISER', 'HP_STACKING'],
      priority: 'MANDATORY vs tanks'
    },
    mortalReminder: {
      id: 'mortalReminder', name: 'Mortal Reminder', cost: 2600,
      stats: { ad: 25, crit: 25, armorPen: 25 },
      passive: 'Sepsis: Apply Grievous Wounds on physical damage',
      bestOn: ['All ADCs when enemy has healing'],
      when: 'Enemy has Aatrox, Mundo, Soraka, Yuumi, lifesteal ADC',
      vsComp: ['SUSTAIN', 'HEALER', 'LIFESTEAL'],
      priority: 'MANDATORY vs heavy healing'
    },
    phantomDancer: {
      id: 'pd', name: 'Phantom Dancer', cost: 2800,
      stats: { as: 30, crit: 25, movespeed: 7 },
      passive: 'Spectral Waltz: Ghosting + attack speed on-hit',
      bestOn: ['Yasuo', 'Yone', 'Jinx', 'Tristana', 'Vayne'],
      when: 'Need kiting, mobility, attack speed',
      vsComp: ['STANDARD', 'BRUISER']
    },
    rapidFireCannon: {
      id: 'rfc', name: 'Rapid Firecannon', cost: 2800,
      stats: { as: 25, crit: 25, movespeed: 7 },
      passive: 'Sharpshooter: Gain range on energized attack',
      bestOn: ['Caitlyn', 'Jhin', 'Jinx', 'Tristana'],
      when: 'Need extra range, poke, safer positioning',
      vsComp: ['POKE', 'SIEGE', 'CATCH']
    },
    theCollector: {
      id: 'collector', name: 'The Collector', cost: 3000,
      stats: { ad: 50, crit: 25, lethality: 15 },
      passive: 'Death: Execute enemies below 5% HP',
      bestOn: ['Jhin', 'Miss Fortune', 'Draven', 'Samira'],
      when: 'vs squishy teams, snowballing',
      vsComp: ['SQUISHY', 'ASSASSIN', 'SNOWBALL']
    },
    guardianAngel: {
      id: 'ga', name: 'Guardian Angel', cost: 3200,
      stats: { ad: 55, armor: 45 },
      passive: 'Resurrect: Revive with 50% HP/mana after death',
      bestOn: ['All ADCs in late game'],
      when: 'Late game, you are main carry, vs assassins',
      vsComp: ['ASSASSIN', 'DIVE', 'LATE_GAME']
    }
  },

  // ==================== MAGE ITEMS ====================
  mage: {
    ludensCompanion: {
      id: 'ludens', name: "Luden's Companion", cost: 2900,
      stats: { ap: 90, mana: 600, ah: 20, mpen: 10 },
      passive: 'Fire: Abilities deal bonus magic damage',
      bestOn: ['Lux', 'Syndra', 'Xerath', 'Veigar', 'Ziggs', 'Viktor'],
      when: 'Burst mages, need waveclear + poke',
      vsComp: ['SQUISHY', 'STANDARD', 'POKE']
    },
    liandrys: {
      id: 'liandrys', name: "Liandry's Torment", cost: 3000,
      stats: { ap: 90, hp: 300, ah: 20 },
      passive: 'Torment: Burn enemies for %max HP damage',
      bestOn: ['Brand', 'Malzahar', 'Zyra', 'Teemo', 'Rumble', 'Lillia'],
      when: 'vs tanks/HP stackers, DoT mages',
      vsComp: ['TANK', 'HP_STACKING', 'BRUISER']
    },
    riftmaker: {
      id: 'riftmaker', name: 'Riftmaker', cost: 3100,
      stats: { ap: 70, hp: 350, ah: 15, omnivamp: 8 },
      passive: 'Void Corruption: Ramp up to 10% bonus true damage',
      bestOn: ['Mordekaiser', 'Akali', 'Gwen', 'Katarina', 'Kayle'],
      when: 'AP bruisers/fighters, extended fights',
      vsComp: ['SKIRMISH', 'STANDARD', 'BRUISER']
    },
    rabadonsDeathcap: {
      id: 'rabadons', name: "Rabadon's Deathcap", cost: 3600,
      stats: { ap: 140 },
      passive: 'Magical Opus: Increase total AP by 35%',
      bestOn: ['All AP carries'],
      when: 'Always 3rd+ item for maximum damage',
      vsComp: ['ALL'],
      priority: 'Core on all AP carries'
    },
    voidStaff: {
      id: 'voidStaff', name: 'Void Staff', cost: 2800,
      stats: { ap: 80, mpen: '40%' },
      passive: 'Dissolve: 40% magic penetration',
      bestOn: ['All AP carries'],
      when: 'Enemy has 2+ MR items, tanks building MR',
      vsComp: ['TANK', 'MR_STACKING'],
      priority: 'MANDATORY when enemies have MR'
    },
    zhonyas: {
      id: 'zhonyas', name: "Zhonya's Hourglass", cost: 3250,
      stats: { ap: 105, armor: 50, ah: 15 },
      passive: 'Stasis: 2.5s invulnerable',
      bestOn: ['All AP mids vs AD assassins'],
      when: 'vs Zed, Talon, AD assassins, need survival',
      vsComp: ['ASSASSIN', 'DIVE', 'AD_HEAVY']
    },
    banshees: {
      id: 'banshees', name: "Banshee's Veil", cost: 2600,
      stats: { ap: 80, mr: 45, ah: 10 },
      passive: 'Annul: Spell shield that regens',
      bestOn: ['All AP mids vs AP/hook champions'],
      when: 'vs Blitz, Thresh, Malzahar, AP burst',
      vsComp: ['CATCH', 'AP_HEAVY', 'HOOK']
    },
    shadowflame: {
      id: 'shadowflame', name: 'Shadowflame', cost: 3000,
      stats: { ap: 100, hp: 250, mpen: 15 },
      passive: 'Cinderbloom: More pen vs low HP/shielded targets',
      bestOn: ['Syndra', 'Viktor', 'Veigar', 'LeBlanc'],
      when: 'vs shielding comps (Lulu, Karma, Ivern)',
      vsComp: ['SHIELD', 'SQUISHY', 'ENCHANTER']
    },
    morellonomicon: {
      id: 'morello', name: 'Morellonomicon', cost: 2200,
      stats: { ap: 70, hp: 200 },
      passive: 'Affliction: Apply Grievous Wounds on magic damage',
      bestOn: ['Brand', 'Malzahar', 'Rumble', 'all AP vs healing'],
      when: 'Enemy has Aatrox, Mundo, Soraka, healing heavy',
      vsComp: ['SUSTAIN', 'HEALER'],
      priority: 'MANDATORY vs heavy healing'
    },
    stormsurge: {
      id: 'stormsurge', name: 'Stormsurge', cost: 2900,
      stats: { ap: 100, mpen: 10, movespeed: 5 },
      passive: 'Squall: Dealing burst damage creates lightning',
      bestOn: ['Lux', 'Syndra', 'Ahri', 'Kennen'],
      when: 'Burst mages vs squishy teams',
      vsComp: ['SQUISHY', 'ASSASSIN']
    }
  },

  // ==================== ASSASSIN ITEMS ====================
  assassin: {
    duskblade: {
      id: 'duskblade', name: 'Duskblade of Draktharr', cost: 2900,
      stats: { ad: 60, lethality: 18, ah: 20 },
      passive: 'Nightstalker: Bonus damage from stealth + slow',
      bestOn: ['Kha\'Zix', 'Zed', 'Qiyana', 'Blue Kayn'],
      when: 'Reset assassins, need burst',
      vsComp: ['SQUISHY', 'STANDARD']
    },
    eclipse: {
      id: 'eclipse', name: 'Eclipse', cost: 2900,
      stats: { ad: 55, lethality: 18, omnivamp: 8 },
      passive: 'Ever Rising Moon: Shield + movespeed on 2 hits',
      bestOn: ['Aatrox', 'Pantheon', 'Talon', 'Graves', 'Miss Fortune'],
      when: 'AD fighters/assassins, need sustain + shield',
      vsComp: ['STANDARD', 'BRUISER', 'SKIRMISH']
    },
    prowlersClaw: {
      id: 'prowlers', name: "Prowler's Claw", cost: 2800,
      stats: { ad: 55, lethality: 18, ah: 15 },
      passive: 'Sandswipe: Dash through target + damage amp',
      bestOn: ['Rengar', 'Kha\'Zix', 'Pyke', 'Talon'],
      when: 'Need gap close, target access',
      vsComp: ['POKE', 'KITING']
    },
    seryldas: {
      id: 'seryldas', name: "Serylda's Grudge", cost: 3200,
      stats: { ad: 50, ah: 20, armorPen: 30 },
      passive: 'Bitter Cold: Abilities slow enemies',
      bestOn: ['Jayce', 'Varus', 'Pantheon', 'Graves'],
      when: 'AD casters vs armor stackers, need slow',
      vsComp: ['TANK', 'BRUISER', 'KITING']
    },
    youmuus: {
      id: 'youmuus', name: "Youmuu's Ghostblade", cost: 2800,
      stats: { ad: 55, lethality: 18, ah: 15, movespeed: 8 },
      passive: 'Wraith Step: Active movespeed burst',
      bestOn: ['Talon', 'Zed', 'Qiyana', 'Pyke'],
      when: 'Roaming assassins, need mobility',
      vsComp: ['STANDARD', 'ROAM']
    },
    edgeOfNight: {
      id: 'edgeOfNight', name: 'Edge of Night', cost: 2900,
      stats: { ad: 50, lethality: 15, hp: 250 },
      passive: 'Annul: Spell shield',
      bestOn: ['Zed', 'Qiyana', 'Talon', 'Kha\'Zix'],
      when: 'vs CC heavy teams, need spell shield',
      vsComp: ['CC_HEAVY', 'CATCH', 'HOOK']
    }
  },

  // ==================== SUPPORT ITEMS ====================
  support: {
    shurelyas: {
      id: 'shurelyas', name: "Shurelya's Battlesong", cost: 2200,
      stats: { ap: 40, hp: 200, ah: 25, hpRegen: 100 },
      passive: 'Inspire: Active movespeed for team',
      bestOn: ['Karma', 'Janna', 'Lulu', 'Sona', 'Nami'],
      when: 'Engage/disengage comps, kiting',
      vsComp: ['ENGAGE', 'KITING', 'POKE']
    },
    moonstone: {
      id: 'moonstone', name: 'Moonstone Renewer', cost: 2200,
      stats: { ap: 40, hp: 200, ah: 25, hpRegen: 100 },
      passive: 'Starlit Grace: Healing chains to nearby allies',
      bestOn: ['Soraka', 'Sona', 'Nami', 'Yuumi', 'Seraphine'],
      when: 'Sustain/heal comps, extended fights',
      vsComp: ['POKE', 'SUSTAIN', 'SKIRMISH']
    },
    locket: {
      id: 'locket', name: 'Locket of the Iron Solari', cost: 2300,
      stats: { armor: 35, mr: 35, ah: 20 },
      passive: 'Devotion: Active team shield',
      bestOn: ['Leona', 'Nautilus', 'Alistar', 'Braum', 'Thresh'],
      when: 'vs AoE burst, protect carries',
      vsComp: ['BURST', 'WOMBO', 'DIVE']
    },
    redemption: {
      id: 'redemption', name: 'Redemption', cost: 2300,
      stats: { hp: 200, hpRegen: 100, healShieldPower: 20, ah: 15 },
      passive: 'Intervention: Large AoE heal/damage zone',
      bestOn: ['Soraka', 'Sona', 'Janna', 'Lulu', 'Nami'],
      when: 'Teamfight focused, need AoE healing',
      vsComp: ['TEAMFIGHT', 'POKE']
    },
    mikaels: {
      id: 'mikaels', name: "Mikael's Blessing", cost: 2300,
      stats: { ap: 50, hpRegen: 100, healShieldPower: 20, ah: 20 },
      passive: 'Purify: Cleanse CC from ally',
      bestOn: ['Janna', 'Lulu', 'Soraka', 'Nami', 'Karma'],
      when: 'vs heavy CC (Ashe, Morgana, Leona)',
      vsComp: ['CC_HEAVY', 'CATCH']
    },
    knightVow: {
      id: 'knightVow', name: "Knight's Vow", cost: 2200,
      stats: { hp: 400, ah: 15, armor: 25 },
      passive: 'Sacrifice: Bond to ally, share damage',
      bestOn: ['Braum', 'Tahm Kench', 'Thresh', 'Nautilus'],
      when: 'Protect fed carry, peel focused',
      vsComp: ['DIVE', 'ASSASSIN']
    }
  },

  // ==================== ANTI-HEAL ITEMS (GRIEVOUS WOUNDS) ====================
  antiHeal: {
    executionersCalling: {
      id: 'executioners', name: "Executioner's Calling", cost: 800,
      stats: { ad: 20 },
      passive: 'Grievous Wounds on physical damage',
      bestOn: ['AD champions'],
      when: 'EARLY buy vs heavy healing lanes',
      vsComp: ['SUSTAIN']
    },
    mortalReminder: {
      id: 'mortalReminder', name: 'Mortal Reminder', cost: 2600,
      stats: { ad: 25, crit: 25, armorPen: 25 },
      passive: 'Sepsis: Enhanced Grievous Wounds',
      bestOn: ['ADCs'],
      buildFrom: 'Executioner\'s Calling',
      vsComp: ['SUSTAIN', 'HEALER']
    },
    chainswordMortal: {
      id: 'chainsword', name: 'Chempunk Chainsword', cost: 2600,
      stats: { ad: 45, hp: 250, ah: 15 },
      passive: 'Hackshorn: Grievous Wounds',
      bestOn: ['Fighters', 'Bruisers'],
      vsComp: ['SUSTAIN']
    },
    oblivionOrb: {
      id: 'oblivionOrb', name: 'Oblivion Orb', cost: 800,
      stats: { ap: 30 },
      passive: 'Grievous Wounds on magic damage',
      bestOn: ['AP champions'],
      when: 'EARLY buy vs heavy healing lanes',
      vsComp: ['SUSTAIN']
    },
    morellonomicon: {
      id: 'morello', name: 'Morellonomicon', cost: 2200,
      stats: { ap: 70, hp: 200 },
      passive: 'Affliction: Enhanced Grievous Wounds',
      bestOn: ['Mages'],
      buildFrom: 'Oblivion Orb',
      vsComp: ['SUSTAIN', 'HEALER']
    },
    thornmail: {
      id: 'thornmail', name: 'Thornmail', cost: 2450,
      stats: { hp: 350, armor: 70 },
      passive: 'Grievous Wounds when attacked',
      bestOn: ['Tanks'],
      when: 'vs auto-attack heavy + healing',
      vsComp: ['SUSTAIN', 'AUTO_ATTACK']
    },
    putrifier: {
      id: 'putrifier', name: 'Chemtech Putrifier', cost: 2100,
      stats: { ap: 50, hpRegen: 75, ah: 20, healShieldPower: 15 },
      passive: 'Puffcap Toxin: Allies apply Grievous Wounds',
      bestOn: ['Enchanters'],
      when: 'Support applying anti-heal to carries',
      vsComp: ['SUSTAIN', 'HEALER']
    }
  }
};

// =====================================================
// TEAM COMPOSITION ITEM BUILDS
// What to build vs different team types
// =====================================================
export const TEAM_COMP_BUILDS = {
  // VS TANK COMP (2+ tanks)
  vsTankComp: {
    description: 'Enemy has Ornn top, Sejuani jungle, and tanky support',
    coreStrategy: 'Build %penetration and %HP damage items',
    adcBuild: {
      core: ['Kraken Slayer', 'Blade of the Ruined King', "Lord Dominik's Regards"],
      reasoning: 'Kraken true damage ignores armor, BOTRK %HP damage, LDR armor pen'
    },
    fighterBuild: {
      core: ['Black Cleaver', 'Blade of the Ruined King', "Serylda's Grudge"],
      reasoning: 'Cleaver shreds armor for team, BOTRK %HP, Serylda pen'
    },
    mageBuild: {
      core: ["Liandry's Torment", 'Void Staff', 'Riftmaker'],
      reasoning: 'Liandry %HP burn, Void Staff 40% magic pen'
    },
    avoidItems: ['The Collector', 'Duskblade', 'Lethality items'],
    avoidReason: 'Lethality is useless vs high armor targets'
  },

  // VS DIVE COMP
  vsDiveComp: {
    description: 'Enemy has assassins and divers (Diana, Nocturne, Zed, Hecarim)',
    coreStrategy: 'Build defensive items early, survival > damage',
    adcBuild: {
      core: ['Immortal Shieldbow', 'Guardian Angel', "Randuin's Omen"],
      reasoning: 'Shieldbow anti-burst, GA revive, Randuins vs AD divers'
    },
    fighterBuild: {
      core: ["Sterak's Gage", "Death's Dance", 'Maw of Malmortius'],
      reasoning: 'Lifeline shields, DD damage delay, Maw vs AP divers'
    },
    mageBuild: {
      core: ["Zhonya's Hourglass", "Banshee's Veil", 'Shadowflame'],
      reasoning: 'Zhonya stasis, Banshee spell shield'
    },
    supportBuild: {
      core: ['Locket of Iron Solari', "Knight's Vow", 'Redemption'],
      reasoning: 'Locket team shield, Knight Vow protects carry'
    }
  },

  // VS POKE COMP
  vsPokeComp: {
    description: 'Enemy has Jayce, Xerath, Varus, poke heavy',
    coreStrategy: 'Build sustain and engage tools',
    adcBuild: {
      core: ['Bloodthirster', 'Guardian Angel', 'Phantom Dancer'],
      reasoning: 'BT sustain through poke, shield'
    },
    fighterBuild: {
      core: ['Ravenous Hydra', "Death's Dance", 'Force of Nature'],
      reasoning: 'Omnivamp sustain, FoN vs AP poke'
    },
    tankBuild: {
      core: ["Warmog's Armor", 'Force of Nature', 'Spirit Visage'],
      reasoning: 'Warmog OOC regen, FoN MR, Spirit boost healing'
    },
    supportBuild: {
      core: ['Moonstone Renewer', 'Redemption', "Mikael's Blessing"],
      reasoning: 'Sustain through poke phase'
    }
  },

  // VS SUSTAIN/HEAL COMP
  vsSustainComp: {
    description: 'Enemy has Aatrox, Mundo, Soraka, healing focused',
    coreStrategy: 'MUST BUILD GRIEVOUS WOUNDS EARLY',
    priority: 'CRITICAL - Build anti-heal by 2nd item or you auto-lose',
    adcBuild: {
      core: ['Mortal Reminder (MANDATORY)', 'Kraken Slayer', "Lord Dominik's"],
      antiHealTiming: 'Build Executioner\'s Calling in lane if vs healing support',
      reasoning: '40% healing reduction is mandatory'
    },
    fighterBuild: {
      core: ['Chempunk Chainsword (MANDATORY)', 'Black Cleaver', 'Blade of Ruined King'],
      antiHealTiming: 'Rush Executioner\'s in lane vs sustain top laners',
      reasoning: 'Apply anti-heal in extended fights'
    },
    mageBuild: {
      core: ['Morellonomicon (MANDATORY)', "Liandry's Torment", 'Void Staff'],
      antiHealTiming: 'Build Oblivion Orb early',
      reasoning: 'DoT applies anti-heal constantly'
    },
    supportBuild: {
      core: ['Chemtech Putrifier (MANDATORY)', 'Moonstone', 'Redemption'],
      reasoning: 'Putrifier lets your carries apply anti-heal'
    },
    championsToAntiHeal: ['Aatrox', 'Dr. Mundo', 'Fiora', 'Soraka', 'Yuumi', 'Vladimir', 'Warwick', 'Zac', 'Swain', 'Sylas', 'Trundle', 'Red Kayn']
  },

  // VS SQUISHY/ASSASSIN COMP
  vsSquishyComp: {
    description: 'Enemy is all squishies, no frontline',
    coreStrategy: 'Build pure damage, lethality viable',
    adcBuild: {
      core: ['The Collector', 'Infinity Edge', 'Rapid Firecannon'],
      reasoning: 'Execute low HP targets, max burst'
    },
    assassinBuild: {
      core: ['Duskblade', "Youmuu's Ghostblade", 'Edge of Night'],
      reasoning: 'Full lethality, oneshot squishies'
    },
    mageBuild: {
      core: ["Luden's Companion", 'Shadowflame', "Rabadon's Deathcap"],
      reasoning: 'Flat pen destroys low MR targets'
    }
  },

  // VS CC HEAVY COMP
  vsCCComp: {
    description: 'Enemy has Ashe, Leona, Morgana, Sejuani',
    coreStrategy: 'Build tenacity and cleanse items',
    adcBuild: {
      core: ['Mercurial Scimitar', 'Phantom Dancer', 'Guardian Angel'],
      boots: 'Mercury Treads MANDATORY',
      reasoning: 'QSS cleanses CC, Mercs give tenacity'
    },
    fighterBuild: {
      core: ["Sterak's Gage", 'Maw of Malmortius', 'Silvermere Dawn'],
      boots: 'Mercury Treads',
      runes: 'Legend: Tenacity + Unflinching',
      reasoning: 'Stack tenacity to 60%+'
    },
    supportBuild: {
      core: ["Mikael's Blessing", "Shurelya's Battlesong", 'Redemption'],
      reasoning: 'Mikael cleanses your carry'
    }
  },

  // VS SPLIT PUSH COMP
  vsSplitPushComp: {
    description: 'Enemy has Fiora/Tryndamere/Jax splitting',
    coreStrategy: 'Build waveclear and 1v1 dueling',
    topBuild: {
      core: ['Blade of the Ruined King', 'Hullbreaker', 'Trinity Force'],
      reasoning: 'Match their split push, 1v1 potential'
    },
    teamStrategy: 'Either send someone who can match, or 4-1/1-3-1',
    counterPlay: 'Force 5v4 fights when they split'
  }
};

// =====================================================
// SITUATIONAL ITEM DECISION TREE
// =====================================================
export const ITEM_DECISION_TREE = {
  // When enemy has healing
  enemyHasHealing: {
    check: 'Does enemy have Aatrox, Mundo, Soraka, Yuumi, Fiora, Vladimir, Swain, lifesteal ADC?',
    ifYes: {
      ad: 'Build Executioner\'s Calling → Mortal Reminder',
      ap: 'Build Oblivion Orb → Morellonomicon',
      tank: 'Build Bramble Vest → Thornmail',
      support: 'Build Chemtech Putrifier',
      timing: 'Build anti-heal component by 1st-2nd item'
    },
    ifNo: 'Skip anti-heal items'
  },

  // When enemy has 2+ tanks
  enemyHasTanks: {
    check: 'Does enemy have 2+ tanks or heavy armor stackers?',
    ifYes: {
      adc: 'Build Lord Dominik\'s Regards + Kraken Slayer + BOTRK',
      assassin: 'Build Serylda\'s Grudge, NOT lethality',
      mage: 'Build Void Staff + Liandry\'s Torment',
      fighter: 'Build Black Cleaver + BOTRK'
    },
    ifNo: 'Standard damage build is fine'
  },

  // When you need survivability
  needSurvivability: {
    check: 'Are you dying too fast? Getting dove or assassinated?',
    ifYes: {
      vsADAssassin: "Zhonya's (AP) or Guardian Angel/Sterak's (AD)",
      vsAPBurst: "Maw of Malmortius (AD) or Banshee's Veil (AP)",
      vsGeneralBurst: 'Immortal Shieldbow (ADC) or Sterak\'s Gage (Fighter)',
      vsDive: 'Locket (Support) for team shield'
    }
  },

  // When enemy has shields
  enemyHasShields: {
    check: 'Does enemy have Lulu, Karma, Janna, Ivern, or shield heavy?',
    ifYes: {
      mage: 'Build Shadowflame for shield-breaking',
      ad: 'Serpent\'s Fang (if available)'
    }
  },

  // When you're ahead
  whenAhead: {
    check: 'Are you significantly ahead and snowballing?',
    ifYes: {
      strategy: 'Build more damage, less defense',
      adc: 'Skip defensive items, go full crit',
      assassin: 'Stack lethality for maximum oneshot',
      mage: 'Rush Rabadon\'s for damage spike'
    }
  },

  // When you're behind
  whenBehind: {
    check: 'Are you behind and struggling?',
    ifYes: {
      strategy: 'Build cheaper items, utility focused',
      adc: 'Phantom Dancer for safety, cheaper components',
      mage: 'Zhonya\'s for survival before damage',
      fighter: 'Tank items to be useful in teamfights'
    }
  }
};

// Export
export default {
  ITEMS_DATABASE,
  TEAM_COMP_BUILDS,
  ITEM_DECISION_TREE
};
