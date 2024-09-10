"use strict";

import { arrayUtilities } from "necessary";

export const { first, second, last, extract, push, match, prune, filter, compress, separate } = arrayUtilities;

export function reverse(array) {
  array = [ ///
    ...array
  ].reverse();

  return array;
}

export function compare(arrayA, arrayB) {
  let compares = false;

  const arrayALength = arrayA.length,
        arrayBLength = arrayB.length;

  if (arrayALength === arrayBLength) {
    const correlates = correlate(arrayA, arrayB);

    compares = correlates;  ///
  }

  return compares;
}

export function correlate(arrayA, arrayB, callback) {
  arrayB = [  ///
    ...arrayB
  ];

  const correlates = arrayA.every((elementA) => {
    const elementB = extract(arrayB, (elementB) => {
      const result = callback(elementA, elementB);

      if (result) {
        return true;
      }
    }) || null;

    if (elementB !== null) {
      return true;
    }
  });

  return correlates;
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
