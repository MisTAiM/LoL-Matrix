// =====================================================
// ITEM UTILITIES - DATA DRAGON INTEGRATION
// Proper item icons from Riot's official API
// No emojis - real item images only
// =====================================================

import { ITEMS, ITEM_ICON_BASE, DDRAGON_VERSION } from './itemsDatabase.js';

// Build a name -> item mapping for quick lookups
const ITEM_NAME_MAP = {};
Object.values(ITEMS).forEach(item => {
  ITEM_NAME_MAP[item.name.toLowerCase()] = item;
  // Also add common aliases
  const aliases = {
    'trinity force': 'triforce',
    'blade of the ruined king': 'bork',
    'lord dominik\'s regards': 'ldr',
    'infinity edge': 'ie',
    'phantom dancer': 'pd',
    'rapid firecannon': 'rfc',
    'guardian angel': 'ga',
    'death\'s dance': 'dd',
    'sterak\'s gage': 'steraks',
    'wit\'s end': 'wits end',
    'zhonya\'s hourglass': 'zhonyas',
    'rabadon\'s deathcap': 'dcap',
    'mercury\'s treads': 'mercs',
    'berserker\'s greaves': 'zerks'
  };
  if (aliases[item.name.toLowerCase()]) {
    ITEM_NAME_MAP[aliases[item.name.toLowerCase()]] = item;
  }
});

// Get item icon URL from item name
export function getItemIconUrl(itemName) {
  if (!itemName) return null;
  
  const item = ITEM_NAME_MAP[itemName.toLowerCase()];
  if (item && item.icon) {
    return `${ITEM_ICON_BASE}${item.icon}`;
  }
  
  // Fallback: try to find by partial match
  const normalizedName = itemName.toLowerCase();
  for (const [name, item] of Object.entries(ITEM_NAME_MAP)) {
    if (name.includes(normalizedName) || normalizedName.includes(name)) {
      if (item.icon) {
        return `${ITEM_ICON_BASE}${item.icon}`;
      }
    }
  }
  
  return null;
}

// Get item data by name
export function getItemByName(itemName) {
  if (!itemName) return null;
  return ITEM_NAME_MAP[itemName.toLowerCase()] || null;
}

// Get item icon URL by item ID
export function getItemIconUrlById(itemId) {
  const item = ITEMS[itemId];
  if (item && item.icon) {
    return `${ITEM_ICON_BASE}${item.icon}`;
  }
  return null;
}

