"use strict";

import Matcher from "../matcher";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { nodeQuery } from "../utilities/query";
import { TERM_RULE_NAME } from "../ruleNames";
import { variableNameFromVariableNode } from "../utilities/query";

const variableNodeQuery = nodeQuery('/term/variable!');

export default class TermForVariableMatcher extends Matcher {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameTermRuleName = (nonTerminalNodeARuleName === TERM_RULE_NAME),
            nonTerminalNodeBRuleNameTermRuleName = (nonTerminalNodeBRuleName === TERM_RULE_NAME);

      if (nonTerminalNodeARuleNameTermRuleName && nonTerminalNodeBRuleNameTermRuleName) {
        const termNodeA = nonTerminalNodeA,  ///
              termNodeB = nonTerminalNodeB,  ///
              termNodeMatches = this.matchTermNode(termNodeA, termNodeB, substitutions);

        if (termNodeMatches) {
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

  matchTermNode(termNodeA, termNodeB, substitutions) {
    let termNodeMatches = false;

    const variableNodeA = variableNodeQuery(termNodeA);

    if (variableNodeA !== null) {
      const variableMatches = this.matchVariableNode(variableNodeA, termNodeB, substitutions);

      termNodeMatches = variableMatches; ///
    }

    return termNodeMatches;
  }

  matchVariableNode(variableNodeB, termNodeB, substitutions) {
    let variableMatches;

    const variableNameA = variableNameFromVariableNode(variableNodeB),
          substitution = substitutions.find((substitution) => {
            const variableName = substitution.getVariableName();

            if (variableName === variableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const termNode = termNodeB, ///
            substitutionNodesMatch = substitution.matchTermNode(termNode);

      variableMatches = substitutionNodesMatch;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const variableName = variableNameA, ///
              termNode = termNodeB, ///
              termForVariableSubstitution = TermForVariableSubstitution.fromVariableNameAndTermNode(variableName, termNode),
              substitution = termForVariableSubstitution;  ///

        substitutions.push(substitution);
      }

      variableMatches = true;
    }

    return variableMatches;
  }
}
