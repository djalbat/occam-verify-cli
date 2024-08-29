"use strict";

import verifyMetaProofStep from "../verify/metaProofStep";

import { nodesQuery } from "../utilities/query";

const metaProofStepNodesQuery = nodesQuery("/metaDerivation/metaProofStep|lastMetaProofStep");

export default function verifyMetaDerivation(metaDerivationNode, substitutions, localMetaContext) {
  let metaDerivationVerified;

  const metaProofStepNodes = metaProofStepNodesQuery(metaDerivationNode);

  metaDerivationVerified = metaProofStepNodes.every((metaProofStepNode) => {
    const metaProofStepVerified = verifyMetaProofStep(metaProofStepNode, substitutions, localMetaContext);

    if (metaProofStepVerified) {
      return true;
    }
  });

  return metaDerivationVerified;
}
