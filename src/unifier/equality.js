"use strict";

import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { findEquivalenceByTermNodes } from "../utilities/equivalences";

const termNodeQuery = nodeQuery("/term");

class EqualityUnifier extends Unifier {
  unify(leftTermNode, rightTermNode, context) {
    let equalityUnified;

    const leftNonTerminalNode = leftTermNode, ///
          rightNonTerminalNode = rightTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(leftNonTerminalNode, rightNonTerminalNode, context);

    equalityUnified = nonTerminalNodeUnified; ///

    return equalityUnified;
  };

  static maps = [
    {
      generalNodeQuery: termNodeQuery,  ///
      specificNodeQuery: termNodeQuery, ///
      unify: (leftTermNode, rightTermNode, context) => {
        let termUnifiedWithTerm;

        const leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

        if (leftTermNodeMatchesRightTermNode) {
          termUnifiedWithTerm = true;
        } else {
          const equivalences = context.getEquivalences(),
                termNodes = [
                  leftTermNode,
                  rightTermNode
                ],
                equivalence = findEquivalenceByTermNodes(equivalences, termNodes);

          termUnifiedWithTerm = (equivalence !== null);
        }

        if (!termUnifiedWithTerm) {
          const leftNonTerminalNode = leftTermNode, ///
                rightNonTerminalNode = rightTermNode, ///
                leftNonTerminalNodeChildNodes = leftNonTerminalNode.getChildNodes(),
                rightNonTerminalNodeChildNodes = rightNonTerminalNode.getChildNodes(),
                leftChildNodes = leftNonTerminalNodeChildNodes, ///
                rightChildNodes = rightNonTerminalNodeChildNodes, ///
                childNodesVerified = equalityUnifier.unifyChildNodes(leftChildNodes, rightChildNodes, context);

          termUnifiedWithTerm = childNodesVerified; ///
        }

        return termUnifiedWithTerm;
      }
    }
  ];
}

const equalityUnifier = new EqualityUnifier();

export default equalityUnifier;
