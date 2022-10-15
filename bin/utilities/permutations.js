"use strict";

const { fileSystemUtilities } = require("necessary");

const { push, last, first } = require("../utilities/array"),
      { MAXIMUM_INDEXES_LENGTH, MAXIMUM_PERMUTATION_LENGTH } = require("../constants");

const { writeFile } = fileSystemUtilities;

writePermutationsMatrixFile();

function permutationsMatrixFromNothing() {
  const permutationsMatrix = [];

  for (let indexesLength = 0; indexesLength <= MAXIMUM_INDEXES_LENGTH; indexesLength++) {
    const permutationsArray = [];

    for (let permutationLength = 0; permutationLength <= MAXIMUM_PERMUTATION_LENGTH; permutationLength++) {
      const permutations = ((permutationLength === 0) || (permutationLength > indexesLength)) ?
                             null :
                               permutationsFromIndexesLengthAndPermutationLength(indexesLength, permutationLength);

      permutationsArray.push(permutations);
    }

    permutationsMatrix.push(permutationsArray);
  }

  return permutationsMatrix;
}

function writePermutationsMatrixFile() {
  const permutationsMatrix = permutationsMatrixFromNothing(),
        permutationsMatrixJSON = JSON.stringify(permutationsMatrix),
        permutationsMatrixFileName = "./bin/permutationsMatrix.js",
        permutationsMatrixFileContent = `"use strict";
        
const permutationsMatrix = ${permutationsMatrixJSON};
  
module.exports = permutationsMatrix;      
  `;

  writeFile(permutationsMatrixFileName, permutationsMatrixFileContent)
}

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
          indexes = innerChoice.splice(start, deleteCount),
          firstIndex = first(indexes),
          innerPermutations = permutationsFromChoice(innerChoice);

    innerPermutations.forEach((innerPermutation) => {
      for (let position = 0; position < choiceLength; position++) {
        const permutation = innerPermutation.slice(0),
              start = position, ///
              deleteCount = 0;

        permutation.splice(start, deleteCount, firstIndex);

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

function indexesFromIndexesLength(indexesLength) {
  const indexes = [];

  for (let index = 0; index < indexesLength; index++) {
    indexes.push(index);
  }

  return indexes;
}

function choicesFromIndexesAndChoiceLength(indexes, choiceLength) {
  const choices = [],
        indexesLength = indexes.length;

  if (choiceLength === 0) {
    ///
  } else if (choiceLength === 1) {
    for (let position = 0; position < indexesLength; position++) {
      const index = indexes[position],
            choice = [
              index
            ];

      choices.push(choice);
    }
  } else {
    const innerChoiceLength = choiceLength - 1;

    for (let position = 0; position < indexesLength; position++) {
      const innerIndexes = indexes.slice(0),
            start = 0, ///
            deleteCount = position + 1,
            deletedIndexes = innerIndexes.splice(start, deleteCount),
            lastDeletedIndex = last(deletedIndexes),
            index = lastDeletedIndex, ///
            innerChoices = choicesFromIndexesAndChoiceLength(innerIndexes, innerChoiceLength);

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

function permutationsFromIndexesLengthAndPermutationLength(indexesLength, permutationLength) {
  const choiceLength = permutationLength, ///
        indexes = indexesFromIndexesLength(indexesLength),
        choices = choicesFromIndexesAndChoiceLength(indexes, choiceLength),
        permutations = permutationsFromChoices(choices);

  return permutations;
}
