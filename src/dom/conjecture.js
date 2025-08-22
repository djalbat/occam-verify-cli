"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Conjecture extends TopLevelAssertion {
  verify() {
    let verifies;

    const conjecture = this,  ///
          fileContext = this.getFileContext(),
          conjectureString = conjecture.getString();

    fileContext.trace(`Verifying the '${conjectureString}' conjecture...`);

    verifies = super.verify();

    if (verifies) {
      const conjecture = this;  ///

      fileContext.addConjecture(conjecture);

      fileContext.debug(`...verified the '${conjectureString}' conjecture.`);
    }

    return verifies;
  }

  static name = "Conjecture";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Conjecture, json, fileContext); }

  static fromConjectureNode(conjectureNode, fileContext) {
    const node = conjectureNode,  ///
          conjecture = TopLevelAssertion.fromNode(Conjecture, node, fileContext);

    return conjecture;
  }
});
