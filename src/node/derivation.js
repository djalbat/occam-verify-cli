"use strict";

import { NonTerminalNode } from "occam-parsers";

import { isNodeStepNode, isNodeSubproofNode } from "../utilities/node";

export default class DerivationNode extends NonTerminalNode {
  getStepOrSubproofNodes() {
    const stepOrSubproofNodes = this.reduceChildNode((stepOrSubproofNodes, childNode) => {
      const childNodeStepNode = isNodeStepNode(childNode),
            childNodeSubproofNode = isNodeSubproofNode(childNode);

      if (childNodeStepNode || childNodeSubproofNode) {
        const stepOrSubproofNode = childNode; ///

        stepOrSubproofNodes.push(stepOrSubproofNode);
      }

      return stepOrSubproofNodes;
    }, []);

    return stepOrSubproofNodes;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(DerivationNode, ruleName, childNodes, opacity, precedence); }
}
