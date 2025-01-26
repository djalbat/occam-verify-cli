"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";

const { last } = arrayUtilities;

const proofStepSubproofNodesQuery = nodesQuery("/subDerivation/proofStep|subproof");

export default domAssigned(class SubDerivation {
  constructor(proofStepSubproofs) {
    this.proofStepSubproofs = proofStepSubproofs;
  }

  getProofStepSubproofs() {
    return this.proofStepSubproofs;
  }

  getLastProofStep() {
    const lastProofStepSubproof = last(this.proofStepSubproofs),
          lastProofStep = lastProofStepSubproof;  ///

    return lastProofStep;
  }

  verify(substitutions, context) {
    let verified;

    verified = this.proofStepSubproofs.every((proofStepSubproof) => { ///
      const assignments = [],
            proofStepSubproofVerified = proofStepSubproof.verify(substitutions, assignments, context);

      if (proofStepSubproofVerified) {
        const proofStepSubproofUnified = proofStepSubproof.unify(substitutions, context);

        if (proofStepSubproofUnified) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          if (assignmentsAssigned) {
            context.addProofStepSubproof(proofStepSubproof);

            return true;
          }
        }
      }
    });

    return verified;
  }

  static name = "SubDerivation";

  static fromSubDerivationNode(subDerivationNode, fileContext) {
    const proofStepSubproofs = proofStepSubproofFromSubDerivationNode(subDerivationNode, fileContext),
          subDerivation = new SubDerivation(proofStepSubproofs);

    return subDerivation;
  }
});

function proofStepSubproofFromSubDerivationNode(subDerivationNode, fileContext) {
  const { ProofStep, Subproof } = dom,
        proofStepSubproofNodes = proofStepSubproofNodesQuery(subDerivationNode),
        proofStepSubproofs = proofStepSubproofNodes.map((proofStepSubproofNode) => {
          const subproof = Subproof.fromProofStepSubproofNode(proofStepSubproofNode, fileContext),
                proofStep = ProofStep.fromProofStepSubproofNode(proofStepSubproofNode, fileContext),
                proofStepSubproof = (proofStep || subproof);

          return proofStepSubproof;
        });

  return proofStepSubproofs;
}