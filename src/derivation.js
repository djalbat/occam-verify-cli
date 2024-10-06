"use strict";

import shim from "./shim";

import { last } from "./utilities/array";
import { nodesQuery } from "./utilities/query";

const proofStepNodesQuery = nodesQuery("/derivation/proofStep|lastProofStep");

export default class Derivation {
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

  static fromDerivationNode(derivationNode, fileContext) {
    const { ProofStep } = shim,
          proofStepNodes = proofStepNodesQuery(derivationNode),
          proofSteps = proofStepNodes.map((proofStepNode) => {
            const proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);

            return proofStep;
          }),
          derivation = new Derivation(proofSteps);

    return derivation;
  }
}
