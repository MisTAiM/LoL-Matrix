// =====================================================
// DATA DRAGON API - REAL RIOT DATA
// Auto-updating patch version and champion data
// No fake stats - only official Riot data
// =====================================================

const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com';

// Cache for API responses
let cachedVersion = null;
let cachedChampions = null;
let cachedItems = null;
let cachedRunes = null;
let lastFetch = null;
const CACHE_DURATION = 1000 * 60 * 60; // 1 hour cache

// Get the latest game version from Riot
export async function getLatestVersion() {
  try {
    if (cachedVersion && lastFetch && (Date.now() - lastFetch < CACHE_DURATION)) {
      return cachedVersion;
    }
    
    const response = await fetch(`${DDRAGON_BASE}/api/versions.json`);
    const versions = await response.json();
    cachedVersion = versions[0]; // Latest version is first
    lastFetch = Date.now();
    console.log(`[DataDragon] Current patch: ${cachedVersion}`);
    return cachedVersion;
  } catch (error) {
    console.error('[DataDragon] Failed to fetch version:', error);
    return '14.24.1'; // Fallback
  }
}

// Get all champion data
export async function getChampions() {
  try {
    const version = await getLatestVersion();
    
    if (cachedChampions) return cachedChampions;
    
    const response = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/champion.json`);
    const data = await response.json();
    cachedChampions = data.data;
    console.log(`[DataDragon] Loaded ${Object.keys(cachedChampions).length} champions`);
    return cachedChampions;
  } catch (error) {
    console.error('[DataDragon] Failed to fetch champions:', error);
    return {};
  }
}

// Get detailed champion data (abilities, stats, etc)
export async function getChampionDetails(championId) {
  try {
    const version = await getLatestVersion();
    const response = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/champion/${championId}.json`);
    const data = await response.json();
    return data.data[championId];
  } catch (error) {
    console.error(`[DataDragon] Failed to fetch champion ${championId}:`, error);
    return null;
  }
}

// Get all item data
export async function getItems() {
  try {
    const version = await getLatestVersion();
    
    if (cachedItems) return cachedItems;
    
    const response = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/item.json`);
    const data = await response.json();
    cachedItems = data.data;
    console.log(`[DataDragon] Loaded ${Object.keys(cachedItems).length} items`);
    return cachedItems;
  } catch (error) {
    console.error('[DataDragon] Failed to fetch items:', error);
    return {};
  }
}

// Get all rune data
export async function getRunes() {
  try {
    const version = await getLatestVersion();
    
    if (cachedRunes) return cachedRunes;
    
    const response = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/runesReforged.json`);
    cachedRunes = await response.json();
    console.log(`[DataDragon] Loaded ${cachedRunes.length} rune trees`);
    return cachedRunes;
  } catch (error) {
    console.error('[DataDragon] Failed to fetch runes:', error);
    return [];
  }
}

// Get summoner spell data
export async function getSummonerSpells() {
  try {
    const version = await getLatestVersion();
    const response = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/summoner.json`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('[DataDragon] Failed to fetch summoner spells:', error);
    return {};
  }
}

// URL builders
export function getChampionIconUrl(championId, version) {
  return `${DDRAGON_BASE}/cdn/${version}/img/champion/${championId}.png`;
}

export function getChampionSplashUrl(championId, skinNum = 0) {
  return `${DDRAGON_BASE}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`;
}

export function getChampionLoadingUrl(championId, skinNum = 0) {
  return `${DDRAGON_BASE}/cdn/img/champion/loading/${championId}_${skinNum}.jpg`;
}

export function getItemIconUrl(itemId, version) {
  return `${DDRAGON_BASE}/cdn/${version}/img/item/${itemId}.png`;
}

export function getSpellIconUrl(spellKey, version) {
  return `${DDRAGON_BASE}/cdn/${version}/img/spell/${spellKey}.png`;
}

export function getAbilityIconUrl(championId, ability, version) {
  // ability: 'P' for passive, 'Q', 'W', 'E', 'R' for abilities
  if (ability === 'P') {
    return `${DDRAGON_BASE}/cdn/${version}/img/passive/${championId}_P.png`;
  }
  return `${DDRAGON_BASE}/cdn/${version}/img/spell/${championId}${ability}.png`;
}

export function getRuneIconUrl(runeIconPath) {
  return `${DDRAGON_BASE}/cdn/img/${runeIconPath}`;
}

// Parse champion stats from Data Dragon format
export function parseChampionStats(champion) {
  if (!champion || !champion.stats) return null;
  
  const s = champion.stats;
  return {
    hp: s.hp,
    hpPerLevel: s.hpperlevel,
    mp: s.mp,
    mpPerLevel: s.mpperlevel,
    armor: s.armor,
    armorPerLevel: s.armorperlevel,
    mr: s.spellblock,
    mrPerLevel: s.spellblockperlevel,
    ad: s.attackdamage,
    adPerLevel: s.attackdamageperlevel,
    as: s.attackspeed,
    asPerLevel: s.attackspeedperlevel,
    moveSpeed: s.movespeed,
    attackRange: s.attackrange,
    hpRegen: s.hpregen,
    hpRegenPerLevel: s.hpregenperlevel,
    mpRegen: s.mpregen,
    mpRegenPerLevel: s.mpregenperlevel,
    crit: s.crit,
    critPerLevel: s.critperlevel
  };
}

// Calculate stat at specific level
export function getStatAtLevel(baseStat, perLevel, level) {
  return baseStat + (perLevel * (level - 1));
}

// Format champion tags to roles
export function getChampionRole(tags) {
  if (!tags || tags.length === 0) return 'Unknown';
  
  const roleMap = {
    'Assassin': 'Mid',
    'Fighter': 'Top',
    'Mage': 'Mid',
    'Marksman': 'ADC',
    'Support': 'Support',
    'Tank': 'Top'
  };
  
  // Check first tag for primary role
  return roleMap[tags[0]] || 'Jungle';
}

// Clear cache (useful for forcing refresh)
export function clearCache() {
  cachedVersion = null;
  cachedChampions = null;
  cachedItems = null;
  cachedRunes = null;
  lastFetch = null;
  console.log('[DataDragon] Cache cleared');
}

export default {
  getLatestVersion,
  getChampions,
  getChampionDetails,
  getItems,
  getRunes,
  getSummonerSpells,
  getChampionIconUrl,
  getChampionSplashUrl,
  getItemIconUrl,
  getSpellIconUrl,
  getAbilityIconUrl,
  getRuneIconUrl,
  parseChampionStats,
  getStatAtLevel,
  clearCache
};
