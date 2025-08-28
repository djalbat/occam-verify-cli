"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Conjecture extends TopLevelAssertion {
  verify() {
    let verifies;

    const context = this.getContext(),
          conjecture = this,  ///
          conjectureString = conjecture.getString();

    context.trace(`Verifying the '${conjectureString}' conjecture...`);

    verifies = super.verify();

    if (verifies) {
      const conjecture = this;  ///

      context.addConjecture(conjecture);

      context.debug(`...verified the '${conjectureString}' conjecture.`);
    }

    return verifies;
  }

  static name = "Conjecture";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Conjecture, json, context); }

  static fromConjectureNode(conjectureNode, context) {
    const node = conjectureNode,  ///
          conjecture = TopLevelAssertion.fromNode(Conjecture, node, context);

    return conjecture;
  }
});
