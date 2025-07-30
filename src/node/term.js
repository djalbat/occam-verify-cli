"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode, isNodeVariableNode, isNodeArgumentNode } from "../utilities/node";

const { first } = arrayUtilities;

export default class TermNode extends NonTerminalNode {
  getVariableNodes() {
    const variableNodes = this.filterDescendantNode((descendantNode) => {
      const descendantNodeVariableNode = isNodeVariableNode(descendantNode);

      if (descendantNodeVariableNode) {
        return true;
      }
    });

    return variableNodes;
  }

  getSingularArgumentNode() {
    let singularArgumentNode = null;

    const argumentNodes = this.filterChildNode((childNode) => {
            const childNodeArgumentNode = isNodeArgumentNode(childNode);

            if (childNodeArgumentNode) {
              return true;
            }
          }),
          argumentNodesLength = argumentNodes.length;

    if (argumentNodesLength === 1) {
      const firstArgumentNode = first(argumentNodes);

      singularArgumentNode = firstArgumentNode; ///
    }

    return singularArgumentNode;
  }

  getSingularTermNode() {
    let singularTermNode = null;

    const singularArgumentNode = this.getSingularArgumentNode();

    if (singularArgumentNode !== null) {
      singularTermNode = singularArgumentNode.getSingularTermNode();
    }

    return singularTermNode;
  }

  getSingularVariableNode() {
    let singularVariableNode = null;

    const variableNodes = this.filterChildNode((childNode) => {
            const childNodeVariableNode = isNodeVariableNode(childNode);

            if (childNodeVariableNode) {
              return true;
            }
          }),
          variableNodesLength = variableNodes.length;

    if (variableNodesLength === 1) {
      const firstVariableNode = first(variableNodes);

      singularVariableNode = firstVariableNode; ///
    }

    return singularVariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence); }
}
