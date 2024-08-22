"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyTermAgainstTerm from "../../verify/termAgainstTerm";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!");

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
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    nonTerminalNodeVerified = nodesVerified ?
                                 true :
                                   super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyTermNodeAgainstTermNode(termNodeA, termNodeB, localContext, verifyAhead) {
    let termNodeVerifiedAgainstTermNode;

    const termVerifiedAgainstTerm = verifyTermAgainstTerm(termNodeA, termNodeB, localContext, verifyAhead);

    termNodeVerifiedAgainstTermNode = termVerifiedAgainstTerm;  ///

    return termNodeVerifiedAgainstTermNode;
  }
}

const equalityNodesVerifier = new EqualityNodesVerifier();

export default equalityNodesVerifier;
