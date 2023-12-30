"use strict";

import LocalContext from "../context/local";
import verifyDerivation from "../verify/derivation";

import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!");

export default function verifyProof(proofNode, conclusion, localContext) {
  let proofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext); ///

  const derivationNode = derivationNodeQuery(proofNode),
        derivationVerified = verifyDerivation(derivationNode, localContext);

  if (derivationVerified) {
    const lastProofStep = localContext.getLastProofStep(),
          proofStep = lastProofStep, ///
          statementNode = proofStep.getStatementNode(),
          conclusionStatementNode = conclusion.getStatementNode(),
          statementNodeMatchConclusionStatementNode = statementNode.match(conclusionStatementNode);

    proofVerified = statementNodeMatchConclusionStatementNode;  ///
  }

  return proofVerified;
}
