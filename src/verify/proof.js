"use strict";

import ProofContext from "../context/proof";
import verifyDerivation from "../verify/derivation";

import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!");

export default function verifyProof(proofNode, conclusion, proofContext) {
  let proofVerified = false;

  proofContext = ProofContext.fromProofContext(proofContext); ///

  const derivationNode = derivationNodeQuery(proofNode),
        derivationVerified = verifyDerivation(derivationNode, proofContext);

  if (derivationVerified) {
    const lastProofStep = proofContext.getLastProofStep(),
          proofStep = lastProofStep, ///
          statementNode = proofStep.getStatementNode(),
          conclusionStatementNode = conclusion.getStatementNode(),
          statementNodeMatchConclusionStatementNode = statementNode.match(conclusionStatementNode);

    proofVerified = statementNodeMatchConclusionStatementNode;  ///
  }

  return proofVerified;
}
