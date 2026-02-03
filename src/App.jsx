import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, LineChart, Line, Legend, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { LayoutDashboard, BookOpen, Swords, Sparkles, Wrench, Eye, Target, TrendingUp, Trophy, Users, ChevronLeft, ChevronRight, Search, Star, Clock, Bookmark, MessageSquare, ThumbsUp, ThumbsDown, Plus, X, Check, AlertCircle, Info, Zap, Shield, Heart, Flame } from 'lucide-react';
import championsData from './data/champions_full.json';
import itemsData from './data/items_full.json';
import guidesData from './data/guides.json';
import runesData from './data/runes.json';
import { MathEngine, DataDragon } from './utils/api';
import { generateMatchup, getAllMatchups, championTraits, getCounters, getStrongAgainst } from './data/matchupEngine';
import { getChampionGuide, getAllGuides, guideStats } from './data/guidesEngine';
import { roleImprovement, generalImprovement, rankGoals } from './data/improvement';
import { runeMath, minorRuneMath, generateRunePage, championRunePresets } from './data/runeEngine';
import { skillAssessment, learningPaths, practiceLibrary, vodReviewSystem, warmUpRoutines, mentalPerformance, rankCoaching, statsToTrack } from './data/coachingSystem';
import { communityGuides, GUIDE_CATEGORIES, DIFFICULTY_LEVELS, filterGuides, sortGuides, validateGuide, generateGuideId } from './data/communityGuides';
import { TEAM_COMP_TYPES, COMP_CHAMPIONS, COMP_ITEM_BUILDS, SITUATIONAL_BUILDS, analyzeEnemyTeam, getCompInfo, getChampionsForComp, getBuildForComp } from './data/teamCompositions';
import { ITEMS as ITEMS_DB, getItem, getItemIcon, getItemIconByName, calculateBuildCost, ITEM_TAGS, CURRENT_PATCH, DDRAGON_VERSION } from './data/itemsDatabase';

const VERSION = championsData.meta.version;
const ICON_BASE = championsData.meta.iconBase;
const SPLASH_BASE = championsData.meta.splashBase;
const ITEM_ICON_BASE = itemsData.meta.iconBase;
const CHAMPIONS = championsData.champions;
const ITEMS = itemsData.items;
const RUNES = runesData.trees;
const RUNE_PAGES = runesData.recommendedPages;
const JUNGLE_PATHS = guidesData.junglePaths;
const PRACTICE = guidesData.practiceDrills;
const WAVE_MGMT = guidesData.waveManagement;

const TIER_COLORS = { S: '#FFD700', A: '#22C55E', B: '#3B82F6', C: '#6B7280', D: '#DC2626' };
const DMG_COLORS = { physical: '#F97316', magic: '#A855F7', mixed: '#3B82F6', true: '#FFFFFF' };
const CHART_COLORS = ['#3B82F6', '#22C55E', '#F97316', '#A855F7', '#EC4899', '#06B6D4'];

// Navigation tab icons mapping (Lucide React)
const NAV_ICONS = {
  overview: LayoutDashboard,
  guides: BookOpen,
  matchups: Swords,
  runes: Sparkles,
  builder: Wrench,
  tracker: Eye,
  practice: Target,
  improve: TrendingUp,
  coaching: Trophy,
  community: Users
};

// Summoner Spell Data Dragon mapping
const SUMMONER_SPELLS = {
  Flash: { id: 'SummonerFlash', cooldown: 300 },
  Ignite: { id: 'SummonerDot', cooldown: 180 },
  Heal: { id: 'SummonerHeal', cooldown: 240 },
  Teleport: { id: 'SummonerTeleport', cooldown: 360 },
  Exhaust: { id: 'SummonerExhaust', cooldown: 210 },
  Barrier: { id: 'SummonerBarrier', cooldown: 180 },
  Cleanse: { id: 'SummonerBoost', cooldown: 210 },
  Ghost: { id: 'SummonerHaste', cooldown: 210 },
  Smite: { id: 'SummonerSmite', cooldown: 90 },
  Mark: { id: 'SummonerSnowball', cooldown: 80 }
};

// Keystone rune icons mapping
const KEYSTONE_ICONS = {
  // Precision
  'Press the Attack': 'perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png',
  'Lethal Tempo': 'perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png',
  'Fleet Footwork': 'perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png',
  'Conqueror': 'perk-images/Styles/Precision/Conqueror/Conqueror.png',
  // Domination
  'Electrocute': 'perk-images/Styles/Domination/Electrocute/Electrocute.png',
  'Dark Harvest': 'perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png',
  'Hail of Blades': 'perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png',
  // Sorcery
  'Summon Aery': 'perk-images/Styles/Sorcery/SummonAery/SummonAery.png',
  'Arcane Comet': 'perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png',
  'Phase Rush': 'perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png',
  // Resolve
  'Grasp of the Undying': 'perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png',
  'Aftershock': 'perk-images/Styles/Resolve/Aftershock/Aftershock.png',
  'Guardian': 'perk-images/Styles/Resolve/Guardian/Guardian.png',
  // Inspiration
  'Glacial Augment': 'perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png',
  'Unsealed Spellbook': 'perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png',
  'First Strike': 'perk-images/Styles/Inspiration/FirstStrike/FirstStrike.png'
};

// Rune tree icons
const RUNE_TREE_ICONS = {
  Precision: 'perk-images/Styles/7201_Precision.png',
  Domination: 'perk-images/Styles/7200_Domination.png',
  Sorcery: 'perk-images/Styles/7202_Sorcery.png',
  Resolve: 'perk-images/Styles/7204_Resolve.png',
  Inspiration: 'perk-images/Styles/7203_Whimsy.png'
};

const getChampMeta = (c) => {
  const h = c.name.split('').reduce((a, b) => a + b.charCodeAt(0), 0);
  const wr = 48 + (h % 8) + (h % 100) / 100;
  return { wr, pr: 2 + (h % 18), br: 1 + (h % 25), tier: wr >= 52 ? 'S' : wr >= 50.5 ? 'A' : wr >= 49 ? 'B' : 'C' };
};

const ChampIcon = ({ id, size = 48, className = '' }) => (
  <img src={`${ICON_BASE}${id}.png`} alt={id} className={`rounded-lg ${className}`} style={{ width: size, height: size }} 
    onError={(e) => { e.target.src = `https://via.placeholder.com/${size}?text=${id?.[0] || '?'}`; }} />
);

const ItemIcon = ({ id, size = 32 }) => (
  <img src={`${ITEM_ICON_BASE}${id}.png`} alt={id} className="rounded" style={{ width: size, height: size }}
    onError={(e) => { e.target.src = `https://via.placeholder.com/${size}?text=?`; }} />
);

// Summoner Spell Icon - uses Data Dragon API
const SpellIcon = ({ spell, size = 28, className = '' }) => {
  const spellData = SUMMONER_SPELLS[spell];
  if (!spellData) return <div className={`bg-slate-600 rounded flex items-center justify-center text-xs ${className}`} style={{ width: size, height: size }}>?</div>;
  return (
    <img 
      src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/spell/${spellData.id}.png`}
      alt={spell}
      className={`rounded ${className}`}
      style={{ width: size, height: size }}
      onError={(e) => { e.target.src = `https://via.placeholder.com/${size}?text=${spell?.[0] || '?'}`; }}
      title={spell}
    />
  );
};

// Keystone Rune Icon - uses Data Dragon API
const KeystoneIcon = ({ keystone, size = 32, className = '' }) => {
  const iconPath = KEYSTONE_ICONS[keystone];
  if (!iconPath) return <div className={`bg-yellow-500/20 rounded-full flex items-center justify-center ${className}`} style={{ width: size, height: size }}><Sparkles size={size * 0.6} className="text-yellow-400" /></div>;
  return (
    <img 
      src={`https://ddragon.leagueoflegends.com/cdn/img/${iconPath}`}
      alt={keystone}
      className={`rounded-full ${className}`}
      style={{ width: size, height: size }}
      onError={(e) => { e.target.style.display = 'none'; }}
      title={keystone}
    />
  );
};

// Rune Tree Icon
const RuneTreeIcon = ({ tree, size = 24, className = '' }) => {
  const iconPath = RUNE_TREE_ICONS[tree];
  if (!iconPath) return <div className={`bg-purple-500/20 rounded-full flex items-center justify-center ${className}`} style={{ width: size, height: size }}>⬢</div>;
  return (
    <img 
      src={`https://ddragon.leagueoflegends.com/cdn/img/${iconPath}`}
      alt={tree}
      className={`${className}`}
      style={{ width: size, height: size }}
      title={tree}
    />
  );
};

// Champion Ability Icon - uses Data Dragon API
const AbilityIcon = ({ championId, ability, size = 32, className = '' }) => {
  // Ability should be 'P', 'Q', 'W', 'E', or 'R'
  const abilityMap = { P: 'passive', Q: 'Q', W: 'W', E: 'E', R: 'R' };
  const imgType = ability === 'P' ? 'passive' : 'spell';
  const imgName = ability === 'P' ? `${championId}_P.png` : `${championId}${ability}.png`;
  
  return (
    <img 
      src={`https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/${imgType}/${imgName}`}
      alt={`${championId} ${ability}`}
      className={`rounded ${className}`}
      style={{ width: size, height: size }}
      onError={(e) => { 
        e.target.src = `https://via.placeholder.com/${size}?text=${ability}`;
      }}
      title={`${ability} Ability`}
    />
  );
};

// Item icon by NAME - uses Data Dragon API images, no emojis
const ItemIconByName = ({ name, size = 28, className = '' }) => {
  const iconUrl = getItemIconByName(name);
  if (!iconUrl) {
    return <div className={`bg-slate-600 rounded flex items-center justify-center text-xs ${className}`} style={{ width: size, height: size }}>?</div>;
  }
  return (
    <img 
      src={iconUrl} 
      alt={name} 
      className={`rounded ${className}`} 
      style={{ width: size, height: size }}
      onError={(e) => { e.target.src = `https://via.placeholder.com/${size}?text=?`; }}
      title={name}
    />
  );
};

// Reusable component for displaying item builds with proper Data Dragon icons
const ItemBuildList = ({ items, colorClass = 'bg-blue-500/20' }) => (
  <div className="flex flex-wrap gap-2">
    {items.map((item, i) => (
      <div key={i} className={`flex items-center gap-2 px-2 py-1.5 ${colorClass} rounded-lg`}>
        <span className="text-xs text-slate-400 font-bold">{i+1}.</span>
        <ItemIconByName name={item} size={24} />
        <span className="text-sm font-medium">{item}</span>
      </div>
    ))}
  </div>
);

const TierBadge = ({ t }) => <span className="px-2 py-0.5 rounded text-xs font-bold text-black" style={{ backgroundColor: TIER_COLORS[t] }}>{t}</span>;

const StatBar = ({ label, value, max, color }) => (
  <div className="mb-2">
    <div className="flex justify-between text-xs mb-1"><span className="text-gray-400">{label}</span><span className="font-mono">{Math.round(value)}</span></div>
    <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden"><div className="h-full rounded-full transition-all" style={{ width: `${Math.min(100, (value / max) * 100)}%`, backgroundColor: color }} /></div>
  </div>
);

const Card = ({ children, className = '', title, icon }) => (
  <div className={`bg-slate-800/50 rounded-2xl border border-slate-700/50 overflow-hidden ${className}`}>
    {title && <div className="px-4 py-3 border-b border-slate-700/50 font-bold flex items-center gap-2">{icon} {title}</div>}
    <div className="p-4">{children}</div>
  </div>
);

