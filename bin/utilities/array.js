"use strict";

const { arrayUtilities } = require("necessary");

const { push, last, prune, first, third, second, filter } = arrayUtilities;

function someChoice(array, callback) {
  const choices = choicesFromArray(array),
        found = choices.some((choice) => {
          const array = choice,  ///
                passed = callback(array);

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
  someChoice,
  leftDifference,
  rightDifference
};

function choicesFromArray(array) {
  const arrayLength = array.length,
        indexChoices = indexChoicesFromArrayLength(arrayLength),
        choices = indexChoices.map((indexChoice) => {
          const elements = [];

          for (let position = 0; position < arrayLength; position++) {
            const index = indexChoice[position],
                  element = array[index];

            elements.push(element);
          }

          const choice = elements; ///

          return choice;
        });

  return choices;
}

function indexChoicesFromArrayLength(arrayLength) {
  let indexChoices;

  if (arrayLength === 0) {
    indexChoices = [];
  } else if (arrayLength === 1) {
    const indexChoice = [
      0
    ];

    indexChoices = [
      indexChoice
    ];
  } else {
    const innerArrayLength = arrayLength - 1,
          innerIndexChoices = indexChoicesFromArrayLength(innerArrayLength);

    indexChoices = [];

    innerIndexChoices.forEach((innerIndexChoice) => {
      const outerIndex = innerArrayLength;  ///

      for (let position = innerArrayLength; position >= 0; position--) {
        const indexChoice = innerIndexChoice.slice(),
              start = position, ///
              deleteCount = 0;

        indexChoice.splice(start, deleteCount, outerIndex);

        indexChoices.push(indexChoice);
      }
    });
  }

  return indexChoices;
}
