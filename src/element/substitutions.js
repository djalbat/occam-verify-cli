"use strict";

import { arrayUtilities } from "necessary";

import Element from "../element";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";
import { substitutionsStringFromSubstitutions } from "../utilities/string";

const { find, first, clear, prune, filter, compress, correlate } = arrayUtilities;

export default define(class Substitutions extends Element {
  constructor(context, string, node, array, savedArray) {
    super(context, string, node);

    this.array = array;
    this.savedArray = savedArray;
  }

  getArray() {
    return this.array;
  }

  getSavedArray() {
    return this.savedArray;
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

      if (!metavariableAEqualToMetavariableB) {
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

  getLength() { return this.array.length; }

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
              substitutionBSubstitutionComparesToSubstitutionA = substitutionB.compareSubstitution(substitutionA);

        if (substitutionBSubstitutionComparesToSubstitutionA) {
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

    const string = this.asString(),
          substitutionString = substitution.getString(),
          substitutionsString = string; ///

    this.setString(string);

    context.trace(`Added the '${substitutionString}' substitution to the '${substitutionsString}' substitutions.`);
  }

  removeSubstitution(substitution, context) {
    const substitutionA = substitution; ///

    prune(this.array, (substitution) => {
      const substitutionB = substitution; ///

      if (substitutionA !== substitutionB) {
        return true;
      }
    });

    const string = this.asString(),
          substitutionString = substitution.getString(),
          substitutionsString = string; ///

    this.setString(string);

    context.trace(`Removed the '${substitutionString}' substitution from the '${substitutionsString}' substitutions.`);
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

    const string = this.asString();

    this.setString(string);
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
      const substitutions = this.array, ///
            substitutionsString = substitutionsStringFromSubstitutions(substitutions);

      string = substitutionsString; ///
    }

    return string;
  }

  static name = "Substitutions";

  static fromArray(array) {
    let string;

    const context = null;

    string = null;

    const node = null,
          savedArray = [],
          substitutions = new Substitutions(context, string, node, array, savedArray);

    string = substitutions.asString();

    substitutions.setString(string);

    return substitutions;
  }

  static fromNothing(context) {
    const node = null,
          string = EMPTY_STRING,
          array = [],
          savedArray = [],
          substitutions = new Substitutions(context, string, node, array, savedArray);

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
