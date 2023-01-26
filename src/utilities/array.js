"use strict";

import { arrayUtilities } from "necessary";

import permutationsMatrix from "../permutationsMatrix";

import { MAXIMUM_INDEXES_LENGTH, MAXIMUM_PERMUTATION_LENGTH } from "../constants";

export const { second, third, last, push, prune, filter } = arrayUtilities;

export function first(array) {
  return array[0];
}

export function someSubArray(array, subArrayLength, callback) {
  let found = false;

  const arrayLength = array.length,
        indexesLength = arrayLength, ///
        permutationLength = subArrayLength; ///

  if (permutationLength <= MAXIMUM_PERMUTATION_LENGTH) {
    let offset,
        permutations;

    if (indexesLength > MAXIMUM_INDEXES_LENGTH) {
      offset = indexesLength - MAXIMUM_INDEXES_LENGTH;

      permutations = permutationsMatrix[MAXIMUM_INDEXES_LENGTH][permutationLength];
    } else {
      offset = 0;

      permutations = permutationsMatrix[indexesLength][permutationLength];
    }

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

export function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}

export function rightDifference(arrayA, arrayB) {
  filter(arrayB, (elementB) => {
    const arrayAIncludesElementB = arrayA.includes(elementB);

    if (!arrayAIncludesElementB) {
      return true;
    }
  });
}
