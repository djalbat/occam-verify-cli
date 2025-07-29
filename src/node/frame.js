"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

import { isNodeDeclarationNode, isNodeMetavariableNode } from "../utilities/node";

const { first } = arrayUtilities;

export default class FrameNode extends NonTerminalNode {
  getDeclarationNodes() {
    const declarationNodes = this.filterChildNode((childNode) => {
      const childNodeDeclarationNode = isNodeDeclarationNode(childNode);

      if (childNodeDeclarationNode) {
        return true;
      }
    });

    return declarationNodes;
  }

  getMetavariableNodes() {
    const metavariableNodes = this.filterChildNode((childNode) => {
      const childNodeMetavariableNode = isNodeMetavariableNode(childNode);

      if (childNodeMetavariableNode) {
        return true;
      }
    });

    return metavariableNodes;
  }

  getSingularMetavariableNode() {
    let singularMetavariableNode = null;

    const metavariableNodes = this.filterChildNode((childNode) => {
            const childNodeMetavariableNode = isNodeMetavariableNode(childNode);

            if (childNodeMetavariableNode) {
              return true;
            }
          }),
          metavariableNodesLength = metavariableNodes.length;

    if (metavariableNodesLength === 1) {
      const firstMetavariableNode = first(metavariableNodes);

      singularMetavariableNode = firstMetavariableNode; ///
    }

    return singularMetavariableNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(FrameNode, ruleName, childNodes, opacity, precedence); }
}