// Complete item name to ID mapping for all items in the game
// This ensures every item reference can get a proper icon
export const ITEM_ID_MAP = {
  // Fighter/Bruiser Items
  'Trinity Force': 3078,
  'Stridebreaker': 6631,
  'Goredrinker': 6630,
  'Sundered Sky': 6698,
  'Ravenous Hydra': 3074,
  'Black Cleaver': 3071,
  'Maw of Malmortius': 3156,
  'Spear of Shojin': 6632,
  'Hullbreaker': 3181,
  'Death\'s Dance': 6333,
  'Sterak\'s Gage': 3053,
  'Serylda\'s Grudge': 6694,
  
  // Lethality Items
  'Opportunity': 3134,
  'Hubris': 3176,
  'The Collector': 6676,
  'Profane Hydra': 6697,
  'Edge of Night': 3814,
  'Eclipse': 6692,
  'Youmuu\'s Ghostblade': 3142,
  'Serpent\'s Fang': 6695,
  'Duskblade of Draktharr': 6691,
  'Axiom Arc': 6696,
  
  // Crit/ADC Items
  'Infinity Edge': 3031,
  'Kraken Slayer': 6672,
  'Galeforce': 6671,
  'Mortal Reminder': 3033,
  'Rapid Firecannon': 3094,
  'Phantom Dancer': 3046,
  'Bloodthirster': 3072,
  'Blade of the Ruined King': 3153,
  'Navori Flickerblade': 6675,
  'Lord Dominik\'s Regards': 3036,
  'Essence Reaver': 3508,
  'Stormrazor': 3095,
  'Guardian Angel': 3026,
  'Wit\'s End': 3091,
  'Runaan\'s Hurricane': 3085,
  'Guinsoo\'s Rageblade': 3124,
  
  // AP Items
  'Hexoptics C44': 4644,
  'Stormsurge': 4645,
  'Shadowflame': 4646,
  'Void Staff': 3135,
  'Lich Bane': 3100,
  'Malignance': 4647,
  'Luden\'s Tempest': 3020,
  'Rabadon\'s Deathcap': 3089,
  'Zhonya\'s Hourglass': 3157,
  'Banshee\'s Veil': 3102,
  'Cosmic Drive': 4629,
  'Horizon Focus': 4628,
  'Morellonomicon': 3165,
  'Nashor\'s Tooth': 3115,
  'Rod of Ages': 3003,
  'Archangel\'s Staff': 3040,
  'Liandry\'s Torment': 4637,
  'Demonic Embrace': 4637,
  'Riftmaker': 4636,
  'Hextech Rocketbelt': 3152,
  'Night Harvester': 4636,
  'Everfrost': 6656,
  'Mejai\'s Soulstealer': 3041,
  'Cryptbloom': 3011,
  
  // Tank Items
  'Heartsteel': 3084,
  'Sunfire Aegis': 3068,
  'Hollow Radiance': 3069,
  'Thornmail': 3075,
  'Force of Nature': 4401,
  'Spirit Visage': 3065,
  'Frozen Heart': 3110,
  'Abyssal Mask': 3001,
  'Unending Despair': 2501,
  'Kaenic Rookern': 3170,
  'Dead Man\'s Plate': 3742,
  'Randuin\'s Omen': 3143,
  'Warmog\'s Armor': 3083,
  'Gargoyle Stoneplate': 3193,
  'Anathema\'s Chains': 3866,
  'Jak\'Sho, The Protean': 3119,
  
  // Support Items
  'Locket of the Iron Solari': 3190,
  'Redemption': 3107,
  'Staff of Flowing Water': 6616,
  'Ardent Censer': 3504,
  'Mikael\'s Blessing': 3222,
  'Shurelya\'s Battlesong': 2065,
  'Knight\'s Vow': 3109,
  'Zeke\'s Convergence': 3050,
  'Moonstone Renewer': 6617,
  'Imperial Mandate': 4005,
  'Echoes of Helia': 3010,
  
  // Boots
  'Plated Steelcaps': 3047,
  'Mercury\'s Treads': 3111,
  'Ionian Boots of Lucidity': 3158,
  'Boots of Swiftness': 3009,
  'Berserker\'s Greaves': 3006,
  'Sorcerer\'s Shoes': 3020,
  'Mobility Boots': 3117,
  
  // Starter Items
  'Doran\'s Blade': 1055,
  'Doran\'s Ring': 1056,
  'Doran\'s Shield': 1054,
  'Long Sword': 1036,
  'Corrupting Potion': 2033,
  'Cull': 1083,
  'Dark Seal': 1082,
  'Tear of the Goddess': 3070,
  
  // Jungle Items
  'Gustwalker Hatchling': 3865,
  'Mosstomper Seedling': 3864,
  'Scorchclaw Pup': 3863,
};

// Get icon URL for any item by name (uses the mapping)
export function getItemIcon(itemName) {
  if (!itemName) return null;
  
  // Direct match
  if (ITEM_ID_MAP[itemName]) {
    return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/item/${ITEM_ID_MAP[itemName]}.png`;
  }
  
  // Case-insensitive match
  const normalizedName = itemName.toLowerCase();
  for (const [name, id] of Object.entries(ITEM_ID_MAP)) {
    if (name.toLowerCase() === normalizedName) {
      return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/item/${id}.png`;
    }
  }
  
  // Partial match (for items like "Sterak's" instead of "Sterak's Gage")
  for (const [name, id] of Object.entries(ITEM_ID_MAP)) {
    if (name.toLowerCase().includes(normalizedName) || normalizedName.includes(name.toLowerCase())) {
      return `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/item/${id}.png`;
    }
  }
  
  // Last resort: try the database
  const itemFromDb = getItemByName(itemName);
  if (itemFromDb) {
    return `${ITEM_ICON_BASE}${itemFromDb.icon}`;
  }
  
  return null;
}

// Component helper - returns image element or fallback
export function renderItemIcon(itemName, size = 32, className = '') {
  const iconUrl = getItemIcon(itemName);
  if (iconUrl) {
    return {
      type: 'img',
      src: iconUrl,
      alt: itemName,
      width: size,
      height: size,
      className: `rounded ${className}`
    };
  }
  return null;
}

// Export the Data Dragon version for use elsewhere
export { DDRAGON_VERSION, ITEM_ICON_BASE };
