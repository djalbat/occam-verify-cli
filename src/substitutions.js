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

  getMetavariableNodes() {
    const metavariableNodes = [];

    this.forEachSubstitution((substitution) => {
      const metavariableNode = substitution.getMetavariableNode();

      if (metavariableNode !== null) {
        metavariableNodes.push(metavariableNode);
      }
    });

    compress(metavariableNodes, (metavariableNodeA, metavariableNodeB) => {
      const metavariableNodeAMatchesMetavariableNodeB = metavariableNodeA.match(metavariableNodeB);

      if (metavariableNodeAMatchesMetavariableNodeB) {
        return true;
      }
    });

    return metavariableNodes;
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

  findSubstitutionByVariableNode(variableNode) {
    const substitution = this.findSubstitution((substitution) => {
      const variableNodeMatches = substitution.matchVariableNode(variableNode);

      if (variableNodeMatches) {
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

  findSubstitutionsByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const substitutions = this.findSubstitutions((substitution) => {
      const metavariableNodeAndSubstitutionNodeMatch = substitution.matchMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode);

      if (metavariableNodeAndSubstitutionNodeMatch) {
        return true;
      }
    });

    return substitutions;
  }

  findComplexSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode) {
    const substitutions = this.findSubstitutionsByMetavariableNodeAndSubstitutionNode(metavariableNode, substitutionNode),
          complexSubstitutions = substitutions.filterSubstitution((substitution) => {
            const substitutionComplex = substitution.isComplex();

            if (substitutionComplex) {
              return true;
            }
          }),
          firstComplexSubstitution = complexSubstitutions.getFirstSubstitution(),
          complexSubstitution = firstComplexSubstitution; ///

    return complexSubstitution;
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

  areResolved() {
    const resolved = this.everySubstitution((substitution) => {
      const substitutionResolved = substitution.isResolved();

      return substitutionResolved;
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
