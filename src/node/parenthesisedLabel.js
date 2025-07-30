"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeLabelNode } from "../utilities/node";

export default class ParenthesisedLabelNode extends NonTerminalNode {
  getLabelNode() {
    const labelNode = this.findChildNode((childNode) => {
      const childNodeLabelNode = isNodeLabelNode(childNode);

      if (childNodeLabelNode) {
        return true;
      }
    }) || null;

    return labelNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParenthesisedLabelNode, ruleName, childNodes, opacity, precedence); }
}
