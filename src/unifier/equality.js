"use strict";

import Unifier from "../unifier";
import unifyTermWithTerm from "../unify/termWithTerm";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!");

class EqualityUnifier extends Unifier {
  unify(leftTermNode, rightTermNode, localContext) {
    let equalityUnified;

    const nonTerminalNodeA = leftTermNode, ///
          nonTerminalNodeB = rightTermNode, ///
          nonTerminalNodeUnified = this.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext);

    equalityUnified = nonTerminalNodeUnified; ///

    return equalityUnified;
  };

  static maps = [
    {
      nodeQueryA: termNodeQuery,
      nodeQueryB: termNodeQuery,
      unify: (termNodeA, termNodeB, localContext) => {
        let termUnifiedWithTerm;

        const leftTermNode = termNodeA, ///
              rightTermNode = termNodeB;  ///

        termUnifiedWithTerm = unifyTermWithTerm(leftTermNode, rightTermNode, localContext);

        if (!termUnifiedWithTerm) {
          const nonTerminalNodeA = termNodeA, ///
                nonTerminalNodeB = termNodeB, ///
                nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, localContext);

          termUnifiedWithTerm = childNodesVerified; ///
        }

        return termUnifiedWithTerm;
      }
    }
  ];
}

const equalityUnifier = new EqualityUnifier();

export default equalityUnifier;
