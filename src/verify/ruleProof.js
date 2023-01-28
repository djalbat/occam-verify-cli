"use strict";

import verifyRuleDerivation from "../verify/ruleDerivation";

import { matcher } from "../matcher";
import { nodeQuery } from "../utilities/query";

const ruleDerivationNodeQuery = nodeQuery("/ruleProof/ruleDerivation!");

export default function verifyRuleProof(ruleProofNode, conclusion, metaproofContext) {
  let ruleProofVerified = false;

  const ruleDerivationNode = ruleDerivationNodeQuery(ruleProofNode),
        ruleDerivationVerified = verifyRuleDerivation(ruleDerivationNode, metaproofContext);

  if (ruleDerivationVerified) {
    const lastMetaproofStep = metaproofContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          nodeA = metastatementNode,  ///
          nodeB = conclusionMetastatementNode,  ///
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    ruleProofVerified = nodeMatches;  ///
  }

  return ruleProofVerified;
}
