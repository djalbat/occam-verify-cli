"use strict";

import MetaMatcher from "../metaMatcher";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "../ruleNames";

class ConclusionMetaMatcher extends MetaMatcher {
  matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
    let nonTerminalNodeMatches = false;

    const ruleName = nonTerminalNode.getRuleName(),
          conclusionNonTerminalNodeRuleName = conclusionNonTerminalNode.getRuleName(),
          ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME),
          conclusionNonTerminalNodeRuleNameMetastatementRuleName = (conclusionNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

    if (ruleNameMetastatementRuleName && conclusionNonTerminalNodeRuleNameMetastatementRuleName) {
      const statementNode = nonTerminalNode,  ///
            conclusionMetastatementNode = conclusionNonTerminalNode,  ///
            metastatementNodeMatches = this.matchMetastatementNode(conclusionMetastatementNode, statementNode, metaSubstitutions);

      if (metastatementNodeMatches) {
        nonTerminalNodeMatches = true; ///
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);
      }
    } else if (ruleName === conclusionNonTerminalNodeRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchMetavariableNode(conclusionMetavariableNode, metastatementNode, metaSubstitutions) {
    let metavariableNodeMatches = true;

    const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
          metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
            const metavariableName = metaSubstitution.getMetavariableName();

            if (metavariableName === conclusionMetavariableName) {
              return true;
            }
          }) || null;

    if (metaSubstitution !== null) {
      const metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);

      metavariableNodeMatches = metaSubstitutionNodesMatch;  ///
    }

    return metavariableNodeMatches;
  }

  matchMetastatementNode(conclusionMetastatementNode, metastatementNode, metaSubstitutions) {
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
                metavariableNodeMatches = this.matchMetavariableNode(conclusionMetavariableNode, metastatementNode, metaSubstitutions);

          metastatementNodeMatches = metavariableNodeMatches; ///
        }
      }
    }

    return metastatementNodeMatches;
  }
}

export const conclusionMetaMatcher = new ConclusionMetaMatcher();
