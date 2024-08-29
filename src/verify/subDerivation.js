"use strict";

import { nodesQuery } from "../utilities/query";

const proofStepNodesQuery = nodesQuery("/subDerivation/proofStep|lastProofStep");

export default function verifySubDerivation(subDerivationNode, localMetaContext) {
  let subDerivationVerified;

  const proofStepNodes = proofStepNodesQuery(subDerivationNode);

  subDerivationVerified = proofStepNodes.every((proofStepNode) => {
    const { verifyProofStep } = verifySubDerivation,
          proofStepVerified = verifyProofStep(proofStepNode, localMetaContext);

    if (proofStepVerified) {
      return true;
    }
  });

  return subDerivationVerified;
}
