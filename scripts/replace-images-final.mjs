import fs from 'fs';

// 1. Read current courses.js and extract all image info
const content = fs.readFileSync('data/courses.js', 'utf8');
const meta = JSON.parse(fs.readFileSync('pexels-metadata.json', 'utf8'));
const metaMap = {};
meta.forEach(p => metaMap[p.id] = p);

// Extract course blocks
const courseBlocks = [];
const blockRegex = /(\n\s*id:\s*\d+,[\s\S]*?img:\s*"https:\/\/images\.pexels\.com\/photos\/(\d+)\/pexels-photo-\d+\.jpeg\?auto=compress&cs=tinysrgb&w=600")/g;
let m;
while ((m = blockRegex.exec(content)) !== null) {
  const fullBlock = m[1];
  const idMatch = fullBlock.match(/id:\s*(\d+)/);
  const pexelsMatch = fullBlock.match(/photos\/(\d+)\//);
  courseBlocks.push({
    full: fullBlock,
    id: parseInt(idMatch[1]),
    pexelsId: parseInt(pexelsMatch[1])
  });
}
console.log(`Found ${courseBlocks.length} course blocks`);

// 2. Score images
const badKws = ['flower','petal','bloom','food','meal','dish','pastry','cake','dessert','wedding','bride','groom',
  'fruit','vegetable','breakfast','lunch','dinner','beach','sunset','sunrise','ocean','wave',
  'bird','animal','wildlife','horse','mountain','lake','river','snow','winter','ice',
  'cat','dog','puppy','kitten','baby','child','toddler','christmas','gift','balloon','party',
  'strawberry','berry','cherry','cookie','chocolate','pizza','pasta','coffee','latte',
  'turkey','enchilada','empanada','snack','omelette','waffle','salad',
  'camel','elephant','giraffe','zebra','lion','deer','owl','macaw','parakeet',
  'lunar eclipse','milky way','night sky','star trail','rainbow','snow-capped'];

const goodKws = ['abstract','bokeh','pattern','geometry','architecture','modern','urban','city',
  'building','interior','office','desk','workspace','dark','minimal','studio','light','shadow',
  'structure','industrial','design','black and white','monochrome','night','neon',
  'symmetry','clean','wall','room','space','glass','steel','silhouette','contemporary',
  'aerial','perspective','texture','geometric','architectural','structural',
  'streamline','facade','minimalist','sleek','elegant'];

function scorePhoto(p) {
  const txt = (p.alt + ' ' + p.photographer).toLowerCase();
  let bad = 0, good = 0;
  badKws.forEach(kw => { if (txt.includes(kw)) bad++; });
  goodKws.forEach(kw => { if (txt.includes(kw)) good++; });
  const hex = p.avg_color;
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const brightness = (r*299 + g*587 + b*114) / 1000;
  const darkScore = Math.max(0, 180 - brightness) / 180;
  return { score: good + darkScore - bad * 0.8, bad, good, darkScore, brightness };
}

// Score all metadata images
const scoredMeta = meta.map(p => ({ ...p, ...scorePhoto(p) }));

// 3. For courses 48-116 (in metadata), find which ones need replacement
const badCourses = [];
const goodCourses = [];

for (const cb of courseBlocks) {
  if (cb.id < 21) continue;
  const p = metaMap[cb.pexelsId];
  if (p) {
    const s = scorePhoto(p);
    if (s.score < 0.6 || s.bad >= 1) {
      badCourses.push({ ...cb, ...s, alt: p.alt });
    } else {
      goodCourses.push({ ...cb, ...s });
    }
  } else {
    // Unknown quality (from pages 1-4 or 9+), keep as-is but try to improve
    badCourses.push({ ...cb, score: 0, bad: 0, alt: '(unknown quality)', keep: true });
  }
}

console.log(`\nCourses 21-151:`);
console.log(`  Good quality (keep): ${goodCourses.length}`);
console.log(`  Bad/unknown (replace or keep): ${badCourses.length}`);

// 4. Build replacement pool (fresh IDs not used anywhere)
const allUsedPexelsIds = new Set(courseBlocks.map(cb => cb.pexelsId));
const freshPool = scoredMeta
  .filter(p => !allUsedPexelsIds.has(p.id))
  .filter(p => p.bad === 0)  // No bad keywords
  .sort((a, b) => b.score - a.score);

console.log(`\nFresh replacement pool size: ${freshPool.length}`);
if (freshPool.length > 0) {
  console.log(`  Best: id=${freshPool[0].id} score=${freshPool[0].score.toFixed(2)} ${freshPool[0].alt.substring(0, 60)}`);
  console.log(`  Worst: id=${freshPool[freshPool.length-1].id} score=${freshPool[freshPool.length-1].score.toFixed(2)} ${freshPool[freshPool.length-1].alt.substring(0, 60)}`);
}

// 5. Assign replacements to bad courses (prioritizing those in metadata that are clearly bad)
const replacements = {}; // courseId -> new pexelsId
const usedIds = new Set();

// Sort bad courses: first replace known-bad (in metadata), then unknown
const sortedBad = [...badCourses].sort((a, b) => {
  // First, known-bad with lowest scores
  const aKnown = !!metaMap[a.pexelsId];
  const bKnown = !!metaMap[b.pexelsId];
  if (aKnown !== bKnown) return aKnown ? -1 : 1;
  return a.score - b.score;
});

for (const cb of sortedBad) {
  if (cb.keep) {
    // Unknown quality - try to replace if we have enough good images
    if (freshPool.filter(p => !usedIds.has(p.id)).length > sortedBad.filter(c => !c.keep).length + 10) {
      // We have extra images, replace unknowns too
    } else {
      continue; // Keep unknown quality images
    }
  }
  
  const pick = freshPool.find(p => !usedIds.has(p.id));
  if (!pick) {
    console.log(`  No replacement for course ${cb.id}`);
    continue;
  }
  
  replacements[cb.id] = pick.id;
  usedIds.add(pick.id);
  
  const oldAlt = cb.alt || '(unknown)';
  console.log(`  Course ${cb.id}: ${cb.pexelsId} -> ${pick.id} (score ${cb.score.toFixed(1)} -> ${pick.score.toFixed(2)}) ${pick.alt.substring(0, 40)}`);
}

console.log(`\nReplaced ${Object.keys(replacements).length} courses with new images`);

// 6. Apply replacements
let newContent = content;
for (const [courseId, newPexelsId] of Object.entries(replacements)) {
  const cb = courseBlocks.find(c => c.id === parseInt(courseId));
  if (!cb) continue;
  
  const oldUrl = `https://images.pexels.com/photos/${cb.pexelsId}/pexels-photo-${cb.pexelsId}.jpeg?auto=compress&cs=tinysrgb&w=600`;
  const newUrl = `https://images.pexels.com/photos/${newPexelsId}/pexels-photo-${newPexelsId}.jpeg?auto=compress&cs=tinysrgb&w=600`;
  
  newContent = newContent.replace(oldUrl, newUrl);
  console.log(`  Applied: course ${courseId}: ${cb.pexelsId} -> ${newPexelsId}`);
}

// 7. Verify no duplicates
const finalIds = newContent.match(/pexels\.com\/photos\/(\d+)\//g);
const finalSet = new Set(finalIds);
if (finalIds.length !== finalSet.size) {
  console.log(`\n⚠️  DUPLICATE FOUND! Total: ${finalIds.length}, Unique: ${finalSet.size}`);
  const counts = {};
  finalIds.forEach(id => { counts[id] = (counts[id] || 0) + 1; });
  for (const [id, count] of Object.entries(counts)) {
    if (count > 1) console.log(`  Duplicate: ${id} (${count}x)`);
  }
} else {
  console.log(`\n✅ All ${finalIds.length} images are unique!`);
}

// 8. Write updated file
fs.writeFileSync('data/courses.js', newContent);
console.log('\nFile updated: data/courses.js');
