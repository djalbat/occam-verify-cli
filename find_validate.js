const fs = require('fs');
const path = require('path');

const files = [
  'src/element/combinator.js',
  'src/element/conclusion.js',
  'src/element/constructor.js',
  'src/element/deduction.js',
  'src/element/label.js',
  'src/element/reference.js',
  'src/element/signature.js',
  'src/element/statement.js',
  'src/element/assertion/subproof.js',
  'src/element/assumption/metaLevel.js',
  'src/element/proofAssertion/premise.js',
  'src/element/proofAssertion/step.js',
  'src/element/proofAssertion/supposition.js',
  'src/element/substitution/statement.js',
  'src/element/topLevelAssertion/axiom.js'
];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  let inMethod = false;
  let braceCount = 0;
  let methodLines = [];
  let startLine = 0;

  lines.forEach((line, index) => {
    // Regex to match "validate(" followed by any number of arguments and "{"
    if (!inMethod && /validate\(.*\)\s*\{/.test(line)) {
      inMethod = true;
      braceCount = 0;
      methodLines = [];
      startLine = index + 1;
    }

    if (inMethod) {
      methodLines.push(line);
      const openBraces = (line.match(/\{/g) || []).length;
      const closeBraces = (line.match(/\}/g) || []).length;
      braceCount += openBraces - closeBraces;

      if (braceCount === 0 && methodLines.length > 0) {
        const methodBody = methodLines.join('\n');
        if (methodBody.includes('getContext()')) {
          console.log(`MATCH: ${file}:${startLine}`);
        }
        inMethod = false;
      }
    }
  });
});
