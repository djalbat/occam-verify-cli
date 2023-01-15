"use strict";

import Substitution from "../substitution";
import GenericMatcher from "../matcher/generic";

import { first } from "../utilities/array";
import { variableNameFromVariableNode } from "../utilities/query";
import { VARIABLE_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";

export default class SubstitutionMatcher extends GenericMatcher {
  matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeMatches = false;

    const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
          nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName();

    if (nonTerminalNodeARuleName === nonTerminalNodeBRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);

      if (!nonTerminalNodeMatches) {
        const nonTerminalNodeBuleNameStatementRuleName = (nonTerminalNodeBRuleName === STATEMENT_RULE_NAME);

        if (nonTerminalNodeBuleNameStatementRuleName) {
          const statementNodeA = nonTerminalNodeA,  ///
                statementNodeB = nonTerminalNodeB,  ///
                statementNodeMatches = this.matchStatementNode(statementNodeA, statementNodeB, substitutions);

          nonTerminalNodeMatches = statementNodeMatches; ///
        }
      }
    }

    return nonTerminalNodeMatches;
  }

  matchStatementNode(statementNodeA, statementNodeB, substitutions) {
    let statementNodeMatches = false;

    const nonTerminalNodeA = statementNodeA,  ///
          nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
          nonTerminalNodeAChildNodesLength = nonTerminalNodeAChildNodes.length;

    if (nonTerminalNodeAChildNodesLength === 1) {
      const firstNonTerminalNodeAChildNode = first(nonTerminalNodeAChildNodes),
            childNodeA = firstNonTerminalNodeAChildNode,  ///
            childNodeANonTerminalNode = childNodeA.isNonTerminalNode();

      if (childNodeANonTerminalNode) {
        const nonTerminalNodeA = childNodeA,  ///
              nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
              nonTerminalNodeARuleNameVariableRuleName = (nonTerminalNodeARuleName === VARIABLE_RULE_NAME);

        if (nonTerminalNodeARuleNameVariableRuleName) {
          const variableNodeA = nonTerminalNodeA,  ///
                variableMatches = this.matchVariableNode(variableNodeA, statementNodeB, substitutions);

          statementNodeMatches = variableMatches; ///
        }
      }
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
              substitution = Substitution.fromVariableNameAndStatementNode(variableName, statementNode);

        substitutions.push(substitution);
      }

      variableMatches = true;
    }

    return variableMatches;
  }
}
