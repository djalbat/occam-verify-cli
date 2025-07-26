"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeDeclarationNode } from "../utilities/node";

export default class JudgementNode extends NonTerminalNode {
  getDeclarationNode() {
    const declarationNode = this.findChildNode((childNode) => {
      const childNodeDeclarationNOde = isNodeDeclarationNode(childNode);

      if (childNodeDeclarationNOde) {
        return true;
      }
    }) || null;

    return declarationNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(JudgementNode, ruleName, childNodes, opacity, precedence); }
}
