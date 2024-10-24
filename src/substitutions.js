"use strict";

import shim from "./shim";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "./constants";

const { find, first, prune, filter, compress } = arrayUtilities;

class Substitutions {
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

  getMetavariableNodes() {
    const metavariableNodes = [];

    this.forEachSubstitution((substitution) => {
      const metavariableNode = substitution.getMetavariableNode();

      if (metavariableNode !== null) {
        metavariableNodes.push(metavariableNode);
      }
    });

    compress(metavariableNodes, (metavariableNodeA, metavariableNodeB) => {
      const metavariableNodeAMatchesMetavariableNodeB = metavariableNodeB.match(metavariableNodeA);

      if (metavariableNodeAMatchesMetavariableNodeB) {
        return true;
      }
    });

    return metavariableNodes;
  }

  mapSubstitution(callback) { return this.array.map(callback); }

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

  findSubstitutionByMetavariableNode(metavariableNode) {
    const substitution = this.findSubstitution((substitution) => {
      const metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return substitution;
  }

  findSubstitutionsByMetavariableNode(metavariableNode) {
    const substitutions = this.findSubstitutions((substitution) => {
      const metavariableNodeMatches = substitution.matchMetavariableNode(metavariableNode);

      if (metavariableNodeMatches) {
        return true;
      }
    });

    return substitutions;
  }

  findSimpleSubstitutionByMetavariableNode(metavariableNode) {
    const substitutions = this.findSubstitutionsByMetavariableNode(metavariableNode),
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

  findComplexSubstitutionsByMetavariableNode(metavariableNode) {
    const substitutions = this.findSubstitutionsByMetavariableNode(metavariableNode),
          complexSubstitutions = substitutions.filterSubstitution((substitution) => {
            const substitutionComplex = substitution.isComplex();

            if (substitutionComplex) {
              return true;
            }
          });

    return complexSubstitutions;
  }

  findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const substitutions = this.findSubstitutions((substitution) => {
            const metavariableNodeAndSubstitutionNodeMatch = substitution.matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);

            if (metavariableNodeAndSubstitutionNodeMatch) {
              return true;
            }
          }),
          firstSubstitution = substitutions.getFirstSubstitution(),
          substitution = firstSubstitution; ///

    return substitution;
  }

  isSimpleSubstitutionPresentByMetavariableNode(metavariableNode) {
    const simpleSubstitution = this.findSimpleSubstitutionByMetavariableNode(metavariableNode),
          simpleSubstitutionPresent = (simpleSubstitution !== null);

    return simpleSubstitutionPresent;
  }

  isSubstitutionPresentByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const substitution = this.findSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode),
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

    const substitutionString = substitution.getString();

    localContext.trace(`Removed the ${substitutionString} substitution.`);
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

  resolve(localContextA, localContextB) {
    const metavariableNodes = this.getMetavariableNodes();

    metavariableNodes.forEach((metavariableNode) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariableNode(metavariableNode),
            complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
              let resolved;

              const substitutions = this,
                    substitution = complexSubstitution; ///

              resolved = substitution.isResolved();

              if (!resolved) {
                substitution.resolve(substitutions, localContextA, localContextB);
              }
            });

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  areResolved() {
    const metavariableNodes = this.getMetavariableNodes(),
          resolved = metavariableNodes.every((metavariableNode) => {
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableNode(metavariableNode),
                  complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
                        const complexSubstitutionResolved = complexSubstitution.isResolved();

                        if (complexSubstitutionResolved) {
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

    leftDifference(array, this.savedArray);

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

Object.assign(shim, {
  Substitutions
});

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}
