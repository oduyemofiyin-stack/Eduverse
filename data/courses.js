const courses = [
  {
    id:1, title:"React for Beginners",     instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"0.9 hours",
    level:"beginner",
    description:"Master React from the ground up. Components, hooks, props, state management — build real apps. Good for beginners.",
    img:"https://picsum.photos/seed/react/600/400",
    rating:4.8, keywords:["react","frontend","nextjs","javascript","hooks","jsx"],
    lessons:[
      {title:"Intro to React & JSX", dur:"2 min", yt:"Tn6-PIqc4UM"},
      {title:"Components, Props & State", dur:"12 min", yt:"1yTYmuXn6NQ"},
      {title:"React Hooks — useState & useEffect", dur:"15 min", yt:"O6P86uwfdR0"},
      {title:"Building a Real Project", dur:"27 min", yt:"hQAHSlTtcmY"},
    ],
    reading:[
      {title:"Why React?", body:"React is a JS library for UIs, made by Meta. Uses virtual DOM to update efficiently. Pretty dope.", points:["Functional Components are the modern standard","JSX lets you write HTML-like syntax in JS","Props flow down from parent to child","State is local to a component unless lifted"]},
      {title:"The Component Model", body:"React apps are trees of components. Each component = function returning JSX.", points:["Break UI into small reusable pieces","Use keys in lists for performance","Avoid deeply nested components","Lift state up when sharing data"]},
    ],
    quiz:[
      {q:"What does JSX stand for?", opts:["JavaScript XML","Java Syntax Extension","JSON XML","JavaScript Extra"], ans:0},
      {q:"Which hook manages state in React?", opts:["useEffect","useContext","useState","useRef"], ans:2},
      {q:"How do you pass data from parent to child?", opts:["Via state","Via props","Via context only","Via refs"], ans:1},
      {q:"What does useEffect do?", opts:["Manages state","Runs side effects after render","Creates components","Handles routing"], ans:1},
      {q:"What is the Virtual DOM?", opts:["A real browser DOM","A lightweight copy React uses to optimize updates","A server-side rendered page","A database"], ans:1},
    ]
  },
  {
    id:2, title:"Python Data Science Bootcamp",     instructor:"Oduye Emmanuel",
    category:"Data Science", duration:"9.7 hours",
    level:"intermediate",
    description:"Python for data analysis and viz. NumPy, Pandas, Matplotlib, basic ML. Real projects included.",
    img:"https://picsum.photos/seed/datascience/600/400",
    rating:4.9, keywords:["python","pandas","numpy","data analysis","machine learning"],
    lessons:[
      {title:"Python Fundamentals & Setup", dur:"374 min", yt:"_uQrJ0TkZlc"},
      {title:"NumPy Arrays & Operations", dur:"58 min", yt:"QUT1VHiLmmI"},
      {title:"Data Wrangling with Pandas", dur:"60 min", yt:"vmEHCJofslg"},
      {title:"Visualization with Matplotlib", dur:"91 min", yt:"3Xc3CA655Y4"},
    ],
    reading:[
      {title:"The Data Science Stack", body:"Python dominates data science due to its readability and powerful libraries.", points:["Always explore data before modelling","Handle missing values before analysis","Vectorized operations beat loops","Visualization reveals hidden patterns"]},
      {title:"Key Concepts", body:"DataFrames are 2D labeled data structures at the heart of Pandas.", points:["df.head() shows first 5 rows","df.describe() gives statistics","df.dropna() removes missing rows","df.groupby() aggregates data"]},
    ],
    quiz:[
      {q:"Which library provides the DataFrame?", opts:["NumPy","Matplotlib","Pandas","Scikit-learn"], ans:2},
      {q:"What does NaN stand for?", opts:["Not a Number","Numeric and Null","None and Nil","New Array Node"], ans:0},
      {q:"Which method shows the first 5 rows?", opts:[".tail()",".head()",".first()",".show()"], ans:1},
      {q:"What is a NumPy array?", opts:["A Python list","A fast multi-dimensional array","A dictionary","A DataFrame"], ans:1},
      {q:"Which library makes static plots?", opts:["Pandas","NumPy","Seaborn","Matplotlib"], ans:3},
    ]
  },
  {
    id:3, title:"UI/UX Design Fundamentals",     instructor:"Oduye Emmanuel",
    category:"Design", duration:"0.8 hours",
    level:"beginner",
    description:"User-centered design principles. Figma, wireframing, prototyping, design systems. Pretty comprehensive for a short course.",
    img:"https://picsum.photos/seed/uidesign/600/400",
    rating:4.7, keywords:["figma","ux","ui","wireframing","prototyping"],
    lessons:[
      {title:"Design Thinking & UX Research", dur:"1 min", yt:"a7sEoEvT8l8"},
      {title:"Wireframing & Prototyping in Figma", dur:"24 min", yt:"FTFaQWZBqQ8"},
      {title:"Typography & Color Theory", dur:"21 min", yt:"ykn4XNDwW7Q"},
      {title:"Building a Design System", dur:"1 min", yt:"Dtd40cHQQlk"},
    ],
    reading:[
      {title:"The UX Design Process", body:"UX design follows a human-centered process: Empathize, Define, Ideate, Prototype, and Test.", points:["Talk to real users early","Prototype before building","Test with 5 users to find 85% of issues","Iterate based on feedback"]},
      {title:"Design Principles", body:"Good design is invisible. Users should accomplish goals without friction.", points:["Visual hierarchy guides the eye","Consistency builds trust","White space is not wasted space","Accessibility is not optional"]},
    ],
    quiz:[
      {q:"What does UX stand for?", opts:["User Experience","Ultra Extreme","User Extension","Unified Exchange"], ans:0},
      {q:"What is a wireframe?", opts:["A final design","A low-fidelity layout sketch","A color palette","A font choice"], ans:1},
      {q:"Which tool is most popular for UI design?", opts:["Photoshop","Sketch","Figma","Canva"], ans:2},
      {q:"What is a design system?", opts:["A color wheel","A collection of reusable components and guidelines","A prototype","A user interview"], ans:1},
      {q:"What does affordance mean in UX?", opts:["A pricing model","A visual cue that hints at how something is used","A type of animation","A user persona"], ans:1},
    ]
  },
  {
    id:4, title:"Flutter Mobile Development",     instructor:"Oduye Emmanuel",
    category:"Mobile Development", duration:"4.5 hours",
    level:"intermediate",
    description:"Build beautiful cross-platform apps using Flutter and Dart for iOS and Android from one codebase.",
    img:"https://picsum.photos/seed/flutter/600/400",
    rating:4.6, keywords:["flutter","dart","mobile","ios","android"],
    lessons:[
      {title:"Flutter & Dart Crash Course", dur:"12 min", yt:"1ukSR1GRtMU"},
      {title:"Widgets & Layouts", dur:"<1 min", yt:"b_sQ9bMltGU"},
      {title:"State Management with Provider", dur:"25 min", yt:"3m7iycuiXCs"},
      {title:"REST API Integration", dur:"235 min", yt:"jbOgULYBxyc"},
    ],
    reading:[
      {title:"Why Flutter?", body:"Flutter is Google's UI toolkit for building natively compiled apps from a single codebase.", points:["One codebase for iOS and Android","Hot reload for fast development","Rich pre-built widgets","Compiles to native code"]},
      {title:"Core Concepts", body:"Everything in Flutter is a widget.", points:["Stateless widgets do not change","Stateful widgets manage dynamic data","BuildContext locates widgets","Keys help Flutter identify widgets"]},
    ],
    quiz:[
      {q:"What language does Flutter use?", opts:["Java","Kotlin","Dart","Swift"], ans:2},
      {q:"Flutter's UI building block?", opts:["Views","Widgets","Components","Modules"], ans:1},
      {q:"Which company created Flutter?", opts:["Meta","Apple","Microsoft","Google"], ans:3},
      {q:"What does hot reload do?", opts:["Restarts the app","Applies code changes instantly","Compiles to native","Runs tests"], ans:1},
      {q:"What is a StatefulWidget?", opts:["Never changes","Rebuilds when state changes","A layout widget","A nav widget"], ans:1},
    ]
  },
  {
    id:5, title:"Machine Learning with TensorFlow",     instructor:"Oduye Emmanuel",
    category:"AI & Machine Learning", duration:"8.7 hours",
    level:"advanced",
    description:"Deep dive into ML algorithms and neural networks with TensorFlow 2.0. Build image classifiers and NLP models.",
    img:"https://picsum.photos/seed/tensorflow/600/400",
    rating:4.9, keywords:["tensorflow","neural networks","deep learning","keras","nlp"],
    lessons:[
      {title:"Machine Learning Fundamentals", dur:"7 min", yt:"ukzFI9rgwfU"},
      {title:"Neural Networks from Scratch", dur:"18 min", yt:"aircAruvnKk"},
      {title:"TensorFlow & Keras Hands-on", dur:"412 min", yt:"tPYj3fFJGjk"},
      {title:"Building an Image Classifier", dur:"85 min", yt:"jztwpsIzEGc"},
    ],
    reading:[
      {title:"What is Machine Learning?", body:"ML is a subset of AI where systems learn patterns from data.", points:["Supervised: learn from labeled examples","Unsupervised: find patterns in unlabeled data","Reinforcement: learn through rewards","Deep learning uses multi-layered networks"]},
      {title:"Deep Learning Concepts", body:"Neural networks are inspired by the human brain.", points:["Input layers receive raw data","Hidden layers extract features","Output layers produce predictions","Backpropagation trains by minimizing error"]},
    ],
    quiz:[
      {q:"What is supervised learning?", opts:["Learning without data","Learning from labeled examples","Learning through rewards","Clustering unlabeled data"], ans:1},
      {q:"Neural network's basic unit?", opts:["Pixel","Neuron / Perceptron","Token","Matrix"], ans:1},
      {q:"What does backpropagation do?", opts:["Builds the network","Feeds data forward","Adjusts weights to reduce error","Adds layers"], ans:2},
      {q:"Most common hidden layer activation?", opts:["Sigmoid","Softmax","ReLU","Tanh"], ans:2},
      {q:"What does CNN stand for?", opts:["Compressed Neural Network","Convolutional Neural Network","Cyclic Node Network","Continuous Number Node"], ans:1},
    ]
  },
  {
    id:6, title:"Digital Marketing Masterclass",     instructor:"Oduye Emmanuel",
    category:"Marketing", duration:"17.6 hours",
    level:"beginner",
    description:"Master SEO, social media, email campaigns, and Google Ads. Build a complete digital marketing strategy from scratch.",
    img:"https://picsum.photos/seed/marketing/600/400",
    rating:4.5, keywords:["seo","social media","google ads","email marketing","analytics"],
    lessons:[
      {title:"Digital Marketing Strategy Overview", dur:"1 min", yt:"Mf6PcbGDiO4"},
      {title:"SEO Fundamentals", dur:"19 min", yt:"DvwS7cV9GmQ"},
      {title:"Social Media Marketing", dur:"714 min", yt:"uRma-bTM-EE"},
      {title:"Email Marketing & Analytics", dur:"319 min", yt:"yn6L7q4V1xg"},
    ],
    reading:[
      {title:"The Digital Marketing Funnel", body:"Customers go through: Awareness to Interest to Consideration to Intent to Purchase to Loyalty.", points:["SEO drives organic awareness","Social media builds community","Email converts and retains","Paid ads accelerate reach"]},
      {title:"SEO Basics", body:"SEO improves your Google visibility organically.", points:["Use keywords naturally in content","Build quality backlinks","Page speed is a ranking factor","Mobile-first indexing is standard"]},
    ],
    quiz:[
      {q:"What does SEO stand for?", opts:["Social Engine Optimization","Search Engine Optimization","Site Engagement Ops","Search Engagement Output"], ans:1},
      {q:"What is a conversion?", opts:["A page view","When a visitor completes a desired action","A social share","An email open"], ans:1},
      {q:"What does CPC stand for?", opts:["Cost Per Click","Content Per Channel","Customer Per Campaign","Click Per Conversion"], ans:0},
      {q:"Which metrics measure email success?", opts:["Bounce rate","Open rate and click-through rate","Page load time","Social shares"], ans:1},
      {q:"What is A/B testing?", opts:["Testing two audiences","Testing two versions to see which performs better","Testing server speed","Testing budgets"], ans:1},
    ]
  },
  {
    id:7, title:"Node.js & Express Backend",     instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"3.2 hours",
    level:"intermediate",
    description:"Build scalable REST APIs with Node.js and Express. Covers authentication, MongoDB, file uploads, and deployment.",
    img:"https://picsum.photos/seed/nodejs/600/400",
    rating:4.8, keywords:["nodejs","express","rest api","mongodb","backend"],
    lessons:[
      {title:"Node.js Fundamentals", dur:"78 min", yt:"TlB_eWDSMt4"},
      {title:"Building REST APIs with Express", dur:"58 min", yt:"pKd0Rpw7O48"},
      {title:"MongoDB & Mongoose", dur:"28 min", yt:"fgTGADljAeg"},
      {title:"Authentication with JWT", dur:"27 min", yt:"mbsmsi7l3r4"},
    ],
    reading:[
      {title:"How Node.js Works", body:"Node.js is a JavaScript runtime built on Chrome's V8 engine.", points:["Single-threaded with event loop","Non-blocking I/O scales efficiently","npm has millions of packages","Express is the most popular web framework"]},
      {title:"REST API Principles", body:"REST is an architectural style for APIs.", points:["GET retrieves data","POST creates resources","PUT/PATCH updates resources","DELETE removes resources"]},
    ],
    quiz:[
      {q:"What is Node.js?", opts:["A frontend framework","A JavaScript runtime for server-side code","A database","A CSS preprocessor"], ans:1},
      {q:"What does REST stand for?", opts:["Remote Execution State Transfer","Representational State Transfer","Reactive Event Stream","Resource Entity State Transfer"], ans:1},
      {q:"Which HTTP method creates a resource?", opts:["GET","PUT","POST","DELETE"], ans:2},
      {q:"What is middleware in Express?", opts:["A database layer","A function that processes requests","A routing file","A template engine"], ans:1},
      {q:"What does JWT stand for?", opts:["Java Web Token","JSON Web Token","JavaScript Web Transfer","Joint Web Technology"], ans:1},
    ]
  },
  {
    id:8, title:"Ethical Hacking & Cybersecurity",     instructor:"Oduye Emmanuel",
    category:"Cybersecurity", duration:"24.6 hours",
    level:"intermediate",
    description:"Learn penetration testing, ethical hacking, network security, and vulnerability assessment.",
    img:"https://picsum.photos/seed/cybersecurity/600/400",
    rating:4.7, keywords:["hacking","penetration testing","kali linux","security","networking"],
    lessons:[
      {title:"Introduction to Cybersecurity", dur:"7 min", yt:"inWWhr5tnEA"},
      {title:"Network Security Fundamentals", dur:"564 min", yt:"qiQR5rTSshw"},
      {title:"Penetration Testing Basics", dur:"891 min", yt:"3Kq1MIfTWCE"},
      {title:"Common Vulnerabilities & Defenses", dur:"15 min", yt:"pL9q2lOZ1Fw"},
    ],
    reading:[
      {title:"The Ethical Hacker Mindset", body:"Ethical hackers find vulnerabilities before attackers do with authorization.", points:["Always get written permission","Document all findings","Think like an attacker","Never exceed agreed scope"]},
      {title:"Types of Attacks", body:"Understanding attack vectors is the first step to defense.", points:["Phishing: fake communications","SQL Injection: malicious DB queries","Man-in-the-Middle: intercepting comms","DDoS: overwhelming servers"]},
    ],
    quiz:[
      {q:"What is ethical hacking?", opts:["Hacking for financial gain","Authorized testing to find vulnerabilities","Hacking social media","Writing malware"], ans:1},
      {q:"What is a firewall?", opts:["A type of virus","A security system that monitors traffic","An encryption tool","A VPN service"], ans:1},
      {q:"What does SQL injection exploit?", opts:["Network vulnerabilities","Unvalidated input in DB queries","Browser weaknesses","Physical access"], ans:1},
      {q:"What is phishing?", opts:["A network scan","A social engineering attack to steal credentials","A type of encryption","A pen-test tool"], ans:1},
      {q:"What does VPN stand for?", opts:["Virtual Private Network","Verified Protocol Node","Variable Port Number","Virtual Public Network"], ans:0},
    ]
  },
  {
    id:9, title:"Advanced TypeScript Patterns",     instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"0.6 hours",
    level:"advanced",
    description:"Go beyond basics with generics, decorators, conditional types, and design patterns in TypeScript.",
    img:"https://picsum.photos/seed/typescript/600/400",
    rating:4.6, keywords:["typescript","generics","decorators","frontend","javascript"],
    lessons:[
      {title:"TypeScript Generics Deep Dive", dur:"10 min", yt:"nePDL5lQSE4"},
      {title:"Advanced Types & Utility Types", dur:"8 min", yt:"4ugy-WuO1eg"},
      {title:"Decorators & Metadata", dur:"9 min", yt:"O6A-u_FoEX8"},
      {title:"Design Patterns in TypeScript", dur:"11 min", yt:"tv-_1er1mWI"},
    ],
    reading:[
      {title:"Why TypeScript?", body:"TypeScript adds static typing to JavaScript catching errors at compile time.", points:["Catch errors before runtime","Better IDE autocomplete","Interfaces define contracts","Strict mode gives highest type safety"]},
      {title:"Key Advanced Concepts", body:"TypeScript's advanced type system expresses complex type relationships.", points:["Generics create reusable type-safe code","Mapped types transform existing types","Conditional types select based on conditions","Template literal types create string patterns"]},
    ],
    quiz:[
      {q:"What does TypeScript add to JavaScript?", opts:["Faster execution","Static type checking","New runtime features","Server-side rendering"], ans:1},
      {q:"What is a generic?", opts:["A base class","A placeholder type filled in later","A default value","A module import"], ans:1},
      {q:"What does ? mean in TypeScript types?", opts:["Required property","Optional property","Null value","Generic type"], ans:1},
      {q:"What is a union type?", opts:["Two merged classes","A type that can be one of several using |","A type intersection","An array type"], ans:1},
      {q:"What does as const do?", opts:["Makes a constant variable","Makes types readonly and literal","Casts to constructor","Defines an enum"], ans:1},
    ]
  },
  {
    id:10, title:"Business Analytics with Excel & Power BI",     instructor:"Oduye Emmanuel",
    category:"Business", duration:"3.7 hours",
    level:"beginner",
    description:"Transform raw data into business insights using Excel and Power BI with pivot tables, DAX, and interactive dashboards.",
    img:"https://picsum.photos/seed/business/600/400",
    rating:4.4, keywords:["excel","power bi","business intelligence","dashboard","kpi"],
    lessons:[
      {title:"Excel for Business Analysis", dur:"146 min", yt:"Vl0H-qTclOg"},
      {title:"Pivot Tables & Power Query", dur:"13 min", yt:"m0wI61ahfLc"},
      {title:"Introduction to Power BI", dur:"1 min", yt:"yKTSLffVGbk"},
      {title:"Building Interactive Dashboards", dur:"63 min", yt:"AGrl-H87pRU"},
    ],
    reading:[
      {title:"Data-Driven Decision Making", body:"Business analytics converts raw data into actionable insights.", points:["Define the business question first","Clean data before visualizing","Context transforms numbers into insights","Dashboards should answer one key question"]},
      {title:"Key KPIs", body:"KPIs are measurable values showing how effectively objectives are met.", points:["Revenue growth rate: business expansion","CAC: cost to acquire a customer","NPS: customer satisfaction","Churn rate: customer retention health"]},
    ],
    quiz:[
      {q:"What is a Pivot Table?", opts:["A type of chart","A tool to summarize data dynamically","A database","A formula"], ans:1},
      {q:"What does KPI stand for?", opts:["Key Performance Indicator","Known Process Index","Key Product Item","Known Performance Input"], ans:0},
      {q:"Power BI is primarily for?", opts:["Writing code","Creating interactive dashboards","Managing databases","Building websites"], ans:1},
      {q:"What does DAX stand for?", opts:["Data Analysis Expressions","Dynamic Array Extension","Database Access Exchange","Data Aggregation X"], ans:0},
      {q:"What is data visualization?", opts:["Storing data","Presenting data graphically to reveal patterns","Writing queries","Encrypting data"], ans:1},
    ]
  },
  {
    id:11, title:"Vue.js 3 – The Complete Guide",     instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"7.2 hours",
    level:"intermediate",
    description:"Learn Vue.js 3 from zero to hero with Composition API, Pinia state management, Vue Router, and real projects.",
    img:"https://picsum.photos/seed/vuejs/600/400",
    rating:4.7, keywords:["vuejs","vue 3","composition api","pinia","frontend"],
    lessons:[
      {title:"Vue 3 Core Concepts", dur:"219 min", yt:"FXpIoQ_rT_c"},
      {title:"Composition API Deep Dive", dur:"23 min", yt:"bwItFdPt-6M"},
      {title:"Vue Router & Navigation", dur:"12 min", yt:"I7pRp1Bwysw"},
      {title:"State Management with Pinia", dur:"176 min", yt:"VeNfHj6MhgA"},
    ],
    reading:[
      {title:"Why Vue.js?", body:"Vue.js is a progressive JavaScript framework known for its gentle learning curve.", points:["Progressive adopt as much as needed","Composition API improves code reuse","Excellent tooling with Vite","Great virtual DOM performance"]},
      {title:"Reactivity in Vue", body:"Vue automatically tracks dependencies and updates the DOM.", points:["ref() makes primitives reactive","reactive() makes objects reactive","computed() creates derived values","watch() reacts to data changes"]},
    ],
    quiz:[
      {q:"What is Vue.js?", opts:["A CSS framework","A progressive JS framework for UIs","A backend framework","A database ORM"], ans:1},
      {q:"What does the Composition API improve?", opts:["Performance","Code organization and reusability","Template syntax","CSS handling"], ans:1},
      {q:"Which makes a primitive reactive in Vue 3?", opts:["reactive()","computed()","ref()","watch()"], ans:2},
      {q:"What is Pinia?", opts:["A UI library","The official Vue state management library","A routing library","A build tool"], ans:1},
      {q:"Which directive is for conditional rendering?", opts:["v-for","v-model","v-bind","v-if"], ans:3},
    ]
  },
  {
    id:12, title:"Data Structures & Algorithms in Python", instructor:"Oduye Emmanuel",
    category:"Data Science", duration:"13.5 hours",
    level:"intermediate",
    description:"Master data structures and algorithms with Python. Cover arrays, trees, graphs, sorting, and dynamic programming.",
    img:"https://picsum.photos/seed/algorithms/600/400",
    rating:4.9, keywords:["algorithms","data structures","python","leetcode","interviews"],
    lessons:[
      {title:"Big O Notation & Complexity", dur:"8 min", yt:"v4cd1O4zkGw"},
      {title:"Arrays, Stacks & Queues", dur:"483 min", yt:"RBSGKlAvoiM"},
      {title:"Trees & Graph Traversal", dur:"9 min", yt:"oSWTXtMglKE"},
      {title:"Dynamic Programming Explained", dur:"310 min", yt:"oBt53YbR9Kk"},
    ],
    reading:[
      {title:"Why Algorithms Matter", body:"Algorithms are step-by-step procedures. Big O notation describes how runtime grows with input size.", points:["O(1) = constant best","O(log n) = logarithmic great","O(n) = linear acceptable","O(n2) = quadratic avoid for large inputs"]},
      {title:"Essential Data Structures", body:"Choosing the right structure is the difference between efficient and inefficient code.", points:["Arrays: O(1) access O(n) search","Hash Maps: O(1) average lookup","Binary Trees: O(log n) balanced search","Graphs: model networks and relationships"]},
    ],
    quiz:[
      {q:"What does O(1) mean?", opts:["Algorithm is slow","Constant time regardless of input size","Uses 1 unit of memory","Has one loop"], ans:1},
      {q:"Which data structure uses LIFO?", opts:["Queue","Array","Stack","Linked List"], ans:2},
      {q:"What is binary search?", opts:["Searching two arrays","O(log n) algorithm on sorted arrays","A recursive tree algorithm","A graph traversal"], ans:1},
      {q:"What is dynamic programming?", opts:["Dynamic typing","Solving problems by caching overlapping subproblems","A design pattern","A data structure"], ans:1},
      {q:"What does BFS stand for?", opts:["Binary File Search","Breadth-First Search","Basic Function Structure","Best-First Sort"], ans:1},
    ]
  },
  {
    id:13, title:"HTML & CSS Masterclass", instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"15.3 hours",
    level:"beginner",
    description:"Build beautiful websites from scratch. Master HTML5, CSS3, Flexbox, CSS Grid, and responsive design principles.",
    img:"https://picsum.photos/seed/htmlcss/600/400",
    rating:4.8, keywords:["html","css","flexbox","grid","responsive"],
    lessons:[
      {title:"HTML5 Semantics & Structure", dur:"122 min", yt:"pQN-pnXPaVg"},
      {title:"CSS Fundamentals & Selectors", dur:"321 min", yt:"a_iQb1lnAEQ"},
      {title:"Flexbox & CSS Grid Layouts", dur:"85 min", yt:"yfoY53QXEnI"},
      {title:"Building a Complete Landing Page", dur:"391 min", yt:"G3e-cpL7ofc"},
    ],
    reading:[
      {title:"HTML Foundations", body:"HTML is the backbone of every web page. It structures content with semantic tags.", points:["<header>, <nav>, <main> give meaning","<section> groups related content","<article> represents standalone content","<img> must always include alt text"]},
      {title:"CSS Layout Mastery", body:"Modern CSS gives us powerful layout tools without hacks.", points:["Flexbox is great for 1D layouts (rows/columns)","Grid excels at 2D layouts","Media queries make designs responsive","CSS custom properties (variables) reduce repetition"]},
    ],
    quiz:[
      {q:"What does HTML stand for?", opts:["HyperText Markup Language","High Tech Modern Language","Hyper Transfer Machine Language","Home Tool Markup Language"], ans:0},
      {q:"Which CSS property creates a flex container?", opts:["display: block","display: flex","position: relative","float: left"], ans:1},
      {q:"What is the correct HTML for a hyperlink?", opts:["<link url='...'>","<a href='...'>","<href>...</href>","<nav>...</nav>"], ans:1},
      {q:"Which makes a layout responsive?", opts:["Fixed pixel widths","Media queries","Tables","Inline styles"], ans:1},
      {q:"What does CSS Grid excel at?", opts:["1D layouts","2D layouts","Typography","Animations"], ans:1},
    ]
  },
  {
    id:14, title:"JavaScript Fundamentals", instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"6.3 hours",
    level:"beginner",
    description:"Learn JavaScript from the ground up. Covers variables, functions, DOM manipulation, ES6+, and async programming.",
    img:"https://picsum.photos/seed/javascript/600/400",
    rating:4.7, keywords:["javascript","es6","dom","async","web"],
    lessons:[
      {title:"JS Basics: Variables & Data Types", dur:"206 min", yt:"PkZNo7MFNFg"},
      {title:"Functions, Scope & Closures", dur:"100 min", yt:"hdI2bqOjy3c"},
      {title:"DOM Manipulation & Events", dur:"39 min", yt:"0ik6X4DJKCc"},
      {title:"Async JavaScript: Promises & Fetch", dur:"30 min", yt:"Oive66jrwBs"},
    ],
    reading:[
      {title:"JavaScript Core Concepts", body:"JavaScript is the language of the web. It powers interactivity on nearly every site.", points:["var, let, const — use const by default","Functions are first-class citizens","Closures remember their lexical scope","The event loop handles async operations"]},
      {title:"Modern ES6+ Features", body:"ES6 brought major improvements to JavaScript.", points:["Arrow functions provide concise syntax","Template literals enable string interpolation","Destructuring extracts values cleanly","Modules organize code into files"]},
    ],
    quiz:[
      {q:"Which keyword declares a constant variable?", opts:["var","let","const","static"], ans:2},
      {q:"What does typeof return for an array?", opts:["array","object","list","undefined"], ans:1},
      {q:"Which method adds an element to the end of an array?", opts:["push()","pop()","shift()","unshift()"], ans:0},
      {q:"What is a Promise?", opts:["A callback function","An object representing eventual completion of an async operation","A synchronous function","A data type"], ans:1},
      {q:"What does the DOM stand for?", opts:["Document Object Model","Data Object Model","Document Oriented Module","Dynamic Object Management"], ans:0},
    ]
  },
  {
    id:15, title:"Java Programming for Beginners", instructor:"Oduye Emmanuel",
    category:"Programming", duration:"20.4 hours",
    level:"beginner",
    description:"Master Java from scratch. Learn OOP, collections, exception handling, multithreading, and build real console applications.",
    img:"https://picsum.photos/seed/java/600/400",
    rating:4.6, keywords:["java","oop","collections","multithreading","programming"],
    lessons:[
      {title:"Java Basics: Syntax & Data Types", dur:"150 min", yt:"eIrMbAQSU34"},
      {title:"Object-Oriented Programming Deep Dive", dur:"572 min", yt:"grEKMHGYyns"},
      {title:"Collections Framework & Generics", dur:"251 min", yt:"GdAon80-0KA"},
      {title:"Exception Handling & File I/O", dur:"251 min", yt:"_nmm0nZqIIY"},
    ],
    reading:[
      {title:"Why Java?", body:"Java is a mature, platform-independent language used everywhere from enterprise to Android.", points:["Write once, run anywhere via JVM","Strongly typed catches errors early","Rich standard library","Massive ecosystem and community"]},
      {title:"OOP In Practice", body:"Object-Oriented Programming is the foundation of Java.", points:["Classes are blueprints, objects are instances","Encapsulation hides internal state","Inheritance promotes code reuse","Polymorphism enables flexible code"]},
    ],
    quiz:[
      {q:"What is the JVM?", opts:["Java Virtual Machine — runs bytecode","Java Visual Manager","Java Version Manager","Java Variable Method"], ans:0},
      {q:"Which keyword creates a new object?", opts:["new","create","object","alloc"], ans:0},
      {q:"What does OOP stand for?", opts:["Object-Oriented Programming","Operation-Oriented Process","Online Object Protocol","Open Output Program"], ans:0},
      {q:"Which collection stores unique elements?", opts:["List","Set","Map","Queue"], ans:1},
      {q:"What is inheritance?", opts:["Copying code","A class deriving from another class","A method overloading","A data structure"], ans:1},
    ]
  },
  {
    id:16, title:"CSS Grid, Flexbox & Modern Layouts", instructor:"Oduye Emmanuel",
    category:"Design", duration:"8.5 hours",
    level:"intermediate",
    description:"Master modern CSS layout techniques. Build complex responsive designs with Flexbox, Grid, and advanced positioning.",
    img:"https://picsum.photos/seed/cssgrid/600/400",
    rating:4.8, keywords:["css grid","flexbox","layout","responsive","design"],
    lessons:[
      {title:"Flexbox Complete Guide", dur:"27 min", yt:"jV8B24rSN5o"},
      {title:"CSS Grid Complete Guide", dur:"85 min", yt:"0xMQfnTU6oo"},
      {title:"Advanced Positioning & Z-Index", dur:"154 min", yt:"TzuWIHGFKCQ"},
      {title:"Building a Responsive Dashboard Layout", dur:"242 min", yt:"HGTJBPNC-Gw"},
    ],
    reading:[
      {title:"Flexbox vs Grid", body:"Flexbox is 1D (row or column). Grid is 2D (rows and columns simultaneously).", points:["Flexbox: content-first, distributes space along one axis","Grid: layout-first, places items in cells","Use Flexbox for navigation bars and centering","Use Grid for page-level layouts and galleries"]},
      {title:"Responsive Design Principles", body:"Responsive design adapts to any screen size.", points:["Start with mobile-first CSS","Use rem/em over px for accessibility","Container queries are the future","Test on real devices"]},
    ],
    quiz:[
      {q:"Which property aligns items on the cross axis in Flexbox?", opts:["justify-content","align-items","gap","flex-wrap"], ans:1},
      {q:"What does grid-template-columns define?", opts:["Number of rows","Column widths and count","Gap size","Item alignment"], ans:1},
      {q:"Which unit is relative to the root font size?", opts:["px","em","rem","vh"], ans:2},
      {q:"What is the mobile-first approach?", opts:["Designing for desktop first","Starting with mobile styles then adding breakpoints","Only building for mobile","Using only mobile frameworks"], ans:1},
      {q:"Which makes an image responsive?", opts:["width: 100%; height: auto;","width: fixed;","max-width: 100%; height: auto;","min-width: 100%"], ans:2},
    ]
  },
  {
    id:17, title:"Git & GitHub Essentials", instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"5 hours",
    level:"beginner",
    description:"Learn version control with Git and collaborate effectively on GitHub. Branching, merging, pull requests, and workflows.",
    img:"https://picsum.photos/seed/git/600/400",
    rating:4.5, keywords:["git","github","version control","branching","collaboration"],
    lessons:[
      {title:"Git Basics: Init, Add, Commit", dur:"68 min", yt:"RGOj5yH7evk"},
      {title:"Branching & Merging Strategies", dur:"81 min", yt:"mAFoROnOfHs"},
      {title:"GitHub: Pull Requests & Collaboration", dur:"68 min", yt:"oFYyTZwMyAg"},
      {title:"Undoing Changes & Git Reset", dur:"81 min", yt:"GytsxgB4-HU"},
    ],
    reading:[
      {title:"Why Version Control?", body:"Git tracks every change to your code, enabling collaboration and history.", points:["Never lose work with commits","Branch to experiment safely","Merge to combine changes","Rebase keeps history linear"]},
      {title:"GitHub Workflows", body:"GitHub is the most popular platform for hosting Git repos.", points:["Fork & PR model for open source","GitHub Actions automates workflows","Code reviews happen on pull requests","Issues track bugs and features"]},
    ],
    quiz:[
      {q:"What does git commit do?", opts:["Deletes changes","Saves a snapshot of changes","Pushes to remote","Creates a branch"], ans:1},
      {q:"What is a branch?", opts:["A copy of the repo","An independent line of development","A commit","A remote"], ans:1},
      {q:"What command uploads changes to GitHub?", opts:["git commit","git push","git pull","git fetch"], ans:1},
      {q:"What does git merge do?", opts:["Deletes a branch","Combines two branches","Creates a new repo","Stashes changes"], ans:1},
      {q:"What is a pull request?", opts:["A request to pull code from a remote","A proposal to merge changes from one branch to another","A git command","A type of merge"], ans:1},
    ]
  },
  {
    id:18, title:"SQL & Database Design", instructor:"Oduye Emmanuel",
    category:"Data Science", duration:"17.3 hours",
    level:"intermediate",
    description:"Master SQL queries and relational database design. Covers joins, subqueries, indexing, normalization, and performance tuning.",
    img:"https://picsum.photos/seed/sql/600/400",
    rating:4.7, keywords:["sql","database","postgresql","queries","data"],
    lessons:[
      {title:"SQL Basics: SELECT, INSERT, UPDATE, DELETE", dur:"260 min", yt:"HXV3zeQKqGY"},
      {title:"Joins & Relationships", dur:"260 min", yt:"7S_tz1z_5bA"},
      {title:"Subqueries & Aggregation", dur:"260 min", yt:"nJIEIzF7tDw"},
      {title:"Normalization & Indexing", dur:"260 min", yt:"26ls5lNiijk"},
    ],
    reading:[
      {title:"Database Fundamentals", body:"A database is an organized collection of data. Relational databases store data in tables.", points:["Each table represents one entity type","Rows are records, columns are fields","Primary keys uniquely identify rows","Foreign keys link tables together"]},
      {title:"Writing Great Queries", body:"Efficient queries make applications fast.", points:["SELECT only columns you need","WHERE filters before joining","JOINs combine related tables","Indexes speed up lookups"]},
    ],
    quiz:[
      {q:"What does SQL stand for?", opts:["Structured Query Language","Simple Query Language","Standard Query Logic","Sequential Query Language"], ans:0},
      {q:"Which clause filters rows?", opts:["SELECT","WHERE","HAVING","ORDER BY"], ans:1},
      {q:"What is a primary key?", opts:["A unique identifier for each row","A foreign key","An index","A table name"], ans:0},
      {q:"Which JOIN returns matching rows from both tables?", opts:["LEFT JOIN","RIGHT JOIN","INNER JOIN","FULL JOIN"], ans:2},
      {q:"What does GROUP BY do?", opts:["Groups identical rows","Orders results","Filters groups","Groups rows sharing a value for aggregation"], ans:3},
    ]
  },
  {
    id:19, title:"Python Programming for Beginners", instructor:"Oduye Emmanuel",
    category:"Programming", duration:"18.2 hours",
    level:"beginner",
    description:"Learn Python from zero. Covers syntax, functions, data structures, file handling, and building CLI applications.",
    img:"https://picsum.photos/seed/python/600/400",
    rating:4.8, keywords:["python","programming","beginner","scripts","automation"],
    lessons:[
      {title:"Python Basics: Variables & Control Flow", dur:"266 min", yt:"rfscVS0vtbw"},
      {title:"Functions & Modules", dur:"280 min", yt:"eWRfhZUzrAc"},
      {title:"Working with Files & Data", dur:"266 min", yt:"Uh2ebFW8OYM"},
      {title:"Building CLI Applications", dur:"280 min", yt:"7TcVbc5R88g"},
    ],
    reading:[
      {title:"Why Python?", body:"Python is the most beginner-friendly language and the most versatile.", points:["Readable syntax feels like pseudocode","Dynamically typed reduces boilerplate","Huge standard library 'batteries included'","Used in web, data science, automation, AI"]},
      {title:"Python Data Structures", body:"Python has powerful built-in data structures.", points:["Lists are ordered, mutable sequences","Tuples are immutable lists","Dictionaries store key-value pairs","Sets store unique elements"]},
    ],
    quiz:[
      {q:"How do you print in Python?", opts:["console.log()","print()","echo","printf"], ans:1},
      {q:"What type is a list?", opts:["Immutable","Mutable","Unchangeable","Constant"], ans:1},
      {q:"Which keyword defines a function?", opts:["func","function","def","define"], ans:2},
      {q:"What does len() return?", opts:["The length of an object","The last element","A random number","The type"], ans:0},
      {q:"What is a dictionary?", opts:["An ordered list","A collection of key-value pairs","A function","A class"], ans:1},
    ]
  },
  {
    id:20, title:"Responsive Web Design Bootcamp", instructor:"Oduye Emmanuel",
    category:"Design", duration:"12.5 hours",
    level:"beginner",
    description:"Build websites that work on every device. Master media queries, fluid layouts, responsive images, and mobile UX patterns.",
    img:"https://picsum.photos/seed/responsive/600/400",
    rating:4.6, keywords:["responsive","mobile","design","media queries","ux"],
    lessons:[
      {title:"Responsive Design Principles & Strategy", dur:"247 min", yt:"kUMe1FH4CHE"},
      {title:"Fluid Layouts & Relative Units", dur:"60 min", yt:"UB1O30fR-EE"},
      {title:"Responsive Images & Media", dur:"122 min", yt:"-X7on-aDkvo"},
      {title:"Mobile UX Patterns & Best Practices", dur:"321 min", yt:"q6qA_609UOE"},
    ],
    reading:[
      {title:"The Responsive Mindset", body:"Responsive design is not just about making things fit — it's about creating great experiences on every device.", points:["Content decides breakpoints, not devices","Touch targets should be at least 44px","Test on real mobile hardware","Performance matters more on mobile"]},
      {title:"Modern Responsive Techniques", body:"New CSS features make responsive design easier than ever.", points:["clamp() creates fluid typography","Container queries respond to element size","min/max-width create flexible constraints","aspect-ratio prevents layout shift"]},
    ],
    quiz:[
      {q:"What is a breakpoint?", opts:["A CSS property","A width where the layout changes","A JavaScript event","A design tool"], ans:1},
      {q:"What does the viewport meta tag do?", opts:["Sets page width to device width","Adds a border","Changes font size","Enables animations"], ans:0},
      {q:"Which is a relative length unit?", opts:["px","pt","em","cm"], ans:2},
      {q:"What is progressive enhancement?", opts:["Building for mobile first then enhancing","Building for desktop only","Using JavaScript only","Adding more features"], ans:0},
      {q:"What is a hamburger menu?", opts:["A food menu","A collapsed navigation icon on mobile","A dropdown","A footer link"], ans:1},
    ]
  },
];

export default courses;