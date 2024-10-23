"use strict";

import shim from "./shim";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { stringFromLabels } from "./topLevelAssertion";
import { nodeQuery, nodesQuery } from "./utilities/query";

const labelNodesQuery = nodesQuery("/axiom/label"),
      consequentNodeQuery = nodeQuery("/axiom/consequent"),
      suppositionNodesQuery = nodesQuery("/axiom/supposition");

class Axiom extends TopLevelAssertion {
  verify() {
    let verified = false;

    const axiomString = this.string;  ///

    this.fileContext.trace(`Verifying the '${axiomString}' axiom...`);

    const labelsVerifiedWhenDeclared = this.labels.every((label) => {
      const labelVVerifiedWhenDeclared = label.verifyWhenDeclared(this.fileContext);

      if (labelVVerifiedWhenDeclared) {
        return true;
      }
    });

    if (labelsVerifiedWhenDeclared) {
      const localContext = LocalContext.fromFileContext(this.fileContext),
            suppositionsVerified = this.suppositions.every((supposition) => {
              const suppositionVerified = supposition.verify(localContext);

              if (suppositionVerified) {
                return true;
              }
            });

      if (suppositionsVerified) {
        const consequentVerified = this.consequent.verify(localContext);

        if (consequentVerified) {
          const axiom = this;  ///

          this.fileContext.addAxiom(axiom);

          verified = true;
        }
      }
    }

    if (verified) {
      this.fileContext.debug(`...verified the '${axiomString}' axiom.`);
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
