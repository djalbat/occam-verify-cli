"use strict";

import LocalMetaContext from "../context/localMeta";
import verifyRuleDerivation from "../verify/ruleDerivation";

import { nodeQuery } from "../utilities/query";

const ruleDerivationNodeQuery = nodeQuery("/ruleProof/ruleDerivation!");

export default function verifyRuleProof(ruleProofNode, conclusion, localMetaContext) {
  let ruleProofVerified = false;

  localMetaContext = LocalMetaContext.fromLocalMetaContext(localMetaContext); ///

  const ruleDerivationNode = ruleDerivationNodeQuery(ruleProofNode),
        ruleDerivationVerified = verifyRuleDerivation(ruleDerivationNode, localMetaContext);

  if (ruleDerivationVerified) {
    const lastMetaproofStep = localMetaContext.getLastMetaproofStep(),
          metaproofStep = lastMetaproofStep, ///
          metastatementNode = metaproofStep.getMetastatementNode(),
          conclusionMetastatementNode = conclusion.getMetastatementNode(),
          metastatementNodeMatchConclusionMetastatementNode = metastatementNode.match(conclusionMetastatementNode);

    ruleProofVerified = metastatementNodeMatchConclusionMetastatementNode;  ///
  }

  return ruleProofVerified;
}
