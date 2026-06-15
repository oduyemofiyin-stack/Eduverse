const courses = [
  {
    id:1, title:"React for Beginners",     instructor:"Oduye Emmanuel",
    category:"Web Development", duration:"3 hours",
    level:"beginner",
    description:"Master React from the ground up. Components, hooks, props, state management — build real apps. Good for beginners.",
    img:"https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.8, keywords:["react","frontend","nextjs","javascript","hooks","jsx"],
    preview:"Tn6-PIqc4UM",
    lessons:[
      {title:"Intro to React & JSX", dur:"2 min", yt:"Tn6-PIqc4UM"},
      {title:"Components, Props & State", dur:"12 min", yt:"1yTYmuXn6NQ"},
      {title:"React Hooks — useState & useEffect", dur:"15 min", yt:"O6P86uwfdR0"},
      {title:"Building a Real Project", dur:"27 min", yt:"hQAHSlTtcmY"},
      {title:"React Router & SPA Navigation", dur:"42 min", yt:"nDtp3OkRzCQ"},
      {title:"State Management with Redux Toolkit", dur:"45 min", yt:"9zySezF2iSM"},
      {title:"Building & Deploying a Full React App", dur:"40 min", yt:"w7ejDZ8SWv8"},
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
    img:"https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.9, keywords:["python","pandas","numpy","data analysis","machine learning"],
    preview:"x7X9w_GIm1s",
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
    category:"Design", duration:"3 hours",
    level:"beginner",
    description:"User-centered design principles. Figma, wireframing, prototyping, design systems. Pretty comprehensive for a short course.",
    img:"https://images.pexels.com/photos/7568293/pexels-photo-7568293.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.7, keywords:["figma","ux","ui","wireframing","prototyping"],
    preview:"aD7pcm1TfRo",
    lessons:[
      {title:"Design Thinking & UX Research", dur:"1 min", yt:"a7sEoEvT8l8"},
      {title:"Wireframing & Prototyping in Figma", dur:"24 min", yt:"FTFaQWZBqQ8"},
      {title:"Typography & Color Theory", dur:"21 min", yt:"ykn4XNDwW7Q"},
      {title:"Building a Design System", dur:"1 min", yt:"Dtd40cHQQlk"},
      {title:"User Testing & Usability Analysis", dur:"45 min", yt:"4TjBn89H8oA"},
      {title:"Advanced Figma Components & Auto Layout", dur:"42 min", yt:"jVpE0kPJp_k"},
      {title:"Portfolio & Case Study Presentation", dur:"48 min", yt:"JZzMk71XIHQ"},
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
    img:"https://images.pexels.com/photos/6424585/pexels-photo-6424585.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.6, keywords:["flutter","dart","mobile","ios","android"],
    preview:"lHhRhPV--G0",
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
    img:"https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.9, keywords:["tensorflow","neural networks","deep learning","keras","nlp"],
    preview:"PeMlggyqz0Y",
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
    img:"https://images.pexels.com/photos/15543041/pexels-photo-15543041.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.5, keywords:["seo","social media","google ads","email marketing","analytics"],
    preview:"knHjbAJfKS0",
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
    img:"https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.8, keywords:["nodejs","express","rest api","mongodb","backend"],
    preview:"DHjqpvDnNGE",
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
    img:"https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.7, keywords:["hacking","penetration testing","kali linux","security","networking"],
    preview:"-Gk40UjMYgI",
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
    category:"Web Development", duration:"3 hours",
    level:"advanced",
    description:"Go beyond basics with generics, decorators, conditional types, and design patterns in TypeScript.",
    img:"https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.6, keywords:["typescript","generics","decorators","frontend","javascript"],
    preview:"zQnBQ4tB3ZA",
    lessons:[
      {title:"TypeScript Generics Deep Dive", dur:"10 min", yt:"nePDL5lQSE4"},
      {title:"Advanced Types & Utility Types", dur:"8 min", yt:"4ugy-WuO1eg"},
      {title:"Decorators & Metadata", dur:"9 min", yt:"O6A-u_FoEX8"},
      {title:"Design Patterns in TypeScript", dur:"11 min", yt:"tv-_1er1mWI"},
      {title:"TypeScript with React & Node.js", dur:"48 min", yt:"8U4OZ7j_0oQ"},
      {title:"Type System & Conditional Types Deep Dive", dur:"50 min", yt:"8gXvr1I1N6E"},
      {title:"Real-World TypeScript Project Architecture", dur:"45 min", yt:"4PjF1hKPtYg"},
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
    img:"https://images.pexels.com/photos/6829522/pexels-photo-6829522.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.4, keywords:["excel","power bi","business intelligence","dashboard","kpi"],
    preview:"x7X9w_GIm1s",
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
    img:"https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.7, keywords:["vuejs","vue 3","composition api","pinia","frontend"],
    preview:"nhBVL41-_Cw",
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
    img:"https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.9, keywords:["algorithms","data structures","python","leetcode","interviews"],
    preview:"DHjqpvDnNGE",
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
    img:"https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.8, keywords:["html","css","flexbox","grid","responsive"],
    preview:"ok-plXXHlWw",
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
    img:"https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.7, keywords:["javascript","es6","dom","async","web"],
    preview:"DHjqpvDnNGE",
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
    img:"https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.6, keywords:["java","oop","collections","multithreading","programming"],
    preview:"m4-HM_sCvtQ",
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
    img:"https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.8, keywords:["css grid","flexbox","layout","responsive","design"],
    preview:"OEV8gMkCHXQ",
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
    img:"https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.5, keywords:["git","github","version control","branching","collaboration"],
    preview:"hwP7WQkmECE",
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
    img:"https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.7, keywords:["sql","database","postgresql","queries","data"],
    preview:"zsjvFFKOm3c",
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
    img:"https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.8, keywords:["python","programming","beginner","scripts","automation"],
    preview:"x7X9w_GIm1s",
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
    img:"https://images.pexels.com/photos/330771/pexels-photo-330771.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating:4.6, keywords:["responsive","mobile","design","media queries","ux"],
    preview:"ok-plXXHlWw",
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

  {
    id: 21,
    title: "Next.js — Full-Stack Framework",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "6.8 hours",
    level: "intermediate",
    description: "Build production-grade full-stack apps with Next.js. Covers SSR, SSG, API routes, middleware, and deployment on Vercel.",
    img: "https://images.pexels.com/photos/12899191/pexels-photo-12899191.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "nextjs",
      "react",
      "ssr",
      "ssg",
      "vercel",
      "fullstack"
    ],
    preview:"Sklc_fQBmcs",
    lessons: [
      {
        title: "Next.js Fundamentals & Routing",
        dur: "65 min",
        yt: "2cB5Fh46ViQ"
      },
      {
        title: "Data Fetching — SSR, SSG & ISR",
        dur: "78 min",
        yt: "6Jy5XFH6eH8"
      },
      {
        title: "API Routes & Middleware",
        dur: "92 min",
        yt: "3Hj3GJ7iG6I"
      },
      {
        title: "Authentication & Deployment",
        dur: "173 min",
        yt: "k7rZR5hY7jA"
      }
    ],
    reading: [
      {
        title: "Why Next.js?",
        body: "Next.js is the React framework for production, giving you SSR, SSG, and API routes out of the box.",
        points: [
          "File-based routing simplifies navigation",
          "SSR improves SEO and initial load",
          "SSG pre-renders static pages at build",
          "API routes eliminate separate backend"
        ]
      },
      {
        title: "Rendering Strategies",
        body: "Choose the right rendering strategy for each page.",
        points: [
          "SSR for dynamic, personalized content",
          "SSG for static marketing pages",
          "ISR combines static with periodic updates",
          "CSR for fully interactive dashboards"
        ]
      }
    ],
    quiz: [
      {
        q: "What does SSR stand for?",
        opts: [
          "Server-Side Rendering",
          "Static Site Rendering",
          "Simple State Render",
          "Server Script Runtime"
        ],
        ans: 0
      },
      {
        q: "Which Next.js function fetches data at build time?",
        opts: [
          "getServerSideProps",
          "getStaticProps",
          "getInitialProps",
          "useEffect"
        ],
        ans: 1
      },
      {
        q: "What is ISR?",
        opts: [
          "Incremental Static Regeneration",
          "Instant Server Response",
          "Inline Style Rendering",
          "Integrated Service Router"
        ],
        ans: 0
      },
      {
        q: "Where do API routes live in Next.js?",
        opts: [
          "/api",
          "/pages/api",
          "/routes/api",
          "/backend"
        ],
        ans: 1
      },
      {
        q: "Which company created Next.js?",
        opts: [
          "Meta",
          "Vercel",
          "Google",
          "Netflix"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 22,
    title: "Angular — Complete Guide",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "14.2 hours",
    level: "intermediate",
    description: "Master Angular from setup to deployment. Covers components, services, routing, forms, RxJS, and state management with NgRx.",
    img: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "angular",
      "typescript",
      "rxjs",
      "ngrx",
      "frontend"
    ],
    preview:"Ata9cSC2WpM",
    lessons: [
      {
        title: "Angular CLI & Project Structure",
        dur: "92 min",
        yt: "3qBXWUpoPHo"
      },
      {
        title: "Components, Directives & Pipes",
        dur: "210 min",
        yt: "x5PZwb4XurU"
      },
      {
        title: "Services, DI & HTTP Client",
        dur: "185 min",
        yt: "k5E2mgkCSSI"
      },
      {
        title: "RxJS, NgRx & State Management",
        dur: "365 min",
        yt: "f97ICOaVFYI"
      }
    ],
    reading: [
      {
        title: "Angular Architecture",
        body: "Angular is a comprehensive TypeScript framework from Google for building large-scale SPAs.",
        points: [
          "Components are the building blocks of UI",
          "Services handle business logic",
          "Dependency injection manages singletons",
          "Modules organize related features"
        ]
      },
      {
        title: "RxJS & Reactive Programming",
        body: "RxJS brings reactive programming to Angular with observables.",
        points: [
          "Observables are streams of data over time",
          "Operators like map, filter, merge transform streams",
          "Subjects act as both observer and observable",
          "Async pipes subscribe/unsubscribe automatically"
        ]
      }
    ],
    quiz: [
      {
        q: "What language does Angular use?",
        opts: [
          "JavaScript",
          "TypeScript",
          "Dart",
          "CoffeeScript"
        ],
        ans: 1
      },
      {
        q: "What is a decorator in Angular?",
        opts: [
          "A CSS class",
          "A function that adds metadata to classes",
          "A type of component",
          "A routing guard"
        ],
        ans: 1
      },
      {
        q: "What does RxJS provide?",
        opts: [
          "CSS animations",
          "Reactive programming with observables",
          "HTTP server",
          "Database access"
        ],
        ans: 1
      },
      {
        q: "What is NgRx?",
        opts: [
          "A CSS framework",
          "State management library inspired by Redux",
          "A testing tool",
          "A build system"
        ],
        ans: 1
      },
      {
        q: "Which decorator marks a class as a module?",
        opts: [
          "@Component",
          "@Injectable",
          "@NgModule",
          "@Directive"
        ],
        ans: 2
      }
    ]
  },
  {
    id: 23,
    title: "Svelte & SvelteKit",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "5.6 hours",
    level: "intermediate",
    description: "Build fast, reactive web apps with Svelte. Learn the compiler-driven approach and SvelteKit for full-stack applications.",
    img: "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "svelte",
      "sveltekit",
      "reactive",
      "frontend",
      "javascript"
    ],
    preview:"rv3Yq-B8qp4",
    lessons: [
      {
        title: "Svelte — Reactive Declarations & Stores",
        dur: "48 min",
        yt: "3TVy6GdtNuQ"
      },
      {
        title: "Components, Slots & Context",
        dur: "72 min",
        yt: "8DP0C6FMhaA"
      },
      {
        title: "SvelteKit Routing & Endpoints",
        dur: "96 min",
        yt: "rw4KL7jFUac"
      },
      {
        title: "Building a Full App with SvelteKit",
        dur: "120 min",
        yt: "cSjmMCeg4aA"
      }
    ],
    reading: [
      {
        title: "Why Svelte?",
        body: "Svelte shifts work from runtime to compile time, producing highly optimized vanilla JS.",
        points: [
          "No virtual DOM — direct DOM updates",
          "Less boilerplate than React or Vue",
          "Compiled away framework overhead",
          "True reactive declarations with $:"
        ]
      },
      {
        title: "SvelteKit Features",
        body: "SvelteKit is the official application framework for Svelte.",
        points: [
          "File-based routing like Next.js",
          "Server-side rendering and prerendering",
          "Form actions simplify data mutations",
          "Adapter-based deployment to any platform"
        ]
      }
    ],
    quiz: [
      {
        q: "How does Svelte differ from React?",
        opts: [
          "Uses virtual DOM",
          "Compiles at build time, no runtime framework",
          "Is a backend framework",
          "Uses JSX"
        ],
        ans: 1
      },
      {
        q: "What does $: mean in Svelte?",
        opts: [
          "A jQuery selector",
          "A reactive declaration",
          "A CSS selector",
          "A TypeScript type"
        ],
        ans: 1
      },
      {
        q: "What is the SvelteKit equivalent of Next.js?",
        opts: [
          "It has none",
          "SvelteKit is the full-stack framework for Svelte",
          "A different language",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What is a Svelte store?",
        opts: [
          "A database",
          "A reactive state container",
          "A CSS file",
          "A TypeScript type"
        ],
        ans: 1
      },
      {
        q: "Which SvelteKit feature handles form submissions?",
        opts: [
          "API routes",
          "Form actions",
          "Server hooks",
          "Middleware"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 24,
    title: "Django — Python Web Framework",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "12.3 hours",
    level: "intermediate",
    description: "Build secure, scalable web applications with Django. Covers ORM, authentication, REST APIs, and deployment best practices.",
    img: "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "django",
      "python",
      "web",
      "backend",
      "orm"
    ],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "Django Models & ORM",
        dur: "145 min",
        yt: "0b11WGGCWgQ"
      },
      {
        title: "Views, Templates & URLs",
        dur: "180 min",
        yt: "OTmQOjsl0eg"
      },
      {
        title: "Authentication & Authorization",
        dur: "165 min",
        yt: "qH9WrRXHpZc"
      },
      {
        title: "Django REST Framework & Deployment",
        dur: "248 min",
        yt: "RjMC8xI7iEA"
      }
    ],
    reading: [
      {
        title: "Why Django?",
        body: "Django is a high-level Python framework that encourages rapid development with clean, pragmatic design.",
        points: [
          "Batteries included — admin, auth, ORM built in",
          "MVT architecture is clear and organized",
          "ORM abstracts database complexity",
          "Built-in security against common threats"
        ]
      },
      {
        title: "The Django ORM",
        body: "Django's ORM lets you work with databases using Python instead of raw SQL.",
        points: [
          "Models define database schema as Python classes",
          "QuerySets lazily evaluate database queries",
          "Migrations version-control database changes",
          "Relationships are defined as ForeignKey, ManyToMany"
        ]
      }
    ],
    quiz: [
      {
        q: "What pattern does Django follow?",
        opts: [
          "MVC",
          "MVT (Model-View-Template)",
          "MVVM",
          "MVP"
        ],
        ans: 1
      },
      {
        q: "Which file maps URLs to views?",
        opts: [
          "models.py",
          "views.py",
          "urls.py",
          "settings.py"
        ],
        ans: 2
      },
      {
        q: "What is Django's ORM?",
        opts: [
          "An object-relational mapper to interact with databases",
          "A testing framework",
          "A template engine",
          "A routing system"
        ],
        ans: 0
      },
      {
        q: "What command creates database tables from models?",
        opts: [
          "python manage.py runserver",
          "python manage.py migrate",
          "python manage.py createsuperuser",
          "python manage.py shell"
        ],
        ans: 1
      },
      {
        q: "Which framework builds REST APIs with Django?",
        opts: [
          "Flask",
          "FastAPI",
          "Django REST Framework",
          "Tornado"
        ],
        ans: 2
      }
    ]
  },
  {
    id: 25,
    title: "Ruby on Rails",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "10.5 hours",
    level: "intermediate",
    description: "Build web applications rapidly with Ruby on Rails. Covers MVC, Active Record, RESTful design, and testing with RSpec.",
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "ruby",
      "rails",
      "mvc",
      "activerecord",
      "backend"
    ],
    preview:"DHjqpvDnNGE",
    lessons: [
      {
        title: "Ruby Fundamentals for Rails",
        dur: "98 min",
        yt: "t6FgmA8kq_k"
      },
      {
        title: "MVC Architecture & Routing",
        dur: "132 min",
        yt: "UNtNBPOJFgY"
      },
      {
        title: "Active Record & Migrations",
        dur: "195 min",
        yt: "7H0hC-JqE3Q"
      },
      {
        title: "REST APIs, Authentication & Testing",
        dur: "205 min",
        yt: "V3NvW6Kpz48"
      }
    ],
    reading: [
      {
        title: "The Rails Philosophy",
        body: "Rails values convention over configuration, making developers productive immediately.",
        points: [
          "Convention over configuration reduces decisions",
          "Don't Repeat Yourself (DRY) principle",
          "REST is the default design pattern",
          "Testing is built into the workflow"
        ]
      },
      {
        title: "Active Record Patterns",
        body: "Active Record is the ORM layer in Rails, mapping tables to classes.",
        points: [
          "Model classes correspond to database tables",
          "Validations ensure data integrity",
          "Callbacks hook into object lifecycle",
          "Associations define relationships between models"
        ]
      }
    ],
    quiz: [
      {
        q: "What language is Rails built with?",
        opts: [
          "Python",
          "Ruby",
          "PHP",
          "Java"
        ],
        ans: 1
      },
      {
        q: "What does CoC stand for in Rails?",
        opts: [
          "Code of Conduct",
          "Convention over Configuration",
          "Controller over Component",
          "Class on Class"
        ],
        ans: 1
      },
      {
        q: "Which Rails component handles the database layer?",
        opts: [
          "Action Controller",
          "Active Record",
          "Action View",
          "Active Support"
        ],
        ans: 1
      },
      {
        q: "What is a migration in Rails?",
        opts: [
          "A server move",
          "A way to alter database schema over time",
          "A CSS file",
          "A test file"
        ],
        ans: 1
      },
      {
        q: "Which testing framework is common in Rails?",
        opts: [
          "Jest",
          "Mocha",
          "RSpec",
          "PHPUnit"
        ],
        ans: 2
      }
    ]
  },
  {
    id: 26,
    title: "PHP & Laravel",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "11.8 hours",
    level: "intermediate",
    description: "Master modern PHP with Laravel. Build RESTful APIs, use Eloquent ORM, Blade templating, and deploy production apps.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "php",
      "laravel",
      "backend",
      "eloquent",
      "web"
    ],
    preview:"a7_WFUlFS94",
    lessons: [
      {
        title: "PHP Modern Syntax & OOP",
        dur: "140 min",
        yt: "2eebptXfEvw"
      },
      {
        title: "Laravel MVC & Routing",
        dur: "185 min",
        yt: "ImtZ5yENzgE"
      },
      {
        title: "Eloquent ORM & Blade Templating",
        dur: "210 min",
        yt: "UkiP3rlVk2g"
      },
      {
        title: "API Development & Deployment",
        dur: "173 min",
        yt: "fGd6kUwGo3Y"
      }
    ],
    reading: [
      {
        title: "Why Laravel?",
        body: "Laravel is the most popular PHP framework, known for expressive syntax and rich features.",
        points: [
          "Elegant syntax with expressive, fluent API",
          "Eloquent ORM is intuitive and powerful",
          "Blade templating is lightweight yet flexible",
          "Artisan CLI automates repetitive tasks"
        ]
      },
      {
        title: "Key Laravel Concepts",
        body: "Laravel provides everything you need for modern web development.",
        points: [
          "MVC architecture separates concerns",
          "Middleware filters HTTP requests",
          "Service providers bootstrap core services",
          "Queues & jobs handle async processing"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Laravel?",
        opts: [
          "A CSS framework",
          "A PHP web framework",
          "A JavaScript library",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What is Eloquent in Laravel?",
        opts: [
          "A template engine",
          "An ORM for database interaction",
          "A routing system",
          "A testing tool"
        ],
        ans: 1
      },
      {
        q: "What is Blade?",
        opts: [
          "A JavaScript framework",
          "Laravel's templating engine",
          "A CSS preprocessor",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What command runs Laravel migrations?",
        opts: [
          "php artisan serve",
          "php artisan migrate",
          "php artisan make:model",
          "php artisan route:list"
        ],
        ans: 1
      },
      {
        q: "What is Artisan?",
        opts: [
          "A design pattern",
          "Laravel's CLI tool",
          "A package manager",
          "A type of queue"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 27,
    title: "Go for Web Development",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "7.4 hours",
    level: "intermediate",
    description: "Build fast, concurrent web services with Go. Covers HTTP handlers, middleware, templating, database integration, and testing.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "golang",
      "go",
      "web",
      "backend",
      "concurrency"
    ],
    preview:"446E-r0rXHI",
    lessons: [
      {
        title: "Go Language Fundamentals",
        dur: "95 min",
        yt: "YS4e4q9oBaU"
      },
      {
        title: "HTTP Handlers, Mux & Middleware",
        dur: "88 min",
        yt: "7hgI1IfEru8"
      },
      {
        title: "Database & JSON APIs",
        dur: "132 min",
        yt: "Tl8VlMGMTiM"
      },
      {
        title: "Testing, Concurrency & Deployment",
        dur: "129 min",
        yt: "LgLvLw9hHwM"
      }
    ],
    reading: [
      {
        title: "Why Go for Web Services?",
        body: "Go combines simplicity with high performance, making it ideal for backend services.",
        points: [
          "Compiled to a single binary for easy deployment",
          "Goroutines enable lightweight concurrency",
          "Standard library includes a production HTTP server",
          "Static typing catches errors early"
        ]
      },
      {
        title: "Concurrency in Go",
        body: "Go's concurrency model is based on CSP with goroutines and channels.",
        points: [
          "Goroutines are lightweight threads",
          "Channels safely communicate between goroutines",
          "Select statements handle multiple channels",
          "Mutexes protect shared resources"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Go?",
        opts: [
          "Apple",
          "Google",
          "Microsoft",
          "Meta"
        ],
        ans: 1
      },
      {
        q: "What is a goroutine?",
        opts: [
          "A database routine",
          "A lightweight concurrent thread",
          "A web handler",
          "A test function"
        ],
        ans: 1
      },
      {
        q: "What does defer do in Go?",
        opts: [
          "Defers a function execution until surrounding function returns",
          "Deletes a variable",
          "Creates a goroutine",
          "Defines a type"
        ],
        ans: 0
      },
      {
        q: "What is a channel in Go?",
        opts: [
          "A network connection",
          "A conduit for communication between goroutines",
          "A type of array",
          "A logging system"
        ],
        ans: 1
      },
      {
        q: "Which Go package handles HTTP servers?",
        opts: [
          "net/rpc",
          "net/http",
          "os/http",
          "syscall/http"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 28,
    title: "GraphQL API Mastery",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "5.3 hours",
    level: "advanced",
    description: "Design and implement GraphQL APIs with Apollo. Covers schemas, resolvers, mutations, subscriptions, and caching strategies.",
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "graphql",
      "apollo",
      "api",
      "backend",
      "queries"
    ],
    preview:"eIQh02xuVw4",
    lessons: [
      {
        title: "GraphQL vs REST — Core Concepts",
        dur: "35 min",
        yt: "ed8SzALpx1Q"
      },
      {
        title: "Schema Design & Resolvers",
        dur: "85 min",
        yt: "7wzR4Ig5pTI"
      },
      {
        title: "Mutations & Subscriptions",
        dur: "78 min",
        yt: "fB5Ly0wfbrs"
      },
      {
        title: "Caching, Federation & Best Practices",
        dur: "120 min",
        yt: "3xT01mhJ8ik"
      }
    ],
    reading: [
      {
        title: "What is GraphQL?",
        body: "GraphQL is a query language for APIs developed by Meta, letting clients request exactly the data they need.",
        points: [
          "Clients specify exactly what fields they want",
          "Single endpoint replaces multiple REST endpoints",
          "Strongly typed schema serves as contract",
          "Real-time updates via subscriptions"
        ]
      },
      {
        title: "Apollo Server & Client",
        body: "Apollo is the most popular GraphQL implementation.",
        points: [
          "Apollo Server works with any Node.js framework",
          "Apollo Client manages local + remote state",
          "Federation composes multiple GraphQL services",
          "Cache normalization optimizes reads"
        ]
      }
    ],
    quiz: [
      {
        q: "Who developed GraphQL?",
        opts: [
          "Google",
          "Meta",
          "Amazon",
          "Netflix"
        ],
        ans: 1
      },
      {
        q: "How does GraphQL differ from REST?",
        opts: [
          "Uses multiple endpoints",
          "Clients query exactly what they need",
          "Only supports GET requests",
          "Requires no schema"
        ],
        ans: 1
      },
      {
        q: "What is a resolver?",
        opts: [
          "A CSS class",
          "A function that populates data for a field",
          "A database table",
          "A type of mutation"
        ],
        ans: 1
      },
      {
        q: "What does a mutation do?",
        opts: [
          "Only reads data",
          "Modifies data on the server",
          "Deletes the schema",
          "Creates a subscription"
        ],
        ans: 1
      },
      {
        q: "What is a subscription in GraphQL?",
        opts: [
          "A pricing plan",
          "A real-time connection for live updates",
          "A one-time query",
          "A schema definition"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 29,
    title: "Docker for Developers",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "4.8 hours",
    level: "intermediate",
    description: "Containerize applications with Docker. Master images, containers, volumes, networks, Docker Compose, and CI/CD integration.",
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "docker",
      "containers",
      "devops",
      "deployment",
      "compose"
    ],
    preview:"Gjnup-PuquQ",
    lessons: [
      {
        title: "Docker Images & Containers",
        dur: "55 min",
        yt: "fqMOX6JJhGo"
      },
      {
        title: "Dockerfile — Building Custom Images",
        dur: "68 min",
        yt: "gAkwW2tuIqE"
      },
      {
        title: "Volumes, Networks & Environment",
        dur: "72 min",
        yt: "5wUJ5pC4i08"
      },
      {
        title: "Docker Compose & Multi-Container Apps",
        dur: "93 min",
        yt: "HG6yI1T10IA"
      }
    ],
    reading: [
      {
        title: "Why Containerize?",
        body: "Containers package an application with all its dependencies for consistent behavior everywhere.",
        points: [
          "Eliminates 'works on my machine' problems",
          "Lightweight compared to virtual machines",
          "Images are versionable and shareable",
          "Scales horizontally with orchestrators"
        ]
      },
      {
        title: "Docker Best Practices",
        body: "Optimize your Docker images for security and performance.",
        points: [
          "Use multi-stage builds to reduce image size",
          "Prefer specific tags over 'latest'",
          "Run containers as non-root user",
          "Minimize layers by combining RUN commands"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a Docker container?",
        opts: [
          "A virtual machine",
          "A running instance of a Docker image",
          "A database",
          "A web server"
        ],
        ans: 1
      },
      {
        q: "What does a Dockerfile define?",
        opts: [
          "A docker-compose config",
          "Instructions to build a Docker image",
          "A network configuration",
          "A volume mount"
        ],
        ans: 1
      },
      {
        q: "What does docker-compose do?",
        opts: [
          "Runs a single container",
          "Defines and runs multi-container Docker apps",
          "Builds images",
          "Pushes to registry"
        ],
        ans: 1
      },
      {
        q: "What is a volume in Docker?",
        opts: [
          "A log file",
          "Persistent data storage outside the container's lifecycle",
          "A type of image",
          "A network driver"
        ],
        ans: 1
      },
      {
        q: "What does EXPOSE do in a Dockerfile?",
        opts: [
          "Opens a port on the host",
          "Documents which ports the container listens on",
          "Starts the application",
          "Creates a network"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 30,
    title: "Web Performance Optimization",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "4.2 hours",
    level: "advanced",
    description: "Optimize websites for speed. Master Core Web Vitals, lazy loading, code splitting, CDNs, caching, Lighthouse audits, and more.",
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "performance",
      "optimization",
      "lighthouse",
      "core web vitals",
      "caching"
    ],
    preview:"OEV8gMkCHXQ",
    lessons: [
      {
        title: "Measuring Performance — Core Web Vitals",
        dur: "42 min",
        yt: "AQqFZ5t8uNQ"
      },
      {
        title: "Images, Fonts & Media Optimization",
        dur: "65 min",
        yt: "Fw7ZdQ4NMkU"
      },
      {
        title: "Code Splitting, Lazy Loading & Caching",
        dur: "78 min",
        yt: "Gt9B4Cedw84"
      },
      {
        title: "CDNs, HTTP/2 & Lighthouse Audits",
        dur: "67 min",
        yt: "QlUYtCpPGEU"
      }
    ],
    reading: [
      {
        title: "Why Performance Matters",
        body: "Every extra second of load time costs conversions. Users expect sub-2-second loads.",
        points: [
          "53% of users abandon sites over 3 seconds",
          "1-second delay reduces conversions by 7%",
          "Google uses page speed as a ranking factor",
          "Core Web Vitals are official ranking signals"
        ]
      },
      {
        title: "Optimization Techniques",
        body: "Target the critical rendering path for maximum impact.",
        points: [
          "Minimize CSS & JavaScript bundles",
          "Use lazy loading for below-fold content",
          "Preload critical assets, defer non-critical",
          "Serve images in WebP/AVIF with srcset"
        ]
      }
    ],
    quiz: [
      {
        q: "What are Core Web Vitals?",
        opts: [
          "A design system",
          "Metrics measuring speed, responsiveness, and visual stability",
          "A CSS framework",
          "A font library"
        ],
        ans: 1
      },
      {
        q: "What is LCP?",
        opts: [
          "Largest Contentful Paint — measures loading performance",
          "Last CSS Paint",
          "Local Cache Protocol",
          "Lightweight Component Package"
        ],
        ans: 0
      },
      {
        q: "What does CLS measure?",
        opts: [
          "Cascading Layout Sheets",
          "Cumulative Layout Shift — visual stability",
          "Client Load Speed",
          "Cache Load Strategy"
        ],
        ans: 1
      },
      {
        q: "What is FID?",
        opts: [
          "First Input Delay — measures interactivity",
          "Fast Image Delivery",
          "Final Interface Design",
          "Font Import Directive"
        ],
        ans: 0
      },
      {
        q: "Which tool audits web performance?",
        opts: [
          "Webpack",
          "Lighthouse",
          "Babel",
          "ESLint"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 31,
    title: "Progressive Web Apps (PWAs)",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "3.6 hours",
    level: "intermediate",
    description: "Build installable, offline-first web apps with service workers, cache strategies, push notifications, and the App Shell pattern.",
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "pwa",
      "service worker",
      "offline",
      "manifest",
      "push notifications"
    ],
    preview:"ok-plXXHlWw",
    lessons: [
      {
        title: "Web App Manifest & Installability",
        dur: "28 min",
        yt: "4XT23X0Fjfk"
      },
      {
        title: "Service Workers — Lifecycle & Events",
        dur: "65 min",
        yt: "ks0v9FbXH3A"
      },
      {
        title: "Caching Strategies & Offline First",
        dur: "72 min",
        yt: "x7S6RrJIB8w"
      },
      {
        title: "Push Notifications & Background Sync",
        dur: "51 min",
        yt: "2G9GfHJRB_0"
      }
    ],
    reading: [
      {
        title: "What is a PWA?",
        body: "Progressive Web Apps combine the best of web and native apps — installable, offline, and fast.",
        points: [
          "Installable on home screen without app store",
          "Works offline with service worker caching",
          "Push notifications re-engage users",
          "Responsive and works on any device"
        ]
      },
      {
        title: "Service Worker Lifecycle",
        body: "Service workers are JavaScript files that intercept network requests.",
        points: [
          "Register the service worker on page load",
          "Install event caches static assets",
          "Activate event cleans old caches",
          "Fetch event intercepts and serves cached content"
        ]
      }
    ],
    quiz: [
      {
        q: "What makes a PWA installable?",
        opts: [
          "A plugin",
          "A web app manifest and service worker",
          "A database",
          "A CSS file"
        ],
        ans: 1
      },
      {
        q: "What is a service worker?",
        opts: [
          "A web server",
          "A JavaScript file that runs in the background",
          "A CSS framework",
          "A database"
        ],
        ans: 1
      },
      {
        q: "Which event caches static assets?",
        opts: [
          "fetch",
          "install",
          "activate",
          "message"
        ],
        ans: 1
      },
      {
        q: "What is the App Shell pattern?",
        opts: [
          "A CSS grid",
          "Loading minimal UI first then content",
          "A database schema",
          "A service worker file"
        ],
        ans: 1
      },
      {
        q: "What does Cache First strategy do?",
        opts: [
          "Always fetches from network",
          "Serves cached content first, updates later",
          "Only caches images",
          "Disables caching"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 32,
    title: "Testing with Jest & Cypress",
    instructor: "Oduye Emmanuel",
    category: "Web Development",
    duration: "5.9 hours",
    level: "intermediate",
    description: "Master frontend testing with Jest for unit/integration tests and Cypress for E2E testing. Covers mocking, CI integration, and best practices.",
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "jest",
      "cypress",
      "testing",
      "e2e",
      "tdd"
    ],
    preview:"u6QfIXgjwGQ",
    lessons: [
      {
        title: "Jest — Unit Tests & Matchers",
        dur: "72 min",
        yt: "ajiWAlWjrls"
      },
      {
        title: "Mocking, Spies & Async Tests",
        dur: "88 min",
        yt: "qQJg1JYC8HA"
      },
      {
        title: "Cypress — E2E Testing Basics",
        dur: "95 min",
        yt: "7N63cCKr_Ls"
      },
      {
        title: "Advanced Cypress — Intercepts & CI",
        dur: "99 min",
        yt: "0Y7k-S_GS98"
      }
    ],
    reading: [
      {
        title: "Why Test?",
        body: "Automated testing gives confidence that your application works correctly as it grows.",
        points: [
          "Prevents regressions when refactoring",
          "Documents how code should behave",
          "Saves time compared to manual testing",
          "Tests serve as living documentation"
        ]
      },
      {
        title: "Jest vs Cypress",
        body: "Jest handles unit/integration. Cypress handles end-to-end browser testing.",
        points: [
          "Jest runs in Node.js, fast for logic tests",
          "Cypress runs in a real browser, slower but realistic",
          "Jest snapshot testing catches UI changes",
          "Cypress time-travels to debug each step"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Jest primarily used for?",
        opts: [
          "E2E testing",
          "Unit and integration testing",
          "CSS testing",
          "Build tooling"
        ],
        ans: 1
      },
      {
        q: "What does Cypress test?",
        opts: [
          "Database queries",
          "End-to-end browser interactions",
          "API performance",
          "Server load"
        ],
        ans: 1
      },
      {
        q: "What is a mock in testing?",
        opts: [
          "A CSS class",
          "A fake replacement for a real dependency",
          "A test file",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What does TDD stand for?",
        opts: [
          "Test-Driven Development",
          "TypeScript Design Document",
          "Technical Design Document",
          "Total Dependency Deployment"
        ],
        ans: 0
      },
      {
        q: "What is snapshot testing?",
        opts: [
          "A photo of the screen",
          "Capturing rendered output to detect changes",
          "A database backup",
          "A logging system"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 33,
    title: "React Native — Cross-Platform Apps",
    instructor: "Oduye Emmanuel",
    category: "Mobile Development",
    duration: "9.4 hours",
    level: "intermediate",
    description: "Build native mobile apps for iOS and Android with React Native. Components, navigation, state management, and device APIs.",
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "react native",
      "mobile",
      "ios",
      "android",
      "javascript"
    ],
    preview:"gvkqT_Uoahw",
    lessons: [
      {
        title: "React Native Core Components",
        dur: "95 min",
        yt: "0-S5a0eWoc8"
      },
      {
        title: "Navigation with React Navigation",
        dur: "120 min",
        yt: "9LpU2G6aMvM"
      },
      {
        title: "State Management & AsyncStorage",
        dur: "155 min",
        yt: "3gMB0WmLFdI"
      },
      {
        title: "Device APIs, Push & Deployment",
        dur: "194 min",
        yt: "6Znl4YdT5ks"
      }
    ],
    reading: [
      {
        title: "Why React Native?",
        body: "React Native lets you build native mobile apps using React with JavaScript.",
        points: [
          "Share ~90% of code between iOS and Android",
          "Hot reload speeds up development",
          "Access native platform APIs",
          "Large community and ecosystem"
        ]
      },
      {
        title: "Core Concepts",
        body: "React Native uses native components instead of web DOM elements.",
        points: [
          "<View> replaces <div>",
          "<Text> replaces <p>/<span>",
          "<FlatList> optimizes long lists",
          "StyleSheet.create for performant styles"
        ]
      }
    ],
    quiz: [
      {
        q: "What is React Native?",
        opts: [
          "A web framework",
          "A framework for building native mobile apps with React",
          "A database",
          "A CSS framework"
        ],
        ans: 1
      },
      {
        q: "Which component renders a button in React Native?",
        opts: [
          "<button>",
          "<TouchableOpacity>",
          "<Clickable>",
          "<Press>"
        ],
        ans: 1
      },
      {
        q: "What does FlatList optimize?",
        opts: [
          "CSS animations",
          "Rendering long lists efficiently",
          "Database queries",
          "Network requests"
        ],
        ans: 1
      },
      {
        q: "Which library handles navigation in React Native?",
        opts: [
          "React Router",
          "React Navigation",
          "Native Router",
          "Nav Bar"
        ],
        ans: 1
      },
      {
        q: "What is Expo?",
        opts: [
          "A database",
          "A managed workflow and toolchain for React Native",
          "A CSS framework",
          "A state management library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 34,
    title: "iOS Development with Swift",
    instructor: "Oduye Emmanuel",
    category: "Mobile Development",
    duration: "15.7 hours",
    level: "intermediate",
    description: "Build beautiful iOS apps from scratch with Swift and SwiftUI. Learn UIKit, Core Data, networking, and App Store submission.",
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "swift",
      "ios",
      "swiftui",
      "apple",
      "mobile"
    ],
    preview:"nAchMctX4YA",
    lessons: [
      {
        title: "Swift Language Fundamentals",
        dur: "180 min",
        yt: "Ulp1Kimblg0"
      },
      {
        title: "SwiftUI Views & Layouts",
        dur: "210 min",
        yt: "b6kW5fLpI30"
      },
      {
        title: "Networking, Data & State Management",
        dur: "270 min",
        yt: "4g1rxWUwRtE"
      },
      {
        title: "App Store Submission & Best Practices",
        dur: "282 min",
        yt: "kH1ReBqAXa4"
      }
    ],
    reading: [
      {
        title: "Why Swift & iOS?",
        body: "Swift is Apple's modern language for iOS development, combining performance with safety.",
        points: [
          "Swift is fast, safe, and expressive",
          "SwiftUI uses declarative UI patterns",
          "iOS users spend more on apps",
          "Xcode provides integrated development tools"
        ]
      },
      {
        title: "SwiftUI vs UIKit",
        body: "SwiftUI is the modern approach, but UIKit is still widely used.",
        points: [
          "SwiftUI: declarative, live preview, less code",
          "UIKit: imperative, mature, more control",
          "SwiftUI uses @State, @Binding, @ObservedObject",
          "UIKit uses Storyboards and programmatic layout"
        ]
      }
    ],
    quiz: [
      {
        q: "Who makes iOS?",
        opts: [
          "Google",
          "Apple",
          "Microsoft",
          "Samsung"
        ],
        ans: 1
      },
      {
        q: "What is SwiftUI?",
        opts: [
          "A database",
          "A declarative UI framework for Apple platforms",
          "A network library",
          "A testing tool"
        ],
        ans: 1
      },
      {
        q: "What does @State do in SwiftUI?",
        opts: [
          "Stores persistent data",
          "Declares a source of truth that triggers view updates",
          "Creates a network request",
          "Defines a route"
        ],
        ans: 1
      },
      {
        q: "What is Xcode?",
        opts: [
          "An Apple device",
          "Apple's IDE for developing Apple platform apps",
          "A programming language",
          "A simulator"
        ],
        ans: 1
      },
      {
        q: "What is Core Data?",
        opts: [
          "A CSS framework",
          "Apple's framework for managing object graphs and persistence",
          "A networking library",
          "A UI component"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 35,
    title: "Android Development with Kotlin",
    instructor: "Oduye Emmanuel",
    category: "Mobile Development",
    duration: "14.3 hours",
    level: "intermediate",
    description: "Build modern Android apps with Kotlin. Jetpack Compose, Room database, Retrofit, Material Design 3, and Play Store deployment.",
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "kotlin",
      "android",
      "jetpack",
      "compose",
      "mobile"
    ],
    preview:"xT8oP0wy-A0",
    lessons: [
      {
        title: "Kotlin Language & OOP",
        dur: "165 min",
        yt: "F9UC9DYvTIE"
      },
      {
        title: "Jetpack Compose UI Toolkit",
        dur: "225 min",
        yt: "Rc2dUJv1Hbg"
      },
      {
        title: "Room, Retrofit & Coroutines",
        dur: "250 min",
        yt: "8P9iWJRPtpI"
      },
      {
        title: "Material Design 3 & Publishing",
        dur: "218 min",
        yt: "HbvKvL3wCKo"
      }
    ],
    reading: [
      {
        title: "Why Kotlin for Android?",
        body: "Kotlin is Google's preferred language for Android development, fully interoperable with Java.",
        points: [
          "Null safety built into the type system",
          "Coroutines simplify async code",
          "Data classes reduce boilerplate",
          "First-class support in Android Studio"
        ]
      },
      {
        title: "Jetpack Compose",
        body: "Compose is Android's modern declarative UI toolkit.",
        points: [
          "@Composable functions define UI",
          "State changes automatically recompose UI",
          "Material Design 3 components built in",
          "Preview annotations show UI in IDE"
        ]
      }
    ],
    quiz: [
      {
        q: "What language does Google recommend for Android?",
        opts: [
          "Java",
          "Kotlin",
          "Python",
          "C#"
        ],
        ans: 1
      },
      {
        q: "What is Jetpack Compose?",
        opts: [
          "A database",
          "Android's modern declarative UI toolkit",
          "A networking library",
          "A testing framework"
        ],
        ans: 1
      },
      {
        q: "What are coroutines in Kotlin?",
        opts: [
          "CSS animations",
          "Lightweight concurrency primitives for async code",
          "Database migrations",
          "Layout components"
        ],
        ans: 1
      },
      {
        q: "What is Room in Android?",
        opts: [
          "A UI component",
          "A persistence library providing an abstraction over SQLite",
          "A navigation component",
          "A testing tool"
        ],
        ans: 1
      },
      {
        q: "What is Retrofit?",
        opts: [
          "A UI framework",
          "A type-safe HTTP client for Android",
          "A database",
          "A build tool"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 36,
    title: "Kotlin Multiplatform",
    instructor: "Oduye Emmanuel",
    category: "Mobile Development",
    duration: "6.2 hours",
    level: "advanced",
    description: "Share business logic across iOS, Android, and web with Kotlin Multiplatform. Covers KMP project structure, expect/actual, and Compose Multiplatform.",
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "kotlin",
      "multiplatform",
      "kmp",
      "mobile",
      "shared"
    ],
    preview:"xT8oP0wy-A0",
    lessons: [
      {
        title: "KMP Architecture & Setup",
        dur: "52 min",
        yt: "aO2jK8WUZ5I"
      },
      {
        title: "Shared Business Logic with expect/actual",
        dur: "78 min",
        yt: "F5TfQqNBL-Y"
      },
      {
        title: "Compose Multiplatform UI",
        dur: "120 min",
        yt: "0E2ZxRfVQQc"
      },
      {
        title: "Networking, Data & Distribution",
        dur: "122 min",
        yt: "L5dZqHyLKCI"
      }
    ],
    reading: [
      {
        title: "What is KMP?",
        body: "Kotlin Multiplatform lets you share code across platforms while writing platform-specific UI.",
        points: [
          "Share business logic, networking, data layers",
          "expect/actual handles platform differences",
          "Compose Multiplatform shares UI too",
          "Gradle manages multi-module builds"
        ]
      },
      {
        title: "When to Use KMP",
        body: "KMP is ideal for apps needing significant shared logic.",
        points: [
          "Great for data-heavy apps with shared models",
          "Networking and business logic are perfect candidates",
          "Platform UI may still need native code",
          "Growing ecosystem with mature libraries"
        ]
      }
    ],
    quiz: [
      {
        q: "What does KMP stand for?",
        opts: [
          "Kotlin Multiplatform",
          "Kotlin Meta Programming",
          "Kotlin Module Package",
          "Kotlin Main Process"
        ],
        ans: 0
      },
      {
        q: "What keyword marks platform-specific implementations?",
        opts: [
          "native",
          "expect/actual",
          "platform",
          "specific"
        ],
        ans: 1
      },
      {
        q: "Can KMP share UI code?",
        opts: [
          "No, never",
          "Yes, with Compose Multiplatform",
          "Only on Android",
          "Only on iOS"
        ],
        ans: 1
      },
      {
        q: "What build system does KMP use?",
        opts: [
          "Maven",
          "Gradle",
          "Bazel",
          "Ant"
        ],
        ans: 1
      },
      {
        q: "Which platforms can KMP target?",
        opts: [
          "iOS only",
          "Android only",
          "iOS, Android, web, desktop",
          "Web only"
        ],
        ans: 2
      }
    ]
  },
  {
    id: 37,
    title: "Ionic & Capacitor",
    instructor: "Oduye Emmanuel",
    category: "Mobile Development",
    duration: "5.8 hours",
    level: "intermediate",
    description: "Build hybrid mobile apps with Ionic and Capacitor using web technologies. Covers UI components, native plugins, and app store deployment.",
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: [
      "ionic",
      "capacitor",
      "hybrid",
      "mobile",
      "angular"
    ],
    preview:"vFW_TxKLyrE",
    lessons: [
      {
        title: "Ionic Components & Theming",
        dur: "68 min",
        yt: "2nS6iMq2Mmk"
      },
      {
        title: "Navigation & State Management",
        dur: "82 min",
        yt: "YUH7tI3C0RI"
      },
      {
        title: "Capacitor Native Plugins",
        dur: "95 min",
        yt: "3eX_tNiVgN0"
      },
      {
        title: "Building & Deploying to Stores",
        dur: "103 min",
        yt: "I4A03CJ7sDU"
      }
    ],
    reading: [
      {
        title: "Ionic Overview",
        body: "Ionic is a framework for building cross-platform mobile apps with HTML, CSS, and JavaScript.",
        points: [
          "One codebase for iOS, Android, and web",
          "Rich UI component library",
          "Built on web standards",
          "Integrates with Angular, React, Vue"
        ]
      },
      {
        title: "Capacitor vs Cordova",
        body: "Capacitor is the modern successor to Cordova with better native API management.",
        points: [
          "Capacitor plugins are npm packages",
          "Supports modern JS frameworks",
          "Built-in browser for testing",
          "Active development by the Ionic team"
        ]
      }
    ],
    quiz: [
      {
        q: "What type of apps does Ionic build?",
        opts: [
          "Native-only",
          "Hybrid cross-platform apps",
          "Desktop-only",
          "Server-side"
        ],
        ans: 1
      },
      {
        q: "What is Capacitor?",
        opts: [
          "A database",
          "A native runtime for web apps on mobile",
          "A CSS framework",
          "A test tool"
        ],
        ans: 1
      },
      {
        q: "Can Ionic apps access device hardware?",
        opts: [
          "No",
          "Yes, through Capacitor plugins",
          "Only on iOS",
          "Only on Android"
        ],
        ans: 1
      },
      {
        q: "Which frameworks does Ionic support?",
        opts: [
          "Only Angular",
          "Angular, React, Vue",
          "Only React",
          "Only Vue"
        ],
        ans: 1
      },
      {
        q: "What is the command to run an Ionic app?",
        opts: [
          "ionic start",
          "ionic serve",
          "ionic build",
          "ionic run"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 38,
    title: "PyTorch Deep Learning",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "11.3 hours",
    level: "advanced",
    description: "Deep dive into PyTorch for deep learning. Build neural networks, CNNs, RNNs, transformers, and GANs with hands-on projects.",
    img: "https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    keywords: [
      "pytorch",
      "deep learning",
      "neural networks",
      "transformers",
      "gan"
    ],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "Tensors & Autograd",
        dur: "85 min",
        yt: "c36lUUrNLMk"
      },
      {
        title: "Building Neural Networks with nn.Module",
        dur: "150 min",
        yt: "aBk2FAT9clA"
      },
      {
        title: "CNNs, RNNs & Sequence Models",
        dur: "210 min",
        yt: "wnKZZQvB_SY"
      },
      {
        title: "Transformers & Transfer Learning",
        dur: "233 min",
        yt: "U0s0f995wRA"
      }
    ],
    reading: [
      {
        title: "Why PyTorch?",
        body: "PyTorch is the leading deep learning framework for research and production, known for its dynamic computation graph.",
        points: [
          "Dynamic graphs allow flexible model architectures",
          "Pythonic interface feels natural",
          "Strong GPU acceleration",
          "TorchScript bridges research to production"
        ]
      },
      {
        title: "Core Concepts",
        body: "Understanding tensors, gradients, and the training loop is essential.",
        points: [
          "Tensors are multi-dimensional arrays like NumPy",
          "Autograd automatically computes gradients",
          "Loss functions measure prediction error",
          "Optimizers like Adam update weights"
        ]
      }
    ],
    quiz: [
      {
        q: "Who developed PyTorch?",
        opts: [
          "Google",
          "Meta",
          "Microsoft",
          "DeepMind"
        ],
        ans: 1
      },
      {
        q: "What is a tensor in PyTorch?",
        opts: [
          "A CSS property",
          "A multi-dimensional array for computations",
          "A database table",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does autograd do?",
        opts: [
          "Automatically grades exams",
          "Computes gradients automatically for backpropagation",
          "Generates code",
          "Builds graphs visually"
        ],
        ans: 1
      },
      {
        q: "What is a torch.nn.Module?",
        opts: [
          "A database model",
          "Base class for all neural network modules",
          "A type of optimizer",
          "A data loader"
        ],
        ans: 1
      },
      {
        q: "What is a CUDA in PyTorch context?",
        opts: [
          "A CSS framework",
          "GPU acceleration platform from NVIDIA",
          "A JavaScript library",
          "A database engine"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 39,
    title: "Natural Language Processing (NLP)",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "9.8 hours",
    level: "advanced",
    description: "Master NLP with transformers, BERT, GPT, and spaCy. Build chatbots, sentiment analyzers, text classifiers, and question-answering systems.",
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "nlp",
      "transformers",
      "bert",
      "spacy",
      "chatbot"
    ],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "Text Processing & Embeddings",
        dur: "95 min",
        yt: "fNxaJsNG3-s"
      },
      {
        title: "Sequence Models & Attention",
        dur: "145 min",
        yt: "wjZofJX0v4M"
      },
      {
        title: "BERT, GPT & Transformer Architectures",
        dur: "195 min",
        yt: "Ah1v5GZ_APA"
      },
      {
        title: "Building Real-World NLP Pipelines",
        dur: "243 min",
        yt: "t0A3U1zZMjs"
      }
    ],
    reading: [
      {
        title: "NLP Fundamentals",
        body: "NLP enables computers to understand, generate, and work with human language.",
        points: [
          "Tokenization splits text into units",
          "Word embeddings capture semantic meaning",
          "RNNs model sequences but have vanishing gradient",
          "Transformers revolutionized NLP with attention"
        ]
      },
      {
        title: "Transformer Architecture",
        body: "The transformer architecture is the backbone of modern NLP.",
        points: [
          "Self-attention weighs importance of different words",
          "Multi-head attention learns different relationships",
          "Positional encoding adds sequence order",
          "Pre-training + fine-tuning dominates modern NLP"
        ]
      }
    ],
    quiz: [
      {
        q: "What does NLP stand for?",
        opts: [
          "Natural Language Processing",
          "Neural Language Programming",
          "Network Layer Protocol",
          "Non-Linear Processing"
        ],
        ans: 0
      },
      {
        q: "What is word embedding?",
        opts: [
          "A CSS rule",
          "A dense vector representation of words",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What attention mechanism do transformers use?",
        opts: [
          "Global attention",
          "Self-attention",
          "Local attention",
          "Soft attention"
        ],
        ans: 1
      },
      {
        q: "What is BERT?",
        opts: [
          "A CSS framework",
          "A pre-trained transformer model from Google",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is spaCy?",
        opts: [
          "A NLP library for Python",
          "A CSS framework",
          "A database",
          "A JavaScript framework"
        ],
        ans: 0
      }
    ]
  },
  {
    id: 40,
    title: "Computer Vision with OpenCV",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "8.6 hours",
    level: "intermediate",
    description: "Master computer vision with OpenCV and Python. Image processing, object detection, face recognition, and real-time video analysis.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "computer vision",
      "opencv",
      "object detection",
      "image processing",
      "face recognition"
    ],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "Image Basics & Processing",
        dur: "95 min",
        yt: "oXlwWbU8l2o"
      },
      {
        title: "Feature Detection & Matching",
        dur: "120 min",
        yt: "nnH55-zDnFw"
      },
      {
        title: "Object Detection with YOLO & Haar Cascades",
        dur: "165 min",
        yt: "1LgWlH56ZiM"
      },
      {
        title: "Face Recognition & Real-Time Video",
        dur: "136 min",
        yt: "bon3GcM-1tk"
      }
    ],
    reading: [
      {
        title: "What is Computer Vision?",
        body: "Computer vision enables machines to interpret and understand visual information from the world.",
        points: [
          "Images are arrays of pixel values",
          "Convolution detects features like edges and textures",
          "CNNs revolutionized image recognition",
          "Transfer learning makes CV accessible"
        ]
      },
      {
        title: "OpenCV Key Features",
        body: "OpenCV is the most widely used computer vision library.",
        points: [
          "1000+ optimized algorithms",
          "Real-time video processing capabilities",
          "Supports multiple languages (Python, C++, Java)",
          "Integrates with deep learning frameworks"
        ]
      }
    ],
    quiz: [
      {
        q: "What does OpenCV stand for?",
        opts: [
          "Open Computer Vision",
          "Open Source Computer Vision Library",
          "Operating Computer View",
          "Open Core Visuals"
        ],
        ans: 1
      },
      {
        q: "What is a kernel in image processing?",
        opts: [
          "A seed",
          "A small matrix used for convolution",
          "A pixel value",
          "A color channel"
        ],
        ans: 1
      },
      {
        q: "What does edge detection find?",
        opts: [
          "Text in images",
          "Boundaries between regions in an image",
          "Colors in images",
          "Faces"
        ],
        ans: 1
      },
      {
        q: "What is YOLO in CV?",
        opts: [
          "You Only Look Once — a real-time object detection system",
          "A CSS framework",
          "A database",
          "A JavaScript library"
        ],
        ans: 0
      },
      {
        q: "What is a Haar Cascade?",
        opts: [
          "A waterfall",
          "A machine learning object detection method",
          "A CSS property",
          "A database type"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 41,
    title: "Reinforcement Learning",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "7.2 hours",
    level: "advanced",
    description: "Master reinforcement learning from basics to advanced. Q-learning, Deep Q-Networks, policy gradients, and building game-playing agents.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "reinforcement learning",
      "q-learning",
      "deep q network",
      "policy gradient",
      "agent"
    ],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "Markov Decision Processes & Bellman",
        dur: "65 min",
        yt: "0i1yR4C98CA"
      },
      {
        title: "Q-Learning & SARSA",
        dur: "88 min",
        yt: "qP6tG4nr4jA"
      },
      {
        title: "Deep Q-Networks (DQN)",
        dur: "125 min",
        yt: "0i1yR4C98CA"
      },
      {
        title: "Policy Gradients & PPO",
        dur: "154 min",
        yt: "2IFgOZBhVNo"
      }
    ],
    reading: [
      {
        title: "RL Fundamentals",
        body: "Reinforcement learning is about agents learning optimal behavior through interaction with an environment.",
        points: [
          "Agent takes actions in an environment",
          "Reward signal guides learning",
          "State represents current situation",
          "Policy maps states to actions"
        ]
      },
      {
        title: "Exploration vs Exploitation",
        body: "Agents must balance trying new actions vs using known good ones.",
        points: [
          "Epsilon-greedy explores with probability epsilon",
          "UCB selects actions with upper confidence bounds",
          "Thompson sampling uses Bayesian approach",
          "Temperature parameter controls softmax exploration"
        ]
      }
    ],
    quiz: [
      {
        q: "What does RL stand for?",
        opts: [
          "Reinforcement Learning",
          "Recursive Logic",
          "Real Language",
          "Remote Learning"
        ],
        ans: 0
      },
      {
        q: "What is a policy in RL?",
        opts: [
          "A CSS rule",
          "A strategy that maps states to actions",
          "A database query",
          "A type of neural network"
        ],
        ans: 1
      },
      {
        q: "What is the discount factor gamma?",
        opts: [
          "A CSS color",
          "How much future rewards matter compared to immediate",
          "A learning rate",
          "A batch size"
        ],
        ans: 1
      },
      {
        q: "What is the exploration-exploitation trade-off?",
        opts: [
          "A CSS issue",
          "Balancing trying new actions vs using known best ones",
          "A database problem",
          "A network latency issue"
        ],
        ans: 1
      },
      {
        q: "What is PPO?",
        opts: [
          "A CSS preprocessor",
          "Proximal Policy Optimization — a stable policy gradient method",
          "A database system",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 42,
    title: "Generative AI & LLMs",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "6.5 hours",
    level: "advanced",
    description: "Explore generative AI with large language models. Build with GPT APIs, fine-tune models, and create AI-powered applications.",
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.9,
    keywords: [
      "generative ai",
      "llm",
      "gpt",
      "fine-tuning",
      "prompt engineering"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Generative AI Landscape & LLM Basics",
        dur: "45 min",
        yt: "RqFQkF6ddAU"
      },
      {
        title: "Prompt Engineering & In-Context Learning",
        dur: "72 min",
        yt: "jC4v5ASiRuw"
      },
      {
        title: "Fine-Tuning LLMs with LoRA",
        dur: "135 min",
        yt: "Us5ZFp16PaU"
      },
      {
        title: "Building RAG Applications",
        dur: "138 min",
        yt: "mE7jfq2ucF8"
      }
    ],
    reading: [
      {
        title: "Generative AI Overview",
        body: "Generative AI creates new content — text, images, code — based on patterns learned from training data.",
        points: [
          "LLMs are trained on massive text corpora",
          "Transformer architecture enables scaling",
          "Few-shot learning adapts without fine-tuning",
          "RAG augments LLMs with external knowledge"
        ]
      },
      {
        title: "Fine-Tuning Strategies",
        body: "Adapting pre-trained models to specific tasks is more efficient than training from scratch.",
        points: [
          "Full fine-tuning updates all parameters",
          "LoRA is parameter-efficient (small adapters)",
          "RLHF aligns models with human preferences",
          "Quantization reduces model size for deployment"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a large language model?",
        opts: [
          "A CSS framework",
          "A neural network trained on vast text data",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is prompt engineering?",
        opts: [
          "Building hardware",
          "Crafting inputs to guide LLM outputs",
          "Coding in assembly",
          "Designing databases"
        ],
        ans: 1
      },
      {
        q: "What does RAG stand for?",
        opts: [
          "Random Access Generation",
          "Retrieval-Augmented Generation",
          "Rapid AI Growth",
          "Real Application Gateway"
        ],
        ans: 1
      },
      {
        q: "What is LoRA?",
        opts: [
          "A CSS framework",
          "Low-Rank Adaptation — efficient fine-tuning method",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is RLHF?",
        opts: [
          "Reinforcement Learning from Human Feedback",
          "Random Linear Hidden Function",
          "Recurrent Latent Hierarchical Framework",
          "Recursive Language Hierarchy Format"
        ],
        ans: 0
      }
    ]
  },
  {
    id: 43,
    title: "MLOps & Model Deployment",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "6.8 hours",
    level: "advanced",
    description: "Deploy, monitor, and maintain ML models in production. Covers Docker, Kubernetes, model serving, CI/CD pipelines, and MLflow.",
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "mlops",
      "deployment",
      "kubernetes",
      "docker",
      "mlflow"
    ],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "ML Project Lifecycle & Experiment Tracking",
        dur: "65 min",
        yt: "b3B2diE4sTE"
      },
      {
        title: "Model Packaging with Docker & ONNX",
        dur: "88 min",
        yt: "5qNkq0i_Nsc"
      },
      {
        title: "Model Serving — TorchServe, TF Serving, BentoML",
        dur: "120 min",
        yt: "Z_ysXH3j9A4"
      },
      {
        title: "Monitoring, CI/CD & A/B Testing ML Models",
        dur: "135 min",
        yt: "zjJ8U_C0xLY"
      }
    ],
    reading: [
      {
        title: "What is MLOps?",
        body: "MLOps applies DevOps principles to machine learning, enabling reliable ML pipelines from development to production.",
        points: [
          "Experiment tracking records model parameters and metrics",
          "Model registry version-controls trained models",
          "Feature stores ensure consistent features across training and serving",
          "Monitoring detects data drift and model degradation"
        ]
      },
      {
        title: "Production Challenges",
        body: "ML in production faces unique challenges compared to traditional software.",
        points: [
          "Data drift: input distribution changes over time",
          "Model staleness: performance degrades as world changes",
          "Scalability: serving thousands of predictions per second",
          "Reproducibility: same data + code = same result"
        ]
      }
    ],
    quiz: [
      {
        q: "What does MLOps combine?",
        opts: [
          "Marketing and Sales",
          "Machine Learning and DevOps",
          "Mobile and Desktop",
          "Management and Operations"
        ],
        ans: 1
      },
      {
        q: "What is MLflow?",
        opts: [
          "A CSS framework",
          "An open-source platform for ML lifecycle management",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is data drift?",
        opts: [
          "A CSS animation",
          "When the statistical properties of input data change over time",
          "A database migration",
          "A network issue"
        ],
        ans: 1
      },
      {
        q: "What is a feature store?",
        opts: [
          "A retail store",
          "A central repository for ML features",
          "A type of model",
          "A testing tool"
        ],
        ans: 1
      },
      {
        q: "What does a model registry do?",
        opts: [
          "Stores and versions trained models",
          "Trains new models",
          "Collects data",
          "Deploys to production"
        ],
        ans: 0
      }
    ]
  },
  {
    id: 44,
    title: "AI Ethics & Responsible AI",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "3.5 hours",
    level: "beginner",
    description: "Understand the ethical implications of AI. Bias, fairness, transparency, privacy, accountability, and building responsible AI systems.",
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "ethics",
      "responsible ai",
      "bias",
      "fairness",
      "privacy"
    ],
    preview:"BT2Cv-Tjq7Q",
    lessons: [
      {
        title: "Introduction to AI Ethics",
        dur: "25 min",
        yt: "ZgCsMl2GxJY"
      },
      {
        title: "Bias, Fairness & Mitigation Strategies",
        dur: "55 min",
        yt: "eR1RKUYSMNY"
      },
      {
        title: "Transparency, Explainability & Interpretability",
        dur: "60 min",
        yt: "grpxIzJW5ww"
      },
      {
        title: "Privacy, Accountability & Governance",
        dur: "70 min",
        yt: "9oKI-KL9kZc"
      }
    ],
    reading: [
      {
        title: "Why AI Ethics Matters",
        body: "As AI systems make decisions that affect people's lives, ethical considerations are critical.",
        points: [
          "Biased training data leads to unfair outcomes",
          "Black-box models lack explainability",
          "AI can amplify existing societal inequalities",
          "Regulatory frameworks are emerging globally"
        ]
      },
      {
        title: "Key Principles",
        body: "Responsible AI is built on foundational principles.",
        points: [
          "Fairness: avoid discrimination across groups",
          "Transparency: explain how decisions are made",
          "Accountability: someone is responsible for AI actions",
          "Privacy: protect user data and consent"
        ]
      }
    ],
    quiz: [
      {
        q: "What is algorithmic bias?",
        opts: [
          "A type of CSS",
          "Systematic unfairness in AI system outputs",
          "A database design",
          "A network configuration"
        ],
        ans: 1
      },
      {
        q: "What is explainable AI?",
        opts: [
          "AI that is fast",
          "AI whose decisions can be understood by humans",
          "AI that never makes mistakes",
          "AI that uses SQL"
        ],
        ans: 1
      },
      {
        q: "What is model fairness?",
        opts: [
          "A CSS property",
          "Ensuring model predictions do not discriminate against groups",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is differential privacy?",
        opts: [
          "A CSS framework",
          "A technique that adds noise to protect individual data",
          "A database type",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "Who is responsible when AI causes harm?",
        opts: [
          "No one",
          "The developers and organizations deploying AI",
          "Only the users",
          "The AI itself"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 45,
    title: "Prompt Engineering & ChatGPT",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "3.2 hours",
    level: "beginner",
    description: "Master the art of prompt engineering for ChatGPT, Claude, and other LLMs. Techniques for better outputs, chain-of-thought, and complex workflows.",
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "prompt engineering",
      "chatgpt",
      "llm",
      "gpt",
      "ai"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Fundamentals of Prompt Design",
        dur: "28 min",
        yt: "jC4v5ASiRuw"
      },
      {
        title: "Chain-of-Thought & Few-Shot Prompting",
        dur: "45 min",
        yt: "1_D2RC6FRDk"
      },
      {
        title: "Advanced Techniques — Self-Consistency, Tree of Thoughts",
        dur: "55 min",
        yt: "cRZ84VjTnL4"
      },
      {
        title: "Building Prompt Chains & AI Workflows",
        dur: "64 min",
        yt: "bxq842wNHsc"
      }
    ],
    reading: [
      {
        title: "What is Prompt Engineering?",
        body: "Prompt engineering is the practice of crafting inputs to get desired outputs from LLMs.",
        points: [
          "Clear instructions yield better results",
          "Role prompting assigns persona to the model",
          "Step-by-step instructions improve reasoning",
          "Example formatting influences output structure"
        ]
      },
      {
        title: "Advanced Prompt Patterns",
        body: "Sophisticated techniques unlock LLM potential.",
        points: [
          "Chain-of-thought reasoning breaks problems into steps",
          "Few-shot prompting provides examples in context",
          "Self-consistency samples multiple outputs for best answer",
          "Tree-of-thoughts explores multiple reasoning paths"
        ]
      }
    ],
    quiz: [
      {
        q: "What is prompt engineering?",
        opts: [
          "A hardware engineering field",
          "The practice of designing inputs for optimal LLM outputs",
          "A database design technique",
          "A network configuration"
        ],
        ans: 1
      },
      {
        q: "What is chain-of-thought prompting?",
        opts: [
          "A CSS framework",
          "Breaking down reasoning steps to improve LLM accuracy",
          "A database query",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is few-shot prompting?",
        opts: [
          "Using multiple cameras",
          "Providing a few examples in the prompt",
          "Reducing model size",
          "Limiting response length"
        ],
        ans: 1
      },
      {
        q: "What is temperature in LLM settings?",
        opts: [
          "A CSS property",
          "Controls randomness of outputs — higher = more creative",
          "A database setting",
          "A network parameter"
        ],
        ans: 1
      },
      {
        q: "What is a system prompt?",
        opts: [
          "A database trigger",
          "Initial instructions setting the AI's behavior and constraints",
          "A CSS rule",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 46,
    title: "LangChain & RAG Applications",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "5.4 hours",
    level: "intermediate",
    description: "Build powerful LLM applications with LangChain. Chains, agents, RAG pipelines, vector databases, and multi-model orchestration.",
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "langchain",
      "rag",
      "vector database",
      "llm",
      "agents"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "LangChain Core — Models, Prompts & Chains",
        dur: "55 min",
        yt: "nE2pA8QsdkU"
      },
      {
        title: "Vector Stores & RAG Pipelines",
        dur: "85 min",
        yt: "z1PG5XQhu54"
      },
      {
        title: "Agents, Tools & Multi-Model Orchestration",
        dur: "105 min",
        yt: "kGS74cd0Bq0"
      },
      {
        title: "Building Production LangChain Apps",
        dur: "79 min",
        yt: "X1OLFGNjZkI"
      }
    ],
    reading: [
      {
        title: "What is LangChain?",
        body: "LangChain is a framework for developing applications powered by language models, enabling chaining calls and connecting to external data.",
        points: [
          "Chains compose multiple LLM calls in sequence",
          "Agents decide which tools to use for tasks",
          "RAG retrieves relevant docs before generation",
          "Memory maintains conversation state"
        ]
      },
      {
        title: "RAG Architecture",
        body: "Retrieval-Augmented Generation combines retrieval with generation for accurate, context-aware responses.",
        points: [
          "Documents are chunked and embedded",
          "Vector database stores embeddings for similarity search",
          "User query retrieves relevant chunks",
          "LLM generates answer based on retrieved context"
        ]
      }
    ],
    quiz: [
      {
        q: "What is LangChain?",
        opts: [
          "A database",
          "A framework for building LLM applications",
          "A CSS library",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What does RAG stand for?",
        opts: [
          "Random Access Generation",
          "Retrieval-Augmented Generation",
          "Rapid Application Growth",
          "Real API Gateway"
        ],
        ans: 1
      },
      {
        q: "What is a vector database used for?",
        opts: [
          "Storing images",
          "Storing and searching embeddings for similarity",
          "Storing SQL tables",
          "Storing logs"
        ],
        ans: 1
      },
      {
        q: "What is a LangChain agent?",
        opts: [
          "A database agent",
          "An entity that decides which tools to use to complete a task",
          "A CSS selector",
          "A network proxy"
        ],
        ans: 1
      },
      {
        q: "What is chunking in RAG?",
        opts: [
          "A CSS framework",
          "Splitting documents into smaller pieces for retrieval",
          "A database operation",
          "A JavaScript method"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 47,
    title: "Hugging Face Transformers",
    instructor: "Oduye Emmanuel",
    category: "AI & Machine Learning",
    duration: "6.1 hours",
    level: "intermediate",
    description: "Master the Hugging Face ecosystem. Transformers library, model hub, tokenizers, pipelines, fine-tuning, and deployment with spaces.",
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "huggingface",
      "transformers",
      "model hub",
      "tokenizers",
      "pipelines"
    ],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "Hugging Face Ecosystem Overview",
        dur: "45 min",
        yt: "oMNs9C8cdWA"
      },
      {
        title: "Transformers Library — pipelines, models, tokenizers",
        dur: "90 min",
        yt: "1wlnMfmW_RY"
      },
      {
        title: "Fine-Tuning with Trainer API",
        dur: "120 min",
        yt: "7H_Mr_RPq44"
      },
      {
        title: "Model Hub, Spaces & Deployment",
        dur: "111 min",
        yt: "ldS9C5tFZSU"
      }
    ],
    reading: [
      {
        title: "The Hugging Face Ecosystem",
        body: "Hugging Face is the hub for pretrained models, datasets, and tools for ML.",
        points: [
          "50,000+ pretrained models available",
          "AutoModel loads any model from a single line",
          "Datasets library provides efficient data loading",
          "Spaces host ML apps for free"
        ]
      },
      {
        title: "Transformers Library Basics",
        body: "The transformers library provides thousands of pretrained models with a unified API.",
        points: [
          "Pipeline abstracts preprocessing, inference, postprocessing",
          "Tokenizer handles text-to-tensor conversion",
          "Trainer simplifies fine-tuning loops",
          "Push to Hub enables model sharing"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Hugging Face?",
        opts: [
          "A CSS framework",
          "A platform for ML models, datasets, and tools",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does a pipeline do in transformers?",
        opts: [
          "A CSS pipeline",
          "Combines preprocessing, model inference, and output processing",
          "A database connection",
          "A network route"
        ],
        ans: 1
      },
      {
        q: "What is a tokenizer?",
        opts: [
          "A CSS parser",
          "Converts text into numerical tokens for model input",
          "A database index",
          "A network encoder"
        ],
        ans: 1
      },
      {
        q: "What is the model hub?",
        opts: [
          "A hardware device",
          "A repository of thousands of pretrained models",
          "A CSS class",
          "A network switch"
        ],
        ans: 1
      },
      {
        q: "What is Gradio used for in Spaces?",
        opts: [
          "Training models",
          "Creating interactive ML demos",
          "Storing data",
          "Monitoring logs"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 48,
    title: "R for Data Science",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "9.5 hours",
    level: "intermediate",
    description: "Master data science with R. Tidyverse, dplyr, ggplot2, statistical modeling, RMarkdown, and interactive dashboards with Shiny.",
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "r",
      "tidyverse",
      "ggplot2",
      "dplyr",
      "statistics"
    ],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "R Basics & Tidyverse Fundamentals",
        dur: "110 min",
        yt: "_V8eKsto3Ug"
      },
      {
        title: "Data Wrangling with dplyr & tidyr",
        dur: "135 min",
        yt: "yTOIe1W4LwU"
      },
      {
        title: "Visualization with ggplot2",
        dur: "145 min",
        yt: "HPJn1CMH4TY"
      },
      {
        title: "Statistical Modeling & Shiny Apps",
        dur: "180 min",
        yt: "NP0G0YMEy18"
      }
    ],
    reading: [
      {
        title: "Why R for Data Science?",
        body: "R is a language built for statistical computing and graphics, with the richest ecosystem for data analysis.",
        points: [
          "Tidyverse provides consistent, chainable data tools",
          "ggplot2 creates publication-quality graphics",
          "RMarkdown combines code, output, and narrative",
          "Shiny builds interactive web apps in pure R"
        ]
      },
      {
        title: "The Tidyverse",
        body: "The tidyverse is a collection of R packages designed for data science.",
        points: [
          "dplyr for data manipulation — filter, mutate, summarize",
          "tidyr for data tidying — pivot, spread, separate",
          "ggplot2 for declarative graphics",
          "readr for fast data import"
        ]
      }
    ],
    quiz: [
      {
        q: "Which package does data manipulation in R?",
        opts: [
          "ggplot2",
          "dplyr",
          "tidyr",
          "shiny"
        ],
        ans: 1
      },
      {
        q: "What is ggplot2 used for?",
        opts: [
          "Data manipulation",
          "Statistical modeling",
          "Data visualization",
          "Web apps"
        ],
        ans: 2
      },
      {
        q: "What is the pipe operator in R?",
        opts: [
          ">>",
          "%>%",
          "|>",
          "=>"
        ],
        ans: 1
      },
      {
        q: "What is RMarkdown?",
        opts: [
          "A CSS framework",
          "A format for creating dynamic documents with R",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is Shiny?",
        opts: [
          "A CSS theme",
          "An R package for building interactive web apps",
          "A database type",
          "A network tool"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 49,
    title: "Data Storytelling & Visualization",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "4.1 hours",
    level: "beginner",
    description: "Transform data into compelling stories. Design principles, chart selection, narrative structure, and presentation techniques for data.",
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "storytelling",
      "visualization",
      "presentation",
      "charts",
      "narrative"
    ],
    preview:"OEV8gMkCHXQ",
    lessons: [
      {
        title: "The Power of Data Storytelling",
        dur: "25 min",
        yt: "pU0D1_sCqC4"
      },
      {
        title: "Chart Types & When to Use Them",
        dur: "55 min",
        yt: "qWWolJJV1YE"
      },
      {
        title: "Design Principles for Data Viz",
        dur: "70 min",
        yt: "a6rRtVmAY6c"
      },
      {
        title: "Crafting a Narrative & Presenting Data",
        dur: "96 min",
        yt: "qQ11iR3TTHo"
      }
    ],
    reading: [
      {
        title: "Why Data Storytelling?",
        body: "Data alone doesn't drive decisions — stories do. A compelling narrative makes data memorable and actionable.",
        points: [
          "Humans remember stories better than statistics",
          "Context gives numbers meaning",
          "Visual hierarchy guides attention",
          "Simplicity beats complexity in communication"
        ]
      },
      {
        title: "Choosing the Right Chart",
        body: "The right chart type depends on your data and message.",
        points: [
          "Bar charts compare categories",
          "Line charts show trends over time",
          "Scatter plots reveal correlations",
          "Heatmaps display density and patterns"
        ]
      }
    ],
    quiz: [
      {
        q: "What is data storytelling?",
        opts: [
          "Making up data",
          "Combining data, visuals, and narrative to communicate insights",
          "Coding in SQL",
          "Building databases"
        ],
        ans: 1
      },
      {
        q: "Which chart shows trends over time?",
        opts: [
          "Bar chart",
          "Pie chart",
          "Line chart",
          "Scatter plot"
        ],
        ans: 2
      },
      {
        q: "What is pre-attentive processing?",
        opts: [
          "A CSS animation",
          "Visual properties the brain processes instantly",
          "A database query",
          "A JavaScript method"
        ],
        ans: 1
      },
      {
        q: "What makes a data visualization effective?",
        opts: [
          "Lots of colors",
          "Clear message, minimal clutter, appropriate chart type",
          "Complex animations",
          "Small text labels"
        ],
        ans: 1
      },
      {
        q: "What is the 3-second rule in dashboards?",
        opts: [
          "Refresh every 3 seconds",
          "A viewer should grasp the main insight in 3 seconds",
          "Limit to 3 charts",
          "3 data points maximum"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 50,
    title: "Time Series Analysis",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "6.7 hours",
    level: "advanced",
    description: "Analyze and forecast time series data with Python. ARIMA, Prophet, LSTMs, seasonal decomposition, and anomaly detection.",
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "time series",
      "forecasting",
      "arima",
      "prophet",
      "lstm"
    ],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "Time Series Fundamentals & Decomposition",
        dur: "65 min",
        yt: "_tJ5Yue6zsY"
      },
      {
        title: "ARIMA & SARIMA Models",
        dur: "95 min",
        yt: "3UmyHed0iYE"
      },
      {
        title: "Prophet & Machine Learning Approaches",
        dur: "110 min",
        yt: "i9ak6nmwVXQ"
      },
      {
        title: "LSTMs for Time Series & Anomaly Detection",
        dur: "132 min",
        yt: "6JbUw5MsYcY"
      }
    ],
    reading: [
      {
        title: "What is Time Series Analysis?",
        body: "Time series analysis examines data points collected over time to extract patterns and forecast future values.",
        points: [
          "Trend shows long-term direction",
          "Seasonality captures repeating patterns",
          "Cycles are non-fixed-length patterns",
          "Residuals are irregular components"
        ]
      },
      {
        title: "Forecasting Methods",
        body: "Different methods suit different types of time series data.",
        points: [
          "ARIMA models autoregressive and moving average components",
          "Prophet handles seasonality and holidays automatically",
          "LSTM networks learn complex temporal dependencies",
          "Cross-validation prevents look-ahead bias"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a time series?",
        opts: [
          "A CSS animation",
          "Data points indexed in time order",
          "A database table",
          "A JavaScript array"
        ],
        ans: 1
      },
      {
        q: "What does ARIMA stand for?",
        opts: [
          "Autoregressive Integrated Moving Average",
          "Array of Random Integrated Model Arrays",
          "Auto-Regressive Input Model Array",
          "Automatic Regression and Index Mapping"
        ],
        ans: 0
      },
      {
        q: "What is seasonality in time series?",
        opts: [
          "A CSS property",
          "Regular patterns that repeat at fixed intervals",
          "A database function",
          "A network delay"
        ],
        ans: 1
      },
      {
        q: "Who created Prophet?",
        opts: [
          "Google",
          "Meta",
          "Amazon",
          "Microsoft"
        ],
        ans: 1
      },
      {
        q: "What is stationarity?",
        opts: [
          "A CSS position",
          "A time series with constant statistical properties over time",
          "A database state",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 51,
    title: "Big Data with Apache Spark",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "10.4 hours",
    level: "advanced",
    description: "Process massive datasets with Apache Spark. RDDs, DataFrames, Spark SQL, MLlib, streaming, and cluster deployment on cloud.",
    img: "https://images.pexels.com/photos/37685036/pexels-photo-37685036.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "spark",
      "big data",
      "pyspark",
      "rdd",
      "dataframe"
    ],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "Spark Architecture & RDDs",
        dur: "95 min",
        yt: "zIeON1hBDm0"
      },
      {
        title: "DataFrames & Spark SQL",
        dur: "145 min",
        yt: "DsHMf7V7cpI"
      },
      {
        title: "MLlib for Distributed Machine Learning",
        dur: "180 min",
        yt: "ZrhPkuELUYI"
      },
      {
        title: "Structured Streaming & Cluster Deployment",
        dur: "204 min",
        yt: "goLVXY3sFhM"
      }
    ],
    reading: [
      {
        title: "What is Apache Spark?",
        body: "Spark is a unified analytics engine for large-scale data processing, running up to 100x faster than Hadoop MapReduce.",
        points: [
          "In-memory processing for speed",
          "Lazy evaluation optimizes execution plans",
          "Fault-tolerant via lineage",
          "Unified batch, streaming, SQL, ML"
        ]
      },
      {
        title: "RDD vs DataFrame",
        body: "DataFrames are the modern, optimized API for Spark.",
        points: [
          "RDDs are low-level, typed, and unstructured",
          "DataFrames have schema and query optimization",
          "Catalyst optimizer improves DataFrame performance",
          "Tungsten provides efficient memory management"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Apache Spark?",
        opts: [
          "A CSS framework",
          "A unified analytics engine for big data processing",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is an RDD?",
        opts: [
          "Resilient Distributed Dataset — the fundamental Spark data structure",
          "A CSS rule",
          "A database index",
          "A network route"
        ],
        ans: 0
      },
      {
        q: "What does lazy evaluation mean in Spark?",
        opts: [
          "Code runs slowly",
          "Transformations are not executed until an action is called",
          "Only runs at night",
          "Evaluates lazily"
        ],
        ans: 1
      },
      {
        q: "What is PySpark?",
        opts: [
          "A CSS framework",
          "Python API for Apache Spark",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is Spark SQL used for?",
        opts: [
          "CSS styling",
          "Querying structured data using SQL syntax within Spark",
          "Database administration",
          "Network monitoring"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 52,
    title: "Data Warehousing & ETL",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "7.8 hours",
    level: "intermediate",
    description: "Design and build modern data warehouses. Star/snowflake schemas, ETL pipelines, data modeling, Snowflake, BigQuery, and Redshift.",
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "data warehouse",
      "etl",
      "snowflake",
      "bigquery",
      "data modeling"
    ],
    preview:"zsjvFFKOm3c",
    lessons: [
      {
        title: "Data Warehouse Architecture & Design",
        dur: "72 min",
        yt: "VgLb8nSrxpA"
      },
      {
        title: "Dimensional Modeling — Star & Snowflake Schemas",
        dur: "95 min",
        yt: "WzCbET8jytA"
      },
      {
        title: "ETL Pipelines with dbt & Airflow",
        dur: "165 min",
        yt: "neJBZCyT_6A"
      },
      {
        title: "Cloud Warehouses — Snowflake, BigQuery, Redshift",
        dur: "136 min",
        yt: "u5fHcorqL2k"
      }
    ],
    reading: [
      {
        title: "Data Warehouse Concepts",
        body: "A data warehouse is a centralized repository for structured, cleansed data from multiple sources optimized for analytics.",
        points: [
          "ETL extracts, transforms, and loads data",
          "Star schemas center on fact tables with dimension tables",
          "Snowflake schemas normalize dimensions",
          "OLAP optimizes for read-heavy analytical queries"
        ]
      },
      {
        title: "Modern Cloud Warehouses",
        body: "Cloud data warehouses offer scalability and zero-maintenance.",
        points: [
          "Snowflake separates storage and compute",
          "BigQuery is serverless with automatic scaling",
          "Redshift is petabyte-scale columnar storage",
          "All support SQL and pay-per-query models"
        ]
      }
    ],
    quiz: [
      {
        q: "What does ETL stand for?",
        opts: [
          "Extract, Transform, Load",
          "Execute, Transfer, Log",
          "Export, Test, Link",
          "Evaluate, Track, Label"
        ],
        ans: 0
      },
      {
        q: "What is a star schema?",
        opts: [
          "A CSS design",
          "A fact table surrounded by dimension tables",
          "A network topology",
          "A programming paradigm"
        ],
        ans: 1
      },
      {
        q: "What is dbt?",
        opts: [
          "A CSS framework",
          "Data build tool — transforms data in warehouse using SQL",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What separates Snowflake from traditional databases?",
        opts: [
          "CSS support",
          "Separation of storage and compute",
          "Built-in IDE",
          "Mobile support"
        ],
        ans: 1
      },
      {
        q: "What is OLAP?",
        opts: [
          "Online Analytical Processing — for complex queries and reporting",
          "Online Application Platform",
          "Offline Log Analysis Protocol",
          "Open Loop Application Processing"
        ],
        ans: 0
      }
    ]
  },
  {
    id: 53,
    title: "Apache Airflow — Data Pipelines",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "5.2 hours",
    level: "intermediate",
    description: "Orchestrate complex data workflows with Apache Airflow. DAGs, operators, sensors, task dependencies, monitoring, and best practices.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "airflow",
      "dag",
      "pipeline",
      "orchestration",
      "etl"
    ],
    preview:"zsjvFFKOm3c",
    lessons: [
      {
        title: "Airflow Architecture & DAG Fundamentals",
        dur: "48 min",
        yt: "3YFqc4GjnFo"
      },
      {
        title: "Operators, Sensors & Hooks",
        dur: "72 min",
        yt: "BShTqdnYyqg"
      },
      {
        title: "Task Dependencies, Branching & SubDAGs",
        dur: "88 min",
        yt: "NKZBN3xnntk"
      },
      {
        title: "Monitoring, Alerting & Production Deployment",
        dur: "104 min",
        yt: "Hm8iM5j3VEo"
      }
    ],
    reading: [
      {
        title: "What is Airflow?",
        body: "Apache Airflow is a platform to programmatically author, schedule, and monitor workflows as directed acyclic graphs (DAGs).",
        points: [
          "DAGs define task dependencies as Python code",
          "Operators define individual tasks (Python, Bash, SQL)",
          "Scheduler triggers tasks based on dependencies",
          "Web UI provides monitoring and debugging"
        ]
      },
      {
        title: "Building Reliable Pipelines",
        body: "Production data pipelines require robust design patterns.",
        points: [
          "Idempotency ensures tasks can be retried safely",
          "Backfilling reruns past DAG runs",
          "Task retries handle transient failures",
          "SLAs alert when tasks take too long"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a DAG in Airflow?",
        opts: [
          "A CSS rule",
          "A Directed Acyclic Graph defining task dependencies",
          "A database index",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What is an operator in Airflow?",
        opts: [
          "A CSS class",
          "A component that defines a single task in a DAG",
          "A database query",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What does a sensor do in Airflow?",
        opts: [
          "Measures temperature",
          "Waits for a certain condition before proceeding",
          "Sends notifications",
          "Logs metrics"
        ],
        ans: 1
      },
      {
        q: "What is backfilling?",
        opts: [
          "A CSS property",
          "Running past DAG intervals to catch up on historical data",
          "A database backup",
          "A network configuration"
        ],
        ans: 1
      },
      {
        q: "What is the Airflow scheduler?",
        opts: [
          "A CSS framework",
          "The component that triggers DAG tasks based on schedule",
          "A database type",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 54,
    title: "Tableau — Dashboard Mastery",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "6.3 hours",
    level: "intermediate",
    description: "Create stunning data dashboards with Tableau. Data connections, calculated fields, parameters, LOD expressions, and storytelling.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "tableau",
      "dashboard",
      "visualization",
      "bi",
      "analytics"
    ],
    preview:"zsjvFFKOm3c",
    lessons: [
      {
        title: "Tableau Desktop — Getting Started",
        dur: "55 min",
        yt: "1c1l8kMZB5E"
      },
      {
        title: "Calculated Fields, Parameters & Sets",
        dur: "85 min",
        yt: "SjgKAzB3e2U"
      },
      {
        title: "LOD Expressions & Advanced Analytics",
        dur: "110 min",
        yt: "gH6rRaLPeP8"
      },
      {
        title: "Dashboard Design, Actions & Storytelling",
        dur: "128 min",
        yt: "SuJUiBodRGE"
      }
    ],
    reading: [
      {
        title: "Why Tableau?",
        body: "Tableau is the leading visual analytics platform, letting anyone connect, visualize, and share data insights.",
        points: [
          "Drag-and-drop interface for rapid exploration",
          "Connects to 100+ data sources",
          "Calculated fields enable custom metrics",
          "Tableau Public is free for sharing"
        ]
      },
      {
        title: "Key Tableau Concepts",
        body: "Master these concepts to build powerful dashboards.",
        points: [
          "Dimensions are categorical fields (blue pills)",
          "Measures are numeric fields (green pills)",
          "Marks card controls visual properties",
          "Dual-axis charts combine two chart types"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Tableau?",
        opts: [
          "A database",
          "A visual analytics platform for data insights",
          "A CSS framework",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a dimension in Tableau?",
        opts: [
          "A CSS property",
          "A categorical field that segments data",
          "A numeric value",
          "A filter type"
        ],
        ans: 1
      },
      {
        q: "What is a calculated field?",
        opts: [
          "A database column",
          "A custom field created with formulas",
          "A dashboard element",
          "A chart type"
        ],
        ans: 1
      },
      {
        q: "What does LOD stand for?",
        opts: [
          "Level of Detail",
          "Limit of Data",
          "Layer of Design",
          "List of Dimensions"
        ],
        ans: 0
      },
      {
        q: "What is Tableau Public?",
        opts: [
          "A paid enterprise tool",
          "A free version for sharing visualizations publicly",
          "A database connector",
          "A mobile app"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 55,
    title: "Statistical Analysis with Python",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "7.5 hours",
    level: "intermediate",
    description: "Master statistical analysis using Python. Hypothesis testing, regression, ANOVA, Bayesian methods, and statistical modeling with SciPy and statsmodels.",
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "statistics",
      "hypothesis testing",
      "regression",
      "scipy",
      "statsmodels"
    ],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "Descriptive Statistics & Probability",
        dur: "75 min",
        yt: "LkX8DpRvYAU"
      },
      {
        title: "Hypothesis Testing — t-tests, Chi-square, ANOVA",
        dur: "110 min",
        yt: "CbaJ0Am2myE"
      },
      {
        title: "Linear & Logistic Regression",
        dur: "130 min",
        yt: "0E1FIJXbFQM"
      },
      {
        title: "Bayesian Statistics & Practical Applications",
        dur: "135 min",
        yt: "BfE5QphKdak"
      }
    ],
    reading: [
      {
        title: "Why Statistics Matters",
        body: "Statistics is the foundation of data science — it provides the tools to draw conclusions from data.",
        points: [
          "Descriptive stats summarize data (mean, median, std)",
          "Inferential stats draw conclusions about populations",
          "p-values assess evidence against null hypotheses",
          "Confidence intervals quantify estimate uncertainty"
        ]
      },
      {
        title: "Regression Analysis",
        body: "Regression models relationships between variables.",
        points: [
          "Linear regression predicts continuous outcomes",
          "Logistic regression predicts binary outcomes",
          "R-squared measures model fit",
          "Assumptions: linearity, independence, homoscedasticity"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a p-value?",
        opts: [
          "A CSS property",
          "The probability of observing data as extreme as the null hypothesis is true",
          "A database value",
          "A network metric"
        ],
        ans: 1
      },
      {
        q: "What does ANOVA test?",
        opts: [
          "A CSS animation",
          "Differences between means of three or more groups",
          "A database join",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is the null hypothesis?",
        opts: [
          "A CSS selector",
          "A default assumption that there is no effect or difference",
          "A database query",
          "A JavaScript null value"
        ],
        ans: 1
      },
      {
        q: "What does R-squared measure?",
        opts: [
          "A CSS color",
          "The proportion of variance explained by the model",
          "A database size",
          "A network speed"
        ],
        ans: 1
      },
      {
        q: "What is a confidence interval?",
        opts: [
          "A CSS range",
          "A range that likely contains the true population parameter",
          "A database constraint",
          "A network range"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 56,
    title: "Data Engineering Foundations",
    instructor: "Oduye Emmanuel",
    category: "Data Science",
    duration: "8.9 hours",
    level: "intermediate",
    description: "Build robust data pipelines and infrastructure. Batch and stream processing, data lakes, schema design, orchestration, and monitoring.",
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "data engineering",
      "pipeline",
      "data lake",
      "batch processing",
      "streaming"
    ],
    preview:"zsjvFFKOm3c",
    lessons: [
      {
        title: "Data Engineering Landscape & Architecture",
        dur: "65 min",
        yt: "qWru-b6mO8U"
      },
      {
        title: "Batch Pipelines & Orchestration",
        dur: "130 min",
        yt: "wxhJzDMfcm0"
      },
      {
        title: "Stream Processing with Kafka & Flink",
        dur: "170 min",
        yt: "jAXp8VlVkMQ"
      },
      {
        title: "Data Quality, Monitoring & Governance",
        dur: "169 min",
        yt: "NcHm9uPnV4c"
      }
    ],
    reading: [
      {
        title: "What is Data Engineering?",
        body: "Data engineering builds the infrastructure to generate, store, process, and serve data at scale.",
        points: [
          "Data pipelines move data from sources to destinations",
          "Data lakes store raw data in native format",
          "Data warehouses store structured, processed data",
          "Schema-on-read vs schema-on-write trade-offs"
        ]
      },
      {
        title: "Batch vs Stream Processing",
        body: "Different processing modes suit different use cases.",
        points: [
          "Batch processing runs on intervals (hourly, daily)",
          "Stream processing handles data in real-time",
          "Lambda architecture combines batch and stream",
          "Kappa architecture uses streaming only"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a data pipeline?",
        opts: [
          "A CSS pipeline",
          "A series of steps that move and transform data",
          "A database connection",
          "A network route"
        ],
        ans: 1
      },
      {
        q: "What is a data lake?",
        opts: [
          "A CSS framework",
          "A repository storing raw data in native format",
          "A type of database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is Apache Kafka used for?",
        opts: [
          "A CSS animation",
          "Distributed streaming platform for real-time data",
          "A database",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is the difference between ETL and ELT?",
        opts: [
          "No difference",
          "ETL transforms before loading, ELT transforms after",
          "ELT is faster",
          "ETL is newer"
        ],
        ans: 1
      },
      {
        q: "What is data governance?",
        opts: [
          "A CSS rule",
          "Managing data availability, usability, integrity, and security",
          "A database constraint",
          "A network policy"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 57,
    title: "Network Security Fundamentals",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "8.3 hours",
    level: "intermediate",
    description: "Master network security concepts. Firewalls, IDS/IPS, VPNs, network segmentation, zero trust, and secure network architecture design.",
    img: "https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "network security",
      "firewall",
      "ids",
      "vpn",
      "zero trust"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Network Fundamentals Review",
        dur: "75 min",
        yt: "bHNr9x4ONqE"
      },
      {
        title: "Firewalls, IDS/IPS & Network Segmentation",
        dur: "135 min",
        yt: "TiVW0rBx3Ng"
      },
      {
        title: "VPNs, TLS & Secure Protocols",
        dur: "120 min",
        yt: "U3SJqG0qFio"
      },
      {
        title: "Zero Trust Architecture & Best Practices",
        dur: "168 min",
        yt: "F9Q3BQ6JalI"
      }
    ],
    reading: [
      {
        title: "Defense in Depth",
        body: "Network security requires multiple layers of defense — no single control is sufficient.",
        points: [
          "Perimeter firewalls filter incoming traffic",
          "IDS/IPS detect and prevent intrusions",
          "Network segmentation limits blast radius",
          "Zero trust assumes no implicit trust"
        ]
      },
      {
        title: "Secure Protocols",
        body: "Encryption protects data in transit from eavesdropping and tampering.",
        points: [
          "TLS/SSL encrypts web traffic",
          "IPSec secures IP communications",
          "SSH provides secure remote access",
          "WireGuard is a modern, fast VPN protocol"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a firewall?",
        opts: [
          "A heating device",
          "A network security system that monitors and controls traffic",
          "A type of virus",
          "A programming language"
        ],
        ans: 1
      },
      {
        q: "What does IDS stand for?",
        opts: [
          "Intrusion Detection System",
          "Internet Data Service",
          "Internal Domain Security",
          "Integrated Defense System"
        ],
        ans: 0
      },
      {
        q: "What is zero trust?",
        opts: [
          "A CSS framework",
          "A security model that never trusts, always verifies",
          "A database type",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does a VPN do?",
        opts: [
          "Accelerates internet",
          "Creates an encrypted tunnel for secure communication",
          "Blocks all traffic",
          "Installs antivirus"
        ],
        ans: 1
      },
      {
        q: "What is network segmentation?",
        opts: [
          "A CSS grid",
          "Dividing a network into smaller subnetworks to improve security",
          "A database partition",
          "A routing protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 58,
    title: "Cloud Security — AWS, Azure, GCP",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "9.6 hours",
    level: "intermediate",
    description: "Secure cloud infrastructure across AWS, Azure, and GCP. IAM, encryption, compliance, monitoring, and incident response in the cloud.",
    img: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "cloud security",
      "aws",
      "azure",
      "gcp",
      "iam"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Cloud Security Shared Responsibility Model",
        dur: "55 min",
        yt: "Vw0pE8xrN7E"
      },
      {
        title: "IAM, Policies & Access Control",
        dur: "145 min",
        yt: "YQbW7CHHcG0"
      },
      {
        title: "Data Encryption & Key Management",
        dur: "170 min",
        yt: "qKZwqXw5oJ4"
      },
      {
        title: "Monitoring, Compliance & Incident Response",
        dur: "206 min",
        yt: "3tO8dM9KjE8"
      }
    ],
    reading: [
      {
        title: "Cloud Security Challenges",
        body: "Cloud security requires understanding the shared responsibility model — the provider secures the cloud, you secure what's in it.",
        points: [
          "AWS, Azure, GCP all follow shared responsibility",
          "IAM is the foundation of cloud access control",
          "Encrypt data at rest and in transit",
          "CloudTrail/Activity Logs provide audit trails"
        ]
      },
      {
        title: "Key Cloud Security Services",
        body: "Each provider offers similar security services under different names.",
        points: [
          "AWS: IAM, KMS, GuardDuty, Security Hub",
          "Azure: Entra ID, Key Vault, Defender for Cloud",
          "GCP: Cloud IAM, Cloud KMS, Security Command Center",
          "All support compliance frameworks (SOC2, HIPAA)"
        ]
      }
    ],
    quiz: [
      {
        q: "What is the shared responsibility model?",
        opts: [
          "A pricing model",
          "Cloud provider secures infrastructure, customer secures their data and config",
          "A deployment strategy",
          "A networking model"
        ],
        ans: 1
      },
      {
        q: "What does IAM stand for?",
        opts: [
          "Identity and Access Management",
          "Integrated Application Model",
          "Internet Access Method",
          "Infrastructure Administration Module"
        ],
        ans: 0
      },
      {
        q: "What is AWS KMS?",
        opts: [
          "A CSS framework",
          "Key Management Service — manages encryption keys",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is the principle of least privilege?",
        opts: [
          "A CSS selector",
          "Granting only the minimum permissions needed",
          "A database constraint",
          "A network rule"
        ],
        ans: 1
      },
      {
        q: "What is CloudTrail?",
        opts: [
          "A hiking path",
          "AWS service for logging API activity and governance",
          "A database",
          "A compute service"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 59,
    title: "CompTIA Security+ Prep",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "14.5 hours",
    level: "beginner",
    description: "Prepare for the CompTIA Security+ certification. Covers threats, vulnerabilities, cryptography, identity management, and risk management.",
    img: "https://images.pexels.com/photos/5380655/pexels-photo-5380655.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "comptia",
      "security+",
      "certification",
      "threats",
      "risk management"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Threats, Attacks & Vulnerabilities",
        dur: "210 min",
        yt: "VlqQ8RKplrw"
      },
      {
        title: "Architecture & Design",
        dur: "240 min",
        yt: "jZg6B45E1H0"
      },
      {
        title: "Implementation — Cryptography, Identity, Securing Networks",
        dur: "285 min",
        yt: "Ujf2CkYqPE0"
      },
      {
        title: "Operations & Incident Response",
        dur: "135 min",
        yt: "kJp_D3WhE_Y"
      }
    ],
    reading: [
      {
        title: "Security+ Overview",
        body: "Security+ is the most popular entry-level cybersecurity certification, validating baseline security skills.",
        points: [
          "Covers threats, architecture, implementation, operations",
          "No prerequisites required",
          "Globally recognized for security fundamentals",
          "Renewal required every 3 years"
        ]
      },
      {
        title: "Key Domains",
        body: "The exam tests across six domains of security knowledge.",
        points: [
          "Attacks and vulnerabilities (24%)",
          "Architecture and design (21%)",
          "Implementation (25%)",
          "Operations and incident response (16%)"
        ]
      }
    ],
    quiz: [
      {
        q: "What is CompTIA Security+?",
        opts: [
          "A programming language",
          "An entry-level cybersecurity certification",
          "A database system",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a phishing attack?",
        opts: [
          "A network scan",
          "A social engineering attack to steal credentials",
          "A type of firewall",
          "An encryption method"
        ],
        ans: 1
      },
      {
        q: "What is multi-factor authentication?",
        opts: [
          "A CSS framework",
          "Using two or more verification methods",
          "A database constraint",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is ransomware?",
        opts: [
          "A CSS animation",
          "Malware that encrypts data and demands payment",
          "A firewall rule",
          "A backup tool"
        ],
        ans: 1
      },
      {
        q: "What is the CIA triad?",
        opts: [
          "A CSS framework",
          "Confidentiality, Integrity, Availability — core security principles",
          "A database model",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 60,
    title: "Digital Forensics & Incident Response",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "11.2 hours",
    level: "intermediate",
    description: "Investigate security incidents and collect digital evidence. Disk forensics, memory analysis, network forensics, and chain of custody.",
    img: "https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "forensics",
      "incident response",
      "dfir",
      "memory analysis",
      "evidence"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Incident Response Lifecycle",
        dur: "95 min",
        yt: "e6GGgSJ8ZnM"
      },
      {
        title: "Disk & File System Forensics",
        dur: "195 min",
        yt: "o7OnUCl2b3I"
      },
      {
        title: "Memory Forensics with Volatility",
        dur: "175 min",
        yt: "8mGBNL9MqL0"
      },
      {
        title: "Network Forensics & Malware Triage",
        dur: "207 min",
        yt: "6ph8Xo3DWJ4"
      }
    ],
    reading: [
      {
        title: "DFIR Fundamentals",
        body: "Digital Forensics and Incident Response (DFIR) combines investigation of security breaches with collecting and preserving evidence.",
        points: [
          "Preserve evidence integrity with write blockers",
          "Chain of custody documents evidence handling",
          "Incident response follows: Preparation, Detection, Containment, Eradication, Recovery",
          "Post-incident reviews improve future response"
        ]
      },
      {
        title: "Forensic Acquisition",
        body: "Proper evidence collection is critical for legal admissibility.",
        points: [
          "Create forensic images (bit-for-bit copies)",
          "Verify integrity with hash values (SHA-256)",
          "Memory captures volatile data",
          "Network logs provide timeline context"
        ]
      }
    ],
    quiz: [
      {
        q: "What does DFIR stand for?",
        opts: [
          "Digital Forensics and Incident Response",
          "Data File Integrity Review",
          "Dynamic Firewall Inspection Report",
          "Domain Forensics and Internet Routing"
        ],
        ans: 0
      },
      {
        q: "What is chain of custody?",
        opts: [
          "A CSS property",
          "Documentation tracking evidence handling from collection to court",
          "A database index",
          "A network path"
        ],
        ans: 1
      },
      {
        q: "What is Volatility?",
        opts: [
          "A CSS framework",
          "An open-source memory forensics framework",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a forensic image?",
        opts: [
          "A photograph",
          "A bit-for-bit copy of a storage device",
          "A PNG file",
          "A memory dump"
        ],
        ans: 1
      },
      {
        q: "What is the first step in incident response?",
        opts: [
          "Recovery",
          "Preparation",
          "Containment",
          "Eradication"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 61,
    title: "Cryptography & Encryption",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "6.8 hours",
    level: "intermediate",
    description: "Understand cryptographic principles. Symmetric and asymmetric encryption, hashing, digital signatures, PKI, TLS, and quantum-safe cryptography.",
    img: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "cryptography",
      "encryption",
      "pki",
      "tls",
      "hashing"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Symmetric vs Asymmetric Encryption",
        dur: "65 min",
        yt: "r4HQE4B36uc"
      },
      {
        title: "Hashing Algorithms & Digital Signatures",
        dur: "85 min",
        yt: "R4kSafz1jYY"
      },
      {
        title: "PKI, Certificates & TLS",
        dur: "120 min",
        yt: "0RYal5vR7jY"
      },
      {
        title: "Quantum Computing & Post-Quantum Cryptography",
        dur: "138 min",
        yt: "8AYx7H9cPGg"
      }
    ],
    reading: [
      {
        title: "Cryptography Basics",
        body: "Cryptography is the science of secure communication, transforming readable data into unreadable form and back.",
        points: [
          "Symmetric encryption uses one shared key (AES)",
          "Asymmetric encryption uses public/private key pairs (RSA)",
          "Hashing creates one-way, fixed-length digests",
          "Digital signatures provide authenticity and non-repudiation"
        ]
      },
      {
        title: "PKI & TLS",
        body: "Public Key Infrastructure enables secure communication on the internet.",
        points: [
          "Certificate Authorities issue digital certificates",
          "TLS handshake establishes encrypted session",
          "Certificate chains validate trust",
          "Let's Encrypt provides free automated certificates"
        ]
      }
    ],
    quiz: [
      {
        q: "What is symmetric encryption?",
        opts: [
          "A CSS property",
          "Same key used for encryption and decryption",
          "A network protocol",
          "A database function"
        ],
        ans: 1
      },
      {
        q: "What is RSA?",
        opts: [
          "A CSS framework",
          "An asymmetric encryption algorithm",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a hash function?",
        opts: [
          "A CSS class",
          "A one-way function producing a fixed-size digest",
          "A database index",
          "A network route"
        ],
        ans: 1
      },
      {
        q: "What is a digital signature?",
        opts: [
          "A stylized name",
          "A cryptographic technique verifying authenticity and integrity",
          "A database constraint",
          "An email feature"
        ],
        ans: 1
      },
      {
        q: "What does TLS stand for?",
        opts: [
          "Transport Layer Security",
          "Transfer Level Socket",
          "Transmission Line Standard",
          "Ternary Logic System"
        ],
        ans: 0
      }
    ]
  },
  {
    id: 62,
    title: "DevSecOps — Secure CI/CD",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "5.5 hours",
    level: "intermediate",
    description: "Integrate security into DevOps pipelines. SAST, DAST, dependency scanning, secret management, container security, and compliance as code.",
    img: "https://images.pexels.com/photos/5380655/pexels-photo-5380655.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "devsecops",
      "ci/cd",
      "sast",
      "dast",
      "security scanning"
    ],
    preview:"scEDHsr3APg",
    lessons: [
      {
        title: "DevSecOps Mindset & Shift Left",
        dur: "38 min",
        yt: "J2Lel3E3mDc"
      },
      {
        title: "SAST, DAST & Dependency Scanning",
        dur: "95 min",
        yt: "1TvRwD5OF7w"
      },
      {
        title: "Container Security & Secret Management",
        dur: "115 min",
        yt: "PK3wj5QU5gE"
      },
      {
        title: "Compliance as Code & Supply Chain Security",
        dur: "82 min",
        yt: "F7PlBN3RBxI"
      }
    ],
    reading: [
      {
        title: "What is DevSecOps?",
        body: "DevSecOps integrates security practices into DevOps pipelines, making security everyone's responsibility.",
        points: [
          "Shift left — find vulnerabilities early in development",
          "Automate security checks in CI/CD pipelines",
          "Security gates prevent vulnerable code from reaching production",
          "Culture of shared security ownership"
        ]
      },
      {
        title: "Security Scanning Tools",
        body: "Automated tools identify vulnerabilities at different stages.",
        points: [
          "SAST scans source code for flaws",
          "DAST tests running applications",
          "SCA identifies vulnerable dependencies",
          "Container scanning finds OS and library vulnerabilities"
        ]
      }
    ],
    quiz: [
      {
        q: "What does DevSecOps integrate?",
        opts: [
          "Development and Marketing",
          "Security into DevOps practices",
          "Desktop and Mobile",
          "Databases and Servers"
        ],
        ans: 1
      },
      {
        q: "What does SAST stand for?",
        opts: [
          "Static Application Security Testing",
          "Simple API Security Tool",
          "Software Architecture Security Test",
          "System Application Scan Tool"
        ],
        ans: 0
      },
      {
        q: "What is a security gate in CI/CD?",
        opts: [
          "A physical door",
          "An automated checkpoint that blocks vulnerable code",
          "A database constraint",
          "A network firewall"
        ],
        ans: 1
      },
      {
        q: "What is secret management?",
        opts: [
          "A CSS framework",
          "Securely storing and rotating API keys, passwords, certificates",
          "A database technique",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is supply chain security?",
        opts: [
          "A logistics term",
          "Protecting against vulnerabilities from third-party dependencies",
          "A manufacturing process",
          "A retail concept"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 63,
    title: "Bug Bounty Hunting",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "7.4 hours",
    level: "intermediate",
    description: "Learn bug bounty hunting from scratch. Reconnaissance, vulnerability discovery, exploit development, and responsible disclosure.",
    img: "https://images.pexels.com/photos/5380597/pexels-photo-5380597.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "bug bounty",
      "hacking",
      "reconnaissance",
      "vulnerability",
      "disclosure"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Bug Bounty Platforms & Methodology",
        dur: "45 min",
        yt: "wQSD1GfLE5c"
      },
      {
        title: "Reconnaissance — Subdomains, Endpoints & Tech Stack",
        dur: "105 min",
        yt: "I7NjLq-DDso"
      },
      {
        title: "Common Bug Classes — XSS, SQLi, SSRF, IDOR",
        dur: "165 min",
        yt: "PuQBsWBazIc"
      },
      {
        title: "Writing Reports & Responsible Disclosure",
        dur: "129 min",
        yt: "NTA2Q8iAd5A"
      }
    ],
    reading: [
      {
        title: "What is Bug Bounty?",
        body: "Bug bounty programs reward security researchers for finding and reporting vulnerabilities responsibly.",
        points: [
          "Platforms: HackerOne, Bugcrowd, Intigriti",
          "Scope defines what's in/out of testing",
          "Bounties range from $50 to $100,000+",
          "Responsible disclosure protects users"
        ]
      },
      {
        title: "Common Web Vulnerabilities",
        body: "Understanding common bug classes is essential for finding them.",
        points: [
          "XSS injects malicious scripts into web pages",
          "SQLi manipulates database queries",
          "SSRF tricks servers into making internal requests",
          "IDOR accesses unauthorized resources by modifying IDs"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a bug bounty?",
        opts: [
          "A CSS bug fix",
          "A reward program for finding security vulnerabilities",
          "A type of pesticide",
          "A coding error"
        ],
        ans: 1
      },
      {
        q: "What is XSS?",
        opts: [
          "A CSS framework",
          "Cross-Site Scripting — injecting scripts into web pages",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What does SQLi stand for?",
        opts: [
          "SQL Injection",
          "Structured Query Language Interface",
          "Sequel Query Integration",
          "Simple Query Language Interpreter"
        ],
        ans: 0
      },
      {
        q: "What does reconnaissance mean in hacking?",
        opts: [
          "A CSS reset",
          "Information gathering about the target",
          "Deleting files",
          "Installing tools"
        ],
        ans: 1
      },
      {
        q: "What is responsible disclosure?",
        opts: [
          "A legal term",
          "Reporting vulnerabilities privately to give time to fix before public",
          "Publicly posting bugs",
          "Ignoring found bugs"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 64,
    title: "Malware Analysis & Reverse Engineering",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "10.8 hours",
    level: "advanced",
    description: "Analyze malicious software using static and dynamic analysis. Disassembly, debugging, sandboxing, and reverse engineering techniques.",
    img: "https://images.pexels.com/photos/5380603/pexels-photo-5380603.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "malware analysis",
      "reverse engineering",
      "debugging",
      "disassembly",
      "sandbox"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "Malware Classification & Analysis Setup",
        dur: "85 min",
        yt: "dLh9iBapMP8"
      },
      {
        title: "Static Analysis — Strings, PE Headers, Disassembly",
        dur: "165 min",
        yt: "VQ7YICqK5c4"
      },
      {
        title: "Dynamic Analysis — Debugging & Sandboxing",
        dur: "195 min",
        yt: "XrBCI2fRLt4"
      },
      {
        title: "Advanced Reverse Engineering with IDA Pro & Ghidra",
        dur: "203 min",
        yt: "f8cPJb7tZgo"
      }
    ],
    reading: [
      {
        title: "Malware Analysis Approaches",
        body: "Malware analysis determines what a malicious sample does and how to defend against it.",
        points: [
          "Static analysis examines code without running it",
          "Dynamic analysis runs malware in a controlled sandbox",
          "Behavioral analysis observes system changes",
          "Code analysis reverses the actual logic"
        ]
      },
      {
        title: "Analysis Tools",
        body: "Specialized tools enable deep analysis of malicious binaries.",
        points: [
          "IDA Pro and Ghidra for disassembly",
          "x64dbg and OllyDbg for dynamic debugging",
          "Cuckoo Sandbox for automated analysis",
          "Process Monitor and Process Explorer for behavior"
        ]
      }
    ],
    quiz: [
      {
        q: "What is malware analysis?",
        opts: [
          "A CSS debugger",
          "Studying malicious software to understand its behavior and purpose",
          "A database optimization",
          "A network scan"
        ],
        ans: 1
      },
      {
        q: "What is a sandbox?",
        opts: [
          "A children's toy",
          "An isolated environment to safely run suspicious code",
          "A CSS property",
          "A database type"
        ],
        ans: 1
      },
      {
        q: "What is Ghidra?",
        opts: [
          "A CSS framework",
          "A reverse engineering tool developed by the NSA",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is static analysis?",
        opts: [
          "Running the malware",
          "Examining code without execution",
          "Monitoring network traffic",
          "Analyzing logs"
        ],
        ans: 1
      },
      {
        q: "What is a PE file?",
        opts: [
          "A CSS class",
          "Portable Executable — Windows executable file format",
          "A database extension",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 65,
    title: "SOC Analyst — Monitoring & Defense",
    instructor: "Oduye Emmanuel",
    category: "Cybersecurity",
    duration: "9.3 hours",
    level: "intermediate",
    description: "Become a Security Operations Center analyst. SIEM, threat hunting, log analysis, alert triage, escalation procedures, and incident handling.",
    img: "https://images.pexels.com/photos/5380655/pexels-photo-5380655.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "soc",
      "siem",
      "threat hunting",
      "log analysis",
      "triage"
    ],
    preview:"-Gk40UjMYgI",
    lessons: [
      {
        title: "SOC Operations & Tier Model",
        dur: "55 min",
        yt: "zuuInXKsVrI"
      },
      {
        title: "SIEM — Splunk, Elastic, Sentinel",
        dur: "165 min",
        yt: "V27S1hFAdQ4"
      },
      {
        title: "Alert Triage & Escalation Procedures",
        dur: "145 min",
        yt: "Qcp_d6gjC2M"
      },
      {
        title: "Threat Hunting & Threat Intelligence",
        dur: "193 min",
        yt: "5dYSMqHrYHs"
      }
    ],
    reading: [
      {
        title: "SOC Overview",
        body: "A Security Operations Center monitors, detects, analyzes, and responds to security incidents 24/7.",
        points: [
          "Tier 1 triages alerts and determines false positives",
          "Tier 2 investigates confirmed incidents in depth",
          "Tier 3 handles advanced threats and forensics",
          "SIEM aggregates and correlates security events"
        ]
      },
      {
        title: "SIEM Fundamentals",
        body: "Security Information and Event Management systems are the core of SOC operations.",
        points: [
          "Log collection from networks, endpoints, cloud",
          "Correlation rules detect attack patterns",
          "Dashboards provide real-time visibility",
          "SOAR automates response actions"
        ]
      }
    ],
    quiz: [
      {
        q: "What does SOC stand for?",
        opts: [
          "Security Operations Center",
          "System Operations Console",
          "Service Oriented Computing",
          "Secure Online Connection"
        ],
        ans: 0
      },
      {
        q: "What is a SIEM?",
        opts: [
          "A CSS framework",
          "Security Information and Event Management system",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does a Tier 1 SOC analyst do?",
        opts: [
          "Reverse engineering malware",
          "Triaging alerts and identifying false positives",
          "Building security tools",
          "Managing firewalls"
        ],
        ans: 1
      },
      {
        q: "What is threat hunting?",
        opts: [
          "A CSS selector",
          "Proactively searching for threats not detected by automated tools",
          "A database query",
          "A network scan"
        ],
        ans: 1
      },
      {
        q: "What is SOAR?",
        opts: [
          "A CSS animation",
          "Security Orchestration, Automation and Response",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 66,
    title: "Social Media Strategy & Management",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "5.8 hours",
    level: "beginner",
    description: "Build a data-driven social media strategy. Platform selection, content planning, scheduling, community management, and performance analytics.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "social media",
      "strategy",
      "content",
      "analytics",
      "community"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "Social Media Landscape & Platform Selection",
        dur: "45 min",
        yt: "ZnxJwMGus_0"
      },
      {
        title: "Content Calendar & Strategy Development",
        dur: "95 min",
        yt: "S0r5CTQVGDY"
      },
      {
        title: "Community Management & Engagement",
        dur: "108 min",
        yt: "hQfB1E8ZPZc"
      },
      {
        title: "Analytics, Reporting & ROI Measurement",
        dur: "100 min",
        yt: "R85aRD_tfGQ"
      }
    ],
    reading: [
      {
        title: "Social Media Strategy Framework",
        body: "A successful social media strategy aligns platform choices, content types, and engagement tactics with business goals.",
        points: [
          "Define SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound)",
          "Choose platforms where your audience is active",
          "Content mix: education, entertainment, inspiration, promotion",
          "Consistent posting cadence builds audience"
        ]
      },
      {
        title: "Key Metrics",
        body: "Measure what matters — vanity metrics don't tell the full story.",
        points: [
          "Engagement rate measures interaction quality",
          "Reach vs impressions: reach is unique viewers",
          "Click-through rate (CTR) measures content effectiveness",
          "Conversion rate tracks business impact"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a content calendar?",
        opts: [
          "A CSS grid",
          "A schedule planning when and what to post on social media",
          "A database table",
          "A network timeline"
        ],
        ans: 1
      },
      {
        q: "What is engagement rate?",
        opts: [
          "A CSS animation",
          "The level of interaction (likes, comments, shares) relative to followers",
          "A database index",
          "A network metric"
        ],
        ans: 1
      },
      {
        q: "What does SMART stand for?",
        opts: [
          "Simple, Measurable, Achievable, Relevant, Time-bound",
          "Social Media Analytics Review Tool",
          "Strategic Marketing And Reporting Technique",
          "Systematic Media Analysis and Response Tracking"
        ],
        ans: 0
      },
      {
        q: "What is a social media algorithm?",
        opts: [
          "A CSS framework",
          "The system that determines which content users see",
          "A database query",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is community management?",
        opts: [
          "A CSS class",
          "Building and engaging with an audience through interactions",
          "A database administration",
          "A network configuration"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 67,
    title: "Content Marketing Masterclass",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "6.2 hours",
    level: "beginner",
    description: "Create compelling content that drives traffic and conversions. Blogging, video, podcasts, SEO-optimized content, and distribution strategies.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "content marketing",
      "blogging",
      "seo",
      "video",
      "distribution"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "Content Marketing Strategy & Funnel",
        dur: "52 min",
        yt: "5qJFOiGBlkQ"
      },
      {
        title: "Writing SEO-Optimized Blog Posts",
        dur: "95 min",
        yt: "InRlMwhVg4E"
      },
      {
        title: "Video & Podcast Content Creation",
        dur: "115 min",
        yt: "K_7jYF_T7oA"
      },
      {
        title: "Content Distribution & Repurposing",
        dur: "110 min",
        yt: "hz1QHUmdpXo"
      }
    ],
    reading: [
      {
        title: "Content Marketing Fundamentals",
        body: "Content marketing attracts and retains customers by creating and distributing valuable, relevant content.",
        points: [
          "Blog posts improve SEO and establish authority",
          "Video content drives highest engagement",
          "Case studies provide social proof",
          "E-books and guides capture leads"
        ]
      },
      {
        title: "Content Distribution Channels",
        body: "Great content needs great distribution to be seen.",
        points: [
          "SEO brings organic search traffic",
          "Social sharing amplifies reach",
          "Email newsletters nurture subscribers",
          "Paid promotion accelerates results"
        ]
      }
    ],
    quiz: [
      {
        q: "What is content marketing?",
        opts: [
          "A CSS framework",
          "Creating valuable content to attract and retain customers",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a lead magnet?",
        opts: [
          "A CSS animation",
          "Free valuable content offered in exchange for contact info",
          "A database query",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is evergreen content?",
        opts: [
          "A CSS property",
          "Content that remains relevant and valuable over time",
          "A database index",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is content repurposing?",
        opts: [
          "A CSS reset",
          "Adapting existing content into different formats for different channels",
          "A database migration",
          "A network change"
        ],
        ans: 1
      },
      {
        q: "What is a content management system?",
        opts: [
          "A CSS framework",
          "Software for creating and managing digital content (e.g., WordPress)",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 68,
    title: "Affiliate Marketing",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "4.5 hours",
    level: "beginner",
    description: "Earn commissions by promoting products. Niche selection, affiliate networks, content strategies, traffic generation, and scaling for passive income.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: [
      "affiliate marketing",
      "commission",
      "passive income",
      "niche",
      "networks"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "Affiliate Marketing Fundamentals",
        dur: "35 min",
        yt: "fFyKOV_y2EU"
      },
      {
        title: "Niche Selection & Affiliate Networks",
        dur: "65 min",
        yt: "kJdJWJR8H0k"
      },
      {
        title: "Content Strategies for Affiliates",
        dur: "88 min",
        yt: "VKPz71Rf9RY"
      },
      {
        title: "Traffic Generation & Scaling",
        dur: "82 min",
        yt: "BUY6WfaRdAY"
      }
    ],
    reading: [
      {
        title: "How Affiliate Marketing Works",
        body: "Affiliates earn commissions by promoting other companies' products through unique referral links.",
        points: [
          "Join affiliate networks (Amazon, ShareASale, CJ)",
          "Choose products relevant to your audience",
          "Disclose affiliate relationships legally",
          "Promote through honest, valuable content"
        ]
      },
      {
        title: "Building an Affiliate Business",
        body: "Treat affiliate marketing as a real business for sustainable income.",
        points: [
          "Build an audience first, promote second",
          "Review products honestly to build trust",
          "Diversify across multiple programs",
          "Track and optimize what converts"
        ]
      }
    ],
    quiz: [
      {
        q: "How do affiliates earn money?",
        opts: [
          "By selling products directly",
          "Through commissions on sales via referral links",
          "By creating software",
          "Through advertising"
        ],
        ans: 1
      },
      {
        q: "What is the FTC disclosure requirement?",
        opts: [
          "A CSS rule",
          "Legally required disclosure when you earn commissions from recommendations",
          "A database constraint",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a niche site?",
        opts: [
          "A CSS framework",
          "A website focused on a specific topic for affiliate marketing",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is CPC in affiliate marketing?",
        opts: [
          "Cost Per Click",
          "Content Per Channel",
          "Commission Per Customer",
          "Click Per Conversion"
        ],
        ans: 0
      },
      {
        q: "What is conversion rate?",
        opts: [
          "A CSS animation",
          "The percentage of visitors who complete a desired action",
          "A database query",
          "A network metric"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 69,
    title: "Google Analytics & Data-Driven Marketing",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "5.6 hours",
    level: "intermediate",
    description: "Master Google Analytics 4. Track website traffic, user behavior, conversions, and create data-driven marketing strategies with actionable insights.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "google analytics",
      "ga4",
      "tracking",
      "conversions",
      "data-driven"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "GA4 Setup & Property Configuration",
        dur: "55 min",
        yt: "MLdRciR1FdQ"
      },
      {
        title: "Reports — Acquisition, Engagement, Monetization",
        dur: "95 min",
        yt: "s2JBLotpn5k"
      },
      {
        title: "Events, Conversions & Custom Dimensions",
        dur: "105 min",
        yt: "hDHzB4pNmG4"
      },
      {
        title: "Making Data-Driven Marketing Decisions",
        dur: "81 min",
        yt: "TSkKWhUGc-g"
      }
    ],
    reading: [
      {
        title: "GA4 vs Universal Analytics",
        body: "GA4 is the next generation of Google Analytics, built on an event-based data model.",
        points: [
          "Event-based instead of session-based",
          "Cross-platform tracking (web + app)",
          "Privacy-centric with no IP logging",
          "Predictive metrics powered by ML"
        ]
      },
      {
        title: "Key GA4 Features",
        body: "GA4 offers powerful analysis tools beyond basic reporting.",
        points: [
          "Explorations for custom analysis",
          "Funnel analysis visualizes user journeys",
          "Segment comparison for audience insights",
          "Audiences can be exported to Google Ads"
        ]
      }
    ],
    quiz: [
      {
        q: "What is GA4?",
        opts: [
          "A CSS framework",
          "Google Analytics 4 — the latest version of Google Analytics",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "How does GA4 track data?",
        opts: [
          "Pageviews only",
          "Event-based data model",
          "Sessions only",
          "Time-based"
        ],
        ans: 1
      },
      {
        q: "What is a conversion in GA4?",
        opts: [
          "A CSS transform",
          "An event marked as a key business action",
          "A database join",
          "A network change"
        ],
        ans: 1
      },
      {
        q: "What is user engagement in GA4?",
        opts: [
          "A CSS animation",
          "A metric measuring how users interact with your site/app",
          "A database query",
          "A network metric"
        ],
        ans: 1
      },
      {
        q: "What is an exploration in GA4?",
        opts: [
          "A CSS property",
          "A custom analysis tool for deep data investigation",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 70,
    title: "Facebook & Instagram Ads",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "6.9 hours",
    level: "intermediate",
    description: "Run profitable ad campaigns on Facebook and Instagram. Audience targeting, creative strategy, ad formats, bidding, and retargeting.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "facebook ads",
      "instagram ads",
      "social media ads",
      "targeting",
      "retargeting"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "Facebook Ads Manager & Campaign Structure",
        dur: "65 min",
        yt: "UMX70NuPKaY"
      },
      {
        title: "Audience Targeting — Custom & Lookalike Audiences",
        dur: "95 min",
        yt: "tbQchVWgT8M"
      },
      {
        title: "Creative Strategy & Ad Formats",
        dur: "115 min",
        yt: "GT7l_qKB6uA"
      },
      {
        title: "Optimization, Bidding & Retargeting",
        dur: "139 min",
        yt: "30ZbG5vOW24"
      }
    ],
    reading: [
      {
        title: "Facebook Ads Ecosystem",
        body: "Facebook (Meta) Ads is the most powerful social advertising platform with unparalleled targeting capabilities.",
        points: [
          "Campaign > Ad Set > Ad structure",
          "Custom audiences target existing customers",
          "Lookalike audiences find similar users",
          "Pixel tracks conversions and enables retargeting"
        ]
      },
      {
        title: "Optimization Strategies",
        body: "Successful campaigns require continuous testing and optimization.",
        points: [
          "A/B test creatives, audiences, and placements",
          "CBO (Campaign Budget Optimization) distributes budget",
          "Frequency cap prevents ad fatigue",
          "Retargeting converts warm audiences"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a Facebook Pixel?",
        opts: [
          "A CSS pixel unit",
          "A tracking code that collects data for ads optimization and retargeting",
          "A database field",
          "A network address"
        ],
        ans: 1
      },
      {
        q: "What is a lookalike audience?",
        opts: [
          "A CSS class",
          "An audience that resembles your existing customers",
          "A database query",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What does CBO stand for?",
        opts: [
          "Campaign Budget Optimization",
          "Content Based Optimization",
          "Creative Budget Option",
          "Cost Based Ordering"
        ],
        ans: 0
      },
      {
        q: "What is retargeting?",
        opts: [
          "A CSS animation",
          "Showing ads to users who previously interacted with your brand",
          "A database operation",
          "A network configuration"
        ],
        ans: 1
      },
      {
        q: "What is the Facebook Ads Manager?",
        opts: [
          "A CSS framework",
          "The tool for creating and managing Facebook ad campaigns",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 71,
    title: "TikTok & Short-Form Video Marketing",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "4.2 hours",
    level: "beginner",
    description: "Master TikTok and short-form video marketing. Algorithm insights, content creation, viral strategies, ads, and building a following.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "tiktok",
      "short-form video",
      "viral",
      "reels",
      "content creation"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "TikTok Algorithm & Content Strategy",
        dur: "32 min",
        yt: "O1q9q1f7Htg"
      },
      {
        title: "Creating Engaging Short Videos",
        dur: "65 min",
        yt: "_5XvkCWQJQo"
      },
      {
        title: "TikTok Ads & Spark Ads",
        dur: "75 min",
        yt: "Mf6PcbGDiO4"
      },
      {
        title: "Growth Tactics & Cross-Platform Distribution",
        dur: "80 min",
        yt: "Vf4w5lk3U8U"
      }
    ],
    reading: [
      {
        title: "Why Short-Form Video?",
        body: "Short-form video is the most engaging content format, with TikTok leading the trend followed by Instagram Reels and YouTube Shorts.",
        points: [
          "TikTok algorithm prioritizes content over followers",
          "Viral potential is higher than any other platform",
          "Attention spans favor 15-60 second videos",
          "Authentic content outperforms polished production"
        ]
      },
      {
        title: "TikTok Best Practices",
        body: "Success on TikTok requires understanding its unique culture.",
        points: [
          "Hook viewers in the first 3 seconds",
          "Use trending sounds and effects",
          "Post consistently (1-3 times daily)",
          "Engage with comments to boost algorithm"
        ]
      }
    ],
    quiz: [
      {
        q: "What makes TikTok's algorithm unique?",
        opts: [
          "A CSS framework",
          "It recommends content based on interest, not just followers",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What are Spark Ads on TikTok?",
        opts: [
          "A CSS animation",
          "Ads that boost existing organic posts from a creator's account",
          "A database query",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is the ideal TikTok video length?",
        opts: [
          "30+ minutes",
          "15-60 seconds for maximum engagement",
          "5+ minutes",
          "2+ hours"
        ],
        ans: 1
      },
      {
        q: "What are trending sounds on TikTok?",
        opts: [
          "A CSS audio property",
          "Popular audio clips that boost video discoverability",
          "A database field",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is the TikTok Creator Marketplace?",
        opts: [
          "A CSS framework",
          "A platform connecting brands with TikTok creators",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 72,
    title: "Copywriting for Marketers",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "4.8 hours",
    level: "beginner",
    description: "Write persuasive copy that converts. Landing pages, email campaigns, ad copy, CTAs, brand voice, and A/B testing for optimization.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "copywriting",
      "persuasive",
      "conversion",
      "email",
      "cta"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "The Art of Persuasive Copywriting",
        dur: "35 min",
        yt: "6AZsC_jHKKg"
      },
      {
        title: "Headlines, Hooks & CTAs",
        dur: "65 min",
        yt: "nVNbgF3tAe8"
      },
      {
        title: "Email Copywriting & Sequences",
        dur: "95 min",
        yt: "rE7_ImZXm4A"
      },
      {
        title: "Landing Page Copy & A/B Testing",
        dur: "93 min",
        yt: "hG0Nq7Lv5Lg"
      }
    ],
    reading: [
      {
        title: "Copywriting Fundamentals",
        body: "Copywriting is the art of writing text that persuades people to take action — buy, sign up, click, or share.",
        points: [
          "Know your audience's pain points and desires",
          "Benefits sell better than features",
          "Clear is better than clever",
          "Strong CTAs drive action"
        ]
      },
      {
        title: "The AIDA Formula",
        body: "AIDA is the classic copywriting framework: Attention, Interest, Desire, Action.",
        points: [
          "Attention: grab with compelling headlines",
          "Interest: engage with relevant information",
          "Desire: create emotional connection to benefits",
          "Action: clear, urgent call-to-action"
        ]
      }
    ],
    quiz: [
      {
        q: "What is copywriting?",
        opts: [
          "Writing code",
          "Writing persuasive text to drive action",
          "Copyrighting content",
          "Copying text"
        ],
        ans: 1
      },
      {
        q: "What does CTA stand for?",
        opts: [
          "Call to Action",
          "Click Through Analysis",
          "Content Testing Application",
          "Conversion Tracking Algorithm"
        ],
        ans: 0
      },
      {
        q: "What is the AIDA model?",
        opts: [
          "A CSS framework",
          "Attention, Interest, Desire, Action — a copywriting framework",
          "A database model",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is A/B testing in copywriting?",
        opts: [
          "A CSS selector",
          "Testing two versions of copy to see which performs better",
          "A database join",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is a value proposition?",
        opts: [
          "A CSS property",
          "A clear statement of the benefits a customer gets from your product",
          "A database index",
          "A network metric"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 73,
    title: "Growth Hacking Techniques",
    instructor: "Oduye Emmanuel",
    category: "Marketing",
    duration: "5.3 hours",
    level: "intermediate",
    description: "Apply growth hacking strategies for rapid user acquisition. Viral loops, product-led growth, experimentation frameworks, and growth metrics.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "growth hacking",
      "acquisition",
      "viral",
      "experimentation",
      "product-led"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "Growth Hacking Mindset & Frameworks",
        dur: "38 min",
        yt: "zMcM5G5TEHY"
      },
      {
        title: "Viral Loops & Referral Programs",
        dur: "72 min",
        yt: "oohJcBh-5vI"
      },
      {
        title: "Product-Led Growth & Funnel Optimization",
        dur: "115 min",
        yt: "SJN-dHUV3M0"
      },
      {
        title: "Experimentation & Growth Metrics",
        dur: "93 min",
        yt: "yF_I0Zb2eRM"
      }
    ],
    reading: [
      {
        title: "What is Growth Hacking?",
        body: "Growth hacking is a data-driven, experiment-driven approach to rapid user acquisition and retention, often using unconventional tactics.",
        points: [
          "Focus on scalable and repeatable growth",
          "Run high-tempo experiments",
          "Product-led growth uses the product itself to acquire users",
          "Virality: built-in sharing mechanisms"
        ]
      },
      {
        title: "The Pirate Metrics (AARRR)",
        body: "AARRR framework tracks the user journey: Acquisition, Activation, Retention, Revenue, Referral.",
        points: [
          "Acquisition: how users find you",
          "Activation: first meaningful experience",
          "Retention: users come back",
          "Revenue: monetization",
          "Referral: users bring others"
        ]
      }
    ],
    quiz: [
      {
        q: "What is growth hacking?",
        opts: [
          "A CSS hack",
          "Experiment-driven strategies for rapid user growth",
          "A database exploit",
          "A network attack"
        ],
        ans: 1
      },
      {
        q: "What does AARRR stand for?",
        opts: [
          "A CSS framework",
          "Acquisition, Activation, Retention, Revenue, Referral",
          "A database model",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a viral loop?",
        opts: [
          "A CSS animation",
          "A mechanism where users invite others, creating exponential growth",
          "A database query",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is product-led growth?",
        opts: [
          "A CSS property",
          "Growth driven by the product experience itself, not sales",
          "A database index",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is growth experimentation?",
        opts: [
          "A CSS reset",
          "Running controlled tests to find what drives growth",
          "A database migration",
          "A network change"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 74,
    title: "Entrepreneurship 101",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "6.5 hours",
    level: "beginner",
    description: "Launch and grow your own business. Idea validation, business models, funding, marketing, operations, and scaling strategies for startups.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "entrepreneurship",
      "startup",
      "business model",
      "funding",
      "scaling"
    ],
    preview:"knHjbAJfKS0",
    lessons: [
      {
        title: "Finding & Validating Business Ideas",
        dur: "65 min",
        yt: "0up4w42Bw4I"
      },
      {
        title: "Business Models & Lean Canvas",
        dur: "85 min",
        yt: "pN34FNbKMj0"
      },
      {
        title: "Funding — Bootstrapping, Angels, VC",
        dur: "110 min",
        yt: "BmYv8EJ2C0E"
      },
      {
        title: "Operations, Marketing & Scaling",
        dur: "130 min",
        yt: "XSp3pP4Hb28"
      }
    ],
    reading: [
      {
        title: "The Entrepreneurial Journey",
        body: "Entrepreneurship is about creating value by solving problems at scale. It requires resilience, adaptability, and continuous learning.",
        points: [
          "Validate demand before building anything",
          "Lean Startup methodology: build-measure-learn",
          "Minimum Viable Product (MVP) tests assumptions",
          "Pivot when data contradicts hypotheses"
        ]
      },
      {
        title: "Funding Stages",
        body: "Startups raise capital in stages as they grow and de-risk.",
        points: [
          "Pre-seed: founder's own money, friends and family",
          "Seed: angel investors, early-stage VCs",
          "Series A: proven product-market fit",
          "Series B+: scaling and expansion"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a startup?",
        opts: [
          "A small business",
          "A temporary organization designed to find a scalable business model",
          "A franchise",
          "A side project"
        ],
        ans: 1
      },
      {
        q: "What is the Lean Canvas?",
        opts: [
          "A CSS grid",
          "A one-page business plan template",
          "A database schema",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What does MVP stand for?",
        opts: [
          "Minimum Viable Product",
          "Most Valuable Player",
          "Maximum Vertical Potential",
          "Minimum Variable Process"
        ],
        ans: 0
      },
      {
        q: "What is product-market fit?",
        opts: [
          "A CSS property",
          "When a product satisfies strong market demand",
          "A database index",
          "A network metric"
        ],
        ans: 1
      },
      {
        q: "What is bootstrapping?",
        opts: [
          "A CSS framework",
          "Building a business without external funding",
          "A database technique",
          "A networking term"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 75,
    title: "Project Management with PMP",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "12.8 hours",
    level: "intermediate",
    description: "Master project management principles and prepare for PMP certification. Waterfall, Agile, risk management, stakeholder communication, and project lifecycle.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "pmp",
      "project management",
      "waterfall",
      "agile",
      "risk"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Project Management Framework & Lifecycle",
        dur: "125 min",
        yt: "XUxJ4m_vGmM"
      },
      {
        title: "Scope, Time & Cost Management",
        dur: "220 min",
        yt: "Vg5rRYf26dU"
      },
      {
        title: "Quality, Risk & Stakeholder Management",
        dur: "215 min",
        yt: "J5tFV3Ph0ko"
      },
      {
        title: "Agile, Hybrid & PMP Exam Prep",
        dur: "208 min",
        yt: "S8W4q3n55zI"
      }
    ],
    reading: [
      {
        title: "What is Project Management?",
        body: "Project management applies knowledge, skills, tools, and techniques to project activities to meet requirements.",
        points: [
          "Projects are temporary with a defined beginning and end",
          "Operations are ongoing and repetitive",
          "Triple constraint: scope, time, cost",
          "PMI defines standards through PMBOK Guide"
        ]
      },
      {
        title: "Key Process Groups",
        body: "The PMBOK Guide defines 5 process groups across 10 knowledge areas.",
        points: [
          "Initiating: define and authorize the project",
          "Planning: establish scope, objectives, and course of action",
          "Executing: complete work defined in the plan",
          "Monitoring & Controlling: track and adjust progress",
          "Closing: formally close the project"
        ]
      }
    ],
    quiz: [
      {
        q: "What does PMP stand for?",
        opts: [
          "Project Management Professional",
          "Program Management Plan",
          "Project Master Process",
          "Performance Management Protocol"
        ],
        ans: 0
      },
      {
        q: "What is the triple constraint?",
        opts: [
          "A CSS property",
          "Scope, time, and cost — the three competing project constraints",
          "A database constraint",
          "A network constraint"
        ],
        ans: 1
      },
      {
        q: "What is a work breakdown structure?",
        opts: [
          "A CSS grid",
          "A hierarchical decomposition of project deliverables",
          "A database schema",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What is the critical path?",
        opts: [
          "A CSS animation",
          "The longest sequence of dependent tasks determining project duration",
          "A database query",
          "A network route"
        ],
        ans: 1
      },
      {
        q: "What is a stakeholder?",
        opts: [
          "A CSS selector",
          "Anyone with an interest or influence in the project",
          "A database user",
          "A network node"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 76,
    title: "Agile & Scrum Masterclass",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "6.8 hours",
    level: "beginner",
    description: "Master Agile methodology and Scrum framework. Sprints, ceremonies, backlog management, Scrum roles, and scaling with SAFe and LeSS.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "agile",
      "scrum",
      "sprint",
      "backlog",
      "ceremonies"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Agile Mindset & Principles",
        dur: "45 min",
        yt: "Z9QbYZh1YXY"
      },
      {
        title: "Scrum Framework — Roles, Events, Artifacts",
        dur: "105 min",
        yt: "Xu3VgFg7fcM"
      },
      {
        title: "Backlog Management & User Stories",
        dur: "115 min",
        yt: "qh4fAeFHupU"
      },
      {
        title: "Scaling Agile — SAFe, LeSS, Nexus",
        dur: "143 min",
        yt: "IQS3I3cQyoE"
      }
    ],
    reading: [
      {
        title: "What is Agile?",
        body: "Agile is an iterative approach to project management and software development that delivers value incrementally.",
        points: [
          "Individuals and interactions over processes and tools",
          "Working software over comprehensive documentation",
          "Customer collaboration over contract negotiation",
          "Responding to change over following a plan"
        ]
      },
      {
        title: "Scrum In Practice",
        body: "Scrum is the most popular Agile framework with defined roles, events, and artifacts.",
        points: [
          "Product Owner manages the backlog",
          "Scrum Master facilitates the process",
          "Development Team self-organizes to deliver",
          "Sprints are time-boxed iterations (1-4 weeks)"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Agile?",
        opts: [
          "A CSS framework",
          "An iterative approach to project management focused on delivering value",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a Sprint in Scrum?",
        opts: [
          "A CSS animation",
          "A time-boxed iteration typically 1-4 weeks long",
          "A database transaction",
          "A network burst"
        ],
        ans: 1
      },
      {
        q: "What is a daily stand-up?",
        opts: [
          "A CSS property",
          "A daily 15-minute Scrum meeting to synchronize and plan",
          "A database query",
          "A network check"
        ],
        ans: 1
      },
      {
        q: "What is a product backlog?",
        opts: [
          "A CSS class",
          "An ordered list of everything needed in the product",
          "A database index",
          "A network queue"
        ],
        ans: 1
      },
      {
        q: "Who is the Scrum Master?",
        opts: [
          "A CSS selector",
          "The facilitator who ensures Scrum is understood and enacted",
          "A database admin",
          "A network manager"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 77,
    title: "Product Management Fundamentals",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "7.2 hours",
    level: "beginner",
    description: "Become a product manager. User research, product strategy, roadmapping, prioritization frameworks, stakeholder management, and go-to-market.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "product management",
      "roadmap",
      "prioritization",
      "user research",
      "strategy"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "What is Product Management?",
        dur: "42 min",
        yt: "8eUmfUa71Uc"
      },
      {
        title: "User Research & Problem Discovery",
        dur: "95 min",
        yt: "oXb8FMYxQSA"
      },
      {
        title: "Strategy, Roadmapping & Prioritization",
        dur: "145 min",
        yt: "MspJf3fGQMY"
      },
      {
        title: "Go-to-Market & Stakeholder Communication",
        dur: "150 min",
        yt: "C7dMT2YmZRg"
      }
    ],
    reading: [
      {
        title: "The Product Manager Role",
        body: "Product managers identify customer needs, define product vision, and work with engineering to deliver value.",
        points: [
          "PM is not a people manager — it's a product leader",
          "Bridge between business, technology, and design",
          "Responsible for product success, not just delivery",
          "Data-informed decision making"
        ]
      },
      {
        title: "Prioritization Frameworks",
        body: "PMs use frameworks to decide what to build next with limited resources.",
        points: [
          "RICE: Reach, Impact, Confidence, Effort",
          "MoSCoW: Must-have, Should-have, Could-have, Won't-have",
          "Kano Model: basic, performance, delight features",
          "Value vs Effort matrix for quick decisions"
        ]
      }
    ],
    quiz: [
      {
        q: "What does a product manager do?",
        opts: [
          "A CSS property",
          "Defines product vision, strategy, and works with teams to deliver value",
          "A database admin",
          "A network manager"
        ],
        ans: 1
      },
      {
        q: "What is a product roadmap?",
        opts: [
          "A CSS animation",
          "A strategic document outlining the planned product direction over time",
          "A database schema",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What does RICE stand for?",
        opts: [
          "Reach, Impact, Confidence, Effort",
          "Relative, Iterative, Comparative, Evaluative",
          "Real, Integrated, Comprehensive, Effective",
          "Random, Incremental, Calculated, Estimated"
        ],
        ans: 0
      },
      {
        q: "What is a user persona?",
        opts: [
          "A CSS class",
          "A fictional character representing a target user group",
          "A database record",
          "A network identity"
        ],
        ans: 1
      },
      {
        q: "What is the Kano Model?",
        opts: [
          "A CSS framework",
          "A framework categorizing features by customer satisfaction impact",
          "A database model",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 78,
    title: "Financial Analysis & Modeling",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "9.5 hours",
    level: "intermediate",
    description: "Build financial models and analyze company performance. Financial statements, valuation, DCF, LBO, sensitivity analysis, and investment decisions.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "financial analysis",
      "modeling",
      "valuation",
      "dcf",
      "investment"
    ],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "Financial Statements & Ratios",
        dur: "95 min",
        yt: "E-Hz4YfK6iA"
      },
      {
        title: "Building a Three-Statement Model",
        dur: "165 min",
        yt: "z_7fVSRhOYM"
      },
      {
        title: "DCF Valuation & Sensitivity Analysis",
        dur: "155 min",
        yt: "I3P7MfQy6Vc"
      },
      {
        title: "LBO Models & Investment Decisions",
        dur: "155 min",
        yt: "mQJID76I3Eo"
      }
    ],
    reading: [
      {
        title: "Financial Analysis Fundamentals",
        body: "Financial analysis uses historical data and projections to evaluate business performance and investment potential.",
        points: [
          "Income statement shows profitability",
          "Balance sheet shows assets, liabilities, equity",
          "Cash flow statement tracks cash movements",
          "Ratios provide insights into performance"
        ]
      },
      {
        title: "Valuation Methods",
        body: "Different approaches to determine what a company is worth.",
        points: [
          "DCF values future cash flows discounted to present",
          "Comparable company analysis uses market multiples",
          "Precedent transactions use past M&A deals",
          "LBO models private equity acquisition returns"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a DCF model?",
        opts: [
          "A CSS framework",
          "Discounted Cash Flow — valuing a company based on future cash flows",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does EBITDA stand for?",
        opts: [
          "Earnings Before Interest, Taxes, Depreciation, and Amortization",
          "Estimated Business Income and Transaction Analysis",
          "Earnings Based on Income and Tax Adjustments",
          "Enterprise Business Integration and Data Analysis"
        ],
        ans: 0
      },
      {
        q: "What is an LBO?",
        opts: [
          "A CSS animation",
          "Leveraged Buyout — acquiring a company using significant debt",
          "A database query",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a balance sheet?",
        opts: [
          "A CSS property",
          "A financial statement showing assets, liabilities, and equity",
          "A database table",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What is sensitivity analysis?",
        opts: [
          "A CSS selector",
          "Testing how changes in assumptions affect outcomes",
          "A database index",
          "A network metric"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 79,
    title: "Leadership & Team Management",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "6.2 hours",
    level: "beginner",
    description: "Develop leadership skills to inspire and manage teams. Communication, delegation, conflict resolution, coaching, and building high-performance culture.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "leadership",
      "management",
      "team building",
      "communication",
      "coaching"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Leadership Styles & Emotional Intelligence",
        dur: "55 min",
        yt: "Lt34lV_YhQo"
      },
      {
        title: "Effective Communication & Delegation",
        dur: "85 min",
        yt: "wR8Zxcf85aw"
      },
      {
        title: "Conflict Resolution & Difficult Conversations",
        dur: "98 min",
        yt: "jHspa5rAQGc"
      },
      {
        title: "Building High-Performance Teams",
        dur: "134 min",
        yt: "rKnK9lBLR4A"
      }
    ],
    reading: [
      {
        title: "What Makes a Great Leader?",
        body: "Leadership is not about position — it's about influencing others to achieve shared goals through inspiration and guidance.",
        points: [
          "Emotional intelligence is more important than IQ",
          "Great leaders listen more than they talk",
          "Trust is the foundation of effective leadership",
          "Adapt your style to the situation and person"
        ]
      },
      {
        title: "Management vs Leadership",
        body: "Management is about processes and control; leadership is about vision and inspiration.",
        points: [
          "Managers focus on efficiency and order",
          "Leaders focus on vision and change",
          "Both are essential for organizational success",
          "The best leaders also manage well"
        ]
      }
    ],
    quiz: [
      {
        q: "What is emotional intelligence?",
        opts: [
          "A CSS property",
          "The ability to recognize and manage your own and others' emotions",
          "A database index",
          "A network metric"
        ],
        ans: 1
      },
      {
        q: "What is the difference between a leader and a manager?",
        opts: [
          "No difference",
          "Leaders inspire and set vision, managers plan and control",
          "Leaders are higher ranked",
          "Managers never lead"
        ],
        ans: 1
      },
      {
        q: "What is delegation?",
        opts: [
          "A CSS assignment",
          "Assigning responsibility and authority to others to complete tasks",
          "A database operation",
          "A network function"
        ],
        ans: 1
      },
      {
        q: "What is the situational leadership model?",
        opts: [
          "A CSS framework",
          "Adapting leadership style based on team maturity and task",
          "A database model",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is active listening?",
        opts: [
          "A CSS selector",
          "Fully concentrating, understanding, responding, and remembering what someone says",
          "A database query",
          "A network term"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 80,
    title: "Sales Strategies & Negotiation",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "5.8 hours",
    level: "beginner",
    description: "Master B2B and B2C sales. Prospecting, qualifying, pitching, objection handling, closing techniques, and negotiation tactics for win-win outcomes.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "sales",
      "negotiation",
      "closing",
      "prospecting",
      "b2b"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Sales Process & Prospecting",
        dur: "52 min",
        yt: "4Bqay22QQWc"
      },
      {
        title: "Qualifying Leads & Discovery Calls",
        dur: "78 min",
        yt: "9ODI-N5LLto"
      },
      {
        title: "Pitching, Handling Objections & Closing",
        dur: "115 min",
        yt: "EVRuxOmaz38"
      },
      {
        title: "Negotiation Strategies & Win-Win Outcomes",
        dur: "103 min",
        yt: "s9f9GkSiS1A"
      }
    ],
    reading: [
      {
        title: "The Sales Process",
        body: "Sales is about understanding customer problems and offering solutions that create value.",
        points: [
          "Prospecting identifies potential customers",
          "Qualifying ensures they are a good fit",
          "Discovery uncovers needs and pain points",
          "Closing asks for the commitment"
        ]
      },
      {
        title: "Negotiation Fundamentals",
        body: "Effective negotiation creates value while building relationships.",
        points: [
          "BATNA: Best Alternative to a Negotiated Agreement",
          "ZOPA: Zone of Possible Agreement",
          "Separate people from the problem",
          "Focus on interests, not positions"
        ]
      }
    ],
    quiz: [
      {
        q: "What is prospecting in sales?",
        opts: [
          "A CSS search",
          "Identifying and reaching out to potential customers",
          "A database query",
          "A network scan"
        ],
        ans: 1
      },
      {
        q: "What does BANT stand for?",
        opts: [
          "Budget, Authority, Need, Timeline",
          "Best Alternative Negotiation Tactic",
          "Business Analysis and Negotiation Technique",
          "Basic Agreement Negotiation Tool"
        ],
        ans: 0
      },
      {
        q: "What is objection handling?",
        opts: [
          "A CSS exception",
          "Addressing customer concerns and reasons not to buy",
          "A database error",
          "A network issue"
        ],
        ans: 1
      },
      {
        q: "What is BATNA?",
        opts: [
          "A CSS animation",
          "Best Alternative to a Negotiated Agreement",
          "A database backup",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a closing technique?",
        opts: [
          "A CSS property",
          "A method to ask for the sale and finalize the deal",
          "A database constraint",
          "A network term"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 81,
    title: "Public Speaking & Communication",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "4.5 hours",
    level: "beginner",
    description: "Overcome fear and become a confident public speaker. Speech structure, storytelling, body language, visual aids, and handling Q&A sessions.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "public speaking",
      "communication",
      "presentation",
      "storytelling",
      "body language"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Conquering Public Speaking Anxiety",
        dur: "28 min",
        yt: "A3p2pL1pp9Y"
      },
      {
        title: "Structuring Compelling Speeches",
        dur: "65 min",
        yt: "83FpCYAmZyk"
      },
      {
        title: "Storytelling, Body Language & Visual Aids",
        dur: "88 min",
        yt: "eIho2B4rLrs"
      },
      {
        title: "Handling Q&A & Impromptu Speaking",
        dur: "89 min",
        yt: "FgLN5IVJ0Ts"
      }
    ],
    reading: [
      {
        title: "Why Public Speaking Matters",
        body: "Public speaking is the #1 skill for career advancement. It positions you as a leader and builds credibility.",
        points: [
          "75% of people fear public speaking — you're not alone",
          "Practice and preparation reduce anxiety",
          "Structure creates clarity for your audience",
          "Authenticity connects better than perfection"
        ]
      },
      {
        title: "Speech Structure",
        body: "A well-structured speech guides your audience through your message.",
        points: [
          "Tell them what you're going to say, say it, tell them what you said",
          "Open with a hook — story, question, or statistic",
          "Three main points maximum",
          "End with a memorable call-to-action"
        ]
      }
    ],
    quiz: [
      {
        q: "What is the most common fear?",
        opts: [
          "Heights",
          "Public speaking",
          "Spiders",
          "Flying"
        ],
        ans: 1
      },
      {
        q: "What is the 3-part speech structure?",
        opts: [
          "A CSS layout",
          "Tell them, tell them, tell them what you told them",
          "A database schema",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a hook in a speech?",
        opts: [
          "A CSS animation",
          "An engaging opening that captures audience attention",
          "A database trigger",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is impromptu speaking?",
        opts: [
          "A CSS property",
          "Speaking without preparation, on the spot",
          "A database query",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is the PREP method?",
        opts: [
          "A CSS framework",
          "Point, Reason, Example, Point — a framework for concise responses",
          "A database procedure",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 82,
    title: "Lean Six Sigma",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "7.8 hours",
    level: "intermediate",
    description: "Improve processes and reduce waste with Lean Six Sigma. DMAIC methodology, statistical process control, value stream mapping, and Green Belt prep.",
    img: "https://images.pexels.com/photos/7693721/pexels-photo-7693721.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "lean",
      "six sigma",
      "dmaic",
      "process improvement",
      "green belt"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Lean Principles & Waste Reduction",
        dur: "72 min",
        yt: "xV5PB7w66o0"
      },
      {
        title: "Six Sigma & DMAIC Methodology",
        dur: "125 min",
        yt: "zBkF0JL6S9k"
      },
      {
        title: "Statistical Tools & Control Charts",
        dur: "155 min",
        yt: "M4iK-mQ0Fb4"
      },
      {
        title: "Value Stream Mapping & Kaizen",
        dur: "116 min",
        yt: "_YbQ58r4X_M"
      }
    ],
    reading: [
      {
        title: "What is Lean Six Sigma?",
        body: "Lean Six Sigma combines Lean's waste reduction with Six Sigma's quality control to improve processes systematically.",
        points: [
          "Lean focuses on eliminating waste (non-value-added activities)",
          "Six Sigma reduces variation and defects",
          "DMAIC: Define, Measure, Analyze, Improve, Control",
          "Belt levels: White, Yellow, Green, Black, Master Black"
        ]
      },
      {
        title: "The DMAIC Framework",
        body: "DMAIC is the structured problem-solving methodology at the core of Six Sigma.",
        points: [
          "Define: identify the problem and goals",
          "Measure: collect data on current performance",
          "Analyze: find root causes of defects",
          "Improve: implement solutions",
          "Control: sustain the gains"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Lean Six Sigma?",
        opts: [
          "A CSS framework",
          "A methodology combining waste reduction and quality control",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does DMAIC stand for?",
        opts: [
          "Define, Measure, Analyze, Improve, Control",
          "Develop, Monitor, Assess, Implement, Check",
          "Direct, Measure, Adapt, Improve, Create",
          "Design, Model, Apply, Integrate, Configure"
        ],
        ans: 0
      },
      {
        q: "What is the 8 wastes of Lean?",
        opts: [
          "A CSS property",
          "Defects, Overproduction, Waiting, Non-utilized talent, Transportation, Inventory, Motion, Extra-processing",
          "A database schema",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is value stream mapping?",
        opts: [
          "A CSS animation",
          "A visual tool mapping all steps in a process to identify waste",
          "A database diagram",
          "A network map"
        ],
        ans: 1
      },
      {
        q: "What is Kaizen?",
        opts: [
          "A CSS class",
          "Continuous improvement through small incremental changes",
          "A database index",
          "A network term"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 83,
    title: "CRM with Salesforce",
    instructor: "Oduye Emmanuel",
    category: "Business",
    duration: "6.5 hours",
    level: "intermediate",
    description: "Master Salesforce CRM. Sales Cloud, Service Cloud, reports, dashboards, workflow automation, and Salesforce administration fundamentals.",
    img: "https://images.pexels.com/photos/5466280/pexels-photo-5466280.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: [
      "salesforce",
      "crm",
      "sales cloud",
      "service cloud",
      "automation"
    ],
    preview:"zsjvFFKOm3c",
    lessons: [
      {
        title: "Salesforce Platform Overview & Navigation",
        dur: "48 min",
        yt: "oQiS7FhiCmA"
      },
      {
        title: "Sales Cloud — Leads, Opportunities & Forecasting",
        dur: "105 min",
        yt: "fnRgFFGnDSM"
      },
      {
        title: "Service Cloud — Cases, Knowledge & Omni-Channel",
        dur: "115 min",
        yt: "0ER7RiMjKXo"
      },
      {
        title: "Reports, Dashboards & Process Automation",
        dur: "122 min",
        yt: "m8F3J2EooWo"
      }
    ],
    reading: [
      {
        title: "What is Salesforce?",
        body: "Salesforce is the world's #1 CRM platform, helping businesses manage customer relationships across sales, service, marketing, and more.",
        points: [
          "Cloud-based, no infrastructure needed",
          "Highly customizable with declarative tools",
          "AppExchange provides third-party solutions",
          "Salesforce is the largest CRM by market share"
        ]
      },
      {
        title: "Key Salesforce Objects",
        body: "Standard and custom objects organize data in Salesforce.",
        points: [
          "Accounts represent companies",
          "Contacts are individuals within accounts",
          "Leads are unqualified prospects",
          "Opportunities track potential deals"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Salesforce?",
        opts: [
          "A CSS framework",
          "The world's leading CRM platform",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a lead in Salesforce?",
        opts: [
          "A CSS selector",
          "An unqualified potential customer",
          "A database record",
          "A network connection"
        ],
        ans: 1
      },
      {
        q: "What is an opportunity in Salesforce?",
        opts: [
          "A CSS chance",
          "A potential deal with expected revenue and close date",
          "A database index",
          "A network event"
        ],
        ans: 1
      },
      {
        q: "What is the Salesforce AppExchange?",
        opts: [
          "A CSS framework",
          "A marketplace for third-party Salesforce apps and components",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a Salesforce dashboard?",
        opts: [
          "A CSS animation",
          "A visual display of key metrics and reports",
          "A database view",
          "A network monitor"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 84,
    title: "Adobe XD — UI Design",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "4.8 hours",
    level: "beginner",
    description: "Design user interfaces and prototypes with Adobe XD. Wireframing, component libraries, responsive design, interactions, and design handoff.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "adobe xd",
      "ui design",
      "prototyping",
      "wireframing",
      "design system"
    ],
    preview:"emFMHH2Bfvo",
    lessons: [
      {
        title: "Adobe XD Interface & Tools",
        dur: "35 min",
        yt: "eLbLxbOZ6eE"
      },
      {
        title: "Designing UI Components & Screens",
        dur: "85 min",
        yt: "_HHC2pFNy6A"
      },
      {
        title: "Prototyping, Interactions & Animations",
        dur: "95 min",
        yt: "iCDzysPirxk"
      },
      {
        title: "Design Systems, Assets & Developer Handoff",
        dur: "73 min",
        yt: "P8XPF4OKxGg"
      }
    ],
    reading: [
      {
        title: "Why Adobe XD?",
        body: "Adobe XD is a vector-based UI/UX design tool for designing and prototyping digital experiences.",
        points: [
          "Integrated with Adobe Creative Cloud",
          "Repeat Grid for rapid data-driven layouts",
          "Voice prototyping for voice interfaces",
          "Coediting enables real-time team collaboration"
        ]
      },
      {
        title: "Design Handoff",
        body: "Smooth handoff from design to development is critical for implementation accuracy.",
        points: [
          "Specs auto-generate CSS, iOS, Android code",
          "Assets export in multiple formats",
          "Design specs include measurements and colors",
          "Developers inspect directly in the browser"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Adobe XD?",
        opts: [
          "A database",
          "A UI/UX design and prototyping tool",
          "A CSS framework",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a repeat grid in XD?",
        opts: [
          "A CSS grid",
          "A feature to duplicate elements with data-driven content",
          "A database index",
          "A network topology"
        ],
        ans: 1
      },
      {
        q: "What is prototyping in XD?",
        opts: [
          "A CSS animation",
          "Creating interactive flows between screens",
          "A database migration",
          "A network simulation"
        ],
        ans: 1
      },
      {
        q: "What is design handoff?",
        opts: [
          "A CSS property",
          "Transferring design files and specs to developers for implementation",
          "A database transaction",
          "A network transfer"
        ],
        ans: 1
      },
      {
        q: "Can XD import Sketch files?",
        opts: [
          "No",
          "Yes, with built-in Sketch file import",
          "Only via third-party plugins",
          "Only in paid version"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 85,
    title: "Motion Design & Animation",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "6.5 hours",
    level: "intermediate",
    description: "Bring designs to life with motion. After Effects, Lottie, micro-interactions, easing curves, UI animations, and export for web and mobile.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "motion design",
      "animation",
      "after effects",
      "lottie",
      "micro-interactions"
    ],
    preview:"emFMHH2Bfvo",
    lessons: [
      {
        title: "Animation Principles & Timing",
        dur: "55 min",
        yt: "uDqjIdI4bF4"
      },
      {
        title: "After Effects for UI Motion",
        dur: "125 min",
        yt: "1T3uL6dEkFg"
      },
      {
        title: "Lottie & Micro-Interactions",
        dur: "110 min",
        yt: "7GQkMPOzzAA"
      },
      {
        title: "Exporting Animation for Web & Mobile",
        dur: "100 min",
        yt: "V3zYPIQyW6A"
      }
    ],
    reading: [
      {
        title: "Principles of Animation",
        body: "The 12 principles of animation, originally from Disney, apply to all motion design including UI animation.",
        points: [
          "Ease in/ease out creates natural motion",
          "Anticipation prepares the viewer",
          "Follow through adds realism",
          "Timing defines the personality of motion"
        ]
      },
      {
        title: "Motion in UI",
        body: "Purposeful motion enhances user experience by providing feedback and guiding attention.",
        points: [
          "Micro-interactions confirm actions",
          "Transition animations connect navigation changes",
          "Loading animations reduce perceived wait time",
          "Attention-grabbing animations should be subtle"
        ]
      }
    ],
    quiz: [
      {
        q: "What is motion design?",
        opts: [
          "A CSS animation",
          "The art of creating animated visual content",
          "A database query",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is easing in animation?",
        opts: [
          "A CSS property",
          "The acceleration and deceleration of an animation over time",
          "A database constraint",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is Lottie?",
        opts: [
          "A CSS framework",
          "A library for rendering After Effects animations in real-time",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a micro-interaction?",
        opts: [
          "A CSS selector",
          "A small animation that provides feedback for user actions",
          "A database query",
          "A network event"
        ],
        ans: 1
      },
      {
        q: "What are keyframes?",
        opts: [
          "A CSS rule",
          "Points that define the start and end of an animation",
          "A database index",
          "A network node"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 86,
    title: "3D Modeling with Blender",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "12.5 hours",
    level: "intermediate",
    description: "Create stunning 3D models with Blender. Modeling, sculpting, texturing, lighting, rendering, and animation for games, film, and product visualization.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "blender",
      "3d modeling",
      "sculpting",
      "texturing",
      "rendering"
    ],
    preview:"eZ74x6dVYes",
    lessons: [
      {
        title: "Blender Interface & Navigation",
        dur: "85 min",
        yt: "TZRaPM1kAeE"
      },
      {
        title: "Polygonal Modeling & Sculpting",
        dur: "210 min",
        yt: "BbBjptwQf8g"
      },
      {
        title: "Texturing, UV Mapping & Shading",
        dur: "195 min",
        yt: "pmKbiH4v5bA"
      },
      {
        title: "Lighting, Rendering & Animation",
        dur: "260 min",
        yt: "Qx5b2M3weWY"
      }
    ],
    reading: [
      {
        title: "Why Blender?",
        body: "Blender is a free, open-source 3D creation suite supporting the entire 3D pipeline — modeling, rigging, animation, simulation, rendering, compositing.",
        points: [
          "Completely free with no feature limitations",
          "Active community with millions of users",
          "Supports Cycles (ray-tracing) and Eevee (real-time) renderers",
          "Python API for scripting and automation"
        ]
      },
      {
        title: "3D Modeling Workflow",
        body: "Professional 3D modeling follows a structured pipeline from reference to final render.",
        points: [
          "Start with reference images or concept art",
          "Block out primary forms with primitive shapes",
          "Refine with subdivision surface modeling",
          "Add detail through sculpting or procedural methods"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Blender?",
        opts: [
          "A kitchen appliance",
          "A free, open-source 3D creation suite",
          "A CSS framework",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What is UV mapping?",
        opts: [
          "A CSS property",
          "The process of projecting a 2D texture onto a 3D model",
          "A database schema",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is Cycles in Blender?",
        opts: [
          "A CSS animation",
          "A physically-based ray-tracing render engine",
          "A database transaction",
          "A network cycle"
        ],
        ans: 1
      },
      {
        q: "What is sculpting in 3D?",
        opts: [
          "A CSS animation",
          "Digitally shaping a 3D model like clay using brushes",
          "A database operation",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is Eevee in Blender?",
        opts: [
          "A CSS framework",
          "Blender's real-time rendering engine",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 87,
    title: "Photoshop for Web Designers",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "7.8 hours",
    level: "beginner",
    description: "Master Adobe Photoshop for web and UI design. Layers, masks, typography, image editing, mockups, and export for web and responsive design.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "photoshop",
      "web design",
      "image editing",
      "mockup",
      "ui"
    ],
    preview:"OEV8gMkCHXQ",
    lessons: [
      {
        title: "Photoshop Interface & Essential Tools",
        dur: "65 min",
        yt: "IuWwkJBqCkA"
      },
      {
        title: "Layers, Masks & Adjustment Layers",
        dur: "115 min",
        yt: "FhLGb0nEJ2M"
      },
      {
        title: "Typography, Shapes & Smart Objects",
        dur: "135 min",
        yt: "RoCJIz_mPTA"
      },
      {
        title: "Web Mockups, Artboards & Export",
        dur: "153 min",
        yt: "bMKNKC3nLbY"
      }
    ],
    reading: [
      {
        title: "Photoshop for Web vs Print",
        body: "Web design in Photoshop requires different considerations than print design — resolution, color mode, and output formats differ.",
        points: [
          "Use 72 DPI resolution for web vs 300 for print",
          "RGB color mode for screens, CMYK for print",
          "Artboards organize multiple screen sizes",
          "Export to PNG, JPEG, SVG, or WebP"
        ]
      },
      {
        title: "Non-Destructive Workflow",
        body: "Non-destructive editing preserves original quality and enables flexibility.",
        points: [
          "Use adjustment layers instead of direct adjustments",
          "Smart Objects preserve pixel data",
          "Layer masks hide rather than delete",
          "Vector shapes remain scalable"
        ]
      }
    ],
    quiz: [
      {
        q: "What resolution is standard for web?",
        opts: [
          "300 DPI",
          "72 DPI",
          "150 DPI",
          "600 DPI"
        ],
        ans: 1
      },
      {
        q: "What is a Smart Object?",
        opts: [
          "A CSS class",
          "A layer that preserves original image data for non-destructive editing",
          "A database object",
          "A JavaScript object"
        ],
        ans: 1
      },
      {
        q: "What is the difference between RGB and CMYK?",
        opts: [
          "No difference",
          "RGB for screens, CMYK for print",
          "RGB is newer",
          "CMYK is for web"
        ],
        ans: 1
      },
      {
        q: "What is a layer mask?",
        opts: [
          "A CSS animation",
          "A non-destructive way to hide or reveal parts of a layer",
          "A database constraint",
          "A network filter"
        ],
        ans: 1
      },
      {
        q: "What are artboards in Photoshop?",
        opts: [
          "A CSS grid",
          "Containers for organizing multiple design variations or screens",
          "A database schema",
          "A network topology"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 88,
    title: "Illustrator Masterclass",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "8.2 hours",
    level: "beginner",
    description: "Create vector graphics and illustrations with Adobe Illustrator. Pen tool, typography, logo design, patterns, and export for web and print.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "illustrator",
      "vector",
      "logo design",
      "typography",
      "illustration"
    ],
    preview:"emFMHH2Bfvo",
    lessons: [
      {
        title: "Illustrator Basics — Shapes, Paths & Colors",
        dur: "85 min",
        yt: "Ib8UBwu3yGA"
      },
      {
        title: "Pen Tool Mastery & Vector Drawing",
        dur: "125 min",
        yt: "GiJjAxKFl6s"
      },
      {
        title: "Typography, Logo Design & Brand Assets",
        dur: "145 min",
        yt: "ZVgSgLpqBRQ"
      },
      {
        title: "Patterns, Brushes & Advanced Techniques",
        dur: "137 min",
        yt: "WJ3GtBK59IY"
      }
    ],
    reading: [
      {
        title: "Why Vector Graphics?",
        body: "Vector graphics use mathematical paths instead of pixels, making them infinitely scalable without quality loss.",
        points: [
          "SVG is the standard web vector format",
          "Resolution-independent — sharp at any size",
          "Smaller file sizes than raster for simple graphics",
          "Editable paths and shapes at any time"
        ]
      },
      {
        title: "Pen Tool Mastery",
        body: "The Pen tool is the most powerful and challenging tool in Illustrator — mastering it unlocks vector drawing.",
        points: [
          "Anchor points connect straight and curved segments",
          "Direction handles control curve shape",
          "Convert anchor points between smooth and corner",
          "Practice tracing shapes to build muscle memory"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a vector graphic?",
        opts: [
          "A CSS property",
          "An image defined by mathematical paths, not pixels",
          "A database record",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What is the Pen Tool used for?",
        opts: [
          "A CSS selector",
          "Creating precise paths and shapes with anchor points",
          "A database query",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is an SVG?",
        opts: [
          "A CSS framework",
          "Scalable Vector Graphics — a web vector format",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a compound path?",
        opts: [
          "A CSS animation",
          "Two or more paths combined into a single editable object",
          "A database join",
          "A network route"
        ],
        ans: 1
      },
      {
        q: "What is Live Trace in Illustrator?",
        opts: [
          "A CSS property",
          "Converting raster images to vector paths automatically",
          "A database import",
          "A network capture"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 89,
    title: "Brand Identity & Logo Design",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "5.2 hours",
    level: "beginner",
    description: "Create memorable brand identities. Logo design, color psychology, typography selection, brand guidelines, and visual identity systems.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "brand identity",
      "logo design",
      "brand guidelines",
      "visual identity",
      "typography"
    ],
    preview:"OEV8gMkCHXQ",
    lessons: [
      {
        title: "Brand Strategy & Identity Fundamentals",
        dur: "38 min",
        yt: "HjYAYnRYB8o"
      },
      {
        title: "Logo Design Principles & Process",
        dur: "85 min",
        yt: "rQP6fG64sJY"
      },
      {
        title: "Color, Typography & Brand Elements",
        dur: "98 min",
        yt: "5sY4gx_OwzA"
      },
      {
        title: "Creating Brand Guidelines & Asset Delivery",
        dur: "91 min",
        yt: "mStOTZNvKWA"
      }
    ],
    reading: [
      {
        title: "What is Brand Identity?",
        body: "Brand identity is the visual and verbal expression of a brand — its logo, colors, typography, imagery, and tone of voice.",
        points: [
          "Brand is perception; identity is the controlled expression",
          "Consistency across all touchpoints builds recognition",
          "Identity should reflect brand values and personality",
          "Good identity design is simple, memorable, and timeless"
        ]
      },
      {
        title: "Logo Types",
        body: "Different logo styles communicate different brand qualities.",
        points: [
          "Wordmarks: typography-based (Google, Coca-Cola)",
          "Lettermarks: initials (IBM, HBO)",
          "Pictorial marks: symbolic icons (Apple, Twitter)",
          "Abstract marks: geometric symbols (Nike, Pepsi)"
        ]
      }
    ],
    quiz: [
      {
        q: "What is brand identity?",
        opts: [
          "A CSS property",
          "The visual and verbal expression of a brand",
          "A database schema",
          "A network identity"
        ],
        ans: 1
      },
      {
        q: "What is a wordmark logo?",
        opts: [
          "A CSS font",
          "A logo consisting of the brand name in stylized typography",
          "A database index",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is color psychology?",
        opts: [
          "A CSS animation",
          "The study of how colors affect perception and behavior",
          "A database query",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What are brand guidelines?",
        opts: [
          "A CSS framework",
          "A document defining how a brand should be represented across all media",
          "A database constraint",
          "A network rule"
        ],
        ans: 1
      },
      {
        q: "What makes a good logo?",
        opts: [
          "A CSS class",
          "Simple, memorable, timeless, versatile, and appropriate",
          "A database record",
          "A JavaScript function"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 90,
    title: "Typography & Color Theory",
    instructor: "Oduye Emmanuel",
    category: "Design",
    duration: "4.2 hours",
    level: "beginner",
    description: "Master typography and color theory for design. Type classification, hierarchy, pairing, color wheels, harmony, contrast, and accessibility.",
    img: "https://images.pexels.com/photos/4348366/pexels-photo-4348366.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "typography",
      "color theory",
      "typeface",
      "hierarchy",
      "accessibility"
    ],
    preview:"OEV8gMkCHXQ",
    lessons: [
      {
        title: "Type Classification & Anatomy",
        dur: "32 min",
        yt: "sByzHoiYTV0"
      },
      {
        title: "Typography Hierarchy, Spacing & Pairing",
        dur: "65 min",
        yt: "6ZE3J7iPJ8A"
      },
      {
        title: "Color Theory — Wheel, Harmony & Psychology",
        dur: "75 min",
        yt: "Qj1FK8n7WgY"
      },
      {
        title: "Accessibility, Contrast & Practical Application",
        dur: "80 min",
        yt: "T0Vx3GpcZtY"
      }
    ],
    reading: [
      {
        title: "Typography Fundamentals",
        body: "Typography is the art of arranging type to make language legible, readable, and visually appealing.",
        points: [
          "Serif fonts convey tradition and reliability",
          "Sans-serif fonts suggest modernity and clarity",
          "Display fonts are for headlines only",
          "Body text needs good readability at small sizes"
        ]
      },
      {
        title: "Color Theory",
        body: "Understanding color relationships helps create harmonious and effective designs.",
        points: [
          "Complementary colors are opposite on the wheel",
          "Analogous colors sit next to each other",
          "Triadic uses three evenly spaced colors",
          "Warm colors advance, cool colors recede"
        ]
      }
    ],
    quiz: [
      {
        q: "What is typography?",
        opts: [
          "A CSS property",
          "The art and technique of arranging type",
          "A database type",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is the difference between serif and sans-serif?",
        opts: [
          "No difference",
          "Serif has decorative strokes at letter ends, sans-serif does not",
          "Serif is for screens only",
          "Sans-serif is older"
        ],
        ans: 1
      },
      {
        q: "What is color harmony?",
        opts: [
          "A CSS animation",
          "Pleasing color combinations based on color wheel relationships",
          "A database index",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is kerning?",
        opts: [
          "A CSS selector",
          "The adjustment of space between individual letter pairs",
          "A database query",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is WCAG contrast ratio?",
        opts: [
          "A CSS framework",
          "A standard measuring text readability against its background",
          "A database constraint",
          "A network metric"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 91,
    title: "C Programming — From Zero to Expert",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "16.5 hours",
    level: "beginner",
    description: "Master C programming from fundamentals to advanced. Pointers, memory management, data structures, file I/O, and system-level programming.",
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "c programming",
      "pointers",
      "memory",
      "data structures",
      "systems"
    ],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "C Basics — Variables, Data Types, Control Flow",
        dur: "165 min",
        yt: "KJgsSFOSQv0"
      },
      {
        title: "Functions, Arrays & Strings",
        dur: "195 min",
        yt: "8TmM6Z2oRvs"
      },
      {
        title: "Pointers & Dynamic Memory Allocation",
        dur: "285 min",
        yt: "zuegQmMdy8M"
      },
      {
        title: "File I/O, Structures & Preprocessor",
        dur: "345 min",
        yt: "M2dhD4K-zjs"
      }
    ],
    reading: [
      {
        title: "Why Learn C?",
        body: "C is one of the most influential programming languages — the foundation of operating systems, embedded systems, and performance-critical software.",
        points: [
          "Minimal runtime with direct hardware access",
          "Manual memory management teaches how computers work",
          "C influenced C++, Java, C#, Go, Rust",
          "Used in Linux, Python, Git, and countless systems"
        ]
      },
      {
        title: "Pointers & Memory",
        body: "Pointers are variables that store memory addresses — the most powerful and challenging concept in C.",
        points: [
          "Use & to get the address of a variable",
          "Use * to dereference a pointer and access the value",
          "malloc allocates heap memory, free releases it",
          "Dangling pointers and memory leaks are common bugs"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created C?",
        opts: [
          "Bjarne Stroustrup",
          "Dennis Ritchie",
          "Brian Kernighan",
          "Linus Torvalds"
        ],
        ans: 1
      },
      {
        q: "What is a pointer?",
        opts: [
          "A CSS selector",
          "A variable that stores a memory address",
          "A database index",
          "A JavaScript reference"
        ],
        ans: 1
      },
      {
        q: "What does malloc do?",
        opts: [
          "A CSS animation",
          "Allocates a block of memory on the heap",
          "A database operation",
          "A network function"
        ],
        ans: 1
      },
      {
        q: "What is a null pointer?",
        opts: [
          "A CSS property",
          "A pointer that points to nothing (address 0)",
          "A database null",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is a segmentation fault?",
        opts: [
          "A CSS error",
          "Accessing memory that the program doesn't have permission to use",
          "A database failure",
          "A network fault"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 92,
    title: "C++ for Game Development",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "18.3 hours",
    level: "intermediate",
    description: "Learn C++ for game development. OOP, STL, memory management, graphics programming, game engines, and building a complete game project.",
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "c++",
      "game development",
      "oop",
      "stl",
      "unreal"
    ],
    preview:"MNeX4EGtR5Y",
    lessons: [
      {
        title: "C++ Fundamentals & OOP",
        dur: "195 min",
        yt: "vLnPwxZdW4Y"
      },
      {
        title: "STL — Containers, Algorithms, Iterators",
        dur: "245 min",
        yt: "z9bZufPHG_w"
      },
      {
        title: "Memory Management & Smart Pointers",
        dur: "265 min",
        yt: "T5P2eJoFh4Q"
      },
      {
        title: "Game Architecture & Building a Game",
        dur: "393 min",
        yt: "d0vHNs6mC8A"
      }
    ],
    reading: [
      {
        title: "Why C++ for Games?",
        body: "C++ is the dominant language in game development due to its performance, control, and extensive engine support.",
        points: [
          "Unreal Engine is written in C++",
          "Direct control over memory and performance",
          "STL provides powerful data structures and algorithms",
          "Object-Oriented Programming models game entities naturally"
        ]
      },
      {
        title: "C++ vs C",
        body: "C++ extends C with classes, templates, exceptions, and the STL.",
        points: [
          "C adds OOP: classes, inheritance, polymorphism",
          "Templates enable generic, type-safe code",
          "RAII manages resources through object lifetime",
          "Smart pointers automate memory management"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created C++?",
        opts: [
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "James Gosling",
          "Guido van Rossum"
        ],
        ans: 1
      },
      {
        q: "What is a class in C++?",
        opts: [
          "A CSS class",
          "A blueprint for creating objects with data and functions",
          "A database table",
          "A JavaScript prototype"
        ],
        ans: 1
      },
      {
        q: "What is RAII?",
        opts: [
          "A CSS property",
          "Resource Acquisition Is Initialization — binding resource lifetime to object lifetime",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is the STL?",
        opts: [
          "A CSS framework",
          "Standard Template Library — containers, algorithms, iterators",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a virtual function?",
        opts: [
          "A CSS selector",
          "A function that can be overridden in derived classes for polymorphism",
          "A database query",
          "A JavaScript callback"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 93,
    title: "C# & .NET Fundamentals",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "14.8 hours",
    level: "beginner",
    description: "Build applications with C# and .NET. C# language, ASP.NET Core, Entity Framework, LINQ, async programming, and desktop/web development.",
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "c#",
      ".net",
      "asp.net",
      "entity framework",
      "linq"
    ],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "C# Language — Types, Classes & Inheritance",
        dur: "180 min",
        yt: "gfkTfcpW4AY"
      },
      {
        title: "LINQ, Collections & Async Programming",
        dur: "225 min",
        yt: "gx1LtTH3SZE"
      },
      {
        title: "ASP.NET Core Web API Development",
        dur: "260 min",
        yt: "ZXCVbnz42O8"
      },
      {
        title: "Entity Framework Core & Data Access",
        dur: "235 min",
        yt: "b8Q1H0QhyLs"
      }
    ],
    reading: [
      {
        title: "The .NET Ecosystem",
        body: ".NET is a free, cross-platform framework for building modern applications — web, desktop, mobile, cloud, and IoT.",
        points: [
          "C# is the primary language for .NET development",
          "ASP.NET Core builds web APIs and web apps",
          "Entity Framework Core provides ORM for data access",
          ".NET runs on Windows, macOS, and Linux"
        ]
      },
      {
        title: "Key C# Features",
        body: "C# is a modern, type-safe, object-oriented language with excellent tooling.",
        points: [
          "Properties provide controlled field access",
          "Delegates and events enable callback patterns",
          "LINQ provides declarative data queries",
          "Async/await simplifies asynchronous programming"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created C#?",
        opts: [
          "Google",
          "Microsoft",
          "Apple",
          "Oracle"
        ],
        ans: 1
      },
      {
        q: "What is .NET?",
        opts: [
          "A CSS framework",
          "A free, cross-platform development framework from Microsoft",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is LINQ?",
        opts: [
          "A CSS property",
          "Language-Integrated Query — querying data directly in C#",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is ASP.NET Core?",
        opts: [
          "A CSS framework",
          "A cross-platform framework for building web APIs and applications",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is Entity Framework Core?",
        opts: [
          "A CSS animation",
          "An object-relational mapper (ORM) for .NET",
          "A database migration tool",
          "A network framework"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 94,
    title: "Rust — Safe Systems Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "10.5 hours",
    level: "intermediate",
    description: "Master Rust programming. Ownership, borrowing, lifetimes, memory safety without GC, concurrency, and building high-performance systems.",
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "rust",
      "systems programming",
      "memory safety",
      "concurrency",
      "ownership"
    ],
    preview:"5C_HPTJg5ek",
    lessons: [
      {
        title: "Rust Fundamentals — Variables, Types, Functions",
        dur: "105 min",
        yt: "zF34dRivLOw"
      },
      {
        title: "Ownership, Borrowing & Lifetimes",
        dur: "185 min",
        yt: "lJ3NCf3lYxk"
      },
      {
        title: "Structs, Enums, Pattern Matching & Error Handling",
        dur: "195 min",
        yt: "ygL_xcavzQ4"
      },
      {
        title: "Concurrency, Traits & Building CLI Tools",
        dur: "145 min",
        yt: "3o1X4T7fGZQ"
      }
    ],
    reading: [
      {
        title: "Why Rust?",
        body: "Rust is a systems programming language focused on memory safety and performance without a garbage collector.",
        points: [
          "Memory safety at compile time — no null/dangling pointers",
          "Zero-cost abstractions don't sacrifice performance",
          "Fearless concurrency prevents data races",
          "Cargo is the build system and package manager"
        ]
      },
      {
        title: "Ownership Model",
        body: "Rust's ownership model is the foundation of its memory safety guarantees.",
        points: [
          "Each value has exactly one owner",
          "Ownership can be transferred (moved) or borrowed",
          "References borrow without taking ownership",
          "Lifetimes ensure references are always valid"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Rust?",
        opts: [
          "Google",
          "Mozilla",
          "Microsoft",
          "Apple"
        ],
        ans: 1
      },
      {
        q: "What is ownership in Rust?",
        opts: [
          "A CSS property",
          "Each value has exactly one owner at any time",
          "A database concept",
          "A legal term"
        ],
        ans: 1
      },
      {
        q: "What does the borrow checker do?",
        opts: [
          "A CSS animation",
          "Ensures references follow ownership rules at compile time",
          "A database validator",
          "A network checker"
        ],
        ans: 1
      },
      {
        q: "What is a lifetime in Rust?",
        opts: [
          "A CSS duration",
          "A scope for which a reference is valid",
          "A database term",
          "A network metric"
        ],
        ans: 1
      },
      {
        q: "What is cargo?",
        opts: [
          "A CSS framework",
          "Rust's build system and package manager",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 95,
    title: "Go Programming Language",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.5 hours",
    level: "beginner",
    description: "Learn Go for backend and systems programming. Concurrency, interfaces, error handling, testing, and building microservices and CLI tools.",
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "golang",
      "go",
      "concurrency",
      "microservices",
      "cli"
    ],
    preview:"446E-r0rXHI",
    lessons: [
      {
        title: "Go Syntax & Data Types",
        dur: "85 min",
        yt: "YS4e4q9oBaU"
      },
      {
        title: "Interfaces, Structs & Error Handling",
        dur: "120 min",
        yt: "0bUTlLBxLAM"
      },
      {
        title: "Concurrency — Goroutines, Channels & Select",
        dur: "155 min",
        yt: "LgLvLw9hHwM"
      },
      {
        title: "Building CLI Tools & HTTP Services",
        dur: "150 min",
        yt: "7hgI1IfEru8"
      }
    ],
    reading: [
      {
        title: "Go Design Philosophy",
        body: "Go is designed for simplicity, clarity, and productivity at scale — it's opinionated and minimal by design.",
        points: [
          "Simple syntax with no inheritance or generics (pre-1.18)",
          "Concurrency built into the language (goroutines, channels)",
          "Fast compilation and small binary size",
          "gofmt enforces consistent code formatting"
        ]
      },
      {
        title: "Concurrency Model",
        body: "Go's concurrency model is based on communicating sequential processes (CSP).",
        points: [
          "Goroutines are lightweight threads, cheap to create",
          "Channels communicate data between goroutines",
          "Select waits on multiple channel operations",
          "Race detector finds concurrent bugs"
        ]
      }
    ],
    quiz: [
      {
        q: "What company created Go?",
        opts: [
          "Apple",
          "Google",
          "Microsoft",
          "Meta"
        ],
        ans: 1
      },
      {
        q: "What is a goroutine?",
        opts: [
          "A CSS animation",
          "A lightweight thread managed by the Go runtime",
          "A database routine",
          "A network process"
        ],
        ans: 1
      },
      {
        q: "What is a channel in Go?",
        opts: [
          "A CSS property",
          "A typed conduit for communication between goroutines",
          "A database index",
          "A network channel"
        ],
        ans: 1
      },
      {
        q: "What does defer do in Go?",
        opts: [
          "A CSS selector",
          "Defers execution of a function until the surrounding function returns",
          "A database trigger",
          "A JavaScript setTimeout"
        ],
        ans: 1
      },
      {
        q: "What is gofmt?",
        opts: [
          "A CSS framework",
          "The official Go code formatter",
          "A database tool",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 96,
    title: "Bash Scripting & Automation",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "5.5 hours",
    level: "beginner",
    description: "Automate tasks with Bash scripting. Command line mastery, shell scripts, variables, control flow, functions, cron jobs, and text processing.",
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "bash",
      "shell",
      "scripting",
      "automation",
      "linux"
    ],
    preview:"I4EWvMFj37g",
    lessons: [
      {
        title: "Command Line Fundamentals & Navigation",
        dur: "45 min",
        yt: "hwrnmQ0BPfc"
      },
      {
        title: "Bash Scripting — Variables, Loops, Conditionals",
        dur: "85 min",
        yt: "SPwyp2Ngbes"
      },
      {
        title: "Functions, Arguments & Error Handling",
        dur: "95 min",
        yt: "cQepf9fMfGc"
      },
      {
        title: "Text Processing — grep, sed, awk & Cron Jobs",
        dur: "105 min",
        yt: "aDlTj1kM5k4"
      }
    ],
    reading: [
      {
        title: "Why Bash?",
        body: "Bash is the default shell on most Unix systems and essential for DevOps, system administration, and development automation.",
        points: [
          "Automate repetitive tasks with scripts",
          "Pipe commands together for powerful data processing",
          "Cron schedules scripts to run automatically",
          "Bash is essential for CI/CD pipelines"
        ]
      },
      {
        title: "Key Bash Concepts",
        body: "Understanding these concepts will make you productive in the terminal.",
        points: [
          "Exit codes indicate success (0) or failure (non-zero)",
          "Environment variables configure shell behavior",
          "Command substitution $(command) captures output",
          "Redirection (> >>) controls input/output streams"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Bash?",
        opts: [
          "A CSS framework",
          "A Unix shell and command language",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What does the shebang (#!) do?",
        opts: [
          "A CSS comment",
          "Specifies the interpreter for executing the script",
          "A database query",
          "A network header"
        ],
        ans: 1
      },
      {
        q: "What is grep used for?",
        opts: [
          "A CSS selector",
          "Searching text using regular expressions",
          "A database operation",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is a cron job?",
        opts: [
          "A CSS animation",
          "A scheduled task that runs automatically at specified times",
          "A database job",
          "A network time"
        ],
        ans: 1
      },
      {
        q: "What does $? represent in Bash?",
        opts: [
          "A CSS variable",
          "The exit code of the last executed command",
          "A database value",
          "A network parameter"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 97,
    title: "Competitive Programming",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "12.5 hours",
    level: "intermediate",
    description: "Master competitive programming and ace technical interviews. Algorithms, data structures, problem-solving strategies, and contest techniques.",
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "competitive programming",
      "algorithms",
      "data structures",
      "interviews",
      "leetcode"
    ],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "Problem-Solving Strategies & Complexity Analysis",
        dur: "95 min",
        yt: "_z4M1iARIBI"
      },
      {
        title: "Key Data Structures for Competitions",
        dur: "195 min",
        yt: "RBSGKlAvoiM"
      },
      {
        title: "Graph Algorithms, DP & Advanced Topics",
        dur: "265 min",
        yt: "oSWTXtMglKE"
      },
      {
        title: "Contest Tactics & Interview Preparation",
        dur: "195 min",
        yt: "Ejz0Gd8X0z0"
      }
    ],
    reading: [
      {
        title: "Competitive Programming Mindset",
        body: "Competitive programming hones problem-solving skills through algorithmic challenges under time pressure.",
        points: [
          "Practice regularly on LeetCode, CodeForces, AtCoder",
          "Understand time complexity before implementing",
          "Edge cases and input validation are critical",
          "Learn to type quickly and accurately"
        ]
      },
      {
        title: "The Algorithm Toolbox",
        body: "Master these algorithm families for success in competitions and interviews.",
        points: [
          "Sorting and searching: binary search, merge sort",
          "Graphs: DFS, BFS, Dijkstra, Bellman-Ford",
          "Dynamic Programming: knapsack, LCS, edit distance",
          "Data Structures: segment tree, Fenwick tree, union-find"
        ]
      }
    ],
    quiz: [
      {
        q: "What is competitive programming?",
        opts: [
          "A CSS competition",
          "Solving algorithmic problems against time and other participants",
          "A database query",
          "A network contest"
        ],
        ans: 1
      },
      {
        q: "What is Big O notation?",
        opts: [
          "A CSS property",
          "Describes how algorithm runtime scales with input size",
          "A database size",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is dynamic programming?",
        opts: [
          "A CSS animation",
          "Solving problems by breaking into overlapping subproblems and caching results",
          "A database operation",
          "A JavaScript function"
        ],
        ans: 1
      },
      {
        q: "What is a segment tree?",
        opts: [
          "A CSS framework",
          "A tree data structure for range queries and updates",
          "A database index",
          "A network topology"
        ],
        ans: 1
      },
      {
        q: "What is the two-pointer technique?",
        opts: [
          "A CSS selector",
          "Using two pointers to traverse data efficiently, often on sorted arrays",
          "A database join",
          "A JavaScript callback"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 98,
    title: "Functional Programming with Haskell",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "9.5 hours",
    level: "advanced",
    description: "Learn pure functional programming with Haskell. Type classes, monads, functors, lazy evaluation, and building robust, side-effect-free applications.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "haskell",
      "functional programming",
      "monads",
      "type classes",
      "purely functional"
    ],
    preview:"NrO0CJCbYLA",
    lessons: [
      {
        title: "Haskell Basics — Types, Functions & Recursion",
        dur: "95 min",
        yt: "02_H3LjqMr8"
      },
      {
        title: "Type Classes, Higher-Order Functions & Currying",
        dur: "145 min",
        yt: "kH2KMZbYEhc"
      },
      {
        title: "Functors, Applicatives & Monads",
        dur: "195 min",
        yt: "ZhuHCtR3xq8"
      },
      {
        title: "IO, Error Handling & Building Real Apps",
        dur: "135 min",
        yt: "e0GzTKuFvRU"
      }
    ],
    reading: [
      {
        title: "Why Functional Programming?",
        body: "Functional programming treats computation as the evaluation of mathematical functions, avoiding mutable state and side effects.",
        points: [
          "Pure functions are deterministic and testable",
          "Immutability eliminates entire classes of bugs",
          "Functions are first-class citizens",
          "Powerful type system catches errors at compile time"
        ]
      },
      {
        title: "Monads Explained",
        body: "Monads are a design pattern for structuring programs with pure functions — often misunderstood but powerful.",
        points: [
          "Monad is a type class with bind (>>=) and return",
          "Maybe monad handles nullable values",
          "Either monad represents computations that can fail",
          "IO monad handles side effects purely"
        ]
      }
    ],
    quiz: [
      {
        q: "What is pure functional programming?",
        opts: [
          "A CSS framework",
          "Programming without side effects, using pure functions only",
          "A database paradigm",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a monad?",
        opts: [
          "A CSS class",
          "A design pattern for chaining computations with context",
          "A database term",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is lazy evaluation?",
        opts: [
          "A CSS animation",
          "Expressions are evaluated only when their value is needed",
          "A database optimization",
          "A network strategy"
        ],
        ans: 1
      },
      {
        q: "What is currying?",
        opts: [
          "A CSS property",
          "Transforming a function taking multiple arguments into chaining single-argument functions",
          "A database operation",
          "A cooking technique"
        ],
        ans: 1
      },
      {
        q: "What is the Maybe type?",
        opts: [
          "A CSS animation",
          "A type representing optional values (Just x or Nothing)",
          "A database null",
          "A JavaScript undefined"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 99,
    title: "AWS Solutions Architect",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "18.5 hours",
    level: "intermediate",
    description: "Prepare for AWS Solutions Architect certification. Compute, storage, networking, databases, security, and architecting scalable cloud solutions.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "aws",
      "solutions architect",
      "cloud",
      "s3",
      "ec2"
    ],
    preview:"PziYflu8cB8",
    lessons: [
      {
        title: "AWS Global Infrastructure & IAM",
        dur: "145 min",
        yt: "3hLmDS179YE"
      },
      {
        title: "Compute — EC2, Lambda, ECS, EKS",
        dur: "265 min",
        yt: "lw9WZQ7hL7o"
      },
      {
        title: "Storage & Databases — S3, RDS, DynamoDB",
        dur: "295 min",
        yt: "GWU9yHCCQQQ"
      },
      {
        title: "Networking, Security & Well-Architected Framework",
        dur: "405 min",
        yt: "iOaMl1qLe2E"
      }
    ],
    reading: [
      {
        title: "AWS Global Infrastructure",
        body: "AWS spans 30+ regions and 90+ availability zones worldwide, providing low-latency, highly available infrastructure.",
        points: [
          "Regions are geographic areas with multiple AZs",
          "AZs are isolated data centers within a region",
          "Edge locations power CloudFront CDN",
          "Cross-region replication enables disaster recovery"
        ]
      },
      {
        title: "Well-Architected Framework",
        body: "The AWS Well-Architected Framework provides best practices for building secure, reliable, efficient, and cost-effective systems.",
        points: [
          "Operational Excellence: run and monitor systems",
          "Security: protect data and systems",
          "Reliability: recover from failures, scale",
          "Performance Efficiency: use resources efficiently",
          "Cost Optimization: avoid unnecessary costs"
        ]
      }
    ],
    quiz: [
      {
        q: "What is an AWS region?",
        opts: [
          "A CSS region",
          "A geographic area containing multiple availability zones",
          "A database partition",
          "A network segment"
        ],
        ans: 1
      },
      {
        q: "What is EC2?",
        opts: [
          "A CSS framework",
          "Elastic Compute Cloud — virtual servers in the cloud",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is S3?",
        opts: [
          "A CSS property",
          "Simple Storage Service — scalable object storage",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is an availability zone?",
        opts: [
          "A CSS animation",
          "An isolated data center within an AWS region",
          "A database zone",
          "A network area"
        ],
        ans: 1
      },
      {
        q: "What is IAM?",
        opts: [
          "A CSS property",
          "Identity and Access Management — managing users, groups, and permissions",
          "A database constraint",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 100,
    title: "Microsoft Azure Fundamentals",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "14.5 hours",
    level: "beginner",
    description: "Learn Microsoft Azure cloud platform. Compute, storage, networking, Active Directory, and prepare for AZ-900 certification.",
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "azure",
      "az-900",
      "cloud",
      "microsoft",
      "active directory"
    ],
    preview:"PziYflu8cB8",
    lessons: [
      {
        title: "Azure Architecture & Core Services",
        dur: "145 min",
        yt: "NKEFWyqJhRg"
      },
      {
        title: "Compute — VMs, App Services, Functions",
        dur: "220 min",
        yt: "gHqRqL-1mec"
      },
      {
        title: "Storage, Databases & Networking",
        dur: "245 min",
        yt: "-KQMnV2qkS0"
      },
      {
        title: "Identity, Security & AZ-900 Prep",
        dur: "260 min",
        yt: "cTzJkFGHPWQ"
      }
    ],
    reading: [
      {
        title: "Azure Overview",
        body: "Microsoft Azure is a cloud computing platform offering 200+ services across compute, storage, networking, AI, and more.",
        points: [
          "Azure regions paired for disaster recovery",
          "Resource groups organize related resources",
          "Azure Resource Manager (ARM) manages infrastructure",
          "Azure portal, CLI, and PowerShell manage resources"
        ]
      },
      {
        title: "Key Azure Services",
        body: "Azure offers a wide range of cloud services comparable to AWS and GCP.",
        points: [
          "Azure VMs provide virtual machine capacity",
          "Azure Blob Storage for unstructured data",
          "Azure SQL Database for managed relational DB",
          "Azure Active Directory for identity management"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Azure?",
        opts: [
          "A CSS property",
          "Microsoft's cloud computing platform",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a resource group?",
        opts: [
          "A CSS class",
          "A container that holds related resources for an Azure solution",
          "A database group",
          "A network segment"
        ],
        ans: 1
      },
      {
        q: "What is Azure Active Directory?",
        opts: [
          "A CSS framework",
          "Microsoft's cloud-based identity and access management service",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is the AZ-900?",
        opts: [
          "A CSS certification",
          "Microsoft Azure Fundamentals certification",
          "A database exam",
          "A network standard"
        ],
        ans: 1
      },
      {
        q: "What is Azure DevOps?",
        opts: [
          "A CSS animation",
          "A set of development tools for CI/CD, repositories, and project management",
          "A database tool",
          "A network tool"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 101,
    title: "Google Cloud Platform",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "13.2 hours",
    level: "intermediate",
    description: "Master Google Cloud Platform. Compute Engine, GKE, Cloud Storage, BigQuery, Cloud Functions, and GCP architecture best practices.",
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "gcp",
      "google cloud",
      "bigquery",
      "gke",
      "compute engine"
    ],
    preview:"PziYflu8cB8",
    lessons: [
      {
        title: "GCP Core Infrastructure & Projects",
        dur: "120 min",
        yt: "JPn2nWfAjJc"
      },
      {
        title: "Compute — GCE, GKE, Cloud Run, App Engine",
        dur: "225 min",
        yt: "aR90lbXfCkI"
      },
      {
        title: "Storage, Databases & BigQuery",
        dur: "230 min",
        yt: "bWbThUv7Ls8"
      },
      {
        title: "Networking, Security & Deployment",
        dur: "217 min",
        yt: "jUJpVVR8GHM"
      }
    ],
    reading: [
      {
        title: "GCP vs AWS vs Azure",
        body: "GCP differentiates with strengths in data analytics, machine learning, and container-native services.",
        points: [
          "BigQuery is a serverless data warehouse with SQL",
          "GKE is managed Kubernetes on Google's infrastructure",
          "Cloud Run runs containers serverlessly",
          "Cloud Spanner provides globally distributed SQL"
        ]
      },
      {
        title: "GCP Key Concepts",
        body: "Understanding GCP's organizational structure is essential.",
        points: [
          "Projects organize all GCP resources",
          "Folders group projects hierarchically",
          "Organization node is the root of the hierarchy",
          "IAM policies are inherited through the hierarchy"
        ]
      }
    ],
    quiz: [
      {
        q: "What is GCP?",
        opts: [
          "A CSS property",
          "Google Cloud Platform — Google's cloud computing services",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is BigQuery?",
        opts: [
          "A CSS framework",
          "Google's serverless, highly scalable data warehouse",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is GKE?",
        opts: [
          "A CSS animation",
          "Google Kubernetes Engine — managed Kubernetes clusters",
          "A database engine",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is Cloud Run?",
        opts: [
          "A CSS property",
          "A managed compute platform for running containers serverlessly",
          "A database run",
          "A network route"
        ],
        ans: 1
      },
      {
        q: "What is Compute Engine?",
        opts: [
          "A CSS selector",
          "GCP's virtual machine service",
          "A database engine",
          "A JavaScript engine"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 102,
    title: "Kubernetes & Container Orchestration",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "9.5 hours",
    level: "intermediate",
    description: "Master Kubernetes for container orchestration. Pods, services, deployments, ingress, Helm, monitoring, and production cluster management.",
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "kubernetes",
      "k8s",
      "docker",
      "containers",
      "orchestration"
    ],
    preview:"PziYflu8cB8",
    lessons: [
      {
        title: "Kubernetes Architecture & Core Objects",
        dur: "85 min",
        yt: "d6WC5n9GRX8"
      },
      {
        title: "Pods, Deployments, Services & ConfigMaps",
        dur: "155 min",
        yt: "s_o8dwznRtw"
      },
      {
        title: "Ingress, Storage, Helm & Stateful Apps",
        dur: "170 min",
        yt: "X48VuDVv0do"
      },
      {
        title: "Monitoring, Logging & Production Operations",
        dur: "160 min",
        yt: "cJIf1l2TbQI"
      }
    ],
    reading: [
      {
        title: "What is Kubernetes?",
        body: "Kubernetes is an open-source platform for automating deployment, scaling, and management of containerized applications.",
        points: [
          "Pods are the smallest deployable units",
          "Deployments manage desired state and rolling updates",
          "Services provide stable networking for pods",
          "ConfigMaps and Secrets manage configuration"
        ]
      },
      {
        title: "Kubernetes Architecture",
        body: "Kubernetes clusters consist of control plane and worker nodes.",
        points: [
          "Control plane: API server, scheduler, controller manager, etcd",
          "Worker nodes: kubelet, kube-proxy, container runtime",
          "kubectl is the CLI tool for interacting with clusters",
          "Namespaces isolate resources within a cluster"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Kubernetes?",
        opts: [
          "A CSS framework",
          "A container orchestration platform",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a pod?",
        opts: [
          "A CSS property",
          "The smallest deployable unit in Kubernetes, containing one or more containers",
          "A database group",
          "A network node"
        ],
        ans: 1
      },
      {
        q: "What is a deployment?",
        opts: [
          "A CSS animation",
          "A Kubernetes resource that manages desired state for pods with rolling updates",
          "A database deployment",
          "A network rollout"
        ],
        ans: 1
      },
      {
        q: "What does kubectl do?",
        opts: [
          "A CSS selector",
          "The command-line tool for interacting with Kubernetes clusters",
          "A database tool",
          "A network control"
        ],
        ans: 1
      },
      {
        q: "What is Helm?",
        opts: [
          "A CSS framework",
          "A package manager for Kubernetes applications",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 103,
    title: "Terraform & Infrastructure as Code",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "6.5 hours",
    level: "intermediate",
    description: "Manage cloud infrastructure as code with Terraform. HCL, state management, modules, provisioning across AWS, Azure, GCP, and best practices.",
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "terraform",
      "infrastructure as code",
      "hcl",
      "iac",
      "provisioning"
    ],
    preview:"tomUWcQ0P3k",
    lessons: [
      {
        title: "Infrastructure as Code & Terraform Basics",
        dur: "45 min",
        yt: "l5k1ai_GBDE"
      },
      {
        title: "HCL Syntax, Resources & Data Sources",
        dur: "85 min",
        yt: "hpX8oJqWUf0"
      },
      {
        title: "State Management & Remote Backends",
        dur: "95 min",
        yt: "mP0cJ8A0Bf0"
      },
      {
        title: "Modules, Workspaces & Multi-Cloud Deployment",
        dur: "165 min",
        yt: "7xngnjfIlK4"
      }
    ],
    reading: [
      {
        title: "What is Infrastructure as Code?",
        body: "IaC manages and provisions infrastructure through machine-readable definition files, enabling version control, automation, and consistency.",
        points: [
          "Declarative: define desired state, tool handles changes",
          "Immutable infrastructure: replace rather than modify",
          "Version control for infrastructure changes",
          "Repeatable and consistent deployments"
        ]
      },
      {
        title: "Terraform vs CloudFormation vs Pulumi",
        body: "Terraform is cloud-agnostic IaC tool from HashiCorp.",
        points: [
          "Terraform works with AWS, Azure, GCP, and 100+ providers",
          "HCL is Terraform's declarative configuration language",
          "State files track real-world infrastructure",
          "Modules enable reusable infrastructure components"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Terraform?",
        opts: [
          "A CSS framework",
          "An infrastructure as code tool from HashiCorp",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is HCL?",
        opts: [
          "A CSS property",
          "HashiCorp Configuration Language — Terraform's declarative language",
          "A database language",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is Terraform state?",
        opts: [
          "A CSS selector",
          "A file mapping configuration to real-world infrastructure",
          "A database state",
          "A network status"
        ],
        ans: 1
      },
      {
        q: "What is a Terraform module?",
        opts: [
          "A CSS animation",
          "A reusable collection of Terraform configurations",
          "A database module",
          "A network unit"
        ],
        ans: 1
      },
      {
        q: "What does terraform plan do?",
        opts: [
          "A CSS property",
          "Shows what changes will be made without applying them",
          "A database query",
          "A network plan"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 104,
    title: "CI/CD Pipeline Engineering",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "5.8 hours",
    level: "intermediate",
    description: "Build robust CI/CD pipelines with Jenkins, GitHub Actions, GitLab CI, and CircleCI. Automated testing, deployment, and pipeline optimization.",
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "ci/cd",
      "jenkins",
      "github actions",
      "gitlab ci",
      "automation"
    ],
    preview:"scEDHsr3APg",
    lessons: [
      {
        title: "CI/CD Concepts & Pipeline Architecture",
        dur: "38 min",
        yt: "scEDHsr3APg"
      },
      {
        title: "GitHub Actions — Workflows, Actions & Runners",
        dur: "95 min",
        yt: "TLU0QNBY3Ik"
      },
      {
        title: "Jenkins — Jobs, Plugins & Pipeline as Code",
        dur: "115 min",
        yt: "FX322gy1w20"
      },
      {
        title: "GitLab CI, CircleCI & Deployment Strategies",
        dur: "100 min",
        yt: "bX3J8k0NAWY"
      }
    ],
    reading: [
      {
        title: "What is CI/CD?",
        body: "Continuous Integration automatically builds and tests code changes. Continuous Delivery/Deployment automatically releases to production.",
        points: [
          "CI: merge code changes frequently, run automated tests",
          "CD: automatically deploy to staging/production",
          "Pipeline as code defines the workflow in version control",
          "Gates prevent bad code from reaching production"
        ]
      },
      {
        title: "Key Pipeline Stages",
        body: "A typical CI/CD pipeline includes multiple stages for quality assurance.",
        points: [
          "Source: checkout code from repository",
          "Build: compile or bundle the application",
          "Test: run unit, integration, and e2e tests",
          "Deploy: release to staging and production environments"
        ]
      }
    ],
    quiz: [
      {
        q: "What does CI/CD stand for?",
        opts: [
          "Continuous Integration / Continuous Deployment",
          "Code Inspection / Code Deployment",
          "Continuous Improvement / Continuous Delivery",
          "Code Integration / Code Development"
        ],
        ans: 0
      },
      {
        q: "What is a GitHub Actions workflow?",
        opts: [
          "A CSS animation",
          "An automated process defined in YAML that runs on GitHub events",
          "A database operation",
          "A network process"
        ],
        ans: 1
      },
      {
        q: "What is a pipeline as code?",
        opts: [
          "A CSS property",
          "Defining CI/CD pipelines using code stored in version control",
          "A database script",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a deployment strategy?",
        opts: [
          "A CSS framework",
          "The approach used to release new versions with minimal downtime",
          "A database plan",
          "A network strategy"
        ],
        ans: 1
      },
      {
        q: "What is blue-green deployment?",
        opts: [
          "A CSS color",
          "Running two identical environments and switching traffic between them",
          "A database mode",
          "A network configuration"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 105,
    title: "Linux Administration",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "14.5 hours",
    level: "beginner",
    description: "Master Linux system administration. Command line, file systems, users/permissions, processes, networking, shell scripting, and server management.",
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "linux",
      "administration",
      "command line",
      "server",
      "sysadmin"
    ],
    preview:"rrB13utjYV4",
    lessons: [
      {
        title: "Linux Fundamentals & Command Line",
        dur: "145 min",
        yt: "sWbUDq4S8eA"
      },
      {
        title: "File Systems, Permissions & Users",
        dur: "195 min",
        yt: "B1tLFH0iHJM"
      },
      {
        title: "Processes, Services & Systemd",
        dur: "225 min",
        yt: "MKQEpjM70Wg"
      },
      {
        title: "Networking, Security & Shell Scripting",
        dur: "305 min",
        yt: "eUQI8g-8rEo"
      }
    ],
    reading: [
      {
        title: "Why Linux Matters",
        body: "Linux powers the majority of servers, cloud infrastructure, containers, and developer tools — it's essential for any DevOps or backend engineer.",
        points: [
          "Open-source with multiple distributions (Ubuntu, RHEL, Debian)",
          "Everything is a file in Unix philosophy",
          "Multi-user system with granular permissions",
          "Package managers (apt, yum) simplify software installation"
        ]
      },
      {
        title: "Key Linux Skills",
        body: "These skills form the foundation of Linux administration.",
        points: [
          "File operations: ls, cp, mv, rm, find, grep",
          "Process management: ps, top, kill, systemctl",
          "Network tools: ssh, scp, netstat, curl, ping",
          "Permissions: chmod, chown, umask, ACLs"
        ]
      }
    ],
    quiz: [
      {
        q: "What is the root user in Linux?",
        opts: [
          "A CSS selector",
          "The superuser with unrestricted system access",
          "A database role",
          "A network admin"
        ],
        ans: 1
      },
      {
        q: "What does chmod do?",
        opts: [
          "A CSS property",
          "Changes file permissions (read, write, execute)",
          "A database mode",
          "A network command"
        ],
        ans: 1
      },
      {
        q: "What is systemd?",
        opts: [
          "A CSS framework",
          "A system and service manager for Linux",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is SSH?",
        opts: [
          "A CSS animation",
          "Secure Shell — a protocol for secure remote login",
          "A database shell",
          "A network shell"
        ],
        ans: 1
      },
      {
        q: "What is a Linux distribution?",
        opts: [
          "A CSS class",
          "A version of Linux with specific package manager, tools, and goals",
          "A database distribution",
          "A network distro"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 106,
    title: "Site Reliability Engineering",
    instructor: "Oduye Emmanuel",
    category: "Cloud & DevOps",
    duration: "7.5 hours",
    level: "advanced",
    description: "Apply SRE principles for reliable systems. SLIs, SLOs, error budgets, incident management, capacity planning, and reliability culture.",
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: [
      "sre",
      "reliability",
      "slo",
      "error budget",
      "incident management"
    ],
    preview:"rrB13utjYV4",
    lessons: [
      {
        title: "SRE Principles & Google's Approach",
        dur: "45 min",
        yt: "ZcFp1XGHgNk"
      },
      {
        title: "SLIs, SLOs & Error Budgets",
        dur: "95 min",
        yt: "Vh9sMRJMGn4"
      },
      {
        title: "Incident Response, On-Call & Postmortems",
        dur: "125 min",
        yt: "FubgGMpth1c"
      },
      {
        title: "Capacity Planning, Automation & Toil Reduction",
        dur: "185 min",
        yt: "L1eNsJH7bAw"
      }
    ],
    reading: [
      {
        title: "What is SRE?",
        body: "Site Reliability Engineering applies software engineering principles to operations, creating highly reliable and scalable systems.",
        points: [
          "SRE was pioneered at Google and described in the Google SRE book",
          "SREs spend up to 50% time on development, 50% on operations",
          "Error budgets balance reliability with velocity",
          "Toil is manual work that can and should be automated"
        ]
      },
      {
        title: "Key SRE Metrics",
        body: "SRE uses data-driven metrics to measure and improve reliability.",
        points: [
          "SLI (Service Level Indicator): a measure of service performance",
          "SLO (Service Level Objective): target reliability level",
          "Error budget = 1 - SLO (acceptable unreliability)",
          "Burning error budget too fast means slow down releases"
        ]
      }
    ],
    quiz: [
      {
        q: "What does SRE stand for?",
        opts: [
          "Site Reliability Engineering",
          "System Resource Engineering",
          "Server Runtime Environment",
          "Secure Remote Execution"
        ],
        ans: 0
      },
      {
        q: "What is an SLO?",
        opts: [
          "A CSS property",
          "Service Level Objective — a target reliability level",
          "A database constraint",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is an error budget?",
        opts: [
          "A CSS animation",
          "The acceptable amount of unreliability (1 - SLO)",
          "A database budget",
          "A network allowance"
        ],
        ans: 1
      },
      {
        q: "What is toil?",
        opts: [
          "A CSS class",
          "Manual, repetitive, automatable operational work",
          "A database term",
          "A network load"
        ],
        ans: 1
      },
      {
        q: "What is a postmortem?",
        opts: [
          "A CSS selector",
          "A blameless analysis of an incident to prevent recurrence",
          "A database analysis",
          "A network review"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 107,
    title: "Unity Game Development with C#",
    instructor: "Oduye Emmanuel",
    category: "Game Development",
    duration: "16.5 hours",
    level: "intermediate",
    description: "Build games with Unity and C#. Game objects, physics, scripting, animations, audio, UI, and publishing to multiple platforms.",
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "unity",
      "game development",
      "c#",
      "2d",
      "3d"
    ],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "Unity Editor & Game Objects",
        dur: "125 min",
        yt: "XnUy9HBY7MQ"
      },
      {
        title: "C# Scripting for Games — Movement, Physics, Input",
        dur: "245 min",
        yt: "dQefklIReUA"
      },
      {
        title: "Animations, Audio & UI Systems",
        dur: "280 min",
        yt: "UjfG5t3uPMA"
      },
      {
        title: "Building & Publishing Complete Games",
        dur: "340 min",
        yt: "o4wB3pQHmkA"
      }
    ],
    reading: [
      {
        title: "Why Unity?",
        body: "Unity is the world's most popular game engine, used for 2D, 3D, VR, and AR games across mobile, desktop, and consoles.",
        points: [
          "C# scripting with powerful built-in physics",
          "Asset Store provides thousands of ready-made assets",
          "Supports 25+ platforms including mobile and web",
          "Massive community and learning resources"
        ]
      },
      {
        title: "Unity Core Concepts",
        body: "Understanding these concepts is essential for Unity development.",
        points: [
          "GameObjects are the fundamental building blocks",
          "Components add behavior to GameObjects",
          "Scenes organize game levels and menus",
          "Prefabs are reusable GameObject templates"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Unity?",
        opts: [
          "A CSS framework",
          "A cross-platform game engine",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a GameObject?",
        opts: [
          "A CSS object",
          "The fundamental building block in Unity",
          "A database object",
          "A JavaScript object"
        ],
        ans: 1
      },
      {
        q: "What is a prefab?",
        opts: [
          "A CSS prefab",
          "A reusable GameObject template",
          "A database template",
          "A network pre-fabrication"
        ],
        ans: 1
      },
      {
        q: "What language does Unity use?",
        opts: [
          "Python",
          "C#",
          "JavaScript",
          "C++"
        ],
        ans: 1
      },
      {
        q: "What is a component in Unity?",
        opts: [
          "A CSS property",
          "A modular piece of functionality attached to a GameObject",
          "A database component",
          "A network component"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 108,
    title: "Unreal Engine 5",
    instructor: "Oduye Emmanuel",
    category: "Game Development",
    duration: "18.5 hours",
    level: "intermediate",
    description: "Create stunning games and experiences with Unreal Engine 5. Nanite, Lumen, Blueprints, C++, sequencer, and photorealistic rendering.",
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.8,
    keywords: [
      "unreal engine",
      "ue5",
      "nanite",
      "lumen",
      "blueprints"
    ],
    preview:"MNeX4EGtR5Y",
    lessons: [
      {
        title: "Unreal Engine 5 Interface & Project Setup",
        dur: "120 min",
        yt: "LsNW4FPHuYQ"
      },
      {
        title: "Blueprints Visual Scripting",
        dur: "255 min",
        yt: "gWokxMYycnI"
      },
      {
        title: "Nanite, Lumen & Photorealistic Rendering",
        dur: "310 min",
        yt: "7KqSJY-nCbs"
      },
      {
        title: "C++, Animation & Publishing",
        dur: "425 min",
        yt: "k-zM2jvN4c0"
      }
    ],
    reading: [
      {
        title: "UE5 Revolutionary Features",
        body: "Unreal Engine 5 introduced two groundbreaking technologies: Nanite and Lumen.",
        points: [
          "Nanite: virtualized geometry system enabling film-quality assets",
          "Lumen: fully dynamic global illumination",
          "World Partition: seamless large world streaming",
          "MetaHuman: high-fidelity digital humans"
        ]
      },
      {
        title: "Blueprint vs C++",
        body: "Unreal offers two development paths that can be combined.",
        points: [
          "Blueprints: visual scripting, fast iteration, no compilation",
          "C++: maximum performance, full engine access",
          "Use Blueprints for game logic, C++ for performance-critical",
          "Blueprint can call C++ functions and vice versa"
        ]
      }
    ],
    quiz: [
      {
        q: "Who developed Unreal Engine?",
        opts: [
          "Unity Technologies",
          "Epic Games",
          "Valve",
          "EA"
        ],
        ans: 1
      },
      {
        q: "What is Nanite?",
        opts: [
          "A CSS framework",
          "UE5's virtualized geometry system for high-detail assets",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is Lumen?",
        opts: [
          "A CSS animation",
          "UE5's dynamic global illumination system",
          "A database index",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What are Blueprints?",
        opts: [
          "A CSS property",
          "Visual scripting system in Unreal Engine",
          "A database schema",
          "A network diagram"
        ],
        ans: 1
      },
      {
        q: "What is a MetaHuman?",
        opts: [
          "A CSS class",
          "A high-fidelity digital human character framework in UE5",
          "A database entity",
          "A network user"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 109,
    title: "Godot Game Engine",
    instructor: "Oduye Emmanuel",
    category: "Game Development",
    duration: "10.5 hours",
    level: "intermediate",
    description: "Build games with Godot Engine 4. GDScript, scene system, signals, physics, UI, and 2D/3D game development in this free open-source engine.",
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "godot",
      "game engine",
      "gdscript",
      "2d",
      "open source"
    ],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "Godot Interface & Scene System",
        dur: "75 min",
        yt: "UVx_qQyB0Is"
      },
      {
        title: "GDScript — Variables, Functions, Signals",
        dur: "145 min",
        yt: "eGihQ3O7UuA"
      },
      {
        title: "2D Game Development — Physics, Animation, UI",
        dur: "225 min",
        yt: "OQrJzEDQyRg"
      },
      {
        title: "3D, Shaders & Exporting Games",
        dur: "185 min",
        yt: "Qp1eXj4Wpmo"
      }
    ],
    reading: [
      {
        title: "Why Godot?",
        body: "Godot is a free, open-source game engine with a unique scene-based architecture and its own scripting language, GDScript.",
        points: [
          "Completely free with no royalties or licensing",
          "Lightweight editor with small download size",
          "GDScript is Python-like and easy to learn",
          "Scenes can be nested as nodes in a tree"
        ]
      },
      {
        title: "Godot's Scene System",
        body: "Unlike Unity's GameObject-Component model, Godot uses a tree of nodes organized in scenes.",
        points: [
          "Everything is a Node organized in a tree",
          "Scenes are reusable packages of nodes",
          "Signals provide decoupled communication",
          "Ownership and groups manage node relationships"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Godot?",
        opts: [
          "A CSS framework",
          "A free, open-source game engine",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What language does Godot use?",
        opts: [
          "Python",
          "GDScript (Python-like)",
          "C#",
          "JavaScript"
        ],
        ans: 1
      },
      {
        q: "What is a scene in Godot?",
        opts: [
          "A CSS class",
          "A reusable tree of nodes forming a game level or component",
          "A database view",
          "A network scene"
        ],
        ans: 1
      },
      {
        q: "What are signals in Godot?",
        opts: [
          "A CSS animation",
          "A message system for decoupled node communication",
          "A database trigger",
          "A network signal"
        ],
        ans: 1
      },
      {
        q: "What is the root node?",
        opts: [
          "A CSS selector",
          "The top-most node in a scene tree",
          "A database root",
          "A network root"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 110,
    title: "Game Design & Level Design",
    instructor: "Oduye Emmanuel",
    category: "Game Development",
    duration: "7.5 hours",
    level: "beginner",
    description: "Learn game design principles and level design. Player engagement, game mechanics, level flow, pacing, storytelling, and prototyping.",
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "game design",
      "level design",
      "mechanics",
      "prototyping",
      "storytelling"
    ],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "Game Design Fundamentals",
        dur: "55 min",
        yt: "ON0A8X0nDLA"
      },
      {
        title: "Game Mechanics & Player Engagement",
        dur: "95 min",
        yt: "iF7QLC9O-a0"
      },
      {
        title: "Level Design — Layout, Flow & Pacing",
        dur: "155 min",
        yt: "NEfwVJvhMpI"
      },
      {
        title: "Prototyping, Playtesting & Iteration",
        dur: "145 min",
        yt: "5GFZ9EAnH8k"
      }
    ],
    reading: [
      {
        title: "What is Game Design?",
        body: "Game design is the art of creating rules, mechanics, and experiences that engage players and evoke emotions.",
        points: [
          "Core loop: the primary action players repeat",
          "Game mechanics are the rules and systems",
          "Player agency gives meaningful choices",
          "Balancing challenge and skill creates flow"
        ]
      },
      {
        title: "Level Design Principles",
        body: "Level design shapes the player's journey through space, challenge, and narrative.",
        points: [
          "Guiding players without explicit instructions",
          "Pacing alternates tension and relief",
          "Reward exploration with meaningful content",
          "Verticality adds dimension to gameplay"
        ]
      }
    ],
    quiz: [
      {
        q: "What is game design?",
        opts: [
          "A CSS property",
          "Creating rules, mechanics, and experiences for games",
          "A database design",
          "A network design"
        ],
        ans: 1
      },
      {
        q: "What is the core game loop?",
        opts: [
          "A CSS animation",
          "The primary repeated action sequence players engage in",
          "A database cycle",
          "A network loop"
        ],
        ans: 1
      },
      {
        q: "What is flow state in gaming?",
        opts: [
          "A CSS property",
          "The optimal state where challenge matches skill",
          "A database flow",
          "A network state"
        ],
        ans: 1
      },
      {
        q: "What is level pacing?",
        opts: [
          "A CSS class",
          "The rhythm of challenge, exploration, and story throughout a level",
          "A database pace",
          "A network term"
        ],
        ans: 1
      },
      {
        q: "What is playtesting?",
        opts: [
          "A CSS selector",
          "Testing a game with real players to gather feedback",
          "A database test",
          "A network test"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 111,
    title: "Blockchain & Web3 Fundamentals",
    instructor: "Oduye Emmanuel",
    category: "Emerging Tech",
    duration: "7.5 hours",
    level: "beginner",
    description: "Understand blockchain technology and Web3. Cryptocurrency, consensus mechanisms, smart contracts, DeFi, NFTs, and decentralized applications.",
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "blockchain",
      "web3",
      "cryptocurrency",
      "defi",
      "nft"
    ],
    preview:"eIQh02xuVw4",
    lessons: [
      {
        title: "Blockchain Architecture & Consensus",
        dur: "65 min",
        yt: "YJy0RZP9EI8"
      },
      {
        title: "Cryptocurrency & Wallets",
        dur: "85 min",
        yt: "fOMVZXLj0-o"
      },
      {
        title: "Smart Contracts & dApps",
        dur: "155 min",
        yt: "9HcdBJMSC40"
      },
      {
        title: "DeFi, NFTs & The Web3 Ecosystem",
        dur: "145 min",
        yt: "GtXDjjUjnls"
      }
    ],
    reading: [
      {
        title: "What is Blockchain?",
        body: "A blockchain is a distributed, immutable ledger that records transactions across a network of computers without central authority.",
        points: [
          "Blocks contain batches of transactions",
          "Each block links to the previous via cryptographic hash",
          "Consensus mechanisms (PoW, PoS) validate transactions",
          "Immutability ensures records cannot be altered"
        ]
      },
      {
        title: "Web3 vs Web2",
        body: "Web3 shifts from centralized platforms to decentralized protocols owned by users.",
        points: [
          "Web2: centralized platforms, user-generated content",
          "Web3: decentralized, user-owned, token-based",
          "dApps run on blockchain smart contracts",
          "DAOs are community-owned organizations"
        ]
      }
    ],
    quiz: [
      {
        q: "What is blockchain?",
        opts: [
          "A CSS framework",
          "A distributed, immutable digital ledger",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is a smart contract?",
        opts: [
          "A CSS property",
          "Self-executing code on a blockchain that enforces agreements",
          "A database contract",
          "A legal agreement"
        ],
        ans: 1
      },
      {
        q: "What is a dApp?",
        opts: [
          "A CSS animation",
          "A decentralized application running on a blockchain",
          "A database app",
          "A network app"
        ],
        ans: 1
      },
      {
        q: "What is proof of work?",
        opts: [
          "A CSS selector",
          "A consensus mechanism requiring computational work to validate blocks",
          "A database mechanism",
          "A network proof"
        ],
        ans: 1
      },
      {
        q: "What is DeFi?",
        opts: [
          "A CSS framework",
          "Decentralized Finance — financial services on blockchain without intermediaries",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 112,
    title: "Solidity & Smart Contracts",
    instructor: "Oduye Emmanuel",
    category: "Emerging Tech",
    duration: "8.5 hours",
    level: "intermediate",
    description: "Build smart contracts on Ethereum with Solidity. ERC20, ERC721, inheritance, gas optimization, security, and deploying to mainnet and testnets.",
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "solidity",
      "smart contracts",
      "ethereum",
      "erc20",
      "web3"
    ],
    preview:"eIQh02xuVw4",
    lessons: [
      {
        title: "Solidity Syntax & Data Structures",
        dur: "85 min",
        yt: "ipwxYaXP1tY"
      },
      {
        title: "Functions, Modifiers & Inheritance",
        dur: "125 min",
        yt: "gVr0uNL1iJ8"
      },
      {
        title: "ERC20, ERC721 & Token Standards",
        dur: "155 min",
        yt: "Y6Y1fL-H7qk"
      },
      {
        title: "Security, Gas Optimization & Deployment",
        dur: "145 min",
        yt: "g2o8oAdH93I"
      }
    ],
    reading: [
      {
        title: "What is Solidity?",
        body: "Solidity is a statically-typed programming language for implementing smart contracts on Ethereum and EVM-compatible blockchains.",
        points: [
          "Syntax similar to JavaScript and C++",
          "Compiled to EVM bytecode for execution",
          "Contracts are similar to classes in OOP",
          "Ether (ETH) is used to pay gas fees"
        ]
      },
      {
        title: "Smart Contract Security",
        body: "Security is critical in smart contracts because deployed code is immutable and financial.",
        points: [
          "Reentrancy attacks exploit recursive calls",
          "Integer overflow/underflow can break logic",
          "Use OpenZeppelin audited contracts",
          "Always test on testnets before mainnet"
        ]
      }
    ],
    quiz: [
      {
        q: "What blockchain is Solidity primarily for?",
        opts: [
          "Bitcoin",
          "Ethereum",
          "Solana",
          "Cardano"
        ],
        ans: 1
      },
      {
        q: "What is a smart contract?",
        opts: [
          "A CSS property",
          "Code deployed on blockchain that executes automatically",
          "A database contract",
          "A network service"
        ],
        ans: 1
      },
      {
        q: "What is an ERC20 token?",
        opts: [
          "A CSS token",
          "A standard for fungible tokens on Ethereum",
          "A database token",
          "A network token"
        ],
        ans: 1
      },
      {
        q: "What is gas in Ethereum?",
        opts: [
          "A CSS selector",
          "A fee paid to execute transactions on Ethereum",
          "A database cost",
          "A network fee"
        ],
        ans: 1
      },
      {
        q: "What is OpenZeppelin?",
        opts: [
          "A CSS framework",
          "An audited library of secure smart contract standards",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 113,
    title: "Internet of Things (IoT)",
    instructor: "Oduye Emmanuel",
    category: "Emerging Tech",
    duration: "7.5 hours",
    level: "intermediate",
    description: "Build IoT systems with sensors, microcontrollers, and cloud platforms. Arduino, Raspberry Pi, MQTT, AWS IoT, and real-world automation projects.",
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: [
      "iot",
      "arduino",
      "raspberry pi",
      "mqtt",
      "sensors"
    ],
    preview:"eZ74x6dVYes",
    lessons: [
      {
        title: "IoT Architecture & Hardware Basics",
        dur: "55 min",
        yt: "LlhmzVLxU1s"
      },
      {
        title: "Arduino — Sensors, Actuators & Programming",
        dur: "145 min",
        yt: "zJ-Lqe90j-s"
      },
      {
        title: "Raspberry Pi — Linux, GPIO & Python",
        dur: "155 min",
        yt: "hpQJ2CM0aDk"
      },
      {
        title: "MQTT, Cloud Platforms & Real Projects",
        dur: "95 min",
        yt: "dgGi2LTkYAg"
      }
    ],
    reading: [
      {
        title: "What is IoT?",
        body: "The Internet of Things connects physical devices to the internet, enabling data collection, monitoring, and automation.",
        points: [
          "Devices contain sensors, processors, and connectivity",
          "Edge devices process data locally",
          "Cloud platforms aggregate and analyze data",
          "IoT enables smart homes, factories, and cities"
        ]
      },
      {
        title: "IoT Communication Protocols",
        body: "Different protocols suit different IoT use cases based on range, power, and bandwidth.",
        points: [
          "MQTT: lightweight publish-subscribe for sensors",
          "CoAP: UDP-based for constrained devices",
          "HTTP/HTTPS: standard web API for cloud",
          "Bluetooth/BLE: short-range device communication"
        ]
      }
    ],
    quiz: [
      {
        q: "What is IoT?",
        opts: [
          "A CSS framework",
          "The network of physical devices connected to the internet",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is Arduino?",
        opts: [
          "A CSS property",
          "An open-source microcontroller platform for building electronic projects",
          "A database",
          "A network device"
        ],
        ans: 1
      },
      {
        q: "What is MQTT?",
        opts: [
          "A CSS animation",
          "A lightweight messaging protocol for IoT devices",
          "A database protocol",
          "A network protocol"
        ],
        ans: 1
      },
      {
        q: "What is a sensor?",
        opts: [
          "A CSS selector",
          "A device that detects and measures physical properties",
          "A database field",
          "A network element"
        ],
        ans: 1
      },
      {
        q: "What is an actuator?",
        opts: [
          "A CSS class",
          "A device that moves or controls a mechanism in response to signals",
          "A database action",
          "A network actor"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 114,
    title: "AR/VR Development with Unity",
    instructor: "Oduye Emmanuel",
    category: "Emerging Tech",
    duration: "9.5 hours",
    level: "intermediate",
    description: "Build augmented and virtual reality experiences with Unity. AR Foundation, XR Interaction Toolkit, spatial tracking, and cross-platform deployment.",
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: [
      "ar",
      "vr",
      "unity",
      "xr",
      "augmented reality"
    ],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "XR Fundamentals & Unity Setup",
        dur: "65 min",
        yt: "kQcN5vMBT50"
      },
      {
        title: "AR Foundation — Plane Detection, Image Tracking",
        dur: "145 min",
        yt: "PZ-Qf4SUJdo"
      },
      {
        title: "VR with XR Interaction Toolkit",
        dur: "195 min",
        yt: "pW1eImVQHMk"
      },
      {
        title: "Spatial Audio, UX Design & Publishing",
        dur: "165 min",
        yt: "UcOJ3hBZBS0"
      }
    ],
    reading: [
      {
        title: "AR vs VR vs MR",
        body: "Extended Reality (XR) encompasses Augmented, Virtual, and Mixed Reality technologies.",
        points: [
          "AR overlays digital content on the real world (Pokemon Go)",
          "VR immerses users in fully virtual environments (Oculus Quest)",
          "MR blends real and virtual with interaction between both",
          "XR Interaction Toolkit standardizes cross-platform development"
        ]
      },
      {
        title: "Unity XR Development",
        body: "Unity provides powerful tools for building XR experiences.",
        points: [
          "AR Foundation provides cross-platform AR development",
          "XR Interaction Toolkit enables common XR interactions",
          "XR Plug-in Management handles device-specific plug-ins",
          "Performance optimization is critical for XR"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Augmented Reality?",
        opts: [
          "A CSS property",
          "Overlaying digital content on the real world",
          "A database extension",
          "A network reality"
        ],
        ans: 1
      },
      {
        q: "What is Virtual Reality?",
        opts: [
          "A CSS animation",
          "A fully immersive digital environment",
          "A database view",
          "A network simulation"
        ],
        ans: 1
      },
      {
        q: "What is AR Foundation?",
        opts: [
          "A CSS framework",
          "Unity's cross-platform framework for building AR apps",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What are the main VR platforms?",
        opts: [
          "A CSS property",
          "Oculus Quest, HTC Vive, PlayStation VR, Valve Index",
          "A database platform",
          "A network hardware"
        ],
        ans: 1
      },
      {
        q: "What is hand tracking in VR?",
        opts: [
          "A CSS selector",
          "Using camera sensors to track hand movements without controllers",
          "A database tracking",
          "A network method"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 115,
    title: "Quantum Computing Primer",
    instructor: "Oduye Emmanuel",
    category: "Emerging Tech",
    duration: "4.5 hours",
    level: "beginner",
    description: "Understand quantum computing fundamentals. Qubits, superposition, entanglement, quantum gates, algorithms, and programming with Qiskit.",
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: [
      "quantum computing",
      "qubit",
      "qiskit",
      "superposition",
      "entanglement"
    ],
    preview:"BT2Cv-Tjq7Q",
    lessons: [
      {
        title: "Quantum vs Classical Computing",
        dur: "28 min",
        yt: "jHoEjvu3Bm0"
      },
      {
        title: "Qubits, Superposition & Entanglement",
        dur: "55 min",
        yt: "vTbUlBFY7RY"
      },
      {
        title: "Quantum Gates & Circuits",
        dur: "75 min",
        yt: "JRgIXyEPed4"
      },
      {
        title: "Qiskit — Programming Real Quantum Computers",
        dur: "112 min",
        yt: "RrUTO6Gwd2A"
      }
    ],
    reading: [
      {
        title: "Quantum Computing Fundamentals",
        body: "Quantum computing harnesses quantum mechanics to process information in ways classical computers cannot.",
        points: [
          "Qubits can be 0, 1, or both simultaneously (superposition)",
          "Entanglement links qubits so measuring one affects the other",
          "Quantum gates manipulate qubits through unitary operations",
          "Quantum algorithms can solve certain problems exponentially faster"
        ]
      },
      {
        title: "Current State & Future",
        body: "Quantum computing is still early but advancing rapidly with real hardware available via cloud.",
        points: [
          "IBM, Google, and Rigetti offer cloud quantum computers",
          "NISQ (Noisy Intermediate-Scale Quantum) era: 50-1000 qubits",
          "Error correction is the main challenge for scaling",
          "Applications: cryptography, drug discovery, optimization"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a qubit?",
        opts: [
          "A CSS property",
          "A quantum bit that can exist in superposition states",
          "A database unit",
          "A network bit"
        ],
        ans: 1
      },
      {
        q: "What is superposition?",
        opts: [
          "A CSS animation",
          "A qubit existing in multiple states simultaneously until measured",
          "A database state",
          "A network position"
        ],
        ans: 1
      },
      {
        q: "What is entanglement?",
        opts: [
          "A CSS selector",
          "A quantum correlation where qubits are linked regardless of distance",
          "A database join",
          "A network link"
        ],
        ans: 1
      },
      {
        q: "What is Qiskit?",
        opts: [
          "A CSS framework",
          "IBM's open-source quantum computing SDK",
          "A database",
          "A JavaScript library"
        ],
        ans: 1
      },
      {
        q: "What is Shor's algorithm?",
        opts: [
          "A CSS animation",
          "A quantum algorithm for factoring large numbers efficiently",
          "A database algorithm",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },
  {
    id: 116,
    title: "Prompt Engineering for Developers",
    instructor: "Oduye Emmanuel",
    category: "Emerging Tech",
    duration: "3.8 hours",
    level: "beginner",
    description: "Master prompt engineering specifically for developers. Code generation, debugging with AI, API integration, and building developer tools with LLMs.",
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: [
      "prompt engineering",
      "ai coding",
      "code generation",
      "developer tools",
      "llm"
    ],
    preview:"aD7pcm1TfRo",
    lessons: [
      {
        title: "Prompting for Code Generation",
        dur: "25 min",
        yt: "jC4v5ASiRuw"
      },
      {
        title: "Debugging & Refactoring with AI",
        dur: "55 min",
        yt: "BhkW2Nq0NXM"
      },
      {
        title: "Building RAG Systems for Developer Docs",
        dur: "68 min",
        yt: "St6vVBkRtNg"
      },
      {
        title: "Creating AI-Powered Developer Tools",
        dur: "80 min",
        yt: "GPZ1lGBy2qs"
      }
    ],
    reading: [
      {
        title: "Prompting for Code",
        body: "Developers use LLMs differently than general users — precision, context, and structured output matter most.",
        points: [
          "Specify language, framework, and version in prompts",
          "Use comments to describe desired behavior",
          "Ask for explanations alongside code",
          "Chain prompts for complex code generation"
        ]
      },
      {
        title: "AI-Assisted Development Workflow",
        body: "Integrate AI throughout the development lifecycle for maximum productivity.",
        points: [
          "Generate boilerplate and repetitive code",
          "Write unit tests by describing behavior",
          "Document code with AI-generated comments",
          "Debug by providing error messages and context"
        ]
      }
    ],
    quiz: [
      {
        q: "What makes code prompting different from general prompting?",
        opts: [
          "A CSS property",
          "Requires precision, language specification, and structured output",
          "A database query",
          "A network request"
        ],
        ans: 1
      },
      {
        q: "What is context in code prompts?",
        opts: [
          "A CSS animation",
          "Relevant code, errors, and requirements provided to guide the LLM",
          "A database context",
          "A network context"
        ],
        ans: 1
      },
      {
        q: "How can AI help with debugging?",
        opts: [
          "A CSS selector",
          "By analyzing error messages and code to identify root causes",
          "A database error",
          "A JavaScript console"
        ],
        ans: 1
      },
      {
        q: "What is the best way to generate boilerplate code?",
        opts: [
          "A CSS property",
          "Describe the structure clearly and ask for specific patterns",
          "A database template",
          "A network pattern"
        ],
        ans: 1
      },
      {
        q: "What is a RAG system for developer docs?",
        opts: [
          "A CSS framework",
          "Retrieving relevant documentation to provide context for code generation",
          "A database system",
          "A network protocol"
        ],
        ans: 1
      }
    ]
  },

  {
    id: 117,
    title: "Perl Programming — Text Processing & SysAdmin",
    instructor: "Oduye Emmanuel",
    category: "Programming",
    duration: "8.3 hours",
    level: "intermediate",
    description: "Master Perl for text processing, system administration, and CGI scripting. Covers regex, file manipulation, modules, and CPAN.",
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["perl", "regex", "sysadmin", "text processing", "cgi"],
    preview:"I4EWvMFj37g",
    lessons: [
      {
        title: "Perl Basics — Syntax & Data Types",
        dur: "45 min",
        yt: "WEghIXq8kSg"
      },
      {
        title: "Regular Expressions Deep Dive",
        dur: "78 min",
        yt: "m1BBSXsT1Yk"
      },
      {
        title: "File I/O & System Administration",
        dur: "62 min",
        yt: "eHx_Mkkz6bQ"
      },
      {
        title: "CPAN Modules & Advanced Topics",
        dur: "55 min",
        yt: "kP1Fw3tLNRY"
      }
    ],
    reading: [
      {
        title: "Why Perl?",
        body: "Perl is a highly capable scripting language known for its powerful text processing and system administration capabilities.",
        points: [
          "Perl excels at text processing with built-in regex",
          "CPAN has over 200,000 modules for every task",
          "Perl is the glue of the internet — legacy but irreplaceable",
          "There's more than one way to do it (TMTOWTDI)"
        ]
      },
      {
        title: "Perl Philosophy",
        body: "Perl prioritizes programmer productivity and expressiveness over strict enforcement.",
        points: [
          "Context determines behavior (scalar vs list)",
          "Built-in regex operators make pattern matching effortless",
          "Autovivification creates structures on access",
          "Local variables with my() prevent namespace pollution"
        ]
      }
    ],
    quiz: [
      {
        q: "What does CPAN stand for?",
        opts: [
          "Comprehensive Perl Archive Network",
          "Central Perl Access Node",
          "Compiled Perl Assembly Notation",
          "Common Perl API Namespace"
        ],
        ans: 0
      },
      {
        q: "Which operator binds a regex match in Perl?",
        opts: [
          "=~",
          "==",
          "===",
          "=>"
        ],
        ans: 0
      },
      {
        q: "What does the variable $_ represent?",
        opts: [
          "The default input/pattern space",
          "A special filehandle",
          "An array of arguments",
          "A hash of environment vars"
        ],
        ans: 0
      },
      {
        q: "How do you declare a private variable in Perl?",
        opts: [
          "private $x",
          "my $x",
          "local $x",
          "our $x"
        ],
        ans: 1
      },
      {
        q: "Which data structure uses curly braces in Perl?",
        opts: [
          "Array",
          "Hash",
          "Scalar",
          "Filehandle"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: ["lua", "scripting", "gamedev", "roblox", "love2d"],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "Lua Fundamentals — Syntax & Types",
        dur: "52 min",
        yt: "iMacxZQNRbM"
      },
      {
        title: "Tables — The One Data Structure",
        dur: "68 min",
        yt: "6WBLfKjY1J0"
      },
      {
        title: "Metatables & Object-Oriented Lua",
        dur: "45 min",
        yt: "Qw0CbC8LWn4"
      },
      {
        title: "Coroutines & Game Integration",
        dur: "70 min",
        yt: "TGbLqVZ3LJs"
      }
    ],
    reading: [
      {
        title: "Why Lua?",
        body: "Lua is a lightweight, embeddable scripting language designed for configuration, scripting, and game development.",
        points: [
          "Extremely fast — one of the fastest interpreted languages",
          "Tables serve as arrays, dictionaries, and objects",
          "First-class functions enable functional patterns",
          "Used in Roblox, World of Warcraft, and Adobe Lightroom"
        ]
      },
      {
        title: "Lua Design",
        body: "Lua's simplicity is its superpower — the whole language fits in a few hundred pages.",
        points: [
          "Everything is a table (except primitives)",
          "Metatables allow operator overloading and inheritance",
          "Coroutines provide cooperative multitasking",
          "The stack-based C API makes embedding trivial"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Lua's primary data structure?",
        opts: [
          "Array",
          "Table",
          "List",
          "Dictionary"
        ],
        ans: 1
      },
      {
        q: "How are Lua arrays indexed?",
        opts: [
          "0-based",
          "1-based",
          "It depends on the type",
          "Negative-based"
        ],
        ans: 1
      },
      {
        q: "What does ... do in function parameters?",
        opts: [
          "Rest parameter",
          "Vararg expression",
          "Spread operator",
          "Default value"
        ],
        ans: 1
      },
      {
        q: "Which feature enables OOP in Lua?",
        opts: [
          "Classes",
          "Metatables",
          "Interfaces",
          "Mixins"
        ],
        ans: 1
      },
      {
        q: "What is a coroutine?",
        opts: [
          "A parallel thread",
          "A cooperative multitasking primitive",
          "A type of table",
          "A C function wrapper"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: ["julia", "scientific computing", "numerical", "data science", "multiple dispatch"],
    preview:"BT2Cv-Tjq7Q",
    lessons: [
      {
        title: "Julia Basics — Syntax & Types",
        dur: "60 min",
        yt: "EfKGHkIr8Eg"
      },
      {
        title: "Multiple Dispatch & Generic Programming",
        dur: "55 min",
        yt: "7PPwCg1O6l8"
      },
      {
        title: "DataFrames & Data Science Tooling",
        dur: "75 min",
        yt: "q7p7Kj7z3gM"
      },
      {
        title: "Metaprogramming & Parallel Computing",
        dur: "80 min",
        yt: "h3a4d5g6h7j8"
      }
    ],
    reading: [
      {
        title: "Why Julia?",
        body: "Julia combines the ease of Python with the speed of C, making it ideal for scientific and numerical computing.",
        points: [
          "Runs at C/Fortran speeds via LLVM JIT compilation",
          "Multiple dispatch is the core paradigm",
          "Rich ecosystem for data science and ML",
          "GPU and parallel computing support built-in"
        ]
      },
      {
        title: "The Two-Master Problem",
        body: "Julia solves the 'two-language problem' where researchers prototype in Python but rewrite in C++ for speed.",
        points: [
          "Write once, run at native speed",
          "The type system is dynamic but allows optional type annotations",
          "Dot-broadcasting vectorizes operations elegantly",
          "Built-in package manager with reproducible environments"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Julia's core paradigm?",
        opts: [
          "Object-oriented",
          "Multiple dispatch",
          "Functional",
          "Procedural"
        ],
        ans: 1
      },
      {
        q: "Which compiler does Julia use?",
        opts: [
          "GCC",
          "LLVM",
          "Clang",
          "MSVC"
        ],
        ans: 1
      },
      {
        q: "How do you broadcast a function in Julia?",
        opts: [
          "map()",
          ". (dot syntax)",
          "broadcast()",
          "apply()"
        ],
        ans: 1
      },
      {
        q: "What does @time do in Julia?",
        opts: [
          "Times execution",
          "Profiles memory",
          "Both timing and allocation info",
          "Sleeps the thread"
        ],
        ans: 2
      },
      {
        q: "What is the equivalent of None in Julia?",
        opts: [
          "null",
          "nil",
          "nothing",
          "undefined"
        ],
        ans: 2
      }
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
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: ["scala", "functional programming", "akka", "spark", "jvm"],
    preview:"m4-HM_sCvtQ",
    lessons: [
      {
        title: "Scala Fundamentals — Syntax & OOP",
        dur: "65 min",
        yt: "T8B4xV0Jj0k"
      },
      {
        title: "Functional Patterns & Immutability",
        dur: "80 min",
        yt: "L0gZ3K4n5v6"
      },
      {
        title: "Akka Actors & Concurrency",
        dur: "90 min",
        yt: "m7N8b9v0c1x"
      },
      {
        title: "Scala for Big Data with Spark",
        dur: "75 min",
        yt: "z2A3b4C5d6e"
      }
    ],
    reading: [
      {
        title: "Why Scala?",
        body: "Scala elegantly merges object-oriented and functional programming on the JVM with a powerful type system.",
        points: [
          "Interoperates seamlessly with Java libraries",
          "Immutability-by-default encourages safer code",
          "Case classes provide concise data carriers",
          "Pattern matching is a first-class feature"
        ]
      },
      {
        title: "The Type System",
        body: "Scala's type system is one of the most expressive on the JVM.",
        points: [
          "Type inference keeps code concise without sacrificing safety",
          "Implicits enable type classes and extension methods",
          "Higher-kinded types allow abstracting over type constructors",
          "Covariance and contravariance control subtyping relationships"
        ]
      }
    ],
    quiz: [
      {
        q: "What keyword declares a function in Scala?",
        opts: [
          "func",
          "def",
          "fn",
          "function"
        ],
        ans: 1
      },
      {
        q: "What is a case class in Scala?",
        opts: [
          "A class with boilerplate generated automatically",
          "A switch statement",
          "A Java interface",
          "A singleton object"
        ],
        ans: 0
      },
      {
        q: "What does val mean?",
        opts: [
          "A mutable variable",
          "An immutable reference",
          "A volatile field",
          "A variable-length argument"
        ],
        ans: 1
      },
      {
        q: "Which framework is Scala's standard actor library?",
        opts: [
          "RxScala",
          "Akka",
          "Monix",
          "ZIO"
        ],
        ans: 1
      },
      {
        q: "What does Option solve?",
        opts: [
          "Thread safety",
          "Null pointer safety",
          "Memory leaks",
          "Type erasure"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: ["elixir", "phoenix", "concurrency", "beam", "functional"],
    preview:"eIQh02xuVw4",
    lessons: [
      {
        title: "Elixir Fundamentals — Syntax & Pipelines",
        dur: "55 min",
        yt: "p7G8h9j0k1l"
      },
      {
        title: "OTP & GenServers — Concurrency Models",
        dur: "90 min",
        yt: "s2t3u4v5w6x"
      },
      {
        title: "Phoenix Framework — LiveView & Ecto",
        dur: "110 min",
        yt: "y7z8a9b0c1d"
      },
      {
        title: "Distributed Systems & Fault Tolerance",
        dur: "75 min",
        yt: "e2f3g4h5i6j"
      }
    ],
    reading: [
      {
        title: "Why Elixir?",
        body: "Elixir leverages the BEAM VM (from Erlang) to deliver massive concurrency with fault tolerance.",
        points: [
          "Actor model with lightweight processes (microseconds to spawn)",
          "Let it crash philosophy simplifies error handling",
          "Phoenix LiveView enables real-time UI without JS",
          "Pipeline operator |> makes data transformations readable"
        ]
      },
      {
        title: "The OTP Supervisors",
        body: "OTP (Open Telecom Platform) provides battle-tested patterns for building reliable systems.",
        points: [
          "GenServer abstracts client-server interactions",
          "Supervisors define restart strategies for child processes",
          "Applications are the deployment unit",
          "ETS and Mnesia provide in-memory databases"
        ]
      }
    ],
    quiz: [
      {
        q: "Which VM does Elixir run on?",
        opts: [
          "JVM",
          "BEAM",
          "V8",
          "CLR"
        ],
        ans: 1
      },
      {
        q: "What operator chains function calls in Elixir?",
        opts: [
          ">>",
          "|>",
          "->",
          "=>"
        ],
        ans: 1
      },
      {
        q: "What is a GenServer?",
        opts: [
          "A web server",
          "An OTP behaviour for client-server interaction",
          "A database adapter",
          "A testing framework"
        ],
        ans: 1
      },
      {
        q: "What is Phoenix LiveView?",
        opts: [
          "A static site generator",
          "Real-time UI updates over WebSockets",
          "An admin dashboard",
          "A CSS framework"
        ],
        ans: 1
      },
      {
        q: "What does 'let it crash' mean in Elixir?",
        opts: [
          "Ignore errors",
          "Let processes fail and restart via supervisors",
          "Crash the whole system",
          "Use try-catch everywhere"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["erlang", "concurrency", "otp", "distributed systems", "beam"],
    preview:"eIQh02xuVw4",
    lessons: [
      {
        title: "Erlang Basics — Syntax & Pattern Matching",
        dur: "50 min",
        yt: "k8l9m0n1o2p"
      },
      {
        title: "Processes & Message Passing",
        dur: "65 min",
        yt: "q3r4s5t6u7v"
      },
      {
        title: "OTP Behaviours — GenServer, Supervisor",
        dur: "80 min",
        yt: "w8x9y0z1a2b"
      },
      {
        title: "Distributed Erlang & Mnesia",
        dur: "70 min",
        yt: "c3d4e5f6g7h"
      }
    ],
    reading: [
      {
        title: "Why Erlang?",
        body: "Erlang was designed for telephone switches — systems that never stop and handle millions of concurrent connections.",
        points: [
          "Lightweight processes share no memory",
          "Immutable data eliminates race conditions",
          "Hot code swapping updates running systems",
          "Built-in distribution makes clustering trivial"
        ]
      },
      {
        title: "The Actor Model",
        body: "Erlang popularized the actor model where each process is an independent actor communicating via messages.",
        points: [
          "Processes are isolated — no shared state",
          "Message passing is asynchronous by default",
          "Selective receive lets processes filter messages",
          "Process linking propagates failures predictably"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Erlang?",
        opts: [
          "Microsoft",
          "Ericsson",
          "Google",
          "Bell Labs"
        ],
        ans: 1
      },
      {
        q: "How are concurrent units in Erlang called?",
        opts: [
          "Threads",
          "Processes",
          "Fibers",
          "Greenlets"
        ],
        ans: 1
      },
      {
        q: "What does OTP stand for?",
        opts: [
          "Open Telecom Platform",
          "Object Transaction Protocol",
          "Operational Transformation Platform",
          "Online Transaction Processing"
        ],
        ans: 0
      },
      {
        q: "Which operator is used for list concatenation?",
        opts: [
          "++",
          "::",
          "||",
          "=>"
        ],
        ans: 0
      },
      {
        q: "What is hot code swapping?",
        opts: [
          "Replacing code at runtime without stopping the system",
          "A deployment script",
          "A compiler optimization",
          "A database migration"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: ["clojure", "lisp", "functional", "jvm", "concurrency"],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "Clojure Syntax — Parentheses & Homoiconicity",
        dur: "45 min",
        yt: "i8j9k0l1m2n"
      },
      {
        title: "Functional Core — Sequences & Immutability",
        dur: "60 min",
        yt: "o3p4q5r6s7t"
      },
      {
        title: "Concurrency — Atoms, Refs & Agents",
        dur: "70 min",
        yt: "u8v9w0x1y2z"
      },
      {
        title: "ClojureScript & Full-Stack Clojure",
        dur: "55 min",
        yt: "a3b4c5d6e7f"
      }
    ],
    reading: [
      {
        title: "Why Clojure?",
        body: "Clojure is a modern Lisp that brings functional programming and immutability to mainstream platforms.",
        points: [
          "Homoiconic — code is data, enabling powerful macros",
          "Immutable data structures are persistent and efficient",
          "STM and agents provide safe concurrency",
          "Interops seamlessly with Java and JavaScript"
        ]
      },
      {
        title: "Clojure's Philosophy",
        body: "Clojure embraces simplicity and functional programming to manage complexity.",
        points: [
          "Values over identities — prefer pure functions",
          "Data orientation — represent everything as data",
          "Programming to abstractions (sequences, collections)",
          "Minimal syntax makes the language learnable"
        ]
      }
    ],
    quiz: [
      {
        q: "What does 'homoiconic' mean?",
        opts: [
          "Same type for all variables",
          "Code is represented as data structures in the language",
          "Single inheritance hierarchy",
          "One data structure for everything"
        ],
        ans: 1
      },
      {
        q: "Which macro creates a Clojure function?",
        opts: [
          "fn",
          "defn",
          "lambda",
          "macro"
        ],
        ans: 1
      },
      {
        q: "What does '->>' do in Clojure?",
        opts: [
          "Thread-last macro — pipes value through forms",
          "Hash map accessor",
          "Function composition",
          "Type annotation"
        ],
        ans: 0
      },
      {
        q: "What is an atom in Clojure?",
        opts: [
          "A DNA molecule",
          "A thread-safe mutable reference",
          "A primitive number",
          "A character"
        ],
        ans: 1
      },
      {
        q: "Which runtime does Clojure primarily target?",
        opts: [
          "V8",
          "BEAM",
          "JVM",
          "CLR"
        ],
        ans: 2
      }
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
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: ["fsharp", "functional", "dotnet", "pattern matching", "async"],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "F# Basics — Syntax & Type Inference",
        dur: "50 min",
        yt: "g8h9i0j1k2l"
      },
      {
        title: "Discriminated Unions & Pattern Matching",
        dur: "65 min",
        yt: "m3n4o5p6q7r"
      },
      {
        title: "Async Workflows & Concurrency",
        dur: "55 min",
        yt: "s8t9u0v1w2x"
      },
      {
        title: "F# for Data Science & Scripting",
        dur: "60 min",
        yt: "y3z4a5b6c7d"
      }
    ],
    reading: [
      {
        title: "Why F#?",
        body: "F# brings functional programming to the .NET ecosystem with a concise and type-safe syntax.",
        points: [
          "Type inference keeps code clean and readable",
          "Discriminated unions model domain states precisely",
          "Railway-oriented programming for error handling",
          "Runs anywhere .NET runs — web, desktop, cloud"
        ]
      },
      {
        title: "Functional .NET",
        body: "F# integrates seamlessly with the .NET ecosystem while enforcing functional best practices.",
        points: [
          "Immutability is the default",
          "Computation expressions handle monadic patterns",
          "Type providers give type-safe access to data sources",
          "Units of measure catch dimensional analysis errors"
        ]
      }
    ],
    quiz: [
      {
        q: "What does F# default to?",
        opts: [
          "Mutability",
          "Immutability",
          "Dynamic typing",
          "Weak typing"
        ],
        ans: 1
      },
      {
        q: "What keyword defines a function in F#?",
        opts: [
          "fun",
          "let",
          "fn",
          "def"
        ],
        ans: 1
      },
      {
        q: "What is a Discriminated Union?",
        opts: [
          "A union of two types",
          "A type that can be one of several named cases",
          "A database table",
          "A class hierarchy"
        ],
        ans: 1
      },
      {
        q: "What does |> do in F#?",
        opts: [
          "Pipe operator — forwards value to function",
          "Type cast",
          "Logical OR",
          "Null check"
        ],
        ans: 0
      },
      {
        q: "What is a computation expression?",
        opts: [
          "A math expression",
          "A syntax for monadic patterns like async",
          "A type inference rule",
          "A logging function"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.9,
    keywords: ["objective-c", "apple", "ios", "macos", "legacy"],
    preview:"nAchMctX4YA",
    lessons: [
      {
        title: "Objective-C Syntax — Messages & Categories",
        dur: "55 min",
        yt: "e8f9g0h1i2j"
      },
      {
        title: "Memory Management — ARC & Retain Count",
        dur: "50 min",
        yt: "k3l4m5n6o7p"
      },
      {
        title: "Protocols, Delegates & Blocks",
        dur: "65 min",
        yt: "q8r9s0t1u2v"
      },
      {
        title: "Bridging to Swift & Modern iOS",
        dur: "45 min",
        yt: "w3x4y5z6a7b"
      }
    ],
    reading: [
      {
        title: "Why Learn Objective-C?",
        body: "Millions of lines of production iOS/macOS code are written in Objective-C — maintaining them requires understanding the language.",
        points: [
          "Full access to C APIs and libraries",
          "Dynamic runtime enables powerful metaprogramming",
          "Categories extend classes without subclassing",
          "Key-value observing (KVO) for model-view binding"
        ]
      },
      {
        title: "The Objective-C Runtime",
        body: "Objective-C's runtime is what makes its dynamic features possible.",
        points: [
          "Messages are resolved at runtime, not compile time",
          "isa pointer connects objects to their classes",
          "Method swizzling can replace implementations at runtime",
          "ARC (Automatic Reference Counting) manages memory"
        ]
      }
    ],
    quiz: [
      {
        q: "What character denotes a method call in Objective-C?",
        opts: [
          "[ ]",
          "( )",
          "{ }",
          "< >"
        ],
        ans: 0
      },
      {
        q: "What is a category in Objective-C?",
        opts: [
          "A loop construct",
          "A way to add methods to an existing class",
          "A type of property",
          "A memory zone"
        ],
        ans: 1
      },
      {
        q: "What does ARC stand for?",
        opts: [
          "Automatic Reference Counting",
          "Application Runtime Controller",
          "Async Return Callback",
          "Array Reference Counter"
        ],
        ans: 0
      },
      {
        q: "What is a protocol in Objective-C?",
        opts: [
          "A network standard",
          "An interface declaration",
          "A memory management scheme",
          "A loop variant"
        ],
        ans: 1
      },
      {
        q: "What is nil in Objective-C?",
        opts: [
          "An integer zero",
          "A null object pointer",
          "A boolean false",
          "An empty string"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    keywords: ["assembly", "x86", "reverse engineering", "low-level", "cpu"],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "CPU Architecture & Registers",
        dur: "60 min",
        yt: "c8d9e0f1g2h"
      },
      {
        title: "Instructions — MOV, ADD, CMP & JMP",
        dur: "75 min",
        yt: "i3j4k5l6m7n"
      },
      {
        title: "Stack, Functions & Calling Conventions",
        dur: "90 min",
        yt: "o8p9q0r1s2t"
      },
      {
        title: "Syscalls & Shellcode Basics",
        dur: "80 min",
        yt: "u3v4w5x6y7z"
      }
    ],
    reading: [
      {
        title: "Why Learn Assembly?",
        body: "Assembly provides the deepest understanding of how computers execute code — essential for security, optimization, and embedded work.",
        points: [
          "No abstraction — you control the CPU directly",
          "Essential for reverse engineering and malware analysis",
          "Understanding assembly makes you a better C/C++ programmer",
          "Critical for writing bootloaders, kernels, and firmware"
        ]
      },
      {
        title: "The x86-64 Architecture",
        body: "x86-64 is the dominant instruction set architecture in desktop and server computing.",
        points: [
          "16 general-purpose registers (RAX, RBX, RCX, RDX, etc.)",
          "RIP-relative addressing for position-independent code",
          "The stack grows downward — RSP points to the top",
          "Syscall convention: RAX = syscall number, arguments in registers"
        ]
      }
    ],
    quiz: [
      {
        q: "Which instruction moves data in x86-64?",
        opts: [
          "MOVE",
          "MOV",
          "LOAD",
          "STORE"
        ],
        ans: 1
      },
      {
        q: "What register holds the stack pointer?",
        opts: [
          "RAX",
          "RSP",
          "RBP",
          "RIP"
        ],
        ans: 1
      },
      {
        q: "What does CMP do?",
        opts: [
          "Compares two values and sets flags",
          "Copies a value",
          "Clears a register",
          "Calls a function"
        ],
        ans: 0
      },
      {
        q: "Which instruction transfers control to a label?",
        opts: [
          "GOTO",
          "JMP",
          "BR",
          "JSR"
        ],
        ans: 1
      },
      {
        q: "What is a syscall?",
        opts: [
          "A system library call",
          "A request to the OS kernel",
          "A debugger command",
          "A type of interrupt"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.8,
    keywords: ["cobol", "mainframe", "enterprise", "legacy", "banking"],
    preview:"m4-HM_sCvtQ",
    lessons: [
      {
        title: "COBOL Basics — Divisions & Structure",
        dur: "55 min",
        yt: "a4b5c6d7e8f"
      },
      {
        title: "Data Division — Records & File Handling",
        dur: "70 min",
        yt: "g9h0i1j2k3l"
      },
      {
        title: "Procedure Division — Verbs & Conditions",
        dur: "65 min",
        yt: "m4n5o6p7q8r"
      },
      {
        title: "COBOL Modernization & Integration",
        dur: "50 min",
        yt: "s9t0u1v2w3x"
      }
    ],
    reading: [
      {
        title: "Why COBOL Still Matters",
        body: "COBOL powers 70% of financial transactions and billions of lines run on mainframes globally.",
        points: [
          "Over 200 billion lines of COBOL code in production",
          "Powers 90% of Fortune 500 financial transactions",
          "New COBOL developers are in high demand — supply is low",
          "Modern COBOL interoperates with Java and cloud systems"
        ]
      },
      {
        title: "COBOL Structure",
        body: "COBOL programs follow a strict four-division structure that enforces clarity.",
        points: [
          "IDENTIFICATION DIVISION — program metadata",
          "ENVIRONMENT DIVISION — hardware and file mappings",
          "DATA DIVISION — variable and file definitions",
          "PROCEDURE DIVISION — executable logic"
        ]
      }
    ],
    quiz: [
      {
        q: "How many divisions does a COBOL program have?",
        opts: [
          "2",
          "3",
          "4",
          "5"
        ],
        ans: 2
      },
      {
        q: "Which division defines variables?",
        opts: [
          "IDENTIFICATION",
          "ENVIRONMENT",
          "DATA",
          "PROCEDURE"
        ],
        ans: 2
      },
      {
        q: "What does PIC stand for in COBOL?",
        opts: [
          "Picture clause — defines data format",
          "Process Instruction Code",
          "Program Interaction Controller",
          "Primary Input Channel"
        ],
        ans: 0
      },
      {
        q: "What is a PERFORM statement?",
        opts: [
          "A loop construct",
          "A variable declaration",
          "A file operation",
          "A sort function"
        ],
        ans: 0
      },
      {
        q: "What type of language is COBOL?",
        opts: [
          "Object-oriented",
          "English-like procedural",
          "Functional",
          "Logic-based"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    keywords: ["fortran", "hpc", "scientific computing", "numerical", "supercomputing"],
    preview:"BT2Cv-Tjq7Q",
    lessons: [
      {
        title: "Fortran Basics — Syntax & Data Types",
        dur: "50 min",
        yt: "y4z5a6b7c8d"
      },
      {
        title: "Arrays & Array Operations",
        dur: "65 min",
        yt: "e9f0g1h2i3j"
      },
      {
        title: "Subroutines, Functions & Modules",
        dur: "60 min",
        yt: "k4l5m6n7o8p"
      },
      {
        title: "Parallel Programming with Coarrays",
        dur: "80 min",
        yt: "q9r0s1t2u3v"
      }
    ],
    reading: [
      {
        title: "Why Fortran?",
        body: "Fortran remains the language of choice for scientific computing due to its unmatched array performance and compiler optimization.",
        points: [
          "Native array operations map directly to CPU vector instructions",
          "Top supercomputers run Fortran code for weather and physics",
          "Modern Fortran (2008/2018) has OOP and parallel features",
          "C interop allows mixing with C/C++ codebases"
        ]
      },
      {
        title: "Fortran's Array Superpower",
        body: "Fortran's array semantics are what make it irreplaceable in HPC.",
        points: [
          "Whole array operations like A = B + C * 2",
          "Array slicing with strided access",
          "DO CONCURRENT for parallel loops",
          "Coarrays provide partitioned global address space (PGAS)"
        ]
      }
    ],
    quiz: [
      {
        q: "What does Fortran stand for?",
        opts: [
          "Formula Translation",
          "Format Transformation",
          "Fortified Runtime",
          "Forward Translation"
        ],
        ans: 0
      },
      {
        q: "How are arrays indexed in Fortran?",
        opts: [
          "0-based",
          "1-based",
          "Configurable default",
          "Negative-based"
        ],
        ans: 1
      },
      {
        q: "Which keyword starts a loop in Fortran?",
        opts: [
          "FOR",
          "DO",
          "LOOP",
          "WHILE"
        ],
        ans: 1
      },
      {
        q: "What is a subroutine in Fortran?",
        opts: [
          "A function returning a value",
          "A named block of code called via CALL",
          "A data structure",
          "A type definition"
        ],
        ans: 1
      },
      {
        q: "What does 'implicit none' do?",
        opts: [
          "Disables implicit typing",
          "Imports all modules",
          "Declares constants",
          "Exports all symbols"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["common lisp", "macros", "clos", "functional", "metaprogramming"],
    preview:"BT2Cv-Tjq7Q",
    lessons: [
      {
        title: "Lisp Basics — S-Expressions & Evaluation",
        dur: "50 min",
        yt: "w4x5y6z7a8b"
      },
      {
        title: "Functions, Lambdas & Higher-Order",
        dur: "60 min",
        yt: "c9d0e1f2g3h"
      },
      {
        title: "Macros — Code That Writes Code",
        dur: "80 min",
        yt: "i4j5k6l7m8n"
      },
      {
        title: "CLOS & The Condition System",
        dur: "65 min",
        yt: "o9p0q1r2s3t"
      }
    ],
    reading: [
      {
        title: "Why Lisp?",
        body: "Common Lisp is a multi-paradigm language with unparalleled metaprogramming capabilities and interactive development.",
        points: [
          "Macros blur the line between language and application code",
          "The condition system is more powerful than try-catch",
          "CLOS (Common Lisp Object System) is the most flexible OOP system",
          "Interactive REPL-driven development enables extreme productivity"
        ]
      },
      {
        title: "Lisp's Killer Features",
        body: "Features that make Lisp unique even decades after its creation.",
        points: [
          "Everything is a list — code and data share the same structure",
          "REPL (Read-Eval-Print Loop) enables live coding",
          "Multiple dispatch in CLOS",
          "Restarts allow recovering from errors at higher levels"
        ]
      }
    ],
    quiz: [
      {
        q: "What does CAR return in Lisp?",
        opts: [
          "The first element of a list",
          "The rest of a list",
          "The length of a list",
          "The last element"
        ],
        ans: 0
      },
      {
        q: "What is a macro in Lisp?",
        opts: [
          "A function that runs at compile time transforming code",
          "A type definition",
          "A loop construct",
          "A variable declaration"
        ],
        ans: 0
      },
      {
        q: "What does 'quote do?",
        opts: [
          "Evaluates an expression",
          "Prevents evaluation, returns as data",
          "Quotes a string",
          "Creates a comment"
        ],
        ans: 1
      },
      {
        q: "What is CLOS?",
        opts: [
          "Common Lisp Object System",
          "Compiled Lisp Operating System",
          "Core Library of Standard Functions",
          "Closed Loop Operation System"
        ],
        ans: 0
      },
      {
        q: "What is the Lisp condition system?",
        opts: [
          "A try-catch equivalent",
          "A more flexible error handling with restarts",
          "A logging system",
          "A type checking system"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    keywords: ["prolog", "logic programming", "ai", "constraint solving", "declarative"],
    preview:"PeMlggyqz0Y",
    lessons: [
      {
        title: "Prolog Basics — Facts, Rules & Queries",
        dur: "45 min",
        yt: "u4v5w6x7y8z"
      },
      {
        title: "Recursion & List Processing",
        dur: "55 min",
        yt: "a9b0c1d2e3f"
      },
      {
        title: "Backtracking & The Cut Operator",
        dur: "60 min",
        yt: "g4h5i6j7k8l"
      },
      {
        title: "Constraint Logic & NLP Applications",
        dur: "70 min",
        yt: "m9n0o1p2q3r"
      }
    ],
    reading: [
      {
        title: "Why Prolog?",
        body: "Prolog is a declarative logic programming language where you describe the problem and let the computer find the solution.",
        points: [
          "Programming by stating what is true, not how to compute it",
          "Built-in backtracking searches solution spaces automatically",
          "Pattern matching with unification is powerful and elegant",
          "Used in IBM Watson, natural language processing, and expert systems"
        ]
      },
      {
        title: "Declarative Thinking",
        body: "Prolog requires a fundamentally different way of thinking about computation.",
        points: [
          "Programs are sets of Horn clauses (facts and rules)",
          "The inference engine applies resolution to derive answers",
          "Unification finds the most general unifier between terms",
          "The cut operator (!) controls backtracking for efficiency"
        ]
      }
    ],
    quiz: [
      {
        q: "What does :- mean in Prolog?",
        opts: [
          "Assignment",
          "If — the head is true if the body is true",
          "Equality",
          "Inequality"
        ],
        ans: 1
      },
      {
        q: "How do variables start in Prolog?",
        opts: [
          "Lowercase letters",
          "Uppercase letters or underscore",
          "Numbers",
          "Special characters"
        ],
        ans: 1
      },
      {
        q: "What is unification in Prolog?",
        opts: [
          "A database join",
          "The process of making two terms identical by binding variables",
          "A sorting algorithm",
          "A GUI toolkit"
        ],
        ans: 1
      },
      {
        q: "What does the cut (!) do?",
        opts: [
          "Terminates the program",
          "Prevents backtracking past that point",
          "Deletes a fact",
          "Creates a choice point"
        ],
        ans: 1
      },
      {
        q: "What is a fact in Prolog?",
        opts: [
          "A statement that is unconditionally true",
          "A conditional rule",
          "A database query",
          "A variable binding"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    keywords: ["ada", "safety-critical", "systems", "real-time", "contracts"],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "Ada Basics — Strong Typing & Packages",
        dur: "60 min",
        yt: "s4t5u6v7w8x"
      },
      {
        title: "Tasking — Concurrent & Real-Time",
        dur: "75 min",
        yt: "y9z0a1b2c3d"
      },
      {
        title: "Contracts — Preconditions & Postconditions",
        dur: "55 min",
        yt: "e4f5g6h7i8j"
      },
      {
        title: "Ada for Embedded & Safety-Critical Systems",
        dur: "70 min",
        yt: "k9l0m1n2o3p"
      }
    ],
    reading: [
      {
        title: "Why Ada?",
        body: "Ada was designed by the US Department of Defense for systems where failure costs lives — aviation, defense, and railway signaling.",
        points: [
          "Strong typing catches errors at compile time",
          "Contract-based programming with pre/post conditions",
          "Ravenscar profile for deterministic real-time systems",
          "Used in Boeing 787, Airbus A380, and railway control systems"
        ]
      },
      {
        title: "Ada's Safety Features",
        body: "Ada's design prioritizes correctness and reliability over convenience.",
        points: [
          "No implicit type conversions — all casts are explicit",
          "Range constraints catch out-of-bounds values at runtime",
          "Tasking is part of the language, not a library",
          "Protected objects provide safe shared data access"
        ]
      }
    ],
    quiz: [
      {
        q: "Who designed Ada?",
        opts: [
          "Microsoft",
          "US Department of Defense",
          "Bell Labs",
          "ETH Zurich"
        ],
        ans: 1
      },
      {
        q: "What is a package in Ada?",
        opts: [
          "A compiled library",
          "A namespace and encapsulation unit",
          "An executable program",
          "A data type"
        ],
        ans: 1
      },
      {
        q: "What does Spark Ada add?",
        opts: [
          "Web framework",
          "Formal verification via contracts",
          "GUI toolkit",
          "Database access"
        ],
        ans: 1
      },
      {
        q: "What is a protected object?",
        opts: [
          "An encrypted file",
          "A synchronization primitive for safe shared data",
          "A private package",
          "A memory-safe pointer"
        ],
        ans: 1
      },
      {
        q: "What is a task in Ada?",
        opts: [
          "A to-do list",
          "A concurrent unit of execution",
          "A CPU core",
          "A background service"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    keywords: ["pascal", "delphi", "structured programming", "teaching", "algorithms"],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "Pascal Basics — Syntax & Types",
        dur: "40 min",
        yt: "q4r5s6t7u8v"
      },
      {
        title: "Control Structures & Procedures",
        dur: "50 min",
        yt: "w9x0y1z2a3b"
      },
      {
        title: "Records, Pointers & Dynamic Data",
        dur: "55 min",
        yt: "c4d5e6f7g8h"
      },
      {
        title: "Object Pascal & Delphi GUI",
        dur: "60 min",
        yt: "i9j0k1l2m3n"
      }
    ],
    reading: [
      {
        title: "Why Pascal?",
        body: "Pascal was designed by Niklaus Wirth to teach structured programming and remains influential in education and Delphi applications.",
        points: [
          "Strong typing and clear syntax reduce bugs",
          "Teaches disciplined programming habits",
          "Delphi/Object Pascal is still used for commercial Windows apps",
          "Excellent for learning data structures and algorithms"
        ]
      },
      {
        title: "Pascal's Legacy",
        body: "Pascal's influence extends far beyond its direct usage.",
        points: [
          "Designed as a teaching language for structured programming",
          "Type safety and readability were core design goals",
          "Delphi remains popular for rapid Windows application development",
          "Pascal influenced Java, C#, and many modern languages"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Pascal?",
        opts: [
          "Dennis Ritchie",
          "Niklaus Wirth",
          "Bjarne Stroustrup",
          "Alan Turing"
        ],
        ans: 1
      },
      {
        q: "What keyword starts a Pascal program?",
        opts: [
          "START",
          "PROGRAM",
          "BEGIN",
          "MAIN"
        ],
        ans: 1
      },
      {
        q: "How are blocks delimited in Pascal?",
        opts: [
          "{ }",
          "begin ... end",
          "( )",
          "[ ]"
        ],
        ans: 1
      },
      {
        q: "What does := do in Pascal?",
        opts: [
          "Equality test",
          "Assignment",
          "Comparison",
          "Definition"
        ],
        ans: 1
      },
      {
        q: "What is the modern Pascal IDE for Windows?",
        opts: [
          "Visual Studio",
          "Delphi",
          "Xcode",
          "Eclipse"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: ["matlab", "numerical computing", "simulink", "simulation", "engineering"],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "MATLAB Basics — Matrices & Vectorization",
        dur: "55 min",
        yt: "o4p5q6r7s8t"
      },
      {
        title: "Plotting & Data Visualization",
        dur: "50 min",
        yt: "u9v0w1x2y3z"
      },
      {
        title: "Scripts, Functions & Toolboxes",
        dur: "65 min",
        yt: "a4b5c6d7e8f"
      },
      {
        title: "Simulink — Model-Based Design",
        dur: "80 min",
        yt: "g9h0i1j2k3l"
      }
    ],
    reading: [
      {
        title: "Why MATLAB?",
        body: "MATLAB is the industry standard for engineering computation, simulation, and data analysis with specialized toolboxes.",
        points: [
          "Matrix operations are first-class — no loops needed",
          "Comprehensive toolboxes for every engineering field",
          "Simulink enables graphical model-based design",
          "Used extensively in academia and industry for research"
        ]
      },
      {
        title: "The MATLAB Workflow",
        body: "MATLAB's interactive workflow accelerates development and exploration.",
        points: [
          "Command window for interactive exploration",
          "Live Scripts combine code, output, and formatted text",
          "App Designer creates GUI applications without web tech",
          "Toolboxes extend MATLAB for domain-specific tasks"
        ]
      }
    ],
    quiz: [
      {
        q: "What does MATLAB stand for?",
        opts: [
          "Matrix Laboratory",
          "Mathematical Analysis Tool",
          "Machine Learning Algorithm Library",
          "Multi-Array Processing Language"
        ],
        ans: 0
      },
      {
        q: "How are arrays indexed in MATLAB?",
        opts: [
          "0-based",
          "1-based",
          "Negative-based",
          "Letter-based"
        ],
        ans: 1
      },
      {
        q: "Which operator comments a line in MATLAB?",
        opts: [
          "//",
          "%",
          "#",
          "--"
        ],
        ans: 1
      },
      {
        q: "What is Simulink used for?",
        opts: [
          "Web development",
          "Model-based design and simulation",
          "Database management",
          "Text editing"
        ],
        ans: 1
      },
      {
        q: "What does the 'end' keyword do in MATLAB?",
        opts: [
          "Terminates the program",
          "Ends a block of code (loop, function, etc.)",
          "Returns a value",
          "Exits the debugger"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.5,
    keywords: ["dart", "flutter", "isolates", "streams", "frontend"],
    preview:"NrO0CJCbYLA",
    lessons: [
      {
        title: "Dart Basics — Syntax & Sound Null Safety",
        dur: "45 min",
        yt: "m4n5o6p7q8r"
      },
      {
        title: "OOP — Classes, Mixins & Generics",
        dur: "55 min",
        yt: "s9t0u1v2w3x"
      },
      {
        title: "Concurrency — Isolates & Async/Await",
        dur: "60 min",
        yt: "y4z5a6b7c8d"
      },
      {
        title: "Streams, Futures & Advanced Dart",
        dur: "50 min",
        yt: "e9f0g1h2i3j"
      }
    ],
    reading: [
      {
        title: "Why Dart?",
        body: "Dart is Google's client-optimized language for fast apps on any platform — web, mobile, and desktop.",
        points: [
          "Sound null safety eliminates null reference errors",
          "Just-in-time compilation with hot reload for development",
          "Ahead-of-time compilation for production performance",
          "The language behind Flutter, AngularDart, and Dart Frog"
        ]
      },
      {
        title: "Dart's Unique Features",
        body: "Dart combines familiar syntax with powerful modern features.",
        points: [
          "Mixins enable code reuse without multiple inheritance",
          "Isolates provide true parallelism with shared-nothing architecture",
          "Async/await with Streams handles event-driven code elegantly",
          "Pattern matching and records (Dart 3+) enhance expressiveness"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Dart?",
        opts: [
          "Microsoft",
          "Google",
          "Apple",
          "Mozilla"
        ],
        ans: 1
      },
      {
        q: "What is sound null safety?",
        opts: [
          "All variables are nullable",
          "Null errors are caught at compile time",
          "Null is not a type",
          "Runtime null checking"
        ],
        ans: 1
      },
      {
        q: "What is an isolate in Dart?",
        opts: [
          "A UI component",
          "An independent worker with its own memory",
          "A database",
          "A type of widget"
        ],
        ans: 1
      },
      {
        q: "What keyword declares a variable that can be null?",
        opts: [
          "var",
          "final",
          "int?",
          "Maybe"
        ],
        ans: 2
      },
      {
        q: "What does 'async' do in Dart?",
        opts: [
          "Makes a function return a Future",
          "Runs code in parallel",
          "Creates an isolate",
          "Defines a generator"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: ["zig", "systems programming", "comptime", "c interop", "low-level"],
    preview:"5C_HPTJg5ek",
    lessons: [
      {
        title: "Zig Basics — Syntax & No Hidden Control Flow",
        dur: "50 min",
        yt: "k4l5m6n7o8p"
      },
      {
        title: "Comptime — Compile-Time Metaprogramming",
        dur: "65 min",
        yt: "q9r0s1t2u3v"
      },
      {
        title: "Memory Management — Allocators",
        dur: "60 min",
        yt: "w4x5y6z7a8b"
      },
      {
        title: "C Interop & Cross-Compilation",
        dur: "55 min",
        yt: "c9d0e1f2g3h"
      }
    ],
    reading: [
      {
        title: "Why Zig?",
        body: "Zig is a modern systems programming language that improves on C without sacrificing control or performance.",
        points: [
          "No hidden control flow — what you see is what runs",
          "Comptime executes code at compile time for generics and metaprogramming",
          "Manual memory management with explicit allocators",
          "First-class C interop — import .h files directly"
        ]
      },
      {
        title: "Zig vs C",
        body: "Zig addresses C's pain points while maintaining its ethos of simplicity and control.",
        points: [
          "No preprocessor — comptime replaces macros",
          "Array bounds checking in debug and release-safe modes",
          "Defer ensures cleanup regardless of exit path",
          "Built-in build system eliminates CMake/autotools"
        ]
      }
    ],
    quiz: [
      {
        q: "What is comptime in Zig?",
        opts: [
          "Compile-time code execution",
          "A benchmarking tool",
          "A debugger",
          "A profiler"
        ],
        ans: 0
      },
      {
        q: "How does Zig handle memory allocation?",
        opts: [
          "Garbage collection",
          "Automatic reference counting",
          "Explicit allocators passed as parameters",
          "Managed by the compiler"
        ],
        ans: 2
      },
      {
        q: "What does 'defer' do in Zig?",
        opts: [
          "Defers compilation",
          "Schedules code to run at scope exit",
          "Defines a function",
          "Creates a variable"
        ],
        ans: 1
      },
      {
        q: "Can Zig call C functions?",
        opts: [
          "No",
          "Yes, directly without bindings",
          "Only through FFI",
          "With a wrapper library"
        ],
        ans: 1
      },
      {
        q: "What is 'var' in Zig?",
        opts: [
          "A constant",
          "A mutable variable",
          "A type alias",
          "A function"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.4,
    keywords: ["powershell", "automation", "windows", "devops", "sysadmin"],
    preview:"I4EWvMFj37g",
    lessons: [
      {
        title: "PowerShell Basics — Cmdlets & Pipeline",
        dur: "45 min",
        yt: "i4j5k6l7m8n"
      },
      {
        title: "Scripting — Functions & Modules",
        dur: "55 min",
        yt: "o9p0q1r2s3t"
      },
      {
        title: "Remoting & Desired State Configuration",
        dur: "65 min",
        yt: "u4v5w6x7y8z"
      },
      {
        title: "PowerShell Core — Cross-Platform Automation",
        dur: "50 min",
        yt: "a9b0c1d2e3f"
      }
    ],
    reading: [
      {
        title: "Why PowerShell?",
        body: "PowerShell is Microsoft's task automation framework combining a shell, scripting language, and configuration management.",
        points: [
          "Object-based pipeline — pass structured data, not text",
          "PowerShell Core runs on Windows, macOS, and Linux",
          "DSC (Desired State Configuration) manages infrastructure declaratively",
          "Deep integration with .NET and Windows APIs"
        ]
      },
      {
        title: "PowerShell Philosophy",
        body: "PowerShell treats everything as objects, making automation more reliable and powerful than text-based shells.",
        points: [
          "Cmdlets follow a Verb-Noun naming convention",
          "The pipeline passes .NET objects between commands",
          "Providers expose data stores like file system and registry",
          "Remoting (WinRM) enables managing thousands of machines"
        ]
      }
    ],
    quiz: [
      {
        q: "What is a cmdlet in PowerShell?",
        opts: [
          "A compiled DLL",
          "A lightweight command in Verb-Noun format",
          "A C# class",
          "A batch file"
        ],
        ans: 1
      },
      {
        q: "What character starts a variable in PowerShell?",
        opts: [
          "$",
          "@",
          "%",
          "&"
        ],
        ans: 0
      },
      {
        q: "What does Get-ChildItem do?",
        opts: [
          "Gets child processes",
          "Lists items in a location",
          "Gets child items from a database",
          "Gets children of an object"
        ],
        ans: 1
      },
      {
        q: "What is the pipeline operator in PowerShell?",
        opts: [
          ">",
          "|",
          "->",
          "=>"
        ],
        ans: 1
      },
      {
        q: "Is PowerShell cross-platform?",
        opts: [
          "Windows only",
          "Windows and Linux",
          "Windows, macOS, and Linux",
          "Windows and macOS"
        ],
        ans: 2
      }
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
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["ocaml", "functional", "type inference", "module system", "jane street"],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "OCaml Basics — Expressions & Types",
        dur: "50 min",
        yt: "g4h5i6j7k8l"
      },
      {
        title: "Algebraic Data Types & Pattern Matching",
        dur: "60 min",
        yt: "m9n0o1p2q3r"
      },
      {
        title: "The Module System & Functors",
        dur: "70 min",
        yt: "s4t5u6v7w8x"
      },
      {
        title: "Real-World OCaml — Tools & Ecosystem",
        dur: "55 min",
        yt: "y9z0a1b2c3d"
      }
    ],
    reading: [
      {
        title: "Why OCaml?",
        body: "OCaml combines functional purity with imperative pragmatism and an industrial-strength type system.",
        points: [
          "Powerful type inference with no annotations needed",
          "Algebraic data types and exhaustive pattern matching",
          "The module system with functors enables generic programming",
          "Used at Jane Street (financial trading) and Meta (Flow, Hack)"
        ]
      },
      {
        title: "OCaml's Type System",
        body: "OCaml's type system catches bugs without being in the way.",
        points: [
          "Hindley-Milner type inference — types deduced automatically",
          "Polymorphic variants offer flexible enumerated types",
          "GADTs (Generalized Algebraic Data Types) for precise typing",
          "Phantom types encode invariants in the type system"
        ]
      }
    ],
    quiz: [
      {
        q: "What keyword defines a function in OCaml?",
        opts: [
          "fun",
          "let",
          "fn",
          "def"
        ],
        ans: 1
      },
      {
        q: "What is a variant in OCaml?",
        opts: [
          "A variable type",
          "An algebraic data type with constructors",
          "A type class",
          "A module"
        ],
        ans: 1
      },
      {
        q: "What does 'match' do in OCaml?",
        opts: [
          "Matches regular expressions",
          "Pattern matching on values",
          "Links modules",
          "Declares types"
        ],
        ans: 1
      },
      {
        q: "What is a functor in OCaml?",
        opts: [
          "A category theory concept",
          "A module parameterized by another module",
          "A function pointer",
          "A type class"
        ],
        ans: 1
      },
      {
        q: "Which company heavily uses OCaml?",
        opts: [
          "Jane Street",
          "Microsoft",
          "Google",
          "Amazon"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    keywords: ["groovy", "gradle", "jenkins", "jvm", "scripting"],
    preview:"m4-HM_sCvtQ",
    lessons: [
      {
        title: "Groovy Basics — Syntax & Closures",
        dur: "40 min",
        yt: "e4f5g6h7i8j"
      },
      {
        title: "GDK — Groovy Development Kit",
        dur: "45 min",
        yt: "k9l0m1n2o3p"
      },
      {
        title: "Gradle Build Automation with Groovy DSL",
        dur: "60 min",
        yt: "q4r5s6t7u8v"
      },
      {
        title: "Jenkins Pipelines & Advanced Groovy",
        dur: "55 min",
        yt: "w9x0y1z2a3b"
      }
    ],
    reading: [
      {
        title: "Why Groovy?",
        body: "Groovy is a dynamic JVM language that enhances Java with scripting flexibility and concise syntax.",
        points: [
          "Seamless Java interop — use Java libraries directly",
          "Concise syntax with closures, builders, and GStrings",
          "Gradle (the dominant build system) uses Groovy DSL",
          "Jenkins Pipeline as Code is written in Groovy"
        ]
      },
      {
        title: "Groovy vs Java",
        body: "Groovy compiles to JVM bytecode and integrates with Java while adding dynamic features.",
        points: [
          "Optional typing — use 'def' for dynamic or type for static",
          "Closures are first-class functions with delegate control",
          "Builders create hierarchical data structures concisely",
          "AST transformations inject code at compile time"
        ]
      }
    ],
    quiz: [
      {
        q: "What runtime does Groovy target?",
        opts: [
          "V8",
          "JVM",
          "CLR",
          "BEAM"
        ],
        ans: 1
      },
      {
        q: "How do you declare a variable without specifying type?",
        opts: [
          "auto",
          "var",
          "def",
          "dynamic"
        ],
        ans: 2
      },
      {
        q: "What is Gradle?",
        opts: [
          "A testing framework",
          "A build automation tool",
          "A web server",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What is a closure in Groovy?",
        opts: [
          "A class definition",
          "A block of code that can access enclosing variables",
          "A loop construct",
          "A type declaration"
        ],
        ans: 1
      },
      {
        q: "What does Jenkins use Groovy for?",
        opts: [
          "Frontend UI",
          "Pipeline definitions as code",
          "Database access",
          "CSS styling"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/5223887/pexels-photo-5223887.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    keywords: ["d language", "systems programming", "ranges", "compile-time", "native"],
    preview:"U3aXWizDbQ4",
    lessons: [
      {
        title: "D Basics — Syntax & Memory Model",
        dur: "50 min",
        yt: "c4d5e6f7g8h"
      },
      {
        title: "Templates & Compile-Time Evaluation",
        dur: "65 min",
        yt: "i9j0k1l2m3n"
      },
      {
        title: "Ranges & Phobos Standard Library",
        dur: "55 min",
        yt: "o4p5q6r7s8t"
      },
      {
        title: "Memory Safety & C Interop",
        dur: "50 min",
        yt: "u9v0w1x2y3z"
      }
    ],
    reading: [
      {
        title: "Why D?",
        body: "D is a systems programming language that combines C's performance with modern conveniences like garbage collection and compile-time execution.",
        points: [
          "CTFE (Compile-Time Function Execution) runs code at compile time",
          "Ranges provide composable, lazy algorithm chaining",
          "@safe, @trusted, @system annotations control memory safety",
          "Interoperates seamlessly with C code"
        ]
      },
      {
        title: "D's Unique Features",
        body: "D brings many features typically found in higher-level languages to systems programming.",
        points: [
          "Built-in contract programming (in, out, invariant)",
          "UFCS (Uniform Function Call Syntax) chains calls naturally",
          "Lazy evaluation with ranges and algorithms",
          "Vibe.d framework for web development with D"
        ]
      }
    ],
    quiz: [
      {
        q: "What does CTFE stand for in D?",
        opts: [
          "Compile-Time Function Execution",
          "C Type Format Extension",
          "Constant Time Function Evaluation",
          "Core Threading Framework Extension"
        ],
        ans: 0
      },
      {
        q: "What is a range in D?",
        opts: [
          "A loop variant",
          "A lazy, composable interface for sequences",
          "A type of array",
          "A numeric interval"
        ],
        ans: 1
      },
      {
        q: "Which annotation enforces memory safety in D?",
        opts: [
          "@safe",
          "@secure",
          "@protected",
          "@pure"
        ],
        ans: 0
      },
      {
        q: "What does 'mixin' do in D?",
        opts: [
          "Combines classes",
          "Injects code at compile time through string mixins",
          "Mixes static and dynamic typing",
          "Creates hybrid objects"
        ],
        ans: 1
      },
      {
        q: "Is D garbage collected?",
        opts: [
          "Yes, with optional manual management",
          "No",
          "Only for strings",
          "Only on Linux"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/6190327/pexels-photo-6190327.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    keywords: ["vhdl", "fpga", "hardware", "digital design", "asic"],
    preview:"eZ74x6dVYes",
    lessons: [
      {
        title: "VHDL Basics — Entities & Architectures",
        dur: "55 min",
        yt: "a4b5c6d7e8f"
      },
      {
        title: "Concurrent Statements & Signal Assignment",
        dur: "60 min",
        yt: "g9h0i1j2k3l"
      },
      {
        title: "Sequential Logic & Finite State Machines",
        dur: "75 min",
        yt: "m4n5o6p7q8r"
      },
      {
        title: "Testbenches & FPGA Implementation",
        dur: "70 min",
        yt: "s9t0u1v2w3x"
      }
    ],
    reading: [
      {
        title: "Why VHDL?",
        body: "VHDL is a hardware description language for designing digital circuits, from simple logic to complex processors on FPGAs and ASICs.",
        points: [
          "Concurrent execution mirrors real hardware behavior",
          "Entities define interfaces, architectures define implementation",
          "Processes model sequential logic with sensitivity lists",
          "Used for FPGA development, ASIC design, and digital education"
        ]
      },
      {
        title: "Hardware Design Mindset",
        body: "VHDL requires thinking in terms of parallel hardware, not sequential software.",
        points: [
          "Signals vs variables — signals update at the end of a process",
          "Sensitivity lists determine when a process executes",
          "Rising_edge(clk) for synchronous logic",
          "Generics and generate statements create parameterizable designs"
        ]
      }
    ],
    quiz: [
      {
        q: "What does VHDL stand for?",
        opts: [
          "VHSIC Hardware Description Language",
          "Very High Density Logic",
          "Virtual Hardware Design Language",
          "Variable Hardware Definition Language"
        ],
        ans: 0
      },
      {
        q: "What is an entity in VHDL?",
        opts: [
          "A type of gate",
          "The interface of a hardware component",
          "A test case",
          "A variable"
        ],
        ans: 1
      },
      {
        q: "How are signals assigned in VHDL?",
        opts: [
          "With =",
          "With <=",
          "With :=",
          "With =="
        ],
        ans: 1
      },
      {
        q: "What is a process in VHDL?",
        opts: [
          "A running program",
          "A block of sequential statements",
          "An external library",
          "A type of port"
        ],
        ans: 1
      },
      {
        q: "What does rising_edge(clk) detect?",
        opts: [
          "A falling clock edge",
          "A rising clock edge",
          "A level change",
          "A reset condition"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["verilog", "systemverilog", "fpga", "rtl", "digital logic"],
    preview:"eZ74x6dVYes",
    lessons: [
      {
        title: "Verilog Basics — Modules & Nets",
        dur: "50 min",
        yt: "y4z5a6b7c8d"
      },
      {
        title: "Combinational Logic — assign & always",
        dur: "55 min",
        yt: "e9f0g1h2i3j"
      },
      {
        title: "Sequential Logic — Registers & Counters",
        dur: "65 min",
        yt: "k4l5m6n7o8p"
      },
      {
        title: "Testbenches & SystemVerilog Basics",
        dur: "60 min",
        yt: "q9r0s1t2u3v"
      }
    ],
    reading: [
      {
        title: "Why Verilog?",
        body: "Verilog is the most widely used HDL in industry, with a C-like syntax that makes it accessible to software engineers.",
        points: [
          "C-like syntax — easier to learn for programmers",
          "SystemVerilog adds classes, assertions, and coverage for verification",
          "Industry standard for ASIC and FPGA design",
          "Used in everything from simple FSM to complex CPUs"
        ]
      },
      {
        title: "Verilog vs VHDL",
        body: "Both languages describe hardware but have different philosophies.",
        points: [
          "Verilog syntax is closer to C; VHDL is closer to Ada",
          "Verilog handles signal resolution differently",
          "SystemVerilog is the dominant verification language",
          "Both are used in industry — Verilog is more common in the US"
        ]
      }
    ],
    quiz: [
      {
        q: "What keyword defines a hardware module in Verilog?",
        opts: [
          "module",
          "entity",
          "component",
          "block"
        ],
        ans: 0
      },
      {
        q: "What does 'assign' do in Verilog?",
        opts: [
          "Assigns variables sequentially",
          "Models combinational logic continuously",
          "Assigns values at clock edges",
          "Creates a wire"
        ],
        ans: 1
      },
      {
        q: "What is the difference between reg and wire?",
        opts: [
          "No difference",
          "reg holds value in procedural blocks, wire is continuous",
          "reg is always sequential, wire is combinational",
          "wire is only for inputs"
        ],
        ans: 1
      },
      {
        q: "What does 'always @(posedge clk)' describe?",
        opts: [
          "Combinational logic",
          "Sequential logic clocked on rising edge",
          "Asynchronous logic",
          "Continuous assignment"
        ],
        ans: 1
      },
      {
        q: "What is SystemVerilog used for?",
        opts: [
          "Only for FPGA design",
          "Verification and enhanced hardware design",
          "Only for ASIC layout",
          "Software programming"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["vba", "excel", "macros", "automation", "office"],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "VBA Basics — The Visual Basic Editor",
        dur: "35 min",
        yt: "w4x5y6z7a8b"
      },
      {
        title: "Macros — Recording & Writing Code",
        dur: "50 min",
        yt: "c9d0e1f2g3h"
      },
      {
        title: "Excel Object Model — Ranges & Workbooks",
        dur: "60 min",
        yt: "i4j5k6l7m8n"
      },
      {
        title: "UserForms & Advanced Automation",
        dur: "55 min",
        yt: "o9p0q1r2s3t"
      }
    ],
    reading: [
      {
        title: "Why VBA?",
        body: "VBA (Visual Basic for Applications) is the built-in programming language for Microsoft Office, enabling powerful automation.",
        points: [
          "Record macros to generate code automatically",
          "Full access to the Excel, Word, and Access object models",
          "Create custom functions (UDFs) for spreadsheets",
          "Automate repetitive business processes without external tools"
        ]
      },
      {
        title: "VBA in the Real World",
        body: "VBA remains essential in finance, accounting, and operations for Excel automation.",
        points: [
          "Finance models often rely on VBA for data processing",
          "Automate report generation and email distribution",
          "Custom ribbon tabs and toolbar modifications",
          "Integration with databases via ADO and SQL"
        ]
      }
    ],
    quiz: [
      {
        q: "What does VBA stand for?",
        opts: [
          "Visual Basic for Applications",
          "Variable Batch Automation",
          "Virtual Business Assistant",
          "Verified Binary Access"
        ],
        ans: 0
      },
      {
        q: "How do you start the VBA editor in Excel?",
        opts: [
          "Ctrl+Shift+V",
          "Alt+F11",
          "Ctrl+F8",
          "Alt+V"
        ],
        ans: 1
      },
      {
        q: "What is a macro in VBA?",
        opts: [
          "A large function",
          "A recorded or written sequence of actions",
          "A variable type",
          "An Excel add-in"
        ],
        ans: 1
      },
      {
        q: "What does Range('A1').Value do?",
        opts: [
          "Sets the formula",
          "Gets or sets the cell value",
          "Selects the cell",
          "Formats the cell"
        ],
        ans: 1
      },
      {
        q: "Can VBA interact with databases?",
        opts: [
          "No",
          "Yes, via ADO",
          "Only with Access",
          "Only with SQL Server"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    keywords: ["sas", "statistics", "data analysis", "clinical trials", "business intelligence"],
    preview:"x7X9w_GIm1s",
    lessons: [
      {
        title: "SAS Basics — DATA Steps & PROC Steps",
        dur: "55 min",
        yt: "u4v5w6x7y8z"
      },
      {
        title: "Data Manipulation — Merging & Transposing",
        dur: "60 min",
        yt: "a9b0c1d2e3f"
      },
      {
        title: "Statistical Procedures — PROC MEANS, FREQ, REG",
        dur: "70 min",
        yt: "g4h5i6j7k8l"
      },
      {
        title: "SAS Macros & Advanced Programming",
        dur: "50 min",
        yt: "m9n0o1p2q3r"
      }
    ],
    reading: [
      {
        title: "Why SAS?",
        body: "SAS remains the gold standard in regulated industries like pharmaceuticals, clinical research, and government statistics.",
        points: [
          "Trusted by the FDA for clinical trial data analysis",
          "DATA step processes data row by row with control",
          "PROC steps provide pre-built statistical procedures",
          "SAS Macros generate reusable code templates"
        ]
      },
      {
        title: "The SAS Ecosystem",
        body: "SAS provides a complete environment for data management and analysis.",
        points: [
          "SAS libraries organize datasets by location",
          "Formats and informats control data display and input",
          "Output Delivery System (ODS) creates formatted reports",
          "SAS/GRAPH visualizes data with statistical graphics"
        ]
      }
    ],
    quiz: [
      {
        q: "What does SAS stand for?",
        opts: [
          "Statistical Analysis System",
          "Structured Algorithm System",
          "Systematic Application Software",
          "Sequential Analysis Suite"
        ],
        ans: 0
      },
      {
        q: "What is a DATA step used for?",
        opts: [
          "Data analysis",
          "Data manipulation and transformation",
          "Report generation",
          "Graph creation"
        ],
        ans: 1
      },
      {
        q: "What does PROC MEANS do?",
        opts: [
          "Creates graphs",
          "Calculates descriptive statistics",
          "Sorts data",
          "Merges datasets"
        ],
        ans: 1
      },
      {
        q: "What is a SAS macro?",
        opts: [
          "A video recording",
          "A code generator and template system",
          "A type of dataset",
          "A statistical test"
        ],
        ans: 1
      },
      {
        q: "What does the SET statement do?",
        opts: [
          "Sets a variable's value",
          "Reads observations from a dataset",
          "Creates a new dataset",
          "Defines a format"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/4008707/pexels-photo-4008707.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.2,
    keywords: ["racket", "scheme", "lisp", "dsl", "macros"],
    preview:"BT2Cv-Tjq7Q",
    lessons: [
      {
        title: "Racket Basics — Expressions & Functions",
        dur: "45 min",
        yt: "s4t5u6v7w8x"
      },
      {
        title: "Macros — Programming the Parser",
        dur: "60 min",
        yt: "y9z0a1b2c3d"
      },
      {
        title: "Contracts — Runtime Type Checking",
        dur: "50 min",
        yt: "e4f5g6h7i8j"
      },
      {
        title: "Creating DSLs & Languages",
        dur: "65 min",
        yt: "k9l0m1n2o3p"
      }
    ],
    reading: [
      {
        title: "Why Racket?",
        body: "Racket is a descendant of Scheme designed for creating new programming languages — language-oriented programming.",
        points: [
          "Hygienic macros prevent variable capture issues",
          "Contracts provide runtime verification of components",
          "The #lang mechanism lets you create your own language",
          "DrRacket IDE is tailored for pedagogy and exploration"
        ]
      },
      {
        title: "Language-Oriented Programming",
        body: "Racket's philosophy is that every program is a language.",
        points: [
          "#lang racket uses the base language",
          "You can create #lang mylanguage with custom syntax",
          "S-expressions make syntax uniform and extensible",
          "The macro expander is Turing-complete"
        ]
      }
    ],
    quiz: [
      {
        q: "What is Racket a descendant of?",
        opts: [
          "Common Lisp",
          "Scheme",
          "Clojure",
          "ML"
        ],
        ans: 1
      },
      {
        q: "What does #lang do in Racket?",
        opts: [
          "Declares a language module",
          "Creates a variable",
          "Defines a function",
          "Imports a library"
        ],
        ans: 0
      },
      {
        q: "What is a hygienic macro?",
        opts: [
          "A clean code pattern",
          "A macro that prevents unintended variable capture",
          "A macro that only runs once",
          "A type-checked macro"
        ],
        ans: 1
      },
      {
        q: "What are contracts in Racket?",
        opts: [
          "Legal agreements",
          "Runtime type specifications and assertions",
          "Function signatures",
          "Module dependencies"
        ],
        ans: 1
      },
      {
        q: "What IDE comes with Racket?",
        opts: [
          "VS Code",
          "DrRacket",
          "Eclipse",
          "IntelliJ"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861951/pexels-photo-3861951.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3.7,
    keywords: ["tcl", "tk", "gui", "scripting", "expect"],
    preview:"I4EWvMFj37g",
    lessons: [
      {
        title: "Tcl Basics — Everything is a String",
        dur: "35 min",
        yt: "q4r5s6t7u8v"
      },
      {
        title: "Tk — Building GUIs in Minutes",
        dur: "50 min",
        yt: "w9x0y1z2a3b"
      },
      {
        title: "Working with Files & Processes",
        dur: "40 min",
        yt: "c4d5e6f7g8h"
      },
      {
        title: "Expect — Automating Interactive Programs",
        dur: "45 min",
        yt: "i9j0k1l2m3n"
      }
    ],
    reading: [
      {
        title: "Why Tcl/Tk?",
        body: "Tcl is a simple scripting language, and Tk is the most portable GUI toolkit — GUIs that run on any platform with one codebase.",
        points: [
          "Tcl's 'everything is a string' philosophy makes it incredibly flexible",
          "Tk GUIs work identically on Windows, macOS, and Linux",
          "Expect automates interactive command-line programs",
          "Embedded in EDA tools, network testing, and CI systems"
        ]
      },
      {
        title: "Tcl Philosophy",
        body: "Tcl prioritizes simplicity, embedding, and cross-platform GUI development.",
        points: [
          "All values are strings — no separate types needed",
          "Commands always return strings",
          "Tk widgets are configured with simple option-value pairs",
          "Tcl is designed to be embedded in C/C++ applications"
        ]
      }
    ],
    quiz: [
      {
        q: "What does Tcl stand for?",
        opts: [
          "Tool Command Language",
          "Type Checked Language",
          "Terminal Control Language",
          "Text Command Library"
        ],
        ans: 0
      },
      {
        q: "How are variables referenced in Tcl?",
        opts: [
          "$var",
          "var",
          "${var}",
          "var()"
        ],
        ans: 0
      },
      {
        q: "What is Tk?",
        opts: [
          "A type system",
          "A cross-platform GUI toolkit",
          "A testing framework",
          "A database"
        ],
        ans: 1
      },
      {
        q: "What does Expect do?",
        opts: [
          "Expects variable types",
          "Automates interactive text-based programs",
          "Waits for network connections",
          "Manages expectations"
        ],
        ans: 1
      },
      {
        q: "What makes Tcl unique?",
        opts: [
          "Object-oriented paradigm",
          "Everything is a string",
          "Strong typing",
          "Functional purity"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    keywords: ["smalltalk", "oop", "mvc", "live coding", "pharo"],
    preview:"m4-HM_sCvtQ",
    lessons: [
      {
        title: "Smalltalk Basics — Objects & Messages",
        dur: "40 min",
        yt: "o4p5q6r7s8t"
      },
      {
        title: "The Image — Live Object Environment",
        dur: "50 min",
        yt: "u9v0w1x2y3z"
      },
      {
        title: "MVC — Model-View-Controller Pattern",
        dur: "55 min",
        yt: "a4b5c6d7e8f"
      },
      {
        title: "Pharo & Modern Smalltalk",
        dur: "45 min",
        yt: "g9h0i1j2k3l"
      }
    ],
    reading: [
      {
        title: "Why Smalltalk?",
        body: "Smalltalk is the foundation of object-oriented programming — everything is an object, including classes and blocks.",
        points: [
          "Everything is an object — even classes and integers",
          "The image-based environment persists live objects",
          "MVC was invented in Smalltalk",
          "Influenced Java, Objective-C, Python, and Ruby"
        ]
      },
      {
        title: "The Smalltalk Environment",
        body: "Smalltalk offers a unique live programming experience.",
        points: [
          "The IDE, compiler, and runtime are all objects in the image",
          "Changes are made to live objects without restarting",
          "System Browser navigates classes, protocols, and methods",
          "Debugger allows editing code mid-execution"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Smalltalk?",
        opts: [
          "Alan Kay and Xerox PARC",
          "Dennis Ritchie",
          "Bjarne Stroustrup",
          "Guido van Rossum"
        ],
        ans: 0
      },
      {
        q: "How do you send a message in Smalltalk?",
        opts: [
          "object.method()",
          "object method",
          "method(object)",
          "object->method"
        ],
        ans: 1
      },
      {
        q: "What is a Smalltalk image?",
        opts: [
          "A screenshot",
          "A persistent snapshot of live objects",
          "A graphics file",
          "A database backup"
        ],
        ans: 1
      },
      {
        q: "What paradigm did Smalltalk pioneer?",
        opts: [
          "Functional programming",
          "Object-oriented programming",
          "Logic programming",
          "Procedural programming"
        ],
        ans: 1
      },
      {
        q: "Which modern Smalltalk is actively developed?",
        opts: [
          "Squeak",
          "Pharo",
          "VisualWorks",
          "All of the above"
        ],
        ans: 3
      }
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
    img: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.7,
    keywords: ["mojo", "ai", "python", "mlir", "performance"],
    preview:"5C_HPTJg5ek",
    lessons: [
      {
        title: "Mojo Basics — Python-compatible Syntax",
        dur: "40 min",
        yt: "m4n5o6p7q8r"
      },
      {
        title: "Systems Programming — fn, struct & let",
        dur: "55 min",
        yt: "s9t0u1v2w3x"
      },
      {
        title: "MLIR & Compiler Optimizations",
        dur: "60 min",
        yt: "y4z5a6b7c8d"
      },
      {
        title: "AI Performance — SIMD & Tiling",
        dur: "50 min",
        yt: "e9f0g1h2i3j"
      }
    ],
    reading: [
      {
        title: "Why Mojo?",
        body: "Mojo combines Python's usability with C/rust performance for AI and systems programming, using MLIR for compiler optimizations.",
        points: [
          "Full Python syntax compatibility for easy transition",
          "fn and struct provide low-level control without GC overhead",
          "MLIR enables automatic hardware-specific optimizations",
          "SIMD primitives for explicit vectorization"
        ]
      },
      {
        title: "Mojo's Performance Model",
        body: "Mojo achieves C-level performance while maintaining Python-level ergonomics.",
        points: [
          "Gradual typing — start with def and add types later",
          "Compiled with MLIR to optimized native code",
          "Zero-cost abstractions for systems programming",
          "Seamless Python interop for existing ecosystem"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created Mojo?",
        opts: [
          "Google",
          "Modular",
          "Meta",
          "Microsoft"
        ],
        ans: 1
      },
      {
        q: "What does Mojo use for optimization?",
        opts: [
          "LLVM only",
          "MLIR (Multi-Level Intermediate Representation)",
          "GCC",
          "JIT compilation"
        ],
        ans: 1
      },
      {
        q: "What keyword declares a system-level function in Mojo?",
        opts: [
          "fn",
          "def",
          "func",
          "system"
        ],
        ans: 0
      },
      {
        q: "Can Mojo run Python code directly?",
        opts: [
          "No",
          "Yes, Python is a subset of Mojo",
          "Only with wrappers",
          "Through a compatibility layer"
        ],
        ans: 1
      },
      {
        q: "What is SIMD in Mojo?",
        opts: [
          "A data structure",
          "Single Instruction Multiple Data — parallel processing",
          "A type system",
          "A memory allocator"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    keywords: ["awk", "text processing", "command line", "unix", "data extraction"],
    preview:"I4EWvMFj37g",
    lessons: [
      {
        title: "AWK Basics — Pattern-Action Pairs",
        dur: "25 min",
        yt: "k4l5m6n7o8p"
      },
      {
        title: "Built-in Variables — FS, OFS, NR, NF",
        dur: "30 min",
        yt: "q9r0s1t2u3v"
      },
      {
        title: "Arrays & Multi-line Processing",
        dur: "35 min",
        yt: "w4x5y6z7a8b"
      },
      {
        title: "Real-World AWK Scripts",
        dur: "40 min",
        yt: "c9d0e1f2g3h"
      }
    ],
    reading: [
      {
        title: "Why AWK?",
        body: "AWK is a tiny language for processing structured text files — perfect for log analysis, CSV processing, and command-line data extraction.",
        points: [
          "Pattern-action model is intuitive for line-by-line processing",
          "Fields are automatically split into $1, $2, etc.",
          "Built-in associative arrays work without declarations",
          "AWK programs are often short enough to type directly"
        ]
      },
      {
        title: "The AWK Model",
        body: "AWK's simplicity comes from its focused design.",
        points: [
          "A program is a sequence of pattern { action } rules",
          "BEGIN and END patterns run before/after file processing",
          "NR keeps track of the current record number",
          "FS and OFS control input/output field separators"
        ]
      }
    ],
    quiz: [
      {
        q: "What does AWK stand for?",
        opts: [
          "Aho Weinberger Kernighan",
          "Advanced Word Kernel",
          "Automatic Working Key",
          "Algorithmic Working Knowledge"
        ],
        ans: 0
      },
      {
        q: "How do you print the first field in AWK?",
        opts: [
          "print $1",
          "print $0",
          "print $F",
          "print field[1]"
        ],
        ans: 0
      },
      {
        q: "What does NR represent?",
        opts: [
          "Number of fields",
          "Current record number",
          "Number of resources",
          "Null reference"
        ],
        ans: 1
      },
      {
        q: "What does the BEGIN block do?",
        opts: [
          "Starts the program",
          "Runs before any input is processed",
          "Initializes variables in the loop",
          "Starts a function"
        ],
        ans: 1
      },
      {
        q: "What is the default field separator in AWK?",
        opts: [
          "Comma",
          "Tab",
          "Whitespace (space/tab)",
          "Colon"
        ],
        ans: 2
      }
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
    img: "https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.1,
    keywords: ["labview", "ni", "data acquisition", "graphical programming", "instrumentation"],
    preview:"eZ74x6dVYes",
    lessons: [
      {
        title: "LabVIEW Basics — Front Panel & Block Diagram",
        dur: "60 min",
        yt: "i4j5k6l7m8n"
      },
      {
        title: "Data Flow — Wires, Structures & SubVIs",
        dur: "65 min",
        yt: "o9p0q1r2s3t"
      },
      {
        title: "Data Acquisition & Instrument Control",
        dur: "75 min",
        yt: "u4v5w6x7y8z"
      },
      {
        title: "State Machines & Design Patterns",
        dur: "55 min",
        yt: "a9b0c1d2e3f"
      }
    ],
    reading: [
      {
        title: "Why LabVIEW?",
        body: "LabVIEW is a graphical programming environment from National Instruments for test, measurement, and control systems.",
        points: [
          "G language uses graphical data flow instead of text",
          "VIs (Virtual Instruments) are modular and reusable",
          "Thousands of instrument drivers available",
          "FPGA and Real-Time targets extend deployment options"
        ]
      },
      {
        title: "Data Flow Programming",
        body: "LabVIEW's execution model is based on data flow, not control flow.",
        points: [
          "A node executes when all inputs are available",
          "Wires carry data between nodes",
          "Loops auto-index arrays on tunnel boundaries",
          "Parallel loops run concurrently by default"
        ]
      }
    ],
    quiz: [
      {
        q: "Who created LabVIEW?",
        opts: [
          "Microsoft",
          "National Instruments",
          "MathWorks",
          "Keysight"
        ],
        ans: 1
      },
      {
        q: "What is a VI in LabVIEW?",
        opts: [
          "Variable Interface",
          "Virtual Instrument — the basic program unit",
          "Visual Input",
          "Voltage Indicator"
        ],
        ans: 1
      },
      {
        q: "What paradigm does LabVIEW use?",
        opts: [
          "Object-oriented",
          "Data flow",
          "Functional",
          "Procedural"
        ],
        ans: 1
      },
      {
        q: "Where are user interface elements placed?",
        opts: [
          "Block diagram",
          "Front panel",
          "Control palette",
          "Function palette"
        ],
        ans: 1
      },
      {
        q: "What is a SubVI?",
        opts: [
          "A subprogram in LabVIEW",
          "A sub-component",
          "A type of wire",
          "A control"
        ],
        ans: 0
      }
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
    img: "https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.6,
    keywords: ["gdscript", "godot", "game development", "scripting", "2d"],
    preview:"ravLFzIguCM",
    lessons: [
      {
        title: "GDScript Basics — Python-like Syntax",
        dur: "35 min",
        yt: "g4h5i6j7k8l"
      },
      {
        title: "Scenes, Nodes & Signals",
        dur: "50 min",
        yt: "m9n0o1p2q3r"
      },
      {
        title: "Physics & Input Handling",
        dur: "45 min",
        yt: "s4t5u6v7w8x"
      },
      {
        title: "Building a Complete Game",
        dur: "60 min",
        yt: "y9z0a1b2c3d"
      }
    ],
    reading: [
      {
        title: "Why GDScript?",
        body: "GDScript is Godot's tightly integrated scripting language, optimized for the engine with a Python-like syntax.",
        points: [
          "Designed specifically for Godot — no boilerplate",
          "Signals provide decoupled communication between nodes",
          "Scene tree makes game composition visual and intuitive",
          "Performance is excellent for 2D games"
        ]
      },
      {
        title: "Godot's Node System",
        body: "Everything in Godot is a node in a tree.",
        points: [
          "Scenes are reusable node hierarchies",
          "Signals replace callbacks for event handling",
          "Groups allow addressing multiple nodes at once",
          "The scene owner pattern controls access to other nodes"
        ]
      }
    ],
    quiz: [
      {
        q: "What engine uses GDScript?",
        opts: [
          "Unity",
          "Unreal Engine",
          "Godot",
          "GameMaker"
        ],
        ans: 2
      },
      {
        q: "What is a signal in Godot?",
        opts: [
          "A warning message",
          "An event emitter for decoupled communication",
          "A type of node",
          "A debug tool"
        ],
        ans: 1
      },
      {
        q: "What is a scene in Godot?",
        opts: [
          "A level design",
          "A reusable node hierarchy",
          "A background image",
          "A camera setup"
        ],
        ans: 1
      },
      {
        q: "What does 'extends' do in GDScript?",
        opts: [
          "Extends array length",
          "Inherits from a node class",
          "Extends a signal",
          "Extends scene bounds"
        ],
        ans: 1
      },
      {
        q: "How does GDScript compare to Python?",
        opts: [
          "Same language",
          "Python-like syntax but optimized for Godot",
          "Completely different",
          "Statically typed version"
        ],
        ans: 1
      }
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
    img: "https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4.3,
    keywords: ["plsql", "oracle", "stored procedures", "database", "triggers"],
    preview:"zsjvFFKOm3c",
    lessons: [
      {
        title: "PL/SQL Basics — Blocks & Variables",
        dur: "45 min",
        yt: "e4f5g6h7i8j"
      },
      {
        title: "Cursors & Exception Handling",
        dur: "55 min",
        yt: "k9l0m1n2o3p"
      },
      {
        title: "Stored Procedures, Functions & Packages",
        dur: "65 min",
        yt: "q4r5s6t7u8v"
      },
      {
        title: "Triggers & Performance Optimization",
        dur: "55 min",
        yt: "w9x0y1z2a3b"
      }
    ],
    reading: [
      {
        title: "Why PL/SQL?",
        body: "PL/SQL extends SQL with procedural logic for Oracle databases — essential for enterprise backend development.",
        points: [
          "Tight integration with Oracle SQL and data types",
          "Bulk operations (BULK COLLECT, FORALL) process thousands of rows efficiently",
          "Packages organize related procedures and functions",
          "Used heavily in Oracle E-Business Suite and financial systems"
        ]
      },
      {
        title: "PL/SQL Architecture",
        body: "PL/SQL's block structure and execution model are designed for database programming.",
        points: [
          "DECLARE, BEGIN, EXCEPTION, END structure every block",
          "Cursors handle multi-row query results",
          "Triggers execute automatically on DML events",
          "SQL%ROWCOUNT checks how many rows were affected"
        ]
      }
    ],
    quiz: [
      {
        q: "What does PL/SQL stand for?",
        opts: [
          "Procedural Language / SQL",
          "Programming Language for SQL",
          "Precompiled Logic / SQL",
          "PostgreSQL Language / SQL"
        ],
        ans: 0
      },
      {
        q: "Which block section handles errors?",
        opts: [
          "DECLARE",
          "BEGIN",
          "EXCEPTION",
          "END"
        ],
        ans: 2
      },
      {
        q: "What is a cursor in PL/SQL?",
        opts: [
          "A mouse pointer",
          "A handle to a result set for row-by-row processing",
          "A database trigger",
          "A data type"
        ],
        ans: 1
      },
      {
        q: "What does COMMIT do?",
        opts: [
          "Rolls back changes",
          "Makes changes permanent",
          "Saves to a file",
          "Closes the database"
        ],
        ans: 1
      },
      {
        q: "What is a package in PL/SQL?",
        opts: [
          "A compiled library",
          "An encapsulated collection of related procedures, functions, and types",
          "A database table",
          "A SQL query"
        ],
        ans: 1
      }
    ]
  },
];

export default courses;
