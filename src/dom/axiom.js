"use strict";

import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Axiom extends TopLevelAssertion {
  verify() {
    let verified;

    const axiom = this, ///
          axiomString = axiom.getString(),
          fileContext = this.getFileContext();

    fileContext.trace(`Verifying the '${axiomString}' axiom...`);

    verified = super.verify();

    if (verified) {
      const axiom = this; ///

      fileContext.addAxiom(axiom);

      fileContext.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verified;
  }

  static name = "Axiom";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) { return TopLevelAssertion.fromNode(Axiom, axiomNode, fileContext); }
});