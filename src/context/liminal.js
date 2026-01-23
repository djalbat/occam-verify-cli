"use strict";

import elements from "../elements";

import { chainContext } from "../utilities/context";

export default class LiminalContext {
  constructor(context, substitutions) {
    this.context = context;
    this.substitutions = substitutions;

    return chainContext(this);
  }

  getSubstitutions() {
    return this.substitutions;
  }

  addSubstitution(substitution) {
    const context = this; ///

    this.substitutions.addSubstitution(substitution, context);
  }

  removeSubstitution(substitution) {
    const context = this; ///

    this.substitutions.removeSubstitution(substitution, context);
  }

  snapshot() {
    const context = this; ///

    this.substitutions.snapshot(context);
  }

  rollback() {
    const context = this; ///

    this.substitutions.rollback(context);
  }

  continue() {
    const context = this; ///

    this.substitutions.continue(context);
  }

  static fromNothing(context) {
    const { Substitutions } = elements,
          substitutions = Substitutions.fromNothing(context),
          emphemeralContext = new LiminalContext(context, substitutions);

    return emphemeralContext;
  }
}
