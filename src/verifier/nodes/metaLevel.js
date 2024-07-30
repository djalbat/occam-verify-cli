"use strict";

import NodesVerifier from "../../verifier/nodes";
import MetastatementForMetavariableSubstitution from "../../substitution/metastatementForMetavariable";

import { nodeQuery } from "../../utilities/query";
import { METASTATEMENT_RULE_NAME } from "../../ruleNames";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!');

class MetaLevelNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      const ruleName = nonTerminalNodeARuleName;  ///

      switch (ruleName) {
        case METASTATEMENT_RULE_NAME: {
          const metastatementNodeA = nonTerminalNodeA,  ///
                metastatementNodeB = nonTerminalNodeB,  ///
                metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);

          nonTerminalNodeVerified = metastatementNodeVerified;  ///

          break;
        }

        default: {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    let metastatementNodeVerified;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);

      metastatementNodeVerified = metaVariableNodeVerified; ///
    } else {
      const nonTerminalNodeA = metastatementNodeA,  ///
            nonTerminalNodeB = metastatementNodeB, ///
            nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);

      metastatementNodeVerified = nonTerminalNodeVerified;  ///
    }

    return metastatementNodeVerified;
  }

  verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    let metavariableNodeVerified;

    const substitution = substitutions.find((substitution) => {
            const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

            if (substitutionMatchesMetavariableNodeA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const metastatementNode = metastatementNodeB, ///
            metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);

      metavariableNodeVerified = metastatementNodeMatches;  ///
    } else {
      const metavariableNode = metavariableNodeA, ///
            metastatementNode = metastatementNodeB, ///
            metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode),
            substitution = metastatementForMetavariableSubstitution;  ///

      substitutions.push(substitution);

      metavariableNodeVerified = true;
    }

    return metavariableNodeVerified;
  }
}

const metaLevelNodesVerifier = new MetaLevelNodesVerifier();

export default metaLevelNodesVerifier;
