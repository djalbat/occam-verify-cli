"use strict";

import { nodesQuery } from "../utilities/query";

const ruleProofStepNodesQuery = nodesQuery("/ruleSubDerivation/ruleProofStep|lastRuleProofStep");

export default function verifyRuleSubDerivation(ruleSubDerivationNode, localMetaContext) {
  let ruleSubDerivationVerified;

  const ruleProofStepNodes = ruleProofStepNodesQuery(ruleSubDerivationNode);

  ruleSubDerivationVerified = ruleProofStepNodes.every((ruleProofStepNode) => {
    const { verifyRuleProofStep } = verifyRuleSubDerivation,
          ruleProofStepVerified = verifyRuleProofStep(ruleProofStepNode, localMetaContext);

    if (ruleProofStepVerified) {
      return true;
    }
  });

  return ruleSubDerivationVerified;
}
