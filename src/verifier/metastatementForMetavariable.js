"use strict";

import Verifier from "../verifier";
import MetastatementForMetavariableSubstitution from "../substitution/metastatementForMetavariable";

import { nodeQuery } from "../utilities/query";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { metavariableNameFromMetavariableNode } from "../utilities/query";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!');

export default class MetastatementForMetavariableVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeVerifies = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameMetastatementRuleName = (nonTerminalNodeBRuleName === METASTATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              metastatementNodeB = nonTerminalNodeB,  ///
              metastatementNodeVerifies = this.verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions);

        if (metastatementNodeVerifies) {
          nonTerminalNodeVerifies = true;  ///
        } else {
          nonTerminalNodeVerifies = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
        }
      } else {
        nonTerminalNodeVerifies = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
      }
    }

    return nonTerminalNodeVerifies;
  }

  verifyMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions) {
    let metastatementNodeVerifies = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metaVariableNodeVerifies = this.verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions);

      metastatementNodeVerifies = metaVariableNodeVerifies; ///
    }

    return metastatementNodeVerifies;
  }

  verifyMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions) {
    let metavariableNodeVerifies;

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

      metavariableNodeVerifies = metastatementNodeMatches;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const metavariableName = metavariableNameA, ///
              metastatementNode = metastatementNodeB, ///
              metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode),
              substitution = metastatementForMetavariableSubstitution;  ///

        substitutions.push(substitution);
      }

      metavariableNodeVerifies = true;
    }

    return metavariableNodeVerifies;
  }
}
