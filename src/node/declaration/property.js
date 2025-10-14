"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { TYPE_RULE_NAME, PROPERTY_RULE_NAME } from "../../ruleNames";

export default class PropertyDeclarationNode extends NonTerminalNode {
  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  getPropertyNode() {
    const ruleName = PROPERTY_RULE_NAME,
          propertyNode = this.getNodeByRuleName(ruleName);

    return propertyNode;
  }

  getPropertyName() {
    const propertyNode = this.getPropertyNode(),
          propertyName = propertyNode.getPropertyName();

    return propertyName;
  }

  getNominalTypeName() {
    let nominalTypeName = null;

    const typeNode = this.getTypeNode();

    if (typeNode !== null) {
      nominalTypeName = typeNode.getNominalTypeName();
    }

    return nominalTypeName;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
