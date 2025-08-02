"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { TERM_RULE_NAME, FRAME_RULE_NAME, PROPERTY_RELATION_RULE_NAME } from "../../ruleNames";

export default class PropertyAssertionNode extends NonTerminalNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  getFrameNode() {
    const ruleName = FRAME_RULE_NAME,
          propertyRelationNode = this.getNodeByRuleName(ruleName);

    return propertyRelationNode;
  }

  getPropertyRelationNode() {
    const ruleName = PROPERTY_RELATION_RULE_NAME,
          propertyRelationNode = this.getNodeByRuleName(ruleName);

    return propertyRelationNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyAssertionNode, ruleName, childNodes, opacity, precedence); }
}
