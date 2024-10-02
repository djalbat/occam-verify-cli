"use strict";

import shim from "./shim";

import { last } from "./utilities/array";
import { nodesQuery } from "./utilities/query";

const proofStepNodesQuery = nodesQuery("/subDerivation/proofStep|lastProofStep");

export default class SubDerivation {
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

  verify(substitutions, localContext) {
    let verified;

    verified = this.proofSteps.every((proofStep) => { ///
      const proofStepVerified = proofStep.verify(substitutions, localContext);

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