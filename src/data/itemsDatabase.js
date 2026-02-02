// =====================================================
// WORLD-CLASS ITEM DATABASE - SEASON 2026
// Complete items with stats, costs, build paths, use cases
// Data sourced from Riot Data Dragon API & community resources
// Patch 26.02 - Updated February 2026
// =====================================================

export const CURRENT_PATCH = '26.02';
export const DDRAGON_VERSION = '16.2.1';
export const ITEM_ICON_BASE = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/item/`;

// Item Categories
export const ITEM_CATEGORIES = {
  STARTER: 'Starter Items',
  BOOTS: 'Boots',
  BASIC: 'Basic Items',
  EPIC: 'Epic Items',
  LEGENDARY: 'Legendary Items',
  CONSUMABLE: 'Consumables'
};

// Item Tags for filtering
export const ITEM_TAGS = {
  DAMAGE: 'Damage',
  ATTACK_SPEED: 'Attack Speed',
  CRIT: 'Critical Strike',
  LIFESTEAL: 'Life Steal',
  ARMOR_PEN: 'Armor Penetration',
  LETHALITY: 'Lethality',
  AP: 'Ability Power',
  MANA: 'Mana',
  MAGIC_PEN: 'Magic Penetration',
  HEALTH: 'Health',
  ARMOR: 'Armor',
  MAGIC_RESIST: 'Magic Resist',
  ABILITY_HASTE: 'Ability Haste',
  MOVEMENT: 'Movement Speed',
  OMNIVAMP: 'Omnivamp',
  TENACITY: 'Tenacity'
};

// =====================================================
// COMPLETE LEGENDARY ITEMS DATABASE
// =====================================================
export const ITEMS = {
  // ============ FIGHTER/BRUISER ITEMS ============
  3078: {
    id: 3078,
    name: 'Trinity Force',
    cost: 3333,
    stats: { ad: 35, as: 30, hp: 300, ah: 20 },
    passive: 'Spellblade: After using ability, next attack deals 200% base AD bonus damage. Threefold Strike: Attacks grant 20 MS and 4% base AD stacking (max 5).',
    buildPath: [3057, 3101, 3067], // Sheen, Hearthbound Axe, Kindlegem
    tags: ['DAMAGE', 'ATTACK_SPEED', 'HEALTH', 'ABILITY_HASTE'],
    goodFor: ['Bruisers', 'Fighters', 'Splitpushers'],
    champions: ['Jax', 'Camille', 'Irelia', 'Fiora', 'Volibear', 'Hecarim', 'Nasus'],
    icon: '3078.png',
    tier: 'legendary'
  },
  
  6631: {
    id: 6631,
    name: 'Stridebreaker',
    cost: 3300,
    stats: { ad: 55, as: 20, hp: 400, ah: 20 },
    passive: 'Halting Slash (Active): Dash and deal 75% AD damage in an arc, slowing enemies by 40% for 3s. 15s cooldown.',
    buildPath: [6029, 3044, 3067],
    tags: ['DAMAGE', 'ATTACK_SPEED', 'HEALTH', 'ABILITY_HASTE'],
    goodFor: ['Juggernauts', 'Immobile bruisers who need gap close'],
    champions: ['Darius', 'Garen', 'Sett', 'Volibear', 'Urgot', 'Trundle'],
    icon: '6631.png',
    tier: 'legendary'
  },
  
  6630: {
    id: 6630,
    name: 'Goredrinker',
    cost: 3300,
    stats: { ad: 55, hp: 450, ah: 20 },
    passive: 'Thirsting Slash (Active): Deal 100% AD damage to nearby enemies and heal for 25% missing HP per enemy hit. 15s cooldown.',
    buildPath: [6029, 3044, 3067],
    tags: ['DAMAGE', 'HEALTH', 'ABILITY_HASTE', 'OMNIVAMP'],
    goodFor: ['Drain tanks', 'Teamfight bruisers', 'Multi-enemy fights'],
    champions: ['Aatrox', 'Riven', 'Olaf', 'Renekton', 'Kled', 'Pantheon'],
    icon: '6630.png',
    tier: 'legendary'
  },
  
  6694: {
    id: 6694,
    name: 'Sundered Sky',
    cost: 3100,
    stats: { ad: 55, hp: 300, ah: 15 },
    passive: 'Lightshield Strike: First attack on each champion deals 9% target max HP bonus physical damage and heals you for 100% of the bonus damage (12s CD per target).',
    buildPath: [1036, 3133, 1028],
    tags: ['DAMAGE', 'HEALTH', 'ABILITY_HASTE'],
    goodFor: ['Bruisers', 'Divers', 'Champions who jump on targets'],
    champions: ['Jax', 'Irelia', 'Jarvan IV', 'Renekton', 'Vi', 'Camille'],
    icon: '6694.png',
    tier: 'legendary'
  },
  
  3074: {
    id: 3074,
    name: 'Ravenous Hydra',
    cost: 3300,
    stats: { ad: 70, ah: 20, omnivamp: 10 },
    passive: 'Cleave: Attacks deal 60% AD physical damage to nearby enemies. Carnivorous: Gain AD based on missing health.',
    buildPath: [3077, 3133, 1053],
    tags: ['DAMAGE', 'ABILITY_HASTE', 'OMNIVAMP'],
    goodFor: ['Splitpushers', 'Waveclear', 'Sustain fighters'],
    champions: ['Fiora', 'Camille', 'Riven', 'Kled', 'Tryndamere'],
    icon: '3074.png',
    tier: 'legendary'
  },
  
  3071: {
    id: 3071,
    name: 'Black Cleaver',
    cost: 3100,
    stats: { ad: 40, hp: 450, ah: 25 },
    passive: 'Carve: Dealing physical damage shreds 5% armor per hit (max 30%). Rage: Dealing physical damage grants 20 MS for 2s.',
    buildPath: [3044, 3067, 1036],
    tags: ['DAMAGE', 'HEALTH', 'ABILITY_HASTE', 'ARMOR_PEN'],
    goodFor: ['Tank shredding', 'Teamfighting', 'Utility bruisers'],
    champions: ['Aatrox', 'Darius', 'Riven', 'Urgot', 'Pantheon', 'Renekton'],
    icon: '3071.png',
    tier: 'legendary'
  },
  
  3053: {
    id: 3053,
    name: "Sterak's Gage",
    cost: 3100,
    stats: { ad: '50% base AD', hp: 400 },
    passive: 'The Claws that Catch: Gain AD equal to 50% base AD. Lifeline: At 30% HP, gain shield equal to 75% bonus HP for 4s.',
    buildPath: [1037, 3044, 1028],
    tags: ['DAMAGE', 'HEALTH'],
    goodFor: ['Survivability', 'Anti-burst', 'Teamfighting'],
    champions: ['Darius', 'Jax', 'Irelia', 'Sett', 'Camille', 'Garen'],
    icon: '3053.png',
    tier: 'legendary'
  },
  
  6333: {
    id: 6333,
    name: "Death's Dance",
    cost: 3300,
    stats: { ad: 55, armor: 45, ah: 15 },
    passive: 'Ignore Pain: 30% of damage taken becomes a bleed over 3s. Defy: Takedowns cleanse bleed and heal 15% max HP.',
    buildPath: [1037, 1031, 3133],
    tags: ['DAMAGE', 'ARMOR', 'ABILITY_HASTE'],
    goodFor: ['Anti-burst', 'Sustained fights', 'vs AD teams'],
    champions: ['Fiora', 'Riven', 'Aatrox', 'Camille', 'Irelia', 'Jax'],
    icon: '6333.png',
    tier: 'legendary'
  },
  
  3156: {
    id: 3156,
    name: 'Maw of Malmortius',
    cost: 2800,
    stats: { ad: 65, mr: 40, ah: 15 },
    passive: 'Lifeline: At 30% HP from magic damage, gain shield equal to 150 + 20% max HP for 3s. While shield holds, gain 10% omnivamp.',
    buildPath: [3155, 3133],
    tags: ['DAMAGE', 'MAGIC_RESIST', 'ABILITY_HASTE'],
    goodFor: ['Anti-AP', 'Magic burst protection', 'vs fed AP carries'],
    champions: ['Any AD champion vs AP threats', 'Assassins', 'Fighters'],
    icon: '3156.png',
    tier: 'legendary'
  },
  
  6609: {
    id: 6609,
    name: 'Spear of Shojin',
    cost: 3400,
    stats: { ad: 55, hp: 350, ah: 20 },
    passive: 'Dragonforce: Non-ultimate abilities reduce ult CD by 8s each. Exigency: Gain 0-15% MS based on missing HP.',
    buildPath: [3133, 3067, 1036],
    tags: ['DAMAGE', 'HEALTH', 'ABILITY_HASTE'],
    goodFor: ['Ultimate-reliant champions', 'Ability spammers'],
    champions: ['Riven', 'Renekton', 'Pantheon', 'Fiora', 'Hecarim'],
    icon: '6609.png',
    tier: 'legendary'
  },
  
  3181: {
    id: 3181,
    name: 'Hullbreaker',
    cost: 3000,
    stats: { ad: 60, hp: 400, armor: 5, mr: 5 },
    passive: 'Boarding Party: While alone with no allied champs nearby, gain 20-60 armor and MR. Siege Commander: Nearby minions gain 60-135 armor/MR and deal 200% damage to structures.',
    buildPath: [3052, 3044],
    tags: ['DAMAGE', 'HEALTH', 'ARMOR', 'MAGIC_RESIST'],
    goodFor: ['Splitpush specialists', 'Tower destruction', '1v1 dueling'],
    champions: ['Yorick', 'Sion', 'Nasus', 'Tryndamere', 'Fiora', 'Jax'],
    icon: '3181.png',
    tier: 'legendary'
  },

  // ============ LETHALITY/ASSASSIN ITEMS ============
  6701: {
    id: 6701,
    name: 'Opportunity',
    cost: 2700,
    stats: { ad: 55, lethality: 18, ms: 4 },
    passive: 'Preparation: After 3s out of combat with champions, gain 25% bonus lethality. First champion damage breaks this effect.',
    buildPath: [3134, 1001, 1036],
    tags: ['DAMAGE', 'LETHALITY', 'MOVEMENT'],
    goodFor: ['Burst assassins', 'Roaming', 'One-shot potential'],
    champions: ['Zed', 'Talon', 'Kha\'Zix', 'Rengar', 'Qiyana'],
    icon: '6701.png',
    tier: 'legendary'
  },
  
  6697: {
    id: 6697,
    name: 'Hubris',
    cost: 3000,
    stats: { ad: 60, lethality: 18, ah: 10 },
    passive: 'Eminence: Champion takedowns grant 5 AD for 60s (max 20 stacks). Ego: Gain 1% increased damage per stack.',
    buildPath: [3134, 3133],
    tags: ['DAMAGE', 'LETHALITY', 'ABILITY_HASTE'],
    goodFor: ['Snowballing', 'Assassins', 'Getting resets'],
    champions: ['Talon', 'Zed', 'Qiyana', 'Kha\'Zix', 'Rengar'],
    icon: '6697.png',
    tier: 'legendary'
  },
  
  6676: {
    id: 6676,
    name: 'The Collector',
    cost: 3000,
    stats: { ad: 50, crit: 25, lethality: 12 },
    passive: 'Death and Taxes: Dealing damage that would leave enemy below 5% max HP executes them. Champion kills grant 25 bonus gold.',
    buildPath: [3134, 1018, 1036],
    tags: ['DAMAGE', 'CRIT', 'LETHALITY'],
    goodFor: ['Execute damage', 'Crit assassins', 'Snowballing'],
    champions: ['Samira', 'Draven', 'Miss Fortune', 'Jhin', 'Caitlyn'],
    icon: '6676.png',
    tier: 'legendary'
  },
  
  6698: {
    id: 6698,
    name: 'Profane Hydra',
    cost: 3300,
    stats: { ad: 60, lethality: 18, ah: 20 },
    passive: 'Cleave: Attacks deal 60% AD to nearby enemies. Heretical Fervor: Gain 5% increased damage vs targets below 50% HP.',
    buildPath: [3077, 3134, 3133],
    tags: ['DAMAGE', 'LETHALITY', 'ABILITY_HASTE'],
    goodFor: ['Lethality bruisers', 'Waveclear assassins'],
    champions: ['Aatrox', 'Renekton', 'Pantheon', 'Talon', 'Kha\'Zix'],
    icon: '6698.png',
    tier: 'legendary'
  },
  
  3142: {
    id: 3142,
    name: "Youmuu's Ghostblade",
    cost: 2700,
    stats: { ad: 60, lethality: 18, ah: 15 },
    passive: 'Wraith Step: Gain 40 MS out of combat. Active: Gain 20% MS and ghosting for 6s.',
    buildPath: [3134, 3133],
    tags: ['DAMAGE', 'LETHALITY', 'ABILITY_HASTE', 'MOVEMENT'],
    goodFor: ['Roaming', 'Mobility', 'Engaging'],
    champions: ['Zed', 'Talon', 'Qiyana', 'Pyke', 'Graves'],
    icon: '3142.png',
    tier: 'legendary'
  },
  
  6695: {
    id: 6695,
    name: "Serpent's Fang",
    cost: 2500,
    stats: { ad: 55, lethality: 15 },
    passive: 'Shield Reaver: Damage to shielded enemies reduces their shield by 35% (50% for melee). Attacking a shielded enemy reduces their shields by 50%.',
    buildPath: [3134, 1036, 1036],
    tags: ['DAMAGE', 'LETHALITY'],
    goodFor: ['Anti-shield', 'vs Lulu/Janna/enchanters', 'vs Sterak\'s'],
    champions: ['Any assassin vs shield comps'],
    icon: '6695.png',
    tier: 'legendary'
  },
  
  3814: {
    id: 3814,
    name: 'Edge of Night',
    cost: 2800,
    stats: { ad: 50, lethality: 15, hp: 325 },
    passive: 'Annul: After 40s out of champion combat, gain a spell shield that blocks the next ability.',
    buildPath: [3134, 1028, 1037],
    tags: ['DAMAGE', 'LETHALITY', 'HEALTH'],
    goodFor: ['Anti-CC', 'Survivability for assassins', 'Engaging safely'],
    champions: ['Assassins into CC comps', 'Kha\'Zix', 'Rengar', 'Nocturne'],
    icon: '3814.png',
    tier: 'legendary'
  },

  // ============ ADC/CRIT ITEMS ============
  3031: {
    id: 3031,
    name: 'Infinity Edge',
    cost: 3400,
    stats: { ad: 70, crit: 25 },
    passive: 'Perfection: If you have 60%+ crit chance, critical strikes deal 40% bonus damage (210% total with S2026 base 200%).',
    buildPath: [1038, 1037, 1018],
    tags: ['DAMAGE', 'CRIT'],
    goodFor: ['Crit ADCs', 'Late game scaling', 'Maximum damage'],
    champions: ['Jinx', 'Caitlyn', 'Tristana', 'Jhin', 'Aphelios', 'Yasuo', 'Yone'],
    icon: '3031.png',
    tier: 'legendary'
  },
  
  3124: {
    id: 3124,
    name: 'Kraken Slayer',
    cost: 3200,
    stats: { ad: 45, as: 30, crit: 25 },
    passive: 'Bring It Down: Every 3rd attack deals 40 + 60% bonus AD bonus true damage.',
    buildPath: [3086, 1037, 1018],
    tags: ['DAMAGE', 'ATTACK_SPEED', 'CRIT'],
    goodFor: ['Tank shredding', 'DPS', 'vs tanky teams'],
    champions: ['Vayne', 'Kog\'Maw', 'Kai\'Sa', 'Kindred', 'Master Yi', 'Yasuo'],
    icon: '3124.png',
    tier: 'legendary'
  },
  
  6671: {
    id: 6671,
    name: 'Galeforce',
    cost: 3200,
    stats: { ad: 55, as: 20, crit: 25 },
    passive: 'Cloudburst (Active): Dash and fire 3 missiles at lowest HP enemy, dealing 65-150 + 45% bonus AD magic damage. 90s cooldown.',
    buildPath: [3086, 1018, 1037],
    tags: ['DAMAGE', 'ATTACK_SPEED', 'CRIT', 'MOVEMENT'],
    goodFor: ['Mobility', 'Immobile ADCs', 'Dodging skillshots', 'Chasing'],
    champions: ['Jhin', 'Miss Fortune', 'Caitlyn', 'Aphelios', 'Samira'],
    icon: '6671.png',
    tier: 'legendary'
  },
  
  3036: {
    id: 3036,
    name: "Lord Dominik's Regards",
    cost: 3000,
    stats: { ad: 40, crit: 25 },
    passive: 'Giant Slayer: Deal 0-20% bonus damage based on HP difference. 30% armor penetration.',
    buildPath: [3035, 1018, 1037],
    tags: ['DAMAGE', 'CRIT', 'ARMOR_PEN'],
    goodFor: ['Tank shredding', 'vs high HP targets', 'Late game'],
    champions: ['All crit ADCs vs tanks'],
    icon: '3036.png',
    tier: 'legendary'
  },
  
  3033: {
    id: 3033,
    name: 'Mortal Reminder',
    cost: 2800,
    stats: { ad: 35, crit: 25 },
    passive: 'Sepsis: Damage applies 40% Grievous Wounds for 3s. 30% armor penetration.',
    buildPath: [3035, 3123],
    tags: ['DAMAGE', 'CRIT', 'ARMOR_PEN'],
    goodFor: ['Anti-heal', 'vs healing comps', 'vs Soraka/Aatrox/Vladimir'],
    champions: ['ADCs vs heavy healing'],
    icon: '3033.png',
    tier: 'legendary'
  },
  
  3094: {
    id: 3094,
    name: 'Rapid Firecannon',
    cost: 2800,
    stats: { as: 30, crit: 25, ms: 7 },
    passive: 'Sharpshooter: Attacks generate stacks. At 100 stacks, next attack has +150 range and deals bonus magic damage.',
    buildPath: [2015, 3086, 1036],
    tags: ['ATTACK_SPEED', 'CRIT', 'MOVEMENT'],
    goodFor: ['Poke', 'Safe range', 'Sieging'],
    champions: ['Caitlyn', 'Jinx', 'Tristana', 'Jhin', 'Kai\'Sa'],
    icon: '3094.png',
    tier: 'legendary'
  },
  
  3046: {
    id: 3046,
    name: 'Phantom Dancer',
    cost: 2700,
    stats: { as: 40, crit: 25, ms: 7 },
    passive: 'Spectral Waltz: Attacking grants ghosting and 7% MS for 3s. Lifeline: At 30% HP, gain a shield.',
    buildPath: [3086, 1042, 1018],
    tags: ['ATTACK_SPEED', 'CRIT', 'MOVEMENT'],
    goodFor: ['Kiting', 'Attack speed', 'Survivability'],
    champions: ['Vayne', 'Yasuo', 'Yone', 'Jinx', 'Tristana', 'Kai\'Sa'],
    icon: '3046.png',
    tier: 'legendary'
  },
  
  3072: {
    id: 3072,
    name: 'Bloodthirster',
    cost: 3400,
    stats: { ad: 80, crit: 20, lifesteal: 18 },
    passive: 'Ichorshield: Overhealing creates a shield up to 10% max HP.',
    buildPath: [1038, 1018, 1053],
    tags: ['DAMAGE', 'CRIT', 'LIFESTEAL'],
    goodFor: ['Sustain', 'Survivability', 'Late game'],
    champions: ['Draven', 'Samira', 'Aphelios', 'Yasuo', 'Yone'],
    icon: '3072.png',
    tier: 'legendary'
  },
  
  3153: {
    id: 3153,
    name: 'Blade of the Ruined King',
    cost: 3300,
    stats: { ad: 40, as: 25, lifesteal: 8 },
    passive: "Mist's Edge: Attacks deal 9% current HP physical damage (max 60 vs monsters). Siphon: Attacks steal 25% MS for 2s.",
    buildPath: [3144, 1043],
    tags: ['DAMAGE', 'ATTACK_SPEED', 'LIFESTEAL'],
    goodFor: ['Tank shredding', 'Dueling', 'vs high HP targets'],
    champions: ['Vayne', 'Kog\'Maw', 'Irelia', 'Master Yi', 'Viego', 'Yasuo'],
    icon: '3153.png',
    tier: 'legendary'
  },
  
  6675: {
    id: 6675,
    name: 'Navori Flickerblade',
    cost: 3000,
    stats: { ad: 60, crit: 25, ah: 15 },
    passive: 'Deft Strikes: Critical strikes reduce non-ultimate abilities cooldown by 15%.',
    buildPath: [3133, 1018, 1037],
    tags: ['DAMAGE', 'CRIT', 'ABILITY_HASTE'],
    goodFor: ['Ability-reliant ADCs', 'Spell weaving'],
    champions: ['Xayah', 'Lucian', 'Sivir', 'Kai\'Sa', 'Nilah'],
    icon: '6675.png',
    tier: 'legendary'
  },
  
  // S2026 NEW ITEM
  223124: {
    id: 223124,
    name: 'Hexoptics C44',
    cost: 3200,
    stats: { ad: 50, as: 25, crit: 25 },
    passive: 'Magnification: Deal up to 10% increased damage based on distance (max at 750 range). Arcane Aim: On champion takedown, gain 100 bonus attack range for 6s.',
    buildPath: [1037, 3086, 1036],
    tags: ['DAMAGE', 'ATTACK_SPEED', 'CRIT'],
    goodFor: ['Range extension', 'Teamfights', 'Poke ADCs'],
    champions: ['Caitlyn', 'Jinx', 'Kog\'Maw', 'Aphelios'],
    icon: '3124.png', // Using similar icon
    tier: 'legendary'
  },

  // ============ AP ITEMS ============
  6653: {
    id: 6653,
    name: "Luden's Companion",
    cost: 2850,
    stats: { ap: 90, mana: 600, ah: 20 },
    passive: 'Surge: Abilities deal 100 + 10% AP bonus magic damage to target and 3 nearby enemies. Grants 15% MS for 1s.',
    buildPath: [3802, 1026, 1052],
    tags: ['AP', 'MANA', 'ABILITY_HASTE'],
    goodFor: ['Burst mages', 'Poke', 'Waveclear'],
    champions: ['Lux', 'Syndra', 'Ahri', 'Xerath', 'Ziggs', 'Vel\'Koz'],
    icon: '6653.png',
    tier: 'legendary'
  },
  
  6655: {
    id: 6655,
    name: 'Stormsurge',
    cost: 2700,
    stats: { ap: 95, mpen: 10, ms: 5 },
    passive: 'Squall: Dealing 35% of target HP within 2.5s marks them. After 1s, marked targets take 100-200 + 30% AP bonus magic damage.',
    buildPath: [3145, 3113],
    tags: ['AP', 'MAGIC_PEN', 'MOVEMENT'],
    goodFor: ['Burst mages', 'AP assassins', 'One-shot builds'],
    champions: ['Fizz', 'Ekko', 'Diana', 'Kennen', 'Akali'],
    icon: '6655.png',
    tier: 'legendary'
  },
  
  4645: {
    id: 4645,
    name: 'Shadowflame',
    cost: 2800,
    stats: { ap: 100, mpen: 15, hp: 100 },
    passive: 'Cinderbloom: Damage against targets below 35% HP deals 10-20 bonus magic damage.',
    buildPath: [3145, 1058],
    tags: ['AP', 'MAGIC_PEN', 'HEALTH'],
    goodFor: ['Execute damage', 'Burst', 'vs squishies'],
    champions: ['Syndra', 'Viktor', 'Veigar', 'Lux', 'Ahri'],
    icon: '4645.png',
    tier: 'legendary'
  },
  
  3089: {
    id: 3089,
    name: "Rabadon's Deathcap",
    cost: 3600,
    stats: { ap: 130 },
    passive: 'Magical Opus: Gain 35% bonus AP.',
    buildPath: [1058, 1058, 1026],
    tags: ['AP'],
    goodFor: ['Late game scaling', 'Maximum damage', 'All AP carries'],
    champions: ['All AP carries'],
    icon: '3089.png',
    tier: 'legendary'
  },
  
  3135: {
    id: 3135,
    name: 'Void Staff',
    cost: 2800,
    stats: { ap: 80, mpen: '40%' },
    passive: '40% Magic Penetration.',
    buildPath: [4630, 1026],
    tags: ['AP', 'MAGIC_PEN'],
    goodFor: ['Anti-MR', 'Tank shredding', 'Late game'],
    champions: ['All AP vs MR stacking'],
    icon: '3135.png',
    tier: 'legendary'
  },
  
  3157: {
    id: 3157,
    name: "Zhonya's Hourglass",
    cost: 3000,
    stats: { ap: 80, armor: 45, ah: 15 },
    passive: 'Stasis (Active): Become invulnerable and untargetable for 2.5s. 120s cooldown.',
    buildPath: [3191, 3108, 2420],
    tags: ['AP', 'ARMOR', 'ABILITY_HASTE'],
    goodFor: ['Anti-burst', 'Survivability', 'Diving', 'vs AD assassins'],
    champions: ['All AP vs assassins/AD threats'],
    icon: '3157.png',
    tier: 'legendary'
  },
  
  3102: {
    id: 3102,
    name: "Banshee's Veil",
    cost: 2600,
    stats: { ap: 80, mr: 45, ah: 10 },
    passive: 'Annul: Spell shield that blocks first enemy ability. Refreshes after 40s out of combat.',
    buildPath: [4632, 3108],
    tags: ['AP', 'MAGIC_RESIST', 'ABILITY_HASTE'],
    goodFor: ['Anti-AP', 'Spell block', 'vs engage/pick comps'],
    champions: ['All AP vs engage/pick comps'],
    icon: '3102.png',
    tier: 'legendary'
  },
  
  3100: {
    id: 3100,
    name: 'Lich Bane',
    cost: 2800,
    stats: { ap: 85, ah: 15, ms: 8 },
    passive: 'Spellblade: After using ability, next attack deals 75% base AD + 45% AP bonus magic damage.',
    buildPath: [3057, 3113, 1026],
    tags: ['AP', 'ABILITY_HASTE', 'MOVEMENT'],
    goodFor: ['Auto-weaving mages', 'Burst', 'Tower damage'],
    champions: ['Fizz', 'Ekko', 'Twisted Fate', 'Viktor', 'Akali'],
    icon: '3100.png',
    tier: 'legendary'
  },
  
  6656: {
    id: 6656,
    name: 'Malignance',
    cost: 2700,
    stats: { ap: 80, mana: 600, ah: 25 },
    passive: 'Hatefog: Casting ultimate creates a zone that deals 60 + 12% AP magic damage per second for 3s. Gain 20 ultimate haste.',
    buildPath: [3802, 3108],
    tags: ['AP', 'MANA', 'ABILITY_HASTE'],
    goodFor: ['Ult-reliant champions', 'Zone control'],
    champions: ['Karthus', 'Morgana', 'Fiddlesticks', 'Neeko', 'Kennen'],
    icon: '6656.png',
    tier: 'legendary'
  },
  
  // S2026 AP Bruiser Item
  223116: {
    id: 223116,
    name: "Bloodletter's Curse",
    cost: 2900,
    stats: { ap: 60, hp: 350, ah: 15 },
    passive: 'Vile Decay: Ability damage shreds 5% MR per stack (max 30% over 6 stacks). Stacks last 6s.',
    buildPath: [3136, 3108],
    tags: ['AP', 'HEALTH', 'ABILITY_HASTE', 'MAGIC_PEN'],
    goodFor: ['AP bruisers', 'Extended fights', 'vs tanks'],
    champions: ['Mordekaiser', 'Gwen', 'Singed', 'Swain', 'Diana'],
    icon: '3116.png',
    tier: 'legendary'
  },

  // ============ TANK ITEMS ============
  3084: {
    id: 3084,
    name: 'Heartsteel',
    cost: 3000,
    stats: { hp: 800, ah: 10 },
    passive: 'Colossal Consumption: Every 30s, attacking a champion deals 6% total HP bonus damage and grants permanent HP (2% max HP, max 10% vs same target).',
    buildPath: [1011, 3067, 1028],
    tags: ['HEALTH', 'ABILITY_HASTE'],
    goodFor: ['HP stacking', 'Scaling tanks', 'Late game'],
    champions: ['Sion', 'Cho\'Gath', 'Dr. Mundo', 'Tahm Kench', 'Volibear'],
    icon: '3084.png',
    tier: 'legendary'
  },
  
  6665: {
    id: 6665,
    name: "Jak'Sho, The Protean",
    cost: 3200,
    stats: { hp: 400, armor: 30, mr: 30, ah: 10 },
    passive: 'Voidborn Resilience: Combat grants 2 armor and MR per second (max 8 stacks). At max stacks, gain 30% bonus armor and MR.',
    buildPath: [3105, 1011],
    tags: ['HEALTH', 'ARMOR', 'MAGIC_RESIST', 'ABILITY_HASTE'],
    goodFor: ['Mixed damage', 'Extended fights', 'All tanks'],
    champions: ['Most tanks', 'Bruisers needing tankiness'],
    icon: '6665.png',
    tier: 'legendary'
  },
  
  3068: {
    id: 3068,
    name: 'Sunfire Aegis',
    cost: 2700,
    stats: { hp: 400, armor: 40 },
    passive: 'Immolate: Deal 15 + 1.5% bonus HP magic damage per second to nearby enemies. Increased damage vs monsters.',
    buildPath: [3751, 1031],
    tags: ['HEALTH', 'ARMOR'],
    goodFor: ['Waveclear', 'Sustained damage', 'Jungle clear'],
    champions: ['Ornn', 'Sion', 'Malphite', 'Shen', 'Poppy'],
    icon: '3068.png',
    tier: 'legendary'
  },
  
  6664: {
    id: 6664,
    name: 'Hollow Radiance',
    cost: 2800,
    stats: { hp: 400, mr: 40 },
    passive: 'Desolate: Immolate aura that deals magic damage. Enhanced vs monsters.',
    buildPath: [3751, 3211],
    tags: ['HEALTH', 'MAGIC_RESIST'],
    goodFor: ['Anti-AP', 'Waveclear', 'vs double AP'],
    champions: ['Galio', 'Sion vs AP', 'Tanks vs AP'],
    icon: '6664.png',
    tier: 'legendary'
  },
  
  3075: {
    id: 3075,
    name: 'Thornmail',
    cost: 2450,
    stats: { hp: 250, armor: 75 },
    passive: 'Thorns: Immobilizing enemies or being attacked reflects 10 + 20% bonus armor magic damage and applies 40% Grievous Wounds.',
    buildPath: [3076, 1028, 1031],
    tags: ['HEALTH', 'ARMOR'],
    goodFor: ['Anti-heal', 'Anti-auto attackers', 'vs ADCs'],
    champions: ['Tanks vs ADC/heal comps', 'Rammus', 'Malphite'],
    icon: '3075.png',
    tier: 'legendary'
  },
  
  3143: {
    id: 3143,
    name: "Randuin's Omen",
    cost: 2700,
    stats: { hp: 400, armor: 55 },
    passive: 'Rock Solid: Reduce damage from attacks by 5 + 0.35% max HP. Active: Slow nearby enemies by 55% for 2s.',
    buildPath: [3082, 1011],
    tags: ['HEALTH', 'ARMOR'],
    goodFor: ['Anti-crit', 'Slow utility', 'vs crit ADCs'],
    champions: ['Tanks vs crit ADCs'],
    icon: '3143.png',
    tier: 'legendary'
  },
  
  3742: {
    id: 3742,
    name: "Dead Man's Plate",
    cost: 2900,
    stats: { hp: 400, armor: 50, ms: 5 },
    passive: 'Shipwrecker: Moving builds Momentum (max 100). At max, next attack deals 1% max HP bonus damage and slows.',
    buildPath: [1031, 1011, 3158],
    tags: ['HEALTH', 'ARMOR', 'MOVEMENT'],
    goodFor: ['Engage', 'Catching targets', 'Roaming'],
    champions: ['Darius', 'Garen', 'Sett', 'Hecarim', 'Singed'],
    icon: '3742.png',
    tier: 'legendary'
  },
  
  4401: {
    id: 4401,
    name: 'Force of Nature',
    cost: 2900,
    stats: { hp: 400, mr: 70, ms: 5 },
    passive: 'Absorb: Taking magic damage grants stacks (max 6). At max, gain 20% magic damage reduction and 10% MS.',
    buildPath: [3211, 3158, 1057],
    tags: ['HEALTH', 'MAGIC_RESIST', 'MOVEMENT'],
    goodFor: ['Anti-AP', 'Heavy magic damage', 'vs multiple AP'],
    champions: ['Tanks vs AP comps'],
    icon: '4401.png',
    tier: 'legendary'
  },
  
  3065: {
    id: 3065,
    name: 'Spirit Visage',
    cost: 2900,
    stats: { hp: 400, mr: 50, ah: 10 },
    passive: 'Boundless Vitality: Increase all healing and shielding received by 25%.',
    buildPath: [3211, 3067],
    tags: ['HEALTH', 'MAGIC_RESIST', 'ABILITY_HASTE'],
    goodFor: ['Drain tanks', 'Healing synergy', 'Self-heal champions'],
    champions: ['Aatrox', 'Dr. Mundo', 'Warwick', 'Volibear', 'Maokai'],
    icon: '3065.png',
    tier: 'legendary'
  },
  
  3110: {
    id: 3110,
    name: 'Frozen Heart',
    cost: 2500,
    stats: { mana: 400, armor: 90, ah: 20 },
    passive: "Winter's Caress: Reduce nearby enemies' attack speed by 20%. Rock Solid: Reduce damage from attacks.",
    buildPath: [3082, 3024],
    tags: ['MANA', 'ARMOR', 'ABILITY_HASTE'],
    goodFor: ['Anti-auto attackers', 'CDR', 'Mana tanks'],
    champions: ['Mana tanks', 'Supports', 'Ryze', 'Kassadin'],
    icon: '3110.png',
    tier: 'legendary'
  },
  
  3001: {
    id: 3001,
    name: 'Abyssal Mask',
    cost: 2650,
    stats: { hp: 350, mr: 50 },
    passive: 'Unmake: Nearby enemies take 12% increased magic damage.',
    buildPath: [3211, 3010],
    tags: ['HEALTH', 'MAGIC_RESIST'],
    goodFor: ['AP damage amp', 'Team utility', 'AP comps'],
    champions: ['Tanks in AP comps', 'Diana', 'Amumu', 'Galio'],
    icon: '3001.png',
    tier: 'legendary'
  },
  
  6667: {
    id: 6667,
    name: 'Unending Despair',
    cost: 2800,
    stats: { hp: 350, armor: 40, mr: 40, ah: 10 },
    passive: 'Anguish: Every 6s, deal 4% max HP magic damage to nearby enemies and heal for the same amount.',
    buildPath: [3067, 1031, 1033],
    tags: ['HEALTH', 'ARMOR', 'MAGIC_RESIST', 'ABILITY_HASTE'],
    goodFor: ['Sustain', 'Extended fights', 'Teamfighting'],
    champions: ['All tanks', 'Drain fighters'],
    icon: '6667.png',
    tier: 'legendary'
  },
  
  6691: {
    id: 6691,
    name: 'Kaenic Rookern',
    cost: 2900,
    stats: { hp: 300, mr: 80 },
    passive: 'Magebane: After 6s without taking magic damage, gain a magic shield equal to 18% max HP.',
    buildPath: [3211, 1057],
    tags: ['HEALTH', 'MAGIC_RESIST'],
    goodFor: ['Heavy AP burst', 'vs double AP', 'Magic shield'],
    champions: ['Any vs double AP'],
    icon: '6691.png',
    tier: 'legendary'
  },

  // ============ SUPPORT ITEMS ============
  3190: {
    id: 3190,
    name: 'Locket of the Iron Solari',
    cost: 2500,
    stats: { armor: 35, mr: 35, ah: 15 },
    passive: 'Devotion: Active shields nearby allies for 180-360 (based on level) for 2.5s. 90s cooldown.',
    buildPath: [3105, 3067],
    tags: ['ARMOR', 'MAGIC_RESIST', 'ABILITY_HASTE'],
    goodFor: ['Team protection', 'Engage supports', 'Teamfights'],
    champions: ['Leona', 'Nautilus', 'Thresh', 'Braum', 'Alistar'],
    icon: '3190.png',
    tier: 'legendary'
  },
  
  3050: {
    id: 3050,
    name: "Zeke's Convergence",
    cost: 2400,
    stats: { armor: 25, mr: 25, ah: 20, hp: 250 },
    passive: 'Conduit: Bind to ally. Casting ult near them burns nearby enemies for magic damage.',
    buildPath: [3067, 3024],
    tags: ['ARMOR', 'MAGIC_RESIST', 'ABILITY_HASTE', 'HEALTH'],
    goodFor: ['ADC buff', 'Teamfights', 'Engage supports'],
    champions: ['Engage supports'],
    icon: '3050.png',
    tier: 'legendary'
  },
  
  3109: {
    id: 3109,
    name: "Knight's Vow",
    cost: 2200,
    stats: { hp: 350, ah: 15 },
    passive: 'Pledge: Bind to ally. Take 10% of damage they receive. Heal for 8% of damage they deal nearby.',
    buildPath: [3067, 1006],
    tags: ['HEALTH', 'ABILITY_HASTE'],
    goodFor: ['ADC protection', 'Frontline supports'],
    champions: ['Braum', 'Taric', 'Thresh', 'Alistar'],
    icon: '3109.png',
    tier: 'legendary'
  },
  
  3107: {
    id: 3107,
    name: 'Redemption',
    cost: 2300,
    stats: { hp: 200, mana: 100, ah: 15, healShield: 20 },
    passive: 'Active: After 2.5s delay, heal allies and damage enemies in a large area.',
    buildPath: [3114, 3067],
    tags: ['HEALTH', 'MANA', 'ABILITY_HASTE'],
    goodFor: ['Team healing', 'Enchanters', 'Teamfights'],
    champions: ['Soraka', 'Janna', 'Lulu', 'Sona', 'Seraphine'],
    icon: '3107.png',
    tier: 'legendary'
  },
  
  6617: {
    id: 6617,
    name: 'Staff of Flowing Water',
    cost: 2200,
    stats: { ap: 50, mana: 100, ah: 10, healShield: 10 },
    passive: 'Rapids: Healing or shielding grants you and target 20 AP and 20 AH for 4s.',
    buildPath: [3114, 1052],
    tags: ['AP', 'MANA', 'ABILITY_HASTE'],
    goodFor: ['AP buff', 'Enchanters', 'AP-heavy teams'],
    champions: ['Janna', 'Karma', 'Lulu', 'Nami', 'Seraphine'],
    icon: '6617.png',
    tier: 'legendary'
  },
  
  3504: {
    id: 3504,
    name: 'Ardent Censer',
    cost: 2200,
    stats: { ap: 50, mana: 100, ah: 10, healShield: 10 },
    passive: 'Sanctify: Healing or shielding grants you and target 10-30% attack speed and magic on-hit damage.',
    buildPath: [3114, 1052],
    tags: ['AP', 'MANA', 'ABILITY_HASTE'],
    goodFor: ['ADC buff', 'Attack speed comps', 'Hypercarry support'],
    champions: ['Lulu', 'Janna', 'Nami', 'Yuumi', 'Karma'],
    icon: '3504.png',
    tier: 'legendary'
  },
  
  3222: {
    id: 3222,
    name: "Mikael's Blessing",
    cost: 2300,
    stats: { mr: 50, mana: 100, ah: 15, healShield: 15 },
    passive: 'Purify: Active removes CC from ally and heals them. 120s cooldown.',
    buildPath: [3114, 3211],
    tags: ['MAGIC_RESIST', 'MANA', 'ABILITY_HASTE'],
    goodFor: ['Anti-CC', 'Cleanse', 'vs heavy CC'],
    champions: ['Any enchanter vs CC comps'],
    icon: '3222.png',
    tier: 'legendary'
  },

  // ============ BOOTS ============
  3047: {
    id: 3047,
    name: 'Plated Steelcaps',
    cost: 1100,
    stats: { armor: 20, ms: 45 },
    passive: 'Block 12% damage from attacks.',
    tags: ['ARMOR', 'MOVEMENT'],
    goodFor: ['vs AD/Auto attackers'],
    when: 'Enemy has 2+ AD threats or auto-attack focused champions',
    icon: '3047.png',
    tier: 'boots'
  },
  
  3111: {
    id: 3111,
    name: "Mercury's Treads",
    cost: 1100,
    stats: { mr: 25, ms: 45 },
    passive: '30% tenacity.',
    tags: ['MAGIC_RESIST', 'MOVEMENT', 'TENACITY'],
    goodFor: ['vs CC/AP'],
    when: 'Enemy has heavy CC or AP damage',
    icon: '3111.png',
    tier: 'boots'
  },
  
  3158: {
    id: 3158,
    name: 'Ionian Boots of Lucidity',
    cost: 900,
    stats: { ah: 20, ms: 45 },
    passive: '10 Summoner Spell Haste.',
    tags: ['ABILITY_HASTE', 'MOVEMENT'],
    goodFor: ['CDR focus'],
    when: 'Want maximum ability haste and summoner spell uptime',
    icon: '3158.png',
    tier: 'boots'
  },
  
  3020: {
    id: 3020,
    name: "Sorcerer's Shoes",
    cost: 1100,
    stats: { mpen: 18, ms: 45 },
    tags: ['MAGIC_PEN', 'MOVEMENT'],
    goodFor: ['AP damage'],
    when: 'Maximum magic damage output',
    icon: '3020.png',
    tier: 'boots'
  },
  
  3006: {
    id: 3006,
    name: "Berserker's Greaves",
    cost: 1100,
    stats: { as: 35, ms: 45 },
    tags: ['ATTACK_SPEED', 'MOVEMENT'],
    goodFor: ['Attack speed'],
    when: 'ADCs and auto-attackers',
    icon: '3006.png',
    tier: 'boots'
  },
  
  3009: {
    id: 3009,
    name: 'Boots of Swiftness',
    cost: 900,
    stats: { ms: 60 },
    passive: '25% slow resistance.',
    tags: ['MOVEMENT'],
    goodFor: ['Mobility', 'Anti-slow'],
    when: 'Need to avoid slows, roaming supports',
    icon: '3009.png',
    tier: 'boots'
  }
};

// Get item by ID
export const getItem = (id) => ITEMS[id] || null;

// Get item icon URL by ID
export const getItemIcon = (id) => {
  const item = ITEMS[id];
  return item ? `${ITEM_ICON_BASE}${item.icon}` : null;
};

// Item name to ID mapping for quick lookups
const ITEM_NAME_TO_ID = {};
Object.entries(ITEMS).forEach(([id, item]) => {
  ITEM_NAME_TO_ID[item.name.toLowerCase()] = parseInt(id);
});

// Common item aliases
const ITEM_ALIASES = {
  'bork': 3153,
  'ie': 3031,
  'pd': 3046,
  'rfc': 3094,
  'bt': 3072,
  'ldr': 3036,
  'ga': 3026,
  'dd': 6333,
  'steraks': 3053,
  'dcap': 3089,
  'zhonyas': 3157,
  'mercs': 3111,
  'tabis': 3047,
  'steelcaps': 3047,
};

// Get item icon URL by item NAME (the function we actually need)
export const getItemIconByName = (itemName) => {
  if (!itemName) return null;
  
  const normalizedName = itemName.toLowerCase().trim();
  
  // Check aliases first
  if (ITEM_ALIASES[normalizedName]) {
    const item = ITEMS[ITEM_ALIASES[normalizedName]];
    return item ? `${ITEM_ICON_BASE}${item.icon}` : null;
  }
  
  // Direct match
  if (ITEM_NAME_TO_ID[normalizedName]) {
    const item = ITEMS[ITEM_NAME_TO_ID[normalizedName]];
    return item ? `${ITEM_ICON_BASE}${item.icon}` : null;
  }
  
  // Partial match (for items like "Death's Dance" vs "Death's Dance")
  for (const [name, id] of Object.entries(ITEM_NAME_TO_ID)) {
    if (name.includes(normalizedName) || normalizedName.includes(name)) {
      const item = ITEMS[id];
      return item ? `${ITEM_ICON_BASE}${item.icon}` : null;
    }
  }
  
  // Try matching against all items
  for (const [id, item] of Object.entries(ITEMS)) {
    if (item.name.toLowerCase().includes(normalizedName) || 
        normalizedName.includes(item.name.toLowerCase())) {
      return `${ITEM_ICON_BASE}${item.icon}`;
    }
  }
  
  return null;
};

// Get item data by name
export const getItemByName = (itemName) => {
  if (!itemName) return null;
  const normalizedName = itemName.toLowerCase().trim();
  
  if (ITEM_ALIASES[normalizedName]) {
    return ITEMS[ITEM_ALIASES[normalizedName]] || null;
  }
  
  if (ITEM_NAME_TO_ID[normalizedName]) {
    return ITEMS[ITEM_NAME_TO_ID[normalizedName]] || null;
  }
  
  // Partial match
  for (const [name, id] of Object.entries(ITEM_NAME_TO_ID)) {
    if (name.includes(normalizedName) || normalizedName.includes(name)) {
      return ITEMS[id] || null;
    }
  }
  
  return null;
};

// Filter items by tag
export const getItemsByTag = (tag) => {
  return Object.values(ITEMS).filter(item => item.tags?.includes(tag));
};

// Filter items by tier
export const getItemsByTier = (tier) => {
  return Object.values(ITEMS).filter(item => item.tier === tier);
};

// Get items for a champion
export const getItemsForChampion = (championName) => {
  return Object.values(ITEMS).filter(item => 
    item.champions?.some(c => c.toLowerCase() === championName.toLowerCase())
  );
};

// Calculate total stats from items
export const calculateItemStats = (itemIds) => {
  const stats = {};
  itemIds.forEach(id => {
    const item = ITEMS[id];
    if (item?.stats) {
      Object.entries(item.stats).forEach(([stat, value]) => {
        if (typeof value === 'number') {
          stats[stat] = (stats[stat] || 0) + value;
        }
      });
    }
  });
  return stats;
};

// Calculate total cost
export const calculateBuildCost = (itemIds) => {
  return itemIds.reduce((total, id) => {
    const item = ITEMS[id];
    return total + (item?.cost || 0);
  }, 0);
};

export default ITEMS;
