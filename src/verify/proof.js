"use strict";

import verifyDerivation from "../verify/derivation";

import { matchNode } from "../utilities/node";
import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!");

export default function verifyProof(proofNode, conclusion, proofContext) {
  let proofVerified = false;

  proofContext.begin(proofNode);

  const derivationNode = derivationNodeQuery(proofNode),
        derivationVerified = verifyDerivation(derivationNode, proofContext);

  if (derivationVerified) {
    const lastProofStep = proofContext.getLastProofStep(),
          proofStep = lastProofStep, ///
          statementNode = proofStep.getStatementNode(),
          conclusionStatementNode = conclusion.getStatementNode(),
          nodeA = statementNode,  ///
          nodeB = conclusionStatementNode,  ///
          nodeMatches = matchNode(nodeA, nodeB);

    proofVerified = nodeMatches;  ///
  }

  proofVerified ?
    proofContext.complete(proofNode) :
      proofContext.complete(proofNode);

  return proofVerified;
}
