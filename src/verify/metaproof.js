"use strict";

import verifyMetaDerivation from "../verify/metaDerivation";

import { matcher } from "../matcher";
import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, conclusion, metaproofContext) {
  let metaproofVerified = false;

  metaproofContext.begin(metaproofNode);

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, metaproofContext);

  if (metaDerivationVerified) {
    const lastMetaproofStep = metaproofContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          nodeA = metastatementNode,  ///
          nodeB = conclusionMetastatementNode,  ///
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    metaproofVerified = nodeMatches;  ///
  }

  metaproofVerified ?
    metaproofContext.complete(metaproofNode) :
      metaproofContext.complete(metaproofNode);

  return metaproofVerified;
}
