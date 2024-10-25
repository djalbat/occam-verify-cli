"use strict";

import { arrayUtilities } from "necessary";

import shim from "./shim";

import { nodesQuery } from "./utilities/query";

const { last } = arrayUtilities;

const proofStepNodesQuery = nodesQuery("/derivation/proofStep|lastProofStep");

class Derivation {
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

Object.assign(shim, {
  Derivation
});

export default Derivation;
