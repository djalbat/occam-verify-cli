"use strict";

import verifyRuleDerivation from "../verify/ruleDerivation";

import { nodeQuery } from "../utilities/query";
import { genericMatcher } from "../matcher/generic";

const ruleDerivationNodeQuery = nodeQuery("/ruleProof/ruleDerivation!");

export default function verifyRuleProof(ruleProofNode, conclusion, metaproofContext) {
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
          nodeMatches = genericMatcher.matchNode(nodeA, nodeB);

    ruleProofVerified = nodeMatches;  ///
  }

  ruleProofVerified ?
    metaproofContext.complete(ruleProofNode) :
      metaproofContext.complete(ruleProofNode);

  return ruleProofVerified;
}
