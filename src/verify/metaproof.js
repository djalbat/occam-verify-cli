"use strict";

import verifyMetaDerivation from "../verify/metaDerivation";
import MetaLevelLocalContext from "../context/local/metaLevel";

import { nodeQuery } from "../utilities/query";

const metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!");

export default function verifyMetaproof(metaproofNode, metastatementNode, substitutions, localContext) {
  let metaproofVerified = false;

  const metaLevelLocalContext = MetaLevelLocalContext.fromLocalContext(localContext);

  localContext = metaLevelLocalContext; ///

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
