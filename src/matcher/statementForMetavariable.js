"use strict";

import Matcher from "../matcher";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "../ruleNames";

export default class StatementForMetavariableMatcher extends Matcher {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
          nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
          nonTerminalNodeBRuleNameStatementRuleName = (nonTerminalNodeBRuleName === STATEMENT_RULE_NAME);

    if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
      const metastatementNodeA = nonTerminalNodeA,  ///
            statementNodeB = nonTerminalNodeB,  ///
            statementNodeMatches = this.matchStatementNode(metastatementNodeA, statementNodeB, substitutions);

      if (statementNodeMatches) {
        nonTerminalNodeMatches = true;  ///
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
      }
    } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchStatementNode(metastatementNodeA, statementNodeB, substitutions) {
    let statementNodeMatches = false;

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
                metaVariableNodeMatches = this.matchMetavariableNode(metavariableNodeA, statementNodeB, substitutions);

          statementNodeMatches = metaVariableNodeMatches; ///
        }
      }
    }

    return statementNodeMatches;
  }

  matchMetavariableNode(metavariableNodeA, statementNodeB, substitutions) {
    let metavariableNodeMatches;

    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === metavariableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const statementNode = statementNodeB, ///
            substitutionNodesMatch = substitution.matchStatementNode(statementNode);

      metavariableNodeMatches = substitutionNodesMatch;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const metavariableName = metavariableNameA, ///
              statementNode = statementNodeB, ///
              statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNameAndStatementNode(metavariableName, statementNode),
              substitution = statementForMetavariableSubstitution;  ///

        substitutions.push(substitution);
      }

      metavariableNodeMatches = true;
    }

    return metavariableNodeMatches;
  }
}
