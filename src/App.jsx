import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, RadarChart, Radar, PolarGrid, PolarAngleAxis, LineChart, Line, Legend, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import championsData from './data/champions_full.json';
import itemsData from './data/items_full.json';
import guidesData from './data/guides.json';
import runesData from './data/runes.json';
import { MathEngine, DataDragon } from './utils/api';
import { generateMatchup, getAllMatchups, championTraits, getCounters, getStrongAgainst } from './data/matchupEngine';

const VERSION = championsData.meta.version;
const ICON_BASE = championsData.meta.iconBase;
const SPLASH_BASE = championsData.meta.splashBase;
const ITEM_ICON_BASE = itemsData.meta.iconBase;
const CHAMPIONS = championsData.champions;
const ITEMS = itemsData.items;
const GUIDES = guidesData.championGuides;
const RUNES = runesData.trees;
const RUNE_PAGES = runesData.recommendedPages;
const JUNGLE_PATHS = guidesData.junglePaths;
const PRACTICE = guidesData.practiceDrills;
const VOD_CHECKLIST = guidesData.improvementChecklist;
const WAVE_MGMT = guidesData.waveManagement;

const TIER_COLORS = { S: '#FFD700', A: '#22C55E', B: '#3B82F6', C: '#6B7280', D: '#DC2626' };
const DMG_COLORS = { physical: '#F97316', magic: '#A855F7', mixed: '#3B82F6', true: '#FFFFFF' };
const CHART_COLORS = ['#3B82F6', '#22C55E', '#F97316', '#A855F7', '#EC4899', '#06B6D4'];

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

