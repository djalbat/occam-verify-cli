"use strict";

import BodyNode from "../../node/body";
import { DEDUCTION_RULE_NAME, SUPPOSITION_RULE_NAME } from "../../ruleNames";

export default class AxiomBodyNode extends BodyNode {
  getProofNode() {
    const proofNode = null;

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return BodyNode.fromRuleNameChildNodesOpacityAndPrecedence(AxiomBodyNode, ruleName, childNodes, opacity, precedence); }
}
