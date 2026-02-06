"use strict";

import TopLevelAssertion from "../topLevelAssertion";

import { define } from "../../elements";

export default define(class Theorem extends TopLevelAssertion {
  async verify() {
    let verifies;

    const context = this.getContext(),
          theoremString = this.getString();  ///

    context.trace(`Verifying the '${theoremString}' theorem...`);

    verifies = super.verify();

    if (verifies) {
      const theorem = this; ///

      context.addTheorem(theorem);

      context.debug(`...verified the '${theoremString}' theorem.`);
    }

    return verifies;
  }

  static name = "Theorem";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Theorem, json, context); }
});
