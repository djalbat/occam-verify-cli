"use strict";

import shim from "./shim";
import TopLevelAssertion from "./topLevelAssertion";

class Axiom extends TopLevelAssertion {
  verify() {
    let verified;

    const fileContext = this.getFileContext(),
          axiomString = this.string; ///

    fileContext.trace(`Verifying the '${axiomString}' axiom...`);

    verified = super.verify();

    if (verified) {
      const axiom = this; ///

      fileContext.addAxiom(axiom);

      fileContext.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) { return TopLevelAssertion.fromNode(Axiom, axiomNode, fileContext); }
}

Object.assign(shim, {
  Axiom
});

export default Axiom;
