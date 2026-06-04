const resources = [
  { courseId: 1, lessonIdx: 0, files: [
    { name: 'React Cheatsheet', type: 'pdf', url: 'https://zerotomastery.io/cheatsheets/react-cheat-sheet/' },
    { name: 'JSX Reference Guide', type: 'pdf', url: 'https://react.dev/learn/writing-markup-with-jsx' },
  ]},
  { courseId: 1, lessonIdx: 1, files: [
    { name: 'Components & Props Examples', type: 'zip', url: 'https://github.com/facebook/react/archive/refs/heads/main.zip' },
  ]},
  { courseId: 1, lessonIdx: 2, files: [
    { name: 'React Hooks Guide', type: 'pdf', url: 'https://react.dev/reference/react/hooks' },
  ]},
  { courseId: 2, lessonIdx: 0, files: [
    { name: 'Python Setup Guide', type: 'pdf', url: 'https://s3.amazonaws.com/assets.datacamp.com/blog_assets/PythonForDataScience.pdf' },
    { name: 'Jupyter Notebook Intro', type: 'pdf', url: 'https://datascipy.github.io/assets/notebooks/02-Introduction_to_Jupyter_Notebooks.pdf' },
  ]},
  { courseId: 2, lessonIdx: 1, files: [
    { name: 'NumPy Cheatsheet', type: 'pdf', url: 'https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Numpy_Python_Cheat_Sheet.pdf' },
  ]},
  { courseId: 2, lessonIdx: 2, files: [
    { name: 'Pandas Data Wrangling Examples', type: 'ipynb', url: 'https://github.com/tirthajyoti/Pandas-Learn/archive/refs/heads/master.zip' },
  ]},
  { courseId: 3, lessonIdx: 0, files: [
    { name: 'UX Research Template', type: 'pdf', url: 'https://www.figma.com/community/file/1135591882287463118' },
  ]},
  { courseId: 3, lessonIdx: 1, files: [
    { name: 'Figma Wireframe Kit', type: 'fig', url: 'https://www.figma.com/community/file/1129199611323481268' },
  ]},
  { courseId: 5, lessonIdx: 2, files: [
    { name: 'TensorFlow Quickstart Code', type: 'py', url: 'https://raw.githubusercontent.com/tensorflow/docs/master/site/en/tutorials/quickstart/beginner.ipynb' },
  ]},
  { courseId: 6, lessonIdx: 0, files: [
    { name: 'Digital Marketing Strategy Template', type: 'pdf', url: 'https://www.smartinsights.com/digital-marketing-strategy/digital-marketing-strategy-and-planning-template/' },
  ]},
  { courseId: 7, lessonIdx: 1, files: [
    { name: 'Express API Boilerplate', type: 'zip', url: 'https://github.com/hagopj13/node-express-boilerplate/archive/refs/heads/master.zip' },
  ]},
  { courseId: 8, lessonIdx: 1, files: [
    { name: 'Network Security Checklist', type: 'pdf', url: 'https://captainit.com/wp-content/uploads/2025/06/8.-Network-Security-Checklist.pdf' },
  ]},
  { courseId: 10, lessonIdx: 0, files: [
    { name: 'Excel Data Analysis Workbook', type: 'xlsx', url: 'https://go.microsoft.com/fwlink/?LinkID=521962' },
  ]},
  { courseId: 13, lessonIdx: 0, files: [
    { name: 'HTML5 Tags Reference', type: 'pdf', url: 'https://uaa.umbc.edu/wp-content/uploads/sites/353/2024/11/HTML-Cheat-Sheet-1.pdf' },
  ]},
  { courseId: 13, lessonIdx: 2, files: [
    { name: 'Flexbox & Grid Playground', type: 'html', url: 'https://codepen.io/enxaneta/full/adLPwv' },
  ]},
  { courseId: 14, lessonIdx: 0, files: [
    { name: 'JS Quick Reference', type: 'pdf', url: 'https://github.com/iLoveCodingOrg/javascript-cheatsheet/raw/master/js-cheatsheet.pdf' },
  ]},
  { courseId: 17, lessonIdx: 0, files: [
    { name: 'Git Commands Cheatsheet', type: 'pdf', url: 'https://education.github.com/git-cheat-sheet-education.pdf' },
  ]},
  { courseId: 18, lessonIdx: 0, files: [
    { name: 'SQL Query Reference', type: 'pdf', url: 'https://www.dbvis.com/wp-content/uploads/2024/04/SQL-Cheat-Sheet.pdf' },
  ]},
  { courseId: 19, lessonIdx: 0, files: [
    { name: 'Python Cheatsheet', type: 'pdf', url: 'https://github.com/gto76/python-cheatsheet/raw/main/pdf/python_cheatsheet.pdf' },
  ]},

  { courseId: 21, lessonIdx: 0, files: [
    { name: "Next.js — Full-Stack Framework Starter Template", type: "zip", url: "https://github.com/topics/next-js-full-stack-framework/archive/refs/heads/main.zip" },
    { name: "Next.js — Full-Stack Framework Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/next-js-full-stack-framework.pdf" },
  ]},
  { courseId: 21, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/next-js-full-stack-framework-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 21, lessonIdx: 2, files: [
    { name: "Next.js — Full-Stack Framework Project Workbook", type: "pdf", url: "https://example.com/workbooks/next-js-full-stack-framework.pdf" },
  ]},
  { courseId: 21, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-next-js-full-stack-framework.pdf" },
  ]},
  { courseId: 22, lessonIdx: 0, files: [
    { name: "Angular — Complete Guide Starter Template", type: "zip", url: "https://github.com/topics/angular-complete-guide/archive/refs/heads/main.zip" },
    { name: "Angular — Complete Guide Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/angular-complete-guide.pdf" },
  ]},
  { courseId: 22, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/angular-complete-guide-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 22, lessonIdx: 2, files: [
    { name: "Angular — Complete Guide Project Workbook", type: "pdf", url: "https://example.com/workbooks/angular-complete-guide.pdf" },
  ]},
  { courseId: 22, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-angular-complete-guide.pdf" },
  ]},
  { courseId: 23, lessonIdx: 0, files: [
    { name: "Svelte & SvelteKit Starter Template", type: "zip", url: "https://github.com/topics/svelte-sveltekit/archive/refs/heads/main.zip" },
    { name: "Svelte & SvelteKit Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/svelte-sveltekit.pdf" },
  ]},
  { courseId: 23, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/svelte-sveltekit-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 23, lessonIdx: 2, files: [
    { name: "Svelte & SvelteKit Project Workbook", type: "pdf", url: "https://example.com/workbooks/svelte-sveltekit.pdf" },
  ]},
  { courseId: 23, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-svelte-sveltekit.pdf" },
  ]},
  { courseId: 24, lessonIdx: 0, files: [
    { name: "Django — Python Web Framework Starter Template", type: "zip", url: "https://github.com/topics/django-python-web-framework/archive/refs/heads/main.zip" },
    { name: "Django — Python Web Framework Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/django-python-web-framework.pdf" },
  ]},
  { courseId: 24, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/django-python-web-framework-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 24, lessonIdx: 2, files: [
    { name: "Django — Python Web Framework Project Workbook", type: "pdf", url: "https://example.com/workbooks/django-python-web-framework.pdf" },
  ]},
  { courseId: 24, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-django-python-web-framework.pdf" },
  ]},
  { courseId: 25, lessonIdx: 0, files: [
    { name: "Ruby on Rails Starter Template", type: "zip", url: "https://github.com/topics/ruby-on-rails/archive/refs/heads/main.zip" },
    { name: "Ruby on Rails Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/ruby-on-rails.pdf" },
  ]},
  { courseId: 25, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/ruby-on-rails-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 25, lessonIdx: 2, files: [
    { name: "Ruby on Rails Project Workbook", type: "pdf", url: "https://example.com/workbooks/ruby-on-rails.pdf" },
  ]},
  { courseId: 25, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-ruby-on-rails.pdf" },
  ]},
  { courseId: 26, lessonIdx: 0, files: [
    { name: "PHP & Laravel Starter Template", type: "zip", url: "https://github.com/topics/php-laravel/archive/refs/heads/main.zip" },
    { name: "PHP & Laravel Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/php-laravel.pdf" },
  ]},
  { courseId: 26, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/php-laravel-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 26, lessonIdx: 2, files: [
    { name: "PHP & Laravel Project Workbook", type: "pdf", url: "https://example.com/workbooks/php-laravel.pdf" },
  ]},
  { courseId: 26, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-php-laravel.pdf" },
  ]},
  { courseId: 27, lessonIdx: 0, files: [
    { name: "Go for Web Development Starter Template", type: "zip", url: "https://github.com/topics/go-for-web-development/archive/refs/heads/main.zip" },
    { name: "Go for Web Development Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/go-for-web-development.pdf" },
  ]},
  { courseId: 27, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/go-for-web-development-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 27, lessonIdx: 2, files: [
    { name: "Go for Web Development Project Workbook", type: "pdf", url: "https://example.com/workbooks/go-for-web-development.pdf" },
  ]},
  { courseId: 27, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-go-for-web-development.pdf" },
  ]},
  { courseId: 28, lessonIdx: 0, files: [
    { name: "GraphQL API Mastery Starter Template", type: "zip", url: "https://github.com/topics/graphql-api-mastery/archive/refs/heads/main.zip" },
    { name: "GraphQL API Mastery Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/graphql-api-mastery.pdf" },
  ]},
  { courseId: 28, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/graphql-api-mastery-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 28, lessonIdx: 2, files: [
    { name: "GraphQL API Mastery Project Workbook", type: "pdf", url: "https://example.com/workbooks/graphql-api-mastery.pdf" },
  ]},
  { courseId: 28, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-graphql-api-mastery.pdf" },
  ]},
  { courseId: 29, lessonIdx: 0, files: [
    { name: "Docker for Developers Starter Template", type: "zip", url: "https://github.com/topics/docker-for-developers/archive/refs/heads/main.zip" },
    { name: "Docker for Developers Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/docker-for-developers.pdf" },
  ]},
  { courseId: 29, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/docker-for-developers-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 29, lessonIdx: 2, files: [
    { name: "Docker for Developers Project Workbook", type: "pdf", url: "https://example.com/workbooks/docker-for-developers.pdf" },
  ]},
  { courseId: 29, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-docker-for-developers.pdf" },
  ]},
  { courseId: 30, lessonIdx: 0, files: [
    { name: "Web Performance Optimization Starter Template", type: "zip", url: "https://github.com/topics/web-performance-optimization/archive/refs/heads/main.zip" },
    { name: "Web Performance Optimization Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/web-performance-optimization.pdf" },
  ]},
  { courseId: 30, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/web-performance-optimization-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 30, lessonIdx: 2, files: [
    { name: "Web Performance Optimization Project Workbook", type: "pdf", url: "https://example.com/workbooks/web-performance-optimization.pdf" },
  ]},
  { courseId: 30, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-web-performance-optimization.pdf" },
  ]},
  { courseId: 31, lessonIdx: 0, files: [
    { name: "Progressive Web Apps (PWAs) Starter Template", type: "zip", url: "https://github.com/topics/progressive-web-apps-pwas/archive/refs/heads/main.zip" },
    { name: "Progressive Web Apps (PWAs) Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/progressive-web-apps-pwas.pdf" },
  ]},
  { courseId: 31, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/progressive-web-apps-pwas-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 31, lessonIdx: 2, files: [
    { name: "Progressive Web Apps (PWAs) Project Workbook", type: "pdf", url: "https://example.com/workbooks/progressive-web-apps-pwas.pdf" },
  ]},
  { courseId: 31, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-progressive-web-apps-pwas.pdf" },
  ]},
  { courseId: 32, lessonIdx: 0, files: [
    { name: "Testing with Jest & Cypress Starter Template", type: "zip", url: "https://github.com/topics/testing-with-jest-cypress/archive/refs/heads/main.zip" },
    { name: "Testing with Jest & Cypress Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/testing-with-jest-cypress.pdf" },
  ]},
  { courseId: 32, lessonIdx: 1, files: [
    { name: "Code Examples Pack", type: "zip", url: "https://github.com/example/testing-with-jest-cypress-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 32, lessonIdx: 2, files: [
    { name: "Testing with Jest & Cypress Project Workbook", type: "pdf", url: "https://example.com/workbooks/testing-with-jest-cypress.pdf" },
  ]},
  { courseId: 32, lessonIdx: 3, files: [
    { name: "Deployment Checklist", type: "pdf", url: "https://example.com/checklists/deployment-testing-with-jest-cypress.pdf" },
  ]},
  { courseId: 33, lessonIdx: 0, files: [
    { name: "React Native — Cross-Platform Apps Setup Guide", type: "pdf", url: "https://example.com/guides/react-native-cross-platform-apps-setup.pdf" },
    { name: "Sample App Source", type: "zip", url: "https://github.com/example/react-native-cross-platform-apps-sample/archive/refs/heads/main.zip" },
  ]},
  { courseId: 33, lessonIdx: 1, files: [
    { name: "UI Component Examples", type: "zip", url: "https://github.com/example/react-native-cross-platform-apps-ui/archive/refs/heads/main.zip" },
  ]},
  { courseId: 33, lessonIdx: 2, files: [
    { name: "Testing Guide", type: "pdf", url: "https://example.com/guides/react-native-cross-platform-apps-testing.pdf" },
  ]},
  { courseId: 33, lessonIdx: 3, files: [
    { name: "React Native — Cross-Platform Apps API Reference", type: "pdf", url: "https://example.com/reference/react-native-cross-platform-apps.pdf" },
  ]},
  { courseId: 34, lessonIdx: 0, files: [
    { name: "iOS Development with Swift Setup Guide", type: "pdf", url: "https://example.com/guides/ios-development-with-swift-setup.pdf" },
    { name: "Sample App Source", type: "zip", url: "https://github.com/example/ios-development-with-swift-sample/archive/refs/heads/main.zip" },
  ]},
  { courseId: 34, lessonIdx: 1, files: [
    { name: "UI Component Examples", type: "zip", url: "https://github.com/example/ios-development-with-swift-ui/archive/refs/heads/main.zip" },
  ]},
  { courseId: 34, lessonIdx: 2, files: [
    { name: "Testing Guide", type: "pdf", url: "https://example.com/guides/ios-development-with-swift-testing.pdf" },
  ]},
  { courseId: 34, lessonIdx: 3, files: [
    { name: "iOS Development with Swift API Reference", type: "pdf", url: "https://example.com/reference/ios-development-with-swift.pdf" },
  ]},
  { courseId: 35, lessonIdx: 0, files: [
    { name: "Android Development with Kotlin Setup Guide", type: "pdf", url: "https://example.com/guides/android-development-with-kotlin-setup.pdf" },
    { name: "Sample App Source", type: "zip", url: "https://github.com/example/android-development-with-kotlin-sample/archive/refs/heads/main.zip" },
  ]},
  { courseId: 35, lessonIdx: 1, files: [
    { name: "UI Component Examples", type: "zip", url: "https://github.com/example/android-development-with-kotlin-ui/archive/refs/heads/main.zip" },
  ]},
  { courseId: 35, lessonIdx: 2, files: [
    { name: "Testing Guide", type: "pdf", url: "https://example.com/guides/android-development-with-kotlin-testing.pdf" },
  ]},
  { courseId: 35, lessonIdx: 3, files: [
    { name: "Android Development with Kotlin API Reference", type: "pdf", url: "https://example.com/reference/android-development-with-kotlin.pdf" },
  ]},
  { courseId: 36, lessonIdx: 0, files: [
    { name: "Kotlin Multiplatform Setup Guide", type: "pdf", url: "https://example.com/guides/kotlin-multiplatform-setup.pdf" },
    { name: "Sample App Source", type: "zip", url: "https://github.com/example/kotlin-multiplatform-sample/archive/refs/heads/main.zip" },
  ]},
  { courseId: 36, lessonIdx: 1, files: [
    { name: "UI Component Examples", type: "zip", url: "https://github.com/example/kotlin-multiplatform-ui/archive/refs/heads/main.zip" },
  ]},
  { courseId: 36, lessonIdx: 2, files: [
    { name: "Testing Guide", type: "pdf", url: "https://example.com/guides/kotlin-multiplatform-testing.pdf" },
  ]},
  { courseId: 36, lessonIdx: 3, files: [
    { name: "Kotlin Multiplatform API Reference", type: "pdf", url: "https://example.com/reference/kotlin-multiplatform.pdf" },
  ]},
  { courseId: 37, lessonIdx: 0, files: [
    { name: "Ionic & Capacitor Setup Guide", type: "pdf", url: "https://example.com/guides/ionic-capacitor-setup.pdf" },
    { name: "Sample App Source", type: "zip", url: "https://github.com/example/ionic-capacitor-sample/archive/refs/heads/main.zip" },
  ]},
  { courseId: 37, lessonIdx: 1, files: [
    { name: "UI Component Examples", type: "zip", url: "https://github.com/example/ionic-capacitor-ui/archive/refs/heads/main.zip" },
  ]},
  { courseId: 37, lessonIdx: 2, files: [
    { name: "Testing Guide", type: "pdf", url: "https://example.com/guides/ionic-capacitor-testing.pdf" },
  ]},
  { courseId: 37, lessonIdx: 3, files: [
    { name: "Ionic & Capacitor API Reference", type: "pdf", url: "https://example.com/reference/ionic-capacitor.pdf" },
  ]},
  { courseId: 38, lessonIdx: 0, files: [
    { name: "PyTorch Deep Learning Notebook", type: "ipynb", url: "https://github.com/example/pytorch-deep-learning-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/pytorch-deep-learning-sample.zip" },
  ]},
  { courseId: 38, lessonIdx: 1, files: [
    { name: "PyTorch Deep Learning Code Script", type: "py", url: "https://github.com/example/pytorch-deep-learning-scripts/raw/main/main.py" },
  ]},
  { courseId: 38, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/pytorch-deep-learning-training.pdf" },
  ]},
  { courseId: 38, lessonIdx: 3, files: [
    { name: "PyTorch Deep Learning Reference Card", type: "pdf", url: "https://example.com/cheatsheets/pytorch-deep-learning.pdf" },
  ]},
  { courseId: 39, lessonIdx: 0, files: [
    { name: "Natural Language Processing (NLP) Notebook", type: "ipynb", url: "https://github.com/example/natural-language-processing-nlp-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/natural-language-processing-nlp-sample.zip" },
  ]},
  { courseId: 39, lessonIdx: 1, files: [
    { name: "Natural Language Processing (NLP) Code Script", type: "py", url: "https://github.com/example/natural-language-processing-nlp-scripts/raw/main/main.py" },
  ]},
  { courseId: 39, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/natural-language-processing-nlp-training.pdf" },
  ]},
  { courseId: 39, lessonIdx: 3, files: [
    { name: "Natural Language Processing (NLP) Reference Card", type: "pdf", url: "https://example.com/cheatsheets/natural-language-processing-nlp.pdf" },
  ]},
  { courseId: 40, lessonIdx: 0, files: [
    { name: "Computer Vision with OpenCV Notebook", type: "ipynb", url: "https://github.com/example/computer-vision-with-opencv-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/computer-vision-with-opencv-sample.zip" },
  ]},
  { courseId: 40, lessonIdx: 1, files: [
    { name: "Computer Vision with OpenCV Code Script", type: "py", url: "https://github.com/example/computer-vision-with-opencv-scripts/raw/main/main.py" },
  ]},
  { courseId: 40, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/computer-vision-with-opencv-training.pdf" },
  ]},
  { courseId: 40, lessonIdx: 3, files: [
    { name: "Computer Vision with OpenCV Reference Card", type: "pdf", url: "https://example.com/cheatsheets/computer-vision-with-opencv.pdf" },
  ]},
  { courseId: 41, lessonIdx: 0, files: [
    { name: "Reinforcement Learning Notebook", type: "ipynb", url: "https://github.com/example/reinforcement-learning-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/reinforcement-learning-sample.zip" },
  ]},
  { courseId: 41, lessonIdx: 1, files: [
    { name: "Reinforcement Learning Code Script", type: "py", url: "https://github.com/example/reinforcement-learning-scripts/raw/main/main.py" },
  ]},
  { courseId: 41, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/reinforcement-learning-training.pdf" },
  ]},
  { courseId: 41, lessonIdx: 3, files: [
    { name: "Reinforcement Learning Reference Card", type: "pdf", url: "https://example.com/cheatsheets/reinforcement-learning.pdf" },
  ]},
  { courseId: 42, lessonIdx: 0, files: [
    { name: "Generative AI & LLMs Notebook", type: "ipynb", url: "https://github.com/example/generative-ai-llms-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/generative-ai-llms-sample.zip" },
  ]},
  { courseId: 42, lessonIdx: 1, files: [
    { name: "Generative AI & LLMs Code Script", type: "py", url: "https://github.com/example/generative-ai-llms-scripts/raw/main/main.py" },
  ]},
  { courseId: 42, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/generative-ai-llms-training.pdf" },
  ]},
  { courseId: 42, lessonIdx: 3, files: [
    { name: "Generative AI & LLMs Reference Card", type: "pdf", url: "https://example.com/cheatsheets/generative-ai-llms.pdf" },
  ]},
  { courseId: 43, lessonIdx: 0, files: [
    { name: "MLOps & Model Deployment Notebook", type: "ipynb", url: "https://github.com/example/mlops-model-deployment-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/mlops-model-deployment-sample.zip" },
  ]},
  { courseId: 43, lessonIdx: 1, files: [
    { name: "MLOps & Model Deployment Code Script", type: "py", url: "https://github.com/example/mlops-model-deployment-scripts/raw/main/main.py" },
  ]},
  { courseId: 43, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/mlops-model-deployment-training.pdf" },
  ]},
  { courseId: 43, lessonIdx: 3, files: [
    { name: "MLOps & Model Deployment Reference Card", type: "pdf", url: "https://example.com/cheatsheets/mlops-model-deployment.pdf" },
  ]},
  { courseId: 44, lessonIdx: 0, files: [
    { name: "AI Ethics & Responsible AI Notebook", type: "ipynb", url: "https://github.com/example/ai-ethics-responsible-ai-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/ai-ethics-responsible-ai-sample.zip" },
  ]},
  { courseId: 44, lessonIdx: 1, files: [
    { name: "AI Ethics & Responsible AI Code Script", type: "py", url: "https://github.com/example/ai-ethics-responsible-ai-scripts/raw/main/main.py" },
  ]},
  { courseId: 44, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/ai-ethics-responsible-ai-training.pdf" },
  ]},
  { courseId: 44, lessonIdx: 3, files: [
    { name: "AI Ethics & Responsible AI Reference Card", type: "pdf", url: "https://example.com/cheatsheets/ai-ethics-responsible-ai.pdf" },
  ]},
  { courseId: 45, lessonIdx: 0, files: [
    { name: "Prompt Engineering & ChatGPT Notebook", type: "ipynb", url: "https://github.com/example/prompt-engineering-chatgpt-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/prompt-engineering-chatgpt-sample.zip" },
  ]},
  { courseId: 45, lessonIdx: 1, files: [
    { name: "Prompt Engineering & ChatGPT Code Script", type: "py", url: "https://github.com/example/prompt-engineering-chatgpt-scripts/raw/main/main.py" },
  ]},
  { courseId: 45, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/prompt-engineering-chatgpt-training.pdf" },
  ]},
  { courseId: 45, lessonIdx: 3, files: [
    { name: "Prompt Engineering & ChatGPT Reference Card", type: "pdf", url: "https://example.com/cheatsheets/prompt-engineering-chatgpt.pdf" },
  ]},
  { courseId: 46, lessonIdx: 0, files: [
    { name: "LangChain & RAG Applications Notebook", type: "ipynb", url: "https://github.com/example/langchain-rag-applications-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/langchain-rag-applications-sample.zip" },
  ]},
  { courseId: 46, lessonIdx: 1, files: [
    { name: "LangChain & RAG Applications Code Script", type: "py", url: "https://github.com/example/langchain-rag-applications-scripts/raw/main/main.py" },
  ]},
  { courseId: 46, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/langchain-rag-applications-training.pdf" },
  ]},
  { courseId: 46, lessonIdx: 3, files: [
    { name: "LangChain & RAG Applications Reference Card", type: "pdf", url: "https://example.com/cheatsheets/langchain-rag-applications.pdf" },
  ]},
  { courseId: 47, lessonIdx: 0, files: [
    { name: "Hugging Face Transformers Notebook", type: "ipynb", url: "https://github.com/example/hugging-face-transformers-notebook/archive/refs/heads/main.zip" },
    { name: "Dataset Sample", type: "zip", url: "https://example.com/datasets/hugging-face-transformers-sample.zip" },
  ]},
  { courseId: 47, lessonIdx: 1, files: [
    { name: "Hugging Face Transformers Code Script", type: "py", url: "https://github.com/example/hugging-face-transformers-scripts/raw/main/main.py" },
  ]},
  { courseId: 47, lessonIdx: 2, files: [
    { name: "Model Training Logs", type: "pdf", url: "https://example.com/reports/hugging-face-transformers-training.pdf" },
  ]},
  { courseId: 47, lessonIdx: 3, files: [
    { name: "Hugging Face Transformers Reference Card", type: "pdf", url: "https://example.com/cheatsheets/hugging-face-transformers.pdf" },
  ]},
  { courseId: 48, lessonIdx: 0, files: [
    { name: "R for Data Science Starter Notebook", type: "ipynb", url: "https://github.com/example/r-for-data-science/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/r-for-data-science-data.zip" },
  ]},
  { courseId: 48, lessonIdx: 1, files: [
    { name: "R for Data Science Analysis Script", type: "py", url: "https://example.com/scripts/r-for-data-science-analysis.py" },
  ]},
  { courseId: 48, lessonIdx: 2, files: [
    { name: "R for Data Science Visualization Examples", type: "html", url: "https://example.com/viz/r-for-data-science-viz.html" },
  ]},
  { courseId: 48, lessonIdx: 3, files: [
    { name: "R for Data Science Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/r-for-data-science.pdf" },
  ]},
  { courseId: 49, lessonIdx: 0, files: [
    { name: "Data Storytelling & Visualization Starter Notebook", type: "ipynb", url: "https://github.com/example/data-storytelling-visualization/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/data-storytelling-visualization-data.zip" },
  ]},
  { courseId: 49, lessonIdx: 1, files: [
    { name: "Data Storytelling & Visualization Analysis Script", type: "py", url: "https://example.com/scripts/data-storytelling-visualization-analysis.py" },
  ]},
  { courseId: 49, lessonIdx: 2, files: [
    { name: "Data Storytelling & Visualization Visualization Examples", type: "html", url: "https://example.com/viz/data-storytelling-visualization-viz.html" },
  ]},
  { courseId: 49, lessonIdx: 3, files: [
    { name: "Data Storytelling & Visualization Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/data-storytelling-visualization.pdf" },
  ]},
  { courseId: 50, lessonIdx: 0, files: [
    { name: "Time Series Analysis Starter Notebook", type: "ipynb", url: "https://github.com/example/time-series-analysis/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/time-series-analysis-data.zip" },
  ]},
  { courseId: 50, lessonIdx: 1, files: [
    { name: "Time Series Analysis Analysis Script", type: "py", url: "https://example.com/scripts/time-series-analysis-analysis.py" },
  ]},
  { courseId: 50, lessonIdx: 2, files: [
    { name: "Time Series Analysis Visualization Examples", type: "html", url: "https://example.com/viz/time-series-analysis-viz.html" },
  ]},
  { courseId: 50, lessonIdx: 3, files: [
    { name: "Time Series Analysis Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/time-series-analysis.pdf" },
  ]},
  { courseId: 51, lessonIdx: 0, files: [
    { name: "Big Data with Apache Spark Starter Notebook", type: "ipynb", url: "https://github.com/example/big-data-with-apache-spark/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/big-data-with-apache-spark-data.zip" },
  ]},
  { courseId: 51, lessonIdx: 1, files: [
    { name: "Big Data with Apache Spark Analysis Script", type: "py", url: "https://example.com/scripts/big-data-with-apache-spark-analysis.py" },
  ]},
  { courseId: 51, lessonIdx: 2, files: [
    { name: "Big Data with Apache Spark Visualization Examples", type: "html", url: "https://example.com/viz/big-data-with-apache-spark-viz.html" },
  ]},
  { courseId: 51, lessonIdx: 3, files: [
    { name: "Big Data with Apache Spark Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/big-data-with-apache-spark.pdf" },
  ]},
  { courseId: 52, lessonIdx: 0, files: [
    { name: "Data Warehousing & ETL Starter Notebook", type: "ipynb", url: "https://github.com/example/data-warehousing-etl/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/data-warehousing-etl-data.zip" },
  ]},
  { courseId: 52, lessonIdx: 1, files: [
    { name: "Data Warehousing & ETL Analysis Script", type: "py", url: "https://example.com/scripts/data-warehousing-etl-analysis.py" },
  ]},
  { courseId: 52, lessonIdx: 2, files: [
    { name: "Data Warehousing & ETL Visualization Examples", type: "html", url: "https://example.com/viz/data-warehousing-etl-viz.html" },
  ]},
  { courseId: 52, lessonIdx: 3, files: [
    { name: "Data Warehousing & ETL Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/data-warehousing-etl.pdf" },
  ]},
  { courseId: 53, lessonIdx: 0, files: [
    { name: "Apache Airflow — Data Pipelines Starter Notebook", type: "ipynb", url: "https://github.com/example/apache-airflow-data-pipelines/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/apache-airflow-data-pipelines-data.zip" },
  ]},
  { courseId: 53, lessonIdx: 1, files: [
    { name: "Apache Airflow — Data Pipelines Analysis Script", type: "py", url: "https://example.com/scripts/apache-airflow-data-pipelines-analysis.py" },
  ]},
  { courseId: 53, lessonIdx: 2, files: [
    { name: "Apache Airflow — Data Pipelines Visualization Examples", type: "html", url: "https://example.com/viz/apache-airflow-data-pipelines-viz.html" },
  ]},
  { courseId: 53, lessonIdx: 3, files: [
    { name: "Apache Airflow — Data Pipelines Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/apache-airflow-data-pipelines.pdf" },
  ]},
  { courseId: 54, lessonIdx: 0, files: [
    { name: "Tableau — Dashboard Mastery Starter Notebook", type: "ipynb", url: "https://github.com/example/tableau-dashboard-mastery/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/tableau-dashboard-mastery-data.zip" },
  ]},
  { courseId: 54, lessonIdx: 1, files: [
    { name: "Tableau — Dashboard Mastery Analysis Script", type: "py", url: "https://example.com/scripts/tableau-dashboard-mastery-analysis.py" },
  ]},
  { courseId: 54, lessonIdx: 2, files: [
    { name: "Tableau — Dashboard Mastery Visualization Examples", type: "html", url: "https://example.com/viz/tableau-dashboard-mastery-viz.html" },
  ]},
  { courseId: 54, lessonIdx: 3, files: [
    { name: "Tableau — Dashboard Mastery Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/tableau-dashboard-mastery.pdf" },
  ]},
  { courseId: 55, lessonIdx: 0, files: [
    { name: "Statistical Analysis with Python Starter Notebook", type: "ipynb", url: "https://github.com/example/statistical-analysis-with-python/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/statistical-analysis-with-python-data.zip" },
  ]},
  { courseId: 55, lessonIdx: 1, files: [
    { name: "Statistical Analysis with Python Analysis Script", type: "py", url: "https://example.com/scripts/statistical-analysis-with-python-analysis.py" },
  ]},
  { courseId: 55, lessonIdx: 2, files: [
    { name: "Statistical Analysis with Python Visualization Examples", type: "html", url: "https://example.com/viz/statistical-analysis-with-python-viz.html" },
  ]},
  { courseId: 55, lessonIdx: 3, files: [
    { name: "Statistical Analysis with Python Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/statistical-analysis-with-python.pdf" },
  ]},
  { courseId: 56, lessonIdx: 0, files: [
    { name: "Data Engineering Foundations Starter Notebook", type: "ipynb", url: "https://github.com/example/data-engineering-foundations/archive/refs/heads/main.zip" },
    { name: "Sample Dataset", type: "zip", url: "https://example.com/datasets/data-engineering-foundations-data.zip" },
  ]},
  { courseId: 56, lessonIdx: 1, files: [
    { name: "Data Engineering Foundations Analysis Script", type: "py", url: "https://example.com/scripts/data-engineering-foundations-analysis.py" },
  ]},
  { courseId: 56, lessonIdx: 2, files: [
    { name: "Data Engineering Foundations Visualization Examples", type: "html", url: "https://example.com/viz/data-engineering-foundations-viz.html" },
  ]},
  { courseId: 56, lessonIdx: 3, files: [
    { name: "Data Engineering Foundations Cheatsheet", type: "pdf", url: "https://example.com/cheatsheets/data-engineering-foundations.pdf" },
  ]},
  { courseId: 57, lessonIdx: 0, files: [
    { name: "Network Security Fundamentals Lab Setup", type: "pdf", url: "https://example.com/labs/network-security-fundamentals-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/network-security-fundamentals.pdf" },
  ]},
  { courseId: 57, lessonIdx: 1, files: [
    { name: "Network Security Fundamentals Tool Configuration", type: "zip", url: "https://github.com/example/network-security-fundamentals-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 57, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/network-security-fundamentals-scanner.py" },
  ]},
  { courseId: 57, lessonIdx: 3, files: [
    { name: "Network Security Fundamentals Incident Response Plan", type: "pdf", url: "https://example.com/templates/network-security-fundamentals-incident-response.pdf" },
  ]},
  { courseId: 58, lessonIdx: 0, files: [
    { name: "Cloud Security — AWS, Azure, GCP Lab Setup", type: "pdf", url: "https://example.com/labs/cloud-security-aws-azure-gcp-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/cloud-security-aws-azure-gcp.pdf" },
  ]},
  { courseId: 58, lessonIdx: 1, files: [
    { name: "Cloud Security — AWS, Azure, GCP Tool Configuration", type: "zip", url: "https://github.com/example/cloud-security-aws-azure-gcp-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 58, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/cloud-security-aws-azure-gcp-scanner.py" },
  ]},
  { courseId: 58, lessonIdx: 3, files: [
    { name: "Cloud Security — AWS, Azure, GCP Incident Response Plan", type: "pdf", url: "https://example.com/templates/cloud-security-aws-azure-gcp-incident-response.pdf" },
  ]},
  { courseId: 59, lessonIdx: 0, files: [
    { name: "CompTIA Security+ Prep Lab Setup", type: "pdf", url: "https://example.com/labs/comptia-security-prep-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/comptia-security-prep.pdf" },
  ]},
  { courseId: 59, lessonIdx: 1, files: [
    { name: "CompTIA Security+ Prep Tool Configuration", type: "zip", url: "https://github.com/example/comptia-security-prep-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 59, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/comptia-security-prep-scanner.py" },
  ]},
  { courseId: 59, lessonIdx: 3, files: [
    { name: "CompTIA Security+ Prep Incident Response Plan", type: "pdf", url: "https://example.com/templates/comptia-security-prep-incident-response.pdf" },
  ]},
  { courseId: 60, lessonIdx: 0, files: [
    { name: "Digital Forensics & Incident Response Lab Setup", type: "pdf", url: "https://example.com/labs/digital-forensics-incident-response-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/digital-forensics-incident-response.pdf" },
  ]},
  { courseId: 60, lessonIdx: 1, files: [
    { name: "Digital Forensics & Incident Response Tool Configuration", type: "zip", url: "https://github.com/example/digital-forensics-incident-response-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 60, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/digital-forensics-incident-response-scanner.py" },
  ]},
  { courseId: 60, lessonIdx: 3, files: [
    { name: "Digital Forensics & Incident Response Incident Response Plan", type: "pdf", url: "https://example.com/templates/digital-forensics-incident-response-incident-response.pdf" },
  ]},
  { courseId: 61, lessonIdx: 0, files: [
    { name: "Cryptography & Encryption Lab Setup", type: "pdf", url: "https://example.com/labs/cryptography-encryption-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/cryptography-encryption.pdf" },
  ]},
  { courseId: 61, lessonIdx: 1, files: [
    { name: "Cryptography & Encryption Tool Configuration", type: "zip", url: "https://github.com/example/cryptography-encryption-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 61, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/cryptography-encryption-scanner.py" },
  ]},
  { courseId: 61, lessonIdx: 3, files: [
    { name: "Cryptography & Encryption Incident Response Plan", type: "pdf", url: "https://example.com/templates/cryptography-encryption-incident-response.pdf" },
  ]},
  { courseId: 62, lessonIdx: 0, files: [
    { name: "DevSecOps — Secure CI/CD Lab Setup", type: "pdf", url: "https://example.com/labs/devsecops-secure-ci-cd-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/devsecops-secure-ci-cd.pdf" },
  ]},
  { courseId: 62, lessonIdx: 1, files: [
    { name: "DevSecOps — Secure CI/CD Tool Configuration", type: "zip", url: "https://github.com/example/devsecops-secure-ci-cd-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 62, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/devsecops-secure-ci-cd-scanner.py" },
  ]},
  { courseId: 62, lessonIdx: 3, files: [
    { name: "DevSecOps — Secure CI/CD Incident Response Plan", type: "pdf", url: "https://example.com/templates/devsecops-secure-ci-cd-incident-response.pdf" },
  ]},
  { courseId: 63, lessonIdx: 0, files: [
    { name: "Bug Bounty Hunting Lab Setup", type: "pdf", url: "https://example.com/labs/bug-bounty-hunting-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/bug-bounty-hunting.pdf" },
  ]},
  { courseId: 63, lessonIdx: 1, files: [
    { name: "Bug Bounty Hunting Tool Configuration", type: "zip", url: "https://github.com/example/bug-bounty-hunting-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 63, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/bug-bounty-hunting-scanner.py" },
  ]},
  { courseId: 63, lessonIdx: 3, files: [
    { name: "Bug Bounty Hunting Incident Response Plan", type: "pdf", url: "https://example.com/templates/bug-bounty-hunting-incident-response.pdf" },
  ]},
  { courseId: 64, lessonIdx: 0, files: [
    { name: "Malware Analysis & Reverse Engineering Lab Setup", type: "pdf", url: "https://example.com/labs/malware-analysis-reverse-engineering-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/malware-analysis-reverse-engineering.pdf" },
  ]},
  { courseId: 64, lessonIdx: 1, files: [
    { name: "Malware Analysis & Reverse Engineering Tool Configuration", type: "zip", url: "https://github.com/example/malware-analysis-reverse-engineering-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 64, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/malware-analysis-reverse-engineering-scanner.py" },
  ]},
  { courseId: 64, lessonIdx: 3, files: [
    { name: "Malware Analysis & Reverse Engineering Incident Response Plan", type: "pdf", url: "https://example.com/templates/malware-analysis-reverse-engineering-incident-response.pdf" },
  ]},
  { courseId: 65, lessonIdx: 0, files: [
    { name: "SOC Analyst — Monitoring & Defense Lab Setup", type: "pdf", url: "https://example.com/labs/soc-analyst-monitoring-defense-setup.pdf" },
    { name: "Security Checklist", type: "pdf", url: "https://example.com/checklists/soc-analyst-monitoring-defense.pdf" },
  ]},
  { courseId: 65, lessonIdx: 1, files: [
    { name: "SOC Analyst — Monitoring & Defense Tool Configuration", type: "zip", url: "https://github.com/example/soc-analyst-monitoring-defense-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 65, lessonIdx: 2, files: [
    { name: "Vulnerability Scanner Script", type: "py", url: "https://example.com/scripts/soc-analyst-monitoring-defense-scanner.py" },
  ]},
  { courseId: 65, lessonIdx: 3, files: [
    { name: "SOC Analyst — Monitoring & Defense Incident Response Plan", type: "pdf", url: "https://example.com/templates/soc-analyst-monitoring-defense-incident-response.pdf" },
  ]},
  { courseId: 66, lessonIdx: 0, files: [
    { name: "Social Media Strategy & Management Strategy Template", type: "pdf", url: "https://example.com/templates/social-media-strategy-management-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 66, lessonIdx: 1, files: [
    { name: "Social Media Strategy & Management Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 66, lessonIdx: 2, files: [
    { name: "Social Media Strategy & Management Analytics Dashboard", type: "html", url: "https://example.com/dashboards/social-media-strategy-management.html" },
  ]},
  { courseId: 66, lessonIdx: 3, files: [
    { name: "Social Media Strategy & Management Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/social-media-strategy-management-metrics.pdf" },
  ]},
  { courseId: 67, lessonIdx: 0, files: [
    { name: "Content Marketing Masterclass Strategy Template", type: "pdf", url: "https://example.com/templates/content-marketing-masterclass-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 67, lessonIdx: 1, files: [
    { name: "Content Marketing Masterclass Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 67, lessonIdx: 2, files: [
    { name: "Content Marketing Masterclass Analytics Dashboard", type: "html", url: "https://example.com/dashboards/content-marketing-masterclass.html" },
  ]},
  { courseId: 67, lessonIdx: 3, files: [
    { name: "Content Marketing Masterclass Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/content-marketing-masterclass-metrics.pdf" },
  ]},
  { courseId: 68, lessonIdx: 0, files: [
    { name: "Affiliate Marketing Strategy Template", type: "pdf", url: "https://example.com/templates/affiliate-marketing-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 68, lessonIdx: 1, files: [
    { name: "Affiliate Marketing Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 68, lessonIdx: 2, files: [
    { name: "Affiliate Marketing Analytics Dashboard", type: "html", url: "https://example.com/dashboards/affiliate-marketing.html" },
  ]},
  { courseId: 68, lessonIdx: 3, files: [
    { name: "Affiliate Marketing Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/affiliate-marketing-metrics.pdf" },
  ]},
  { courseId: 69, lessonIdx: 0, files: [
    { name: "Google Analytics & Data-Driven Marketing Strategy Template", type: "pdf", url: "https://example.com/templates/google-analytics-data-driven-marketing-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 69, lessonIdx: 1, files: [
    { name: "Google Analytics & Data-Driven Marketing Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 69, lessonIdx: 2, files: [
    { name: "Google Analytics & Data-Driven Marketing Analytics Dashboard", type: "html", url: "https://example.com/dashboards/google-analytics-data-driven-marketing.html" },
  ]},
  { courseId: 69, lessonIdx: 3, files: [
    { name: "Google Analytics & Data-Driven Marketing Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/google-analytics-data-driven-marketing-metrics.pdf" },
  ]},
  { courseId: 70, lessonIdx: 0, files: [
    { name: "Facebook & Instagram Ads Strategy Template", type: "pdf", url: "https://example.com/templates/facebook-instagram-ads-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 70, lessonIdx: 1, files: [
    { name: "Facebook & Instagram Ads Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 70, lessonIdx: 2, files: [
    { name: "Facebook & Instagram Ads Analytics Dashboard", type: "html", url: "https://example.com/dashboards/facebook-instagram-ads.html" },
  ]},
  { courseId: 70, lessonIdx: 3, files: [
    { name: "Facebook & Instagram Ads Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/facebook-instagram-ads-metrics.pdf" },
  ]},
  { courseId: 71, lessonIdx: 0, files: [
    { name: "TikTok & Short-Form Video Marketing Strategy Template", type: "pdf", url: "https://example.com/templates/tiktok-short-form-video-marketing-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 71, lessonIdx: 1, files: [
    { name: "TikTok & Short-Form Video Marketing Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 71, lessonIdx: 2, files: [
    { name: "TikTok & Short-Form Video Marketing Analytics Dashboard", type: "html", url: "https://example.com/dashboards/tiktok-short-form-video-marketing.html" },
  ]},
  { courseId: 71, lessonIdx: 3, files: [
    { name: "TikTok & Short-Form Video Marketing Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/tiktok-short-form-video-marketing-metrics.pdf" },
  ]},
  { courseId: 72, lessonIdx: 0, files: [
    { name: "Copywriting for Marketers Strategy Template", type: "pdf", url: "https://example.com/templates/copywriting-for-marketers-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 72, lessonIdx: 1, files: [
    { name: "Copywriting for Marketers Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 72, lessonIdx: 2, files: [
    { name: "Copywriting for Marketers Analytics Dashboard", type: "html", url: "https://example.com/dashboards/copywriting-for-marketers.html" },
  ]},
  { courseId: 72, lessonIdx: 3, files: [
    { name: "Copywriting for Marketers Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/copywriting-for-marketers-metrics.pdf" },
  ]},
  { courseId: 73, lessonIdx: 0, files: [
    { name: "Growth Hacking Techniques Strategy Template", type: "pdf", url: "https://example.com/templates/growth-hacking-techniques-strategy.pdf" },
    { name: "Campaign Planner", type: "xlsx", url: "https://example.com/templates/campaign-planner.xlsx" },
  ]},
  { courseId: 73, lessonIdx: 1, files: [
    { name: "Growth Hacking Techniques Content Calendar", type: "xlsx", url: "https://example.com/templates/content-calendar.xlsx" },
  ]},
  { courseId: 73, lessonIdx: 2, files: [
    { name: "Growth Hacking Techniques Analytics Dashboard", type: "html", url: "https://example.com/dashboards/growth-hacking-techniques.html" },
  ]},
  { courseId: 73, lessonIdx: 3, files: [
    { name: "Growth Hacking Techniques Metrics Reference", type: "pdf", url: "https://example.com/cheatsheets/growth-hacking-techniques-metrics.pdf" },
  ]},
  { courseId: 74, lessonIdx: 0, files: [
    { name: "Entrepreneurship 101 Framework Template", type: "pdf", url: "https://example.com/templates/entrepreneurship-101-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 74, lessonIdx: 1, files: [
    { name: "Entrepreneurship 101 Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/entrepreneurship-101-case-study.pdf" },
  ]},
  { courseId: 74, lessonIdx: 2, files: [
    { name: "Entrepreneurship 101 Assessment Tool", type: "xlsx", url: "https://example.com/tools/entrepreneurship-101-assessment.xlsx" },
  ]},
  { courseId: 74, lessonIdx: 3, files: [
    { name: "Entrepreneurship 101 Certification Prep", type: "pdf", url: "https://example.com/prep/entrepreneurship-101-cert.pdf" },
  ]},
  { courseId: 75, lessonIdx: 0, files: [
    { name: "Project Management with PMP Framework Template", type: "pdf", url: "https://example.com/templates/project-management-with-pmp-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 75, lessonIdx: 1, files: [
    { name: "Project Management with PMP Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/project-management-with-pmp-case-study.pdf" },
  ]},
  { courseId: 75, lessonIdx: 2, files: [
    { name: "Project Management with PMP Assessment Tool", type: "xlsx", url: "https://example.com/tools/project-management-with-pmp-assessment.xlsx" },
  ]},
  { courseId: 75, lessonIdx: 3, files: [
    { name: "Project Management with PMP Certification Prep", type: "pdf", url: "https://example.com/prep/project-management-with-pmp-cert.pdf" },
  ]},
  { courseId: 76, lessonIdx: 0, files: [
    { name: "Agile & Scrum Masterclass Framework Template", type: "pdf", url: "https://example.com/templates/agile-scrum-masterclass-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 76, lessonIdx: 1, files: [
    { name: "Agile & Scrum Masterclass Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/agile-scrum-masterclass-case-study.pdf" },
  ]},
  { courseId: 76, lessonIdx: 2, files: [
    { name: "Agile & Scrum Masterclass Assessment Tool", type: "xlsx", url: "https://example.com/tools/agile-scrum-masterclass-assessment.xlsx" },
  ]},
  { courseId: 76, lessonIdx: 3, files: [
    { name: "Agile & Scrum Masterclass Certification Prep", type: "pdf", url: "https://example.com/prep/agile-scrum-masterclass-cert.pdf" },
  ]},
  { courseId: 77, lessonIdx: 0, files: [
    { name: "Product Management Fundamentals Framework Template", type: "pdf", url: "https://example.com/templates/product-management-fundamentals-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 77, lessonIdx: 1, files: [
    { name: "Product Management Fundamentals Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/product-management-fundamentals-case-study.pdf" },
  ]},
  { courseId: 77, lessonIdx: 2, files: [
    { name: "Product Management Fundamentals Assessment Tool", type: "xlsx", url: "https://example.com/tools/product-management-fundamentals-assessment.xlsx" },
  ]},
  { courseId: 77, lessonIdx: 3, files: [
    { name: "Product Management Fundamentals Certification Prep", type: "pdf", url: "https://example.com/prep/product-management-fundamentals-cert.pdf" },
  ]},
  { courseId: 78, lessonIdx: 0, files: [
    { name: "Financial Analysis & Modeling Framework Template", type: "pdf", url: "https://example.com/templates/financial-analysis-modeling-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 78, lessonIdx: 1, files: [
    { name: "Financial Analysis & Modeling Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/financial-analysis-modeling-case-study.pdf" },
  ]},
  { courseId: 78, lessonIdx: 2, files: [
    { name: "Financial Analysis & Modeling Assessment Tool", type: "xlsx", url: "https://example.com/tools/financial-analysis-modeling-assessment.xlsx" },
  ]},
  { courseId: 78, lessonIdx: 3, files: [
    { name: "Financial Analysis & Modeling Certification Prep", type: "pdf", url: "https://example.com/prep/financial-analysis-modeling-cert.pdf" },
  ]},
  { courseId: 79, lessonIdx: 0, files: [
    { name: "Leadership & Team Management Framework Template", type: "pdf", url: "https://example.com/templates/leadership-team-management-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 79, lessonIdx: 1, files: [
    { name: "Leadership & Team Management Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/leadership-team-management-case-study.pdf" },
  ]},
  { courseId: 79, lessonIdx: 2, files: [
    { name: "Leadership & Team Management Assessment Tool", type: "xlsx", url: "https://example.com/tools/leadership-team-management-assessment.xlsx" },
  ]},
  { courseId: 79, lessonIdx: 3, files: [
    { name: "Leadership & Team Management Certification Prep", type: "pdf", url: "https://example.com/prep/leadership-team-management-cert.pdf" },
  ]},
  { courseId: 80, lessonIdx: 0, files: [
    { name: "Sales Strategies & Negotiation Framework Template", type: "pdf", url: "https://example.com/templates/sales-strategies-negotiation-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 80, lessonIdx: 1, files: [
    { name: "Sales Strategies & Negotiation Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/sales-strategies-negotiation-case-study.pdf" },
  ]},
  { courseId: 80, lessonIdx: 2, files: [
    { name: "Sales Strategies & Negotiation Assessment Tool", type: "xlsx", url: "https://example.com/tools/sales-strategies-negotiation-assessment.xlsx" },
  ]},
  { courseId: 80, lessonIdx: 3, files: [
    { name: "Sales Strategies & Negotiation Certification Prep", type: "pdf", url: "https://example.com/prep/sales-strategies-negotiation-cert.pdf" },
  ]},
  { courseId: 81, lessonIdx: 0, files: [
    { name: "Public Speaking & Communication Framework Template", type: "pdf", url: "https://example.com/templates/public-speaking-communication-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 81, lessonIdx: 1, files: [
    { name: "Public Speaking & Communication Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/public-speaking-communication-case-study.pdf" },
  ]},
  { courseId: 81, lessonIdx: 2, files: [
    { name: "Public Speaking & Communication Assessment Tool", type: "xlsx", url: "https://example.com/tools/public-speaking-communication-assessment.xlsx" },
  ]},
  { courseId: 81, lessonIdx: 3, files: [
    { name: "Public Speaking & Communication Certification Prep", type: "pdf", url: "https://example.com/prep/public-speaking-communication-cert.pdf" },
  ]},
  { courseId: 82, lessonIdx: 0, files: [
    { name: "Lean Six Sigma Framework Template", type: "pdf", url: "https://example.com/templates/lean-six-sigma-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 82, lessonIdx: 1, files: [
    { name: "Lean Six Sigma Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/lean-six-sigma-case-study.pdf" },
  ]},
  { courseId: 82, lessonIdx: 2, files: [
    { name: "Lean Six Sigma Assessment Tool", type: "xlsx", url: "https://example.com/tools/lean-six-sigma-assessment.xlsx" },
  ]},
  { courseId: 82, lessonIdx: 3, files: [
    { name: "Lean Six Sigma Certification Prep", type: "pdf", url: "https://example.com/prep/lean-six-sigma-cert.pdf" },
  ]},
  { courseId: 83, lessonIdx: 0, files: [
    { name: "CRM with Salesforce Framework Template", type: "pdf", url: "https://example.com/templates/crm-with-salesforce-framework.pdf" },
    { name: "Business Plan Template", type: "xlsx", url: "https://example.com/templates/business-plan.xlsx" },
  ]},
  { courseId: 83, lessonIdx: 1, files: [
    { name: "CRM with Salesforce Case Study Workbook", type: "pdf", url: "https://example.com/workbooks/crm-with-salesforce-case-study.pdf" },
  ]},
  { courseId: 83, lessonIdx: 2, files: [
    { name: "CRM with Salesforce Assessment Tool", type: "xlsx", url: "https://example.com/tools/crm-with-salesforce-assessment.xlsx" },
  ]},
  { courseId: 83, lessonIdx: 3, files: [
    { name: "CRM with Salesforce Certification Prep", type: "pdf", url: "https://example.com/prep/crm-with-salesforce-cert.pdf" },
  ]},
  { courseId: 84, lessonIdx: 0, files: [
    { name: "Adobe XD — UI Design Design Kit", type: "fig", url: "https://www.figma.com/community/file/84000" },
    { name: "Adobe XD — UI Design Style Guide", type: "pdf", url: "https://example.com/guides/adobe-xd-ui-design-style.pdf" },
  ]},
  { courseId: 84, lessonIdx: 1, files: [
    { name: "Adobe XD — UI Design Asset Pack", type: "zip", url: "https://github.com/example/adobe-xd-ui-design-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 84, lessonIdx: 2, files: [
    { name: "Adobe XD — UI Design Tutorial Files", type: "zip", url: "https://github.com/example/adobe-xd-ui-design-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 84, lessonIdx: 3, files: [
    { name: "Adobe XD — UI Design Portfolio Template", type: "pdf", url: "https://example.com/templates/adobe-xd-ui-design-portfolio.pdf" },
  ]},
  { courseId: 85, lessonIdx: 0, files: [
    { name: "Motion Design & Animation Design Kit", type: "fig", url: "https://www.figma.com/community/file/85000" },
    { name: "Motion Design & Animation Style Guide", type: "pdf", url: "https://example.com/guides/motion-design-animation-style.pdf" },
  ]},
  { courseId: 85, lessonIdx: 1, files: [
    { name: "Motion Design & Animation Asset Pack", type: "zip", url: "https://github.com/example/motion-design-animation-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 85, lessonIdx: 2, files: [
    { name: "Motion Design & Animation Tutorial Files", type: "zip", url: "https://github.com/example/motion-design-animation-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 85, lessonIdx: 3, files: [
    { name: "Motion Design & Animation Portfolio Template", type: "pdf", url: "https://example.com/templates/motion-design-animation-portfolio.pdf" },
  ]},
  { courseId: 86, lessonIdx: 0, files: [
    { name: "3D Modeling with Blender Design Kit", type: "fig", url: "https://www.figma.com/community/file/86000" },
    { name: "3D Modeling with Blender Style Guide", type: "pdf", url: "https://example.com/guides/3d-modeling-with-blender-style.pdf" },
  ]},
  { courseId: 86, lessonIdx: 1, files: [
    { name: "3D Modeling with Blender Asset Pack", type: "zip", url: "https://github.com/example/3d-modeling-with-blender-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 86, lessonIdx: 2, files: [
    { name: "3D Modeling with Blender Tutorial Files", type: "zip", url: "https://github.com/example/3d-modeling-with-blender-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 86, lessonIdx: 3, files: [
    { name: "3D Modeling with Blender Portfolio Template", type: "pdf", url: "https://example.com/templates/3d-modeling-with-blender-portfolio.pdf" },
  ]},
  { courseId: 87, lessonIdx: 0, files: [
    { name: "Photoshop for Web Designers Design Kit", type: "fig", url: "https://www.figma.com/community/file/87000" },
    { name: "Photoshop for Web Designers Style Guide", type: "pdf", url: "https://example.com/guides/photoshop-for-web-designers-style.pdf" },
  ]},
  { courseId: 87, lessonIdx: 1, files: [
    { name: "Photoshop for Web Designers Asset Pack", type: "zip", url: "https://github.com/example/photoshop-for-web-designers-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 87, lessonIdx: 2, files: [
    { name: "Photoshop for Web Designers Tutorial Files", type: "zip", url: "https://github.com/example/photoshop-for-web-designers-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 87, lessonIdx: 3, files: [
    { name: "Photoshop for Web Designers Portfolio Template", type: "pdf", url: "https://example.com/templates/photoshop-for-web-designers-portfolio.pdf" },
  ]},
  { courseId: 88, lessonIdx: 0, files: [
    { name: "Illustrator Masterclass Design Kit", type: "fig", url: "https://www.figma.com/community/file/88000" },
    { name: "Illustrator Masterclass Style Guide", type: "pdf", url: "https://example.com/guides/illustrator-masterclass-style.pdf" },
  ]},
  { courseId: 88, lessonIdx: 1, files: [
    { name: "Illustrator Masterclass Asset Pack", type: "zip", url: "https://github.com/example/illustrator-masterclass-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 88, lessonIdx: 2, files: [
    { name: "Illustrator Masterclass Tutorial Files", type: "zip", url: "https://github.com/example/illustrator-masterclass-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 88, lessonIdx: 3, files: [
    { name: "Illustrator Masterclass Portfolio Template", type: "pdf", url: "https://example.com/templates/illustrator-masterclass-portfolio.pdf" },
  ]},
  { courseId: 89, lessonIdx: 0, files: [
    { name: "Brand Identity & Logo Design Design Kit", type: "fig", url: "https://www.figma.com/community/file/89000" },
    { name: "Brand Identity & Logo Design Style Guide", type: "pdf", url: "https://example.com/guides/brand-identity-logo-design-style.pdf" },
  ]},
  { courseId: 89, lessonIdx: 1, files: [
    { name: "Brand Identity & Logo Design Asset Pack", type: "zip", url: "https://github.com/example/brand-identity-logo-design-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 89, lessonIdx: 2, files: [
    { name: "Brand Identity & Logo Design Tutorial Files", type: "zip", url: "https://github.com/example/brand-identity-logo-design-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 89, lessonIdx: 3, files: [
    { name: "Brand Identity & Logo Design Portfolio Template", type: "pdf", url: "https://example.com/templates/brand-identity-logo-design-portfolio.pdf" },
  ]},
  { courseId: 90, lessonIdx: 0, files: [
    { name: "Typography & Color Theory Design Kit", type: "fig", url: "https://www.figma.com/community/file/90000" },
    { name: "Typography & Color Theory Style Guide", type: "pdf", url: "https://example.com/guides/typography-color-theory-style.pdf" },
  ]},
  { courseId: 90, lessonIdx: 1, files: [
    { name: "Typography & Color Theory Asset Pack", type: "zip", url: "https://github.com/example/typography-color-theory-assets/archive/refs/heads/main.zip" },
  ]},
  { courseId: 90, lessonIdx: 2, files: [
    { name: "Typography & Color Theory Tutorial Files", type: "zip", url: "https://github.com/example/typography-color-theory-tutorial/archive/refs/heads/main.zip" },
  ]},
  { courseId: 90, lessonIdx: 3, files: [
    { name: "Typography & Color Theory Portfolio Template", type: "pdf", url: "https://example.com/templates/typography-color-theory-portfolio.pdf" },
  ]},
  { courseId: 91, lessonIdx: 0, files: [
    { name: "C Programming — From Zero to Expert Setup Guide", type: "pdf", url: "https://example.com/guides/c-programming-from-zero-to-expert-setup.pdf" },
    { name: "C Programming — From Zero to Expert Code Examples", type: "zip", url: "https://github.com/example/c-programming-from-zero-to-expert-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 91, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/c-programming-from-zero-to-expert-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 91, lessonIdx: 2, files: [
    { name: "C Programming — From Zero to Expert Projects Workbook", type: "pdf", url: "https://example.com/workbooks/c-programming-from-zero-to-expert-projects.pdf" },
  ]},
  { courseId: 91, lessonIdx: 3, files: [
    { name: "C Programming — From Zero to Expert Reference", type: "pdf", url: "https://example.com/reference/c-programming-from-zero-to-expert-quickref.pdf" },
  ]},
  { courseId: 92, lessonIdx: 0, files: [
    { name: "C++ for Game Development Setup Guide", type: "pdf", url: "https://example.com/guides/c-for-game-development-setup.pdf" },
    { name: "C++ for Game Development Code Examples", type: "zip", url: "https://github.com/example/c-for-game-development-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 92, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/c-for-game-development-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 92, lessonIdx: 2, files: [
    { name: "C++ for Game Development Projects Workbook", type: "pdf", url: "https://example.com/workbooks/c-for-game-development-projects.pdf" },
  ]},
  { courseId: 92, lessonIdx: 3, files: [
    { name: "C++ for Game Development Reference", type: "pdf", url: "https://example.com/reference/c-for-game-development-quickref.pdf" },
  ]},
  { courseId: 93, lessonIdx: 0, files: [
    { name: "C# & .NET Fundamentals Setup Guide", type: "pdf", url: "https://example.com/guides/c-net-fundamentals-setup.pdf" },
    { name: "C# & .NET Fundamentals Code Examples", type: "zip", url: "https://github.com/example/c-net-fundamentals-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 93, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/c-net-fundamentals-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 93, lessonIdx: 2, files: [
    { name: "C# & .NET Fundamentals Projects Workbook", type: "pdf", url: "https://example.com/workbooks/c-net-fundamentals-projects.pdf" },
  ]},
  { courseId: 93, lessonIdx: 3, files: [
    { name: "C# & .NET Fundamentals Reference", type: "pdf", url: "https://example.com/reference/c-net-fundamentals-quickref.pdf" },
  ]},
  { courseId: 94, lessonIdx: 0, files: [
    { name: "Rust — Safe Systems Programming Setup Guide", type: "pdf", url: "https://example.com/guides/rust-safe-systems-programming-setup.pdf" },
    { name: "Rust — Safe Systems Programming Code Examples", type: "zip", url: "https://github.com/example/rust-safe-systems-programming-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 94, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/rust-safe-systems-programming-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 94, lessonIdx: 2, files: [
    { name: "Rust — Safe Systems Programming Projects Workbook", type: "pdf", url: "https://example.com/workbooks/rust-safe-systems-programming-projects.pdf" },
  ]},
  { courseId: 94, lessonIdx: 3, files: [
    { name: "Rust — Safe Systems Programming Reference", type: "pdf", url: "https://example.com/reference/rust-safe-systems-programming-quickref.pdf" },
  ]},
  { courseId: 95, lessonIdx: 0, files: [
    { name: "Go Programming Language Setup Guide", type: "pdf", url: "https://example.com/guides/go-programming-language-setup.pdf" },
    { name: "Go Programming Language Code Examples", type: "zip", url: "https://github.com/example/go-programming-language-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 95, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/go-programming-language-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 95, lessonIdx: 2, files: [
    { name: "Go Programming Language Projects Workbook", type: "pdf", url: "https://example.com/workbooks/go-programming-language-projects.pdf" },
  ]},
  { courseId: 95, lessonIdx: 3, files: [
    { name: "Go Programming Language Reference", type: "pdf", url: "https://example.com/reference/go-programming-language-quickref.pdf" },
  ]},
  { courseId: 96, lessonIdx: 0, files: [
    { name: "Bash Scripting & Automation Setup Guide", type: "pdf", url: "https://example.com/guides/bash-scripting-automation-setup.pdf" },
    { name: "Bash Scripting & Automation Code Examples", type: "zip", url: "https://github.com/example/bash-scripting-automation-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 96, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/bash-scripting-automation-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 96, lessonIdx: 2, files: [
    { name: "Bash Scripting & Automation Projects Workbook", type: "pdf", url: "https://example.com/workbooks/bash-scripting-automation-projects.pdf" },
  ]},
  { courseId: 96, lessonIdx: 3, files: [
    { name: "Bash Scripting & Automation Reference", type: "pdf", url: "https://example.com/reference/bash-scripting-automation-quickref.pdf" },
  ]},
  { courseId: 97, lessonIdx: 0, files: [
    { name: "Competitive Programming Setup Guide", type: "pdf", url: "https://example.com/guides/competitive-programming-setup.pdf" },
    { name: "Competitive Programming Code Examples", type: "zip", url: "https://github.com/example/competitive-programming-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 97, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/competitive-programming-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 97, lessonIdx: 2, files: [
    { name: "Competitive Programming Projects Workbook", type: "pdf", url: "https://example.com/workbooks/competitive-programming-projects.pdf" },
  ]},
  { courseId: 97, lessonIdx: 3, files: [
    { name: "Competitive Programming Reference", type: "pdf", url: "https://example.com/reference/competitive-programming-quickref.pdf" },
  ]},
  { courseId: 98, lessonIdx: 0, files: [
    { name: "Functional Programming with Haskell Setup Guide", type: "pdf", url: "https://example.com/guides/functional-programming-with-haskell-setup.pdf" },
    { name: "Functional Programming with Haskell Code Examples", type: "zip", url: "https://github.com/example/functional-programming-with-haskell-examples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 98, lessonIdx: 1, files: [
    { name: "Practice Exercises", type: "zip", url: "https://github.com/example/functional-programming-with-haskell-exercises/archive/refs/heads/main.zip" },
  ]},
  { courseId: 98, lessonIdx: 2, files: [
    { name: "Functional Programming with Haskell Projects Workbook", type: "pdf", url: "https://example.com/workbooks/functional-programming-with-haskell-projects.pdf" },
  ]},
  { courseId: 98, lessonIdx: 3, files: [
    { name: "Functional Programming with Haskell Reference", type: "pdf", url: "https://example.com/reference/functional-programming-with-haskell-quickref.pdf" },
  ]},
  { courseId: 99, lessonIdx: 0, files: [
    { name: "AWS Solutions Architect Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/aws-solutions-architect-arch.pdf" },
    { name: "AWS Solutions Architect Config Files", type: "zip", url: "https://github.com/example/aws-solutions-architect-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 99, lessonIdx: 1, files: [
    { name: "AWS Solutions Architect Deployment Script", type: "py", url: "https://example.com/scripts/aws-solutions-architect-deploy.py" },
  ]},
  { courseId: 99, lessonIdx: 2, files: [
    { name: "AWS Solutions Architect IaC Templates", type: "zip", url: "https://github.com/example/aws-solutions-architect-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 99, lessonIdx: 3, files: [
    { name: "AWS Solutions Architect Exam Prep", type: "pdf", url: "https://example.com/prep/aws-solutions-architect-exam.pdf" },
  ]},
  { courseId: 100, lessonIdx: 0, files: [
    { name: "Microsoft Azure Fundamentals Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/microsoft-azure-fundamentals-arch.pdf" },
    { name: "Microsoft Azure Fundamentals Config Files", type: "zip", url: "https://github.com/example/microsoft-azure-fundamentals-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 100, lessonIdx: 1, files: [
    { name: "Microsoft Azure Fundamentals Deployment Script", type: "py", url: "https://example.com/scripts/microsoft-azure-fundamentals-deploy.py" },
  ]},
  { courseId: 100, lessonIdx: 2, files: [
    { name: "Microsoft Azure Fundamentals IaC Templates", type: "zip", url: "https://github.com/example/microsoft-azure-fundamentals-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 100, lessonIdx: 3, files: [
    { name: "Microsoft Azure Fundamentals Exam Prep", type: "pdf", url: "https://example.com/prep/microsoft-azure-fundamentals-exam.pdf" },
  ]},
  { courseId: 101, lessonIdx: 0, files: [
    { name: "Google Cloud Platform Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/google-cloud-platform-arch.pdf" },
    { name: "Google Cloud Platform Config Files", type: "zip", url: "https://github.com/example/google-cloud-platform-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 101, lessonIdx: 1, files: [
    { name: "Google Cloud Platform Deployment Script", type: "py", url: "https://example.com/scripts/google-cloud-platform-deploy.py" },
  ]},
  { courseId: 101, lessonIdx: 2, files: [
    { name: "Google Cloud Platform IaC Templates", type: "zip", url: "https://github.com/example/google-cloud-platform-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 101, lessonIdx: 3, files: [
    { name: "Google Cloud Platform Exam Prep", type: "pdf", url: "https://example.com/prep/google-cloud-platform-exam.pdf" },
  ]},
  { courseId: 102, lessonIdx: 0, files: [
    { name: "Kubernetes & Container Orchestration Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/kubernetes-container-orchestration-arch.pdf" },
    { name: "Kubernetes & Container Orchestration Config Files", type: "zip", url: "https://github.com/example/kubernetes-container-orchestration-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 102, lessonIdx: 1, files: [
    { name: "Kubernetes & Container Orchestration Deployment Script", type: "py", url: "https://example.com/scripts/kubernetes-container-orchestration-deploy.py" },
  ]},
  { courseId: 102, lessonIdx: 2, files: [
    { name: "Kubernetes & Container Orchestration IaC Templates", type: "zip", url: "https://github.com/example/kubernetes-container-orchestration-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 102, lessonIdx: 3, files: [
    { name: "Kubernetes & Container Orchestration Exam Prep", type: "pdf", url: "https://example.com/prep/kubernetes-container-orchestration-exam.pdf" },
  ]},
  { courseId: 103, lessonIdx: 0, files: [
    { name: "Terraform & Infrastructure as Code Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/terraform-infrastructure-as-code-arch.pdf" },
    { name: "Terraform & Infrastructure as Code Config Files", type: "zip", url: "https://github.com/example/terraform-infrastructure-as-code-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 103, lessonIdx: 1, files: [
    { name: "Terraform & Infrastructure as Code Deployment Script", type: "py", url: "https://example.com/scripts/terraform-infrastructure-as-code-deploy.py" },
  ]},
  { courseId: 103, lessonIdx: 2, files: [
    { name: "Terraform & Infrastructure as Code IaC Templates", type: "zip", url: "https://github.com/example/terraform-infrastructure-as-code-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 103, lessonIdx: 3, files: [
    { name: "Terraform & Infrastructure as Code Exam Prep", type: "pdf", url: "https://example.com/prep/terraform-infrastructure-as-code-exam.pdf" },
  ]},
  { courseId: 104, lessonIdx: 0, files: [
    { name: "CI/CD Pipeline Engineering Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/ci-cd-pipeline-engineering-arch.pdf" },
    { name: "CI/CD Pipeline Engineering Config Files", type: "zip", url: "https://github.com/example/ci-cd-pipeline-engineering-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 104, lessonIdx: 1, files: [
    { name: "CI/CD Pipeline Engineering Deployment Script", type: "py", url: "https://example.com/scripts/ci-cd-pipeline-engineering-deploy.py" },
  ]},
  { courseId: 104, lessonIdx: 2, files: [
    { name: "CI/CD Pipeline Engineering IaC Templates", type: "zip", url: "https://github.com/example/ci-cd-pipeline-engineering-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 104, lessonIdx: 3, files: [
    { name: "CI/CD Pipeline Engineering Exam Prep", type: "pdf", url: "https://example.com/prep/ci-cd-pipeline-engineering-exam.pdf" },
  ]},
  { courseId: 105, lessonIdx: 0, files: [
    { name: "Linux Administration Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/linux-administration-arch.pdf" },
    { name: "Linux Administration Config Files", type: "zip", url: "https://github.com/example/linux-administration-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 105, lessonIdx: 1, files: [
    { name: "Linux Administration Deployment Script", type: "py", url: "https://example.com/scripts/linux-administration-deploy.py" },
  ]},
  { courseId: 105, lessonIdx: 2, files: [
    { name: "Linux Administration IaC Templates", type: "zip", url: "https://github.com/example/linux-administration-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 105, lessonIdx: 3, files: [
    { name: "Linux Administration Exam Prep", type: "pdf", url: "https://example.com/prep/linux-administration-exam.pdf" },
  ]},
  { courseId: 106, lessonIdx: 0, files: [
    { name: "Site Reliability Engineering Architecture Diagram", type: "pdf", url: "https://example.com/diagrams/site-reliability-engineering-arch.pdf" },
    { name: "Site Reliability Engineering Config Files", type: "zip", url: "https://github.com/example/site-reliability-engineering-config/archive/refs/heads/main.zip" },
  ]},
  { courseId: 106, lessonIdx: 1, files: [
    { name: "Site Reliability Engineering Deployment Script", type: "py", url: "https://example.com/scripts/site-reliability-engineering-deploy.py" },
  ]},
  { courseId: 106, lessonIdx: 2, files: [
    { name: "Site Reliability Engineering IaC Templates", type: "zip", url: "https://github.com/example/site-reliability-engineering-iac/archive/refs/heads/main.zip" },
  ]},
  { courseId: 106, lessonIdx: 3, files: [
    { name: "Site Reliability Engineering Exam Prep", type: "pdf", url: "https://example.com/prep/site-reliability-engineering-exam.pdf" },
  ]},
  { courseId: 107, lessonIdx: 0, files: [
    { name: "Unity Game Development with C# Starter Project", type: "zip", url: "https://github.com/example/unity-game-development-with-c-starter/archive/refs/heads/main.zip" },
    { name: "Unity Game Development with C# Asset Pack", type: "zip", url: "https://example.com/assets/unity-game-development-with-c-pack.zip" },
  ]},
  { courseId: 107, lessonIdx: 1, files: [
    { name: "Unity Game Development with C# Script Examples", type: "zip", url: "https://github.com/example/unity-game-development-with-c-scripts/archive/refs/heads/main.zip" },
  ]},
  { courseId: 107, lessonIdx: 2, files: [
    { name: "Unity Game Development with C# Level Design Templates", type: "pdf", url: "https://example.com/templates/unity-game-development-with-c-level-design.pdf" },
  ]},
  { courseId: 107, lessonIdx: 3, files: [
    { name: "Unity Game Development with C# Optimization Guide", type: "pdf", url: "https://example.com/guides/unity-game-development-with-c-optimization.pdf" },
  ]},
  { courseId: 108, lessonIdx: 0, files: [
    { name: "Unreal Engine 5 Starter Project", type: "zip", url: "https://github.com/example/unreal-engine-5-starter/archive/refs/heads/main.zip" },
    { name: "Unreal Engine 5 Asset Pack", type: "zip", url: "https://example.com/assets/unreal-engine-5-pack.zip" },
  ]},
  { courseId: 108, lessonIdx: 1, files: [
    { name: "Unreal Engine 5 Script Examples", type: "zip", url: "https://github.com/example/unreal-engine-5-scripts/archive/refs/heads/main.zip" },
  ]},
  { courseId: 108, lessonIdx: 2, files: [
    { name: "Unreal Engine 5 Level Design Templates", type: "pdf", url: "https://example.com/templates/unreal-engine-5-level-design.pdf" },
  ]},
  { courseId: 108, lessonIdx: 3, files: [
    { name: "Unreal Engine 5 Optimization Guide", type: "pdf", url: "https://example.com/guides/unreal-engine-5-optimization.pdf" },
  ]},
  { courseId: 109, lessonIdx: 0, files: [
    { name: "Godot Game Engine Starter Project", type: "zip", url: "https://github.com/example/godot-game-engine-starter/archive/refs/heads/main.zip" },
    { name: "Godot Game Engine Asset Pack", type: "zip", url: "https://example.com/assets/godot-game-engine-pack.zip" },
  ]},
  { courseId: 109, lessonIdx: 1, files: [
    { name: "Godot Game Engine Script Examples", type: "zip", url: "https://github.com/example/godot-game-engine-scripts/archive/refs/heads/main.zip" },
  ]},
  { courseId: 109, lessonIdx: 2, files: [
    { name: "Godot Game Engine Level Design Templates", type: "pdf", url: "https://example.com/templates/godot-game-engine-level-design.pdf" },
  ]},
  { courseId: 109, lessonIdx: 3, files: [
    { name: "Godot Game Engine Optimization Guide", type: "pdf", url: "https://example.com/guides/godot-game-engine-optimization.pdf" },
  ]},
  { courseId: 110, lessonIdx: 0, files: [
    { name: "Game Design & Level Design Starter Project", type: "zip", url: "https://github.com/example/game-design-level-design-starter/archive/refs/heads/main.zip" },
    { name: "Game Design & Level Design Asset Pack", type: "zip", url: "https://example.com/assets/game-design-level-design-pack.zip" },
  ]},
  { courseId: 110, lessonIdx: 1, files: [
    { name: "Game Design & Level Design Script Examples", type: "zip", url: "https://github.com/example/game-design-level-design-scripts/archive/refs/heads/main.zip" },
  ]},
  { courseId: 110, lessonIdx: 2, files: [
    { name: "Game Design & Level Design Level Design Templates", type: "pdf", url: "https://example.com/templates/game-design-level-design-level-design.pdf" },
  ]},
  { courseId: 110, lessonIdx: 3, files: [
    { name: "Game Design & Level Design Optimization Guide", type: "pdf", url: "https://example.com/guides/game-design-level-design-optimization.pdf" },
  ]},
  { courseId: 111, lessonIdx: 0, files: [
    { name: "Blockchain & Web3 Fundamentals Starter Guide", type: "pdf", url: "https://example.com/guides/blockchain-web3-fundamentals.pdf" },
    { name: "Blockchain & Web3 Fundamentals Code Samples", type: "zip", url: "https://github.com/example/blockchain-web3-fundamentals-samples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 111, lessonIdx: 1, files: [
    { name: "Blockchain & Web3 Fundamentals Lab Environment", type: "zip", url: "https://github.com/example/blockchain-web3-fundamentals-lab/archive/refs/heads/main.zip" },
  ]},
  { courseId: 111, lessonIdx: 2, files: [
    { name: "Blockchain & Web3 Fundamentals Project Files", type: "zip", url: "https://github.com/example/blockchain-web3-fundamentals-project/archive/refs/heads/main.zip" },
  ]},
  { courseId: 111, lessonIdx: 3, files: [
    { name: "Blockchain & Web3 Fundamentals Reference Card", type: "pdf", url: "https://example.com/cheatsheets/blockchain-web3-fundamentals.pdf" },
  ]},
  { courseId: 112, lessonIdx: 0, files: [
    { name: "Solidity & Smart Contracts Starter Guide", type: "pdf", url: "https://example.com/guides/solidity-smart-contracts.pdf" },
    { name: "Solidity & Smart Contracts Code Samples", type: "zip", url: "https://github.com/example/solidity-smart-contracts-samples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 112, lessonIdx: 1, files: [
    { name: "Solidity & Smart Contracts Lab Environment", type: "zip", url: "https://github.com/example/solidity-smart-contracts-lab/archive/refs/heads/main.zip" },
  ]},
  { courseId: 112, lessonIdx: 2, files: [
    { name: "Solidity & Smart Contracts Project Files", type: "zip", url: "https://github.com/example/solidity-smart-contracts-project/archive/refs/heads/main.zip" },
  ]},
  { courseId: 112, lessonIdx: 3, files: [
    { name: "Solidity & Smart Contracts Reference Card", type: "pdf", url: "https://example.com/cheatsheets/solidity-smart-contracts.pdf" },
  ]},
  { courseId: 113, lessonIdx: 0, files: [
    { name: "Internet of Things (IoT) Starter Guide", type: "pdf", url: "https://example.com/guides/internet-of-things-iot.pdf" },
    { name: "Internet of Things (IoT) Code Samples", type: "zip", url: "https://github.com/example/internet-of-things-iot-samples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 113, lessonIdx: 1, files: [
    { name: "Internet of Things (IoT) Lab Environment", type: "zip", url: "https://github.com/example/internet-of-things-iot-lab/archive/refs/heads/main.zip" },
  ]},
  { courseId: 113, lessonIdx: 2, files: [
    { name: "Internet of Things (IoT) Project Files", type: "zip", url: "https://github.com/example/internet-of-things-iot-project/archive/refs/heads/main.zip" },
  ]},
  { courseId: 113, lessonIdx: 3, files: [
    { name: "Internet of Things (IoT) Reference Card", type: "pdf", url: "https://example.com/cheatsheets/internet-of-things-iot.pdf" },
  ]},
  { courseId: 114, lessonIdx: 0, files: [
    { name: "AR/VR Development with Unity Starter Guide", type: "pdf", url: "https://example.com/guides/ar-vr-development-with-unity.pdf" },
    { name: "AR/VR Development with Unity Code Samples", type: "zip", url: "https://github.com/example/ar-vr-development-with-unity-samples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 114, lessonIdx: 1, files: [
    { name: "AR/VR Development with Unity Lab Environment", type: "zip", url: "https://github.com/example/ar-vr-development-with-unity-lab/archive/refs/heads/main.zip" },
  ]},
  { courseId: 114, lessonIdx: 2, files: [
    { name: "AR/VR Development with Unity Project Files", type: "zip", url: "https://github.com/example/ar-vr-development-with-unity-project/archive/refs/heads/main.zip" },
  ]},
  { courseId: 114, lessonIdx: 3, files: [
    { name: "AR/VR Development with Unity Reference Card", type: "pdf", url: "https://example.com/cheatsheets/ar-vr-development-with-unity.pdf" },
  ]},
  { courseId: 115, lessonIdx: 0, files: [
    { name: "Quantum Computing Primer Starter Guide", type: "pdf", url: "https://example.com/guides/quantum-computing-primer.pdf" },
    { name: "Quantum Computing Primer Code Samples", type: "zip", url: "https://github.com/example/quantum-computing-primer-samples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 115, lessonIdx: 1, files: [
    { name: "Quantum Computing Primer Lab Environment", type: "zip", url: "https://github.com/example/quantum-computing-primer-lab/archive/refs/heads/main.zip" },
  ]},
  { courseId: 115, lessonIdx: 2, files: [
    { name: "Quantum Computing Primer Project Files", type: "zip", url: "https://github.com/example/quantum-computing-primer-project/archive/refs/heads/main.zip" },
  ]},
  { courseId: 115, lessonIdx: 3, files: [
    { name: "Quantum Computing Primer Reference Card", type: "pdf", url: "https://example.com/cheatsheets/quantum-computing-primer.pdf" },
  ]},
  { courseId: 116, lessonIdx: 0, files: [
    { name: "Prompt Engineering for Developers Starter Guide", type: "pdf", url: "https://example.com/guides/prompt-engineering-for-developers.pdf" },
    { name: "Prompt Engineering for Developers Code Samples", type: "zip", url: "https://github.com/example/prompt-engineering-for-developers-samples/archive/refs/heads/main.zip" },
  ]},
  { courseId: 116, lessonIdx: 1, files: [
    { name: "Prompt Engineering for Developers Lab Environment", type: "zip", url: "https://github.com/example/prompt-engineering-for-developers-lab/archive/refs/heads/main.zip" },
  ]},
  { courseId: 116, lessonIdx: 2, files: [
    { name: "Prompt Engineering for Developers Project Files", type: "zip", url: "https://github.com/example/prompt-engineering-for-developers-project/archive/refs/heads/main.zip" },
  ]},
  { courseId: 116, lessonIdx: 3, files: [
    { name: "Prompt Engineering for Developers Reference Card", type: "pdf", url: "https://example.com/cheatsheets/prompt-engineering-for-developers.pdf" },
  ]},
];

export default resources;

export function getResources(courseId, lessonIdx) {
  const entry = resources.find(r => r.courseId === courseId && r.lessonIdx === lessonIdx);
  return entry ? entry.files : [];
}

export function getAllResourcesForCourse(courseId) {
  return resources.filter(r => r.courseId === courseId);
}
