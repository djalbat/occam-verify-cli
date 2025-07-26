"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode, isNodeVariableNode } from "../utilities/node";

const { first } = arrayUtilities;

export default class TermNode extends NonTerminalNode {
  getSingularTermNode() {
    let singularTermNode = null;

    const termNodes = this.reduceChildNode((termNodes, childNode) => {
            const childNodeTermNode = isNodeTermNode(childNode);

            if (!childNodeTermNode) {
              const singularTermNode = childNode; ///

              termNodes.push(singularTermNode);
            }

            return termNodes;
          }, []),
          termNodesLength = termNodes.length;

    if (termNodesLength === 1) {
      const firstTermNode = first(termNodes);

      singularTermNode = firstTermNode; ///
    }

    return singularTermNode;
  }

  getSingularVariableNode() {
    let singularVariableNode = null;

    const variableNodes = this.reduceChildNode((variableNodes, childNode) => {
            const childNodeVariableNode = isNodeVariableNode(childNode);

            if (!childNodeVariableNode) {
              const singularVariableNode = childNode; ///

              variableNodes.push(singularVariableNode);
            }

            return variableNodes;
          }, []),
          variableNodesLength = variableNodes.length;

    if (variableNodesLength === 1) {
      const firstVariableNode = first(variableNodes);

      singularVariableNode = firstVariableNode; ///
    }

    return singularVariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(TermNode, ruleName, childNodes, opacity, precedence); }
}
