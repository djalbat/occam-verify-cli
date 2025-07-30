"use strict";

import { arrayUtilities } from "necessary";

import { NonTerminalNode } from "occam-parsers";

import { isNodeTermNode } from "../utilities/node";

const { first } = arrayUtilities;

export default class ArgumentNode extends NonTerminalNode {
  getSingularTermNode() {
    let singularTermNode = null;

    const termNodes = this.filterChildNode((childNode) => {
            const childNodeTermNode = isNodeTermNode(childNode);

            if (childNodeTermNode) {
              return true;
            }
          }),
          termNodesLength = termNodes.length;

      if (termNodesLength === 1) {
        const firstTermNode = first(termNodes);

        singularTermNode = firstTermNode; ///
      }

    return singularTermNode;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return NonTerminalNode.fromRuleNameChildNodesOpacityAndPrecedence(ArgumentNode, ruleName, childNodes, opacity, precedence); }
}
