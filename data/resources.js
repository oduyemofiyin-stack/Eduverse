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
];

export default resources;

export function getResources(courseId, lessonIdx) {
  const entry = resources.find(r => r.courseId === courseId && r.lessonIdx === lessonIdx);
  return entry ? entry.files : [];
}

export function getAllResourcesForCourse(courseId) {
  return resources.filter(r => r.courseId === courseId);
}
