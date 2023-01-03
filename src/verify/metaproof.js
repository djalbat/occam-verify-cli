"use strict";

import MetaproofStep from "../step/metaproof";
import verifyMetaDerivation from "../verify/metaDerivation";
import verifyQualifiedMetastatement from "./metastatement/qualified";

import { matchNode } from "../utilities/node";
import { nodeQuery } from "../utilities/query";

const metastatementNodeQuery = nodeQuery("/qualifiedMetastatement/metastatement!"),
      metaDerivationNodeQuery = nodeQuery("/metaproof/metaDerivation!"),
      qualifiedMetastatementNodeQuery = nodeQuery("/metaproof/qualifiedMetastatement!");

export default function verifyMetaproof(metaproofNode, conclusion, metaproofContext) {
  let metaproofVerified = false;

  metaproofContext.begin(metaproofNode);

  const metaDerivationNode = metaDerivationNodeQuery(metaproofNode),
        qualifiedMetastatementNode = qualifiedMetastatementNodeQuery(metaproofNode);

  let metaDerivationVerified = false,
      qualifiedMetastatementVerified = false;

  if (metaDerivationNode !== null) {
    metaDerivationVerified = verifyMetaDerivation(metaDerivationNode, metaproofContext);
  }

  if (qualifiedMetastatementNode !== null) {
    metaproofContext.setDerived();

    qualifiedMetastatementVerified = verifyQualifiedMetastatement(qualifiedMetastatementNode, metaproofContext);

    metaproofContext.resetDerived();

    if (qualifiedMetastatementVerified) {
      const metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
            metaproofStep = MetaproofStep.fromMetastatementNode(metastatementNode);

      metaproofContext.addMetaproofStep(metaproofStep);
    }
  }

  if (metaDerivationVerified || qualifiedMetastatementVerified) {
    const lastMetaproofStep = metaproofContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          nodeA = metastatementNode,  ///
          nodeB = conclusionMetastatementNode,  ///
          nodeMatches = matchNode(nodeA, nodeB);

    metaproofVerified = nodeMatches;  ///
  }

  metaproofVerified ?
    metaproofContext.complete(metaproofNode) :
      metaproofContext.complete(metaproofNode);

  return metaproofVerified;
}
