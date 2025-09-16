"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { CONJECTURE_BODY_RULE_NAME, CONJECTURE_HEADER_RULE_NAME } from "../ruleNames";

export default class ConjectureNode extends NonTerminalNode {
  getConjectureBodyNode() {
    const ruleName = CONJECTURE_BODY_RULE_NAME,
          conjectureBodyNode = this.getNodeByRuleName(ruleName);

    return conjectureBodyNode;
  }

  getConjectureHeaderNode() {
    const ruleName = CONJECTURE_HEADER_RULE_NAME,
          conjectureHeaderNode = this.getNodeByRuleName(ruleName);

    return conjectureHeaderNode;
  }

  getLabelNodes() {
    const conjectureHeaderNode = this.getConjectureHeaderNode(),
          labelNodes = conjectureHeaderNode.getLabelNodes();

    return labelNodes;
  }

  getSuppositionNodes() {
    const conjectureBodyNode = this.getConjectureBodyNode(),
          suppositionNodes = conjectureBodyNode.getSuppositionNodes();

    return suppositionNodes;
  }

  getDeductionNode() {
    const conjectureBodyNode = this.getConjectureBodyNode(),
          deductionNode = conjectureBodyNode.getDeductionNode();

    return deductionNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ConjectureNode, ruleName, childNodes, opacity, precedence); }
}
