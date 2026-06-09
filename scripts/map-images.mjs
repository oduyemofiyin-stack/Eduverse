import fs from 'fs';

// Load scored metadata (all 320 photos from pages 5-8)
const scored = JSON.parse(fs.readFileSync('scored-metadata.json', 'utf8'));

// Load fresh IDs (248 photos NOT currently used)
const freshIds = new Set(JSON.parse(fs.readFileSync('fresh-pexels-ids.json', 'utf8')));

// Load course titles for courses 21-151
const courses = JSON.parse(fs.readFileSync('course-titles.json', 'utf8'));

// Topic keywords per course for relevance matching
const topicKeywords = {
  "web": ["web", "frontend", "backend", "fullstack", "full-stack", "framework", "react", "angular", "vue", "svelte", "next.js", "nextjs"],
  "mobile": ["mobile", "app", "ios", "android", "swift", "kotlin", "react native", "flutter", "cross-platform"],
  "backend": ["server", "api", "database", "backend", "graphql", "rest", "microservice"],
  "devops": ["docker", "kubernetes", "devops", "ci/cd", "deploy", "infrastructure", "cloud", "aws", "azure", "gcp"],
  "data": ["data", "analytics", "statistics", "visualization", "tableau", "spark", "etl", "warehouse", "airflow"],
  "ml": ["machine learning", "deep learning", "ai", "artificial intelligence", "neural", "tensorflow", "pytorch", "nlp", "computer vision", "llm", "genai", "generative"],
  "security": ["security", "cyber", "encryption", "cryptography", "forensic", "malware", "network security", "devsecops", "soc"],
  "game": ["game", "unity", "unreal", "godot", "gamedev", "3d", "blender"],
  "design": ["design", "ui", "ux", "figma", "sketch", "adobe", "photoshop", "illustrator", "typography", "brand", "motion"],
  "business": ["marketing", "business", "entrepreneur", "startup", "management", "sales", "finance", "leadership", "communication", "growth"],
  "programming": ["programming", "coding", "software", "development", "algorithm", "functional", "systems", "compiler"],
  "legacy": ["legacy", "enterprise", "mainframe", "cobol", "fortran", "pascal", "assembly"],
  "hardware": ["hardware", "iot", "robot", "embedded", "circuit", "vhdl", "verilog", "chip"],
  "science": ["science", "quantum", "research", "matlab", "simulation", "scientific", "numerical"],
  "blockchain": ["blockchain", "web3", "solidity", "crypto", "smart contract"],
  "lowlevel": ["c programming", "c++", "rust", "zig", "assembly", "systems programming", "low-level"],
};

// Map each course to topic categories
function categorizeCourse(title) {
  const t = title.toLowerCase();
  const cats = [];
  for (const [cat, kws] of Object.entries(topicKeywords)) {
    if (kws.some(kw => t.includes(kw))) cats.push(cat);
  }
  return cats;
}

// For each course, get the categories
const courseCats = courses.map(c => ({ ...c, cats: categorizeCourse(c.title) }));
console.log('Course categories:');
courseCats.forEach(c => console.log(`  id=${c.id} "${c.title}" -> [${c.cats.join(', ')}]`));

// Now assign images based on category affinity
const assigned = new Map(); // courseId -> pexelsId
const usedIds = new Set();

// Get fresh (unused) images sorted by score
const available = scored
  .filter(s => freshIds.has(s.id))
  .sort((a, b) => b.score - a.score);

console.log(`\nAvailable fresh images: ${available.length}`);

// Define which categories get which image styles (based on alt text keywords)
const styleKeywords = {
  "web": ["modern", "architecture", "urban", "city", "building", "interior", "office", "desk", "workspace", "clean", "minimal", "light", "bright"],
  "mobile": ["urban", "city", "modern", "architecture", "street", "contemporary", "minimal", "sleek"],
  "backend": ["abstract", "pattern", "dark", "server", "structure", "industrial", "metal", "steel", "shadow"],
  "devops": ["abstract", "pattern", "geometry", "structure", "industrial", "modern", "architecture", "aerial"],
  "data": ["abstract", "pattern", "geometry", "chart", "graph", "dark", "minimal", "aerial", "perspective"],
  "ml": ["abstract", "dark", "neon", "bokeh", "light", "pattern", "technology", "future", "modern"],
  "security": ["dark", "shadow", "night", "black and white", "monochrome", "industrial", "structure"],
  "game": ["neon", "light", "dark", "night", "urban", "abstract", "colorful", "modern"],
  "design": ["minimal", "clean", "texture", "pattern", "modern", "architect", "interior", "bright"],
  "business": ["city", "urban", "modern", "office", "building", "clean", "bright", "architecture"],
  "programming": ["abstract", "pattern", "dark", "modern", "minimal", "structure", "geometry", "black and white"],
  "legacy": ["architecture", "old", "classic", "building", "structure", "elegant", "historical"],
  "hardware": ["industrial", "metal", "structure", "machine", "texture", "abstract", "pattern"],
  "science": ["abstract", "dark", "pattern", "geometry", "minimal", "light", "modern"],
  "blockchain": ["abstract", "digital", "modern", "neon", "pattern", "dark", "geometry"],
  "lowlevel": ["dark", "abstract", "pattern", "industrial", "metal", "structure", "monochrome"],
};

function scoreImageForCategory(img, cats) {
  const txt = (img.alt + ' ' + img.photographer).toLowerCase();
  let score = img.score; // base score (suitability)
  
  // Add bonus for matching category keywords
  for (const cat of cats) {
    const kws = styleKeywords[cat] || [];
    for (const kw of kws) {
      if (txt.includes(kw)) {
        score += 0.5;
      }
    }
  }
  return score;
}

// Assign images one by one
for (const course of courseCats) {
  // Find best available image for this course
  let best = null;
  let bestScore = -Infinity;
  
  for (const img of available) {
    if (usedIds.has(img.id)) continue;
    
    const s = scoreImageForCategory(img, course.cats);
    if (s > bestScore) {
      bestScore = s;
      best = img;
    }
  }
  
  if (best) {
    assigned.set(course.id, best.id);
    usedIds.add(best.id);
    console.log(`  Course ${course.id} "${course.title}" -> pexelsId=${best.id} (score=${bestScore.toFixed(2)}) cats=[${course.cats.join(',')}] alt="${best.alt.substring(0, 50)}"`);
  } else {
    console.log(`  Course ${course.id} - NO IMAGE AVAILABLE!`);
  }
}

console.log(`\nAssigned ${assigned.size} images to ${courseCats.length} courses`);
console.log(`Used ${usedIds.size} out of ${available.length} available images`);

// Write the mapping
const mapping = {};
for (const [courseId, pexelsId] of assigned) {
  mapping[courseId] = pexelsId;
}
fs.writeFileSync('image-mapping.json', JSON.stringify(mapping, null, 2));
console.log('Saved to image-mapping.json');
