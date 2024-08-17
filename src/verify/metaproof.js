"use strict";

import LocalContext from "../context/local";
import verifyMetaDerivation from "../verify/metaDerivation";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, conclusion, localContext) {
  let metaproofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext); ///

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, localContext);

  if (metaDerivationVerified) {
    const lastMetaproofStep = localContext.getLastMetaproofStep();

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
