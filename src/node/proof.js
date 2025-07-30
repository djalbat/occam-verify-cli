"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeDerivationNode } from "../utilities/node";

export default class ProofNode extends NonTerminalNode {
  getDerivationNode() {
    const derivationNode = this.findChildNode((childNode) => {
      const childNodeDerivationNode = isNodeDerivationNode(childNode);

      if (childNodeDerivationNode) {
        return true;
      }
    });

    return derivationNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ProofNode, ruleName, childNodes, opacity, precedence); }
}
