"use strict";

import Verifier from "../verifier";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { nodeQuery } from "../utilities/query";
import { metavariableNameFromMetavariableNode } from "../utilities/query";
import { STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../ruleNames";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!'),
      metaArgumentChildNodeNodeQuery = nodeQuery('/metaArgument/*!');

export default class StatementForMetavariableVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions) {
    let nonTerminalNodeVerifies = false;

    const nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
          nonTerminalNodeBRuleNameMetaArgumentRuleName = (nonTerminalNodeBRuleName === META_ARGUMENT_RULE_NAME);

    if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
      const metaArgumentNodeB = nonTerminalNodeB, ///
            metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);

      nonTerminalNodeB = metaArgumentChildNodeB;  ///

      nonTerminalNodeVerifies = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
    } else {
      const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
            nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
            nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameStatementRuleName = (nonTerminalNodeBRuleName === STATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              statementNodeB = nonTerminalNodeB,  ///
              statementNodeVerifies = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions);

        if (statementNodeVerifies) {
          nonTerminalNodeVerifies = true;  ///
        } else {
          const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                nodesA = nonTerminalNodeAChildNodes, ///
                nodesB = nonTerminalNodeBChildNodes, ///
                nodesMatch = this.verifyNodes(nodesA, nodesB, substitutions);

          nonTerminalNodeVerifies = nodesMatch;  ///
        }
      } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
        nonTerminalNodeVerifies = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions);
      }
    }

    return nonTerminalNodeVerifies;
  }

  verifyStatementNode(metastatementNodeA, statementNodeB, substitutions) {
    let statementNodeVerifies = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metavariableNodeVerifies = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions);

      statementNodeVerifies = metavariableNodeVerifies; ///
    }

    return statementNodeVerifies;
  }

  verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions) {
    let metavariableNodeVerifies;

    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === metavariableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const statementNode = statementNodeB, ///
            substitutionNodesMatch = substitution.verifyStatementNode(statementNode);

      metavariableNodeVerifies = substitutionNodesMatch;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const metavariableName = metavariableNameA, ///
              statementNode = statementNodeB, ///
              statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNameAndStatementNode(metavariableName, statementNode),
              substitution = statementForMetavariableSubstitution;  ///

        substitutions.push(substitution);
      }

      metavariableNodeVerifies = true;
    }

    return metavariableNodeVerifies;
  }
}
