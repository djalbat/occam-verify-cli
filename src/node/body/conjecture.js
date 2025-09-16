"use strict";

import BodyNode from "../../node/body";

import { PROOF_RULE_NAME, DEDUCTION_RULE_NAME, SUPPOSITION_RULE_NAME } from "../../ruleNames";

export default class ConjectureBodyNode extends BodyNode {
  getProofNode() {
    const ruleName = PROOF_RULE_NAME,
          proofNode = this.getNodeByRuleName(ruleName);

    return proofNode;
  }

  getDeductionNode() {
    const ruleName = DEDUCTION_RULE_NAME,
          deductionNode = this.getNodeByRuleName(ruleName);

    return deductionNode;
  }

  getSuppositionNodes() {
    const ruleName = SUPPOSITION_RULE_NAME,
          suppositionNodes = this.getNodesByRuleName(ruleName);

    return suppositionNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return BodyNode.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureBodyNode, ruleName, childNodes, opacity, precedence); }
}
