"use strict";

import { arrayUtilities } from "necessary";

import dom from "../dom";

import { nodesQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const { last } = arrayUtilities;

const proofStepSubproofNodesQuery = nodesQuery("/derivation/proofStep|subproof");

export default domAssigned(class Derivation {
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
      const proofStepSubproofVerifiedAndUnified = proofStepSubproof.verifyAndUnify(substitutions, context);

      if (proofStepSubproofVerifiedAndUnified) {
        return true;
      }
    });

    return verified;
  }

  static name = "Derivation";

  static fromDerivationNode(derivationNode, fileContext) {
    const proofStepSubproofs = proofStepSubproofsFromDerivationNode(derivationNode, fileContext),
          derivation = new Derivation(proofStepSubproofs);

    return derivation;
  }
});

function proofStepSubproofsFromDerivationNode(derivationNode, fileContext) {
  const { ProofStep, Subproof } = dom,
        proofStepSubproofNodes = proofStepSubproofNodesQuery(derivationNode),
        proofStepSubproofs = proofStepSubproofNodes.map((proofStepSubproofNode) => {
          const subproof = Subproof.fromProofStepSubproofNode(proofStepSubproofNode, fileContext),
                proofStep = ProofStep.fromProofStepSubproofNode(proofStepSubproofNode, fileContext),
                proofStepSubproof = (proofStep || subproof);

          return proofStepSubproof;
        });

  return proofStepSubproofs;
}