"use strict";

const { arrayUtilities } = require("necessary");

const { push, first, second, filter } = arrayUtilities;

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}

module.exports = {
  push,
  first,
  second,
  filter,
  leftDifference
};
