"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeLabelsNode } from "../utilities/node";

export default class ParenthesisedLabelsNode extends NonTerminalNode {
  getLabelNodes() {
    const labelsNode = this.getLabelsNode(),
           labelNodes = labelsNode.getLabelNodes();

    return labelNodes;
  }

  getLabelsNode() {
    const labelsNode = this.findChildNode((childNode) => {
      const childNodeLabelsNode = isNodeLabelsNode(childNode);

      if (childNodeLabelsNode) {
        return true;
      }
    }) || null;

    return labelsNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ParenthesisedLabelsNode, ruleName, childNodes, opacity, precedence); }
}
