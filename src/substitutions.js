"use strict";

import { arrayUtilities } from "necessary";

import { EMPTY_STRING } from "./constants";

const { find, first, clear, prune, filter, compress, correlate } = arrayUtilities;

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
      const substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);

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
              simpleSubstitutionMetavariableEqualToMetavariable = simpleSubstitution.isMetavariableEqualTo(metavariable);

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
              complexSubstitutionMetavariableEqualToMetavariable = complexSubstitution.isMetavariableEqualTo(metavariable);

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
      const substitutionMetavariableEqualToMetavariable = substitution.isMetavariableEqualTo(metavariable);

      if (substitutionMetavariableEqualToMetavariable) {
        const substitutionB = substitution, ///
              substitutionBSubstitutionEqualToSubstitutionA = substitutionB.isSubstitutionEqualTo(substitutionA);

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

  matchSubstitutions(substitutions) {
    const array = substitutions.getArray(),
          correlates = correlate(array, this.array, (substitutionA, substitutionB) => {
            const substitutionAMatchesSubstitutionB = substitutionA.match(substitutionB);

            if (substitutionAMatchesSubstitutionB) {
              return true;
            }
          }),
          match = correlates; ///

    return match;
  }

  clear() {
    clear(this.array);

    this.savedArray = null;
  }

  resolve(generalContext, specificContext) {
    const metavariables = this.getMetavariables();

    metavariables.forEach((metavariable) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
            complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
              let resolved;

              const substitutions = this, ///
                    substitution = complexSubstitution; ///

              resolved = substitution.isResolved();

              if (!resolved) {
                substitution.resolve(substitutions, generalContext, specificContext);
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

  getString(generalContext, specificContext) {
    let string = this.array.reduce((string, substitution) => {
      const substitutionString = substitution.getString(generalContext, specificContext);

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

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}
