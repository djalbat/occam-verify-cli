const fs = require('fs');
const content = fs.readFileSync('src/utilities/element.js', 'utf8');
const lines = content.split('\n');

let currentFunction = '';
let functionCounter = 0;
let newLines = [];
let skipContextNull = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.startsWith('export function')) {
    currentFunction = line.split(' ')[2].split('(')[0];
    functionCounter++;
    newLines.push(line);
    continue;
  }

  // Skip the first three functions as per user instruction
  if (functionCounter <= 3) {
    newLines.push(line);
    continue;
  }

  // Remove "context = null;" where it's not the first three functions
  if (line.trim() === 'context = null;') {
    continue;
  }

  // Detect and merge split declarations
  // This is a simplified regex-based merge for the most common pattern I introduced
  // Pattern:
  //   variable;
  // ...
  //   variable = new Type(...)
  
  let merged = false;
  if (line.trim().match(/^[a-zA-Z0-9]+;$/)) {
    const varName = line.trim().replace(';', '');
    // Look ahead for the assignment
    for (let j = i + 1; j < i + 10 && j < lines.length; j++) {
        if (lines[j].trim().startsWith(varName + ' = new ')) {
            // Found it. We skip this declaration line and the assignment line will be handled later
            merged = true;
            break;
        }
    }
  }
  
  if (merged) continue;

  // Handle the assignment line, turning it into a const declaration
  const assignmentMatch = line.match(/^(\s+)([a-zA-Z0-9]+) = new ([a-zA-Z0-9]+)\(/);
  if (assignmentMatch) {
    const [full, indent, varName, className] = assignmentMatch;
    // Check if we skipped its declaration earlier
    // Or if it was just a plain assignment I introduced
    newLines.push(`${indent}const ${varName} = new ${className}(${line.split('new ' + className + '(')[1]}`);
    continue;
  }

  newLines.push(line);
}

// Final cleanup: remove extra empty lines that might have been left by removing context = null;
const finalContent = newLines.join('\n').replace(/\n\n\n+/g, '\n\n');
fs.writeFileSync('src/utilities/element.js', finalContent);
console.log('Processed src/utilities/element.js');
