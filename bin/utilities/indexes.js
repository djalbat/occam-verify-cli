"use strict";

const { push } = require("../utilities/array");

function indexesArrayFromArrayLengthAndIndexesLength(arrayLength, indexesLength) {
  ///
}

const permutations = permutationsFromIndexesOffsetIndexesLengthAndPermutationsLength(5, 4, 3);

debugger

module.exports = {
  indexesArrayFromArrayLengthAndIndexesLength
};

function permutationsFromChoice(choice) {
  const permutations = [],
        choiceLength = choice.length;

  if (choiceLength === 1) {
    const permutation = choice.slice();

    permutations.push(permutation);
  } else {
    const innerChoice = choice.slice(0),
          start = 0,
          deleteCount = 1,
          [ index ] = innerChoice.splice(start, deleteCount),
          innerPermutations = permutationsFromChoice(innerChoice);

    innerPermutations.forEach((innerPermutation) => {
      for (let position = 0; position < choiceLength; position++) {
        const permutation = innerPermutation.slice(0),
              start = position, ///
              deleteCount = 0;

        permutation.splice(start, deleteCount, index);

        permutations.push(permutation);
      }
    });
  }

  return permutations;
}

function permutationsFromChoices(choices) {
  const permutations = [];

  choices.forEach((choice) => {
    const choicePermutations = permutationsFromChoice(choice);

    push(permutations, choicePermutations);
  });

  return permutations;
}

function choicesFromIndexesAndChoiceLength(indexes, choicesLength) {
  const choices = [],
        indexesLength = indexes.length;

  if (choicesLength === 1) {
    for (let position = 0; position < indexesLength; position++) {
      const index = indexes[position],
            choice = [
              index
            ];

      choices.push(choice);
    }
  } else {
    const innerChoicesLength = choicesLength - 1;

    for (let position = 0; position < indexesLength; position++) {
      const innerIndexes = indexes.slice(0),
            start = 0, ///
            deleteCount = position + 1,
            deletedIndexes = innerIndexes.splice(start, deleteCount),
            lastDeletedIndex = deletedIndexes[position],
            index = lastDeletedIndex, ///
            innerChoices = choicesFromIndexesAndChoiceLength(innerIndexes, innerChoicesLength);

      innerChoices.forEach((innerChoice) => {
        const choice = [
          index,
          ...innerChoice
        ];

        choices.push(choice);
      });
    }
  }

  return choices;
}

function indexesFromIndexesOffsetAndIndexesLength(indexesOffset, indexesLength) {
  const indexes = [],
        startIndex = indexesOffset,
        endIndex = indexesLength + indexesOffset - 1;

  for (let index = startIndex; index <= endIndex; index++) {
    indexes.push(index);
  }

  return indexes;
}

function permutationsFromIndexesOffsetIndexesLengthAndPermutationsLength(indexesOffset, indexesLength, permutationsLength) {
  const choicesLength = permutationsLength, ///
        indexes = indexesFromIndexesOffsetAndIndexesLength(indexesOffset, indexesLength),
        choices = choicesFromIndexesAndChoiceLength(indexes, choicesLength),
        permutations = permutationsFromChoices(choices);

  return permutations;
}
