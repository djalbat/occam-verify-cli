"use strict";

import { arrayUtilities } from "necessary";

export const { first, last, front, tail, push, find, match, clear, prune, reverse, extract, correlate, filter, compress, separate } = arrayUtilities;

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
