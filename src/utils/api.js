// Data Dragon API Utilities
// Fetches champion, item, and rune data from Riot's CDN

const DDRAGON_BASE = 'https://ddragon.leagueoflegends.com';

export const DataDragon = {
  // Get latest version
  async getLatestVersion() {
    const res = await fetch(`${DDRAGON_BASE}/api/versions.json`);
    const versions = await res.json();
    return versions[0]; // First is always latest
  },

  // Get all champion data
  async getChampions(version = null) {
    if (!version) version = await this.getLatestVersion();
    const res = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/champion.json`);
    return res.json();
  },

  // Get detailed champion data (includes abilities)
  async getChampionDetail(championId, version = null) {
    if (!version) version = await this.getLatestVersion();
    const res = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/champion/${championId}.json`);
    return res.json();
  },

  // Get all item data
  async getItems(version = null) {
    if (!version) version = await this.getLatestVersion();
    const res = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/item.json`);
    return res.json();
  },

  // Get all rune data
  async getRunes(version = null) {
    if (!version) version = await this.getLatestVersion();
    const res = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/runesReforged.json`);
    return res.json();
  },

  // Get summoner spell data
  async getSummonerSpells(version = null) {
    if (!version) version = await this.getLatestVersion();
    const res = await fetch(`${DDRAGON_BASE}/cdn/${version}/data/en_US/summoner.json`);
    return res.json();
  },

  // Image URL builders
  getChampionIcon: (championId, version) => 
    `${DDRAGON_BASE}/cdn/${version}/img/champion/${championId}.png`,
  
  getChampionSplash: (championId, skinNum = 0) => 
    `${DDRAGON_BASE}/cdn/img/champion/splash/${championId}_${skinNum}.jpg`,
  
  getChampionLoading: (championId, skinNum = 0) => 
    `${DDRAGON_BASE}/cdn/img/champion/loading/${championId}_${skinNum}.jpg`,
  
  getItemIcon: (itemId, version) => 
    `${DDRAGON_BASE}/cdn/${version}/img/item/${itemId}.png`,
  
  getSpellIcon: (spellId, version) => 
    `${DDRAGON_BASE}/cdn/${version}/img/spell/${spellId}.png`,
  
  getPassiveIcon: (passiveImage, version) => 
    `${DDRAGON_BASE}/cdn/${version}/img/passive/${passiveImage}`,

  getRuneIcon: (runeIcon) =>
    `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/${runeIcon.toLowerCase()}`,

  // Utility to check if new patch is available
  async checkForUpdate(currentVersion) {
    const latest = await this.getLatestVersion();
    return {
      hasUpdate: latest !== currentVersion,
      currentVersion,
      latestVersion: latest
    };
  }
};

// Math Engine for damage calculations
export const MathEngine = {
  // Calculate stat at specific level
  statAtLevel: (base, perLevel, level) => 
    base + (perLevel * (level - 1)),

  // Physical damage after armor reduction
  calcPhysicalDamage: (rawDamage, armor, armorPenPercent = 0, lethality = 0, attackerLevel = 18) => {
    // Lethality scales with level
    const effectiveLethality = lethality * (0.6 + 0.4 * attackerLevel / 18);
    // Apply armor pen then lethality
    const effectiveArmor = Math.max(0, armor * (1 - armorPenPercent / 100) - effectiveLethality);
    // Damage multiplier
    const multiplier = 100 / (100 + effectiveArmor);
    return rawDamage * multiplier;
  },

  // Magic damage after MR reduction
  calcMagicDamage: (rawDamage, magicResist, magicPenPercent = 0, flatMagicPen = 0) => {
    // Apply percent pen then flat pen
    const effectiveMR = Math.max(0, magicResist * (1 - magicPenPercent / 100) - flatMagicPen);
    const multiplier = 100 / (100 + effectiveMR);
    return rawDamage * multiplier;
  },

  // Effective HP (how much raw damage you can take)
  calcEffectiveHP: (hp, resistance) => 
    hp * (1 + resistance / 100),

  // DPS calculation (basic auto attacks)
  calcDPS: (ad, attackSpeed, critChance = 0, critDamageMultiplier = 2.0) => {
    const avgDamage = ad * (1 + critChance / 100 * (critDamageMultiplier - 1));
    return avgDamage * attackSpeed;
  },

  // Gold efficiency calculation
  calcGoldEfficiency: (item, goldValues) => {
    let statValue = 0;
    const stats = item.stats || {};
    
    // Standard gold values per stat
    const values = goldValues || {
      FlatPhysicalDamageMod: 35,      // AD
      FlatMagicDamageMod: 21.75,      // AP
      FlatHPPoolMod: 2.67,            // HP
      FlatMPPoolMod: 1.4,             // Mana
      FlatArmorMod: 20,               // Armor
      FlatSpellBlockMod: 18,          // MR
      PercentAttackSpeedMod: 25,      // AS (per 1%)
      FlatCritChanceMod: 40,          // Crit (per 1%)
      PercentMovementSpeedMod: 39.5,  // MS (per 1%)
      PercentLifeStealMod: 37.5,      // Lifesteal (per 1%)
      FlatMagicPenetrationMod: 31.11, // Flat magic pen
    };

    for (const [stat, value] of Object.entries(stats)) {
      if (values[stat]) {
        statValue += value * values[stat];
      }
    }

    return {
      statValue: Math.round(statValue),
      cost: item.cost,
      efficiency: item.cost > 0 ? ((statValue / item.cost) * 100).toFixed(1) : 0
    };
  },

  // Time to kill calculation
  calcTimeToKill: (attackerDPS, targetEffectiveHP) => 
    targetEffectiveHP / attackerDPS,

  // Armor/MR needed to reduce damage by X%
  resistanceForReduction: (reductionPercent) => 
    (100 * reductionPercent) / (100 - reductionPercent)
};

export default { DataDragon, MathEngine };
