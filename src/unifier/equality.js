"use strict";

import Unifier from "../unifier";

import { nodeQuery } from "../utilities/query";
import { findEquivalenceByTermNodes } from "../utilities/equivalences";

const termNodeQuery = nodeQuery("/term");

class EqualityUnifier extends Unifier {
  unify(leftTermNode, rightTermNode, context) {
    let equalityUnified;

    const nonTerminalNodeA = leftTermNode, ///
          nonTerminalNodeB = rightTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context);

    equalityUnified = nonTerminalNodeUnified; ///

    return equalityUnified;
  };

  static maps = [
    {
      generalNodeQuery: termNodeQuery,
      specificNodeQuery: termNodeQuery,
      unify: (termNodeA, termNodeB, context) => {
        let termUnifiedWithTerm;

        const leftTermNode = termNodeA, ///
              rightTermNode = termNodeB,  ///
              leftTermNodeMatchesRightTermNode = leftTermNode.match(rightTermNode);

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
          const nonTerminalNodeA = termNodeA, ///
                nonTerminalNodeB = termNodeB, ///
                nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, context);

          termUnifiedWithTerm = childNodesVerified; ///
        }

        return termUnifiedWithTerm;
      }
    }
  ];
}

const equalityUnifier = new EqualityUnifier();

export default equalityUnifier;
