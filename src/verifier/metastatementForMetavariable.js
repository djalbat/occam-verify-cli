"use strict";

import Verifier from "../verifier";
import MetastatementForMetavariableSubstitution from "../substitution/metastatementForMetavariable";

import { nodeQuery } from "../utilities/query";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { metavariableNameFromMetavariableNode } from "../utilities/query";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!');

export default class MetastatementForMetavariableVerifier extends Verifier {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameMetastatementRuleName = (nonTerminalNodeBRuleName === METASTATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              metastatementNodeB = nonTerminalNodeB,  ///
              metastatementNodeMatches = this.matchMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions);

        if (metastatementNodeMatches) {
          nonTerminalNodeMatches = true;  ///
        } else {
          nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
        }
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
      }
    }

    return nonTerminalNodeMatches;
  }

  matchMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions) {
    let metastatementNodeMatches = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions);

      metastatementNodeMatches = metaVariableNodeMatches; ///
    }

    return metastatementNodeMatches;
  }

  matchMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions) {
    let metavariableNodeMatches;

    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === metavariableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const metastatementNode = metastatementNodeB, ///
            substitutionNodesMatch = substitution.matchMetastatementNode(metastatementNode);

      metavariableNodeMatches = substitutionNodesMatch;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const metavariableName = metavariableNameA, ///
              metastatementNode = metastatementNodeB, ///
              metastatementForMetavariableSubstitution = MetastatementForMetavariableSubstitution.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode),
              substitution = metastatementForMetavariableSubstitution;  ///

        substitutions.push(substitution);
      }

      metavariableNodeMatches = true;
    }

    return metavariableNodeMatches;
  }
}
