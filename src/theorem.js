"use strict";

import shim from "./shim";
import TopLevelAssertion from "./topLevelAssertion";

class Theorem extends TopLevelAssertion {
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

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Theorem, json, fileContext); }

  static fromTheoremNode(metaLemmaNode, fileContext) { return TopLevelAssertion.fromNode(Theorem, metaLemmaNode, fileContext); }
}

Object.assign(shim, {
  Theorem
});

export default Theorem;
