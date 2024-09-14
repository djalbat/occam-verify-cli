"use strict";

import { EMPTY_STRING } from "./constants";
import { prune, compare, rightDifference } from "./utilities/array";

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

  hasChanged() {
    const compares = compare(this.array, this.savedArray),
          changed = !compares;  ///

    return changed;
  }

  findSubstitution(callback) { return this.array.find(callback); }

  someSubstitution(callback) { return this.array.some(callback); }

  everySubstitution(callback) { return this.array.every(callback); }

  forEachSubstitution(callback) { this.array.forEach(callback); }

  addSubstitution(substitution, localContextA, localContextB) {
    this.array.push(substitution);

    const substitutionNode = substitution.getNode(),
          substitutionString = substitution.asString(localContextA, localContextB);

    localContextB.trace(`Added the ${substitutionString} substitution.`, substitutionNode);
  }

  removeSubstitution(substitution, localContextA, localContextB) {
    const substitutionA = substitution; ///

    prune(this.array, (substitution) => {
      const substitutionB = substitution; ///

      if (substitutionA !== substitutionB) {
        return true;
      }
    });

    const substitutionNode = substitution.getNode(),
          substitutionString = substitution.asString(localContextA, localContextB);

    localContextB.trace(`Removed the ${substitutionString} substitution.`, substitutionNode);
  }

  unifyWithEquivalences(equivalences, localContextA, localContextB) {
    const unifiedWithEquivalences = this.everySubstitution((substitution) => {
      const substitutions = this, ///
            substitutionUnifiedWithEquivalence = substitution.unifyWithEquivalences(equivalences, substitutions, localContextA, localContextB);

      if (substitutionUnifiedWithEquivalence) {
        return true;
      }
    });

    return unifiedWithEquivalences;
  }

  snapshot() {
    this.savedArray = [
      ...this.array
    ];
  }

  rollback(localContextA, localContextB) {
    const array = [
      ...this.array
    ];

    rightDifference(this.savedArray, array);

    array.forEach((substitution) => {
      this.removeSubstitution(substitution, localContextA, localContextB);
    });

    this.array = [
      ...this.savedArray
    ];

    this.savedArray = null;
  }

  continue() {
    this.savedArray = null;
  }

  asString(localContextA, localContextB) {
    let string = this.array.reduce((string, substitution) => {
      const substitutionString = substitution.asString(localContextA, localContextB);

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

  static fromNothing() {
    const array = [],
          savedArray = null,
          substitutions = new Substitutions(array, savedArray);

    return substitutions;
  }
}
