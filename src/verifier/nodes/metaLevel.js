"use strict";

import LocalContext from "../../context/local";
import NodesVerifier from "../../verifier/nodes";
import verifyMetavariableAgainstStatement from "../../verify/metavariableAgainstStatement";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const metastatementNodeQuery = nodeQuery("/metastatement!"),
      metastatementMetavariableNodeQuery = nodeQuery("/metastatement/metavariable!");

class MetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: metastatementMetavariableNodeQuery,
        nodeQueryB: metastatementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localContextA, localMetaContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const statementNodeB = nodeB, ///
                metastatementMetavariableNodeA = nodeA, ///
                metastatementMetavariableNodeVerifiedAgainstStatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstStatementNode;  ///

          return nonTerminalNodeVerified;
        }
      }
    ];

    const nodesVerified = verifyNodes(nodeQueryMaps, nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

    nonTerminalNodeVerified = nodesVerified ?
                                true :
                                  super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

    return nonTerminalNodeVerified;
  }

  verifyMetastatementMetavariableNodeAgainstStatementNode(metastatementMetavariableNodeA, statementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
    let metastatementMetavariableNodeVerifiedAgainstStatementNode;

    const localContextB = LocalContext.fromLocalMetaContext(localMetaContextB),
          statementNode = statementNodeB, ///
          metavariableNode = metastatementMetavariableNodeA, ///
          substitutionNode = null,
          metavariableVerifiedAgainstStatement = verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead);

    metastatementMetavariableNodeVerifiedAgainstStatementNode = metavariableVerifiedAgainstStatement;  ///

    return metastatementMetavariableNodeVerifiedAgainstStatementNode;
  }
}

const metaLevelNodesVerifier = new MetaLevelNodesVerifier();

export default metaLevelNodesVerifier;
