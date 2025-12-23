"use strict";

import { arrayUtilities } from "necessary";

import { define } from "../ontology";
import { EMPTY_STRING } from "../constants";

const { find, first, clear, prune, filter, compress, correlate } = arrayUtilities;

export default define(class Substitutions {
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

  getMetavariables() {
    const metavariables = [];

    this.forEachSubstitution((substitution) => {
      const metavariable = substitution.getMetavariable();

      if (metavariable !== null) {
        metavariables.push(metavariable);
      }
    });

    compress(metavariables, (metavariableA, metavariableB) => {
      const metavariableAEqualToMetavariableB = metavariableB.isEqualTo(metavariableA);

      if (metavariableAEqualToMetavariableB) {
        return true;
      }
    });

    return metavariables;
  }

  getNonTrivialLength() {
    const nonTrivialLength = this.reduceSubstitution((nonTrivialLength, substitution) => {
      const substitutionTrivial = substitution.isTrivial();

      if (!substitutionTrivial) {
        nonTrivialLength += 1;
      }

      return nonTrivialLength;
    }, 0);

    return nonTrivialLength;
  }

  getFirstSubstitution() {
    let firstSubstitution = null;

    const length = this.getLength();

    if (length > 0) {
      firstSubstitution = first(this.array);
    }

    return firstSubstitution;
  }

  mapSubstitution(callback) { return this.array.map(callback); }

  findSubstitution(callback) { return this.array.find(callback) || null; }  ///

  someSubstitution(callback) { return this.array.some(callback); }

  everySubstitution(callback) { return this.array.every(callback); }

  reduceSubstitution(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  forEachSubstitution(callback) { this.array.forEach(callback); }

  findSubstitutions(callback) {
    const array = find(this.array, callback),
          substitutions = Substitutions.fromArray(array);

    return substitutions;
  }

  findSubstitutionByVariable(variable) {
    const substitution = this.findSubstitution((substitution) => {
      const substitutionVariable = substitution.getVariable();

      if (substitutionVariable !== null) {
        const substitutionVariableEqualToVariable = substitutionVariable.isEqualTo(variable);

        if (substitutionVariableEqualToVariable) {
          return true;
        }
      }
    });

    return substitution;
  }

  findSubstitutionsByMetavariable(metavariable) {
    const substitutions = this.findSubstitutions((substitution) => {
      const substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);

      if (substitutionMetavariableEqualToMetavariable) {
        return true;
      }
    });

    return substitutions;
  }

  findSimpleSubstitutionByMetavariable(metavariable) {
    const simpleSubstitution = this.findSubstitution((substitution) => {
      const substitutionSimple = substitution.isSimple();

      if (substitutionSimple) {
        const simpleSubstitution = substitution,  ///
              simpleSubstitutionMetavariableEqualToMetavariable = simpleSubstitution.isMetavariableEqualToMetavariable(metavariable);

        if (simpleSubstitutionMetavariableEqualToMetavariable) {
          return true;
        }
      }
    });

    return simpleSubstitution;
  }

  findComplexSubstitutionsByMetavariable(metavariable) {
    const complexSubstitutions = this.findSubstitutions((substitution) => {
      const substitutionComplex = substitution.isComplex();

      if (substitutionComplex) {
        const complexSubstitution = substitution, ///
              complexSubstitutionMetavariableEqualToMetavariable = complexSubstitution.isMetavariableEqualToMetavariable(metavariable);

        if (complexSubstitutionMetavariableEqualToMetavariable) {
          return true;
        }
      }
    });

    return complexSubstitutions;
  }

  findSubstitutionByMetavariableAndSubstitution(metavariable, substitution) {
    const substitutionA = substitution; ///

    substitution = this.findSubstitution((substitution) => {  ///
      const substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualToMetavariable(metavariable);

      if (substitutionMetavariableEqualToMetavariable) {
        const substitutionB = substitution, ///
              substitutionBSubstitutionEqualToSubstitutionA = substitutionB.isSubstitutionEqualToSubstitution(substitutionA);

        if (substitutionBSubstitutionEqualToSubstitutionA) {
          return true;
        }
      }
    });

    return substitution;
  }

  isSubstitutionPresentByVariable(variable) {
    const substitution = this.findSubstitutionByVariable(variable),
          substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  isSimpleSubstitutionPresentByMetavariable(metavariable) {
    const simpleSubstitution = this.findSimpleSubstitutionByMetavariable(metavariable),
          simpleSubstitutionPresent = (simpleSubstitution !== null);

    return simpleSubstitutionPresent;
  }

  isSubstitutionPresentByMetavariableAndSubstitution(metavariable, substitution) {
    substitution = this.findSubstitutionByMetavariableAndSubstitution(metavariable, substitution);  ///

    const substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  addSubstitution(substitution, context) {
    this.array.push(substitution);

    const substitutionString = substitution.getString();

    context.trace(`Added the ${substitutionString} substitution.`);
  }

  removeSubstitution(substitution, context) {
    const substitutionA = substitution; ///

    prune(this.array, (substitution) => {
      const substitutionB = substitution; ///

      if (substitutionA !== substitutionB) {
        return true;
      }
    });

    const substitutionString = substitution.getString();

    context.trace(`Removed the ${substitutionString} substitution.`);
  }

  correlateSubstitutions(substitutions) {
    const array = substitutions.getArray(),
          arrayA = array, ///
          arrayB = this.array,  ///
          correlates = correlate(arrayA, arrayB, (substitutionA, substitutionB) => {
            const substitutionAIsEQualToSubstitutionB = substitutionA.isEqualTo(substitutionB);

            if (substitutionAIsEQualToSubstitutionB) {
              return true;
            }
          });

    return correlates;
  }

  removeTrivialSubstitutions()  {
    filter(this.array, (substitution) => {
      const trivial = substitution.isTrivial();

      if (!trivial) {
        return true;
      }
    });
  }

  clear() {
    clear(this.array);

    this.savedArray = null;
  }

  resolve(context) {
    const metavariables = this.getMetavariables();

    metavariables.forEach((metavariable) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
            complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
              let resolved;

              const substitutions = this, ///
                    substitution = complexSubstitution; ///

              resolved = substitution.isResolved();

              if (!resolved) {
                substitution.resolve(substitutions, context);
              }
            });

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  areResolved() {
    const metavariables = this.getMetavariables(),
          resolved = metavariables.every((metavariable) => {
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
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

  rollback(context) {
    const array = [
      ...this.array
    ];

    leftDifference(array, this.savedArray);

    array.forEach((substitution) => {
      this.removeSubstitution(substitution, context);
    });

    this.array = [
      ...this.savedArray
    ];

    this.savedArray = null;
  }

  continue() {
    this.savedArray = null;
  }

  asString() {
    let string;

    const length = this.getLength();

    if (length === 0) {
      string = EMPTY_STRING;
    } else {
      const substitutionsString = this.array.reduce((substitutionsString, substitution) => {
        const substitutionString = substitution.getString();

        substitutionsString = (substitutionsString === null) ?
                                 substitutionString :
                                  `${substitutionsString}, ${substitutionString}`;

        return substitutionsString;
      }, null);

      string = substitutionsString; ///
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
});

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}
