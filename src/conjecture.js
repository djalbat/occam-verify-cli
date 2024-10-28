"use strict";

import shim from "./shim";
import TopLevelAssertion from "./topLevelAssertion";

class Conjecture extends TopLevelAssertion {
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

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Conjecture, json, fileContext); }

  static fromConjectureNode(conjectureNode, fileContext) { return TopLevelAssertion.fromNode(Conjecture, conjectureNode, fileContext); }
}

Object.assign(shim, {
  Conjecture
});

export default Conjecture;
