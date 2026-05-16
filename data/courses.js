const courses = [
  {
    id:1, title:"React for Beginners", instructor:"Jane Doe",
    category:"Web Development", duration:"5 hours",
    description:"Master React from scratch. Learn components, hooks, props, state management, and build real-world applications. Perfect for anyone starting their frontend journey.",
    img:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    rating:4.8, keywords:["react","frontend","nextjs","javascript","hooks"],
    lessons:[
      {title:"Introduction to React & JSX", dur:"18 min", yt:"Tn6-PIqc4UM"},
      {title:"Components, Props & State", dur:"22 min", yt:"35lXWvCuM8o"},
      {title:"React Hooks — useState & useEffect", dur:"25 min", yt:"O6P86uwfdR0"},
      {title:"Building a Real Project", dur:"30 min", yt:"hQAHSlTtcmY"},
    ],
    reading:[
      {title:"Why React?", body:"React is a JavaScript library for building user interfaces, maintained by Meta. It uses a virtual DOM to efficiently update the UI.", points:["Functional Components are the modern standard","JSX lets you write HTML-like syntax in JS","Props flow down from parent to child","State is local to a component unless lifted"]},
      {title:"The Component Model", body:"React apps are built as trees of components. Each component is a function that returns JSX.", points:["Break UI into small reusable pieces","Use keys in lists for performance","Avoid deeply nested components","Lift state up when sharing data"]},
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
    id:2, title:"Python Data Science Bootcamp", instructor:"Mark Chen",
    category:"Data Science", duration:"18 hours",
    description:"Master Python for data analysis and visualization. Covers NumPy, Pandas, Matplotlib, and ML fundamentals with real-world projects.",
    img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    rating:4.9, keywords:["python","pandas","numpy","data analysis","machine learning"],
    lessons:[
      {title:"Python Fundamentals & Setup", dur:"20 min", yt:"_uQrJ0TkZlc"},
      {title:"NumPy Arrays & Operations", dur:"24 min", yt:"QUT1VHiLmmI"},
      {title:"Data Wrangling with Pandas", dur:"28 min", yt:"vmEHCJofslg"},
      {title:"Visualization with Matplotlib", dur:"22 min", yt:"3Xc3CA655Y4"},
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
    id:3, title:"UI/UX Design Fundamentals", instructor:"Sofia Ramirez",
    category:"Design", duration:"8 hours",
    description:"Learn user-centered design principles. Master Figma, wireframing, prototyping, and design systems.",
    img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    rating:4.7, keywords:["figma","ux","ui","wireframing","prototyping"],
    lessons:[
      {title:"Design Thinking & UX Research", dur:"18 min", yt:"a7sEoEvT8l8"},
      {title:"Wireframing & Prototyping in Figma", dur:"26 min", yt:"FTFaQWZBqQ8"},
      {title:"Typography & Color Theory", dur:"20 min", yt:"ykn4XNDwW7Q"},
      {title:"Building a Design System", dur:"24 min", yt:"Dtd40cHQQlk"},
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
      {q:"What does 'affordance' mean in UX?", opts:["A pricing model","A visual cue that hints at how something is used","A type of animation","A user persona"], ans:1},
    ]
  },
  {
    id:4, title:"Flutter Mobile Development", instructor:"Akira Tanaka",
    category:"Mobile Development", duration:"14 hours",
    description:"Build beautiful cross-platform apps using Flutter and Dart for iOS & Android from one codebase.",
    img:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    rating:4.6, keywords:["flutter","dart","mobile","ios","android"],
    lessons:[
      {title:"Flutter & Dart Crash Course", dur:"22 min", yt:"1ukSR1GRtMU"},
      {title:"Widgets & Layouts", dur:"25 min", yt:"b_sQ9bMltGU"},
      {title:"State Management with Provider", dur:"28 min", yt:"d9VSoFJSrD4"},
      {title:"REST API Integration", dur:"20 min", yt:"9WnOXQwHxcA"},
    ],
    reading:[
      {title:"Why Flutter?", body:"Flutter is Google's UI toolkit for building natively compiled apps from a single codebase.", points:["One codebase for iOS and Android","Hot reload for fast development","Rich pre-built widgets","Compiles to native code"]},
      {title:"Core Concepts", body:"Everything in Flutter is a widget.", points:["Stateless widgets don't change","Stateful widgets manage dynamic data","BuildContext locates widgets","Keys help Flutter identify widgets"]},
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
    id:5, title:"Machine Learning with TensorFlow", instructor:"Dr. Priya Nair",
    category:"AI & Machine Learning", duration:"22 hours",
    description:"Deep dive into ML algorithms and neural networks with TensorFlow 2.0. Build image classifiers and NLP models.",
    img:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    rating:4.9, keywords:["tensorflow","neural networks","deep learning","keras","nlp"],
    lessons:[
      {title:"Machine Learning Fundamentals", dur:"24 min", yt:"ukzFI9rgwfU"},
      {title:"Neural Networks from Scratch", dur:"28 min", yt:"aircAruvnKk"},
      {title:"TensorFlow & Keras Hands-on", dur:"30 min", yt:"tPYj3fFJGjk"},
      {title:"Building an Image Classifier", dur:"26 min", yt:"jztwpsIzEGc"},
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
    id:6, title:"Digital Marketing Masterclass", instructor:"Emma Williams",
    category:"Marketing", duration:"10 hours",
    description:"Master SEO, social media, email campaigns, and Google Ads. Build a complete digital marketing strategy from scratch.",
    img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    rating:4.5, keywords:["seo","social media","google ads","email marketing","analytics"],
    lessons:[
      {title:"Digital Marketing Strategy Overview", dur:"18 min", yt:"bixR-KZQLRU"},
      {title:"SEO Fundamentals", dur:"22 min", yt:"DvwS7cV9GmQ"},
      {title:"Social Media Marketing", dur:"20 min", yt:"PVhMcHmCHvg"},
      {title:"Email Marketing & Analytics", dur:"16 min", yt:"6TAAiWtjl4w"},
    ],
    reading:[
      {title:"The Digital Marketing Funnel", body:"Customers go through: Awareness→Interest→Consideration→Intent→Purchase→Loyalty.", points:["SEO drives organic awareness","Social media builds community","Email converts and retains","Paid ads accelerate reach"]},
      {title:"SEO Basics", body:"SEO improves your Google visibility organically.", points:["Use keywords naturally in content","Build quality backlinks","Page speed is a ranking factor","Mobile-first indexing is standard"]},
    ],
    quiz:[
      {q:"What does SEO stand for?", opts:["Social Engine Optimization","Search Engine Optimization","Site Engagement Ops","Search Engagement Output"], ans:1},
      {q:"What is a 'conversion'?", opts:["A page view","When a visitor completes a desired action","A social share","An email open"], ans:1},
      {q:"What does CPC stand for?", opts:["Cost Per Click","Content Per Channel","Customer Per Campaign","Click Per Conversion"], ans:0},
      {q:"Which metrics measure email success?", opts:["Bounce rate","Open rate and click-through rate","Page load time","Social shares"], ans:1},
      {q:"What is A/B testing?", opts:["Testing two audiences","Testing two versions to see which performs better","Testing server speed","Testing budgets"], ans:1},
    ]
  },
  {
    id:7, title:"Node.js & Express Backend", instructor:"Carlos Rivera",
    category:"Web Development", duration:"12 hours",
    description:"Build scalable REST APIs with Node.js and Express. Covers authentication, MongoDB, file uploads, and deployment.",
    img:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80",
    rating:4.8, keywords:["nodejs","express","rest api","mongodb","backend"],
    lessons:[
      {title:"Node.js Fundamentals", dur:"20 min", yt:"TlB_eWDSMt4"},
      {title:"Building REST APIs with Express", dur:"26 min", yt:"pKd0Rpw7O48"},
      {title:"MongoDB & Mongoose", dur:"24 min", yt:"fgTGADljAeg"},
      {title:"Authentication with JWT", dur:"22 min", yt:"mbsmsi7l3r4"},
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
    id:8, title:"Ethical Hacking & Cybersecurity", instructor:"James O'Brien",
    category:"Cybersecurity", duration:"16 hours",
    description:"Learn penetration testing, ethical hacking, network security, and vulnerability assessment.",
    img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    rating:4.7, keywords:["hacking","penetration testing","kali linux","security","networking"],
    lessons:[
      {title:"Introduction to Cybersecurity", dur:"18 min", yt:"inWWhr5tnEA"},
      {title:"Network Security Fundamentals", dur:"24 min", yt:"qiQR5rTSshw"},
      {title:"Penetration Testing Basics", dur:"26 min", yt:"3Kq1MIfTWCE"},
      {title:"Common Vulnerabilities & Defenses", dur:"22 min", yt:"pL9q2lOZ1Fw"},
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
    id:9, title:"Advanced TypeScript Patterns", instructor:"Anna Kowalski",
    category:"Web Development", duration:"7 hours",
    description:"Go beyond basics with generics, decorators, conditional types, and design patterns in TypeScript.",
    img:"https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&q=80",
    rating:4.6, keywords:["typescript","generics","decorators","frontend","javascript"],
    lessons:[
      {title:"TypeScript Generics Deep Dive", dur:"20 min", yt:"nePDL5lQSE4"},
      {title:"Advanced Types & Utility Types", dur:"22 min", yt:"EV4XiCEkFMQ"},
      {title:"Decorators & Metadata", dur:"18 min", yt:"O6A-u_FoEX8"},
      {title:"Design Patterns in TypeScript", dur:"24 min", yt:"tv-_1er1mWI"},
    ],
    reading:[
      {title:"Why TypeScript?", body:"TypeScript adds static typing to JavaScript catching errors at compile time.", points:["Catch errors before runtime","Better IDE autocomplete","Interfaces define contracts","Strict mode gives highest type safety"]},
      {title:"Key Advanced Concepts", body:"TypeScript's advanced type system expresses complex type relationships.", points:["Generics create reusable type-safe code","Mapped types transform existing types","Conditional types select based on conditions","Template literal types create string patterns"]},
    ],
    quiz:[
      {q:"What does TypeScript add to JavaScript?", opts:["Faster execution","Static type checking","New runtime features","Server-side rendering"], ans:1},
      {q:"What is a generic?", opts:["A base class","A placeholder type filled in later","A default value","A module import"], ans:1},
      {q:"What does '?' mean in TypeScript types?", opts:["Required property","Optional property","Null value","Generic type"], ans:1},
      {q:"What is a union type?", opts:["Two merged classes","A type that can be one of several using |","A type intersection","An array type"], ans:1},
      {q:"What does 'as const' do?", opts:["Makes a constant variable","Makes types readonly and literal","Casts to constructor","Defines an enum"], ans:1},
    ]
  },
  {
    id:10, title:"Business Analytics with Excel & Power BI", instructor:"David Park",
    category:"Business", duration:"9 hours",
    description:"Transform raw data into business insights using Excel and Power BI with pivot tables, DAX, and interactive dashboards.",
    img:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    rating:4.4, keywords:["excel","power bi","business intelligence","dashboard","kpi"],
    lessons:[
      {title:"Excel for Business Analysis", dur:"20 min", yt:"V0_0KatRhVo"},
      {title:"Pivot Tables & Power Query", dur:"22 min", yt:"lu6Hjuqgt-I"},
      {title:"Introduction to Power BI", dur:"24 min", yt:"yKTSLffVGbk"},
      {title:"Building Interactive Dashboards", dur:"26 min", yt:"AGrl-H87pRU"},
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
    id:11, title:"Vue.js 3 – The Complete Guide", instructor:"Lena Müller",
    category:"Web Development", duration:"11 hours",
    description:"Learn Vue.js 3 from zero to hero with Composition API, Pinia state management, Vue Router, and real projects.",
    img:"https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&q=80",
    rating:4.7, keywords:["vuejs","vue 3","composition api","pinia","frontend"],
    lessons:[
      {title:"Vue 3 Core Concepts", dur:"20 min", yt:"FXpIoQ_rT_c"},
      {title:"Composition API Deep Dive", dur:"24 min", yt:"bwItFdPt-6M"},
      {title:"Vue Router & Navigation", dur:"18 min", yt:"GD9nkmBEFkc"},
      {title:"State Management with Pinia", dur:"22 min", yt:"Ok0_H0WeHyU"},
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
    id:12, title:"Data Structures & Algorithms in Python", instructor:"Raj Patel",
    category:"Data Science", duration:"15 hours",
    description:"Master data structures and algorithms with Python. Cover arrays, trees, graphs, sorting, and dynamic programming.",
    img:"https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&q=80",
    rating:4.9, keywords:["algorithms","data structures","python","leetcode","interviews"],
    lessons:[
      {title:"Big O Notation & Complexity", dur:"18 min", yt:"v4cd1O4zkGw"},
      {title:"Arrays, Stacks & Queues", dur:"24 min", yt:"RBSGKlAvoiM"},
      {title:"Trees & Graph Traversal", dur:"28 min", yt:"oSWTXtMglKE"},
      {title:"Dynamic Programming Explained", dur:"26 min", yt:"oBt53YbR9Kk"},
    ],
    reading:[
      {title:"Why Algorithms Matter", body:"Algorithms are step-by-step procedures. Big O notation describes how runtime grows with input size.", points:["O(1) = constant best","O(log n) = logarithmic great","O(n) = linear acceptable","O(n²) = quadratic avoid for large inputs"]},
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
];

export default courses;