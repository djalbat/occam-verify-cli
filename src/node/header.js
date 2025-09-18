"use strict";

import NonTerminalNode from "../node/nonTerminal";

import {PARENTHESISED_LABELS_RULE_NAME, SIGNATURE_RULE_NAME} from "../ruleNames";

export default class HeaderNode extends NonTerminalNode {
  getParenthesisedLabelsNode() {
    const ruleName = PARENTHESISED_LABELS_RULE_NAME,
          parenthesisedLabelsNode = this.getNodeByRuleName(ruleName);

    return parenthesisedLabelsNode;
  }

  getSignatureNode() {
    const ruleName = SIGNATURE_RULE_NAME,
          signatureNode = this.getNodeByRuleName(ruleName);

    return signatureNode;
  }

  getLabelNodes() {
    let labelNodes = [];

    const parenthesisedLabelsNode = this.getParenthesisedLabelsNode();

    if (parenthesisedLabelsNode !== null) {
      labelNodes = parenthesisedLabelsNode.getLabelNodes();
    }

    return labelNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(Class, ruleName, childNodes, opacity, precedence); }
}
