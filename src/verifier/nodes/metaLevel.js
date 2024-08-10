"use strict";

import NodesVerifier from "../../verifier/nodes";
import metaLevelNodesVerifierMixins from "../../mixins/nodesVerifier/metaLevel";

import { nodeQuery } from "../../utilities/query";
import { METASTATEMENT_RULE_NAME } from "../../ruleNames";

const metavariableNodeQuery = nodeQuery("/metastatement/metavariable!");

class MetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const ruleName = nonTerminalNodeARuleName;  ///

      switch (ruleName) {
        case METASTATEMENT_RULE_NAME: {
          const metastatementNodeA = nonTerminalNodeA,  ///
                metastatementNodeB = nonTerminalNodeB,  ///
                metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementNodeVerified;  ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead) {
    let metastatementNodeVerified;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

      metastatementNodeVerified = metaVariableNodeVerified; ///
    } else {
      const nonTerminalNodeA = metastatementNodeA,  ///
            nonTerminalNodeB = metastatementNodeB, ///
            nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, localContextA, localMetaContextB, verifyAhead);

      metastatementNodeVerified = nonTerminalNodeVerified;  ///
    }

    return metastatementNodeVerified;
  }
}

Object.assign(MetaLevelNodesVerifier.prototype, metaLevelNodesVerifierMixins);

const metaLevelNodesVerifier = new MetaLevelNodesVerifier();

export default metaLevelNodesVerifier;
