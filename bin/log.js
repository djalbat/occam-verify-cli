"use strict";

function log(level, message, filePath = null, leastLineIndex = null, greatestLineIndex = null) {
  if (filePath === null) {
    console.log(`(${level}) ${message}`)
  } else if (leastLineIndex === greatestLineIndex) {
    const lineIndex = leastLineIndex; ///

    console.log(`(${level}) '${filePath}' : [${lineIndex}] - ${message}`);
  } else  {
    console.log(`(${level}) '${filePath}' : [${leastLineIndex}-${greatestLineIndex}] - ${message}`);
  }
}

module.exports = log;
