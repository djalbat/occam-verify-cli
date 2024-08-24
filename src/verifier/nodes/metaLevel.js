"use strict";

import NodesVerifier from "../../verifier/nodes";
import verifyMetavariableAgainstMetastatement from "../../verify/metavariableAgainstMetastatement";

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

          const metastatementNodeB = nodeB, ///
                metastatementMetavariableNodeA = nodeA, ///
                metastatementMetavariableNodeVerifiedAgainstMetastatementNode =

                  this.verifyMetastatementMetavariableNodeAgainstMetastatementNode(metastatementMetavariableNodeA, metastatementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementMetavariableNodeVerifiedAgainstMetastatementNode;  ///

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

  verifyMetastatementMetavariableNodeAgainstMetastatementNode(metastatementMetavariableNodeA, metastatementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
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
