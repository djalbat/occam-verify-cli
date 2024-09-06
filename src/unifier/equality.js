"use strict";

import Unifier from "../unifier";
import unifyTermAgainstTerm from "../unify/termAgainstTerm";

import { unify } from "../unifier";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/term!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class EqualityUnifier extends Unifier {
  unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead) {
    let nonTerminalNodUnified;

    const nodeQueryMaps = [
      {
        nodeQueryA: termNodeQuery,
        nodeQueryB: termNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodUnified;

          const termNodeA = nodeA,  ///
                termNodeB = nodeB,  ///
                termUnifiedAgainstTerm =

                  this.unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead);

          nonTerminalNodUnified = termUnifiedAgainstTerm; ///

          return nonTerminalNodUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          const unified = super.unify(nodeA, nodeB, localContext, unifyAhead);

          return unified;
        }
      }
    ];

    const unified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    nonTerminalNodUnified = unified;  ///

    return nonTerminalNodUnified;
  }

  unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead) {
    let termUnifiedAgainstTerm;

    const termVerifiedAgainstTerm = unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead);

    if (termVerifiedAgainstTerm) {
      termUnifiedAgainstTerm = true;
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB, ///
            nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            childNodesA = nonTerminalNodeAChildNodes, ///
            childNodesB = nonTerminalNodeBChildNodes, ///
            childNodesVerified = this.unifyChildNodes(childNodesA, childNodesB, localContext, unifyAhead);

      termUnifiedAgainstTerm = childNodesVerified; ///
    }

    return termUnifiedAgainstTerm;
  }
}

const equalityUnifier = new EqualityUnifier();

export default equalityUnifier;
