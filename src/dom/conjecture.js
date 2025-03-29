"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Conjecture extends TopLevelAssertion {
  verify() {
    let verified;

    const conjecture = this,  ///
          fileContext = this.getFileContext(),
          conjectureString = conjecture.getString();

    fileContext.trace(`Verifying the '${conjectureString}' conjecture...`);

    verified = super.verify();

    if (verified) {
      const conjecture = this;  ///

      fileContext.addConjecture(conjecture);

      fileContext.debug(`...verified the '${conjectureString}' conjecture.`);
    }

    return verified;
  }

  static name = "Conjecture";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Conjecture, json, fileContext); }

  static fromNode(node, fileContext) { return TopLevelAssertion.fromNode(Conjecture, node, fileContext); }
});
