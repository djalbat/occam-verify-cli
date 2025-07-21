"use strict";

import Node from "../../node";

import { PROVISIONALLY } from "../../constants";

export default class ConstructorDeclarationNode extends Node {
  getTermNode() {
    const termNode = this.fromSecondChildNode((secondChildNode) => {
      const termNode = secondChildNode; ///

      return termNode;
    });

    return termNode;
  }

  getTypeNode() {
    const typeNode = this.fromFourthChildNode((fourthChildNode) => {
      const typeNode = fourthChildNode; ///

      return typeNode;
    }) || null;

    return typeNode;
  }

  isProvisional() {
    const provisional = this.fromSecondLastChildNode((secondLastChildNode) => {
      let provisional = false;

      const secondLastChildNodeTerminalNode = secondLastChildNode.isTerminalNode();

      if (secondLastChildNodeTerminalNode) {
        const terminalNode = secondLastChildNode, ///
              content = terminalNode.getContent(),
              contentProvisionally = (content === PROVISIONALLY);

        if (contentProvisionally) {
          provisional = true;
        }
      }

      return provisional;
    });

    return provisional;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return Node.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorDeclarationNode, ruleName, childNodes, opacity, precedence); }
}
