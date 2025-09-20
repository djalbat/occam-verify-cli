"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { TERM_RULE_NAME, PROPERTY_RULE_NAME } from "../ruleNames";

export default class PropertyRelationNode extends NonTerminalNode {
  getTermNode() {
    const ruleName = TERM_RULE_NAME,
          termNode = this.getNodeByRuleName(ruleName);

    return termNode;
  }

  getPropertyNode() {
    const ruleName = PROPERTY_RULE_NAME,
          propertyNode = this.getNodeByRuleName(ruleName);

    return propertyNode;
  }

  getPropertyIdentifier() {
    const propertyNode = this.getPropertyNode(),
          propertyIdentifier = propertyNode.getPropertyIdentifier();

    return propertyIdentifier;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyRelationNode, ruleName, childNodes, opacity, precedence); }
}
