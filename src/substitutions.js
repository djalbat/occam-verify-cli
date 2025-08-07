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

  addSubstitution(substitution, specificContext) {
    this.array.push(substitution);

    const substitutionString = substitution.getString();

    specificContext.trace(`Added the ${substitutionString} substitution.`);
  }

  removeSubstitution(substitution, specificContext) {
    const substitutionA = substitution; ///

    prune(this.array, (substitution) => {
      const substitutionB = substitution; ///

      if (substitutionA !== substitutionB) {
        return true;
      }
    });

    const substitutionString = substitution.getString();

    specificContext.trace(`Removed the ${substitutionString} substitution.`);
  }

  matchSubstitutions(substitutions) {
    const array = substitutions.getArray(),
          arrayA = array, ///
          arrayB = this.array,  ///
          correlates = correlate(arrayA, arrayB, (substitutionA, substitutionB) => {
            const substitutionAMatchesSubstitutionB = substitutionA.match(substitutionB);

            if (substitutionAMatchesSubstitutionB) {
              return true;
            }
          }),
          match = correlates; ///

    return match;
  }

  matchTerms(terms) {
    const correlates = correlate(terms, this.array, (term, substitution) => {
            const substitutionTerm = substitution.getTerm(),
                  substitutionTermEqualToTerm = substitutionTerm.isEqualTo(term);

            if (substitutionTermEqualToTerm) {
              return true;
            }
          }),
          termsMatch = correlates; ///

    return termsMatch;
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

  rollback(specificContext) {
    const array = [
      ...this.array
    ];

    leftDifference(array, this.savedArray);

    array.forEach((substitution) => {
      this.removeSubstitution(substitution, specificContext);
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
}

function leftDifference(arrayA, arrayB) {
  filter(arrayA, (elementA) => {
    const arrayBIncludesElementA = arrayB.includes(elementA);

    if (!arrayBIncludesElementA) {
      return true;
    }
  });
}
