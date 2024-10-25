"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";

import { nodesQuery } from "./utilities/query";

const { last } = arrayUtilities;

const proofStepNodesQuery = nodesQuery("/subDerivation/proofStep|lastProofStep");

class SubDerivation {
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
      const proofStepVerified = proofStep.verify(substitutions, context);

      if (proofStepVerified) {
        return true;
      }
    });

    return verified;
  }

  static fromSubDerivationNode(subDerivationNode, fileContext) {
    const { ProofStep } = shim,
          proofStepNodes = proofStepNodesQuery(subDerivationNode),
          proofSteps = proofStepNodes.map((proofStepNode) => {
            const proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);

            return proofStep;
          }),
          subDerivation = new SubDerivation(proofSteps);

    return subDerivation;
  }
}

Object.assign(shim, {
  SubDerivation
});

export default SubDerivation;
