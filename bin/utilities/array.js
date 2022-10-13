"use strict";

const { arrayUtilities } = require("necessary");

const { indexesArrayFromArrayLengthAndIndexesLength } = require("../utilities/indexes");

const { push, last, prune, first, third, second, filter } = arrayUtilities;

function someSubArray(array, subArrayLength, callback) {
  const arrayLength = array.length,
        indexesLength = subArrayLength, ///
        indexesArray = indexesArrayFromArrayLengthAndIndexesLength(arrayLength, indexesLength),
        found = indexesArray.some((indexes) => {
          const subArray = [];

          for (let count = 0; count < subArrayLength; count++) {
            const index = indexes[count],
                  element = array[index];

            subArray.push(element);
          }

          const passed = callback(subArray);

          if (passed) {
            return true;
          }
        });

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
