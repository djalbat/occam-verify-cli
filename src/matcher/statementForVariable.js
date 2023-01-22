"use strict";

import Matcher from "../matcher";
import StatementForVariableSubstitution from "../substitution/statementForVariable";

import { nodeQuery } from "../utilities/query";
import { STATEMENT_RULE_NAME } from "../ruleNames";
import { variableNameFromVariableNode } from "../utilities/query";

const variableNodeQuery = nodeQuery('/statement/variable!');

export default class StatementForVariableMatcher extends Matcher {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
      const nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === STATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameMetastatementRuleName = (nonTerminalNodeBRuleName === STATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameMetastatementRuleName) {
        const statementNodeA = nonTerminalNodeA,  ///
              statementNodeB = nonTerminalNodeB,  ///
              statementNodeMatches = this.matchStatementNode(statementNodeA, statementNodeB, substitutions);

        if (statementNodeMatches) {
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

  matchStatementNode(statementNodeA, statementNodeB, substitutions) {
    let statementNodeMatches = false;

    const variableNodeA = variableNodeQuery(statementNodeA);

    if (variableNodeA !== null) {
      const variableMatches = this.matchVariableNode(variableNodeA, statementNodeB, substitutions);

      statementNodeMatches = variableMatches; ///
    }

    return statementNodeMatches;
  }

  matchVariableNode(variableNodeB, statementNodeB, substitutions) {
    let variableMatches;

    const variableNameA = variableNameFromVariableNode(variableNodeB),
          substitution = substitutions.find((substitution) => {
            const variableName = substitution.getVariableName();

            if (variableName === variableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const statementNode = statementNodeB, ///
            substitutionNodesMatch = substitution.matchStatementNode(statementNode);

      variableMatches = substitutionNodesMatch;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const variableName = variableNameA, ///
              statementNode = statementNodeB, ///
              statementForVariableSubstitution = StatementForVariableSubstitution.fromVariableNameAndStatementNode(variableName, statementNode),
              substitution = statementForVariableSubstitution;  ///

        substitutions.push(substitution);
      }

      variableMatches = true;
    }

    return variableMatches;
  }
}
