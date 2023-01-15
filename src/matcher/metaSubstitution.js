"use strict";

import GenericMatcher from "../matcher/generic";
import MetaSubstitution from "../metaSubstitution";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "../ruleNames";

export default class MetaSubstitutionMatcher extends GenericMatcher {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
          nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
          nonTerminalNodeBRuleNameMetastatementRuleName = (nonTerminalNodeBRuleName === METASTATEMENT_RULE_NAME);

    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
      const metastatementNodeA = nonTerminalNodeB,  ///
            metastatementNodeB = nonTerminalNodeA,  ///
            metastatementNodeMatches = this.matchMetastatementNode(metastatementNodeA, metastatementNodeB, metaSubstitutions);

      if (metastatementNodeMatches) {
        nonTerminalNodeMatches = true; ///
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
      }
    } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, metaSubstitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchMetastatementNode(metastatementNodeA, metastatementNodeB, metaSubstitutions) {
    let metastatementNodeMatches = false;

    const nonTerminalNodeB = metastatementNodeB,  ///
          nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
          nonTerminalNodeBChildNodesLength = nonTerminalNodeBChildNodes.length;

    if (nonTerminalNodeBChildNodesLength === 1) {
      const firstNonTerminalNodeBChildNode = first(nonTerminalNodeBChildNodes),
            cChildNodeB = firstNonTerminalNodeBChildNode,  ///
            cChildNodeBNonTerminalNode = cChildNodeB.isNonTerminalNode();

      if (cChildNodeBNonTerminalNode) {
        const nonTerminalNodeB = cChildNodeB,  ///
              nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
              nonTerminalNodeBRuleNameMetavariableRuleName = (nonTerminalNodeBRuleName === METAVARIABLE_RULE_NAME);

        if (nonTerminalNodeBRuleNameMetavariableRuleName) {
          const metavariableNodeA = nonTerminalNodeB,  ///
                metastatementNodeB = metastatementNodeA, ///
                metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, metastatementNodeB, metaSubstitutions);

          metastatementNodeMatches = metaVariableNodeMatches; ///
        }
      }
    }

    return metastatementNodeMatches;
  }

  matchMetavariableNode(metavariableNodeA, metastatementNodeB, metaSubstitutions) {
    let metavariableNodeMatches;

    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
            const metavariableName = metaSubstitution.getMetavariableName();

            if (metavariableName === metavariableNameA) {
              return true;
            }
          }) || null;

    if (metaSubstitution !== null) {
      const metastatementNode = metastatementNodeB, ///
            metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);

      metavariableNodeMatches = metaSubstitutionNodesMatch;  ///
    } else {
      const { createMetaSubstitutions } = this.constructor;

      if (createMetaSubstitutions) {
        const metavariableName = metavariableNameA, ///
              metastatementNode = metastatementNodeB, ///
              metaSubstitution = MetaSubstitution.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode);

        metaSubstitutions.push(metaSubstitution);
      }

      metavariableNodeMatches = true;
    }

    return metavariableNodeMatches;
  }
}
