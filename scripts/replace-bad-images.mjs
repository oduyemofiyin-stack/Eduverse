import fs from 'fs';

const content = fs.readFileSync('data/courses.js', 'utf8');
const meta = JSON.parse(fs.readFileSync('pexels-metadata.json', 'utf8'));

// Extract all course image IDs
const blockRegex = /\n\s*id:\s*(\d+),[\s\S]*?img:\s*"(https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\d+\.jpeg\?auto=compress&cs=tinysrgb&w=600)"/g;
const courses = [];
let m;
while ((m = blockRegex.exec(content)) !== null) {
  courses.push({ id: parseInt(m[1]), img: m[2], pexelsId: parseInt(m[3]) });
}

// Build metadata lookup
const metaMap = {};
meta.forEach(p => metaMap[p.id] = p);

// Score function for image suitability
function scoreImage(p) {
  if (!p) return { score: 0, bad: 0, dark: 0 };
  const txt = (p.alt + ' ' + p.photographer).toLowerCase();
  const badKws = ['flower','petal','bloom','food','meal','dish','pastry','cake','dessert','wedding','bride','groom',
    'fruit','vegetable','breakfast','lunch','dinner','beach','sunset','sunrise','ocean','wave',
    'bird','animal','wildlife','horse','mountain','lake','river','snow','winter','ice',
    'cat','dog','puppy','kitten','baby','child','toddler','christmas','gift','balloon','party',
    'strawberry','berry','cherry','cookie','chocolate','pizza','pasta','coffee','latte',
    'turkey','enchilada', 'empanada', 'snack', 'omelette', 'waffle'];
  const goodKws = ['abstract','bokeh','pattern','geometry','architecture','modern','urban','city',
    'building','interior','office','desk','workspace','dark','minimal','studio','light','shadow',
    'structure','industrial','design','black and white','monochrome','night','neon',
    'symmetry','clean','wall','room','space','glass','steel','silhouette','contemporary',
    'aerial','perspective','texture','geometric','architectural'];
  let bad = 0, good = 0;
  badKws.forEach(kw => { if (txt.includes(kw)) bad++; });
  goodKws.forEach(kw => { if (txt.includes(kw)) good++; });
  const hex = p.avg_color;
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  const darkScore = Math.max(0, 180 - brightness) / 180;
  return { score: good + darkScore - bad * 0.5, bad, good, darkScore, brightness };
}

// Find which courses 21-151 have images from pages 5-8 (in metadata)
const coursesToCheck = courses.filter(c => c.id >= 21);

// Score current images
const currentScores = coursesToCheck.map(c => {
  const p = metaMap[c.pexelsId];
  const s = p ? scoreImage(p) : { score: 0.5, bad: 0, good: 0, darkScore: 0, brightness: 128, unknown: true };
  return { ...c, ...s, inMeta: !!p };
});

// Sort by score ascending (worst first) for courses IN metadata
const worstInMeta = currentScores.filter(c => c.inMeta).sort((a, b) => a.score - b.score);
console.log('=== WORST IMAGES (in metadata, scores < 0.8) ===');
const toReplace = worstInMeta.filter(c => c.score < 0.8);
toReplace.forEach(c => {
  const p = metaMap[c.pexelsId];
  console.log(`  id=${c.id} pexelsId=${c.pexelsId} score=${c.score.toFixed(2)} bad=${c.bad} bright=${c.brightness.toFixed(0)} ${p.alt.substring(0, 60)}`);
});

// Build replacement pool from fresh IDs
const freshIds = JSON.parse(fs.readFileSync('fresh-pexels-ids.json', 'utf8'));
const freshImgs = freshIds.map(id => metaMap[id]).filter(Boolean).map(p => ({...p, ...scoreImage(p)}));
// Filter to only good replacements (score >= 1.0 or at least dark and not bad)
const goodPool = freshImgs
  .filter(p => p.score > 0.5 && p.bad === 0)
  .sort((a, b) => b.score - a.score);

// Also include non-bad images with decent dark score
const decentPool = freshImgs
  .filter(p => p.bad === 0 && p.brightness < 140)
  .sort((a, b) => b.score - a.score);

console.log(`\nGood replacements available: ${goodPool.length}`);
console.log(`Decent dark replacements: ${decentPool.length}`);

// Replace worst images
let usedReplacementIds = new Set();
let replacements = 0;

for (const course of toReplace) {
  // Find best replacement not already used
  const pick = goodPool.find(p => !usedReplacementIds.has(p.id)) || decentPool.find(p => !usedReplacementIds.has(p.id));
  if (!pick) {
    console.log(`  No replacement available for course ${course.id}`);
    continue;
  }
  usedReplacementIds.add(pick.id);
  replacements++;
  const p = metaMap[course.pexelsId];
  console.log(`  REPLACE id=${course.id}: pexelsId ${course.pexelsId} (score=${course.score.toFixed(2)}) -> ${pick.id} (score=${pick.score.toFixed(2)}) ${pick.alt.substring(0, 50)}`);
}

console.log(`\nTotal replacements: ${replacements}`);
console.log(`Used ${usedReplacementIds.size} unique replacements`);

// Now generate the actual file replacement
let newContent = content;

for (const course of courses) {
  if (course.id < 21) continue;
  const s = currentScores.find(c => c.id === course.id);
  if (!s) continue;
  
  // Determine replacement
  let newId = null;
  if (s.inMeta && s.score < 0.8) {
    // Find what we assigned
    const idx = toReplace.indexOf(s);
    if (idx >= 0) {
      const picks = [...goodPool.filter(p => !usedReplacementIds.has(p.id)), ...decentPool.filter(p => !usedReplacementIds.has(p.id))];
    }
  }
}

// Actually let's do the replacement differently - save the mapping and then apply
const replacementMap = {};
let ri = 0;
for (const course of toReplace) {
  const picks = [...goodPool.filter(p => !usedReplacementIds.has(p.id) || p.id === course.pexelsId)];
  // Actually this logic is wrong. Let me redo it.
}
