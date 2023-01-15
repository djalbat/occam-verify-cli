"use strict";

import Matcher from "../matcher";
import Substitution from "../substitution";

import { first } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { STATEMENT_RULE_NAME, METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME} from "../ruleNames";

class PremiseMatcher extends Matcher {
  matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions) {
    let nonTerminalNodeMatches = false;

    const ruleName = nonTerminalNode.getRuleName(),
          premiseNonTerminalNodeRuleName = premiseNonTerminalNode.getRuleName(),
          ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME),
          premiseNonTerminalNodeRuleNameMetastatementRuleName = (premiseNonTerminalNodeRuleName === METASTATEMENT_RULE_NAME);

    if (ruleNameStatementRuleName && premiseNonTerminalNodeRuleNameMetastatementRuleName) {
      const statementNode = nonTerminalNode,  ///
            premiseMetastatementNode = premiseNonTerminalNode,  ///
            metastatementNodeMatches = this.matchMetastatementNode(premiseMetastatementNode, statementNode, substitutions);

      if (metastatementNodeMatches) {
        nonTerminalNodeMatches = true;
      } else {
        nonTerminalNodeMatches = super.matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);
      }
    } else if (ruleName === premiseNonTerminalNodeRuleName) {
      nonTerminalNodeMatches = super.matchNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, substitutions);
    }

    return nonTerminalNodeMatches;
  }

  matchMetavariableNode(premiseMetavariableNode, statementNode, substitutions) {
    let metavariableNodeMatches;

    const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === premiseMetavariableName) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const substitutionNodesMatch = substitution.matchStatementNode(statementNode);

      metavariableNodeMatches = substitutionNodesMatch;  ///
    } else {
      const metavariableName = premiseMetavariableName, ///
            substitution = Substitution.fromMetavariableNameAndStatementNode(metavariableName, statementNode);

      substitutions.push(substitution);

      metavariableNodeMatches = true;
    }

    return metavariableNodeMatches;
  }

  matchMetastatementNode(premiseMetastatementNode, statementNode, substitutions) {
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
                metaVariableNodeMatches = this.matchMetavariableNode(premiseMetavariableNode, statementNode, substitutions);

          metastatementNodeMatches = metaVariableNodeMatches; ///
        }
      }
    }

    return metastatementNodeMatches;
  }
}

export const premiseMatcher = new PremiseMatcher();
