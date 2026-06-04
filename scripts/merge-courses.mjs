import { readFileSync, writeFileSync, unlinkSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dataDir = join(root, 'data');

// Read original courses.js
const originalPath = join(dataDir, 'courses.js');
let originalContent = readFileSync(originalPath, 'utf8');

// Find the closing ]; of the courses array and take everything before it
// The array ends with ];\n\nexport default courses;
const lastSemicolon = originalContent.lastIndexOf('];');
const header = originalContent.substring(0, lastSemicolon);

// Read all batch JSON files
let allNewCourses = [];
for (let i = 1; i <= 20; i++) {
  const batchPath = join(dataDir, `courses_batch${i}.json`);
  try {
    const batchContent = readFileSync(batchPath, 'utf8');
    const batch = JSON.parse(batchContent);
    allNewCourses.push(...batch);
  } catch (e) {
    console.error(`Error reading batch ${i}:`, e.message);
  }
}

console.log(`Found ${allNewCourses.length} new courses in batch files.`);

// Convert each course to JS object literal format (unquote keys)
const courseStrings = allNewCourses.map(course => {
  const jsonStr = JSON.stringify(course, null, 2);
  // Remove quotes around keys (they're valid JS identifiers)
  const jsStr = jsonStr.replace(/"(\w+)"(?=\s*:)/g, '$1');
  // Indent each line by 2 more spaces to match array nesting
  const indented = jsStr.split('\n').map(line => '  ' + line).join('\n');
  return indented;
});

// Build output
// header already ends with the last course object + trailing comma + newline
// Append new courses (each with trailing comma since JS allows it)
const output = header + '\n' + courseStrings.join(',\n') + ',\n];\n\nexport default courses;\n';

writeFileSync(originalPath, output, 'utf8');
console.log(`Successfully merged ${allNewCourses.length} new courses into data/courses.js`);

// Clean up batch files
let deleted = 0;
for (let i = 1; i <= 20; i++) {
  const batchPath = join(dataDir, `courses_batch${i}.json`);
  try {
    unlinkSync(batchPath);
    deleted++;
  } catch (e) {
    console.error(`Error deleting batch ${i}:`, e.message);
  }
}
console.log(`Cleaned up ${deleted} batch files.`);
