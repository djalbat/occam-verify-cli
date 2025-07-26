"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeLabelNode } from "../utilities/node";

export default class ParenthesisedLabelsNode extends NonTerminalNode {
  getLabelNodes() {
    const labelNodes = this.reduceChildNode((labelNodes, childNode) => {
      const childNodeLabelNode = isNodeLabelNode(childNode);

      if (childNodeLabelNode) {
        const labelNode = childNode;  ///

        labelNodes.push(labelNode);
      }

      return labelNodes;
    }, []);

    return labelNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParenthesisedLabelsNode, ruleName, childNodes, opacity, precedence); }
}
