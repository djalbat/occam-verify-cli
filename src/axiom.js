"use strict";

import Label from "./label";
import Consequent from "./consequent";
import Supposition from "./supposition";
import LocalContext from "./context/local";
import TopLevelAssertion from "./topLevelAssertion";

import { nodeQuery, nodesQuery } from "./utilities/query";
import { labelsStringFromLabels } from "./topLevelAssertion";

const labelNodesQuery = nodesQuery("/axiom/label"),
      consequentNodeQuery = nodeQuery("/axiom/consequent"),
      suppositionNodesQuery = nodesQuery("/axiom/supposition");

export default class Axiom extends TopLevelAssertion {
  verify() {
    let verified = false;

    const labelsString = labelsStringFromLabels(this.labels);

    this.fileContext.trace(`Verifying the '${labelsString}' axiom...`);

    const labelsVerifiedAtTopLevel = this.labels.every((label) => {
      const labelVVerifiedAtTopLevel = label.verifyAtTopLevel(this.fileContext);

      if (labelVVerifiedAtTopLevel) {
        return true;
      }
    });

    if (labelsVerifiedAtTopLevel) {
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
      this.fileContext.debug(`...verified the '${labelsString}' axiom.`);
    }

    return verified;
  }

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) {
    const labelNodes = labelNodesQuery(axiomNode),
          suppositionNodes = suppositionNodesQuery(axiomNode),
          consequentNode = consequentNodeQuery(axiomNode),
          labels = labelNodes.map((labelNode) => {
            const label = Label.fromLabelNode(labelNode, fileContext);

            return label;
          }),
          suppositions = suppositionNodes.map((suppositionNode) => {
            const supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);

            return supposition;
          }),
          consequent = Consequent.fromConsequentNode(consequentNode, fileContext),
          proof = null,
          rule = new Axiom(fileContext, labels, suppositions, consequent, proof);

    return rule;
  }
}
