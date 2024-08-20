"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyVariableAgainstTerm from "../../verify/variableAgainstTerm";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!"),
      termVariableNodeQuery = nodeQuery("/term/variable!");

class IntrinsicLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: termVariableNodeQuery,
        nodeQueryB: termNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const termNodeB = nodeB,  ///
                termVariableNodeA = nodeA,  ///
                termVariableNodeVerifiedAgainstTermNode =

                  this.verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = termVariableNodeVerifiedAgainstTermNode;  ///

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    nonTerminalNodeVerified = nodesVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termVariableNodeVerifiedAgainstTermNode;

    const termNode = termNodeB, ///
          variableNode = termVariableNodeA, ///
          variableVerifiedAgainstTerm = verifyVariableAgainstTerm(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead);

    termVariableNodeVerifiedAgainstTermNode = variableVerifiedAgainstTerm;  ///

    return termVariableNodeVerifiedAgainstTermNode;
  }
}

const intrinsicLevelNodesVerifier = new IntrinsicLevelNodesVerifier();

export default intrinsicLevelNodesVerifier;