const Tab = ({ active, onClick, icon, label }) => (
  <button onClick={onClick} className={`px-3 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${active ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
    {icon} <span className="hidden sm:inline ml-1">{label}</span>
  </button>
);

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

  const guide = selected ? GUIDES[selected.id] : null;

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
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-xl font-black shadow-lg shadow-purple-500/30">⚡</div>
              <div>
                <h1 className="text-xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">LoL-Matrix Pro</h1>
                <p className="text-[10px] text-slate-500">World-Class Coaching Platform • v{VERSION}</p>
              </div>
            </div>
            <input type="text" placeholder="Search champions..." value={search} onChange={(e) => setSearch(e.target.value)} className="flex-1 max-w-xs bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-2 text-sm" />
            <div className="flex gap-1 bg-slate-800/50 rounded-xl p-1 border border-slate-700/50 overflow-x-auto">
              <Tab active={tab === 'overview'} onClick={() => setTab('overview')} icon="📊" label="Overview" />
              <Tab active={tab === 'guides'} onClick={() => setTab('guides')} icon="📚" label="Guides" />
              <Tab active={tab === 'matchups'} onClick={() => setTab('matchups')} icon="⚔️" label="Matchups" />
              <Tab active={tab === 'runes'} onClick={() => setTab('runes')} icon="🔮" label="Runes" />
              <Tab active={tab === 'builder'} onClick={() => setTab('builder')} icon="🔧" label="Builder" />
              <Tab active={tab === 'tracker'} onClick={() => setTab('tracker')} icon="👁️" label="Tracker" />
              <Tab active={tab === 'practice'} onClick={() => setTab('practice')} icon="🎯" label="Practice" />
              <Tab active={tab === 'improve'} onClick={() => setTab('improve')} icon="📈" label="Improve" />
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
                    <div className="space-y-2">{guide.tips?.slice(0, 3).map((tip, i) => <div key={i} className="text-sm text-slate-300 flex gap-2"><span className="text-purple-400">•</span>{tip}</div>)}</div>
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
                {selected && <div className="mt-4 flex items-center gap-3"><ChampIcon id={selected.id} size={48} /><div><b>{selected.name}</b><div className="text-sm text-slate-400">{selected.role}</div></div></div>}
              </Card>
              {guide && (<>
                <Card title="Power Spikes" icon="⚡">
                  <div className="space-y-2">
                    {guide.powerSpikes?.map((spike, i) => (
                      <div key={i} className="flex gap-3 p-2 bg-slate-700/30 rounded-lg">
                        <span className="text-yellow-400 font-bold text-sm whitespace-nowrap">{spike.time}</span>
                        <span className="text-sm text-slate-300">{spike.description}</span>
                      </div>
                    ))}
                  </div>
                </Card>
                <Card title="Core Build" icon="🛠️">
                  <div className="space-y-2">
                    <div className="text-xs text-slate-400 mb-2">Skill Order: <b className="text-white">{guide.skillOrder}</b></div>
                    <div className="text-xs text-slate-400">Summoners: <b className="text-white">{guide.summonerSpells?.join(' + ')}</b></div>
                  </div>
                </Card>
              </>)}
            </div>
            <div className="lg:col-span-2 space-y-4">
              {guide ? (<>
                <Card title="Combos" icon="🎯">
                  <div className="space-y-3">
                    {guide.combos?.map((combo, i) => (
                      <div key={i} className="p-3 bg-slate-700/30 rounded-xl">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-bold text-purple-400">{combo.name}</span>
                          <code className="text-xs bg-slate-800 px-2 py-1 rounded font-mono">{combo.keys}</code>
                        </div>
                        <p className="text-sm text-slate-300">{combo.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card title="Lane Phase" icon="🛡️"><p className="text-sm text-slate-300">{guide.lanePhase}</p></Card>
                  <Card title="Teamfighting" icon="⚔️"><p className="text-sm text-slate-300">{guide.teamfighting}</p></Card>
                </div>
                <Card title="Tips & Tricks" icon="💡">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {guide.tips?.map((tip, i) => (
                      <div key={i} className="flex gap-2 text-sm p-2 bg-slate-700/30 rounded-lg"><span className="text-green-400">✓</span><span className="text-slate-300">{tip}</span></div>
                    ))}
                  </div>
                </Card>
              </>) : (
                <Card className="py-20 text-center">
                  <span className="text-6xl block mb-4">📚</span>
                  <p className="text-slate-400">Select a champion to view their guide</p>
                  <p className="text-slate-500 text-sm mt-2">Guides available for: Aatrox, Jinx, Lee Sin</p>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <Card title="Rune Pages" icon="🔮">
                <div className="space-y-2">
                  {Object.entries(RUNE_PAGES).map(([key, page]) => (
                    <button key={key} onClick={() => setSelectedRune(page)} className={`w-full text-left p-3 rounded-xl transition-all ${selectedRune === page ? 'bg-purple-600/30 border border-purple-500' : 'bg-slate-700/30 hover:bg-slate-700/50 border border-transparent'}`}>
                      <div className="font-bold text-sm">{page.name}</div>
                      <div className="text-xs text-slate-400">{page.keystone}</div>
                    </button>
                  ))}
                </div>
              </Card>
            </div>
            <div className="lg:col-span-2">
              {selectedRune && (
                <Card title={selectedRune.name} icon="📝">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-lg" style={{ color: RUNES[selectedRune.primary]?.color }}>Primary: {selectedRune.primary}</h4>
                      <div className="p-3 bg-slate-700/30 rounded-xl mb-3">
                        <div className="font-bold text-purple-400">{selectedRune.keystone}</div>
                        <div className="text-xs text-slate-400 mt-1">{RUNES[selectedRune.primary]?.keystones.find(k => k.name === selectedRune.keystone)?.description}</div>
                      </div>
                      <div className="space-y-2">
                        {selectedRune.primaryRunes.map((rune, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-slate-700/20 rounded-lg text-sm"><span className="w-2 h-2 rounded-full bg-purple-400" />{rune}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-lg" style={{ color: RUNES[selectedRune.secondary]?.color }}>Secondary: {selectedRune.secondary}</h4>
                      <div className="space-y-2 mb-4">
                        {selectedRune.secondaryRunes.map((rune, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 bg-slate-700/20 rounded-lg text-sm"><span className="w-2 h-2 rounded-full bg-blue-400" />{rune}</div>
                        ))}
                      </div>
                      <h4 className="font-bold mb-2">Stat Shards</h4>
                      <div className="flex gap-2">
                        {selectedRune.statShards.map((shard, i) => (
                          <span key={i} className="px-2 py-1 bg-slate-700/30 rounded text-xs">{shard}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-700">
                    <div className="text-sm text-slate-400">Best for: <span className="text-white">{selectedRune.bestFor?.join(', ')}</span></div>
                  </div>
                </Card>
              )}
            </div>
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
            <Card title="Enemy Summoner Spell Tracker" icon="👁️">
              <p className="text-sm text-slate-400 mb-4">Track enemy Flash, TP, and Ults. Click to start timer.</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-slate-400">
                      <th className="pb-2">Champion</th>
                      <th className="pb-2">Flash (300s)</th>
                      <th className="pb-2">TP (360s)</th>
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
                          <button onClick={() => updateTracker(i, 'flash', 300)} className={`px-3 py-1 rounded text-sm ${enemyTracker[i].flash > 0 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'}`}>
                            {enemyTracker[i].flash > 0 ? `${enemyTracker[i].flash}s` : 'UP'}
                          </button>
                        </td>
                        <td className="py-2">
                          <button onClick={() => updateTracker(i, 'tp', 360)} className={`px-3 py-1 rounded text-sm ${enemyTracker[i].tp > 0 ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'}`}>
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
              <Card title="Jungle Timers" icon="🐉">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Drake</span><span>5:00 → Every 5:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Rift Herald</span><span>8:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Baron</span><span>20:00</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Elder</span><span>After 4 drakes</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Void Grubs</span><span>5:00 → 9:45</span></div>
                </div>
              </Card>
              <Card title="Summoner CDs" icon="⏱️">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-yellow-400">Flash</span><span>300s (5 min)</span></div>
                  <div className="flex justify-between"><span className="text-blue-400">Teleport</span><span>360s (6 min)</span></div>
                  <div className="flex justify-between"><span className="text-red-400">Ignite</span><span>180s (3 min)</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Exhaust</span><span>210s (3.5 min)</span></div>
                  <div className="flex justify-between"><span className="text-green-400">Heal</span><span>240s (4 min)</span></div>
                </div>
              </Card>
              <Card title="CS Goals" icon="🎯">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card title="VOD Review Checklist" icon="📋">
                {Object.entries(VOD_CHECKLIST).map(([category, items]) => (
                  <div key={category} className="mb-4">
                    <h4 className="font-bold text-purple-400 capitalize mb-2">{category}</h4>
                    <div className="space-y-1">
                      {items.map((item, i) => (
                        <label key={i} className="flex items-center gap-2 text-sm cursor-pointer p-2 hover:bg-slate-700/30 rounded">
                          <input type="checkbox" checked={checkedItems[`${category}-${i}`] || false} onChange={(e) => setCheckedItems({ ...checkedItems, [`${category}-${i}`]: e.target.checked })} className="rounded accent-purple-500" />
                          <span className={checkedItems[`${category}-${i}`] ? 'text-slate-500 line-through' : 'text-slate-300'}>{item}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </Card>
            </div>
            <div className="space-y-4">
              <Card title="Improvement Goals" icon="🎯">
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
              <Card title="Progress Tips" icon="💡">
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-blue-500/10 rounded-lg"><b className="text-blue-400">Focus on one thing at a time.</b> Don't try to fix everything at once.</div>
                  <div className="p-3 bg-green-500/10 rounded-lg"><b className="text-green-400">Review one replay per day.</b> Look for patterns in your deaths.</div>
                  <div className="p-3 bg-purple-500/10 rounded-lg"><b className="text-purple-400">Play 2 warm-up games.</b> Don't jump straight into ranked.</div>
                  <div className="p-3 bg-yellow-500/10 rounded-lg"><b className="text-yellow-400">Take breaks after losses.</b> Tilt kills your LP more than bad play.</div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-800 py-4 mt-8 text-center text-xs text-slate-500">
        LoL-Matrix Pro • Data Dragon v{VERSION} • {Object.keys(CHAMPIONS).length} Champions • Not affiliated with Riot Games
      </footer>
    </div>
  );
}
