"use strict";

import verifyMetaproofStep from "../verify/metaproofStep";

import { nodesQuery } from "../utilities/query";

const metaproofStepNodesQuery = nodesQuery("/metaDerivation/metaproofStep|lastMetaproofStep");

export default function verifyMetaDerivation(metaDerivationNode, substitutions, localMetaContext) {
  let metaDerivationVerified;

  const metaproofStepNodes = metaproofStepNodesQuery(metaDerivationNode);

  metaDerivationVerified = metaproofStepNodes.every((metaproofStepNode) => {
    const metaproofStepVerified = verifyMetaproofStep(metaproofStepNode, substitutions, localMetaContext);

    if (metaproofStepVerified) {
      return true;
    }
  });

  return metaDerivationVerified;
}
