"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const { last } = arrayUtilities;

const proofStepNodesQuery = nodesQuery("/subDerivation/proofStep|lastProofStep");

export default domAssigned(class SubDerivation {
  constructor(proofSteps) {
    this.proofSteps = proofSteps;
  }

  getProofSteps() {
    return this.proofSteps;
  }

  getLastProofStep() {
    const lastProofStep = last(this.proofSteps);

    return lastProofStep;
  }

  verify(substitutions, context) {
    let verified;

    verified = this.proofSteps.every((proofStep) => { ///
      const proofStepVerifiedAndUnified = proofStep.verifyAndUnify(substitutions, context);

      if (proofStepVerifiedAndUnified) {
        return true;
      }
    });

    return verified;
  }

  static name = "SubDerivation";

  static fromSubDerivationNode(subDerivationNode, fileContext) {
    const { ProofStep } = dom,
          proofStepNodes = proofStepNodesQuery(subDerivationNode),
          proofSteps = proofStepNodes.map((proofStepNode) => {
            const proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);

            return proofStep;
          }),
          subDerivation = new SubDerivation(proofSteps);

    return subDerivation;
  }
});
