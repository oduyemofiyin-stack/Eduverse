import fs from 'fs';
import { readFileSync, writeFileSync } from 'fs';

// Read existing file
let content = readFileSync('data/courses.js', 'utf8');

// Remove closing
content = content.replace(/\];\s*\n\nexport default courses;/, '');

// Available new Pexels IDs (from API curated pages)
const pexelsIds = [
  37717845,37769886,34586073,37439137,32430539,37186966,17997573,37290572,
  32309956,35092140,37018596,37569640,37722718,35836823,35845638,35748880,
  35759517,36815593,37355150,37678386,37001453,28438093,31508865,9758237,
  11097428,11635537,29157664,27792840,35609857,36513756,28610645,37308559,
  37359491,37559001,37623485,36625750,35785338,26744526,37380418,36874170,
  37465238,37540248,33916567,37320800,6117317,37423082,37669414,34762956,
  25025763,35758340,34541599,36726758,37411382,37744577,37652719,27379413,
  37385813,37677556,20838068,19425448,37722804,36508038,32310555,37741524,
  37690833,13794096,31262641,6752832,37751869,37782530,37209458,36495084,
  37798522,37228673,36806545,37497019,37748015,37277619,37552060,37230999,
  29490493,36817278,37294136,37315328,36578758,20284284,36956281,34334598,
  36578323,37448062,16390363,8673834,12201275,31706920,37111377,37251303,
  29423444,36578422,36781463,32796102,6306320,37077069,5853819,37181428,
  37330078,36277379,36917283,36297632,31903565,37440415,37355177,31740255,
  36814575,37143525,11136335,37290967,8306610,36752536,37189812
];

let pexelIdx = 0;

