"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { PROOF_RULE_NAME, DEDUCTION_RULE_NAME, SUPPOSITION_RULE_NAME, PARENTHESISED_LABEL_RULE_NAME } from "../ruleNames";

export default class TopLevelMetaAssertionNode extends NonTerminalNode {
  getLabelNode() {
    const parenthesisedLabelNode = this.getParenthesisedLabelNode(),
          labelNodes = parenthesisedLabelNode.getLabelNode();

    return labelNodes;
  }

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

  getParenthesisedLabelNode() {
    const ruleName = PARENTHESISED_LABEL_RULE_NAME,
          parenthesisedLabelNode = this.getNodeByRuleName(ruleName);

    return parenthesisedLabelNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
