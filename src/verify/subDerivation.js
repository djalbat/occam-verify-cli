"use strict";

import shim from "../shim";

import { nodesQuery } from "../utilities/query";

const proofStepNodesQuery = nodesQuery("/subDerivation/proofStep|lastProofStep");

export default function verifySubDerivation(subDerivationNode, substitutions, localContext) {
  let subDerivationVerified;

  const proofStepNodes = proofStepNodesQuery(subDerivationNode);

  subDerivationVerified = proofStepNodes.every((proofStepNode) => {
    const { verifyProofStep } = shim,
          proofStepVerified = verifyProofStep(proofStepNode, substitutions, localContext);

    if (proofStepVerified) {
      return true;
    }
  });

  return subDerivationVerified;
}
