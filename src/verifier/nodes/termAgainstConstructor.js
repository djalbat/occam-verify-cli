"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyTermAgainstType from "../../verify/termAgainstType";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!");

class TermAgainstConstructorNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: termNodeQuery,
        nodeQueryB: typeNodeQuery,
        verifyNodes: (nodeA, nodeB, localContext, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNodeA = nodeA,  ///
                typeNodeB = nodeB,  ///
                termNodeVerifiedAgainstTypeNode =

                  this.verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead);

          nonTerminalNodeVerified = termNodeVerifiedAgainstTypeNode;  ///

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

  verifyTermNodeAgainstTypeNode(termNodeA, typeNodeB, localContext, verifyAhead) {
    let termNodeVerifiedAgainstTypeNode;

    const { verifyTerm } = termAgainstConstructorNodesVerifier,
          termNode = termNodeA, ///
          typeNode = typeNodeB, ///
          typeVerifiedAgainstTerm = verifyTermAgainstType(termNode, typeNode, localContext, verifyAhead, verifyTerm);

    termNodeVerifiedAgainstTypeNode = typeVerifiedAgainstTerm; ///

    return termNodeVerifiedAgainstTypeNode;
  }
}

const termAgainstConstructorNodesVerifier = new TermAgainstConstructorNodesVerifier();

export default termAgainstConstructorNodesVerifier;
