"use strict";

import { nodesQuery } from "../utilities/query";

const ruleProofStepNodesQuery = nodesQuery("/ruleSubDerivation/ruleProofStep|lastRuleProofStep");

export default function verifyRuleSubDerivation(ruleSubDerivationNode, localContext) {
  let ruleSubDerivationVerified;

  const ruleProofStepNodes = ruleProofStepNodesQuery(ruleSubDerivationNode);

  ruleSubDerivationVerified = ruleProofStepNodes.every((ruleProofStepNode) => {
    const { verifyRuleProofStep } = verifyRuleSubDerivation,
          ruleProofStepVerified = verifyRuleProofStep(ruleProofStepNode, localContext);

    if (ruleProofStepVerified) {
      return true;
    }
  });

  return ruleSubDerivationVerified;
}