// Navigation Tab with Lucide icons
const Tab = ({ active, onClick, tabKey, label }) => {
  const IconComponent = NAV_ICONS[tabKey];
  return (
    <button onClick={onClick} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap flex items-center gap-1.5 ${active ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
      {IconComponent && <IconComponent size={16} />}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};

export default function App() {
  const [tab, setTab] = useState('overview');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [roleFilter, setRoleFilter] = useState('All');
  const [level, setLevel] = useState(18);
  const [yourChamp, setYourChamp] = useState(null);
  const [enemies, setEnemies] = useState([null, null, null, null, null]);
  const [calc, setCalc] = useState({ raw: 500, armor: 100, mr: 60, armorPen: 30, leth: 18, mPen: 40, hp: 2500, ad: 300, as: 1.5, crit: 75 });
  const [selectedRune, setSelectedRune] = useState(RUNE_PAGES.ADC_Standard);
  const [enemyTracker, setEnemyTracker] = useState([
    { champ: null, flash: 300, ult: 0, tp: 0 },
    { champ: null, flash: 300, ult: 0, tp: 0 },
    { champ: null, flash: 300, ult: 0, tp: 0 },
    { champ: null, flash: 300, ult: 0, tp: 0 },
    { champ: null, flash: 300, ult: 0, tp: 0 }
  ]);
  const [goals, setGoals] = useState([
    { id: 1, text: 'Reach 7 CS/min consistently', done: false },
    { id: 2, text: 'Die less than 5 times per game', done: false },
    { id: 3, text: 'Buy a control ward every back', done: true }
  ]);
  const [newGoal, setNewGoal] = useState('');
  const [checkedItems, setCheckedItems] = useState({});
  const [improveRole, setImproveRole] = useState('Jungle');
  const [runeEnemy, setRuneEnemy] = useState(null);
  const [coachingTab, setCoachingTab] = useState('assessment');
  
  // Community Guides State
  const [communityTab, setCommunityTab] = useState('browse');
  const [guideFilter, setGuideFilter] = useState({ champion: '', role: '', category: '', search: '' });
  const [guideSort, setGuideSort] = useState('rating');
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [userGuides, setUserGuides] = useState([...communityGuides]);
  const [showGuideForm, setShowGuideForm] = useState(false);
  const [newGuide, setNewGuide] = useState({
    title: '', champion: '', role: '', category: 'COMPREHENSIVE', difficulty: 'INTERMEDIATE',
    introduction: '', 
    prosAndCons: { pros: ['', '', ''], cons: ['', '', ''] },
    runes: { keystone: '', primaryTree: '', secondaryTree: '', explanation: '' }, 
    itemBuilds: {
      starter: ['', ''],
      core: ['', '', ''],
      situational: ['', '', ''],
      boots: ''
    },
    summonerSpells: { primary: 'Flash', secondary: '' },
    abilities: { skillOrder: 'Q > E > W', maxFirst: 'Q', maxSecond: 'E' },
    matchups: [{ champion: '', difficulty: 'Skill', tip: '' }],
    combos: [{ name: '', inputs: '', difficulty: 'Easy' }],
    tips: ['', '', ''], 
    author: { username: '', rank: '', server: '' }
  });

  const filteredChamps = useMemo(() =>
    Object.values(CHAMPIONS).map(c => ({ ...c, ...getChampMeta(c) }))
      .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
      .filter(c => roleFilter === 'All' || c.role === roleFilter)
      .sort((a, b) => b.wr - a.wr), [search, roleFilter]);

  const getStats = useCallback((c, l) => {
    if (!c?.stats) return null;
    const s = c.stats;
    return {
      hp: Math.round(MathEngine.statAtLevel(s.hp, s.hpL, l)),
      armor: Math.round(MathEngine.statAtLevel(s.armor, s.armorL, l)),
      mr: Math.round(MathEngine.statAtLevel(s.mr, s.mrL, l)),
      ad: Math.round(MathEngine.statAtLevel(s.ad, s.adL, l)),
      as: (s.as * (1 + s.asL * (l - 1) / 100)).toFixed(3),
      ms: s.ms, range: s.range
    };
  }, []);

  const counterRecs = useMemo(() => {
    if (!yourChamp || enemies.every(e => !e)) return null;
    const valid = enemies.filter(Boolean);
    let phys = 0, mag = 0, heal = 0, tank = 0;
    const healers = ['Aatrox', 'Vladimir', 'Soraka', 'Yuumi', 'Fiora', 'Warwick', 'DrMundo', 'Swain'];
    valid.forEach(e => {
      if (e.damageType === 'physical') phys++; else if (e.damageType === 'magic') mag++; else { phys += 0.5; mag += 0.5; }
      if (healers.includes(e.id)) heal++;
      if (e.class?.some(cl => ['Tank', 'Juggernaut'].includes(cl))) tank++;
    });
    const recs = [];
    if (phys >= 3) recs.push({ p: 'HIGH', type: 'Armor', items: ['3047', '3143', '3075'], why: `${Math.round(phys)} physical dmg`, color: '#F97316' });
    if (mag >= 3) recs.push({ p: 'HIGH', type: 'MR', items: ['3111', '4401', '3065'], why: `${Math.round(mag)} magic dmg`, color: '#A855F7' });
    if (heal >= 1) recs.push({ p: 'CRIT', type: 'Anti-Heal', items: yourChamp.damageType === 'physical' ? ['3033'] : ['3165'], why: `${heal} healer(s)`, color: '#DC2626' });
    if (tank >= 2) recs.push({ p: 'HIGH', type: 'Tank Shred', items: yourChamp.damageType === 'physical' ? ['3036', '3153'] : ['3135'], why: `${tank} tanks`, color: '#22C55E' });
    return recs;
  }, [yourChamp, enemies]);

  const calcResults = useMemo(() => ({
    physDmg: MathEngine.calcPhysicalDamage(calc.raw, calc.armor, calc.armorPen, calc.leth, level),
    magDmg: MathEngine.calcMagicDamage(calc.raw, calc.mr, calc.mPen, 15),
    physEHP: MathEngine.calcEffectiveHP(calc.hp, calc.armor),
    magEHP: MathEngine.calcEffectiveHP(calc.hp, calc.mr),
    dps: MathEngine.calcDPS(calc.ad, calc.as, calc.crit, 2.0)
  }), [calc, level]);

  const guide = selected ? getChampionGuide(selected.id) : null;

  const counterPicks = useMemo(() => {
    if (!enemies.some(Boolean)) return null;
    const suggestions = {};
    enemies.forEach((e, i) => {
      if (!e) return;
      const role = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'][i];
      const counters = Object.values(CHAMPIONS)
        .filter(c => c.role === role && c.id !== e.id)
        .map(c => ({ ...c, ...getChampMeta(c) }))
        .filter(c => c.wr > 50)
        .slice(0, 3);
      suggestions[role] = { enemy: e, counters };
    });
    return suggestions;
  }, [enemies]);

  const updateTracker = (idx, field, value) => {
    const newTracker = [...enemyTracker];
    newTracker[idx] = { ...newTracker[idx], [field]: value };
    setEnemyTracker(newTracker);
  };

  const addGoal = () => {
    if (!newGoal.trim()) return;
    setGoals([...goals, { id: Date.now(), text: newGoal, done: false }]);
    setNewGoal('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="LoL-Matrix" className="w-11 h-11 rounded-xl shadow-lg shadow-blue-500/30 object-contain" />
              <div>
                <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">LoL-Matrix Pro</h1>
                <p className="text-[10px] text-slate-500">World-Class Coaching Platform • v{VERSION}</p>
              </div>
            </div>
            <input type="text" placeholder="Search champions..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 max-w-xs bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-sm" />
            <div className="flex gap-1 bg-slate-800/50 rounded-xl p-1 border border-slate-700/50 overflow-x-auto">
              <Tab active={tab === 'overview'} onClick={() => setTab('overview')} tabKey="overview" label="Overview" />
              <Tab active={tab === 'guides'} onClick={() => setTab('guides')} tabKey="guides" label="Guides" />
              <Tab active={tab === 'matchups'} onClick={() => setTab('matchups')} tabKey="matchups" label="Matchups" />
              <Tab active={tab === 'runes'} onClick={() => setTab('runes')} tabKey="runes" label="Runes" />
              <Tab active={tab === 'builder'} onClick={() => setTab('builder')} tabKey="builder" label="Builder" />
              <Tab active={tab === 'tracker'} onClick={() => setTab('tracker')} tabKey="tracker" label="Tracker" />
              <Tab active={tab === 'practice'} onClick={() => setTab('practice')} tabKey="practice" label="Practice" />
              <Tab active={tab === 'improve'} onClick={() => setTab('improve')} tabKey="improve" label="Improve" />
              <Tab active={tab === 'coaching'} onClick={() => setTab('coaching')} tabKey="coaching" label="Coaching" />
              <Tab active={tab === 'community'} onClick={() => setTab('community')} tabKey="community" label="Community" />
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* FILTERS */}
        <div className="flex gap-3 mb-6 flex-wrap items-center">
          <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm">
            <option value="All">All Roles</option>
            {['Top', 'Jungle', 'Mid', 'ADC', 'Support'].map(r => <option key={r}>{r}</option>)}
          </select>
          <div className="flex items-center gap-2 ml-auto bg-slate-800/50 rounded-xl px-3 py-2 border border-slate-700/50">
            <span className="text-slate-400 text-sm">Lv:</span>
            <input type="range" min="1" max="18" value={level} onChange={(e) => setLevel(+e.target.value)} className="w-20 accent-purple-500" />
            <span className="font-bold text-purple-400 w-5">{level}</span>
          </div>
        </div>

        {/* OVERVIEW TAB */}
        {tab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[75vh] overflow-y-auto pr-2">
              {filteredChamps.map(c => (
                <div key={c.id} onClick={() => setSelected(c)} className={`p-3 rounded-xl cursor-pointer border-2 transition-all ${selected?.id === c.id ? 'border-purple-500 bg-purple-900/20' : 'border-slate-700/50 bg-slate-800/30 hover:border-slate-600'}`}>
                  <div className="flex items-center gap-3">
                    <ChampIcon id={c.id} size={44} className="border-2 border-slate-600" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2"><span className="font-bold truncate">{c.name}</span><TierBadge t={c.tier} /></div>
                      <div className="text-xs text-slate-400">{c.role} • {c.class?.slice(0, 2).join(', ')}</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-bold ${c.wr >= 51 ? 'text-green-400' : c.wr <= 49 ? 'text-red-400' : ''}`}>{c.wr.toFixed(1)}%</div>
                      <div className="text-xs text-slate-500">{c.pr.toFixed(1)}%</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {selected ? (<>
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/50" style={{ backgroundImage: `linear-gradient(to bottom, transparent 30%, rgba(15,23,42,0.98)), url(${SPLASH_BASE}${selected.id}_0.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center top' }}>
                  <div className="pt-28 pb-4 px-4">
                    <div className="flex items-end gap-3">
                      <ChampIcon id={selected.id} size={56} className="border-2 border-slate-600 shadow-xl" />
                      <div><h2 className="text-xl font-black">{selected.name}</h2><p className="text-slate-400 text-sm">{selected.title}</p></div>
                    </div>
                  </div>
                </div>
                <Card title="Stats at Level" icon={`📊 Lv.${level}`}>
                  {(() => { const s = getStats(selected, level); return s ? (<>
                    <StatBar label="HP" value={s.hp} max={3500} color="#EF4444" />
                    <StatBar label="Armor" value={s.armor} max={150} color="#F97316" />
                    <StatBar label="MR" value={s.mr} max={100} color="#A855F7" />
                    <StatBar label="AD" value={s.ad} max={150} color="#DC2626" />
                    <div className="flex gap-3 mt-3 text-xs text-slate-400">
                      <span>AS: <b className="text-white">{s.as}</b></span>
                      <span>MS: <b className="text-white">{s.ms}</b></span>
                      <span>Range: <b className="text-white">{s.range}</b></span>
                    </div>
                  </>) : null; })()}
                </Card>
                <Card>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-green-500/10 rounded-xl p-2"><div className="text-green-400 font-bold text-lg">{selected.wr?.toFixed(1)}%</div><div className="text-[10px] text-slate-500">Win</div></div>
                    <div className="bg-blue-500/10 rounded-xl p-2"><div className="text-blue-400 font-bold text-lg">{selected.pr?.toFixed(1)}%</div><div className="text-[10px] text-slate-500">Pick</div></div>
                    <div className="bg-red-500/10 rounded-xl p-2"><div className="text-red-400 font-bold text-lg">{selected.br}%</div><div className="text-[10px] text-slate-500">Ban</div></div>
                  </div>
                </Card>
                {guide && (
                  <Card title="Quick Tips" icon="💡">
                    <div className="space-y-2">
                      {guide.lanePhase?.tips?.slice(0, 3).map((tip, i) => (
                        <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-purple-400">•</span>{tip}</div>
                      ))}
                      {!guide.lanePhase?.tips && guide.strengths?.slice(0, 3).map((s, i) => (
                        <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-green-400">+</span>{s}</div>
                      ))}
                    </div>
                    <div className="mt-3 text-xs text-slate-400">
                      <span className={`px-2 py-0.5 rounded mr-2 ${guide.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : guide.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                        {guide.difficulty}
                      </span>
                      {guide.playstyle}
                    </div>
                    <button onClick={() => setTab('guides')} className="mt-3 text-purple-400 text-sm hover:underline">View full guide →</button>
                  </Card>
                )}
              </>) : <Card className="py-12 text-center"><span className="text-5xl block mb-3">👈</span><p className="text-slate-400">Select a champion</p></Card>}
            </div>
          </div>
        )}

        {/* GUIDES TAB */}
        {tab === 'guides' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Card title="Select Champion" icon="🎮">
                <select value={selected?.id || ''} onChange={(e) => setSelected(CHAMPIONS[e.target.value])} className="w-full bg-slate-700 rounded-xl px-4 py-3 border border-slate-600">
                  <option value="">Choose a champion...</option>
                  {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                {selected && (
                  <div className="mt-4 p-3 bg-slate-700/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <ChampIcon id={selected.id} size={56} />
                      <div>
                        <b className="text-lg">{selected.name}</b>
                        <div className="text-sm text-slate-400">{guide?.role || selected.role} • {guide?.damageType || 'Physical'}</div>
                        <div className="text-xs text-purple-400">{guide?.playstyle || 'Fighter'}</div>
                      </div>
                    </div>
                    {guide && (
                      <div className="mt-3 flex gap-2">
                        <span className={`text-xs px-2 py-1 rounded ${guide.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : guide.difficulty === 'Hard' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                          {guide.difficulty} Difficulty
                        </span>
                      </div>
                    )}
                  </div>
                )}
              </Card>
              {guide && (<>
                <Card title="Strengths & Weaknesses" icon="⚖️">
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-green-400 font-bold mb-1">STRENGTHS</div>
                      <div className="space-y-1">
                        {guide.strengths?.slice(0, 4).map((s, i) => (
                          <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-green-400">+</span>{s}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-red-400 font-bold mb-1">WEAKNESSES</div>
                      <div className="space-y-1">
                        {guide.weaknesses?.slice(0, 4).map((w, i) => (
                          <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-red-400">-</span>{w}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
                <Card title="Build & Runes" icon="🛠️">
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">SUMMONER SPELLS</div>
                      <div className="text-sm font-bold text-white">{guide.summonerSpells?.join(' + ')}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">SKILL ORDER</div>
                      <div className="text-sm font-bold text-white">{typeof guide.skillOrder === 'object' ? guide.skillOrder.order : guide.skillOrder}</div>
                      {guide.skillOrder?.explanation && <div className="text-xs text-slate-500 mt-1">{guide.skillOrder.explanation}</div>}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">KEYSTONE</div>
                      <div className="text-sm font-bold text-yellow-400">{guide.runes?.keystone}</div>
                      <div className="text-xs text-slate-500">{guide.runes?.primary} + {guide.runes?.secondary}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">CORE ITEMS</div>
                      <div className="text-sm text-slate-300">{guide.itemBuild?.core?.join(' → ')}</div>
                    </div>
                  </div>
                </Card>
              </>)}
            </div>
            <div className="lg:col-span-2 space-y-4">
              {guide ? (<>
                <Card title="Overview" icon="📖">
                  <p className="text-slate-300">{guide.description}</p>
                </Card>
                <Card title="Power Spikes" icon="⚡">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {guide.powerSpikes?.map((spike, i) => (
                      <div key={i} className="flex gap-3 p-3 bg-slate-700/30 rounded-lg">
                        <span className="text-yellow-400 font-bold text-sm whitespace-nowrap min-w-[80px]">{spike.time}</span>
                        <span className="text-sm text-slate-300">{spike.description}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card title="Combos" icon="🎯">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {guide.combos?.map((combo, i) => (
                      <div key={i} className="p-3 bg-slate-700/30 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-purple-400">{combo.name}</span>
                        </div>
                        <code className="text-xs bg-slate-800 px-2 py-1 rounded font-mono block mb-2 text-blue-300">{combo.keys}</code>
                        <p className="text-sm text-slate-400">{combo.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card title="Lane Phase" icon="🛡️">
                    <div className="space-y-3">
                      {typeof guide.lanePhase === 'object' ? (<>
                        <div>
                          <div className="text-xs text-blue-400 font-bold mb-1">EARLY GAME</div>
                          <p className="text-sm text-slate-300">{guide.lanePhase.early}</p>
                        </div>
                        <div>
                          <div className="text-xs text-yellow-400 font-bold mb-1">MID GAME</div>
                          <p className="text-sm text-slate-300">{guide.lanePhase.mid}</p>
                        </div>
                        {guide.lanePhase.tips && (
                          <div>
                            <div className="text-xs text-green-400 font-bold mb-1">TIPS</div>
                            <div className="space-y-1">
                              {guide.lanePhase.tips.slice(0, 3).map((tip, i) => (
                                <div key={i} className="text-xs text-slate-400 flex gap-1"><span className="text-green-400">•</span>{tip}</div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>) : (
                        <p className="text-sm text-slate-300">{guide.lanePhase}</p>
                      )}
                    </div>
                  </Card>
                  <Card title="Teamfighting" icon="⚔️">
                    <p className="text-sm text-slate-300">{guide.teamfighting}</p>
                    {guide.matchupTips && (
                      <div className="mt-4 space-y-2 pt-4 border-t border-slate-700">
                        <div className="text-xs text-slate-400 font-bold">MATCHUP TIPS</div>
                        <div className="text-xs text-red-400">{guide.matchupTips.hard}</div>
                        <div className="text-xs text-green-400">{guide.matchupTips.easy}</div>
                      </div>
                    )}
                  </Card>
                </div>
                {guide.lanePhase?.tips && guide.lanePhase.tips.length > 3 && (
                  <Card title="Additional Tips" icon="💡">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {guide.lanePhase.tips.slice(3).map((tip, i) => (
                        <div key={i} className="flex gap-2 text-sm p-2 bg-slate-700/30 rounded-lg"><span className="text-green-400">✓</span><span className="text-slate-300">{tip}</span></div>
                      ))}
                    </div>
                  </Card>
                )}
              </>) : (
                <Card className="py-20 text-center">
                  <span className="text-6xl block mb-4">📚</span>
                  <p className="text-slate-400 text-lg">Select a champion to view their in-depth guide</p>
                  <p className="text-purple-400 font-bold mt-4">📖 {guideStats.totalGuides || 172} Champion Guides Available!</p>
                  <p className="text-slate-500 text-sm mt-2">Detailed guides with combos, power spikes, builds, and strategies</p>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* MATCHUPS TAB */}
        {tab === 'matchups' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Card title="Your Champion" icon="🎮">
                <select value={selected?.id || ''} onChange={(e) => setSelected(CHAMPIONS[e.target.value])} className="w-full bg-slate-700 rounded-xl px-4 py-3 border border-slate-600">
                  <option value="">Choose your champion...</option>
                  {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                {selected && (
                  <div className="mt-4 flex items-center gap-3 p-3 bg-slate-700/30 rounded-xl">
                    <ChampIcon id={selected.id} size={48} />
                    <div>
                      <b>{selected.name}</b>
                      <div className="text-sm text-slate-400">{selected.role} • {championTraits[selected.id]?.playstyle || selected.class?.join(', ')}</div>
                    </div>
                  </div>
                )}
              </Card>
              {selected && championTraits[selected.id] && (
                <>
                  <Card title="Counters You" icon="⚠️">
                    <div className="space-y-2">
                      {(getCounters(selected.id) || []).map(c => (
                        <div key={c} className="flex items-center gap-2 p-2 bg-red-500/10 rounded-lg">
                          <ChampIcon id={c} size={32} />
                          <span className="text-sm">{c}</span>
                          <span className="text-xs text-red-400 ml-auto">Hard</span>
                        </div>
                      ))}
                      {(!getCounters(selected.id) || getCounters(selected.id).length === 0) && (
                        <p className="text-sm text-slate-400">No specific counters listed</p>
                      )}
                    </div>
                  </Card>
                  <Card title="You Counter" icon="✅">
                    <div className="space-y-2">
                      {(getStrongAgainst(selected.id) || []).map(c => (
                        <div key={c} className="flex items-center gap-2 p-2 bg-green-500/10 rounded-lg">
                          <ChampIcon id={c} size={32} />
                          <span className="text-sm">{c}</span>
                          <span className="text-xs text-green-400 ml-auto">Easy</span>
                        </div>
                      ))}
                      {(!getStrongAgainst(selected.id) || getStrongAgainst(selected.id).length === 0) && (
                        <p className="text-sm text-slate-400">No specific advantages listed</p>
                      )}
                    </div>
                  </Card>
                </>
              )}
              <Card title="Wave Management" icon="🌊">
                {Object.values(WAVE_MGMT).map((wave, i) => (
                  <div key={i} className="mb-3 p-3 bg-slate-700/30 rounded-lg">
                    <div className="font-bold text-blue-400 mb-1">{wave.name}</div>
                    <p className="text-xs text-slate-400 mb-1">{wave.description}</p>
                    <p className="text-xs text-slate-300"><b>When:</b> {wave.when}</p>
                  </div>
                ))}
              </Card>
            </div>
            <div className="lg:col-span-2 space-y-4">
              {selected && championTraits[selected.id] ? (
                <>
                  <Card title={`All Matchups for ${selected.name}`} icon={`⚔️ ${Object.keys(championTraits).length - 1} matchups`}>
                    <div className="mb-4">
                      <input type="text" placeholder="Search enemy champion..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full bg-slate-700 rounded-lg px-3 py-2 border border-slate-600 text-sm" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-2">
                      {Object.keys(championTraits)
                        .filter(enemy => enemy !== selected.id)
                        .filter(enemy => enemy.toLowerCase().includes(search.toLowerCase()))
                        .sort((a, b) => {
                          const mA = generateMatchup(selected.id, a);
                          const mB = generateMatchup(selected.id, b);
                          return mB.winRate - mA.winRate;
                        })
                        .map(enemy => {
                          const matchup = generateMatchup(selected.id, enemy);
                          const diffColor = matchup.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : 
                                           matchup.difficulty === 'Favorable' ? 'bg-blue-500/20 text-blue-400' :
                                           matchup.difficulty === 'Skill' ? 'bg-yellow-500/20 text-yellow-400' :
                                           matchup.difficulty === 'Unfavorable' ? 'bg-orange-500/20 text-orange-400' :
                                           'bg-red-500/20 text-red-400';
                          return (
                            <div key={enemy} className="p-3 bg-slate-700/30 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all">
                              <div className="flex items-center gap-2 mb-2">
                                <ChampIcon id={enemy} size={36} />
                                <div className="flex-1">
                                  <div className="font-bold text-sm">{enemy}</div>
                                  <div className="flex items-center gap-2">
                                    <span className={`text-xs px-2 py-0.5 rounded ${diffColor}`}>{matchup.difficulty}</span>
                                    <span className={`text-xs ${matchup.winRate >= 50 ? 'text-green-400' : 'text-red-400'}`}>{matchup.winRate}%</span>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-1">
                                {matchup.tips.slice(0, 2).map((tip, i) => (
                                  <div key={i} className="text-xs text-slate-400 flex gap-1"><span className="text-purple-400">•</span>{tip}</div>
                                ))}
                              </div>
                              <div className="mt-2 pt-2 border-t border-slate-600/50">
                                <p className="text-xs text-slate-500"><b className="text-slate-400">Key:</b> {matchup.keyTiming}</p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </Card>
                </>
              ) : (
                <Card className="py-20 text-center">
                  <span className="text-6xl block mb-4">⚔️</span>
                  <p className="text-slate-400 text-lg">Select a champion to view all matchups</p>
                  <p className="text-slate-500 text-sm mt-2">Dynamic matchup data for {Object.keys(championTraits).length} champions</p>
                  <p className="text-purple-400 text-xs mt-4">{(Object.keys(championTraits).length * (Object.keys(championTraits).length - 1)).toLocaleString()} total matchups available!</p>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* RUNES TAB */}
        {tab === 'runes' && (
          <div className="space-y-6">
            {/* Champion Selector for Matchup Runes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Your Champion" icon="🎮">
                <select value={selected?.id || ''} onChange={(e) => setSelected(CHAMPIONS[e.target.value])} className="w-full bg-slate-700 rounded-xl px-4 py-3 border border-slate-600">
                  <option value="">Select your champion...</option>
                  {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                {selected && <div className="mt-3 flex items-center gap-3"><ChampIcon id={selected.id} size={48} /><div><b>{selected.name}</b><div className="text-sm text-slate-400">{selected.role}</div></div></div>}
              </Card>
              <Card title="Enemy Laner" icon="⚔️">
                <select value={runeEnemy?.id || ''} onChange={(e) => setRuneEnemy(CHAMPIONS[e.target.value])} className="w-full bg-slate-700 rounded-xl px-4 py-3 border border-slate-600">
                  <option value="">Select enemy champion (optional)...</option>
                  {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                {runeEnemy && <div className="mt-3 flex items-center gap-3"><ChampIcon id={runeEnemy.id} size={48} /><div><b>{runeEnemy.name}</b><div className="text-sm text-red-400">Enemy</div></div></div>}
              </Card>
            </div>

            {/* Generated Rune Page */}
            {selected && (() => {
              const traits = championTraits[selected.id] || {};
              const enemyTraits = runeEnemy ? championTraits[runeEnemy.id] || {} : {};
              const page = generateRunePage(selected.name, runeEnemy?.name, selected.role, traits, enemyTraits);
              
              if (!page || !page.keystone) {
                return (
                  <Card title="Rune Recommendation" icon="🔮">
                    <div className="text-center text-slate-400 py-8">
                      <div className="text-4xl mb-4">🔮</div>
                      <p>Unable to generate rune page for {selected.name}.</p>
                      <p className="text-sm mt-2">Try selecting a different champion.</p>
                    </div>
                  </Card>
                );
              }
              
              const keystoneData = runeMath[page.keystone?.replace(/\s+/g, '')] || runeMath[page.keystone] || {};
              
              return (
                <Card title={`Recommended Runes: ${selected.name}${runeEnemy ? ` vs ${runeEnemy.name}` : ''}`} icon={<Sparkles size={20} />}>
                  {page.matchupSpecific && (
                    <div className="mb-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                      ✓ Matchup-specific page: <b>{page.matchupType}</b> runes optimized for this matchup
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Primary Tree */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-yellow-400 flex items-center gap-2">
                        <RuneTreeIcon tree={page.primaryTree} size={24} /> Primary: {page.primaryTree}
                      </h4>
                      
                      {/* Keystone */}
                      <div className="p-4 bg-gradient-to-br from-yellow-500/20 to-orange-500/10 rounded-xl border border-yellow-500/30">
                        <div className="flex items-center gap-3 mb-2">
                          <KeystoneIcon keystone={page.keystone} size={48} className="border-2 border-yellow-500/50" />
                          <div>
                            <div className="font-bold text-xl text-yellow-400">{page.keystone}</div>
                            <div className="text-xs text-yellow-400/70">Keystone</div>
                          </div>
                        </div>
                        {keystoneData.formula && (
                          <div className="mt-3 p-2 bg-slate-800/50 rounded text-xs text-slate-300">
                            <b>Formula:</b> {keystoneData.formula}
                          </div>
                        )}
                        {keystoneData.math?.level18 && (
                          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                            {Object.entries(keystoneData.math.level18).map(([key, val]) => (
                              <div key={key} className="p-1 bg-slate-700/50 rounded">
                                <span className="text-slate-400">{key}:</span> <span className="text-green-400">{typeof val === 'object' ? JSON.stringify(val) : val}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        {keystoneData.goldValue && (
                          <div className="mt-2 text-xs text-yellow-400/80">💰 {keystoneData.goldValue}</div>
                        )}
                      </div>
                      
                      {/* Primary Runes */}
                      <div className="space-y-2">
                        {page.primaryRunes?.map((rune, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center">
                              <Sparkles size={16} className="text-yellow-400" />
                            </div>
                            <div>
                              <div className="font-medium">{rune}</div>
                              {minorRuneMath[rune?.replace(/[:\s]/g, '')] && (
                                <div className="text-xs text-slate-400">{minorRuneMath[rune?.replace(/[:\s]/g, '')]?.effect}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Secondary Tree + Shards */}
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-blue-400 flex items-center gap-2">
                        <RuneTreeIcon tree={page.secondaryTree} size={24} /> Secondary: {page.secondaryTree}
                      </h4>
                      
                      {/* Secondary Runes */}
                      <div className="space-y-2">
                        {page.secondaryRunes?.map((rune, i) => (
                          <div key={i} className="flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg">
                            <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                              <Sparkles size={16} className="text-blue-400" />
                            </div>
                            <div>
                              <div className="font-medium">{rune}</div>
                              {minorRuneMath[rune?.replace(/[:\s]/g, '')] && (
                                <div className="text-xs text-slate-400">{minorRuneMath[rune?.replace(/[:\s]/g, '')]?.effect}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Reasoning */}
                      <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="text-xs text-blue-400 font-bold mb-1">Why this setup:</div>
                        <div className="text-sm text-slate-300">{page.reasoning?.keystone}</div>
                        <div className="text-sm text-slate-400 mt-1">{page.reasoning?.secondary}</div>
                      </div>
                      
                      {/* Stat Shards */}
                      <div>
                        <h4 className="font-bold mb-2 text-purple-400">Stat Shards</h4>
                        <div className="flex gap-2">
                          {page.statShards?.map((shard, i) => (
                            <div key={i} className="flex-1 p-2 bg-slate-700/50 rounded-lg text-center">
                              <div className="text-xs text-slate-400">Row {i + 1}</div>
                              <div className="text-sm font-medium text-purple-300">{shard}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })()}

            {/* Keystone Math Reference */}
            <Card title="Keystone Math & Calculations" icon="🧮">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(runeMath).map(([name, data]) => (
                  <div key={name} className="p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors">
                    <div className="font-bold text-purple-400 mb-2">{data.name || name}</div>
                    <div className="text-xs text-slate-400 mb-2">{data.formula}</div>
                    {data.math?.level18 && (
                      <div className="text-xs space-y-1 mb-2">
                        <div className="text-yellow-400 font-bold">Level 18:</div>
                        <div className="grid grid-cols-2 gap-1">
                          {Object.entries(data.math.level18).slice(0, 4).map(([key, val]) => (
                            <div key={key} className="text-slate-300">
                              {key}: <span className="text-green-400">{typeof val === 'object' ? JSON.stringify(val) : val}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {data.goldValue && <div className="text-xs text-yellow-400/70">💰 {data.goldValue}</div>}
                    {data.bestFor && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {data.bestFor.slice(0, 3).map((use, i) => (
                          <span key={i} className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded">{use}</span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Preset Pages */}
            <Card title="Quick Rune Pages" icon="📋">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(RUNE_PAGES).map(([key, page]) => (
                  <button key={key} onClick={() => setSelectedRune(page)} className={`text-left p-4 rounded-xl transition-all ${selectedRune === page ? 'bg-purple-600/30 border-2 border-purple-500' : 'bg-slate-700/30 hover:bg-slate-700/50 border border-slate-600'}`}>
                    <div className="font-bold">{page.name}</div>
                    <div className="text-sm text-purple-400">{page.keystone}</div>
                    <div className="text-xs text-slate-400 mt-1">{page.primary} + {page.secondary}</div>
                  </button>
                ))}
              </div>
            </Card>

            {/* Selected Preset Details */}
            {selectedRune && (
              <Card title={selectedRune.name} icon="📝">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-3" style={{ color: RUNES[selectedRune.primary]?.color || '#C8AA6E' }}>Primary: {selectedRune.primary}</h4>
                    <div className="p-3 bg-slate-700/30 rounded-xl mb-3">
                      <div className="font-bold text-purple-400">{selectedRune.keystone}</div>
                      <div className="text-xs text-slate-400 mt-1">{RUNES[selectedRune.primary]?.keystones?.find(k => k.name === selectedRune.keystone)?.description || 'Keystone ability'}</div>
                    </div>
                    <div className="space-y-2">
                      {selectedRune.primaryRunes?.map((rune, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-slate-700/20 rounded-lg text-sm"><span className="w-2 h-2 rounded-full bg-purple-400" />{rune}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3" style={{ color: RUNES[selectedRune.secondary]?.color || '#6B8BE8' }}>Secondary: {selectedRune.secondary}</h4>
                    <div className="space-y-2 mb-4">
                      {selectedRune.secondaryRunes?.map((rune, i) => (
                        <div key={i} className="flex items-center gap-2 p-2 bg-slate-700/20 rounded-lg text-sm"><span className="w-2 h-2 rounded-full bg-blue-400" />{rune}</div>
                      ))}
                    </div>
                    <h4 className="font-bold mb-2">Stat Shards</h4>
                    <div className="flex gap-2">
                      {selectedRune.statShards?.map((shard, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-700/30 rounded text-xs">{shard}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
        )}

        {/* BUILDER TAB */}
        {tab === 'builder' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card title="Your Champion" icon="🎮">
                <select value={yourChamp?.id || ''} onChange={(e) => setYourChamp(CHAMPIONS[e.target.value])} className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3">
                  <option value="">Select...</option>
                  {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                {yourChamp && <div className="mt-3 flex items-center gap-3"><ChampIcon id={yourChamp.id} size={48} /><div><b>{yourChamp.name}</b><div className="text-sm text-slate-400">{yourChamp.damageType} damage</div></div></div>}
              </Card>
              <Card title="Enemy Team" icon="👿">
                {['Top', 'Jungle', 'Mid', 'ADC', 'Support'].map((role, i) => (
                  <div key={role} className="flex items-center gap-2 mb-2">
                    <span className="w-14 text-xs text-slate-400">{role}</span>
                    <select value={enemies[i]?.id || ''} onChange={(e) => { const n = [...enemies]; n[i] = CHAMPIONS[e.target.value] || null; setEnemies(n); }} className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-2 py-1.5 text-sm">
                      <option value="">-</option>
                      {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                    {enemies[i] && <ChampIcon id={enemies[i].id} size={28} />}
                  </div>
                ))}
              </Card>
            </div>
            <div className="space-y-4">
              <Card title="Build Recommendations" icon="🔧">
                {counterRecs?.length ? counterRecs.map((r, i) => (
                  <div key={i} className="p-3 rounded-xl border mb-3" style={{ backgroundColor: `${r.color}10`, borderColor: `${r.color}30` }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: r.color }}>{r.p}</span>
                      <span className="font-bold">{r.type}</span>
                      <span className="text-xs text-slate-400 ml-auto">{r.why}</span>
                    </div>
                    <div className="flex gap-2">{r.items.map(id => <div key={id} className="flex items-center gap-1 px-2 py-1 bg-slate-700/50 rounded-lg"><ItemIcon id={id} size={24} /><span className="text-xs">{ITEMS[id]?.name || id}</span></div>)}</div>
                  </div>
                )) : <div className="text-center py-8 text-slate-500">Select champions for recommendations</div>}
              </Card>
              {counterPicks && Object.keys(counterPicks).length > 0 && (
                <Card title="Counter Picks" icon="🎯">
                  {Object.entries(counterPicks).map(([role, data]) => data.enemy && (
                    <div key={role} className="mb-3 p-3 bg-slate-700/30 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-slate-400">{role}:</span>
                        <ChampIcon id={data.enemy.id} size={24} />
                        <span className="text-sm">{data.enemy.name}</span>
                        <span className="text-xs text-slate-500">→ Counter with:</span>
                      </div>
                      <div className="flex gap-2">
                        {data.counters.map(c => (
                          <div key={c.id} className="flex items-center gap-1 px-2 py-1 bg-slate-600/50 rounded">
                            <ChampIcon id={c.id} size={20} />
                            <span className="text-xs">{c.name}</span>
                            <span className="text-[10px] text-green-400">{c.wr.toFixed(0)}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </Card>
              )}
            </div>
          </div>
        )}

        {/* TRACKER TAB */}
        {tab === 'tracker' && (
          <div className="space-y-4">
            <Card title="Enemy Summoner Spell Tracker" icon={<Eye size={20} />}>
              <p className="text-sm text-slate-400 mb-4">Track enemy Flash, TP, and Ults. Click to start timer.</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-slate-400">
                      <th className="pb-2">Champion</th>
                      <th className="pb-2"><div className="flex items-center gap-1"><SpellIcon spell="Flash" size={16} /> Flash (300s)</div></th>
                      <th className="pb-2"><div className="flex items-center gap-1"><SpellIcon spell="Teleport" size={16} /> TP (360s)</div></th>
                      <th className="pb-2">Ult CD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {['Top', 'Jungle', 'Mid', 'ADC', 'Support'].map((role, i) => (
                      <tr key={role} className="border-t border-slate-700">
                        <td className="py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-slate-400 w-12">{role}</span>
                            <select value={enemyTracker[i].champ?.id || ''} onChange={(e) => updateTracker(i, 'champ', CHAMPIONS[e.target.value])} className="bg-slate-700 rounded px-2 py-1 text-sm border border-slate-600 w-32">
                              <option value="">Select...</option>
                              {Object.values(CHAMPIONS).sort((a, b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                            </select>
                          </div>
                        </td>
                        <td className="py-2">
                          <button onClick={() => updateTracker(i, 'flash', 300)} className={`px-3 py-1 rounded text-sm flex items-center gap-1 ${enemyTracker[i].flash > 0 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                            <SpellIcon spell="Flash" size={18} />
                            {enemyTracker[i].flash > 0 ? `${enemyTracker[i].flash}s` : 'UP'}
                          </button>
                        </td>
                        <td className="py-2">
                          <button onClick={() => updateTracker(i, 'tp', 360)} className={`px-3 py-1 rounded text-sm flex items-center gap-1 ${enemyTracker[i].tp > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
                            <SpellIcon spell="Teleport" size={18} />
                            {enemyTracker[i].tp > 0 ? `${enemyTracker[i].tp}s` : 'UP'}
                          </button>
                        </td>
                        <td className="py-2">
                          <input type="number" value={enemyTracker[i].ult} onChange={(e) => updateTracker(i, 'ult', +e.target.value)} className="w-16 bg-slate-700 rounded px-2 py-1 text-sm border border-slate-600" placeholder="CD" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Jungle Timers" icon={<Clock size={20} />}>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Drake</span><span>5:00 → Every 5:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Rift Herald</span><span>8:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Baron</span><span>20:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Elder</span><span>After 4 drakes</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Void Grubs</span><span>5:00 → 9:45</span></div>
                </div>
              </Card>
              <Card title="Summoner CDs" icon={<Zap size={20} />}>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center"><div className="flex items-center gap-2"><SpellIcon spell="Flash" size={20} /><span className="text-yellow-400">Flash</span></div><span>300s (5 min)</span></div>
                  <div className="flex justify-between items-center"><div className="flex items-center gap-2"><SpellIcon spell="Teleport" size={20} /><span className="text-blue-400">Teleport</span></div><span>360s (6 min)</span></div>
                  <div className="flex justify-between items-center"><div className="flex items-center gap-2"><SpellIcon spell="Ignite" size={20} /><span className="text-red-400">Ignite</span></div><span>180s (3 min)</span></div>
                  <div className="flex justify-between items-center"><div className="flex items-center gap-2"><SpellIcon spell="Exhaust" size={20} /><span className="text-gray-400">Exhaust</span></div><span>210s (3.5 min)</span></div>
                  <div className="flex justify-between items-center"><div className="flex items-center gap-2"><SpellIcon spell="Heal" size={20} /><span className="text-green-400">Heal</span></div><span>240s (4 min)</span></div>
                </div>
              </Card>
              <Card title="CS Goals" icon={<Target size={20} />}>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">5 min</span><span>44 CS (8.8/min)</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">10 min</span><span>80-100 CS</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">15 min</span><span>130-150 CS</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">20 min</span><span>180-200 CS</span></div>
                  <div className="flex justify-between text-green-400"><span>Perfect CS</span><span>10+ per min</span></div>
                </div>
              </Card>
            </div>
          </div>
        )}

        {/* PRACTICE TAB */}
        {tab === 'practice' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card title="Jungle Pathing" icon="🗺️">
                {Object.values(JUNGLE_PATHS).map((path, i) => (
                  <div key={i} className="p-3 bg-slate-700/30 rounded-xl mb-3">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-bold text-green-400">{path.name}</span>
                      <span className="text-xs bg-slate-600 px-2 py-0.5 rounded">{path.time}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {path.route.map((camp, j) => (
                        <span key={j} className="text-xs bg-slate-600/50 px-2 py-0.5 rounded">{j > 0 && '→ '}{camp}</span>
                      ))}
                    </div>
                    <div className="text-xs text-slate-400"><b>Best for:</b> {path.champions?.join(', ')}</div>
                  </div>
                ))}
              </Card>
            </div>
            <div className="space-y-4">
              {Object.entries(PRACTICE).map(([key, category]) => (
                <Card key={key} title={category.name} icon="🎯">
                  <div className="space-y-2">
                    {category.exercises.map((ex, i) => (
                      <div key={i} className="p-3 bg-slate-700/30 rounded-lg flex justify-between items-center">
                        <div>
                          <div className="font-bold text-sm">{ex.name}</div>
                          <div className="text-xs text-slate-400">{ex.goal}</div>
                        </div>
                        <span className={`text-xs px-2 py-0.5 rounded ${ex.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : ex.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{ex.difficulty}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* IMPROVE TAB */}
        {tab === 'improve' && (
          <div className="space-y-6">
            {/* Role Selector */}
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(roleImprovement).map(([key, role]) => (
                <button
                  key={key}
                  onClick={() => setImproveRole(key)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all ${
                    improveRole === key 
                      ? 'bg-purple-600 text-white scale-105' 
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                  }`}
                >
                  {role.icon} {role.name}
                </button>
              ))}
            </div>

            {/* Role Description */}
            <Card className="text-center">
              <div className="text-4xl mb-2">{roleImprovement[improveRole].icon}</div>
              <h2 className="text-2xl font-bold text-white mb-2">{roleImprovement[improveRole].name}</h2>
              <p className="text-slate-300">{roleImprovement[improveRole].description}</p>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Core Concepts */}
              <div className="space-y-4">
                <Card title="Core Concepts" icon="🧠">
                  <div className="space-y-3">
                    {roleImprovement[improveRole].coreConcepts.map((concept, i) => (
                      <div key={i} className="p-3 bg-slate-700/30 rounded-lg">
                        <div className="font-bold text-purple-400 mb-1">{concept.name}</div>
                        <div className="text-sm text-slate-300">{concept.description}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Champion Pool */}
                {roleImprovement[improveRole].championPool && (
                  <Card title="Recommended Champions" icon="👥">
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-green-400 font-bold mb-1">BEGINNER FRIENDLY</div>
                        <div className="text-sm text-slate-300">{roleImprovement[improveRole].championPool.beginner.join(', ')}</div>
                      </div>
                      <div>
                        <div className="text-xs text-yellow-400 font-bold mb-1">INTERMEDIATE</div>
                        <div className="text-sm text-slate-300">{roleImprovement[improveRole].championPool.intermediate.join(', ')}</div>
                      </div>
                      <div>
                        <div className="text-xs text-red-400 font-bold mb-1">ADVANCED</div>
                        <div className="text-sm text-slate-300">{roleImprovement[improveRole].championPool.advanced.join(', ')}</div>
                      </div>
                    </div>
                  </Card>
                )}
              </div>

              {/* Practice Drills */}
              <div className="space-y-4">
                <Card title="Practice Drills" icon="🎯">
                  <div className="space-y-3">
                    {roleImprovement[improveRole].practiceDrills.map((drill, i) => (
                      <div key={i} className="p-3 bg-slate-700/30 rounded-lg">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-white">{drill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            drill.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            drill.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            drill.difficulty === 'Advanced' ? 'bg-red-500/20 text-red-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>{drill.difficulty}</span>
                        </div>
                        <div className="text-xs text-slate-400 mb-1">⏱️ {drill.duration}</div>
                        <div className="text-sm text-slate-300 mb-2">{drill.description}</div>
                        <div className="text-xs text-green-400">🎯 Goal: {drill.goal}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Tips & Mistakes */}
              <div className="space-y-4">
                <Card title="Common Mistakes" icon="❌">
                  <div className="space-y-2">
                    {roleImprovement[improveRole].commonMistakes.map((mistake, i) => (
                      <div key={i} className="flex gap-2 text-sm p-2 bg-red-500/10 rounded-lg">
                        <span className="text-red-400">✗</span>
                        <span className="text-slate-300">{mistake}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card title="Advanced Tips" icon="💡">
                  <div className="space-y-2">
                    {roleImprovement[improveRole].advancedTips.map((tip, i) => (
                      <div key={i} className="flex gap-2 text-sm p-2 bg-green-500/10 rounded-lg">
                        <span className="text-green-400">✓</span>
                        <span className="text-slate-300">{tip}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            {/* Role-Specific Content */}
            {roleImprovement[improveRole].junglePaths && (
              <Card title="Jungle Pathing Guide" icon="🗺️">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(roleImprovement[improveRole].junglePaths).map(([key, path]) => (
                    <div key={key} className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-purple-400 mb-2">{path.name}</div>
                      <div className="text-sm text-blue-300 mb-2 font-mono">{path.path}</div>
                      <div className="text-xs text-slate-400 mb-2"><b>When:</b> {path.when}</div>
                      <div className="text-xs text-slate-500"><b>Good for:</b> {path.champions.join(', ')}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {roleImprovement[improveRole].waveManagement && (
              <Card title="Wave Management" icon="🌊">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {Object.entries(roleImprovement[improveRole].waveManagement).map(([key, desc]) => (
                    <div key={key} className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-yellow-400 capitalize mb-2">{key}</div>
                      <div className="text-sm text-slate-300">{desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {roleImprovement[improveRole].roamingGuide && (
              <Card title="Roaming Guide" icon="🏃">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-bold text-green-400 mb-2">WHEN TO ROAM</div>
                    <div className="space-y-1">
                      {roleImprovement[improveRole].roamingGuide.when.map((tip, i) => (
                        <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-green-400">•</span>{tip}</div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-blue-400 mb-2">HOW TO ROAM</div>
                    <div className="space-y-1">
                      {roleImprovement[improveRole].roamingGuide.how.map((tip, i) => (
                        <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-blue-400">•</span>{tip}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {roleImprovement[improveRole].wardingGuide && (
              <Card title="Warding Guide" icon="👁️">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(roleImprovement[improveRole].wardingGuide).map(([phase, wards]) => (
                    <div key={phase} className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-cyan-400 capitalize mb-2">{phase.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="space-y-1">
                        {wards.map((ward, i) => (
                          <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-cyan-400">•</span>{ward}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {roleImprovement[improveRole].positioningGuide && (
              <Card title="Positioning Guide" icon="📍">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {Object.entries(roleImprovement[improveRole].positioningGuide).map(([situation, advice]) => (
                    <div key={situation} className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-orange-400 capitalize mb-2">{situation}</div>
                      <div className="text-sm text-slate-300">{advice}</div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {roleImprovement[improveRole].viablePicks && (
              <Card title="Viable Off-Meta Picks" icon="🎭">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {Object.entries(roleImprovement[improveRole].viablePicks).map(([role, picks]) => (
                    <div key={role} className="p-3 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-purple-400 capitalize mb-2">{role.replace(/([A-Z])/g, ' $1').trim()}</div>
                      <div className="space-y-2">
                        {picks.map((pick, i) => (
                          <div key={i} className="text-xs">
                            <span className="text-white font-bold">{pick.champ}</span>
                            <div className="text-slate-400">{pick.why}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Goals and VOD Review */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card title="VOD Review Checklist" icon="📋">
                {Object.entries(generalImprovement.VODReview.checkList).length > 0 && (
                  <div className="space-y-1">
                    {generalImprovement.VODReview.checkList.map((item, i) => (
                      <label key={i} className="flex items-center gap-2 text-sm cursor-pointer p-2 hover:bg-slate-700/30 rounded">
                        <input type="checkbox" checked={checkedItems[`vod-${i}`] || false} onChange={(e) => setCheckedItems({ ...checkedItems, [`vod-${i}`]: e.target.checked })} className="rounded accent-purple-500" />
                        <span className={checkedItems[`vod-${i}`] ? 'text-slate-500 line-through' : 'text-slate-300'}>{item}</span>
                      </label>
                    ))}
                  </div>
                )}
              </Card>

              <Card title="Your Improvement Goals" icon="🎯">
                <div className="flex gap-2 mb-4">
                  <input type="text" value={newGoal} onChange={(e) => setNewGoal(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addGoal()} placeholder="Add a new goal..." className="flex-1 bg-slate-700 rounded-lg px-3 py-2 border border-slate-600 text-sm" />
                  <button onClick={addGoal} className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-bold hover:bg-purple-500">Add</button>
                </div>
                <div className="space-y-2">
                  {goals.map(goal => (
                    <div key={goal.id} className={`flex items-center gap-3 p-3 rounded-lg ${goal.done ? 'bg-green-500/10' : 'bg-slate-700/30'}`}>
                      <input type="checkbox" checked={goal.done} onChange={() => setGoals(goals.map(g => g.id === goal.id ? { ...g, done: !g.done } : g))} className="rounded accent-green-500" />
                      <span className={goal.done ? 'text-slate-500 line-through' : ''}>{goal.text}</span>
                      <button onClick={() => setGoals(goals.filter(g => g.id !== goal.id))} className="ml-auto text-red-400 hover:text-red-300">×</button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* General Tips */}
            <Card title="Universal Improvement Tips" icon="📚">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <div className="font-bold text-blue-400 mb-2">🎮 Fundamentals</div>
                  <div className="space-y-2">
                    {generalImprovement.fundamentals.map((f, i) => (
                      <div key={i} className="text-sm p-2 bg-blue-500/10 rounded-lg">
                        <span className="text-white font-bold">{f.name}:</span> <span className="text-slate-300">{f.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-400 mb-2">🧠 Mental Game</div>
                  <div className="space-y-2">
                    {generalImprovement.mentalGame.map((m, i) => (
                      <div key={i} className="text-sm p-2 bg-green-500/10 rounded-lg">
                        <span className="text-white font-bold">{m.name}:</span> <span className="text-slate-300">{m.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-yellow-400 mb-2">📖 Game Knowledge</div>
                  <div className="space-y-2">
                    {generalImprovement.gameKnowledge.map((g, i) => (
                      <div key={i} className="text-sm p-2 bg-yellow-500/10 rounded-lg">
                        <span className="text-white font-bold">{g.name}:</span> <span className="text-slate-300">{g.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* COACHING TAB */}
        {tab === 'coaching' && (
          <div className="space-y-6">
            {/* Coaching Navigation */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                { key: 'assessment', label: '📊 Assessment', desc: 'Skill Check' },
                { key: 'paths', label: '🛤️ Learning Paths', desc: 'Structured Plans' },
                { key: 'drills', label: '🎯 Drills', desc: 'Practice Library' },
                { key: 'vod', label: '📹 VOD Review', desc: 'Game Analysis' },
                { key: 'mental', label: '🧠 Mental', desc: 'Peak Performance' },
                { key: 'rank', label: '🏆 By Rank', desc: 'Specific Tips' }
              ].map(item => (
                <button
                  key={item.key}
                  onClick={() => setCoachingTab(item.key)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all ${
                    coachingTab === item.key 
                      ? 'bg-purple-600 text-white scale-105' 
                      : 'bg-slate-700 hover:bg-slate-600 text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* SKILL ASSESSMENT */}
            {coachingTab === 'assessment' && (
              <div className="space-y-6">
                <Card className="text-center py-6">
                  <div className="text-4xl mb-2">📊</div>
                  <h2 className="text-2xl font-bold">Skill Assessment Framework</h2>
                  <p className="text-slate-400">Evaluate your skills across all dimensions of League of Legends gameplay.</p>
                </Card>

                {Object.entries(skillAssessment.categories).map(([catKey, category]) => (
                  <Card key={catKey} title={`${category.name} (${(category.weight * 100)}% of overall)`} icon="📈">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="p-4 bg-slate-700/30 rounded-xl">
                          <div className="font-bold text-purple-400 mb-1">{skill.name}</div>
                          <div className="text-xs text-slate-400 mb-3">{skill.description}</div>
                          <div className="text-xs space-y-1">
                            <div className="flex justify-between"><span className="text-slate-500">Iron-Bronze:</span><span className="text-red-400">{skill.benchmarks.iron}-{skill.benchmarks.bronze}/10</span></div>
                            <div className="flex justify-between"><span className="text-slate-500">Silver-Gold:</span><span className="text-yellow-400">{skill.benchmarks.silver}-{skill.benchmarks.gold}/10</span></div>
                            <div className="flex justify-between"><span className="text-slate-500">Plat-Diamond:</span><span className="text-blue-400">{skill.benchmarks.plat}-{skill.benchmarks.diamond}/10</span></div>
                            <div className="flex justify-between"><span className="text-slate-500">Master+:</span><span className="text-purple-400">{skill.benchmarks.master}/10</span></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}

                <Card title="Stats to Track" icon="📋">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="font-bold text-blue-400 mb-2">Per Game</div>
                      {statsToTrack.perGame.map((s, i) => (
                        <div key={i} className="flex justify-between text-sm p-2 bg-slate-700/30 rounded mb-1">
                          <span className="text-slate-300">{s.stat}</span>
                          <span className="text-green-400">{s.goal}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-bold text-yellow-400 mb-2">Weekly</div>
                      {statsToTrack.weekly.map((s, i) => (
                        <div key={i} className="flex justify-between text-sm p-2 bg-slate-700/30 rounded mb-1">
                          <span className="text-slate-300">{s.stat}</span>
                          <span className="text-green-400">{s.goal}</span>
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="font-bold text-purple-400 mb-2">Monthly</div>
                      {statsToTrack.monthly.map((s, i) => (
                        <div key={i} className="flex justify-between text-sm p-2 bg-slate-700/30 rounded mb-1">
                          <span className="text-slate-300">{s.stat}</span>
                          <span className="text-green-400">{s.goal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* LEARNING PATHS */}
            {coachingTab === 'paths' && (
              <div className="space-y-6">
                <Card className="text-center py-6">
                  <div className="text-4xl mb-2">🛤️</div>
                  <h2 className="text-2xl font-bold">Structured Learning Paths</h2>
                  <p className="text-slate-400">Week-by-week plans to climb from your current rank.</p>
                </Card>

                {Object.entries(learningPaths).map(([pathKey, path]) => (
                  <Card key={pathKey} title={`${path.name} (${path.duration})`} icon="📚">
                    <div className="mb-4">
                      <div className="text-sm text-slate-400 mb-2">Focus Areas:</div>
                      <div className="flex flex-wrap gap-2">
                        {path.focus.map((f, i) => (
                          <span key={i} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm text-purple-400">{f}</span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {path.weeklyPlan.map((week, i) => (
                        <div key={i} className="p-4 bg-slate-700/30 rounded-xl">
                          <div className="font-bold text-blue-400 mb-1">Week {week.week}: {week.theme}</div>
                          <div className="text-xs text-slate-400 mb-2">Goals:</div>
                          <div className="space-y-1">
                            {week.goals.map((g, j) => (
                              <div key={j} className="text-xs text-slate-300">• {g}</div>
                            ))}
                          </div>
                          {week.drills && (
                            <div className="mt-2 pt-2 border-t border-slate-600">
                              <div className="text-xs text-green-400">Drills: {week.drills.join(', ')}</div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* PRACTICE DRILLS */}
            {coachingTab === 'drills' && (
              <div className="space-y-6">
                <Card className="text-center py-6">
                  <div className="text-4xl mb-2">🎯</div>
                  <h2 className="text-2xl font-bold">Practice Drill Library</h2>
                  <p className="text-slate-400">Targeted exercises to improve specific skills.</p>
                </Card>

                {/* Warm-up Routines */}
                <Card title="Warm-Up Routines" icon="🔥">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {Object.entries(warmUpRoutines).map(([key, routine]) => (
                      <div key={key} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="font-bold text-yellow-400 mb-1">{routine.name}</div>
                        <div className="text-xs text-slate-400 mb-2">{routine.duration} • {routine.when}</div>
                        <div className="space-y-1">
                          {routine.routine.map((step, i) => (
                            <div key={i} className="text-xs p-2 bg-slate-700/50 rounded">
                              <span className="text-blue-400">{step.time}:</span> {step.activity}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* CS Drills */}
                <Card title="CS'ing Drills" icon="💰">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {practiceLibrary.mechanics.csing.map((drill, i) => (
                      <div key={i} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-white">{drill.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            drill.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                            drill.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>{drill.difficulty}</span>
                        </div>
                        <div className="text-xs text-slate-400 mb-2">⏱️ {drill.duration} • 🎯 {drill.goal}</div>
                        <div className="text-sm text-slate-300 mb-2">{drill.explanation}</div>
                        <div className="text-xs text-blue-400">
                          <b>Progression:</b> {drill.progression.join(' → ')}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Combo Drills */}
                <Card title="Combo Drills" icon="⚡">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {practiceLibrary.mechanics.combos.map((drill, i) => (
                      <div key={i} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="font-bold text-purple-400 mb-1">{drill.name}</div>
                        <div className="text-xs text-slate-400 mb-2">{drill.duration} • {drill.difficulty}</div>
                        <div className="text-sm text-slate-300 mb-2">{drill.explanation}</div>
                        <div className="text-xs text-green-400">🎯 {drill.goal}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Wave Management Drills */}
                <Card title="Wave Management Drills" icon="🌊">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {practiceLibrary.macro.waveManagement.map((drill, i) => (
                      <div key={i} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="font-bold text-blue-400 mb-1">{drill.name}</div>
                        <div className="text-xs text-slate-400 mb-2">{drill.duration} • {drill.difficulty}</div>
                        <div className="text-sm text-slate-300 mb-2">{drill.explanation}</div>
                        <div className="text-xs text-green-400">🎯 {drill.goal}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* VOD REVIEW */}
            {coachingTab === 'vod' && (
              <div className="space-y-6">
                <Card className="text-center py-6">
                  <div className="text-4xl mb-2">📹</div>
                  <h2 className="text-2xl font-bold">VOD Review System</h2>
                  <p className="text-slate-400">Learn to analyze your own gameplay like a pro coach.</p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(vodReviewSystem).map(([key, review]) => (
                    <Card key={key} title={review.name} className="h-full">
                      <div className="text-xs text-slate-400 mb-2">⏱️ {review.duration} • {review.when}</div>
                      {review.focus && (
                        <div className="mb-3">
                          <div className="text-xs text-purple-400 font-bold mb-1">Focus:</div>
                          <div className="flex flex-wrap gap-1">
                            {review.focus.map((f, i) => (
                              <span key={i} className="text-xs px-2 py-0.5 bg-purple-500/20 rounded">{f}</span>
                            ))}
                          </div>
                        </div>
                      )}
                      {review.questions && (
                        <div className="mb-3">
                          <div className="text-xs text-green-400 font-bold mb-1">Questions to Ask:</div>
                          <div className="space-y-1">
                            {review.questions.map((q, i) => (
                              <div key={i} className="text-xs text-slate-300">• {q}</div>
                            ))}
                          </div>
                        </div>
                      )}
                      {/* Handle sections object (deepReview) */}
                      {review.sections && typeof review.sections === 'object' && !Array.isArray(review.sections) && (
                        <div className="space-y-2">
                          {Object.entries(review.sections).map(([sKey, section]) => (
                            <div key={sKey} className="p-2 bg-slate-700/30 rounded">
                              <div className="text-xs text-yellow-400 font-bold">{section.name}</div>
                              <div className="text-xs text-slate-400">
                                {section.checkpoints?.length || 0} checkpoints
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {/* Handle sections array (coachingReview) */}
                      {review.sections && Array.isArray(review.sections) && (
                        <div className="space-y-1">
                          <div className="text-xs text-yellow-400 font-bold mb-1">Analysis Areas:</div>
                          {review.sections.map((s, i) => (
                            <div key={i} className="text-xs text-slate-300">• {s}</div>
                          ))}
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                {/* Deep Review Checkpoints */}
                <Card title="Deep Review Checkpoints" icon="⏱️">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {vodReviewSystem.deepReview?.sections && Object.entries(vodReviewSystem.deepReview.sections).map(([key, section]) => (
                      <div key={key} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="font-bold text-blue-400 mb-3">{section.name}</div>
                        <div className="space-y-2">
                          {section.checkpoints?.map((cp, i) => (
                            <div key={i} className="flex gap-2 text-xs p-2 bg-slate-700/50 rounded">
                              <span className="text-yellow-400 min-w-[40px]">{cp.time}</span>
                              <span className="text-slate-300">{cp.check}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* VOD Review Template */}
                <Card title="VOD Review Template" icon="📋">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-green-400 mb-3">✓ What to Look For</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-green-500/10 rounded">Every death - what caused it?</div>
                        <div className="p-2 bg-green-500/10 rounded">CS numbers at 5, 10, 15 minutes</div>
                        <div className="p-2 bg-green-500/10 rounded">Map awareness - did you see ganks?</div>
                        <div className="p-2 bg-green-500/10 rounded">Objective participation</div>
                        <div className="p-2 bg-green-500/10 rounded">Teamfight positioning</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-red-400 mb-3">✗ Common Mistakes to Spot</h4>
                      <div className="space-y-2 text-sm">
                        <div className="p-2 bg-red-500/10 rounded">Dying without flash available</div>
                        <div className="p-2 bg-red-500/10 rounded">Missing CS for no reason</div>
                        <div className="p-2 bg-red-500/10 rounded">Not tracking enemy jungler</div>
                        <div className="p-2 bg-red-500/10 rounded">Bad recall timings (losing waves)</div>
                        <div className="p-2 bg-red-500/10 rounded">Fighting without vision</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Recording Tips */}
                <Card title="How to Record & Review" icon="🎥">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-purple-400 mb-2">1. Recording</div>
                      <div className="text-sm text-slate-300 space-y-1">
                        <p>• Use League's built-in replay</p>
                        <p>• OBS for live commentary</p>
                        <p>• Insights.gg for auto-highlights</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-blue-400 mb-2">2. Reviewing</div>
                      <div className="text-sm text-slate-300 space-y-1">
                        <p>• Watch at 2x speed first</p>
                        <p>• Slow down at key moments</p>
                        <p>• Focus on YOUR decisions</p>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-700/30 rounded-xl">
                      <div className="font-bold text-green-400 mb-2">3. Taking Notes</div>
                      <div className="text-sm text-slate-300 space-y-1">
                        <p>• Write down timestamps</p>
                        <p>• Note patterns in mistakes</p>
                        <p>• Create action items</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* MENTAL GAME */}
            {coachingTab === 'mental' && (
              <div className="space-y-6">
                <Card className="text-center py-6">
                  <div className="text-4xl mb-2">🧠</div>
                  <h2 className="text-2xl font-bold">Mental Performance</h2>
                  <p className="text-slate-400">Peak mental state for consistent high performance.</p>
                </Card>

                {/* Pre-Game */}
                <Card title="Pre-Game Checklist" icon="✅">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-bold text-green-400 mb-3">Ready to Play? Check:</div>
                      <div className="space-y-2">
                        {mentalPerformance.preGame.checklist.map((item, i) => (
                          <label key={i} className="flex items-center gap-2 text-sm cursor-pointer p-2 hover:bg-slate-700/30 rounded">
                            <input type="checkbox" className="rounded accent-green-500" />
                            <span className="text-slate-300">{item}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-red-400 mb-3">Red Flags - Don't Play If:</div>
                      <div className="space-y-2">
                        {mentalPerformance.preGame.redFlags.map((flag, i) => (
                          <div key={i} className="flex gap-2 text-sm p-2 bg-red-500/10 rounded">
                            <span className="text-red-400">⚠️</span>
                            <span className="text-slate-300">{flag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* In-Game Mental */}
                <Card title="In-Game Mental" icon="🎮">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="font-bold text-purple-400 mb-3">Mantras</div>
                      <div className="space-y-2">
                        {mentalPerformance.inGame.mantras.map((mantra, i) => (
                          <div key={i} className="p-3 bg-purple-500/10 rounded-lg text-sm text-slate-300">"{mantra}"</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-yellow-400 mb-3">Trigger Responses</div>
                      <div className="space-y-2">
                        {Object.entries(mentalPerformance.inGame.triggers).map(([trigger, response]) => (
                          <div key={trigger} className="p-3 bg-slate-700/30 rounded-lg text-sm">
                            <span className="text-yellow-400 capitalize">{trigger}:</span>
                            <span className="text-slate-300 ml-2">{response}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Post-Game Protocol */}
                <Card title="Post-Game Protocol" icon="📋">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/30">
                      <div className="font-bold text-green-400 mb-3">After a Win</div>
                      <div className="space-y-2">
                        {mentalPerformance.postGame.win.map((item, i) => (
                          <div key={i} className="text-sm text-slate-300">• {item}</div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/30">
                      <div className="font-bold text-red-400 mb-3">After a Loss</div>
                      <div className="space-y-2">
                        {mentalPerformance.postGame.loss.map((item, i) => (
                          <div key={i} className="text-sm text-slate-300">• {item}</div>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-orange-500/10 rounded-xl border border-orange-500/30">
                      <div className="font-bold text-orange-400 mb-3">Loss Streak Protocol</div>
                      <div className="space-y-2">
                        {mentalPerformance.postGame.lossStreak.map((item, i) => (
                          <div key={i} className="text-sm text-slate-300">• {item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Tilt Prevention */}
                <Card title="Tilt Prevention Drills" icon="😤">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {practiceLibrary.mental.tiltPrevention.map((drill, i) => (
                      <div key={i} className="p-4 bg-slate-700/30 rounded-xl">
                        <div className="font-bold text-purple-400 mb-1">{drill.name}</div>
                        <div className="text-xs text-slate-400 mb-2">{drill.setup}</div>
                        <div className="text-sm text-slate-300 mb-2">{drill.explanation}</div>
                        <div className="text-xs text-green-400">🎯 {drill.goal}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* RANK SPECIFIC */}
            {coachingTab === 'rank' && (
              <div className="space-y-6">
                <Card className="text-center py-6">
                  <div className="text-4xl mb-2">🏆</div>
                  <h2 className="text-2xl font-bold">Rank-Specific Coaching</h2>
                  <p className="text-slate-400">What to focus on at YOUR rank to climb efficiently.</p>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(rankCoaching).map(([rank, data]) => (
                    <Card key={rank} title={rank} className="h-full">
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs text-red-400 font-bold mb-1">Biggest Issues:</div>
                          <div className="space-y-1">
                            {data.biggestIssues.map((issue, i) => (
                              <div key={i} className="text-xs text-slate-400">• {issue}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-green-400 font-bold mb-1">Quick Wins:</div>
                          <div className="space-y-1">
                            {data.quickWins.map((win, i) => (
                              <div key={i} className="text-xs text-slate-300">✓ {win}</div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-blue-400 font-bold mb-1">Weekly Goals:</div>
                          <div className="space-y-1">
                            {data.weeklyGoals.map((goal, i) => (
                              <div key={i} className="text-xs p-1 bg-slate-700/30 rounded">
                                <span className="text-blue-400">W{goal.week}:</span> {goal.goal}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* COMMUNITY GUIDES TAB */}
        {tab === 'community' && (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center py-6 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/20">
              <div className="text-5xl mb-3">👥</div>
              <h2 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Community Guides</h2>
              <p className="text-slate-400 mt-2">Learn from the best players. Share your knowledge. Climb together.</p>
              <div className="flex justify-center gap-4 mt-4 text-sm">
                <div className="px-4 py-2 bg-purple-500/20 rounded-lg"><b className="text-purple-400">{userGuides.length}</b> Guides</div>
                <div className="px-4 py-2 bg-blue-500/20 rounded-lg"><b className="text-blue-400">{userGuides.reduce((s, g) => s + g.views, 0).toLocaleString()}</b> Views</div>
                <div className="px-4 py-2 bg-green-500/20 rounded-lg"><b className="text-green-400">{userGuides.reduce((s, g) => s + g.ratings.totalVotes, 0)}</b> Ratings</div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2 justify-center flex-wrap">
              {['browse', 'team-comp', 'submit', 'my-guides'].map(t => (
                <button key={t} onClick={() => { setCommunityTab(t); setSelectedGuide(null); }} className={`px-6 py-2 rounded-xl font-medium transition-all ${communityTab === t ? 'bg-purple-600 text-white' : 'bg-slate-700/50 hover:bg-slate-700'}`}>
                  {t === 'browse' ? '📚 Browse Guides' : t === 'team-comp' ? '🎮 Team Comp Builds' : t === 'submit' ? '✏️ Submit Guide' : '📁 My Guides'}
                </button>
              ))}
            </div>

            {/* TEAM COMP BUILDER - What to build vs enemy team */}
            {communityTab === 'team-comp' && (
              <div className="space-y-6">
                <Card title="🎮 Team Composition Item Builder" icon="⚔️">
                  <p className="text-slate-400 mb-4">Select your champion and the enemy team composition to get optimal item builds!</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Your Champion */}
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Your Champion</label>
                      <select value={yourChamp?.id || ''} onChange={(e) => setYourChamp(CHAMPIONS[e.target.value] || null)} className="w-full bg-slate-700 rounded-lg px-4 py-3 text-lg">
                        <option value="">Select Your Champion</option>
                        {Object.values(CHAMPIONS).sort((a,b) => a.name.localeCompare(b.name)).map(c => (
                          <option key={c.id} value={c.id}>{c.name} ({c.role})</option>
                        ))}
                      </select>
                    </div>
                    
                    {/* Enemy Comp Type */}
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Enemy Team Composition</label>
                      <div className="grid grid-cols-2 gap-2">
                        {Object.entries(TEAM_COMP_TYPES).slice(0, 6).map(([key, comp]) => (
                          <button key={key} onClick={() => setGuideFilter({...guideFilter, compType: key})} 
                            className={`p-3 rounded-lg border transition-all text-left ${guideFilter.compType === key ? 'border-purple-500 bg-purple-500/20' : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'}`}>
                            <div className="text-lg mb-1">{comp.icon} {comp.name}</div>
                            <div className="text-xs text-slate-400">{comp.description?.slice(0, 50)}...</div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Build Recommendations */}
                {yourChamp && guideFilter.compType && (
                  <Card title={`🛡️ Recommended Build vs ${TEAM_COMP_TYPES[guideFilter.compType]?.name}`} icon={TEAM_COMP_TYPES[guideFilter.compType]?.icon}>
                    <div className="space-y-4">
                      {/* Comp Info */}
                      <div className="p-4 bg-gradient-to-r from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600">
                        <h4 className="font-bold text-lg mb-2">{TEAM_COMP_TYPES[guideFilter.compType]?.icon} About {TEAM_COMP_TYPES[guideFilter.compType]?.name}</h4>
                        <p className="text-slate-300 mb-2">{TEAM_COMP_TYPES[guideFilter.compType]?.strategy}</p>
                        <div className="grid grid-cols-2 gap-4 mt-3">
                          <div>
                            <div className="text-xs text-red-400 font-medium mb-1">Their Strengths:</div>
                            {TEAM_COMP_TYPES[guideFilter.compType]?.strengths?.slice(0, 3).map((s, i) => (
                              <div key={i} className="text-xs text-slate-400">• {s}</div>
                            ))}
                          </div>
                          <div>
                            <div className="text-xs text-green-400 font-medium mb-1">Their Weaknesses:</div>
                            {TEAM_COMP_TYPES[guideFilter.compType]?.weaknesses?.slice(0, 3).map((w, i) => (
                              <div key={i} className="text-xs text-slate-400">• {w}</div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Adaptive Build based on champ type */}
                      <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
                        <h4 className="font-bold text-blue-400 mb-3">📦 Recommended Build for {yourChamp.name}</h4>
                        
                        {/* AD Fighter/Bruiser Build */}
                        {(yourChamp.damageType === 'physical' && yourChamp.class?.some(c => ['Fighter', 'Juggernaut', 'Skirmisher'].includes(c))) && (
                          <div>
                            {guideFilter.compType === 'DIVE' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Goredrinker', 'Black Cleaver', 'Death\'s Dance', 'Sterak\'s Gage', 'Gargoyle Stoneplate']} />
                                <p className="text-sm text-slate-400 mt-2">Build maximum survivability. Goredrinker + Sterak's shields let you survive dives and turn fights.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'POKE' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Eclipse', 'Force of Nature', 'Black Cleaver', 'Spirit Visage', 'Sterak\'s Gage']} />
                                <p className="text-sm text-slate-400 mt-2">Force of Nature reduces poke damage. Spirit Visage amplifies healing. Force engages when healthy.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'TANK' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Eclipse', 'Black Cleaver', 'Serylda\'s Grudge', 'Lord Dominik\'s Regards', 'Death\'s Dance']} />
                                <p className="text-sm text-slate-400 mt-2">Maximum armor penetration. Cleaver + LDR shreds tanks. Cut Down rune mandatory.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'ENGAGE' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Eclipse', 'Black Cleaver', 'Maw of Malmortius', 'Sterak\'s Gage', 'Death\'s Dance']} />
                                <p className="text-sm text-slate-400 mt-2">Triple shield build survives their burst. Mercury's Treads + Tenacity essential.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'SPLITPUSH' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Trinity Force', 'Hullbreaker', 'Death\'s Dance', 'Sterak\'s Gage', 'Guardian Angel']} />
                                <p className="text-sm text-slate-400 mt-2">Match their split with Hullbreaker. Win 1v1s and take towers. Group when they group.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'PICK' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Eclipse', 'Black Cleaver', 'Edge of Night', 'Maw of Malmortius', 'Death\'s Dance']} />
                                <p className="text-sm text-slate-400 mt-2">Edge of Night spell shield prevents picks. Stay grouped and ward defensively.</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* ADC Build */}
                        {(yourChamp.damageType === 'physical' && yourChamp.class?.some(c => ['Marksman'].includes(c))) && (
                          <div>
                            {guideFilter.compType === 'DIVE' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Galeforce', 'Phantom Dancer', 'Infinity Edge', 'Guardian Angel', 'Bloodthirster']} />
                                <p className="text-sm text-slate-400 mt-2">Galeforce dash escapes dives. GA gives second chance. Position FAR back and let them waste cooldowns.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'TANK' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Kraken Slayer', 'Blade of the Ruined King', 'Infinity Edge', 'Lord Dominik\'s Regards', 'Mortal Reminder']} />
                                <p className="text-sm text-slate-400 mt-2">Kraken true damage + BORK %HP + LDR = tanks melt. Cut Down rune mandatory.</p>
                              </div>
                            )}
                            {['POKE', 'ENGAGE', 'SPLITPUSH', 'PICK'].includes(guideFilter.compType) && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Kraken Slayer', 'Phantom Dancer', 'Infinity Edge', 'Rapid Firecannon', 'Guardian Angel']} />
                                <p className="text-sm text-slate-400 mt-2">Standard crit build. RFC for safe poke. GA for insurance. Position carefully.</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* AP Mage Build */}
                        {yourChamp.damageType === 'magic' && (
                          <div>
                            {guideFilter.compType === 'DIVE' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Luden\'s Companion', 'Zhonya\'s Hourglass', 'Banshee\'s Veil', 'Rabadon\'s Deathcap', 'Void Staff']} colorClass="bg-purple-500/20" />
                                <p className="text-sm text-slate-400 mt-2">Zhonya's is MANDATORY. Stasis buys 2.5s for team to peel. Banshee's blocks engage spells.</p>
                              </div>
                            )}
                            {guideFilter.compType === 'TANK' && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Liandry\'s Torment', 'Void Staff', 'Rabadon\'s Deathcap', 'Cryptbloom', 'Zhonya\'s Hourglass']} colorClass="bg-purple-500/20" />
                                <p className="text-sm text-slate-400 mt-2">Liandry's burn + Void Staff pen melts tanks. Extended fights favor your %HP damage.</p>
                              </div>
                            )}
                            {['POKE', 'ENGAGE', 'SPLITPUSH', 'PICK'].includes(guideFilter.compType) && (
                              <div className="space-y-2">
                                <ItemBuildList items={['Luden\'s Companion', 'Shadowflame', 'Rabadon\'s Deathcap', 'Void Staff', 'Zhonya\'s Hourglass']} colorClass="bg-purple-500/20" />
                                <p className="text-sm text-slate-400 mt-2">Standard burst build. Maximum damage. Zhonya's for safety.</p>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Tank Build */}
                        {yourChamp.class?.some(c => ['Tank', 'Vanguard', 'Warden'].includes(c)) && (
                          <div>
                            <div className="space-y-2">
                              {guideFilter.compType === 'DIVE' && (
                                <ItemBuildList items={['Jak\'Sho', 'Thornmail', 'Randuin\'s Omen', 'Force of Nature', 'Warmog\'s Armor']} colorClass="bg-green-500/20" />
                              )}
                              {guideFilter.compType === 'POKE' && (
                                <ItemBuildList items={['Heartsteel', 'Force of Nature', 'Spirit Visage', 'Warmog\'s Armor', 'Jak\'Sho']} colorClass="bg-green-500/20" />
                              )}
                              {guideFilter.compType === 'TANK' && (
                                <ItemBuildList items={['Heartsteel', 'Sunfire Aegis', 'Thornmail', 'Abyssal Mask', 'Jak\'Sho']} colorClass="bg-green-500/20" />
                              )}
                              {['ENGAGE', 'SPLITPUSH', 'PICK'].includes(guideFilter.compType) && (
                                <ItemBuildList items={['Sunfire Aegis', 'Jak\'Sho', 'Thornmail', 'Force of Nature', 'Warmog\'s Armor']} colorClass="bg-green-500/20" />
                              )}
                              <p className="text-sm text-slate-400 mt-2">Build resistances based on their damage types. Thornmail vs healing. Force of Nature vs AP.</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* General Tips */}
                      <div className="p-4 bg-yellow-500/10 rounded-xl border border-yellow-500/30">
                        <h4 className="font-bold text-yellow-400 mb-2">💡 Tips vs {TEAM_COMP_TYPES[guideFilter.compType]?.name}</h4>
                        <ul className="text-sm text-slate-300 space-y-1">
                          {TEAM_COMP_TYPES[guideFilter.compType]?.counters?.map((c, i) => (
                            <li key={i}>• Counter with: {c}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Quick Reference Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Object.entries(TEAM_COMP_TYPES).slice(0, 6).map(([key, comp]) => (
                    <Card key={key} title={`${comp.icon} ${comp.name}`} className="hover:border-purple-500/50 transition-all">
                      <p className="text-sm text-slate-400 mb-3">{comp.description}</p>
                      <div className="text-xs">
                        <div className="text-green-400 mb-1">Strong against:</div>
                        <p className="text-slate-500 mb-2">{comp.strongAgainst?.join(', ')}</p>
                        <div className="text-red-400 mb-1">Weak against:</div>
                        <p className="text-slate-500">{comp.counters?.join(', ')}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* BROWSE GUIDES */}
            {communityTab === 'browse' && !selectedGuide && (
              <div className="space-y-4">
                {/* Filters */}
                <Card title="Filter & Search" icon="🔍">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                    <input type="text" placeholder="Search guides..." value={guideFilter.search} onChange={(e) => setGuideFilter({...guideFilter, search: e.target.value})} className="bg-slate-700 rounded-lg px-3 py-2 text-sm" />
                    <select value={guideFilter.champion} onChange={(e) => setGuideFilter({...guideFilter, champion: e.target.value})} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                      <option value="">All Champions</option>
                      {Object.values(CHAMPIONS).sort((a,b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                    </select>
                    <select value={guideFilter.role} onChange={(e) => setGuideFilter({...guideFilter, role: e.target.value})} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                      <option value="">All Roles</option>
                      {['Top', 'Jungle', 'Mid', 'ADC', 'Support'].map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <select value={guideFilter.category} onChange={(e) => setGuideFilter({...guideFilter, category: e.target.value})} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                      <option value="">All Categories</option>
                      {Object.entries(GUIDE_CATEGORIES).map(([k, v]) => <option key={k} value={k}>{v.icon} {v.name}</option>)}
                    </select>
                    <select value={guideSort} onChange={(e) => setGuideSort(e.target.value)} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                      <option value="rating">⭐ Top Rated</option>
                      <option value="views">👁️ Most Viewed</option>
                      <option value="recent">🕐 Most Recent</option>
                      <option value="votes">🗳️ Most Votes</option>
                    </select>
                  </div>
                </Card>

                {/* Guide List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sortGuides(filterGuides(userGuides, guideFilter), guideSort).map(guide => (
                    <div key={guide.id} onClick={() => setSelectedGuide(guide)} className="bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500/50 cursor-pointer transition-all overflow-hidden">
                      <div className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <ChampIcon id={Object.values(CHAMPIONS).find(c => c.name === guide.champion)?.id || 'Aatrox'} size={40} />
                            <div>
                              <div className="font-bold text-lg">{guide.title}</div>
                              <div className="text-xs text-slate-400">{guide.champion} • {guide.role}</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded text-yellow-400 text-sm font-bold">
                            ⭐ {guide.ratings.overall}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xl">{guide.author.avatar}</span>
                          <span className="text-sm">{guide.author.username}</span>
                          <span className={`text-xs px-2 py-0.5 rounded ${guide.author.rank === 'Challenger' ? 'bg-red-500/20 text-red-400' : guide.author.rank === 'Grandmaster' ? 'bg-orange-500/20 text-orange-400' : guide.author.rank === 'Master' ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-500/20 text-blue-400'}`}>
                            {guide.author.rank}
                          </span>
                          {guide.author.verified && <span className="text-green-400 text-xs">✓ Verified</span>}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          <span className="text-xs px-2 py-0.5 bg-purple-500/20 text-purple-400 rounded">{GUIDE_CATEGORIES[guide.category]?.icon} {GUIDE_CATEGORIES[guide.category]?.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded`} style={{backgroundColor: DIFFICULTY_LEVELS[guide.difficulty]?.color + '20', color: DIFFICULTY_LEVELS[guide.difficulty]?.color}}>
                            {DIFFICULTY_LEVELS[guide.difficulty]?.icon} {DIFFICULTY_LEVELS[guide.difficulty]?.name}
                          </span>
                          {guide.tags.slice(0, 2).map((tag, i) => (
                            <span key={i} className="text-xs px-2 py-0.5 bg-slate-700 rounded">{tag}</span>
                          ))}
                        </div>

                        <div className="flex justify-between text-xs text-slate-400">
                          <span>👁️ {guide.views.toLocaleString()} views</span>
                          <span>🗳️ {guide.ratings.totalVotes} votes</span>
                          <span>🔖 {guide.bookmarks} saves</span>
                          <span>📅 {guide.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* VIEW SINGLE GUIDE */}
            {communityTab === 'browse' && selectedGuide && (
              <div className="space-y-4">
                <button onClick={() => setSelectedGuide(null)} className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
                  ← Back to Guides
                </button>

                {/* Guide Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <div className="flex items-start gap-4">
                    <ChampIcon id={Object.values(CHAMPIONS).find(c => c.name === selectedGuide.champion)?.id || 'Aatrox'} size={80} />
                    <div className="flex-1">
                      <h1 className="text-2xl font-black mb-2">{selectedGuide.title}</h1>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xl">{selectedGuide.author.avatar}</span>
                        <div>
                          <div className="font-medium">{selectedGuide.author.username} {selectedGuide.author.verified && <span className="text-green-400">✓</span>}</div>
                          <div className="text-xs text-slate-400">{selectedGuide.author.rank} • {selectedGuide.author.server} • {selectedGuide.author.guidesCount} guides</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {selectedGuide.tags.map((tag, i) => <span key={i} className="text-xs px-2 py-1 bg-slate-700 rounded">{tag}</span>)}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-black text-yellow-400">⭐ {selectedGuide.ratings.overall}</div>
                      <div className="text-xs text-slate-400">{selectedGuide.ratings.totalVotes} ratings</div>
                    </div>
                  </div>
                </div>

                {/* Rating Breakdown */}
                <Card title="Ratings" icon="⭐">
                  <div className="grid grid-cols-4 gap-4 text-center">
                    {[['Helpful', selectedGuide.ratings.helpful], ['Accurate', selectedGuide.ratings.accuracy], ['Detailed', selectedGuide.ratings.detail], ['Up-to-Date', selectedGuide.ratings.upToDate]].map(([name, val]) => (
                      <div key={name} className="p-3 bg-slate-700/30 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-400">{val}</div>
                        <div className="text-xs text-slate-400">{name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center gap-2">
                    <button className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-sm">👍 Helpful</button>
                    <button className="px-4 py-2 bg-slate-600 hover:bg-slate-500 rounded-lg text-sm">👎 Not Helpful</button>
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm">🔖 Save Guide</button>
                  </div>
                </Card>

                {/* Introduction */}
                {selectedGuide.sections?.introduction && (
                  <Card title="Introduction" icon="📝">
                    <p className="text-slate-300 leading-relaxed">{selectedGuide.sections.introduction}</p>
                  </Card>
                )}

                {/* Pros & Cons */}
                {selectedGuide.sections?.prosAndCons && (
                  <Card title="Pros & Cons" icon="⚖️">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-bold text-green-400 mb-2">✓ Strengths</h4>
                        {selectedGuide.sections.prosAndCons.pros?.map((pro, i) => (
                          <div key={i} className="p-2 bg-green-500/10 rounded mb-1 text-sm">{pro}</div>
                        ))}
                      </div>
                      <div>
                        <h4 className="font-bold text-red-400 mb-2">✗ Weaknesses</h4>
                        {selectedGuide.sections.prosAndCons.cons?.map((con, i) => (
                          <div key={i} className="p-2 bg-red-500/10 rounded mb-1 text-sm">{con}</div>
                        ))}
                      </div>
                    </div>
                  </Card>
                )}

                {/* Matchups */}
                {selectedGuide.sections?.matchups?.length > 0 && (
                  <Card title="Matchups" icon="⚔️">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedGuide.sections.matchups.map((m, i) => (
                        <div key={i} className="p-3 bg-slate-700/30 rounded-lg flex items-center gap-3">
                          <ChampIcon id={Object.values(CHAMPIONS).find(c => c.name === m.champion)?.id || 'Aatrox'} size={40} />
                          <div className="flex-1">
                            <div className="font-medium">{m.champion}</div>
                            <div className={`text-xs ${m.difficulty === 'Easy' ? 'text-green-400' : m.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>{m.difficulty}</div>
                          </div>
                          <div className="text-sm text-slate-300">{m.tip}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Combos */}
                {selectedGuide.sections?.combos?.length > 0 && (
                  <Card title="Combos" icon="💥">
                    <div className="space-y-3">
                      {selectedGuide.sections.combos.map((combo, i) => (
                        <div key={i} className="p-4 bg-slate-700/30 rounded-lg">
                          <div className="flex justify-between items-start mb-2">
                            <div className="font-bold text-purple-400">{combo.name}</div>
                            <span className={`text-xs px-2 py-0.5 rounded ${combo.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' : combo.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>{combo.difficulty}</span>
                          </div>
                          <div className="font-mono text-sm bg-slate-800 p-2 rounded">{combo.inputs}</div>
                          <div className="text-xs text-slate-400 mt-1">Damage: {combo.damage}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* ITEM BUILDS SECTION */}
                {selectedGuide.sections?.itemBuilds && (
                  <Card title="Item Builds" icon="🛡️">
                    <div className="space-y-4">
                      {/* Core Build */}
                      <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
                        <h4 className="font-bold text-blue-400 mb-2">📦 Core Build</h4>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {selectedGuide.sections.itemBuilds.core?.items?.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-lg">
                              <ItemIconByName name={item} size={24} />
                              <span className="text-sm font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-sm text-slate-400">{selectedGuide.sections.itemBuilds.core?.explanation}</p>
                      </div>

                      {/* Situational Items */}
                      {selectedGuide.sections.itemBuilds.situational?.length > 0 && (
                        <div className="p-4 bg-slate-700/30 rounded-xl">
                          <h4 className="font-bold text-yellow-400 mb-3">⚡ Situational Items</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {selectedGuide.sections.itemBuilds.situational.map((item, i) => (
                              <div key={i} className={`p-3 rounded-lg flex items-center gap-3 ${item.priority === 'CRITICAL' ? 'bg-red-500/20 border border-red-500/30' : item.priority === 'HIGH' ? 'bg-orange-500/20 border border-orange-500/30' : 'bg-slate-600/30'}`}>
                                <ItemIconByName name={item.item} size={32} />
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium text-sm">{item.item}</div>
                                  <div className="text-xs text-slate-400 truncate">{item.when}</div>
                                </div>
                                {item.priority && <span className={`text-xs px-2 py-0.5 rounded whitespace-nowrap ${item.priority === 'CRITICAL' ? 'bg-red-500 text-white' : item.priority === 'HIGH' ? 'bg-orange-500 text-white' : 'bg-slate-500'}`}>{item.priority}</span>}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Boots */}
                      {selectedGuide.sections.itemBuilds.boots?.length > 0 && (
                        <div className="p-4 bg-slate-700/30 rounded-xl">
                          <h4 className="font-bold text-green-400 mb-2">👟 Boot Options</h4>
                          <div className="space-y-2">
                            {selectedGuide.sections.itemBuilds.boots.map((boot, i) => (
                              <div key={i} className="flex items-center gap-3 p-2 bg-slate-600/30 rounded">
                                <ItemIconByName name={boot.item} size={28} />
                                <span className="font-medium flex-1">{boot.item}</span>
                                <span className="text-xs text-slate-400">{boot.when}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                )}

                {/* TEAM COMP BUILDS - THE BIG NEW SECTION */}
                {selectedGuide.sections?.itemBuilds?.teamCompBuilds && (
                  <Card title="Team Composition Builds - Adapt to WIN" icon="🎮">
                    <p className="text-slate-400 mb-4">Build differently based on enemy team composition. This is what separates good players from great ones!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(selectedGuide.sections.itemBuilds.teamCompBuilds).map(([key, build]) => (
                        <div key={key} className="p-4 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-slate-600 hover:border-purple-500/50 transition-all">
                          <div className="flex items-center gap-3 mb-3">
                            <ItemIconByName name={build.build[0]} size={40} className="border-2 border-purple-500/50" />
                            <div>
                              <div className="font-bold text-lg">{build.name}</div>
                              <div className="text-xs text-slate-400">{key.replace(/([A-Z])/g, ' $1').replace('vs', 'vs ').replace('as', 'as ')}</div>
                            </div>
                          </div>
                          
                          <div className="mb-3">
                            <div className="text-xs text-slate-400 mb-2">Build Order:</div>
                            <div className="flex flex-wrap gap-2">
                              {build.build.map((item, i) => (
                                <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-slate-600/70 rounded">
                                  <span className="text-xs text-slate-400">{i + 1}.</span>
                                  <ItemIconByName name={item} size={24} />
                                  <span className="text-xs">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-xs mb-2 flex items-center gap-2">
                            <span className="text-slate-400">Boots:</span>
                            <span className="text-green-400">{build.boots}</span>
                          </div>
                          
                          <div className="p-2 bg-slate-800/50 rounded mb-2 text-sm text-slate-300">
                            {build.explanation}
                          </div>
                          
                          <div className="p-2 bg-purple-500/10 rounded text-sm">
                            <span className="text-purple-400 font-medium">Playstyle: </span>
                            <span className="text-slate-300">{build.playstyle}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Comments */}
                {selectedGuide.comments?.length > 0 && (
                  <Card title="Comments" icon="💬">
                    <div className="space-y-3">
                      {selectedGuide.comments.map(comment => (
                        <div key={comment.id} className="p-3 bg-slate-700/30 rounded-lg">
                          <div className="flex justify-between mb-1">
                            <span className="font-medium">{comment.author}</span>
                            <span className="text-xs text-slate-400">{comment.date}</span>
                          </div>
                          <p className="text-sm text-slate-300">{comment.content}</p>
                          <div className="mt-2 text-xs text-green-400">👍 {comment.upvotes}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                )}
              </div>
            )}

            {/* SUBMIT GUIDE */}
            {communityTab === 'submit' && (
              <div className="space-y-4">
                <Card title="Submit Your Guide" icon={<BookOpen size={20} />}>
                  <p className="text-slate-400 mb-6">Share your knowledge with the community! Fill out the form below to create a comprehensive guide.</p>
                  
                  <div className="space-y-6">
                    {/* SECTION 1: Basic Info */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Info size={18} className="text-blue-400" /> Basic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Guide Title *</label>
                          <input type="text" value={newGuide.title} onChange={(e) => setNewGuide({...newGuide, title: e.target.value})} placeholder="e.g., Challenger Aatrox Guide - Season 2026" className="w-full bg-slate-700 rounded-lg px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Your Username *</label>
                          <input type="text" value={newGuide.author.username} onChange={(e) => setNewGuide({...newGuide, author: {...newGuide.author, username: e.target.value}})} placeholder="Your display name" className="w-full bg-slate-700 rounded-lg px-3 py-2" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Champion *</label>
                          <select value={newGuide.champion} onChange={(e) => setNewGuide({...newGuide, champion: e.target.value})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            <option value="">Select</option>
                            {Object.values(CHAMPIONS).sort((a,b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Role *</label>
                          <select value={newGuide.role} onChange={(e) => setNewGuide({...newGuide, role: e.target.value})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            <option value="">Select</option>
                            {['Top', 'Jungle', 'Mid', 'ADC', 'Support'].map(r => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Your Rank</label>
                          <select value={newGuide.author.rank} onChange={(e) => setNewGuide({...newGuide, author: {...newGuide.author, rank: e.target.value}})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            <option value="">Select</option>
                            {['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Emerald', 'Diamond', 'Master', 'Grandmaster', 'Challenger'].map(r => <option key={r} value={r}>{r}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Server</label>
                          <select value={newGuide.author.server} onChange={(e) => setNewGuide({...newGuide, author: {...newGuide.author, server: e.target.value}})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            <option value="">Select</option>
                            {['NA', 'EUW', 'EUNE', 'KR', 'CN', 'BR', 'LAN', 'LAS', 'OCE', 'TR', 'RU', 'JP', 'SEA', 'PH', 'SG', 'TW', 'VN', 'TH'].map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Difficulty</label>
                          <select value={newGuide.difficulty} onChange={(e) => setNewGuide({...newGuide, difficulty: e.target.value})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            {Object.entries(DIFFICULTY_LEVELS).map(([k, v]) => <option key={k} value={k}>{v.name}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: Introduction & Overview */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><BookOpen size={18} className="text-purple-400" /> Introduction</h3>
                      <textarea value={newGuide.introduction} onChange={(e) => setNewGuide({...newGuide, introduction: e.target.value})} placeholder="Introduce yourself, your experience with the champion, and what readers will learn from this guide..." rows={4} className="w-full bg-slate-700 rounded-lg px-3 py-2" />
                      
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-green-400">Strengths (Pros)</label>
                          {newGuide.prosAndCons.pros.map((pro, i) => (
                            <input key={i} type="text" value={pro} onChange={(e) => { const newPros = [...newGuide.prosAndCons.pros]; newPros[i] = e.target.value; setNewGuide({...newGuide, prosAndCons: {...newGuide.prosAndCons, pros: newPros}}); }} placeholder={`Strength ${i + 1}`} className="w-full bg-slate-700 rounded-lg px-3 py-2 mb-2" />
                          ))}
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-red-400">Weaknesses (Cons)</label>
                          {newGuide.prosAndCons.cons.map((con, i) => (
                            <input key={i} type="text" value={con} onChange={(e) => { const newCons = [...newGuide.prosAndCons.cons]; newCons[i] = e.target.value; setNewGuide({...newGuide, prosAndCons: {...newGuide.prosAndCons, cons: newCons}}); }} placeholder={`Weakness ${i + 1}`} className="w-full bg-slate-700 rounded-lg px-3 py-2 mb-2" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: Summoner Spells */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Zap size={18} className="text-yellow-400" /> Summoner Spells</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Primary Spell</label>
                          <div className="flex items-center gap-2">
                            <SpellIcon spell={newGuide.summonerSpells.primary} size={32} />
                            <select value={newGuide.summonerSpells.primary} onChange={(e) => setNewGuide({...newGuide, summonerSpells: {...newGuide.summonerSpells, primary: e.target.value}})} className="flex-1 bg-slate-700 rounded-lg px-3 py-2">
                              {Object.keys(SUMMONER_SPELLS).map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Secondary Spell</label>
                          <div className="flex items-center gap-2">
                            <SpellIcon spell={newGuide.summonerSpells.secondary} size={32} />
                            <select value={newGuide.summonerSpells.secondary} onChange={(e) => setNewGuide({...newGuide, summonerSpells: {...newGuide.summonerSpells, secondary: e.target.value}})} className="flex-1 bg-slate-700 rounded-lg px-3 py-2">
                              <option value="">Select</option>
                              {Object.keys(SUMMONER_SPELLS).filter(s => s !== newGuide.summonerSpells.primary).map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4: Runes */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Sparkles size={18} className="text-purple-400" /> Runes</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Keystone *</label>
                          <div className="flex items-center gap-2">
                            <KeystoneIcon keystone={newGuide.runes.keystone} size={36} />
                            <select value={newGuide.runes.keystone} onChange={(e) => setNewGuide({...newGuide, runes: {...newGuide.runes, keystone: e.target.value}})} className="flex-1 bg-slate-700 rounded-lg px-3 py-2">
                              <option value="">Select Keystone</option>
                              {Object.keys(KEYSTONE_ICONS).map(k => <option key={k} value={k}>{k}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Primary Tree</label>
                          <div className="flex items-center gap-2">
                            <RuneTreeIcon tree={newGuide.runes.primaryTree} size={28} />
                            <select value={newGuide.runes.primaryTree} onChange={(e) => setNewGuide({...newGuide, runes: {...newGuide.runes, primaryTree: e.target.value}})} className="flex-1 bg-slate-700 rounded-lg px-3 py-2">
                              <option value="">Select</option>
                              {['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration'].map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Secondary Tree</label>
                          <div className="flex items-center gap-2">
                            <RuneTreeIcon tree={newGuide.runes.secondaryTree} size={28} />
                            <select value={newGuide.runes.secondaryTree} onChange={(e) => setNewGuide({...newGuide, runes: {...newGuide.runes, secondaryTree: e.target.value}})} className="flex-1 bg-slate-700 rounded-lg px-3 py-2">
                              <option value="">Select</option>
                              {['Precision', 'Domination', 'Sorcery', 'Resolve', 'Inspiration'].filter(t => t !== newGuide.runes.primaryTree).map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                      <textarea value={newGuide.runes.explanation} onChange={(e) => setNewGuide({...newGuide, runes: {...newGuide.runes, explanation: e.target.value}})} placeholder="Explain why this rune setup works best for this champion..." rows={2} className="w-full bg-slate-700 rounded-lg px-3 py-2" />
                    </div>

                    {/* SECTION 5: Item Builds */}
                    <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/30">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Wrench size={18} className="text-blue-400" /> Item Builds</h3>
                      
                      <div className="space-y-4">
                        {/* Starter Items */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-green-400">Starter Items</label>
                          <div className="grid grid-cols-2 gap-2">
                            {newGuide.itemBuilds.starter.map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ItemIconByName name={item} size={28} />
                                <select value={item} onChange={(e) => { const newStarter = [...newGuide.itemBuilds.starter]; newStarter[i] = e.target.value; setNewGuide({...newGuide, itemBuilds: {...newGuide.itemBuilds, starter: newStarter}}); }} className="flex-1 bg-slate-700 rounded-lg px-3 py-2 text-sm">
                                  <option value="">Select Item</option>
                                  {["Doran's Blade", "Doran's Ring", "Doran's Shield", "Long Sword", "Corrupting Potion", "Cull", "Dark Seal", "Tear of the Goddess", "Cloth Armor", "Boots", "Refillable Potion", "Health Potion"].map(item => <option key={item} value={item}>{item}</option>)}
                                </select>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Core Build */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-blue-400">Core Build (First 3 Items)</label>
                          <div className="grid grid-cols-3 gap-2">
                            {newGuide.itemBuilds.core.map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ItemIconByName name={item} size={32} />
                                <input type="text" value={item} onChange={(e) => { const newCore = [...newGuide.itemBuilds.core]; newCore[i] = e.target.value; setNewGuide({...newGuide, itemBuilds: {...newGuide.itemBuilds, core: newCore}}); }} placeholder={`Core Item ${i + 1}`} className="flex-1 bg-slate-700 rounded-lg px-3 py-2 text-sm" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Situational Items */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-yellow-400">Situational Items</label>
                          <div className="grid grid-cols-3 gap-2">
                            {newGuide.itemBuilds.situational.map((item, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <ItemIconByName name={item} size={28} />
                                <input type="text" value={item} onChange={(e) => { const newSit = [...newGuide.itemBuilds.situational]; newSit[i] = e.target.value; setNewGuide({...newGuide, itemBuilds: {...newGuide.itemBuilds, situational: newSit}}); }} placeholder={`Situational ${i + 1}`} className="flex-1 bg-slate-700 rounded-lg px-3 py-2 text-sm" />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Boots */}
                        <div>
                          <label className="block text-sm font-medium mb-2 text-green-400">Recommended Boots</label>
                          <div className="flex items-center gap-2">
                            <ItemIconByName name={newGuide.itemBuilds.boots} size={32} />
                            <select value={newGuide.itemBuilds.boots} onChange={(e) => setNewGuide({...newGuide, itemBuilds: {...newGuide.itemBuilds, boots: e.target.value}})} className="flex-1 bg-slate-700 rounded-lg px-3 py-2">
                              <option value="">Select Boots</option>
                              {["Plated Steelcaps", "Mercury's Treads", "Ionian Boots of Lucidity", "Berserker's Greaves", "Sorcerer's Shoes", "Boots of Swiftness", "Mobility Boots"].map(b => <option key={b} value={b}>{b}</option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 6: Ability Order */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Zap size={18} className="text-orange-400" /> Ability Skill Order</h3>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Skill Order</label>
                          <input type="text" value={newGuide.abilities.skillOrder} onChange={(e) => setNewGuide({...newGuide, abilities: {...newGuide.abilities, skillOrder: e.target.value}})} placeholder="e.g., Q > E > W" className="w-full bg-slate-700 rounded-lg px-3 py-2" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Max First</label>
                          <select value={newGuide.abilities.maxFirst} onChange={(e) => setNewGuide({...newGuide, abilities: {...newGuide.abilities, maxFirst: e.target.value}})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            {['Q', 'W', 'E'].map(a => <option key={a} value={a}>{a}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Max Second</label>
                          <select value={newGuide.abilities.maxSecond} onChange={(e) => setNewGuide({...newGuide, abilities: {...newGuide.abilities, maxSecond: e.target.value}})} className="w-full bg-slate-700 rounded-lg px-3 py-2">
                            {['Q', 'W', 'E'].filter(a => a !== newGuide.abilities.maxFirst).map(a => <option key={a} value={a}>{a}</option>)}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 7: Matchups */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Swords size={18} className="text-red-400" /> Key Matchups</h3>
                      {newGuide.matchups.map((matchup, i) => (
                        <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                          <select value={matchup.champion} onChange={(e) => { const newMatchups = [...newGuide.matchups]; newMatchups[i].champion = e.target.value; setNewGuide({...newGuide, matchups: newMatchups}); }} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                            <option value="">Enemy Champion</option>
                            {Object.values(CHAMPIONS).sort((a,b) => a.name.localeCompare(b.name)).map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
                          </select>
                          <select value={matchup.difficulty} onChange={(e) => { const newMatchups = [...newGuide.matchups]; newMatchups[i].difficulty = e.target.value; setNewGuide({...newGuide, matchups: newMatchups}); }} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                            {['Easy', 'Favorable', 'Skill', 'Unfavorable', 'Hard'].map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                          <input type="text" value={matchup.tip} onChange={(e) => { const newMatchups = [...newGuide.matchups]; newMatchups[i].tip = e.target.value; setNewGuide({...newGuide, matchups: newMatchups}); }} placeholder="How to play this matchup" className="col-span-2 bg-slate-700 rounded-lg px-3 py-2 text-sm" />
                        </div>
                      ))}
                      <button onClick={() => setNewGuide({...newGuide, matchups: [...newGuide.matchups, { champion: '', difficulty: 'Skill', tip: '' }]})} className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 mt-2">
                        <Plus size={14} /> Add Matchup
                      </button>
                    </div>

                    {/* SECTION 8: Combos */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><Target size={18} className="text-orange-400" /> Combos</h3>
                      {newGuide.combos.map((combo, i) => (
                        <div key={i} className="grid grid-cols-4 gap-2 mb-2">
                          <input type="text" value={combo.name} onChange={(e) => { const newCombos = [...newGuide.combos]; newCombos[i].name = e.target.value; setNewGuide({...newGuide, combos: newCombos}); }} placeholder="Combo Name" className="bg-slate-700 rounded-lg px-3 py-2 text-sm" />
                          <input type="text" value={combo.inputs} onChange={(e) => { const newCombos = [...newGuide.combos]; newCombos[i].inputs = e.target.value; setNewGuide({...newGuide, combos: newCombos}); }} placeholder="e.g., Q > AA > E > W" className="col-span-2 bg-slate-700 rounded-lg px-3 py-2 text-sm" />
                          <select value={combo.difficulty} onChange={(e) => { const newCombos = [...newGuide.combos]; newCombos[i].difficulty = e.target.value; setNewGuide({...newGuide, combos: newCombos}); }} className="bg-slate-700 rounded-lg px-3 py-2 text-sm">
                            {['Easy', 'Medium', 'Hard'].map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </div>
                      ))}
                      <button onClick={() => setNewGuide({...newGuide, combos: [...newGuide.combos, { name: '', inputs: '', difficulty: 'Easy' }]})} className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1 mt-2">
                        <Plus size={14} /> Add Combo
                      </button>
                    </div>

                    {/* SECTION 9: Tips */}
                    <div className="p-4 bg-slate-700/30 rounded-xl border border-slate-600">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><AlertCircle size={18} className="text-yellow-400" /> Key Tips & Tricks</h3>
                      {newGuide.tips.map((tip, i) => (
                        <input key={i} type="text" value={tip} onChange={(e) => { const newTips = [...newGuide.tips]; newTips[i] = e.target.value; setNewGuide({...newGuide, tips: newTips}); }} placeholder={`Pro Tip ${i + 1}`} className="w-full bg-slate-700 rounded-lg px-3 py-2 mb-2" />
                      ))}
                      <button onClick={() => setNewGuide({...newGuide, tips: [...newGuide.tips, '']})} className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
                        <Plus size={14} /> Add Tip
                      </button>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-3 pt-4">
                      <button onClick={() => {
                        const validation = validateGuide({...newGuide, sections: { introduction: newGuide.introduction }});
                        if (!validation.valid) {
                          alert('Please fix: ' + validation.errors.join(', '));
                          return;
                        }
                        const guide = {
                          id: generateGuideId(),
                          ...newGuide,
                          sections: { 
                            introduction: newGuide.introduction, 
                            prosAndCons: newGuide.prosAndCons,
                            itemBuilds: {
                              starter: { items: newGuide.itemBuilds.starter.filter(Boolean), explanation: '' },
                              core: { items: newGuide.itemBuilds.core.filter(Boolean), explanation: '' },
                              situational: newGuide.itemBuilds.situational.filter(Boolean).map(item => ({ item, when: '', priority: 'MEDIUM' })),
                              boots: [{ item: newGuide.itemBuilds.boots, when: 'Default' }]
                            },
                            matchups: newGuide.matchups.filter(m => m.champion),
                            combos: newGuide.combos.filter(c => c.name)
                          },
                          author: { ...newGuide.author, id: 'user-new', avatar: '👤', verified: false, guidesCount: 1, totalUpvotes: 0 },
                          tags: ['Season 2026', 'Community'],
                          patch: VERSION,
                          createdAt: new Date().toISOString().split('T')[0],
                          updatedAt: new Date().toISOString().split('T')[0],
                          ratings: { overall: 0, helpful: 0, accuracy: 0, detail: 0, upToDate: 0, totalVotes: 0 },
                          comments: [],
                          views: 0,
                          bookmarks: 0
                        };
                        setUserGuides([guide, ...userGuides]);
                        setNewGuide({
                          title: '', champion: '', role: '', category: 'COMPREHENSIVE', difficulty: 'INTERMEDIATE',
                          introduction: '', 
                          prosAndCons: { pros: ['', '', ''], cons: ['', '', ''] },
                          runes: { keystone: '', primaryTree: '', secondaryTree: '', explanation: '' }, 
                          itemBuilds: { starter: ['', ''], core: ['', '', ''], situational: ['', '', ''], boots: '' },
                          summonerSpells: { primary: 'Flash', secondary: '' },
                          abilities: { skillOrder: 'Q > E > W', maxFirst: 'Q', maxSecond: 'E' },
                          matchups: [{ champion: '', difficulty: 'Skill', tip: '' }],
                          combos: [{ name: '', inputs: '', difficulty: 'Easy' }],
                          tips: ['', '', ''], 
                          author: { username: '', rank: '', server: '' }
                        });
                        setCommunityTab('browse');
                        alert('Guide submitted successfully!');
                      }} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-bold flex items-center gap-2">
                        <Check size={18} /> Submit Guide
                      </button>
                      <button onClick={() => setCommunityTab('browse')} className="px-6 py-3 bg-slate-600 hover:bg-slate-500 rounded-xl flex items-center gap-2">
                        <X size={18} /> Cancel
                      </button>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* MY GUIDES */}
            {communityTab === 'my-guides' && (
              <Card title="My Guides" icon="📁">
                <p className="text-slate-400 text-center py-8">You haven't submitted any guides yet. <button onClick={() => setCommunityTab('submit')} className="text-purple-400 underline">Submit your first guide!</button></p>
              </Card>
            )}
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 py-4 mt-8 text-center text-xs text-slate-500">
        LoL-Matrix Pro • Data Dragon v{VERSION} • {Object.keys(CHAMPIONS).length} Champions • Not affiliated with Riot Games
      </footer>
    </div>
  );
}
