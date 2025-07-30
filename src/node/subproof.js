"use strict";

import NonTerminalNode from "../node/nonTerminal";

import { isNodeSuppositionNode, isNodeSubDerivationNode } from "../utilities/node";

export default class SubproofNode extends NonTerminalNode {
  isStepNode() {
    const stepNode = false;

    return stepNode;
  }

  isSubproofNode() {
    const subproofNode = true;

    return subproofNode;
  }

  getSubDerivationNode() {
    const subDerivationNode = this.findChildNode((childNode) => {
      const childNodeSubDerivationNode = isNodeSubDerivationNode(childNode);

      if (childNodeSubDerivationNode) {
        return true;
      }
    }) || null;

    return subDerivationNode;
  }

  getSuppositionNodes() {
    const suppositionNodes = this.filterChildNode((childNode) => {
      const childNodeSuppositionNode = isNodeSuppositionNode(childNode);

      if (childNodeSuppositionNode) {
        return true;
      }
    });

    return suppositionNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(SubproofNode, ruleName, childNodes, opacity, precedence); }
}
