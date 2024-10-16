"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "./constants";

const { find, first, prune, filter, compress } = arrayUtilities;

export default class Substitutions {
  constructor(array, savedArray) {
    this.array = array;
    this.savedArray = savedArray;
  }

  getArray() {
    return this.array;
  }

  getSavedArray() {
    return this.savedArray;
  }

  getLength() { return this.array.length; }

  getFirstSubstitution() {
    let firstSubstitution = null;

    const length = this.getLength();

    if (length > 0) {
      firstSubstitution = first(this.array);
    }

    return firstSubstitution;
  }

  getMetavariableNames() {
    const metavariableNames = [];

    this.forEachSubstitution((substitution) => {
      const metavariableName = substitution.getMetavariableName();

      if (metavariableName !== null) {
        metavariableNames.push(metavariableName);
      }
    });

    compress(metavariableNames, (metavariableNameA, metavariableNameB) => {
      const metavariableNameAMatchesMetavariableNameB = metavariableNameA.match(metavariableNameB);

      if (metavariableNameAMatchesMetavariableNameB) {
        return true;
      }
    });

    return metavariableNames;
  }

  findSubstitution(callback) { return this.array.find(callback) || null; }  ///

  someSubstitution(callback) { return this.array.some(callback); }

  everySubstitution(callback) { return this.array.every(callback); }

  forEachSubstitution(callback) { this.array.forEach(callback); }

  findSubstitutions(callback) {
    const array = find(this.array, callback),
          substitutions = Substitutions.fromArray(array);

    return substitutions;
  }

  filterSubstitution(callback) {
    const array = this.array.filter(callback),
          substitutions = Substitutions.fromArray(array);

    return substitutions;
  }

  findSimpleSubstitution() {
    const simpleSubstitution = this.findSubstitution((substitution) => {
      const substitutionSimple = substitution.isSimple();

      if (substitutionSimple) {
        return true;
      }
    });

    return simpleSubstitution;
  }

  findSubstitutionByVariableName(variableName) {
    const substitution = this.findSubstitution((substitution) => {
      const variableNameMatches = substitution.matchVariableName(variableName);

      if (variableNameMatches) {
        return true;
      }
    });

    return substitution;
  }

  findSubstitutionByMetavariableName(metavariableName) {
    const substitution = this.findSubstitution((substitution) => {
      const metavariableNameMatches = substitution.matchMetavariableName(metavariableName);

      if (metavariableNameMatches) {
        return true;
      }
    });

    return substitution;
  }

  findSubstitutionsByMetavariableName(metavariableName) {
    const substitutions = this.findSubstitutions((substitution) => {
      const metavariableNameMatches = substitution.matchMetavariableName(metavariableName);

      if (metavariableNameMatches) {
        return true;
      }
    });

    return substitutions;
  }

  findSimpleSubstitutionByMetavariableName(metavariableName) {
    const substitutions = this.findSubstitutionsByMetavariableName(metavariableName),
          simpleSubstitutions = substitutions.filterSubstitution((substitution) => {
            const substitutionSimple = substitution.isSimple();

            if (substitutionSimple) {
              return true;
            }
          }),
          firstSimpleSubstitution = simpleSubstitutions.getFirstSubstitution(),
          simpleSubstitution = firstSimpleSubstitution; ///

    return simpleSubstitution;
  }

  findComplexSubstitutionsByMetavariableName(metavariableName) {
    const substitutions = this.findSubstitutionsByMetavariableName(metavariableName),
          complexSubstitutions = substitutions.filterSubstitution((substitution) => {
            const substitutionComplex = substitution.isComplex();

            if (substitutionComplex) {
              return true;
            }
          });

    return complexSubstitutions;
  }

  findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
    const substitutions = this.findSubstitutions((substitution) => {
            const metavariableNameAndSubstitutionNodeMatch = substitution.matchMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode);

            if (metavariableNameAndSubstitutionNodeMatch) {
              return true;
            }
          }),
          firstSubstitution = substitutions.getFirstSubstitution(),
          substitution = firstSubstitution; ///

    return substitution;
  }

  isSubstitutionPresentByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode) {
    const substitution = this.findSubstitutionByMetavariableNameAndSubstitutionNode(metavariableName, substitutionNode),
          substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  addSubstitution(substitution, localContext) {
    this.array.push(substitution);

    const substitutionString = substitution.getString();

    localContext.trace(`Added the ${substitutionString} substitution.`);
  }

  removeSubstitution(substitution, localContext) {
    const substitutionA = substitution; ///

    prune(this.array, (substitution) => {
      const substitutionB = substitution; ///

      if (substitutionA !== substitutionB) {
        return true;
      }
    });

    const substitutionNode = substitution.getNode(),
          substitutionString = substitution.getString();

    localContext.trace(`Removed the ${substitutionString} substitution.`, substitutionNode);
  }

  unifyWithEquivalences(equivalences, localContext) {
    const unifiedWithEquivalences = this.everySubstitution((substitution) => {
      const substitutions = this, ///
            substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, localContext);

      if (substitutionUnifiedWithEquivalence) {
        return true;
      }
    });

    return unifiedWithEquivalences;
  }

  resolve(localContext) {
    const metavariableNames = this.getMetavariableNames(),
          resolved = metavariableNames.every((metavariableNode) => {
                        const complexSubstitutions = this.findComplexSubstitutionsByMetavariableName(metavariableNode),
                              complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
                                const substitution = complexSubstitution, ///
                                      substitutions = this, ///
                                      substitutionResolved = substitution.resolve(substitutions, localContext);

                                if (substitutionResolved) {
                                  return true;
                                }
                              });

                        if (complexSubstitutionsResolved) {
                          return true;
                        }
                      });

    return resolved;
  }

  snapshot() {
    this.savedArray = [
      ...this.array
    ];
  }

  rollback(localContext) {
    const array = [
      ...this.array
    ];

    rightDifference(this.savedArray, array);

    array.forEach((substitution) => {
      this.removeSubstitution(substitution, localContext);
    });

    this.array = [
      ...this.savedArray
    ];

    this.savedArray = null;
  }

  continue() {
    this.savedArray = null;
  }

  getString(localContextA, localContextB) {
    let string = this.array.reduce((string, substitution) => {
      const substitutionString = substitution.getString(localContextA, localContextB);

      string = (string === null) ?
                 substitutionString :
                   `${string}, ${substitutionString}`;

      return string;
    }, EMPTY_STRING);

    if (string !== EMPTY_STRING) {
      string = ` ${string}`;
    }

    return string;
  }

  static fromArray(array) {
    const savedArray = [],
          substitutions = new Substitutions(array, savedArray);

    return substitutions;
  }

  static fromNothing() {
    const array = [],
          savedArray = null,
          substitutions = new Substitutions(array, savedArray);

    return substitutions;
  }
}

function rightDifference(arrayA, arrayB) {
  filter(arrayB, (elementB) => {
    const arrayAIncludesElementB = arrayA.includes(elementB);

    if (!arrayAIncludesElementB) {
      return true;
    }
  });
}
