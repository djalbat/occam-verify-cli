"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyVariableAgainstTerm from "../../verify/variableAgainstTerm";
import intrinsicLevelNodesVerifier from "../../verifier/nodes/intrinsicLevel";
import verifyMetavariableAgainstStatement from "../../verify/metavariableAgainstStatement";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const termNodeQuery = nodeQuery("/term!"),
      statementNodeQuery = nodeQuery("/statement!"),
      termVariableNodeQuery = nodeQuery("/term/variable!"),
      metastatementNodeQuery = nodeQuery("/metastatement!"),
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
                metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode;  ///

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
        nodeQueryA: metastatementMetavariableNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB,  ///
                metastatementMetavariableNodeA = nodeA, ///
                metastatementSubstitutionNodeA = metastatementSubstitutionNodeQuery(nonTerminalNodeA),
                metastatementMetavariableNodeVerifiedAgainstStatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstStatementNode;  ///

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
        nodeQueryA: metastatementNodeQuery,
        nodeQueryB: statementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB,  ///
                metastatementNodeA = nodeA, ///
                metastatementNodeVerifiedAgainstStatementNode =

                  this.verifyMetastatementNodeAgainstStatementNode(metastatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementNodeVerifiedAgainstStatementNode;  ///

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
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    nonTerminalNodeVerified = nodesVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyMetastatementMetavariableNodeAgainstMetastatementStatementNode(metastatementMetavariableNodeA, metastatementStatementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode;

    const statementNode = metastatementStatementNodeB, ///
          metavariableNode = metastatementMetavariableNodeA,  ///
          substitutionNode = metastatementSubstitutionNodeA,  ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead)

    metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode = metavariableVerifiedAgainstStatement; ///

    return metastatementMetavariableNodeVerifiedAgainstMetastatementStatementNode;
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

  verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, metastatementSubstitutionNodeA, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementMetavariableNodeVerifiedAgainstStatementNode;

    const statementNode = statementNodeB, ///
          metavariableNode = metastatementMetavariableNodeA,  ///
          substitutionNode = metastatementSubstitutionNodeA,  ///
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead)

    metastatementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement; ///

    return metastatementMetavariableNodeVerifiedAgainstStatementNode;
  }

  verifyMetastatementStatementNodeAgainstStatementNode(metastatementStatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementStatementNodeVerifiedAgainstStatementNode;

    const nonTerminalNodeA = metastatementStatementNodeA, ///
          nonTerminalNodeB = statementNodeB,  ///
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localContextB, verifyAhead);

    metastatementStatementNodeVerifiedAgainstStatementNode = nonTerminalNodeVerified; ///

    return metastatementStatementNodeVerifiedAgainstStatementNode;
  }

  verifyMetastatementNodeAgainstStatementNode(metastatementNodeA, statementNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let metastatementNodeVerifiedAgainstStatementNode;

    const nonTerminalNodeA = metastatementNodeA,  ///
          nonTerminalNodeB = statementNodeB,  ///
          nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          childNodesA = nonTerminalNodeAChildNodes, ///
          childNodesB = nonTerminalNodeBChildNodes, ///
          childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, substitutions, localContextA, localContextB, verifyAhead);

    metastatementNodeVerifiedAgainstStatementNode = childNodesVerified; ///

    return metastatementNodeVerifiedAgainstStatementNode;
  }

  verifyTermVariableNodeAgainstTermNode(termVariableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
    let termVariableNodeVerifiedAgainstTermNode;

    const termNode = termNodeB, ///
          variableNode = termVariableNodeA, ///
          termVerifiedAgainstVariable = verifyVariableAgainstTerm(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead);

    termVariableNodeVerifiedAgainstTermNode = termVerifiedAgainstVariable;  ///

    return termVariableNodeVerifiedAgainstTermNode;
  }
}

const intrinsicLevelAgainstMetaLevelNodesVerifier = new IntrinsicLevelAgainstMetaLevelNodesVerifier();

export default intrinsicLevelAgainstMetaLevelNodesVerifier;
