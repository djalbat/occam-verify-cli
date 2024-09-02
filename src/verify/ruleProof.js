"use strict";

import verifyRuleDerivation from "../verify/ruleDerivation";
import MetaLevelLocalContext from "../context/local/metaLevel";

import { nodeQuery } from "../utilities/query";

const ruleDerivationNodeQuery = nodeQuery("/ruleProof/ruleDerivation!");

export default function verifyRuleProof(ruleProofNode, conclusion, localContext) {
  let ruleProofVerified = false;

  const metaLevelLocalContext = MetaLevelLocalContext.fromLocalContext(localContext);

  localContext = metaLevelLocalContext; ///

  const ruleDerivationNode = ruleDerivationNodeQuery(ruleProofNode),
        ruleDerivationVerified = verifyRuleDerivation(ruleDerivationNode, localContext);

  if (ruleDerivationVerified) {
    const lastMetaproofStep = localContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          metastatementNodeMatchConclusionMetastatementNode = metastatementNode.match(conclusionMetastatementNode);

    ruleProofVerified = metastatementNodeMatchConclusionMetastatementNode;  ///
  }

  return ruleProofVerified;
}
