"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeLabelNode } from "../utilities/node";

export default class LabelsNode extends NonTerminalNode {
  getLabelNodes() {
    const labelNodes = this.filterChildNode((childNode) => {
      const childNodeLabelNode = isNodeLabelNode(childNode);

      if (childNodeLabelNode) {
        return true;
      }
    });

    return labelNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(LabelsNode, ruleName, childNodes, opacity, precedence); }
}
