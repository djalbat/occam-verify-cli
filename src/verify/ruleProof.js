"use strict";

import verifyRuleDerivation from "../verify/ruleDerivation";

import { matchNode } from "../utilities/node";
import { nodeQuery } from "../utilities/query";

const ruleDerivationNodeQuery = nodeQuery("/ruleProof/ruleDerivation!");

export default function verifyMetaproof(ruleProofNode, conclusion, metaproofContext) {
  let ruleProofVerified = false;

  metaproofContext.begin(ruleProofNode);

  const ruleDerivationNode = ruleDerivationNodeQuery(ruleProofNode),
        ruleDerivationVerified = verifyRuleDerivation(ruleDerivationNode, metaproofContext);

  if (ruleDerivationVerified) {
    const lastMetaproofStep = metaproofContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          nodeA = metastatementNode,  ///
          nodeB = conclusionMetastatementNode,  ///
          nodeMatches = matchNode(nodeA, nodeB);

    ruleProofVerified = nodeMatches;  ///
  }

  ruleProofVerified ?
    metaproofContext.complete(ruleProofNode) :
      metaproofContext.complete(ruleProofNode);

  return ruleProofVerified;
}