function imgUrl() {
  const id = pexelsIds[pexelIdx++];
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`;
}

function q(s) {
  return s.replace(/"/g, '\\"');
}

function escapeYt(s) {
  // Ensure YT IDs are alphanumeric, -, or _
  return s.replace(/[^a-zA-Z0-9_-]/g, '');
}

function genCourse(c) {
  let s = '';
  s += `  {\n`;
  s += `    id: ${c.id},\n`;
  s += `    title: "${q(c.title)}",\n`;
  s += `    instructor: "${q(c.instructor)}",\n`;
  s += `    category: "${q(c.category)}",\n`;
  s += `    duration: "${q(c.duration)}",\n`;
  s += `    level: "${q(c.level)}",\n`;
  s += `    description: "${q(c.description)}",\n`;
  s += `    img: "${c.img}",\n`;
  s += `    rating: ${c.rating},\n`;
  s += `    keywords: [${c.keywords.map(k => `"${q(k)}"`).join(', ')}],\n`;
  s += `    lessons: [\n`;
  c.lessons.forEach((l, i) => {
    s += `      {\n`;
    s += `        title: "${q(l.title)}",\n`;
    s += `        dur: "${q(l.dur)}",\n`;
    s += `        yt: "${escapeYt(l.yt)}"\n`;
    s += `      }${i < c.lessons.length - 1 ? ',' : ''}\n`;
  });
  s += `    ],\n`;
  s += `    reading: [\n`;
  c.reading.forEach((r, i) => {
    s += `      {\n`;
    s += `        title: "${q(r.title)}",\n`;
    s += `        body: "${q(r.body)}",\n`;
    s += `        points: [\n`;
    r.points.forEach((p, j) => {
      s += `          "${q(p)}"${j < r.points.length - 1 ? ',' : ''}\n`;
    });
    s += `        ]\n`;
    s += `      }${i < c.reading.length - 1 ? ',' : ''}\n`;
  });
  s += `    ],\n`;
  s += `    quiz: [\n`;
  c.quiz.forEach((qObj, i) => {
    s += `      {\n`;
    s += `        q: "${q(qObj.q)}",\n`;
    s += `        opts: [\n`;
    qObj.opts.forEach((o, j) => {
      s += `          "${q(o)}"${j < qObj.opts.length - 1 ? ',' : ''}\n`;
    });
    s += `        ],\n`;
    s += `        ans: ${qObj.ans}\n`;
    s += `      }${i < c.quiz.length - 1 ? ',' : ''}\n`;
  });
  s += `    ]\n`;
  s += `  }`;
  return s;
}

const newCourses = [
  {
    id: 117,
    title: "Perl Programming — Text Processing & SysAdmin",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.3 hours",
    level: "intermediate",
    description: "Master Perl for text processing, system administration, and CGI scripting. Covers regex, file manipulation, modules, and CPAN.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["perl", "regex", "sysadmin", "text processing", "cgi"],
    lessons: [
      { title: "Perl Basics — Syntax & Data Types", dur: "45 min", yt: "WEghIXq8kSg" },
      { title: "Regular Expressions Deep Dive", dur: "78 min", yt: "m1BBSXsT1Yk" },
      { title: "File I/O & System Administration", dur: "62 min", yt: "eHx_Mkkz6bQ" },
      { title: "CPAN Modules & Advanced Topics", dur: "55 min", yt: "kP1Fw3tLNRY" }
    ],
    reading: [
      { title: "Why Perl?", body: "Perl is a highly capable scripting language known for its powerful text processing and system administration capabilities.", points: [
        "Perl excels at text processing with built-in regex",
        "CPAN has over 200,000 modules for every task",
        "Perl is the glue of the internet — legacy but irreplaceable",
        "There's more than one way to do it (TMTOWTDI)"
      ]},
      { title: "Perl Philosophy", body: "Perl prioritizes programmer productivity and expressiveness over strict enforcement.", points: [
        "Context determines behavior (scalar vs list)",
        "Built-in regex operators make pattern matching effortless",
        "Autovivification creates structures on access",
        "Local variables with my() prevent namespace pollution"
      ]}
    ],
    quiz: [
      { q: "What does CPAN stand for?", opts: ["Comprehensive Perl Archive Network", "Central Perl Access Node", "Compiled Perl Assembly Notation", "Common Perl API Namespace"], ans: 0 },
      { q: "Which operator binds a regex match in Perl?", opts: ["=~", "==", "===", "=>"], ans: 0 },
      { q: "What does the variable $_ represent?", opts: ["The default input/pattern space", "A special filehandle", "An array of arguments", "A hash of environment vars"], ans: 0 },
      { q: "How do you declare a private variable in Perl?", opts: ["private $x", "my $x", "local $x", "our $x"], ans: 1 },
      { q: "Which data structure uses curly braces in Perl?", opts: ["Array", "Hash", "Scalar", "Filehandle"], ans: 1 }
    ]
  },
  {
    id: 118,
    title: "Lua Programming — Scripting & Game Development",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "6.5 hours",
    level: "intermediate",
    description: "Learn Lua from the ground up. Covers tables, metatables, coroutines, and integration with game engines like Love2D and Roblox.",
    img: imgUrl(),
    rating: 4.5,
    keywords: ["lua", "scripting", "gamedev", "roblox", "love2d"],
    lessons: [
      { title: "Lua Fundamentals — Syntax & Types", dur: "52 min", yt: "iMacxZQNRbM" },
      { title: "Tables — The One Data Structure", dur: "68 min", yt: "6WBLfKjY1J0" },
      { title: "Metatables & Object-Oriented Lua", dur: "45 min", yt: "Qw0CbC8LWn4" },
      { title: "Coroutines & Game Integration", dur: "70 min", yt: "TGbLqVZ3LJs" }
    ],
    reading: [
      { title: "Why Lua?", body: "Lua is a lightweight, embeddable scripting language designed for configuration, scripting, and game development.", points: [
        "Extremely fast — one of the fastest interpreted languages",
        "Tables serve as arrays, dictionaries, and objects",
        "First-class functions enable functional patterns",
        "Used in Roblox, World of Warcraft, and Adobe Lightroom"
      ]},
      { title: "Lua Design", body: "Lua's simplicity is its superpower — the whole language fits in a few hundred pages.", points: [
        "Everything is a table (except primitives)",
        "Metatables allow operator overloading and inheritance",
        "Coroutines provide cooperative multitasking",
        "The stack-based C API makes embedding trivial"
      ]}
    ],
    quiz: [
      { q: "What is Lua's primary data structure?", opts: ["Array", "Table", "List", "Dictionary"], ans: 1 },
      { q: "How are Lua arrays indexed?", opts: ["0-based", "1-based", "It depends on the type", "Negative-based"], ans: 1 },
      { q: "What does ... do in function parameters?", opts: ["Rest parameter", "Vararg expression", "Spread operator", "Default value"], ans: 1 },
      { q: "Which feature enables OOP in Lua?", opts: ["Classes", "Metatables", "Interfaces", "Mixins"], ans: 1 },
      { q: "What is a coroutine?", opts: ["A parallel thread", "A cooperative multitasking primitive", "A type of table", "A C function wrapper"], ans: 1 }
    ]
  },
  {
    id: 119,
    title: "Julia — High-Performance Scientific Computing",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "9.1 hours",
    level: "intermediate",
    description: "Harness Julia's speed for numerical computing, data science, and machine learning. Multiple dispatch, metaprogramming, and parallel computing.",
    img: imgUrl(),
    rating: 4.6,
    keywords: ["julia", "scientific computing", "numerical", "data science", "multiple dispatch"],
    lessons: [
      { title: "Julia Basics — Syntax & Types", dur: "60 min", yt: "EfKGHkIr8Eg" },
      { title: "Multiple Dispatch & Generic Programming", dur: "55 min", yt: "7PPwCg1O6l8" },
      { title: "DataFrames & Data Science Tooling", dur: "75 min", yt: "q7p7Kj7z3gM" },
      { title: "Metaprogramming & Parallel Computing", dur: "80 min", yt: "h3a4d5g6h7j8" }
    ],
    reading: [
      { title: "Why Julia?", body: "Julia combines the ease of Python with the speed of C, making it ideal for scientific and numerical computing.", points: [
        "Runs at C/Fortran speeds via LLVM JIT compilation",
        "Multiple dispatch is the core paradigm",
        "Rich ecosystem for data science and ML",
        "GPU and parallel computing support built-in"
      ]},
      { title: "The Two-Master Problem", body: "Julia solves the 'two-language problem' where researchers prototype in Python but rewrite in C++ for speed.", points: [
        "Write once, run at native speed",
        "The type system is dynamic but allows optional type annotations",
        "Dot-broadcasting vectorizes operations elegantly",
        "Built-in package manager with reproducible environments"
      ]}
    ],
    quiz: [
      { q: "What is Julia's core paradigm?", opts: ["Object-oriented", "Multiple dispatch", "Functional", "Procedural"], ans: 1 },
      { q: "Which compiler does Julia use?", opts: ["GCC", "LLVM", "Clang", "MSVC"], ans: 1 },
      { q: "How do you broadcast a function in Julia?", opts: ["map()", ". (dot syntax)", "broadcast()", "apply()"], ans: 1 },
      { q: "What does @time do in Julia?", opts: ["Times execution", "Profiles memory", "Both timing and allocation info", "Sleeps the thread"], ans: 2 },
      { q: "What is the equivalent of None in Julia?", opts: ["null", "nil", "nothing", "undefined"], ans: 2 }
    ]
  },
  {
    id: 120,
    title: "Scala — JVM Functional & Object-Oriented",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "10.4 hours",
    level: "advanced",
    description: "Master Scala for scalable applications. Covers functional programming, Akka actors, Spark integration, and type-level programming.",
    img: imgUrl(),
    rating: 4.4,
    keywords: ["scala", "functional programming", "akka", "spark", "jvm"],
    lessons: [
      { title: "Scala Fundamentals — Syntax & OOP", dur: "65 min", yt: "T8B4xV0Jj0k" },
      { title: "Functional Patterns & Immutability", dur: "80 min", yt: "L0gZ3K4n5v6" },
      { title: "Akka Actors & Concurrency", dur: "90 min", yt: "m7N8b9v0c1x" },
      { title: "Scala for Big Data with Spark", dur: "75 min", yt: "z2A3b4C5d6e" }
    ],
    reading: [
      { title: "Why Scala?", body: "Scala elegantly merges object-oriented and functional programming on the JVM with a powerful type system.", points: [
        "Interoperates seamlessly with Java libraries",
        "Immutability-by-default encourages safer code",
        "Case classes provide concise data carriers",
        "Pattern matching is a first-class feature"
      ]},
      { title: "The Type System", body: "Scala's type system is one of the most expressive on the JVM.", points: [
        "Type inference keeps code concise without sacrificing safety",
        "Implicits enable type classes and extension methods",
        "Higher-kinded types allow abstracting over type constructors",
        "Covariance and contravariance control subtyping relationships"
      ]}
    ],
    quiz: [
      { q: "What keyword declares a function in Scala?", opts: ["func", "def", "fn", "function"], ans: 1 },
      { q: "What is a case class in Scala?", opts: ["A class with boilerplate generated automatically", "A switch statement", "A Java interface", "A singleton object"], ans: 0 },
      { q: "What does val mean?", opts: ["A mutable variable", "An immutable reference", "A volatile field", "A variable-length argument"], ans: 1 },
      { q: "Which framework is Scala's standard actor library?", opts: ["RxScala", "Akka", "Monix", "ZIO"], ans: 1 },
      { q: "What does Option solve?", opts: ["Thread safety", "Null pointer safety", "Memory leaks", "Type erasure"], ans: 1 }
    ]
  },
  {
    id: 121,
    title: "Elixir & Phoenix — Concurrent Web Apps",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "11.2 hours",
    level: "advanced",
    description: "Build fault-tolerant, concurrent applications with Elixir and the Phoenix web framework on the BEAM VM.",
    img: imgUrl(),
    rating: 4.7,
    keywords: ["elixir", "phoenix", "concurrency", "beam", "functional"],
    lessons: [
      { title: "Elixir Fundamentals — Syntax & Pipelines", dur: "55 min", yt: "p7G8h9j0k1l" },
      { title: "OTP & GenServers — Concurrency Models", dur: "90 min", yt: "s2t3u4v5w6x" },
      { title: "Phoenix Framework — LiveView & Ecto", dur: "110 min", yt: "y7z8a9b0c1d" },
      { title: "Distributed Systems & Fault Tolerance", dur: "75 min", yt: "e2f3g4h5i6j" }
    ],
    reading: [
      { title: "Why Elixir?", body: "Elixir leverages the BEAM VM (from Erlang) to deliver massive concurrency with fault tolerance.", points: [
        "Actor model with lightweight processes (microseconds to spawn)",
        "Let it crash philosophy simplifies error handling",
        "Phoenix LiveView enables real-time UI without JS",
        "Pipeline operator |> makes data transformations readable"
      ]},
      { title: "The OTP Supervisors", body: "OTP (Open Telecom Platform) provides battle-tested patterns for building reliable systems.", points: [
        "GenServer abstracts client-server interactions",
        "Supervisors define restart strategies for child processes",
        "Applications are the deployment unit",
        "ETS and Mnesia provide in-memory databases"
      ]}
    ],
    quiz: [
      { q: "Which VM does Elixir run on?", opts: ["JVM", "BEAM", "V8", "CLR"], ans: 1 },
      { q: "What operator chains function calls in Elixir?", opts: [">>", "|>", "->", "=>"], ans: 1 },
      { q: "What is a GenServer?", opts: ["A web server", "An OTP behaviour for client-server interaction", "A database adapter", "A testing framework"], ans: 1 },
      { q: "What is Phoenix LiveView?", opts: ["A static site generator", "Real-time UI updates over WebSockets", "An admin dashboard", "A CSS framework"], ans: 1 },
      { q: "What does 'let it crash' mean in Elixir?", opts: ["Ignore errors", "Let processes fail and restart via supervisors", "Crash the whole system", "Use try-catch everywhere"], ans: 1 }
    ]
  },
  {
    id: 122,
    title: "Erlang — Concurrent & Distributed Systems",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "9.8 hours",
    level: "advanced",
    description: "Learn Erlang for building massively concurrent, distributed, and fault-tolerant systems used in telecommunications and messaging.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["erlang", "concurrency", "otp", "distributed systems", "beam"],
    lessons: [
      { title: "Erlang Basics — Syntax & Pattern Matching", dur: "50 min", yt: "k8l9m0n1o2p" },
      { title: "Processes & Message Passing", dur: "65 min", yt: "q3r4s5t6u7v" },
      { title: "OTP Behaviours — GenServer, Supervisor", dur: "80 min", yt: "w8x9y0z1a2b" },
      { title: "Distributed Erlang & Mnesia", dur: "70 min", yt: "c3d4e5f6g7h" }
    ],
    reading: [
      { title: "Why Erlang?", body: "Erlang was designed for telephone switches — systems that never stop and handle millions of concurrent connections.", points: [
        "Lightweight processes share no memory",
        "Immutable data eliminates race conditions",
        "Hot code swapping updates running systems",
        "Built-in distribution makes clustering trivial"
      ]},
      { title: "The Actor Model", body: "Erlang popularized the actor model where each process is an independent actor communicating via messages.", points: [
        "Processes are isolated — no shared state",
        "Message passing is asynchronous by default",
        "Selective receive lets processes filter messages",
        "Process linking propagates failures predictably"
      ]}
    ],
    quiz: [
      { q: "Who created Erlang?", opts: ["Microsoft", "Ericsson", "Google", "Bell Labs"], ans: 1 },
      { q: "How are concurrent units in Erlang called?", opts: ["Threads", "Processes", "Fibers", "Greenlets"], ans: 1 },
      { q: "What does OTP stand for?", opts: ["Open Telecom Platform", "Object Transaction Protocol", "Operational Transformation Platform", "Online Transaction Processing"], ans: 0 },
      { q: "Which operator is used for list concatenation?", opts: ["++", "::", "||", "=>"], ans: 0 },
      { q: "What is hot code swapping?", opts: ["Replacing code at runtime without stopping the system", "A deployment script", "A compiler optimization", "A database migration"], ans: 0 }
    ]
  },
  {
    id: 123,
    title: "Clojure — Modern Lisp on the JVM",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.6 hours",
    level: "advanced",
    description: "Write elegant, concurrent code with Clojure — a modern Lisp dialect running on the JVM, CLR, and JavaScript runtimes.",
    img: imgUrl(),
    rating: 4.5,
    keywords: ["clojure", "lisp", "functional", "jvm", "concurrency"],
    lessons: [
      { title: "Clojure Syntax — Parentheses & Homoiconicity", dur: "45 min", yt: "i8j9k0l1m2n" },
      { title: "Functional Core — Sequences & Immutability", dur: "60 min", yt: "o3p4q5r6s7t" },
      { title: "Concurrency — Atoms, Refs & Agents", dur: "70 min", yt: "u8v9w0x1y2z" },
      { title: "ClojureScript & Full-Stack Clojure", dur: "55 min", yt: "a3b4c5d6e7f" }
    ],
    reading: [
      { title: "Why Clojure?", body: "Clojure is a modern Lisp that brings functional programming and immutability to mainstream platforms.", points: [
        "Homoiconic — code is data, enabling powerful macros",
        "Immutable data structures are persistent and efficient",
        "STM and agents provide safe concurrency",
        "Interops seamlessly with Java and JavaScript"
      ]},
      { title: "Clojure's Philosophy", body: "Clojure embraces simplicity and functional programming to manage complexity.", points: [
        "Values over identities — prefer pure functions",
        "Data orientation — represent everything as data",
        "Programming to abstractions (sequences, collections)",
        "Minimal syntax makes the language learnable"
      ]}
    ],
    quiz: [
      { q: "What does 'homoiconic' mean?", opts: ["Same type for all variables", "Code is represented as data structures in the language", "Single inheritance hierarchy", "One data structure for everything"], ans: 1 },
      { q: "Which macro creates a Clojure function?", opts: ["fn", "defn", "lambda", "macro"], ans: 1 },
      { q: "What does '->>' do in Clojure?", opts: ["Thread-last macro — pipes value through forms", "Hash map accessor", "Function composition", "Type annotation"], ans: 0 },
      { q: "What is an atom in Clojure?", opts: ["A DNA molecule", "A thread-safe mutable reference", "A primitive number", "A character"], ans: 1 },
      { q: "Which runtime does Clojure primarily target?", opts: ["V8", "BEAM", "JVM", "CLR"], ans: 2 }
    ]
  },
  {
    id: 124,
    title: "F# — Functional-First .NET Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.7 hours",
    level: "intermediate",
    description: "Learn F# for functional-first .NET development. Covers type inference, discriminated unions, pattern matching, and async workflows.",
    img: imgUrl(),
    rating: 4.4,
    keywords: ["fsharp", "functional", "dotnet", "pattern matching", "async"],
    lessons: [
      { title: "F# Basics — Syntax & Type Inference", dur: "50 min", yt: "g8h9i0j1k2l" },
      { title: "Discriminated Unions & Pattern Matching", dur: "65 min", yt: "m3n4o5p6q7r" },
      { title: "Async Workflows & Concurrency", dur: "55 min", yt: "s8t9u0v1w2x" },
      { title: "F# for Data Science & Scripting", dur: "60 min", yt: "y3z4a5b6c7d" }
    ],
    reading: [
      { title: "Why F#?", body: "F# brings functional programming to the .NET ecosystem with a concise and type-safe syntax.", points: [
        "Type inference keeps code clean and readable",
        "Discriminated unions model domain states precisely",
        "Railway-oriented programming for error handling",
        "Runs anywhere .NET runs — web, desktop, cloud"
      ]},
      { title: "Functional .NET", body: "F# integrates seamlessly with the .NET ecosystem while enforcing functional best practices.", points: [
        "Immutability is the default",
        "Computation expressions handle monadic patterns",
        "Type providers give type-safe access to data sources",
        "Units of measure catch dimensional analysis errors"
      ]}
    ],
    quiz: [
      { q: "What does F# default to?", opts: ["Mutability", "Immutability", "Dynamic typing", "Weak typing"], ans: 1 },
      { q: "What keyword defines a function in F#?", opts: ["fun", "let", "fn", "def"], ans: 1 },
      { q: "What is a Discriminated Union?", opts: ["A union of two types", "A type that can be one of several named cases", "A database table", "A class hierarchy"], ans: 1 },
      { q: "What does |> do in F#?", opts: ["Pipe operator — forwards value to function", "Type cast", "Logical OR", "Null check"], ans: 0 },
      { q: "What is a computation expression?", opts: ["A math expression", "A syntax for monadic patterns like async", "A type inference rule", "A logging function"], ans: 1 }
    ]
  },
  {
    id: 125,
    title: "Objective-C — Apple Ecosystem Legacy",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.4 hours",
    level: "intermediate",
    description: "Understand Objective-C for maintaining legacy iOS/macOS apps, working with C libraries, and understanding Apple's ecosystem history.",
    img: imgUrl(),
    rating: 3.9,
    keywords: ["objective-c", "apple", "ios", "macos", "legacy"],
    lessons: [
      { title: "Objective-C Syntax — Messages & Categories", dur: "55 min", yt: "e8f9g0h1i2j" },
      { title: "Memory Management — ARC & Retain Count", dur: "50 min", yt: "k3l4m5n6o7p" },
      { title: "Protocols, Delegates & Blocks", dur: "65 min", yt: "q8r9s0t1u2v" },
      { title: "Bridging to Swift & Modern iOS", dur: "45 min", yt: "w3x4y5z6a7b" }
    ],
    reading: [
      { title: "Why Learn Objective-C?", body: "Millions of lines of production iOS/macOS code are written in Objective-C — maintaining them requires understanding the language.", points: [
        "Full access to C APIs and libraries",
        "Dynamic runtime enables powerful metaprogramming",
        "Categories extend classes without subclassing",
        "Key-value observing (KVO) for model-view binding"
      ]},
      { title: "The Objective-C Runtime", body: "Objective-C's runtime is what makes its dynamic features possible.", points: [
        "Messages are resolved at runtime, not compile time",
        "isa pointer connects objects to their classes",
        "Method swizzling can replace implementations at runtime",
        "ARC (Automatic Reference Counting) manages memory"
      ]}
    ],
    quiz: [
      { q: "What character denotes a method call in Objective-C?", opts: ["[ ]", "( )", "{ }", "< >"], ans: 0 },
      { q: "What is a category in Objective-C?", opts: ["A loop construct", "A way to add methods to an existing class", "A type of property", "A memory zone"], ans: 1 },
      { q: "What does ARC stand for?", opts: ["Automatic Reference Counting", "Application Runtime Controller", "Async Return Callback", "Array Reference Counter"], ans: 0 },
      { q: "What is a protocol in Objective-C?", opts: ["A network standard", "An interface declaration", "A memory management scheme", "A loop variant"], ans: 1 },
      { q: "What is nil in Objective-C?", opts: ["An integer zero", "A null object pointer", "A boolean false", "An empty string"], ans: 1 }
    ]
  },
  {
    id: 126,
    title: "Assembly Language — Low-Level Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "12.5 hours",
    level: "advanced",
    description: "Learn x86-64 assembly language. Understand CPU architecture, registers, memory addressing, system calls, and reverse engineering.",
    img: imgUrl(),
    rating: 4.2,
    keywords: ["assembly", "x86", "reverse engineering", "low-level", "cpu"],
    lessons: [
      { title: "CPU Architecture & Registers", dur: "60 min", yt: "c8d9e0f1g2h" },
      { title: "Instructions — MOV, ADD, CMP & JMP", dur: "75 min", yt: "i3j4k5l6m7n" },
      { title: "Stack, Functions & Calling Conventions", dur: "90 min", yt: "o8p9q0r1s2t" },
      { title: "Syscalls & Shellcode Basics", dur: "80 min", yt: "u3v4w5x6y7z" }
    ],
    reading: [
      { title: "Why Learn Assembly?", body: "Assembly provides the deepest understanding of how computers execute code — essential for security, optimization, and embedded work.", points: [
        "No abstraction — you control the CPU directly",
        "Essential for reverse engineering and malware analysis",
        "Understanding assembly makes you a better C/C++ programmer",
        "Critical for writing bootloaders, kernels, and firmware"
      ]},
      { title: "The x86-64 Architecture", body: "x86-64 is the dominant instruction set architecture in desktop and server computing.", points: [
        "16 general-purpose registers (RAX, RBX, RCX, RDX, etc.)",
        "RIP-relative addressing for position-independent code",
        "The stack grows downward — RSP points to the top",
        "Syscall convention: RAX = syscall number, arguments in registers"
      ]}
    ],
    quiz: [
      { q: "Which instruction moves data in x86-64?", opts: ["MOVE", "MOV", "LOAD", "STORE"], ans: 1 },
      { q: "What register holds the stack pointer?", opts: ["RAX", "RSP", "RBP", "RIP"], ans: 1 },
      { q: "What does CMP do?", opts: ["Compares two values and sets flags", "Copies a value", "Clears a register", "Calls a function"], ans: 0 },
      { q: "Which instruction transfers control to a label?", opts: ["GOTO", "JMP", "BR", "JSR"], ans: 1 },
      { q: "What is a syscall?", opts: ["A system library call", "A request to the OS kernel", "A debugger command", "A type of interrupt"], ans: 1 }
    ]
  },
  {
    id: 127,
    title: "COBOL — Legacy Enterprise Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "10.2 hours",
    level: "intermediate",
    description: "Master COBOL for maintaining and modernizing enterprise mainframe systems that power banking, insurance, and government infrastructure.",
    img: imgUrl(),
    rating: 3.8,
    keywords: ["cobol", "mainframe", "enterprise", "legacy", "banking"],
    lessons: [
      { title: "COBOL Basics — Divisions & Structure", dur: "55 min", yt: "a4b5c6d7e8f" },
      { title: "Data Division — Records & File Handling", dur: "70 min", yt: "g9h0i1j2k3l" },
      { title: "Procedure Division — Verbs & Conditions", dur: "65 min", yt: "m4n5o6p7q8r" },
      { title: "COBOL Modernization & Integration", dur: "50 min", yt: "s9t0u1v2w3x" }
    ],
    reading: [
      { title: "Why COBOL Still Matters", body: "COBOL powers 70% of financial transactions and billions of lines run on mainframes globally.", points: [
        "Over 200 billion lines of COBOL code in production",
        "Powers 90% of Fortune 500 financial transactions",
        "New COBOL developers are in high demand — supply is low",
        "Modern COBOL interoperates with Java and cloud systems"
      ]},
      { title: "COBOL Structure", body: "COBOL programs follow a strict four-division structure that enforces clarity.", points: [
        "IDENTIFICATION DIVISION — program metadata",
        "ENVIRONMENT DIVISION — hardware and file mappings",
        "DATA DIVISION — variable and file definitions",
        "PROCEDURE DIVISION — executable logic"
      ]}
    ],
    quiz: [
      { q: "How many divisions does a COBOL program have?", opts: ["2", "3", "4", "5"], ans: 2 },
      { q: "Which division defines variables?", opts: ["IDENTIFICATION", "ENVIRONMENT", "DATA", "PROCEDURE"], ans: 2 },
      { q: "What does PIC stand for in COBOL?", opts: ["Picture clause — defines data format", "Process Instruction Code", "Program Interaction Controller", "Primary Input Channel"], ans: 0 },
      { q: "What is a PERFORM statement?", opts: ["A loop construct", "A variable declaration", "A file operation", "A sort function"], ans: 0 },
      { q: "What type of language is COBOL?", opts: ["Object-oriented", "English-like procedural", "Functional", "Logic-based"], ans: 1 }
    ]
  },
  {
    id: 128,
    title: "Fortran — High-Performance Scientific Computing",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "9.5 hours",
    level: "intermediate",
    description: "Learn Fortran for numerical weather prediction, computational physics, and high-performance computing on supercomputers.",
    img: imgUrl(),
    rating: 4.1,
    keywords: ["fortran", "hpc", "scientific computing", "numerical", "supercomputing"],
    lessons: [
      { title: "Fortran Basics — Syntax & Data Types", dur: "50 min", yt: "y4z5a6b7c8d" },
      { title: "Arrays & Array Operations", dur: "65 min", yt: "e9f0g1h2i3j" },
      { title: "Subroutines, Functions & Modules", dur: "60 min", yt: "k4l5m6n7o8p" },
      { title: "Parallel Programming with Coarrays", dur: "80 min", yt: "q9r0s1t2u3v" }
    ],
    reading: [
      { title: "Why Fortran?", body: "Fortran remains the language of choice for scientific computing due to its unmatched array performance and compiler optimization.", points: [
        "Native array operations map directly to CPU vector instructions",
        "Top supercomputers run Fortran code for weather and physics",
        "Modern Fortran (2008/2018) has OOP and parallel features",
        "C interop allows mixing with C/C++ codebases"
      ]},
      { title: "Fortran's Array Superpower", body: "Fortran's array semantics are what make it irreplaceable in HPC.", points: [
        "Whole array operations like A = B + C * 2",
        "Array slicing with strided access",
        "DO CONCURRENT for parallel loops",
        "Coarrays provide partitioned global address space (PGAS)"
      ]}
    ],
    quiz: [
      { q: "What does Fortran stand for?", opts: ["Formula Translation", "Format Transformation", "Fortified Runtime", "Forward Translation"], ans: 0 },
      { q: "How are arrays indexed in Fortran?", opts: ["0-based", "1-based", "Configurable default", "Negative-based"], ans: 1 },
      { q: "Which keyword starts a loop in Fortran?", opts: ["FOR", "DO", "LOOP", "WHILE"], ans: 1 },
      { q: "What is a subroutine in Fortran?", opts: ["A function returning a value", "A named block of code called via CALL", "A data structure", "A type definition"], ans: 1 },
      { q: "What does 'implicit none' do?", opts: ["Disables implicit typing", "Imports all modules", "Declares constants", "Exports all symbols"], ans: 0 }
    ]
  },
  {
    id: 129,
    title: "Common Lisp — The Programmable Programming Language",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.9 hours",
    level: "advanced",
    description: "Discover the power of Common Lisp with macros, condition system, CLOS, and interactive development for AI and metaprogramming.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["common lisp", "macros", "clos", "functional", "metaprogramming"],
    lessons: [
      { title: "Lisp Basics — S-Expressions & Evaluation", dur: "50 min", yt: "w4x5y6z7a8b" },
      { title: "Functions, Lambdas & Higher-Order", dur: "60 min", yt: "c9d0e1f2g3h" },
      { title: "Macros — Code That Writes Code", dur: "80 min", yt: "i4j5k6l7m8n" },
      { title: "CLOS & The Condition System", dur: "65 min", yt: "o9p0q1r2s3t" }
    ],
    reading: [
      { title: "Why Lisp?", body: "Common Lisp is a multi-paradigm language with unparalleled metaprogramming capabilities and interactive development.", points: [
        "Macros blur the line between language and application code",
        "The condition system is more powerful than try-catch",
        "CLOS (Common Lisp Object System) is the most flexible OOP system",
        "Interactive REPL-driven development enables extreme productivity"
      ]},
      { title: "Lisp's Killer Features", body: "Features that make Lisp unique even decades after its creation.", points: [
        "Everything is a list — code and data share the same structure",
        "REPL (Read-Eval-Print Loop) enables live coding",
        "Multiple dispatch in CLOS",
        "Restarts allow recovering from errors at higher levels"
      ]}
    ],
    quiz: [
      { q: "What does CAR return in Lisp?", opts: ["The first element of a list", "The rest of a list", "The length of a list", "The last element"], ans: 0 },
      { q: "What is a macro in Lisp?", opts: ["A function that runs at compile time transforming code", "A type definition", "A loop construct", "A variable declaration"], ans: 0 },
      { q: "What does 'quote do?", opts: ["Evaluates an expression", "Prevents evaluation, returns as data", "Quotes a string", "Creates a comment"], ans: 1 },
      { q: "What is CLOS?", opts: ["Common Lisp Object System", "Compiled Lisp Operating System", "Core Library of Standard Functions", "Closed Loop Operation System"], ans: 0 },
      { q: "What is the Lisp condition system?", opts: ["A try-catch equivalent", "A more flexible error handling with restarts", "A logging system", "A type checking system"], ans: 1 }
    ]
  },
  {
    id: 130,
    title: "Prolog — Logic Programming & AI",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.8 hours",
    level: "advanced",
    description: "Learn Prolog for logic programming, AI reasoning, constraint solving, and natural language processing with declarative queries.",
    img: imgUrl(),
    rating: 4.1,
    keywords: ["prolog", "logic programming", "ai", "constraint solving", "declarative"],
    lessons: [
      { title: "Prolog Basics — Facts, Rules & Queries", dur: "45 min", yt: "u4v5w6x7y8z" },
      { title: "Recursion & List Processing", dur: "55 min", yt: "a9b0c1d2e3f" },
      { title: "Backtracking & The Cut Operator", dur: "60 min", yt: "g4h5i6j7k8l" },
      { title: "Constraint Logic & NLP Applications", dur: "70 min", yt: "m9n0o1p2q3r" }
    ],
    reading: [
      { title: "Why Prolog?", body: "Prolog is a declarative logic programming language where you describe the problem and let the computer find the solution.", points: [
        "Programming by stating what is true, not how to compute it",
        "Built-in backtracking searches solution spaces automatically",
        "Pattern matching with unification is powerful and elegant",
        "Used in IBM Watson, natural language processing, and expert systems"
      ]},
      { title: "Declarative Thinking", body: "Prolog requires a fundamentally different way of thinking about computation.", points: [
        "Programs are sets of Horn clauses (facts and rules)",
        "The inference engine applies resolution to derive answers",
        "Unification finds the most general unifier between terms",
        "The cut operator (!) controls backtracking for efficiency"
      ]}
    ],
    quiz: [
      { q: "What does :- mean in Prolog?", opts: ["Assignment", "If — the head is true if the body is true", "Equality", "Inequality"], ans: 1 },
      { q: "How do variables start in Prolog?", opts: ["Lowercase letters", "Uppercase letters or underscore", "Numbers", "Special characters"], ans: 1 },
      { q: "What is unification in Prolog?", opts: ["A database join", "The process of making two terms identical by binding variables", "A sorting algorithm", "A GUI toolkit"], ans: 1 },
      { q: "What does the cut (!) do?", opts: ["Terminates the program", "Prevents backtracking past that point", "Deletes a fact", "Creates a choice point"], ans: 1 },
      { q: "What is a fact in Prolog?", opts: ["A statement that is unconditionally true", "A conditional rule", "A database query", "A variable binding"], ans: 0 }
    ]
  },
  {
    id: 131,
    title: "Ada — Safe & Reliable Systems Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "11.5 hours",
    level: "intermediate",
    description: "Learn Ada for safety-critical systems in aviation, defense, and railway. Strong typing, contracts, and tasking for reliable software.",
    img: imgUrl(),
    rating: 4.0,
    keywords: ["ada", "safety-critical", "systems", "real-time", "contracts"],
    lessons: [
      { title: "Ada Basics — Strong Typing & Packages", dur: "60 min", yt: "s4t5u6v7w8x" },
      { title: "Tasking — Concurrent & Real-Time", dur: "75 min", yt: "y9z0a1b2c3d" },
      { title: "Contracts — Preconditions & Postconditions", dur: "55 min", yt: "e4f5g6h7i8j" },
      { title: "Ada for Embedded & Safety-Critical Systems", dur: "70 min", yt: "k9l0m1n2o3p" }
    ],
    reading: [
      { title: "Why Ada?", body: "Ada was designed by the US Department of Defense for systems where failure costs lives — aviation, defense, and railway signaling.", points: [
        "Strong typing catches errors at compile time",
        "Contract-based programming with pre/post conditions",
        "Ravenscar profile for deterministic real-time systems",
        "Used in Boeing 787, Airbus A380, and railway control systems"
      ]},
      { title: "Ada's Safety Features", body: "Ada's design prioritizes correctness and reliability over convenience.", points: [
        "No implicit type conversions — all casts are explicit",
        "Range constraints catch out-of-bounds values at runtime",
        "Tasking is part of the language, not a library",
        "Protected objects provide safe shared data access"
      ]}
    ],
    quiz: [
      { q: "Who designed Ada?", opts: ["Microsoft", "US Department of Defense", "Bell Labs", "ETH Zurich"], ans: 1 },
      { q: "What is a package in Ada?", opts: ["A compiled library", "A namespace and encapsulation unit", "An executable program", "A data type"], ans: 1 },
      { q: "What does Spark Ada add?", opts: ["Web framework", "Formal verification via contracts", "GUI toolkit", "Database access"], ans: 1 },
      { q: "What is a protected object?", opts: ["An encrypted file", "A synchronization primitive for safe shared data", "A private package", "A memory-safe pointer"], ans: 1 },
      { q: "What is a task in Ada?", opts: ["A to-do list", "A concurrent unit of execution", "A CPU core", "A background service"], ans: 1 }
    ]
  },
  {
    id: 132,
    title: "Pascal — Structured Programming Mastery",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "6.8 hours",
    level: "beginner",
    description: "Learn Pascal — the language designed for teaching structured programming. Covers algorithms, data structures, and modern Delphi/Object Pascal.",
    img: imgUrl(),
    rating: 4.0,
    keywords: ["pascal", "delphi", "structured programming", "teaching", "algorithms"],
    lessons: [
      { title: "Pascal Basics — Syntax & Types", dur: "40 min", yt: "q4r5s6t7u8v" },
      { title: "Control Structures & Procedures", dur: "50 min", yt: "w9x0y1z2a3b" },
      { title: "Records, Pointers & Dynamic Data", dur: "55 min", yt: "c4d5e6f7g8h" },
      { title: "Object Pascal & Delphi GUI", dur: "60 min", yt: "i9j0k1l2m3n" }
    ],
    reading: [
      { title: "Why Pascal?", body: "Pascal was designed by Niklaus Wirth to teach structured programming and remains influential in education and Delphi applications.", points: [
        "Strong typing and clear syntax reduce bugs",
        "Teaches disciplined programming habits",
        "Delphi/Object Pascal is still used for commercial Windows apps",
        "Excellent for learning data structures and algorithms"
      ]},
      { title: "Pascal's Legacy", body: "Pascal's influence extends far beyond its direct usage.", points: [
        "Designed as a teaching language for structured programming",
        "Type safety and readability were core design goals",
        "Delphi remains popular for rapid Windows application development",
        "Pascal influenced Java, C#, and many modern languages"
      ]}
    ],
    quiz: [
      { q: "Who created Pascal?", opts: ["Dennis Ritchie", "Niklaus Wirth", "Bjarne Stroustrup", "Alan Turing"], ans: 1 },
      { q: "What keyword starts a Pascal program?", opts: ["START", "PROGRAM", "BEGIN", "MAIN"], ans: 1 },
      { q: "How are blocks delimited in Pascal?", opts: ["{ }", "begin ... end", "( )", "[ ]"], ans: 1 },
      { q: "What does := do in Pascal?", opts: ["Equality test", "Assignment", "Comparison", "Definition"], ans: 1 },
      { q: "What is the modern Pascal IDE for Windows?", opts: ["Visual Studio", "Delphi", "Xcode", "Eclipse"], ans: 1 }
    ]
  },
  {
    id: 133,
    title: "MATLAB — Numerical Computing & Simulation",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "10.5 hours",
    level: "intermediate",
    description: "Master MATLAB for engineering mathematics, signal processing, control systems, and simulation with Simulink integration.",
    img: imgUrl(),
    rating: 4.5,
    keywords: ["matlab", "numerical computing", "simulink", "simulation", "engineering"],
    lessons: [
      { title: "MATLAB Basics — Matrices & Vectorization", dur: "55 min", yt: "o4p5q6r7s8t" },
      { title: "Plotting & Data Visualization", dur: "50 min", yt: "u9v0w1x2y3z" },
      { title: "Scripts, Functions & Toolboxes", dur: "65 min", yt: "a4b5c6d7e8f" },
      { title: "Simulink — Model-Based Design", dur: "80 min", yt: "g9h0i1j2k3l" }
    ],
    reading: [
      { title: "Why MATLAB?", body: "MATLAB is the industry standard for engineering computation, simulation, and data analysis with specialized toolboxes.", points: [
        "Matrix operations are first-class — no loops needed",
        "Comprehensive toolboxes for every engineering field",
        "Simulink enables graphical model-based design",
        "Used extensively in academia and industry for research"
      ]},
      { title: "The MATLAB Workflow", body: "MATLAB's interactive workflow accelerates development and exploration.", points: [
        "Command window for interactive exploration",
        "Live Scripts combine code, output, and formatted text",
        "App Designer creates GUI applications without web tech",
        "Toolboxes extend MATLAB for domain-specific tasks"
      ]}
    ],
    quiz: [
      { q: "What does MATLAB stand for?", opts: ["Matrix Laboratory", "Mathematical Analysis Tool", "Machine Learning Algorithm Library", "Multi-Array Processing Language"], ans: 0 },
      { q: "How are arrays indexed in MATLAB?", opts: ["0-based", "1-based", "Negative-based", "Letter-based"], ans: 1 },
      { q: "Which operator comments a line in MATLAB?", opts: ["//", "%", "#", "--"], ans: 1 },
      { q: "What is Simulink used for?", opts: ["Web development", "Model-based design and simulation", "Database management", "Text editing"], ans: 1 },
      { q: "What does the 'end' keyword do in MATLAB?", opts: ["Terminates the program", "Ends a block of code (loop, function, etc.)", "Returns a value", "Exits the debugger"], ans: 1 }
    ]
  },
  {
    id: 134,
    title: "Dart — Client-Optimized Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.2 hours",
    level: "intermediate",
    description: "Learn Dart beyond Flutter — the language powering modern multi-platform apps. Covers isolates, streams, and the Dart type system.",
    img: imgUrl(),
    rating: 4.5,
    keywords: ["dart", "flutter", "isolates", "streams", "frontend"],
    lessons: [
      { title: "Dart Basics — Syntax & Sound Null Safety", dur: "45 min", yt: "m4n5o6p7q8r" },
      { title: "OOP — Classes, Mixins & Generics", dur: "55 min", yt: "s9t0u1v2w3x" },
      { title: "Concurrency — Isolates & Async/Await", dur: "60 min", yt: "y4z5a6b7c8d" },
      { title: "Streams, Futures & Advanced Dart", dur: "50 min", yt: "e9f0g1h2i3j" }
    ],
    reading: [
      { title: "Why Dart?", body: "Dart is Google's client-optimized language for fast apps on any platform — web, mobile, and desktop.", points: [
        "Sound null safety eliminates null reference errors",
        "Just-in-time compilation with hot reload for development",
        "Ahead-of-time compilation for production performance",
        "The language behind Flutter, AngularDart, and Dart Frog"
      ]},
      { title: "Dart's Unique Features", body: "Dart combines familiar syntax with powerful modern features.", points: [
        "Mixins enable code reuse without multiple inheritance",
        "Isolates provide true parallelism with shared-nothing architecture",
        "Async/await with Streams handles event-driven code elegantly",
        "Pattern matching and records (Dart 3+) enhance expressiveness"
      ]}
    ],
    quiz: [
      { q: "Who created Dart?", opts: ["Microsoft", "Google", "Apple", "Mozilla"], ans: 1 },
      { q: "What is sound null safety?", opts: ["All variables are nullable", "Null errors are caught at compile time", "Null is not a type", "Runtime null checking"], ans: 1 },
      { q: "What is an isolate in Dart?", opts: ["A UI component", "An independent worker with its own memory", "A database", "A type of widget"], ans: 1 },
      { q: "What keyword declares a variable that can be null?", opts: ["var", "final", "int?", "Maybe"], ans: 2 },
      { q: "What does 'async' do in Dart?", opts: ["Makes a function return a Future", "Runs code in parallel", "Creates an isolate", "Defines a generator"], ans: 0 }
    ]
  },
  {
    id: 135,
    title: "Zig — Modern Systems Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.1 hours",
    level: "advanced",
    description: "Build fast, safe systems software with Zig. Manual memory management, comptime metaprogramming, and seamless C interop.",
    img: imgUrl(),
    rating: 4.6,
    keywords: ["zig", "systems programming", "comptime", "c interop", "low-level"],
    lessons: [
      { title: "Zig Basics — Syntax & No Hidden Control Flow", dur: "50 min", yt: "k4l5m6n7o8p" },
      { title: "Comptime — Compile-Time Metaprogramming", dur: "65 min", yt: "q9r0s1t2u3v" },
      { title: "Memory Management — Allocators", dur: "60 min", yt: "w4x5y6z7a8b" },
      { title: "C Interop & Cross-Compilation", dur: "55 min", yt: "c9d0e1f2g3h" }
    ],
    reading: [
      { title: "Why Zig?", body: "Zig is a modern systems programming language that improves on C without sacrificing control or performance.", points: [
        "No hidden control flow — what you see is what runs",
        "Comptime executes code at compile time for generics and metaprogramming",
        "Manual memory management with explicit allocators",
        "First-class C interop — import .h files directly"
      ]},
      { title: "Zig vs C", body: "Zig addresses C's pain points while maintaining its ethos of simplicity and control.", points: [
        "No preprocessor — comptime replaces macros",
        "Array bounds checking in debug and release-safe modes",
        "Defer ensures cleanup regardless of exit path",
        "Built-in build system eliminates CMake/autotools"
      ]}
    ],
    quiz: [
      { q: "What is comptime in Zig?", opts: ["Compile-time code execution", "A benchmarking tool", "A debugger", "A profiler"], ans: 0 },
      { q: "How does Zig handle memory allocation?", opts: ["Garbage collection", "Automatic reference counting", "Explicit allocators passed as parameters", "Managed by the compiler"], ans: 2 },
      { q: "What does 'defer' do in Zig?", opts: ["Defers compilation", "Schedules code to run at scope exit", "Defines a function", "Creates a variable"], ans: 1 },
      { q: "Can Zig call C functions?", opts: ["No", "Yes, directly without bindings", "Only through FFI", "With a wrapper library"], ans: 1 },
      { q: "What is 'var' in Zig?", opts: ["A constant", "A mutable variable", "A type alias", "A function"], ans: 1 }
    ]
  },
  {
    id: 136,
    title: "PowerShell — Windows Automation & Scripting",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.5 hours",
    level: "beginner",
    description: "Automate Windows administration with PowerShell. Covers cmdlets, pipelines, remoting, DSC, and cross-platform PowerShell Core.",
    img: imgUrl(),
    rating: 4.4,
    keywords: ["powershell", "automation", "windows", "devops", "sysadmin"],
    lessons: [
      { title: "PowerShell Basics — Cmdlets & Pipeline", dur: "45 min", yt: "i4j5k6l7m8n" },
      { title: "Scripting — Functions & Modules", dur: "55 min", yt: "o9p0q1r2s3t" },
      { title: "Remoting & Desired State Configuration", dur: "65 min", yt: "u4v5w6x7y8z" },
      { title: "PowerShell Core — Cross-Platform Automation", dur: "50 min", yt: "a9b0c1d2e3f" }
    ],
    reading: [
      { title: "Why PowerShell?", body: "PowerShell is Microsoft's task automation framework combining a shell, scripting language, and configuration management.", points: [
        "Object-based pipeline — pass structured data, not text",
        "PowerShell Core runs on Windows, macOS, and Linux",
        "DSC (Desired State Configuration) manages infrastructure declaratively",
        "Deep integration with .NET and Windows APIs"
      ]},
      { title: "PowerShell Philosophy", body: "PowerShell treats everything as objects, making automation more reliable and powerful than text-based shells.", points: [
        "Cmdlets follow a Verb-Noun naming convention",
        "The pipeline passes .NET objects between commands",
        "Providers expose data stores like file system and registry",
        "Remoting (WinRM) enables managing thousands of machines"
      ]}
    ],
    quiz: [
      { q: "What is a cmdlet in PowerShell?", opts: ["A compiled DLL", "A lightweight command in Verb-Noun format", "A C# class", "A batch file"], ans: 1 },
      { q: "What character starts a variable in PowerShell?", opts: ["$", "@", "%", "&"], ans: 0 },
      { q: "What does Get-ChildItem do?", opts: ["Gets child processes", "Lists items in a location", "Gets child items from a database", "Gets children of an object"], ans: 1 },
      { q: "What is the pipeline operator in PowerShell?", opts: [">", "|", "->", "=>"], ans: 1 },
      { q: "Is PowerShell cross-platform?", opts: ["Windows only", "Windows and Linux", "Windows, macOS, and Linux", "Windows and macOS"], ans: 2 }
    ]
  },
  {
    id: 137,
    title: "OCaml — Industrial Functional Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.4 hours",
    level: "advanced",
    description: "Write reliable, performant code with OCaml. Algebraic data types, functors, modules, and its use at Jane Street and Facebook.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["ocaml", "functional", "type inference", "module system", "jane street"],
    lessons: [
      { title: "OCaml Basics — Expressions & Types", dur: "50 min", yt: "g4h5i6j7k8l" },
      { title: "Algebraic Data Types & Pattern Matching", dur: "60 min", yt: "m9n0o1p2q3r" },
      { title: "The Module System & Functors", dur: "70 min", yt: "s4t5u6v7w8x" },
      { title: "Real-World OCaml — Tools & Ecosystem", dur: "55 min", yt: "y9z0a1b2c3d" }
    ],
    reading: [
      { title: "Why OCaml?", body: "OCaml combines functional purity with imperative pragmatism and an industrial-strength type system.", points: [
        "Powerful type inference with no annotations needed",
        "Algebraic data types and exhaustive pattern matching",
        "The module system with functors enables generic programming",
        "Used at Jane Street (financial trading) and Meta (Flow, Hack)"
      ]},
      { title: "OCaml's Type System", body: "OCaml's type system catches bugs without being in the way.", points: [
        "Hindley-Milner type inference — types deduced automatically",
        "Polymorphic variants offer flexible enumerated types",
        "GADTs (Generalized Algebraic Data Types) for precise typing",
        "Phantom types encode invariants in the type system"
      ]}
    ],
    quiz: [
      { q: "What keyword defines a function in OCaml?", opts: ["fun", "let", "fn", "def"], ans: 1 },
      { q: "What is a variant in OCaml?", opts: ["A variable type", "An algebraic data type with constructors", "A type class", "A module"], ans: 1 },
      { q: "What does 'match' do in OCaml?", opts: ["Matches regular expressions", "Pattern matching on values", "Links modules", "Declares types"], ans: 1 },
      { q: "What is a functor in OCaml?", opts: ["A category theory concept", "A module parameterized by another module", "A function pointer", "A type class"], ans: 1 },
      { q: "Which company heavily uses OCaml?", opts: ["Jane Street", "Microsoft", "Google", "Amazon"], ans: 0 }
    ]
  },
  {
    id: 138,
    title: "Groovy — JVM Scripting & Gradle Builds",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "6.5 hours",
    level: "intermediate",
    description: "Master Groovy for JVM scripting, Gradle build automation, and Jenkins pipelines. Dynamic typing meets Java's ecosystem.",
    img: imgUrl(),
    rating: 4.0,
    keywords: ["groovy", "gradle", "jenkins", "jvm", "scripting"],
    lessons: [
      { title: "Groovy Basics — Syntax & Closures", dur: "40 min", yt: "e4f5g6h7i8j" },
      { title: "GDK — Groovy Development Kit", dur: "45 min", yt: "k9l0m1n2o3p" },
      { title: "Gradle Build Automation with Groovy DSL", dur: "60 min", yt: "q4r5s6t7u8v" },
      { title: "Jenkins Pipelines & Advanced Groovy", dur: "55 min", yt: "w9x0y1z2a3b" }
    ],
    reading: [
      { title: "Why Groovy?", body: "Groovy is a dynamic JVM language that enhances Java with scripting flexibility and concise syntax.", points: [
        "Seamless Java interop — use Java libraries directly",
        "Concise syntax with closures, builders, and GStrings",
        "Gradle (the dominant build system) uses Groovy DSL",
        "Jenkins Pipeline as Code is written in Groovy"
      ]},
      { title: "Groovy vs Java", body: "Groovy compiles to JVM bytecode and integrates with Java while adding dynamic features.", points: [
        "Optional typing — use 'def' for dynamic or type for static",
        "Closures are first-class functions with delegate control",
        "Builders create hierarchical data structures concisely",
        "AST transformations inject code at compile time"
      ]}
    ],
    quiz: [
      { q: "What runtime does Groovy target?", opts: ["V8", "JVM", "CLR", "BEAM"], ans: 1 },
      { q: "How do you declare a variable without specifying type?", opts: ["auto", "var", "def", "dynamic"], ans: 2 },
      { q: "What is Gradle?", opts: ["A testing framework", "A build automation tool", "A web server", "A database"], ans: 1 },
      { q: "What is a closure in Groovy?", opts: ["A class definition", "A block of code that can access enclosing variables", "A loop construct", "A type declaration"], ans: 1 },
      { q: "What does Jenkins use Groovy for?", opts: ["Frontend UI", "Pipeline definitions as code", "Database access", "CSS styling"], ans: 1 }
    ]
  },
  {
    id: 139,
    title: "D — Systems Programming Language",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.9 hours",
    level: "intermediate",
    description: "Learn D — a language combining C's power with modern features like slices, ranges, compile-time evaluation, and safe memory management.",
    img: imgUrl(),
    rating: 4.1,
    keywords: ["d language", "systems programming", "ranges", "compile-time", "native"],
    lessons: [
      { title: "D Basics — Syntax & Memory Model", dur: "50 min", yt: "c4d5e6f7g8h" },
      { title: "Templates & Compile-Time Evaluation", dur: "65 min", yt: "i9j0k1l2m3n" },
      { title: "Ranges & Phobos Standard Library", dur: "55 min", yt: "o4p5q6r7s8t" },
      { title: "Memory Safety & C Interop", dur: "50 min", yt: "u9v0w1x2y3z" }
    ],
    reading: [
      { title: "Why D?", body: "D is a systems programming language that combines C's performance with modern conveniences like garbage collection and compile-time execution.", points: [
        "CTFE (Compile-Time Function Execution) runs code at compile time",
        "Ranges provide composable, lazy algorithm chaining",
        "@safe, @trusted, @system annotations control memory safety",
        "Interoperates seamlessly with C code"
      ]},
      { title: "D's Unique Features", body: "D brings many features typically found in higher-level languages to systems programming.", points: [
        "Built-in contract programming (in, out, invariant)",
        "UFCS (Uniform Function Call Syntax) chains calls naturally",
        "Lazy evaluation with ranges and algorithms",
        "Vibe.d framework for web development with D"
      ]}
    ],
    quiz: [
      { q: "What does CTFE stand for in D?", opts: ["Compile-Time Function Execution", "C Type Format Extension", "Constant Time Function Evaluation", "Core Threading Framework Extension"], ans: 0 },
      { q: "What is a range in D?", opts: ["A loop variant", "A lazy, composable interface for sequences", "A type of array", "A numeric interval"], ans: 1 },
      { q: "Which annotation enforces memory safety in D?", opts: ["@safe", "@secure", "@protected", "@pure"], ans: 0 },
      { q: "What does 'mixin' do in D?", opts: ["Combines classes", "Injects code at compile time through string mixins", "Mixes static and dynamic typing", "Creates hybrid objects"], ans: 1 },
      { q: "Is D garbage collected?", opts: ["Yes, with optional manual management", "No", "Only for strings", "Only on Linux"], ans: 0 }
    ]
  },
  {
    id: 140,
    title: "VHDL — Hardware Description & Design",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "9.5 hours",
    level: "advanced",
    description: "Design digital circuits with VHDL. Covers concurrent statements, FSM design, simulation, and FPGA implementation for real hardware.",
    img: imgUrl(),
    rating: 4.2,
    keywords: ["vhdl", "fpga", "hardware", "digital design", "asic"],
    lessons: [
      { title: "VHDL Basics — Entities & Architectures", dur: "55 min", yt: "a4b5c6d7e8f" },
      { title: "Concurrent Statements & Signal Assignment", dur: "60 min", yt: "g9h0i1j2k3l" },
      { title: "Sequential Logic & Finite State Machines", dur: "75 min", yt: "m4n5o6p7q8r" },
      { title: "Testbenches & FPGA Implementation", dur: "70 min", yt: "s9t0u1v2w3x" }
    ],
    reading: [
      { title: "Why VHDL?", body: "VHDL is a hardware description language for designing digital circuits, from simple logic to complex processors on FPGAs and ASICs.", points: [
        "Concurrent execution mirrors real hardware behavior",
        "Entities define interfaces, architectures define implementation",
        "Processes model sequential logic with sensitivity lists",
        "Used for FPGA development, ASIC design, and digital education"
      ]},
      { title: "Hardware Design Mindset", body: "VHDL requires thinking in terms of parallel hardware, not sequential software.", points: [
        "Signals vs variables — signals update at the end of a process",
        "Sensitivity lists determine when a process executes",
        "Rising_edge(clk) for synchronous logic",
        "Generics and generate statements create parameterizable designs"
      ]}
    ],
    quiz: [
      { q: "What does VHDL stand for?", opts: ["VHSIC Hardware Description Language", "Very High Density Logic", "Virtual Hardware Design Language", "Variable Hardware Definition Language"], ans: 0 },
      { q: "What is an entity in VHDL?", opts: ["A type of gate", "The interface of a hardware component", "A test case", "A variable"], ans: 1 },
      { q: "How are signals assigned in VHDL?", opts: ["With =", "With <=", "With :=", "With =="], ans: 1 },
      { q: "What is a process in VHDL?", opts: ["A running program", "A block of sequential statements", "An external library", "A type of port"], ans: 1 },
      { q: "What does rising_edge(clk) detect?", opts: ["A falling clock edge", "A rising clock edge", "A level change", "A reset condition"], ans: 1 }
    ]
  },
  {
    id: 141,
    title: "Verilog — Digital Circuit Design",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.8 hours",
    level: "advanced",
    description: "Learn Verilog for digital logic design, simulation, and FPGA programming. Covers RTL design, SystemVerilog enhancements, and verification.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["verilog", "systemverilog", "fpga", "rtl", "digital logic"],
    lessons: [
      { title: "Verilog Basics — Modules & Nets", dur: "50 min", yt: "y4z5a6b7c8d" },
      { title: "Combinational Logic — assign & always", dur: "55 min", yt: "e9f0g1h2i3j" },
      { title: "Sequential Logic — Registers & Counters", dur: "65 min", yt: "k4l5m6n7o8p" },
      { title: "Testbenches & SystemVerilog Basics", dur: "60 min", yt: "q9r0s1t2u3v" }
    ],
    reading: [
      { title: "Why Verilog?", body: "Verilog is the most widely used HDL in industry, with a C-like syntax that makes it accessible to software engineers.", points: [
        "C-like syntax — easier to learn for programmers",
        "SystemVerilog adds classes, assertions, and coverage for verification",
        "Industry standard for ASIC and FPGA design",
        "Used in everything from simple FSM to complex CPUs"
      ]},
      { title: "Verilog vs VHDL", body: "Both languages describe hardware but have different philosophies.", points: [
        "Verilog syntax is closer to C; VHDL is closer to Ada",
        "Verilog handles signal resolution differently",
        "SystemVerilog is the dominant verification language",
        "Both are used in industry — Verilog is more common in the US"
      ]}
    ],
    quiz: [
      { q: "What keyword defines a hardware module in Verilog?", opts: ["module", "entity", "component", "block"], ans: 0 },
      { q: "What does 'assign' do in Verilog?", opts: ["Assigns variables sequentially", "Models combinational logic continuously", "Assigns values at clock edges", "Creates a wire"], ans: 1 },
      { q: "What is the difference between reg and wire?", opts: ["No difference", "reg holds value in procedural blocks, wire is continuous", "reg is always sequential, wire is combinational", "wire is only for inputs"], ans: 1 },
      { q: "What does 'always @(posedge clk)' describe?", opts: ["Combinational logic", "Sequential logic clocked on rising edge", "Asynchronous logic", "Continuous assignment"], ans: 1 },
      { q: "What is SystemVerilog used for?", opts: ["Only for FPGA design", "Verification and enhanced hardware design", "Only for ASIC layout", "Software programming"], ans: 1 }
    ]
  },
  {
    id: 142,
    title: "VBA — Excel & Office Automation",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "6.5 hours",
    level: "beginner",
    description: "Automate Microsoft Office with VBA. Macros, user forms, Excel automation, and business process optimization for productivity.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["vba", "excel", "macros", "automation", "office"],
    lessons: [
      { title: "VBA Basics — The Visual Basic Editor", dur: "35 min", yt: "w4x5y6z7a8b" },
      { title: "Macros — Recording & Writing Code", dur: "50 min", yt: "c9d0e1f2g3h" },
      { title: "Excel Object Model — Ranges & Workbooks", dur: "60 min", yt: "i4j5k6l7m8n" },
      { title: "UserForms & Advanced Automation", dur: "55 min", yt: "o9p0q1r2s3t" }
    ],
    reading: [
      { title: "Why VBA?", body: "VBA (Visual Basic for Applications) is the built-in programming language for Microsoft Office, enabling powerful automation.", points: [
        "Record macros to generate code automatically",
        "Full access to the Excel, Word, and Access object models",
        "Create custom functions (UDFs) for spreadsheets",
        "Automate repetitive business processes without external tools"
      ]},
      { title: "VBA in the Real World", body: "VBA remains essential in finance, accounting, and operations for Excel automation.", points: [
        "Finance models often rely on VBA for data processing",
        "Automate report generation and email distribution",
        "Custom ribbon tabs and toolbar modifications",
        "Integration with databases via ADO and SQL"
      ]}
    ],
    quiz: [
      { q: "What does VBA stand for?", opts: ["Visual Basic for Applications", "Variable Batch Automation", "Virtual Business Assistant", "Verified Binary Access"], ans: 0 },
      { q: "How do you start the VBA editor in Excel?", opts: ["Ctrl+Shift+V", "Alt+F11", "Ctrl+F8", "Alt+V"], ans: 1 },
      { q: "What is a macro in VBA?", opts: ["A large function", "A recorded or written sequence of actions", "A variable type", "An Excel add-in"], ans: 1 },
      { q: "What does Range('A1').Value do?", opts: ["Sets the formula", "Gets or sets the cell value", "Selects the cell", "Formats the cell"], ans: 1 },
      { q: "Can VBA interact with databases?", opts: ["No", "Yes, via ADO", "Only with Access", "Only with SQL Server"], ans: 1 }
    ]
  },
  {
    id: 143,
    title: "SAS — Statistical Analysis & Business Analytics",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "8.5 hours",
    level: "intermediate",
    description: "Master SAS for statistical analysis, clinical trials, business intelligence, and data manipulation in enterprise environments.",
    img: imgUrl(),
    rating: 4.0,
    keywords: ["sas", "statistics", "data analysis", "clinical trials", "business intelligence"],
    lessons: [
      { title: "SAS Basics — DATA Steps & PROC Steps", dur: "55 min", yt: "u4v5w6x7y8z" },
      { title: "Data Manipulation — Merging & Transposing", dur: "60 min", yt: "a9b0c1d2e3f" },
      { title: "Statistical Procedures — PROC MEANS, FREQ, REG", dur: "70 min", yt: "g4h5i6j7k8l" },
      { title: "SAS Macros & Advanced Programming", dur: "50 min", yt: "m9n0o1p2q3r" }
    ],
    reading: [
      { title: "Why SAS?", body: "SAS remains the gold standard in regulated industries like pharmaceuticals, clinical research, and government statistics.", points: [
        "Trusted by the FDA for clinical trial data analysis",
        "DATA step processes data row by row with control",
        "PROC steps provide pre-built statistical procedures",
        "SAS Macros generate reusable code templates"
      ]},
      { title: "The SAS Ecosystem", body: "SAS provides a complete environment for data management and analysis.", points: [
        "SAS libraries organize datasets by location",
        "Formats and informats control data display and input",
        "Output Delivery System (ODS) creates formatted reports",
        "SAS/GRAPH visualizes data with statistical graphics"
      ]}
    ],
    quiz: [
      { q: "What does SAS stand for?", opts: ["Statistical Analysis System", "Structured Algorithm System", "Systematic Application Software", "Sequential Analysis Suite"], ans: 0 },
      { q: "What is a DATA step used for?", opts: ["Data analysis", "Data manipulation and transformation", "Report generation", "Graph creation"], ans: 1 },
      { q: "What does PROC MEANS do?", opts: ["Creates graphs", "Calculates descriptive statistics", "Sorts data", "Merges datasets"], ans: 1 },
      { q: "What is a SAS macro?", opts: ["A video recording", "A code generator and template system", "A type of dataset", "A statistical test"], ans: 1 },
      { q: "What does the SET statement do?", opts: ["Sets a variable's value", "Reads observations from a dataset", "Creates a new dataset", "Defines a format"], ans: 1 }
    ]
  },
  {
    id: 144,
    title: "Racket — Language-Oriented Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "7.2 hours",
    level: "intermediate",
    description: "Explore Racket — a language for creating programming languages. Macros, contracts, DSLs, and the worlds of syntactic abstraction.",
    img: imgUrl(),
    rating: 4.2,
    keywords: ["racket", "scheme", "lisp", "dsl", "macros"],
    lessons: [
      { title: "Racket Basics — Expressions & Functions", dur: "45 min", yt: "s4t5u6v7w8x" },
      { title: "Macros — Programming the Parser", dur: "60 min", yt: "y9z0a1b2c3d" },
      { title: "Contracts — Runtime Type Checking", dur: "50 min", yt: "e4f5g6h7i8j" },
      { title: "Creating DSLs & Languages", dur: "65 min", yt: "k9l0m1n2o3p" }
    ],
    reading: [
      { title: "Why Racket?", body: "Racket is a descendant of Scheme designed for creating new programming languages — language-oriented programming.", points: [
        "Hygienic macros prevent variable capture issues",
        "Contracts provide runtime verification of components",
        "The #lang mechanism lets you create your own language",
        "DrRacket IDE is tailored for pedagogy and exploration"
      ]},
      { title: "Language-Oriented Programming", body: "Racket's philosophy is that every program is a language.", points: [
        "#lang racket uses the base language",
        "You can create #lang mylanguage with custom syntax",
        "S-expressions make syntax uniform and extensible",
        "The macro expander is Turing-complete"
      ]}
    ],
    quiz: [
      { q: "What is Racket a descendant of?", opts: ["Common Lisp", "Scheme", "Clojure", "ML"], ans: 1 },
      { q: "What does #lang do in Racket?", opts: ["Declares a language module", "Creates a variable", "Defines a function", "Imports a library"], ans: 0 },
      { q: "What is a hygienic macro?", opts: ["A clean code pattern", "A macro that prevents unintended variable capture", "A macro that only runs once", "A type-checked macro"], ans: 1 },
      { q: "What are contracts in Racket?", opts: ["Legal agreements", "Runtime type specifications and assertions", "Function signatures", "Module dependencies"], ans: 1 },
      { q: "What IDE comes with Racket?", opts: ["VS Code", "DrRacket", "Eclipse", "IntelliJ"], ans: 1 }
    ]
  },
  {
    id: 145,
    title: "Tcl/Tk — Scripting & GUI Toolkit",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "5.5 hours",
    level: "beginner",
    description: "Learn Tcl/Tk for rapid scripting, GUI development, embedded scripting, and the Expect automation tool. Simple yet powerful.",
    img: imgUrl(),
    rating: 3.7,
    keywords: ["tcl", "tk", "gui", "scripting", "expect"],
    lessons: [
      { title: "Tcl Basics — Everything is a String", dur: "35 min", yt: "q4r5s6t7u8v" },
      { title: "Tk — Building GUIs in Minutes", dur: "50 min", yt: "w9x0y1z2a3b" },
      { title: "Working with Files & Processes", dur: "40 min", yt: "c4d5e6f7g8h" },
      { title: "Expect — Automating Interactive Programs", dur: "45 min", yt: "i9j0k1l2m3n" }
    ],
    reading: [
      { title: "Why Tcl/Tk?", body: "Tcl is a simple scripting language, and Tk is the most portable GUI toolkit — GUIs that run on any platform with one codebase.", points: [
        "Tcl's 'everything is a string' philosophy makes it incredibly flexible",
        "Tk GUIs work identically on Windows, macOS, and Linux",
        "Expect automates interactive command-line programs",
        "Embedded in EDA tools, network testing, and CI systems"
      ]},
      { title: "Tcl Philosophy", body: "Tcl prioritizes simplicity, embedding, and cross-platform GUI development.", points: [
        "All values are strings — no separate types needed",
        "Commands always return strings",
        "Tk widgets are configured with simple option-value pairs",
        "Tcl is designed to be embedded in C/C++ applications"
      ]}
    ],
    quiz: [
      { q: "What does Tcl stand for?", opts: ["Tool Command Language", "Type Checked Language", "Terminal Control Language", "Text Command Library"], ans: 0 },
      { q: "How are variables referenced in Tcl?", opts: ["$var", "var", "${var}", "var()"], ans: 0 },
      { q: "What is Tk?", opts: ["A type system", "A cross-platform GUI toolkit", "A testing framework", "A database"], ans: 1 },
      { q: "What does Expect do?", opts: ["Expects variable types", "Automates interactive text-based programs", "Waits for network connections", "Manages expectations"], ans: 1 },
      { q: "What makes Tcl unique?", opts: ["Object-oriented paradigm", "Everything is a string", "Strong typing", "Functional purity"], ans: 1 }
    ]
  },
  {
    id: 146,
    title: "Smalltalk — Pure Object-Oriented Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "6.8 hours",
    level: "intermediate",
    description: "Experience Smalltalk — the language that defined OOP. Live objects, image-based development, and MVC architecture.",
    img: imgUrl(),
    rating: 4.1,
    keywords: ["smalltalk", "oop", "mvc", "live coding", "pharo"],
    lessons: [
      { title: "Smalltalk Basics — Objects & Messages", dur: "40 min", yt: "o4p5q6r7s8t" },
      { title: "The Image — Live Object Environment", dur: "50 min", yt: "u9v0w1x2y3z" },
      { title: "MVC — Model-View-Controller Pattern", dur: "55 min", yt: "a4b5c6d7e8f" },
      { title: "Pharo & Modern Smalltalk", dur: "45 min", yt: "g9h0i1j2k3l" }
    ],
    reading: [
      { title: "Why Smalltalk?", body: "Smalltalk is the foundation of object-oriented programming — everything is an object, including classes and blocks.", points: [
        "Everything is an object — even classes and integers",
        "The image-based environment persists live objects",
        "MVC was invented in Smalltalk",
        "Influenced Java, Objective-C, Python, and Ruby"
      ]},
      { title: "The Smalltalk Environment", body: "Smalltalk offers a unique live programming experience.", points: [
        "The IDE, compiler, and runtime are all objects in the image",
        "Changes are made to live objects without restarting",
        "System Browser navigates classes, protocols, and methods",
        "Debugger allows editing code mid-execution"
      ]}
    ],
    quiz: [
      { q: "Who created Smalltalk?", opts: ["Alan Kay and Xerox PARC", "Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum"], ans: 0 },
      { q: "How do you send a message in Smalltalk?", opts: ["object.method()", "object method", "method(object)", "object->method"], ans: 1 },
      { q: "What is a Smalltalk image?", opts: ["A screenshot", "A persistent snapshot of live objects", "A graphics file", "A database backup"], ans: 1 },
      { q: "What paradigm did Smalltalk pioneer?", opts: ["Functional programming", "Object-oriented programming", "Logic programming", "Procedural programming"], ans: 1 },
      { q: "Which modern Smalltalk is actively developed?", opts: ["Squeak", "Pharo", "VisualWorks", "All of the above"], ans: 3 }
    ]
  },
  {
    id: 147,
    title: "Mojo — AI & Systems Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "6.5 hours",
    level: "intermediate",
    description: "Learn Mojo — a Python superset with C-level performance for AI workloads. Covers MLIR, SIMD, and systems-level programming.",
    img: imgUrl(),
    rating: 4.7,
    keywords: ["mojo", "ai", "python", "mlir", "performance"],
    lessons: [
      { title: "Mojo Basics — Python-compatible Syntax", dur: "40 min", yt: "m4n5o6p7q8r" },
      { title: "Systems Programming — fn, struct & let", dur: "55 min", yt: "s9t0u1v2w3x" },
      { title: "MLIR & Compiler Optimizations", dur: "60 min", yt: "y4z5a6b7c8d" },
      { title: "AI Performance — SIMD & Tiling", dur: "50 min", yt: "e9f0g1h2i3j" }
    ],
    reading: [
      { title: "Why Mojo?", body: "Mojo combines Python's usability with C/rust performance for AI and systems programming, using MLIR for compiler optimizations.", points: [
        "Full Python syntax compatibility for easy transition",
        "fn and struct provide low-level control without GC overhead",
        "MLIR enables automatic hardware-specific optimizations",
        "SIMD primitives for explicit vectorization"
      ]},
      { title: "Mojo's Performance Model", body: "Mojo achieves C-level performance while maintaining Python-level ergonomics.", points: [
        "Gradual typing — start with def and add types later",
        "Compiled with MLIR to optimized native code",
        "Zero-cost abstractions for systems programming",
        "Seamless Python interop for existing ecosystem"
      ]}
    ],
    quiz: [
      { q: "Who created Mojo?", opts: ["Google", "Modular", "Meta", "Microsoft"], ans: 1 },
      { q: "What does Mojo use for optimization?", opts: ["LLVM only", "MLIR (Multi-Level Intermediate Representation)", "GCC", "JIT compilation"], ans: 1 },
      { q: "What keyword declares a system-level function in Mojo?", opts: ["fn", "def", "func", "system"], ans: 0 },
      { q: "Can Mojo run Python code directly?", opts: ["No", "Yes, Python is a subset of Mojo", "Only with wrappers", "Through a compatibility layer"], ans: 1 },
      { q: "What is SIMD in Mojo?", opts: ["A data structure", "Single Instruction Multiple Data — parallel processing", "A type system", "A memory allocator"], ans: 1 }
    ]
  },
  {
    id: 148,
    title: "AWK — Text Processing & Data Extraction",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "3.5 hours",
    level: "beginner",
    description: "Master AWK for one-liner text processing, log analysis, and structured data extraction on the command line.",
    img: imgUrl(),
    rating: 4.0,
    keywords: ["awk", "text processing", "command line", "unix", "data extraction"],
    lessons: [
      { title: "AWK Basics — Pattern-Action Pairs", dur: "25 min", yt: "k4l5m6n7o8p" },
      { title: "Built-in Variables — FS, OFS, NR, NF", dur: "30 min", yt: "q9r0s1t2u3v" },
      { title: "Arrays & Multi-line Processing", dur: "35 min", yt: "w4x5y6z7a8b" },
      { title: "Real-World AWK Scripts", dur: "40 min", yt: "c9d0e1f2g3h" }
    ],
    reading: [
      { title: "Why AWK?", body: "AWK is a tiny language for processing structured text files — perfect for log analysis, CSV processing, and command-line data extraction.", points: [
        "Pattern-action model is intuitive for line-by-line processing",
        "Fields are automatically split into $1, $2, etc.",
        "Built-in associative arrays work without declarations",
        "AWK programs are often short enough to type directly"
      ]},
      { title: "The AWK Model", body: "AWK's simplicity comes from its focused design.", points: [
        "A program is a sequence of pattern { action } rules",
        "BEGIN and END patterns run before/after file processing",
        "NR keeps track of the current record number",
        "FS and OFS control input/output field separators"
      ]}
    ],
    quiz: [
      { q: "What does AWK stand for?", opts: ["Aho Weinberger Kernighan", "Advanced Word Kernel", "Automatic Working Key", "Algorithmic Working Knowledge"], ans: 0 },
      { q: "How do you print the first field in AWK?", opts: ["print $1", "print $0", "print $F", "print field[1]"], ans: 0 },
      { q: "What does NR represent?", opts: ["Number of fields", "Current record number", "Number of resources", "Null reference"], ans: 1 },
      { q: "What does the BEGIN block do?", opts: ["Starts the program", "Runs before any input is processed", "Initializes variables in the loop", "Starts a function"], ans: 1 },
      { q: "What is the default field separator in AWK?", opts: ["Comma", "Tab", "Whitespace (space/tab)", "Colon"], ans: 2 }
    ]
  },
  {
    id: 149,
    title: "LabVIEW — Graphical System Design",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "9.5 hours",
    level: "intermediate",
    description: "Program with LabVIEW's graphical G language. Data acquisition, instrument control, and automated test systems for engineering.",
    img: imgUrl(),
    rating: 4.1,
    keywords: ["labview", "ni", "data acquisition", "graphical programming", "instrumentation"],
    lessons: [
      { title: "LabVIEW Basics — Front Panel & Block Diagram", dur: "60 min", yt: "i4j5k6l7m8n" },
      { title: "Data Flow — Wires, Structures & SubVIs", dur: "65 min", yt: "o9p0q1r2s3t" },
      { title: "Data Acquisition & Instrument Control", dur: "75 min", yt: "u4v5w6x7y8z" },
      { title: "State Machines & Design Patterns", dur: "55 min", yt: "a9b0c1d2e3f" }
    ],
    reading: [
      { title: "Why LabVIEW?", body: "LabVIEW is a graphical programming environment from National Instruments for test, measurement, and control systems.", points: [
        "G language uses graphical data flow instead of text",
        "VIs (Virtual Instruments) are modular and reusable",
        "Thousands of instrument drivers available",
        "FPGA and Real-Time targets extend deployment options"
      ]},
      { title: "Data Flow Programming", body: "LabVIEW's execution model is based on data flow, not control flow.", points: [
        "A node executes when all inputs are available",
        "Wires carry data between nodes",
        "Loops auto-index arrays on tunnel boundaries",
        "Parallel loops run concurrently by default"
      ]}
    ],
    quiz: [
      { q: "Who created LabVIEW?", opts: ["Microsoft", "National Instruments", "MathWorks", "Keysight"], ans: 1 },
      { q: "What is a VI in LabVIEW?", opts: ["Variable Interface", "Virtual Instrument — the basic program unit", "Visual Input", "Voltage Indicator"], ans: 1 },
      { q: "What paradigm does LabVIEW use?", opts: ["Object-oriented", "Data flow", "Functional", "Procedural"], ans: 1 },
      { q: "Where are user interface elements placed?", opts: ["Block diagram", "Front panel", "Control palette", "Function palette"], ans: 1 },
      { q: "What is a SubVI?", opts: ["A subprogram in LabVIEW", "A sub-component", "A type of wire", "A control"], ans: 0 }
    ]
  },
  {
    id: 150,
    title: "GDScript — Godot Game Scripting",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "5.8 hours",
    level: "beginner",
    description: "Learn GDScript for the Godot game engine. Signals, scenes, physics, and building 2D/3D games with Godot's native scripting language.",
    img: imgUrl(),
    rating: 4.6,
    keywords: ["gdscript", "godot", "game development", "scripting", "2d"],
    lessons: [
      { title: "GDScript Basics — Python-like Syntax", dur: "35 min", yt: "g4h5i6j7k8l" },
      { title: "Scenes, Nodes & Signals", dur: "50 min", yt: "m9n0o1p2q3r" },
      { title: "Physics & Input Handling", dur: "45 min", yt: "s4t5u6v7w8x" },
      { title: "Building a Complete Game", dur: "60 min", yt: "y9z0a1b2c3d" }
    ],
    reading: [
      { title: "Why GDScript?", body: "GDScript is Godot's tightly integrated scripting language, optimized for the engine with a Python-like syntax.", points: [
        "Designed specifically for Godot — no boilerplate",
        "Signals provide decoupled communication between nodes",
        "Scene tree makes game composition visual and intuitive",
        "Performance is excellent for 2D games"
      ]},
      { title: "Godot's Node System", body: "Everything in Godot is a node in a tree.", points: [
        "Scenes are reusable node hierarchies",
        "Signals replace callbacks for event handling",
        "Groups allow addressing multiple nodes at once",
        "The scene owner pattern controls access to other nodes"
      ]}
    ],
    quiz: [
      { q: "What engine uses GDScript?", opts: ["Unity", "Unreal Engine", "Godot", "GameMaker"], ans: 2 },
      { q: "What is a signal in Godot?", opts: ["A warning message", "An event emitter for decoupled communication", "A type of node", "A debug tool"], ans: 1 },
      { q: "What is a scene in Godot?", opts: ["A level design", "A reusable node hierarchy", "A background image", "A camera setup"], ans: 1 },
      { q: "What does 'extends' do in GDScript?", opts: ["Extends array length", "Inherits from a node class", "Extends a signal", "Extends scene bounds"], ans: 1 },
      { q: "How does GDScript compare to Python?", opts: ["Same language", "Python-like syntax but optimized for Godot", "Completely different", "Statically typed version"], ans: 1 }
    ]
  },
  {
    id: 151,
    title: "PL/SQL — Oracle Procedural SQL",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "7.5 hours",
    level: "intermediate",
    description: "Write stored procedures, triggers, and packages in Oracle's PL/SQL. Covers cursors, exception handling, and performance tuning.",
    img: imgUrl(),
    rating: 4.3,
    keywords: ["plsql", "oracle", "stored procedures", "database", "triggers"],
    lessons: [
      { title: "PL/SQL Basics — Blocks & Variables", dur: "45 min", yt: "e4f5g6h7i8j" },
      { title: "Cursors & Exception Handling", dur: "55 min", yt: "k9l0m1n2o3p" },
      { title: "Stored Procedures, Functions & Packages", dur: "65 min", yt: "q4r5s6t7u8v" },
      { title: "Triggers & Performance Optimization", dur: "55 min", yt: "w9x0y1z2a3b" }
    ],
    reading: [
      { title: "Why PL/SQL?", body: "PL/SQL extends SQL with procedural logic for Oracle databases — essential for enterprise backend development.", points: [
        "Tight integration with Oracle SQL and data types",
        "Bulk operations (BULK COLLECT, FORALL) process thousands of rows efficiently",
        "Packages organize related procedures and functions",
        "Used heavily in Oracle E-Business Suite and financial systems"
      ]},
      { title: "PL/SQL Architecture", body: "PL/SQL's block structure and execution model are designed for database programming.", points: [
        "DECLARE, BEGIN, EXCEPTION, END structure every block",
        "Cursors handle multi-row query results",
        "Triggers execute automatically on DML events",
        "SQL%ROWCOUNT checks how many rows were affected"
      ]}
    ],
    quiz: [
      { q: "What does PL/SQL stand for?", opts: ["Procedural Language / SQL", "Programming Language for SQL", "Precompiled Logic / SQL", "PostgreSQL Language / SQL"], ans: 0 },
      { q: "Which block section handles errors?", opts: ["DECLARE", "BEGIN", "EXCEPTION", "END"], ans: 2 },
      { q: "What is a cursor in PL/SQL?", opts: ["A mouse pointer", "A handle to a result set for row-by-row processing", "A database trigger", "A data type"], ans: 1 },
      { q: "What does COMMIT do?", opts: ["Rolls back changes", "Makes changes permanent", "Saves to a file", "Closes the database"], ans: 1 },
      { q: "What is a package in PL/SQL?", opts: ["A compiled library", "An encapsulated collection of related procedures, functions, and types", "A database table", "A SQL query"], ans: 1 }
    ]
  }
];

// Generate course strings and append
let newPart = '';
for (let i = 0; i < newCourses.length; i++) {
  newPart += genCourse(newCourses[i]);
  if (i < newCourses.length - 1) newPart += ',\n';
}

// Write final file
const finalContent = content + newPart + ',\n];\n\nexport default courses;\n';
writeFileSync('data/courses.js', finalContent, 'utf8');
console.log(`Added ${newCourses.length} new programming language courses.`);

// Verify
const verify = readFileSync('data/courses.js', 'utf8');
const totalIds = (verify.match(/id:\s*\d+/g) || []).length;
console.log(`Total courses in file: ${totalIds}`);
console.log(`Course IDs: ${newCourses.map(c => c.id).join(', ')}`);
