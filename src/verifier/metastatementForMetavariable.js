"use strict";

import Verifier from "../verifier";
import MetastatementForMetavariableSubstitution from "../substitution/metastatementForMetavariable";

import { nodeQuery } from "../utilities/query";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { metavariableNameFromMetavariableNode } from "../utilities/query";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!');

export default class MetastatementForMetavariableVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameMetastatementRuleName = (nonTerminalNodeBRuleName === METASTATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              metastatementNodeB = nonTerminalNodeB,  ///
              metastatementNodeVerified = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB);

        if (metastatementNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB);
        }
      } else {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, metaproofContextB);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB) {
    let metastatementNodeVerified = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metaVariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB);

      metastatementNodeVerified = metaVariableNodeVerified; ///
    }

    return metastatementNodeVerified;
  }

  verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions, fileContextA, metaproofContextB) {
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
