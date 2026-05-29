const resources = [
  { courseId: 1, lessonIdx: 0, files: [{ name: 'React Cheatsheet', type: 'pdf', url: '#' }, { name: 'JSX Reference Guide', type: 'pdf', url: '#' }] },
  { courseId: 1, lessonIdx: 1, files: [{ name: 'Components & Props Examples', type: 'zip', url: '#' }] },
  { courseId: 1, lessonIdx: 2, files: [{ name: 'React Hooks Guide', type: 'pdf', url: '#' }] },
  { courseId: 2, lessonIdx: 0, files: [{ name: 'Python Setup Guide', type: 'pdf', url: '#' }, { name: 'Jupyter Notebook Intro', type: 'pdf', url: '#' }] },
  { courseId: 2, lessonIdx: 1, files: [{ name: 'NumPy Cheatsheet', type: 'pdf', url: '#' }] },
  { courseId: 2, lessonIdx: 2, files: [{ name: 'Pandas Data Wrangling Examples', type: 'ipynb', url: '#' }] },
  { courseId: 3, lessonIdx: 0, files: [{ name: 'UX Research Template', type: 'pdf', url: '#' }] },
  { courseId: 3, lessonIdx: 1, files: [{ name: 'Figma Wireframe Kit', type: 'fig', url: '#' }] },
  { courseId: 5, lessonIdx: 2, files: [{ name: 'TensorFlow Quickstart Code', type: 'py', url: '#' }] },
  { courseId: 6, lessonIdx: 0, files: [{ name: 'Digital Marketing Strategy Template', type: 'pdf', url: '#' }] },
  { courseId: 7, lessonIdx: 1, files: [{ name: 'Express API Boilerplate', type: 'zip', url: '#' }] },
  { courseId: 8, lessonIdx: 1, files: [{ name: 'Network Security Checklist', type: 'pdf', url: '#' }] },
  { courseId: 10, lessonIdx: 0, files: [{ name: 'Excel Data Analysis Workbook', type: 'xlsx', url: '#' }] },
  { courseId: 13, lessonIdx: 0, files: [{ name: 'HTML5 Tags Reference', type: 'pdf', url: '#' }] },
  { courseId: 13, lessonIdx: 2, files: [{ name: 'Flexbox & Grid Playground', type: 'html', url: '#' }] },
  { courseId: 14, lessonIdx: 0, files: [{ name: 'JS Quick Reference', type: 'pdf', url: '#' }] },
  { courseId: 17, lessonIdx: 0, files: [{ name: 'Git Commands Cheatsheet', type: 'pdf', url: '#' }] },
  { courseId: 18, lessonIdx: 0, files: [{ name: 'SQL Query Reference', type: 'pdf', url: '#' }] },
  { courseId: 19, lessonIdx: 0, files: [{ name: 'Python Cheatsheet', type: 'pdf', url: '#' }] },
];

export default resources;

export function getResources(courseId, lessonIdx) {
  const entry = resources.find(r => r.courseId === courseId && r.lessonIdx === lessonIdx);
  return entry ? entry.files : [];
}

export function getAllResourcesForCourse(courseId) {
  return resources.filter(r => r.courseId === courseId);
}
