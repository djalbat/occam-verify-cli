"use strict";

import Matcher from "../matcher";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { STATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "../ruleNames";

class ConclusionMatcher extends Matcher {
  matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions) {
    let nonTerminalNodeMatches = false;

    const ruleName = nonTerminalNode.getRuleName(),
          conclusionNonTerminalNodeRuleName = conclusionNonTerminalNode.getRuleName(),
          ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME),
          conclusionNonTerminalNodeRuleNameMetastatementRuleName = (conclusionNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

    if (ruleNameStatementRuleName && conclusionNonTerminalNodeRuleNameMetastatementRuleName) {
      const statementNode = nonTerminalNode,  ///
            conclusionMetastatementNode = conclusionNonTerminalNode,  ///
            metastatementNodeMatches = this.matchMetastatementNode(conclusionMetastatementNode, statementNode, substitutions);

      if (metastatementNodeMatches) {
        nonTerminalNodeMatches = true; ///
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions);
      }
    } else if (ruleName === conclusionNonTerminalNodeRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, substitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchMetavariableNode(conclusionMetavariableNode, statementNode, substitutions) {
    let metavariableNodeMatches = true;

    const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === conclusionMetavariableName) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const substitutionNodesMatch = substitution.matchStatementNode(statementNode);

      metavariableNodeMatches = substitutionNodesMatch;  ///
    }

    return metavariableNodeMatches;
  }

  matchMetastatementNode(conclusionMetastatementNode, statementNode, substitutions) {
    let metastatementNodeMatches = false;

    const conclusionNonTerminalNode = conclusionMetastatementNode,  ///
          conclusionNonTerminalNodeChildNodes = conclusionNonTerminalNode.getChildNodes(),
          conclusionNonTerminalNodeChildNodesLength = conclusionNonTerminalNodeChildNodes.length;

    if (conclusionNonTerminalNodeChildNodesLength === 1) {
      const firstConclusionChildNode = first(conclusionNonTerminalNodeChildNodes),
            conclusionChildNode = firstConclusionChildNode,  ///
            conclusionChildNodeNonTerminalNode = conclusionChildNode.isNonTerminalNode();

      if (conclusionChildNodeNonTerminalNode) {
        const conclusionNonTerminalChildNode = conclusionChildNode,  ///
              conclusionNonTerminalChildNodeRuleName = conclusionNonTerminalChildNode.getRuleName(),
              conclusionNonTerminalChildNodeRuleNameMetavariableRuleName = (conclusionNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

        if (conclusionNonTerminalChildNodeRuleNameMetavariableRuleName) {
          const conclusionMetavariableNode = conclusionNonTerminalChildNode,  ///
                metavariableNodeMatches = this.matchMetavariableNode(conclusionMetavariableNode, statementNode, substitutions);

          metastatementNodeMatches = metavariableNodeMatches; ///
        }
      }
    }

    return metastatementNodeMatches;
  }
}

export const conclusionMatcher = new ConclusionMatcher();
