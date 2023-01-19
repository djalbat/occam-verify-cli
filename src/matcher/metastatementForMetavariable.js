"use strict";

import Matcher from "../matcher";
import MetastatementForMetavariableSubstitution from "../substitution/metastatementForMetavariable";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "../ruleNames";

export default class MetastatementForMetavariableMatcher extends Matcher {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
          nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
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
    } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchMetastatementNode(metastatementNodeA, metastatementNodeB, substitutions) {
    let metastatementNodeMatches = false;

    const nonTerminalNodeA = metastatementNodeA,  ///
          nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeAChildNodesLength = nonTerminalNodeAChildNodes.length;

    if (nonTerminalNodeAChildNodesLength === 1) {
      const firstNonTerminalNodeAChildNode = first(nonTerminalNodeAChildNodes),
            cChildNodeA = firstNonTerminalNodeAChildNode,  ///
            cChildNodeANonTerminalNode = cChildNodeA.isNonTerminalNode();

      if (cChildNodeANonTerminalNode) {
        const nonTerminalNodeA = cChildNodeA,  ///
              nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
              nonTerminalNodeARuleNameMetavariableRuleName = (nonTerminalNodeARuleName === METAVARIABLE_RULE_NAME);

        if (nonTerminalNodeARuleNameMetavariableRuleName) {
          const metavariableNodeA = nonTerminalNodeA,  ///
                metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, metastatementNodeB, substitutions);

          metastatementNodeMatches = metaVariableNodeMatches; ///
        }
      }
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