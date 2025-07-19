"use strict";

import Node from "../../node";

import { PROVISIONAL } from "../../constants";
import { TYPE_RULE_NAME } from "../../ruleNames";

export default class TypeDeclarationNode extends Node {
  isProvisional() {
    const provisional = this.fromFirstChildNode((firstChildNode) => {
      const terminalNode = firstChildNode,  ///
            content = terminalNode.getContent(),
            contentProvisional = (content === PROVISIONAL),
            provisional = contentProvisional; ///

      return provisional;
    });

    return provisional;
  }

  getTypeName() {
    let typeName;

    this.someChildNode((childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        const typeNode = childNode;  ///

        typeName = typeNode.getName();

        return true;
      }
    });

    return typeName;
  }

  getSuperTypeNodes() {
    const typeNodes = this.reduceChildNode((typeNodes, childNode) => {
      const childNodeTypeNode = isNodeTypeNode(childNode);

      if (childNodeTypeNode) {
        const typeNode = childNode;  ///

        typeNodes.push(typeNode);
      }

      return typeNodes;
    }, []);

    typeNodes.pop();

    const superTypeNodes = typeNodes; ///

    return superTypeNodes;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return Node.fromRuleNameChildNodesAndOpacity(TypeDeclarationNode, ruleName, childNodes, opacity); }
}

function isNodeTypeNode(node) {
  let nodeTypeNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          ruleName = nonTerminalNode.getRuleName(),
          ruleNameTypeRuleName = (ruleName === TYPE_RULE_NAME);

    if (ruleNameTypeRuleName) {
      nodeTypeNode = true;
    }
  }

  return nodeTypeNode;
}
