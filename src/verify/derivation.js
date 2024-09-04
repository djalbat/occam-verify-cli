"use strict";

import verifyProofStep from "../verify/proofStep";

import { nodesQuery } from "../utilities/query";

const proofStepNodesQuery = nodesQuery("/derivation/proofStep|lastProofStep");

export default function verifyDerivation(derivationNode, substitutions, localContext) {
  let derivationVerified;

  const proofStepNodes = proofStepNodesQuery(derivationNode);

  derivationVerified = proofStepNodes.every((proofStepNode) => {
    const proofStepVerified = verifyProofStep(proofStepNode, substitutions, localContext);

    if (proofStepVerified) {
      return true;
    }
  });

  return derivationVerified;
}
