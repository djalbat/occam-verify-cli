"use strict";

import { arrayUtilities } from "necessary";

import { chainContext } from "../utilities/context";

const { extract } = arrayUtilities;

export default class LiminalContext {
  constructor(context, substitutions) {
    this.context = context;
    this.substitutions = substitutions;

    return chainContext(this);
  }

  getContext() {
    return this.context;
  }

  getSubstitutions() {
    let substitutions = this.context.getSubstitutions();

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
