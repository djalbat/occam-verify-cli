"use strict";

import { arrayUtilities } from "necessary";
import { substitutionsStringFromSubstitutions } from "../utilities/string";
import { resolveSustitutions, areSubstitutionsResolved } from "../utilities/substitutions";

import Context from "../context";

const { compress } = arrayUtilities;

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

  resolveSustitutions() { resolveSustitutions(this.substitutions); }

  areSubstitutionsResolved() { return areSubstitutionsResolved(this.substitutions); }

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
