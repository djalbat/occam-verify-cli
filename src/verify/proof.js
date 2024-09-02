"use strict";

import verifyDerivation from "../verify/derivation";
import IntrinsicLevelLocalContext from "../context/local/intrinsicLevel";

import { nodeQuery } from "../utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation!");

export default function verifyProof(proofNode, conclusion, localContext) {
  let proofVerified = false;

  const intrinsicLevelLocalContext = IntrinsicLevelLocalContext.fromLocalContext(localContext); ///

  localContext = intrinsicLevelLocalContext;  ///

  const derivationNode = derivationNodeQuery(proofNode),
        derivationVerified = verifyDerivation(derivationNode, localContext);

  if (derivationVerified) {
    const lastProofStep = localContext.getLastProofStep();

    if (lastProofStep !== null) {
      const proofStep = lastProofStep, ///
            statementNode = proofStep.getStatementNode(),
            conclusionStatementNode = conclusion.getStatementNode(),
            statementNodeMatchesConclusionStatementNode = statementNode.match(conclusionStatementNode);

      proofVerified = statementNodeMatchesConclusionStatementNode;  ///
    }
  }

  return proofVerified;
}
