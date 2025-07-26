"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Theorem extends TopLevelAssertion {
  verify() {
    let verified;

    const fileContext = this.getFileContext(),
          theoremString = this.string;  ///

    fileContext.trace(`Verifying the '${theoremString}' theorem...`);

    verified = super.verify();

    if (verified) {
      const theorem = this; ///

      fileContext.addTheorem(theorem);

      fileContext.debug(`...verified the '${theoremString}' theorem.`);
    }

    return verified;
  }

  static name = "Theorem";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Theorem, json, fileContext); }

  static fromTheoremNode(theoremNode, fileContext) {
    const node = theoremNode, ///
          theorem = TopLevelAssertion.fromNode(Theorem, node, fileContext);

    return theorem;
  }
});
