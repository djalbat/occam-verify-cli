"use strict";

import NonTerminalNode from "../../node/nonTerminal";

import { PROVISIONAL } from "../../constants";
import { TYPE_RULE_NAME, TYPES_RULE_NAME } from "../../ruleNames";

export default class SimpleTypeDeclarationNode extends NonTerminalNode {
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

  getTypeName() {
    let typeName = null;

    const typeNode = this.getTypeNode();

    if (typeNode !== null) {
      typeName = typeNode.getTypeName();
    }

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

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SimpleTypeDeclarationNode, ruleName, childNodes, opacity, precedence); }
}

