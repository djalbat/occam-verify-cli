"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyMetavariableAgainstMetastatement from "../../verify/metavariableAgainstMetastatement";

import { nodeQuery } from "../../utilities/query";
import { verifyNodes } from "../../utilities/verifier";

const nonTerminalNodeQuery = nodeQuery("/*"),
      metastatementNodeQuery = nodeQuery("/metastatement!"),
      metastatementMetavariableNodeQuery = nodeQuery("/metastatement/metavariable!");

class MetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
    let nonTerminalNodeVerified;

    const nodeQueryMaps = [
      {
        nodeQueryA: metastatementMetavariableNodeQuery,
        nodeQueryB: metastatementNodeQuery,
        verifyNodes: (nodeA, nodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) => {
          let nonTerminalNodeVerified;

          const metastatementNodeB = nodeB, ///
                metastatementMetavariableNodeA = nodeA, ///
                metastatementMetavariableNodeVerifiedAgainstMetastatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstMetastatementNode(metastatementMetavariableNodeA, metastatementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetastatementNode;  ///

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

  verifyMetastatementMetavariableNodeAgainstMetastatementNode(metastatementMetavariableNodeA, metastatementNodeB, substitutions, localMetaContextA, localMetaContextB, verifyAhead) {
    let metastatementMetavariableNodeVerifiedAgainstMetastatementNode;

    const metavariableNode = metastatementMetavariableNodeA, ///
          metastatementNode = metastatementNodeB, ///
          metavariableVerifiedAgainstMetastatement = verifyMetavariableAgainstMetastatement(metavariableNode, metastatementNode, substitutions, verifyAhead);

    metastatementMetavariableNodeVerifiedAgainstMetastatementNode = metavariableVerifiedAgainstMetastatement;  ///

    return metastatementMetavariableNodeVerifiedAgainstMetastatementNode;
  }
}

const metaLevelNodesVerifier = new MetaLevelNodesVerifier();

export default metaLevelNodesVerifier;
