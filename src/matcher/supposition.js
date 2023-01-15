"use strict";

import Matcher from "../matcher";
import Substitution from "../substitution";

import { first } from "../utilities/array";
import { variableNameFromVariableNode } from "../utilities/query";
import { VARIABLE_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";

class SuppositionMatcher extends Matcher {
  matchNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions) {
    let nonTerminalNodeMatches = false;

    const ruleName = nonTerminalNode.getRuleName(),
          suppositionRuleName = suppositionNonTerminalNode.getRuleName(); ///

    if (ruleName === suppositionRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions);

      if (!nonTerminalNodeMatches) {
        const ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME);

        if (ruleNameStatementRuleName) {
          const statementNode = nonTerminalNode,  ///
                suppositionStatementNode = suppositionNonTerminalNode,  ///
                statementNodeMatches = this.matchStatementNode(suppositionStatementNode, statementNode, substitutions);

          nonTerminalNodeMatches = statementNodeMatches; ///
        }
      }
    }

    return nonTerminalNodeMatches;
  }

  matchStatementNode(suppositionStatementNode, statementNode, substitutions) {
    let statementNodeMatches = false;

    const suppositionNonTerminalNode = suppositionStatementNode,  ///
          suppositionChildNodes = suppositionNonTerminalNode.getChildNodes(),
          suppositionChildNodesLength = suppositionChildNodes.length;

    if (suppositionChildNodesLength === 1) {
      const firstSuppositionChildNode = first(suppositionChildNodes),
            suppositionChildNode = firstSuppositionChildNode,  ///
            suppositionChildNodeNonTerminalNode = suppositionChildNode.isNonTerminalNode();

      if (suppositionChildNodeNonTerminalNode) {
        const suppositionNonTerminalChildNode = suppositionChildNode,  ///
              suppositionNonTerminalChildNodeRuleName = suppositionNonTerminalChildNode.getRuleName(),
              suppositionNonTerminalChildNodeRuleNameVariableRuleName = (suppositionNonTerminalChildNodeRuleName === VARIABLE_RULE_NAME);

        if (suppositionNonTerminalChildNodeRuleNameVariableRuleName) {
          const suppositionVariableNode = suppositionNonTerminalChildNode,  ///
                nonTerminalNode = statementNode,  ///
                childNodes = nonTerminalNode.getChildNodes(),
                nodes = childNodes, ///
                variableMatches = this.matchVariable(suppositionVariableNode, nodes, substitutions);

          statementNodeMatches = variableMatches; ///
        }
      }
    }

    return statementNodeMatches;
  }

  matchVariable(suppositionVariableNode, nodes, substitutions) {
    let variableMatches;

    const suppositionVariableName = variableNameFromVariableNode(suppositionVariableNode),
          substitution = substitutions.find((substitution) => {
            const variableName = substitution.getVariableName();

            if (variableName === suppositionVariableName) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const substitutionNodesMatch = substitution.matchNodes(nodes);

      variableMatches = substitutionNodesMatch;  ///
    } else {
      const variableName = suppositionVariableName, ///
            substitution = Substitution.fromVariableNameAndNodes(variableName, nodes);

      substitutions.push(substitution);

      variableMatches = true;
    }

    return variableMatches;
  }
}

export const suppositionMatcher = new SuppositionMatcher();
