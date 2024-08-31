"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyTermAgainstTerm from "../../verify/termAgainstTerm";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!"),
      nonTerminalNodeQuery = nodeQuery("/*");

class EqualityNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: termNodeQuery,
        nodeQueryB: termNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNodeA = nodeA,  ///
                termNodeB = nodeB,  ///
                termNodeVerifiedAgainstTermNode =

                  this.verifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = termNodeVerifiedAgainstTermNode; ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodeVerified =

            super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    nonTerminalNodeVerified = nodesVerified;  ///

    return nonTerminalNodeVerified;
  }

  verifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, verifyAhead) {
    let termNodeVerifiedAgainstTermNode;

    const termVerifiedAgainstTerm = verifyTermAgainstTerm(termNodeA, termNodeB, localContext, verifyAhead);

    if (termVerifiedAgainstTerm) {
      termNodeVerifiedAgainstTermNode = true;
    } else {
      const nonTerminalNodeA = termNodeA, ///
            nonTerminalNodeB = termNodeB, ///
            nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
            nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
            childNodesA = nonTerminalNodeAChildNodes, ///
            childNodesB = nonTerminalNodeBChildNodes, ///
            childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, localContext, verifyAhead);

      termNodeVerifiedAgainstTermNode = childNodesVerified; ///
    }

    return termNodeVerifiedAgainstTermNode;
  }
}

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
