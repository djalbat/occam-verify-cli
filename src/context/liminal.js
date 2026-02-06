"use strict";

import { arrayUtilities } from "necessary";
import { Context, contextUtilities } from "occam-furtle";

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

  static fromNothing(context) {
    const substitutions = [],
          emphemeralContext = new LiminalContext(context, substitutions);

    return emphemeralContext;
  }
}
