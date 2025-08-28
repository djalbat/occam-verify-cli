"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Theorem extends TopLevelAssertion {
  verify() {
    let verifies;

    const context = this.getContext(),
          theoremString = this.string;  ///

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

  static fromTheoremNode(theoremNode, context) {
    const node = theoremNode, ///
          theorem = TopLevelAssertion.fromNode(Theorem, node, context);

    return theorem;
  }
});
