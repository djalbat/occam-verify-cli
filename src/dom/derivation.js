"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const { last } = arrayUtilities;

const proofStepNodesQuery = nodesQuery("/derivation/proofStep|lastProofStep");

export default domAssigned(class Derivation {
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

  static name = "Derivation";

  static fromDerivationNode(derivationNode, fileContext) {
    const { ProofStep } = dom,
          proofStepNodes = proofStepNodesQuery(derivationNode),
          proofSteps = proofStepNodes.map((proofStepNode) => {
            const proofStep = ProofStep.fromProofStepNode(proofStepNode, fileContext);

            return proofStep;
          }),
          derivation = new Derivation(proofSteps);

    return derivation;
  }
});
