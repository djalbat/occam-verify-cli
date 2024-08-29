"use strict";

import { nodesQuery } from "../utilities/query";

const metaProofStepNodesQuery = nodesQuery("/metaSubDerivation/metaProofStep|lastMetaProofStep");

export default function verifyMetaSubDerivation(metaSubDerivationNode, localMetaContext) {
  let metaSubDerivationVerified;

  const metaProofStepNodes = metaProofStepNodesQuery(metaSubDerivationNode);

  metaSubDerivationVerified = metaProofStepNodes.every((metaProofStepNode) => {
    const { verifyMetaProofStep } = verifyMetaSubDerivation,
          metaProofStepVerified = verifyMetaProofStep(metaProofStepNode, localMetaContext);

    if (metaProofStepVerified) {
      return true;
    }
  });

  return metaSubDerivationVerified;
}
