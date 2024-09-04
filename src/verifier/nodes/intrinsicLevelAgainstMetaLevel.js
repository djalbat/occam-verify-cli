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
      metaArgumentStatementNodeQuery = nodeQuery("/metaArgument/statement!"),
      statementMetavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      statementSubstitutionNodeQuery = nodeQuery("/statement/substitution");

class IntrinsicLevelAgainstMetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: statementMetavariableNodeQuery,
        nodeQueryB: metaArgumentStatementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metaArgumentStatementNodeB = nodeB,  ///
                statementMetavariableNodeA = nodeA, ///
                statementSubstitutionNodeA = statementSubstitutionNodeQuery(nonTerminalNodeA),
                statementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode =

                  this.verifyStatementMetavariableNodeAgainstMetaArgumentStatementNode(statementMetavariableNodeA, metaArgumentStatementNodeB, statementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = statementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;  ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: statementMetavariableNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB,  ///
                statementMetavariableNodeA = nodeA, ///
                statementSubstitutionNodeA = statementSubstitutionNodeQuery(nonTerminalNodeA),
                statementMetavariableNodeVerifiedAgainstStatementNode =

                  this.verifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementNodeB, statementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = statementMetavariableNodeVerifiedAgainstStatementNode;  ///

          return nonTerminalNodeVerified;
        }
      },
      {
        nodeQueryA: statementNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB,  ///
                statementNodeA = nodeA, ///
                statementNodeVerifiedAgainstStatementNode =

                  this.verifyStatementNodeAgainstStatementNode(statementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = statementNodeVerifiedAgainstStatementNode;  ///

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

  verifyStatementMetavariableNodeAgainstMetaArgumentStatementNode(statementMetavariableNodeA, metaArgumentStatementNodeB, statementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
    let statementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;

    const statementNodeB = metaArgumentStatementNodeB, ///
          substitutionNode = statementSubstitutionNodeA,  ///
          metavariableNodeA = statementMetavariableNodeA,  ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, verifyAhead)

    statementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode = metavariableVerifiedAgainstStatement; ///

    return statementMetavariableNodeVerifiedAgainstMetaArgumentStatementNode;
  }

  verifyStatementMetavariableNodeAgainstStatementNode(statementMetavariableNodeA, statementNodeB, statementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
    let statementMetavariableNodeVerifiedAgainstStatementNode;

    const substitutionNode = statementSubstitutionNodeA,  ///
          metavariableNodeA = statementMetavariableNodeA,  ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);

    statementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement; ///

    return statementMetavariableNodeVerifiedAgainstStatementNode;
  }

  verifyStatementNodeAgainstStatementNode(statementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let statementNodeVerifiedAgainstStatementNode;

    const nonTerminalNodeA = statementNodeA,  ///
          nonTerminalNodeB = statementNodeB,  ///
          nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          childNodesA = nonTerminalNodeAChildNodes, ///
          childNodesB = nonTerminalNodeBChildNodes, ///
          childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB, verifyAhead);

    statementNodeVerifiedAgainstStatementNode = childNodesVerified; ///

    return statementNodeVerifiedAgainstStatementNode;
  }

  verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termVariableNodeVerifiedAgainstTermNode;

    const variableNodeA = termVariableNodeA, ///
          termVerifiedAgainstVariable = verifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead);

    termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable;  ///

    return termVariableNodeVerifiedAgainstTermNode;
  }
}

const intrinsicLevelAgainstMetaLevelNodesVerifier = new IntrinsicLevelAgainstMetaLevelNodesVerifier();

export default intrinsicLevelAgainstMetaLevelNodesVerifier;
