# LoL-Matrix ⚡

**Complete League of Legends Analytics, Counter-Building & Damage Calculator**

![Patch](https://img.shields.io/badge/Data_Dragon-16.2.1-blue)
![Champions](https://img.shields.io/badge/Champions-172-green)
![Items](https://img.shields.io/badge/Items-200+-orange)

## 🎮 Features

### 📊 Champion Overview
- **All 172 Champions** with official Riot icons & splash arts
- Real-time stats at any level (1-18)
- Win rates, pick rates, ban rates
- Tier rankings (S/A/B/C)
- Filter by role & tier

### 🔧 Counter Builder
- Select your champion & enemy team
- **Smart item recommendations** based on:
  - Enemy damage types (physical/magic/mixed)
  - Healing champions → Anti-heal items
  - Tanks → Tank-shredding items
  - Burst threats → Survivability items
- Visual damage distribution charts

### 🧮 Damage Calculator
- **Physical Damage** with armor, armor pen %, lethality
- **Magic Damage** with MR, magic pen %, flat pen
- **Effective HP** calculations
- **DPS** (auto attacks with crit)
- Damage vs Level graphs

### ⚔️ Item Database
- **200+ items** from Data Dragon
- Official item icons
- Cost, stats, descriptions
- Sorted by cost

## 🖼️ Image Sources

All images come directly from Riot's **Data Dragon CDN**:

```
Champion Icons:  https://ddragon.leagueoflegends.com/cdn/{version}/img/champion/{ChampionId}.png
Champion Splash: https://ddragon.leagueoflegends.com/cdn/img/champion/splash/{ChampionId}_0.jpg
Item Icons:      https://ddragon.leagueoflegends.com/cdn/{version}/img/item/{itemId}.png
```

## 🔄 Auto-Update System

The app includes utilities to fetch latest data:

```javascript
import { DataDragon } from './utils/api';

// Get latest version
const version = await DataDragon.getLatestVersion();

// Fetch all champions
const champions = await DataDragon.getChampions(version);

// Check for updates
const { hasUpdate, latestVersion } = await DataDragon.checkForUpdate(currentVersion);
```

## 🚀 Quick Start

```bash
# Clone & install
git clone https://github.com/YOUR_USERNAME/lol-matrix.git
cd lol-matrix
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
lol-matrix/
├── src/
│   ├── App.jsx                 # Main application
│   ├── data/
│   │   ├── champions_full.json # All 172 champions from Data Dragon
│   │   └── items_full.json     # All items from Data Dragon
│   └── utils/
│       └── api.js              # Data Dragon API + Math Engine
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🧮 Math Engine

```javascript
// Physical damage with armor pen
MathEngine.calcPhysicalDamage(rawDamage, armor, armorPenPercent, lethality, level)

// Magic damage with magic pen
MathEngine.calcMagicDamage(rawDamage, mr, magicPenPercent, flatMagicPen)

// Effective HP
MathEngine.calcEffectiveHP(hp, resistance)

// DPS calculation
MathEngine.calcDPS(ad, attackSpeed, critChance, critDamageMultiplier)

// Stats at level
MathEngine.statAtLevel(base, perLevel, level)
```

## 📊 Tech Stack

- **React 18** + **Vite**
- **Tailwind CSS**
- **Recharts** (graphs)
- **Riot Data Dragon API**

## 🔗 Data Dragon URLs

| Resource | URL |
|----------|-----|
| Versions | `https://ddragon.leagueoflegends.com/api/versions.json` |
| Champions | `https://ddragon.leagueoflegends.com/cdn/{version}/data/en_US/champion.json` |
| Items | `https://ddragon.leagueoflegends.com/cdn/{version}/data/en_US/item.json` |
| Runes | `https://ddragon.leagueoflegends.com/cdn/{version}/data/en_US/runesReforged.json` |

## 📜 License

MIT - Not affiliated with Riot Games.

League of Legends © Riot Games, Inc.
