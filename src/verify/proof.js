"use strict";

import verifyDerivation from "../verify/derivation";

import { matcher } from "../matcher";
import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!");

export default function verifyProof(proofNode, conclusion, proofContext) {
  let proofVerified = false;

  const derivationNode = derivationNodeQuery(proofNode),
        derivationVerified = verifyDerivation(derivationNode, proofContext);

  if (derivationVerified) {
    const lastProofStep = proofContext.getLastProofStep(),
          proofStep = lastProofStep, ///
          statementNode = proofStep.getStatementNode(),
          conclusionStatementNode = conclusion.getStatementNode(),
          nodeA = statementNode,  ///
          nodeB = conclusionStatementNode,  ///
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    proofVerified = nodeMatches;  ///
  }

  return proofVerified;
}
