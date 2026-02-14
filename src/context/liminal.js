"use strict";

import { arrayUtilities } from "necessary";
import { metavariablesFromSubstitutions } from "../utilities/substitutions";
import { substitutionsStringFromSubstitutions } from "../utilities/string";

import Context from "../context";

const { find, compress } = arrayUtilities;

export default class LiminalContext extends Context {
  constructor(context, substitutions) {
    super(context);

    this.substitutions = substitutions;
  }

  getSubstitutions() {
    let substitutions;

    const context = this.getContext();

    substitutions = context.getSubstitutions();

    substitutions = [ ///
      ...this.substitutions,
      ...substitutions
    ]

    return substitutions;
  }

  commit(context) {
    if (context === undefined) {
      context = this.getContext();
    }

    context.addSubstitutions(this.substitutions);
  }

  addSubstitution(substitution) {
    const context = this,
          substitutionString = substitution.getString();

    this.substitutions = [ ///
      ...this.substitutions,
      substitution
    ];

    compress(this.substitutions, (substitutionA, substitutionB) => {
      const substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (!substitutionAEqualToAssertionB) {
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

  resolveSubstitutions() {
    const context = this, ///
          metavariables = metavariablesFromSubstitutions(this.substitutions, context);

    metavariables.forEach((metavariable) => {
      const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
            complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
              let resolved;

              const substitution = complexSubstitution; ///

              resolved = substitution.isResolved();

              if (!resolved) {
                substitution.resolve(this.substitutions, context);
              }
            });

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  areSubstitutionsResolved() {
    const context = this, ///
          metavariables = metavariablesFromSubstitutions(this.substitutions, context),
          resolved = metavariables.every((metavariable) => {
            const complexSubstitutions = this.findComplexSubstitutionsByMetavariable(metavariable),
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

  findSubstitution(callback) { return this.substitutions.find(callback) }

  findSubstitutions(callback) { return find(this.substitutions, callback); }

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
    }) || null;

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
    }) || null;

    return substitution;
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

  static fromNothing(context) {
    const substitutions = [],
          emphemeralContext = new LiminalContext(context, substitutions);

    return emphemeralContext;
  }
}
