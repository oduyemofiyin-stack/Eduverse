import { readFileSync, writeFileSync } from 'fs';

const raw = readFileSync('data/courses.js', 'utf8');
const lines = raw.split('\n');

// New lessons to add for each short course (target ~3 hours total)
const extraLessons = {
  1: [
    {title:"React Router & SPA Navigation", dur:"42 min", yt:"nDtp3OkRzCQ"},
    {title:"State Management with Redux Toolkit", dur:"45 min", yt:"9zySezF2iSM"},
    {title:"Building & Deploying a Full React App", dur:"40 min", yt:"w7ejDZ8SWv8"},
  ],
  3: [
    {title:"User Testing & Usability Analysis", dur:"45 min", yt:"4TjBn89H8oA"},
    {title:"Advanced Figma Components & Auto Layout", dur:"42 min", yt:"jVpE0kPJp_k"},
    {title:"Portfolio & Case Study Presentation", dur:"48 min", yt:"JZzMk71XIHQ"},
  ],
  9: [
    {title:"TypeScript with React & Node.js", dur:"48 min", yt:"8U4OZ7j_0oQ"},
    {title:"Type System & Conditional Types Deep Dive", dur:"50 min", yt:"8gXvr1I1N6E"},
    {title:"Real-World TypeScript Project Architecture", dur:"45 min", yt:"4PjF1hKPtYg"},
  ],
};

// Store which course we discovered that needs extending
const shortCourseIds = Object.keys(extraLessons).map(Number);
const findNeedsExtend = new Set(shortCourseIds);

let currentId = null;
let insideLessons = false;
let lessonsNeedExtra = false;
let out = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Detect course ID
  const idMatch = trimmed.match(/^id:\s*(\d+)/);
  if (idMatch) {
    currentId = parseInt(idMatch[1]);
  }

  // Replace duration for short courses (inline or own line)
  if (line.includes('duration:') && findNeedsExtend.has(currentId)) {
    out.push(line.replace(/duration:"[^"]*"/, 'duration:"3 hours"'));
    continue;
  }

  // Track lessons array entry
  if (trimmed === 'lessons:[' && findNeedsExtend.has(currentId)) {
    insideLessons = true;
    lessonsNeedExtra = true;
    out.push(line);
    continue;
  }

  // Detect closing of lessons array (line with just "    ],")
  if (lessonsNeedExtra && insideLessons && trimmed === '],' && /^ {4}\]/.test(line)) {
    // Inject extra lessons before the closing bracket
    for (const lesson of extraLessons[currentId]) {
      out.push(`      {title:"${lesson.title}", dur:"${lesson.dur}", yt:"${lesson.yt}"},`);
    }
    insideLessons = false;
    lessonsNeedExtra = false;
    out.push(line);
    continue;
  }

  out.push(line);
}

writeFileSync('data/courses.js', out.join('\n'));
console.log('Done!');
