"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyVariableAgainstTerm from "../../verify/variableAgainstTerm";
import verifyMetavariableAgainstStatement from "../../verify/metavariableAgainstStatement";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      metaArgumentStatementNodeQuery = nodeQuery("/metaArgument/statement!"),
      metastatementStatementNodeQuery = nodeQuery("/metastatement/statement!"),
      metastatementMetavariableNodeQuery = nodeQuery("/metastatement/metavariable!"),
      metastatementSubstitutionNodeQuery = nodeQuery("/metastatement/substitution");

class IntrinsicLevelAgainstMetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: metastatementMetavariableNodeQuery,
        nodeQueryB: metastatementStatementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metastatementStatementNodeB = nodeB,  ///
                metastatementMetavariableNodeA = nodeA, ///
                metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA),
                metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;  ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: metastatementMetavariableNodeQuery,
        nodeQueryB: metaArgumentStatementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metaArgumentStatementNodeB = nodeB,  ///
                metastatementMetavariableNodeA = nodeA, ///
                metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA),
                metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstMetaArgumentStatementNode(metastatementMetavariableNodeA, metaArgumentStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;  ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: metastatementStatementNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB, ///
                metastatementStatementNodeA = nodeA,  ///
                metastatementStatementNodeVerifiedAgainstStatementNode =

                  this.verifyMetastatementStatementNodeAgainstStatementNode(metastatementStatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementStatementNodeVerifiedAgainstStatementNode; ///

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
                variableNodeVerifiedAgainstTermNode =

                  this.verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = variableNodeVerifiedAgainstTermNode; ///

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

  verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;

    const statementNode = metastatementStatementNodeB, ///
          metavariableNode = metastatementMetavariableNodeA,  ///
          substitutionNode = metastatementSubstitutionNodeA,  ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead)

    metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = metavariableVerifiedAgainstStatement; ///

    return metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
  }

  verifyMetastatementMetavariableNodeAgainstMetaArgumentStatementNode(metastatementMetavariableNodeA, metaArgumentStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;

    const statementNode = metaArgumentStatementNodeB, ///
          metavariableNode = metastatementMetavariableNodeA,  ///
          substitutionNode = metastatementSubstitutionNodeA,  ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead)

    metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = metavariableVerifiedAgainstStatement; ///

    return metastatementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
  }

  verifyMetastatementStatementNodeAgainstStatementNode(metastatementStatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementStatementNodeVerifiedAgainstStatementNode;

    const nonTerminalNodeA = metastatementStatementNodeA, ///
          nonTerminalNodeB = statementNodeB,  ///
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    metastatementStatementNodeVerifiedAgainstStatementNode = nonTerminalNodeVerified; ///

    return metastatementStatementNodeVerifiedAgainstStatementNode;
  }

  verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let variableNodeVerifiedAgainstTermNode;

    const termNode = termNodeB, ///
          variableNode = termVariableNodeA, ///
          variableVerifiedAgainstTerm = verifyVariableAgainstTerm(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead);

    variableNodeVerifiedAgainstTermNode = variableVerifiedAgainstTerm;  ///

    return variableNodeVerifiedAgainstTermNode;
  }
}

const intrinsicLevelAgainstMetaLevelNodesVerifier = new IntrinsicLevelAgainstMetaLevelNodesVerifier();

export default intrinsicLevelAgainstMetaLevelNodesVerifier;
