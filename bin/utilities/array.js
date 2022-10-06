"use strict";

const { arrayUtilities } = require("necessary");

const { push, prune, first, second, filter } = arrayUtilities;

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}

function someCombination(array, callback) {
  const combinations = combinationsFromArray(array),
        found = combinations.some((combination) => {
          const array = combination,  ///
                passed = callback(array);

          if (passed) {
            return true;
          }
        });

  return found;
}

module.exports = {
  push,
  prune,
  first,
  second,
  filter,
  leftDifference,
  someCombination
};

function combinationsFromArray(array) {
  const arrayLength = array.length,
        indexCombinations = indexCombinationsFromArrayLength(arrayLength),
        combinations = indexCombinations.map((indexCombination) => {
          const elements = [];

          for (let position = 0; position < arrayLength; position++) {
            const index = indexCombination[position],
                  element = array[index];

            elements.push(element);
          }

          const combination = elements; ///

          return combination;
        });

  return combinations;
}

function indexCombinationsFromArrayLength(arrayLength) {
  let indexCombinations;

  if (arrayLength === 0) {
    indexCombinations = [];
  } else if (arrayLength === 1) {
    const indexCombination = [
      0
    ];

    indexCombinations = [
      indexCombination
    ];
  } else {
    const innerArrayLength = arrayLength - 1,
          innerIndexCombinations = indexCombinationsFromArrayLength(innerArrayLength);

    indexCombinations = [];

    innerIndexCombinations.forEach((innerIndexCombination) => {
      const outerIndex = innerArrayLength;  ///

      for (let position = innerArrayLength; position >= 0; position--) {
        const indexCombination = innerIndexCombination.slice(),
              start = position, ///
              deleteCount = 0;

        indexCombination.splice(start, deleteCount, outerIndex);

        indexCombinations.push(indexCombination);
      }
    });
  }

  return indexCombinations;
}
