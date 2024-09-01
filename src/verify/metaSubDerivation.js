"use strict";

import { nodesQuery } from "../utilities/query";

const metaproofStepNodesQuery = nodesQuery("/metaSubDerivation/metaproofStep|lastMetaproofStep");

export default function verifyMetaSubDerivation(metaSubDerivationNode, substitutions, localMetaContext) {
  let metaSubDerivationVerified;

  const metaproofStepNodes = metaproofStepNodesQuery(metaSubDerivationNode);

  metaSubDerivationVerified = metaproofStepNodes.every((metaproofStepNode) => {
    const { verifyMetaproofStep } = verifyMetaSubDerivation,
          metaproofStepVerified = verifyMetaproofStep(metaproofStepNode, substitutions, localMetaContext);

    if (metaproofStepVerified) {
      return true;
    }
  });

  return metaSubDerivationVerified;
}
