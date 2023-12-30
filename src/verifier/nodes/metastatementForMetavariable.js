"use strict";

import NodesVerifier from "../../verifier/nodes";
import MetastatementForMetavariableSubstitution from "../../substitution/metastatementForMetavariable";

import { nodeQuery } from "../../utilities/query";
import { METASTATEMENT_RULE_NAME } from "../../ruleNames";
import { metavariableNameFromMetavariableNode } from "../../utilities/query";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!');

export default class MetastatementForMetavariableNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameMetastatementRuleName = (nonTerminalNodeBRuleName === METASTATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              metastatementNodeB = nonTerminalNodeB,  ///
              metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);

        if (metastatementNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
        }
      } else {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    let metastatementNodeVerified = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead);

      metastatementNodeVerified = metaVariableNodeVerified; ///
    }

    return metastatementNodeVerified;
  }

  verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, localMetaContextB, verifyAhead) {
    let metavariableNodeVerified;

    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === metavariableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const metastatementNode = metastatementNodeB, ///
            metastatementNodeMatches = substitution.matchMetastatementNode(metastatementNode);

      metavariableNodeVerified = metastatementNodeMatches;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const metavariableName = metavariableNameA, ///
              metastatementNode = metastatementNodeB, ///
              metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode),
              substitution = metastatementForMetavariableSubstitution;  ///

        substitutions.push(substitution);
      }

      metavariableNodeVerified = true;
    }

    return metavariableNodeVerified;
  }
}
