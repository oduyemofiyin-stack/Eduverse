import fs from 'fs';

let content = fs.readFileSync('data/courses.js', 'utf8');
content = content.replace(/\];\s*\n\nexport default courses;/, '');

function q(s) { return s.replace(/"/g, '\\"').replace(/\n/g, '\\n'); }

function course(c, isLast) {
  let s = '';
  s += `  {\n`;
  s += `    id:${c.id}, title:"${q(c.title)}",     instructor:"${q(c.instructor)}",\n`;
  s += `    category:"${q(c.category)}", duration:"${q(c.duration)}",\n`;
  s += `    level:"${q(c.level)}",\n`;
  s += `    description:"${q(c.description)}",\n`;
  s += `    img:"${q(c.img)}",\n`;
  s += `    rating:${c.rating}, keywords:[${c.keywords.map(k => `"${q(k)}"`).join(',')}],\n`;
  s += `    lessons:[\n`;
  c.lessons.forEach((l, i) => {
    s += `      {title:"${q(l.title)}", dur:"${q(l.dur)}", yt:"${l.yt}"}${i < c.lessons.length - 1 ? ',' : ''}\n`;
  });
  s += `    ],\n`;
  s += `    reading:[\n`;
  c.reading.forEach((r, i) => {
    s += `      {title:"${q(r.title)}", body:"${q(r.body)}", points:[${r.points.map(p => `"${q(p)}"`).join(',')}]}${i < c.reading.length - 1 ? ',' : ''}\n`;
  });
  s += `    ],\n`;
  s += `    quiz:[\n`;
  c.quiz.forEach((qObj, i) => {
    s += `      {q:"${q(qObj.q)}", opts:[${qObj.opts.map(o => `"${q(o)}"`).join(',')}], ans:${qObj.ans}}${i < c.quiz.length - 1 ? ',' : ''}\n`;
  });
  s += `    ]\n`;
  s += `  }`;
  if (!isLast) s += ',';
  s += '\n';
  return s;
}

const all = [];
export { all, course, content, fs, q };
