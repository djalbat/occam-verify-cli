"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { PROVISIONAL } from "../../constants";
import { TYPE_RULE_NAME, TYPES_RULE_NAME, PROPERTY_DECLARATION_RULE_NAME } from "../../ruleNames";

export default class ComplexTypeDeclarationNode extends NonTerminalNode {
  isProvisional() {
    let provisional = false;

    this.someChildNode((childNode) => {
      const childNodeTerminalNode = childNode.isTerminalNode();

      if (childNodeTerminalNode) {
        const terminalNode = childNode,
              content = terminalNode.getContent(),
              contentProvisional = (content === PROVISIONAL);

        if (contentProvisional) {
          provisional = true;

          return true;
        }
      }
    });

    return provisional;
  }

  isPrefixed() {
    const typeNode = this.getTypeNode(),
          prefixed = typeNode.isPrefixed();

    return prefixed;
  }

  getTypeName() {
    const typeNode = this.getTypeNode(),
          typeName = typeNode.getTypeName();

    return typeName;
  }

  getTypeNode() {
    const ruleName = TYPE_RULE_NAME,
          typeNode = this.getNodeByRuleName(ruleName);

    return typeNode;
  }

  getTypesNode() {
    const ruleName = TYPES_RULE_NAME,
          typesNode = this.getNodeByRuleName(ruleName);

    return typesNode;
  }

  getSuperTypeNodes() {
    let superTypeNodes = [];

    const typesNode = this.getTypesNode();

    if (typesNode !== null) {
      const typeNodes = typesNode.getTypeNodes();

      superTypeNodes = typeNodes; ///
    }

    return superTypeNodes;
  }

  getTypePrefixName() {
    const typeNode = this.getTypeNode(),
          typePrefixName = typeNode.getTypePrefixName();

    return typePrefixName;
  }

  getPropertyDeclarationNodes() {
    const ruleName = PROPERTY_DECLARATION_RULE_NAME,
          propertyDeclarationNodes = this.getNodesByRuleName(ruleName);

    return propertyDeclarationNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
