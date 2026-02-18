"use strict";

import TopLevelAssertion from "../topLevelAssertion";

import { define } from "../../elements";

export default define(class Conjecture extends TopLevelAssertion {
  getConjectureNode() {
    const node = this.getNode(),
          conjectureNode = node;  ///

    return conjectureNode;
  }

  async verify() {
    let verifies;

    const context = this.getContext();

    await this.break(context);

    const conjectureString = this.getString();  ///

    context.trace(`Verifying the '${conjectureString}' conjecture...`);

    verifies = await super.verify();

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
