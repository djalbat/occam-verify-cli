"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyVariableAgainstTerm from "../../verify/variableAgainstTerm";
import verifyMetavariableAgainstStatement from "../../verify/metavariableAgainstStatement";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!"),
      nonTerminalNodeQuery = nodeQuery("/*"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      metavariableNodeQuery = nodeQuery("/metavariable!");

class MetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: metavariableNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB, ///
                metavariableNodeA = nodeA, ///
                metavariableNodeVerifiedAgainstStatementNode =

                  this.verifyMetavariableNodeAgainstStatementNode(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metavariableNodeVerifiedAgainstStatementNode;  ///

          return nonTerminalNodeVerified;
        }
      },
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
      },
      {
        nodeQueryA: nonTerminalNodeQuery,
        nodeQueryB: nonTerminalNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodeVerified =

            super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    nonTerminalNodeVerified = nodesVerified;  ///

    return nonTerminalNodeVerified;
  }

  verifyMetavariableNodeAgainstStatementNode(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let metavariableNodeVerifiedAgainstStatementNode;

    const substitutionNode = null,
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);

    metavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement;  ///

    return metavariableNodeVerifiedAgainstStatementNode;
  }

  verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termVariableNodeVerifiedAgainstTermNode;

    const variableNodeA = termVariableNodeA, ///
          termVerifiedAgainstVariable = verifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

    termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable;  ///

    return termVariableNodeVerifiedAgainstTermNode;
  }
}

const metaLevelNodesVerifier = new MetaLevelNodesVerifier();

export default metaLevelNodesVerifier;
