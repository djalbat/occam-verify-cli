"use strict";

import verifyMetaDerivation from "../verify/metaDerivation";
import MetaLevelLocalContext from "../context/local/metaLevel";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, conclusion, substitutions, localContext) {
  let metaproofVerified = false;

  const metaLevelLocalContext = MetaLevelLocalContext.fromLocalContext(localContext);

  localContext = metaLevelLocalContext; ///

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, substitutions, localContext);

  if (metaDerivationVerified) {
    const lastMetaproofStep = localContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          metastatementNodeMatchesConclusionMetastatementNode = metastatementNode.match(conclusionMetastatementNode);

    metaproofVerified = metastatementNodeMatchesConclusionMetastatementNode;  ///
  }

  return metaproofVerified;
}
