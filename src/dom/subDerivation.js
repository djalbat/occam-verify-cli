"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";

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
      const proofStepVerified = this.verifyProofStep(proofStep, substitutions, context);

      if (proofStepVerified) {
        return true;
      }
    });

    return verified;
  }

  verifyProofStep(proofStep, substitutions, context) {
    let proofStepVerified;

    const assignments = [];

    proofStepVerified = proofStep.verify(substitutions, assignments, context);

    if (proofStepVerified) {
      context.addProofStep(proofStep);

      const proofStepUnified = proofStep.unify(substitutions, context);

      proofStepVerified = proofStepUnified; ///

      if (proofStepVerified) {
        assignAssignments(assignments, context);
      }
    }

    return proofStepVerified;
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
