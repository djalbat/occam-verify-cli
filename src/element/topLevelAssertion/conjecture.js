"use strict";

import { elements } from "occam-furtle";

import TopLevelAssertion from "../topLevelAssertion";

const { define } = elements;

export default define(class Conjecture extends TopLevelAssertion {
  verify() {
    let verifies;

    const node = this.getNode(),
          context = this.getContext(),
          conjectureString = this.getString();  ///

    context.trace(`Verifying the '${conjectureString}' conjecture...`, node);

    verifies = super.verify();

    if (verifies) {
      const conjecture = this;  ///

      context.addConjecture(conjecture);

      context.debug(`...verified the '${conjectureString}' conjecture.`, node);
    }

    return verifies;
  }

  static name = "Conjecture";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Conjecture, json, context); }
});
