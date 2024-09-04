"use strict";

import { nodesQuery } from "../utilities/query";

const proofStepNodesQuery = nodesQuery("/subDerivation/proofStep|lastProofStep");

export default function verifySubDerivation(subDerivationNode, substitutions, localContext) {
  let subDerivationVerified;

  const proofStepNodes = proofStepNodesQuery(subDerivationNode);

  subDerivationVerified = proofStepNodes.every((proofStepNode) => {
    const { verifyProofStep } = verifySubDerivation,
          proofStepVerified = verifyProofStep(proofStepNode, substitutions, localContext);

    if (proofStepVerified) {
      return true;
    }
  });

  return subDerivationVerified;
}
