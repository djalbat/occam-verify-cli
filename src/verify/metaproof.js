"use strict";

import LocalContext from "../context/local";
import verifyMetaDerivation from "../verify/metaDerivation";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, metastatementNode, substitutions, localContext) {
  let metaproofVerified = false;

  localContext = LocalContext.fromLocalContext(localContext); ///

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, substitutions, localContext);

  if (metaDerivationVerified) {
    const lastMetaproofStep = localContext.getLastMetaproofStep(),
          lastMetaproofStepMetastatementNode = lastMetaproofStep.getMetastatementNode(),
          lastMetastatementNode = lastMetaproofStepMetastatementNode, ///
          lastMetastatementNodeMatchesMetastatementNode = lastMetastatementNode.match(metastatementNode);

    metaproofVerified = lastMetastatementNodeMatchesMetastatementNode;  ///
  }

  return metaproofVerified;
}
