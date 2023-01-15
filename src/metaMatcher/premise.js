"use strict";

import MetaMatcher from "../metaMatcher";
import MetaSubstitution from "../metaSubstitution";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "../ruleNames";

class PremiseMetaMatcher extends MetaMatcher {
  matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
    let nonTerminalNodeMatches = false;

    const ruleName = nonTerminalNode.getRuleName(),
          premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(),
          ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME),
          premiseNonTerminalNodeRuleNameMetastatementRuleName = (premiseNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

    if (ruleNameMetastatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
      const metastatementNode = nonTerminalNode,  ///
            premiseMetastatementNode = premiseNonTerminalNode,  ///
            metastatementNodeMatches = this.matchMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);

      if (metastatementNodeMatches) {
        nonTerminalNodeMatches = true;
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
      }
    } else if (ruleName === premiseNonTerminalNodeRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions) {
    let metavariableNodeMatches;

    const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
          metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
            const metavariableName = metaSubstitution.getMetavariableName();

            if (metavariableName === premiseMetavariableName) {
              return true;
            }
          }) || null;

    if (metaSubstitution !== null) {
      const metaSubstitutionNodesMatch = metaSubstitution.matchMetastatementNode(metastatementNode);

      metavariableNodeMatches = metaSubstitutionNodesMatch;  ///
    } else {
      const metavariableName = premiseMetavariableName, ///
            metaSubstitution = MetaSubstitution.fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode);

      metaSubstitutions.push(metaSubstitution);

      metavariableNodeMatches = true;
    }

    return metavariableNodeMatches;
  }

  matchMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
    let metastatementNodeMatches = false;

    const premiseNonTerminalNode = premiseMetastatementNode,  ///
          premiseNonTerminalNodeChildNodes = premiseNonTerminalNode.getChildNodes(),
          premiseNonTerminalNodeChildNodesLength = premiseNonTerminalNodeChildNodes.length;

    if (premiseNonTerminalNodeChildNodesLength === 1) {
      const firstPremiseChildNode = first(premiseNonTerminalNodeChildNodes),
            premiseChildNode = firstPremiseChildNode,  ///
            premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();

      if (premiseChildNodeNonTerminalNode) {
        const premiseNonTerminalChildNode = premiseChildNode,  ///
              premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(),
              premiseNonTerminalChildNodeRuleNameMetavariableRuleName = (premiseNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

        if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
          const premiseMetavariableNode = premiseNonTerminalChildNode,  ///
                metaVariableNodeMatches = this.matchMetavariableNode(premiseMetavariableNode, metastatementNode, metaSubstitutions);

          metastatementNodeMatches = metaVariableNodeMatches; ///
        }
      }
    }

    return metastatementNodeMatches;
  }
}

export const premiseMetaMatcher = new PremiseMetaMatcher();
