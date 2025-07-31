"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { LABEL_RULE_NAME } from "../ruleNames";

export default class ParenthesisedLabelNode extends NonTerminalNode {
  getLabelNode() {
    const ruleName = LABEL_RULE_NAME,
          labelNode = this.getNodeByRuleName(ruleName);

    return labelNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParenthesisedLabelNode, ruleName, childNodes, opacity, precedence); }
}
