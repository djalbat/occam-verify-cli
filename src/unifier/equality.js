"use strict";

import Unifier from "../unifier";
import unifyTermAgainstTerm from "../unify/termAgainstTerm";

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
        let termVerifiedAgainstTerm;

        const leftTermNode = termNodeA, ///
              rightTermNode = termNodeB;  ///

        termVerifiedAgainstTerm = unifyTermAgainstTerm(leftTermNode, rightTermNode, localContext);

        if (!termVerifiedAgainstTerm) {
          const nonTerminalNodeA = termNodeA, ///
                nonTerminalNodeB = termNodeB, ///
                nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = equalityUnifier.unifyChildNodes(childNodesA, childNodesB, localContext);

          termVerifiedAgainstTerm = childNodesVerified; ///
        }

        return termVerifiedAgainstTerm;
      }
    }
  ];
}

const equalityUnifier = new EqualityUnifier();

export default equalityUnifier;
