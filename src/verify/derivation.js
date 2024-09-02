"use strict";

import verifyProofStep from "../verify/proofStep";

import { nodesQuery } from "../utilities/query";

const proofStepNodesQuery = nodesQuery("/derivation/proofStep|lastProofStep");

export default function verifyDerivation(ruleDerivationNode, localContext) {
  let ruleDerivationVerified;

  const proofStepNodes = proofStepNodesQuery(ruleDerivationNode);

  ruleDerivationVerified = proofStepNodes.every((proofStepNode) => {
    const proofStepVerified = verifyProofStep(proofStepNode, localContext);

    if (proofStepVerified) {
      return true;
    }
  });

  return ruleDerivationVerified;
}
