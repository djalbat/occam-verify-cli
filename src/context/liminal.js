"use strict";

import { arrayUtilities } from "necessary";
import { Context, contextUtilities } from "occam-languages";

const { extract } = arrayUtilities,
      { chainContext } = contextUtilities;

export default class LiminalContext extends Context {
  constructor(context, substitutions) {
    super(context);

    this.substitutions = substitutions;

    return chainContext(this);
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

  addSubstitution(substitution) {
    const context = this, ///
          substitutionA = substitution, ///
          substitutionString = substitution.getString();

    extract(this.substitutions, (substitution) => {
      const substitutionB = substitution, ///
            substitutionAEqualToAssertionB = substitutionA.isEqualTo(substitutionB);

      if (substitutionAEqualToAssertionB) {
        return true;
      }
    });

    context.trace(`Added the '${substitutionString}' substitution to the context.`);

    this.substitutions.push(substitution);
  }

  findSubstitution(callback) { return this.substitutions.find(callback) }

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
