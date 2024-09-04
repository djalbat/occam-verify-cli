"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyVariableAgainstTerm from "../../verify/variableAgainstTerm";
import verifyMetavariableAgainstStatement from "../../verify/metavariableAgainstStatement";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!"),
      nonTerminalNodeQuery = nodeQuery("/*"),
      statementNodeQuery = nodeQuery("/statement!"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!");

class MetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: statementMetavariableNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB, ///
                statementMetavariableNodeA = nodeA, ///
                statementMetavariableNodeVerifiedAgainstStatementNode =

                  this.verifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);

          nonTerminalNodeVerified = statementMetavariableNodeVerifiedAgainstStatementNode;  ///

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
        verifyNodes: (nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const nonTerminalNodeA = nodeA, ///
                nonTerminalNodeB = nodeB; ///

          nonTerminalNodeVerified =

            super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);

    nonTerminalNodeVerified = nodesVerified;  ///

    return nonTerminalNodeVerified;
  }

  verifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
    let statementMetavariableNodeVerifiedAgainstStatementNode;

    const metavariableNode = statementMetavariableNodeA, ///
          statementNode = statementNodeB, ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutions, verifyAhead);

    statementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement;  ///

    return statementMetavariableNodeVerifiedAgainstStatementNode;
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
