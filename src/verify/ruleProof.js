"use strict";

import matcher from "../matcher";
import MetaproofContext from "../context/metaproof";
import verifyRuleDerivation from "../verify/ruleDerivation";

import { nodeQuery } from "../utilities/query";

const ruleDerivationNodeQuery = nodeQuery("/ruleProof/ruleDerivation!");

export default function verifyRuleProof(ruleProofNode, conclusion, metaproofContext) {
  let ruleProofVerified = false;

  metaproofContext = MetaproofContext.fromMetaproofContext(metaproofContext); ///

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
