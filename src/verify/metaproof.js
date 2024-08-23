"use strict";

import verifyMetaDerivation from "../verify/metaDerivation";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, conclusion, localMetaproof) {
  let metaproofVerified = false;

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, localMetaproof);

  if (metaDerivationVerified) {
    const lastMetaproofStep = localMetaproof.getLastMetaproofStep();

    if (lastMetaproofStep !== null) {
      const metaproofStep = lastMetaproofStep, ///
            metastatementNode = metaproofStep.getMetastatementNode(),
            conclusionMetastatementNode = conclusion.getMetastatementNode(),
            metastatementNodeMatchesConclusionMetastatementNode = metastatementNode.match(conclusionMetastatementNode);

      metaproofVerified = metastatementNodeMatchesConclusionMetastatementNode;  ///
    }
  }

  return metaproofVerified;
}
