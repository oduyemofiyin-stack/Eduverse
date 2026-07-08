import fs from 'fs';

// Read existing file
let content = fs.readFileSync('data/courses.js', 'utf8');

// Remove closing
content = content.replace(/\];\s*\n\nexport default courses;/, '');

function q(s) { return s.replace(/"/g, '\\"'); }

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
  c.quiz.forEach((q, i) => {
    s += `      {q:"${q(q.q)}", opts:[${q.opts.map(o => `"${q(o)}"`).join(',')}], ans:${q.ans}}${i < c.quiz.length - 1 ? ',' : ''}\n`;
  });
  s += `    ]\n`;
  s += `  }`;
  if (!isLast) s += ',';
  s += '\n';
  return s;
}

const newCourses = [
  {
    id:21, title:"Next.js — Full-Stack Framework", instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"6.8 hours",
    level:"intermediate",
    description:"Build production-grade full-stack apps with Next.js. Covers SSR, SSG, API routes, middleware, and deployment on Vercel.",
    img:"https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.7, keywords:["nextjs","react","ssr","ssg","vercel","fullstack"],
    lessons:[
      {title:"Next.js Fundamentals & Routing", dur:"65 min", yt:"2cB5Fh46ViQ"},
      {title:"Data Fetching — SSR, SSG & ISR", dur:"78 min", yt:"6Jy5XFH6eH8"},
      {title:"API Routes & Middleware", dur:"92 min", yt:"3Hj3GJ7iG6I"},
      {title:"Authentication & Deployment", dur:"173 min", yt:"k7rZR5hY7jA"},
    ],
    reading:[
      {title:"Why Next.js?", body:"Next.js is the React framework for production, giving you SSR, SSG, and API routes out of the box.", points:["File-based routing simplifies navigation","SSR improves SEO and initial load","SSG pre-renders static pages at build","API routes eliminate separate backend"]},
      {title:"Rendering Strategies", body:"Choose the right rendering strategy for each page.", points:["SSR for dynamic, personalized content","SSG for static marketing pages","ISR combines static with periodic updates","CSR for fully interactive dashboards"]},
    ],
    quiz:[
      {q:"What does SSR stand for?", opts:["Server-Side Rendering","Static Site Rendering","Simple State Render","Server Script Runtime"], ans:0},
      {q:"Which Next.js function fetches data at build time?", opts:["getServerSideProps","getStaticProps","getInitialProps","useEffect"], ans:1},
      {q:"What is ISR?", opts:["Incremental Static Regeneration","Instant Server Response","Inline Style Rendering","Integrated Service Router"], ans:0},
      {q:"Where do API routes live in Next.js?", opts:["/api","/pages/api","/routes/api","/backend"], ans:1},
      {q:"Which company created Next.js?", opts:["Meta","Vercel","Google","Netflix"], ans:1},
    ]
  },
  {
    id:22, title:"Angular — Complete Guide", instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"14.2 hours",
    level:"intermediate",
    description:"Master Angular from setup to deployment. Covers components, services, routing, forms, RxJS, and state management with NgRx.",
    img:"https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.5, keywords:["angular","typescript","rxjs","ngrx","frontend"],
    lessons:[
      {title:"Angular CLI & Project Structure", dur:"92 min", yt:"3qBXWUpoPHo"},
      {title:"Components, Directives & Pipes", dur:"210 min", yt:"x5PZwb4XurU"},
      {title:"Services, DI & HTTP Client", dur:"185 min", yt:"k5E2mgkCSSI"},
      {title:"RxJS, NgRx & State Management", dur:"365 min", yt:"f97ICOaVFYI"},
    ],
    reading:[
      {title:"Angular Architecture", body:"Angular is a comprehensive TypeScript framework from Google for building large-scale SPAs.", points:["Components are the building blocks of UI","Services handle business logic","Dependency injection manages singletons","Modules organize related features"]},
      {title:"RxJS & Reactive Programming", body:"RxJS brings reactive programming to Angular with observables.", points:["Observables are streams of data over time","Operators like map, filter, merge transform streams","Subjects act as both observer and observable","Async pipes subscribe/unsubscribe automatically"]},
    ],
    quiz:[
      {q:"What language does Angular use?", opts:["JavaScript","TypeScript","Dart","CoffeeScript"], ans:1},
      {q:"What is a decorator in Angular?", opts:["A CSS class","A function that adds metadata to classes","A type of component","A routing guard"], ans:1},
      {q:"What does RxJS provide?", opts:["CSS animations","Reactive programming with observables","HTTP server","Database access"], ans:1},
      {q:"What is NgRx?", opts:["A CSS framework","State management library inspired by Redux","A testing tool","A build system"], ans:1},
      {q:"Which decorator marks a class as a module?", opts:["@Component","@Injectable","@NgModule","@Directive"], ans:2},
    ]
  },
];

// Generate all courses
let newPart = '';
for (let i = 0; i < newCourses.length; i++) {
  newPart += course(newCourses[i], i === newCourses.length - 1);
}

// Write the final file
const finalContent = content + newPart + '];\n\nexport default courses;\n';
fs.writeFileSync('data/courses.js', finalContent, 'utf8');
console.log('Written successfully. Checking...');

// Verify
const verify = fs.readFileSync('data/courses.js', 'utf8');
const match = verify.match(/\bid:(\d+),/g);
if (match) {
  const ids = match.map(m => parseInt(m.replace(/\D/g, '')));
  console.log(`Total courses in file: ${ids.length}`);
  console.log(`ID range: ${Math.min(...ids)} - ${Math.max(...ids)}`);
}
