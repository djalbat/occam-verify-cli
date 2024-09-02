"use strict";

import verifyRuleProofStep from "../verify/ruleProofStep";

import { nodesQuery } from "../utilities/query";

const ruleProofStepNodesQuery = nodesQuery("/ruleDerivation/ruleProofStep|lastRuleProofStep");

export default function verifyRuleDerivation(ruleDerivationNode, localContext) {
  let ruleDerivationVerified;

  const ruleProofStepNodes = ruleProofStepNodesQuery(ruleDerivationNode);

  ruleDerivationVerified = ruleProofStepNodes.every((ruleProofStepNode) => {
    const ruleProofStepVerified = verifyRuleProofStep(ruleProofStepNode, localContext);

    if (ruleProofStepVerified) {
      return true;
    }
  });

  return ruleDerivationVerified;
}
