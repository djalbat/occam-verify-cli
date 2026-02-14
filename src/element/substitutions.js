"use strict";

import { Element } from "occam-languages";
import { arrayUtilities } from "necessary";

import { define } from "../elements";
import { EMPTY_STRING } from "../constants";
import { substitutionsStringFromSubstitutions } from "../utilities/string";

const { find, first, clear, prune, filter, extract, compress, correlate } = arrayUtilities;

export default define(class Substitutions extends Element {
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

  someSubstitution(callback) { return this.array.some(callback); }

  everySubstitution(callback) { return this.array.every(callback); }

  reduceSubstitution(callback, initialValue) { return this.array.reduce(callback, initialValue); }

  forEachSubstitution(callback) { this.array.forEach(callback); }

  extractSubstitution(callbcak) { return extract(this.array, callbcak); }

  findSubstitutionByVariable(variable) {
    const substitution = this.findSubstitution((substitution) => {
      const substitutionVariable = substitution.getVariable();

      if (substitutionVariable !== null) {
        const substitutionVariableEqualToVariable = substitutionVariable.isEqualTo(variable);

        if (substitutionVariableEqualToVariable) {
          return true;
        }
      }
    }) || null;

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

  isSubstitutionPresentByVariable(variable) {
    const substitution = this.findSubstitutionByVariable(variable),
          substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  addSubstitution(substitution, context) {
    const substitutionString = substitution.getString(),
          substitutionsString = this.asString();  ///

    this.array.push(substitution);

    const string = this.asString();

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

  snapshot(context) {
    const substitutionsString = this.getString(); ///

    context.trace(`Taking a snapshot of the '${substitutionsString}' substitutions.`);

    this.savedArray = [
      ...this.array
    ];
  }

  rollback(context) {
    const substitutionsString = this.getString(); ///

    context.trace(`Rolling back the '${substitutionsString}' substitutions.`);

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

  continue(context) {
    const substitutionsString = this.getString(); ///

    context.trace(`Continuing with the '${substitutionsString}' substitutions.`);

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
