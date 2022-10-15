"use strict";

const { arrayUtilities } = require("necessary");

const permutationsMatrix = require("../permutationsMatrix");

const { MAXIMUM_INDEXES_LENGTH, MAXIMUM_PERMUTATION_LENGTH } = require("../constants");

const { push, last, prune, first, third, second, filter } = arrayUtilities;

function someSubArray(array, subArrayLength, callback) {
  let found = false;

  const arrayLength = array.length,
        indexesLength = arrayLength, ///
        permutationLength = subArrayLength; ///

  if (permutationLength <= MAXIMUM_PERMUTATION_LENGTH) {
    const offset = (indexesLength <= MAXIMUM_INDEXES_LENGTH) ?
                     0 :
                      indexesLength - MAXIMUM_INDEXES_LENGTH,
          permutations = permutationsMatrix[indexesLength][permutationLength];

    if (permutations !== null) {
      found = permutations.some((permutation) => {
        if (permutation !== null) {
          const subArray = [];

          for (let position = 0; position < permutationLength; position++) {
            const index = permutation[position] + offset,
                  element = array[index];

            subArray.push(element);
          }

          const passed = callback(subArray);

          if (passed) {
            return true;
          }
        }
      });
    }
  }

  return found;
}

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}

function rightDifference(arrayA, arrayB) {
  filter(arrayB, (elementB) => {
    const arrayAIncludesElementB = arrayA.includes(elementB);

    if (!arrayAIncludesElementB) {
      return true;
    }
  });
}

module.exports = {
  push,
  last,
  prune,
  first,
  third,
  second,
  filter,
  someSubArray,
  leftDifference,
  rightDifference
};
