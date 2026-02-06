"use strict";

import TopLevelAssertion from "../topLevelAssertion";

import { define } from "../../elements";

export default define(class Conjecture extends TopLevelAssertion {
  async verify() {
    let verifies;

    const context = this.getContext(),
          conjectureString = this.getString();  ///

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
});
