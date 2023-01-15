"use strict";

import Matcher from "../matcher";

import { first } from "../utilities/array";
import { variableNameFromVariableNode } from "../utilities/query";
import { VARIABLE_RULE_NAME, STATEMENT_RULE_NAME } from "../ruleNames";

class ConsequenceMatcher extends Matcher {
  matchNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions) {
    let nonTerminalNodeMatches = false;

    const ruleName = nonTerminalNode.getRuleName(),
          consequenceRuleName = consequenceNonTerminalNode.getRuleName(); ///

    if (ruleName === consequenceRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions);

      if (!nonTerminalNodeMatches) {
        const ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME);

        if (ruleNameStatementRuleName) {
          const statementNode = nonTerminalNode,  ///
                consequenceStatementNode = consequenceNonTerminalNode,  ///
                statementNodeMatches = this.matchStatementNode(consequenceStatementNode, statementNode, metaSubstitutions);

          nonTerminalNodeMatches = statementNodeMatches; ///
        }
      }
    }

    return nonTerminalNodeMatches;
  }

  matchStatementNode(consequenceStatementNode, statementNode, metaSubstitutions) {
    let statementNodeMatches = false;

    const consequenceNonTerminalNode = consequenceStatementNode,  ///
          consequenceChildNodes = consequenceNonTerminalNode.getChildNodes(),
          consequenceChildNodesLength = consequenceChildNodes.length;

    if (consequenceChildNodesLength === 1) {
      const firstConsequenceChildNode = first(consequenceChildNodes),
            consequenceChildNode = firstConsequenceChildNode,  ///
            consequenceChildNodeNonTerminalNode = consequenceChildNode.isNonTerminalNode();

      if (consequenceChildNodeNonTerminalNode) {
        const consequenceNonTerminalChildNode = consequenceChildNode,  ///
              consequenceNonTerminalChildNodeRuleName = consequenceNonTerminalChildNode.getRuleName(),
              consequenceNonTerminalChildNodeRuleNameVariableRuleName = (consequenceNonTerminalChildNodeRuleName === VARIABLE_RULE_NAME);

        if (consequenceNonTerminalChildNodeRuleNameVariableRuleName) {
          const consequenceVariableNode = consequenceNonTerminalChildNode,  ///
                nonTerminalNode = statementNode,  ///
                childNodes = nonTerminalNode.getChildNodes(),
                nodes = childNodes, ///
                variableMatches = this.matchVariable(consequenceVariableNode, nodes, metaSubstitutions);

          statementNodeMatches = variableMatches; ///
        }
      }
    }

    return statementNodeMatches;
  }

  matchVariable(consequenceVariableNode, nodes, metaSubstitutions) {
    let variableMatches = true;

    const consequenceVariableName = variableNameFromVariableNode(consequenceVariableNode),
          metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
            const variableName = metaSubstitution.getVariableName();

            if (variableName === consequenceVariableName) {
              return true;
            }
          }) || null;

    if (metaSubstitution !== null) {
      const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

      variableMatches = metaSubstitutionNodesMatch;  ///
    }

    return variableMatches;
  }
}

export const consequenceMatcher = new ConsequenceMatcher();
