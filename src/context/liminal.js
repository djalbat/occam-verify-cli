"use strict";

import { arrayUtilities } from "necessary";
import { metavariableNamesFromSubstitutions } from "../utilities/substitutions";
import { substitutionsStringFromSubstitutions } from "../utilities/string";

import Context from "../context";

const { find, first, prune, compress } = arrayUtilities;

export default class LiminalContext extends Context {
  constructor(context, substitutions) {
    super(context);

    this.substitutions = substitutions;
  }

  getSubstitutions(nested = true) {
    let substitutions;

    if (nested) {
      const context = this.getContext();

      substitutions = context.getSubstitutions();

      substitutions = [ ///
        ...this.substitutions,
        ...substitutions
      ]
    } else {
      substitutions = this.substitutions;
    }

    return substitutions;
  }

  getNonTrivialSubstitutions(nested = true) {
    const nonTrivialSubstitutions = this.findSubstitutions((substitution) => {
          const substitutionNonTrivial = substitution.isNonTrivial();

          if (substitutionNonTrivial) {
            return true;
          }
        }, nested);

    return nonTrivialSubstitutions;
  }

  getSoleNonTrivialSubstitution(nested = true) {
    let soleNonTrivialSubstitutions = null;

    const nonTrivialSubstitutions = this.getNonTrivialSubstitutions(nested),
          nonTrivialSubstitutionsLength = nonTrivialSubstitutions.length;

    if (nonTrivialSubstitutionsLength === 1) {
      const firstNonTrivkalSubstitution = first(nonTrivialSubstitutions);

      soleNonTrivialSubstitutions = firstNonTrivkalSubstitution; ///
    }

    return soleNonTrivialSubstitutions;
  }

  addSubstitution(substitution) {
    const context = this,
          substitutionString = substitution.getString();

    this.substitutions = [ ///
      ...this.substitutions,
      substitution
    ];

    compress(this.substitutions, (substitutionA, substitutionB) => {
      const substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToSubstitutionB) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionString}' substitution to the context.`);
  }

  addSubstitutions(substitutions) {
    const context = this,
          substitutionsString = substitutionsStringFromSubstitutions(substitutions);

    this.substitutions = [ ///
      ...this.substitutions,
      ...substitutions
    ];

    compress(this.substitutions, (substitutionA, substitutionB) => {
      const substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionsString}' substitutions to the context.`);
  }

  removeSubstitution(substitution) {
    const context = this,
          substitutionA = substitution, ///
          substitutionString = substitution.getString();

    prune(this.substitutions, (substitution) => {
      const substitutionB = substitution,
            substitutionAEqualTosubstitutionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualTosubstitutionB) {
        return true;
      }
    });

    context.trace(`Removed the '${substitutionString}' substitution to the context.`);
  }

  resolveSubstitutions(generalContext, specificContext) {
    const substitutions = this.getSubstitutions(),
          metavariableNames = metavariableNamesFromSubstitutions(substitutions);

    metavariableNames.forEach((metavariableName) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariableName(metavariableName),
            complexSubstitutionsResolved = complexSubstitutions.every((complexSubstitution) => {
              const substitution = complexSubstitution, ///
                    resolved = substitution.isResolved();

              if (!resolved) {
                substitution.resolve(generalContext, specificContext);
              }
            });

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  areSubstitutionsResolved(generalContext, specificContext) {
    const substitutions = this.getSubstitutions(),
          metavariableNames = metavariableNamesFromSubstitutions(substitutions),
          resolved = metavariableNames.every((metavariableName) => {
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariableName(metavariableName),
                  complexSubstitutionsResolved = complexSubstitutions.every((complexSubstitution) => {
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

  commit(context) {
    if (context === undefined) {
      context = this.getContext();
    }

    context.addSubstitutions(this.substitutions);
  }

  findSubstitution(callback, generalContext, specificContext) {
    const substitutions = this.getSubstitutions(),
          substitution = substitutions.find(callback, generalContext, specificContext);

    return substitution;
  }

  findSubstitutions(callback, nested = true) {
    let substitutions;

    substitutions = this.getSubstitutions(nested);

    substitutions = find(substitutions, callback);  ///

    return substitutions;
  }

  findSubstitutionByVariableIdentifier(variable) {
    const substitution = this.findSubstitution((substitution) => {
      const substitutionVariable = substitution.getVariable();

      if (substitutionVariable !== null) {
        const substitutionVariableMatchesVariableIdentifier = substitutionVariable.matchVariableIdentifier(variableIdentifier);

        if (substitutionVariableMatchesVariableIdentifier) {
          return true;
        }
      }
    }) || null;

    return substitution;
  }

  findSubstitutionByMetavariableName(metavariableName) {
    const substitution = this.findSubstitution((substitution) => {  ///
      const substitutionMatchesMetavariableName = substitution.matchMetavariableName(metavariableName);

      if (substitutionMatchesMetavariableName) {
        return true;
      }
    }) || null;

    return substitution;
  }

  findSimpleSubstitutionByMetavariableName(metavariableName) {
    const simpleSubstitution = this.findSubstitution((substitution) => {
      const substitutionSimple = substitution.isSimple();

      if (substitutionSimple) {
        const simpleSubstitution = substitution,  ///
              simpleSubstitutionMatchesMetavariableName = simpleSubstitution.matchMetavariableName(metavariableName);

        if (simpleSubstitutionMatchesMetavariableName) {
          return true;
        }
      }
    }) || null;

    return simpleSubstitution;
  }

  findComplexSubstitutionsByMetavariableName(metavariableName) {
    const complexSubstitution = this.findSubstitutions((substitution) => {
      const substitutionComplex = substitution.isComplex();

      if (substitutionComplex) {
        const complexSubstitution = substitution,  ///
              complexSubstitutionMatchesMetavariableName = complexSubstitution.matchMetavariableName(metavariableName);

        if (complexSubstitutionMatchesMetavariableName) {
          return true;
        }
      }
    }) || null;

    return complexSubstitution;
  }

  findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution) {
    const substitutionA = substitution; ///

    substitution = this.findSubstitution((substitution) => {  ///
      const substitutionMatchesMetavariableName = substitution.matchMetavariableName(metavariableName);

      if (substitutionMatchesMetavariableName) {
        const substitutionB = substitution, ///
              substitutionBSubstitutionComparesToSubstitutionA = substitutionB.compare(substitutionA);

        if (substitutionBSubstitutionComparesToSubstitutionA) {
          return true;
        }
      }
    }) || null;

    return substitution;
  }

  isSimpleSubstitutionPresentByMetavariableName(metavariableName) {
    const simpleSubstitution = this.findSimpleSubstitutionByMetavariableName(metavariableName),
          simpleSubstitutionPresent = (simpleSubstitution !== null);

    return simpleSubstitutionPresent;
  }

  isSubstitutionPresentByMetavariableNameAndSubstitution(metavariableName, substitution) {
    substitution = this.findSubstitutionByMetavariableNameAndSubstitution(metavariableName, substitution);  ///

    const substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  static fromNothing(context) {
    const substitutions = [],
          liminalContext = new LiminalContext(context, substitutions);

    return liminalContext;
  }
}
