"use strict";

import LocalMetaContext from "../context/localMeta";
import verifyMetaDerivation from "../verify/metaDerivation";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, conclusion, substitutions, localMetaContext) {
  let metaproofVerified = false;

  localMetaContext = LocalMetaContext.fromLocalMetaContext(localMetaContext); ///

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, substitutions, localMetaContext);

  if (metaDerivationVerified) {
    const lastMetaproofStep = localMetaContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          metastatementNodeMatchesConclusionMetastatementNode = metastatementNode.match(conclusionMetastatementNode);

    metaproofVerified = metastatementNodeMatchesConclusionMetastatementNode;  ///
  }

  return metaproofVerified;
}
