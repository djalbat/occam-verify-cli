'use strict';

function matchArrays(arrayA, arrayB) {
  let arraysMatch = false;

  if ((arrayA !== undefined) && (arrayB !== undefined)) {
    if (arrayA.length === arrayB.length) {
      arraysMatch = arrayA.every((elementA, index) => {
        const elementB = arrayB[index];

        if (elementA === elementB) {
          return true;
        }
      });
    }
  }

  return arraysMatch;
}

module.exports = {
  matchArrays
};
