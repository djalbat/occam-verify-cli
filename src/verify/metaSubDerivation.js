"use strict";

import { nodesQuery } from "../utilities/query";

const metaproofStepNodesQuery = nodesQuery("/metaSubDerivation/metaproofStep|lastMetaproofStep");

export default function verifyMetaSubDerivation(metaSubDerivationNode, substitutions, localContext) {
  let metaSubDerivationVerified;

  const metaproofStepNodes = metaproofStepNodesQuery(metaSubDerivationNode);

  metaSubDerivationVerified = metaproofStepNodes.every((metaproofStepNode) => {
    const { verifyMetaproofStep } = verifyMetaSubDerivation,
          metaproofStepVerified = verifyMetaproofStep(metaproofStepNode, substitutions, localContext);

    if (metaproofStepVerified) {
      return true;
    }
  });

  return metaSubDerivationVerified;
}
