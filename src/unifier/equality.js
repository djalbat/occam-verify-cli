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
                termNodUnifiedAgainstTermNode =

                  this.unifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, unifyAhead);

          nonTerminalNodUnified = termNodUnifiedAgainstTermNode; ///

          return nonTerminalNodUnified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        unify: (nodeA, nodeB, localContext, unifyAhead) => {
          let nonTerminalNodUnified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodUnified =

            super.unifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

          return nonTerminalNodUnified;
        }
      }
    ];

    const nodesVerified = unify(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, unifyAhead);

    nonTerminalNodUnified = nodesVerified;  ///

    return nonTerminalNodUnified;
  }

  unifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, unifyAhead) {
    let termNodUnifiedAgainstTermNode;

    const termVerifiedAgainstTerm = unifyTermAgainstTerm(termNodeA, termNodeB, localContext, unifyAhead);

    if (termVerifiedAgainstTerm) {
      termNodUnifiedAgainstTermNode = true;
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB, ///
            nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            childNodesA = nonTerminalNodeAChildNodes, ///
            childNodesB = nonTerminalNodeBChildNodes, ///
            childNodesVerified = this.unifyChildNodes(childNodesA, childNodesB, localContext, unifyAhead);

      termNodUnifiedAgainstTermNode = childNodesVerified; ///
    }

    return termNodUnifiedAgainstTermNode;
  }
}

const equalityUnifier = new EqualityUnifier();

export default equalityUnifier;
