"use strict";

import NodesVerifier from "../../verifier/nodes";
import StatementForMetavariableSubstitution from "../../substitution/statementForMetavariable";

import { nodeQuery } from "../../utilities/query";
import { metavariableNameFromMetavariableNode } from "../../utilities/query";
import { STATEMENT_RULE_NAME, METASTATEMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../../ruleNames";

const metavariableNodeQuery = nodeQuery('/metastatement/metavariable!'),
      metaArgumentChildNodeNodeQuery = nodeQuery('/metaArgument/*!');

export default class StatementForMetavariableNodesVerifier extends NodesVerifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, proofContextB) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
          nonTerminalNodeBRuleNameMetaArgumentRuleName = (nonTerminalNodeBRuleName === META_ARGUMENT_RULE_NAME);

    if (nonTerminalNodeBRuleNameMetaArgumentRuleName) {
      const metaArgumentNodeB = nonTerminalNodeB, ///
            metaArgumentChildNodeB = metaArgumentChildNodeNodeQuery(metaArgumentNodeB);

      nonTerminalNodeB = metaArgumentChildNodeB;  ///

      nonTerminalNodeVerified = this.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, proofContextB);
    } else {
      const nonTerminalNodeARuleName = nonTerminalNodeA.getRuleName(),
            nonTerminalNodeBRuleName = nonTerminalNodeB.getRuleName(),
            nonTerminalNodeARuleNameMetastatementRuleName = (nonTerminalNodeARuleName === METASTATEMENT_RULE_NAME),
            nonTerminalNodeBRuleNameStatementRuleName = (nonTerminalNodeBRuleName === STATEMENT_RULE_NAME);

      if (nonTerminalNodeARuleNameMetastatementRuleName && nonTerminalNodeBRuleNameStatementRuleName) {
        const metastatementNodeA = nonTerminalNodeA,  ///
              statementNodeB = nonTerminalNodeB,  ///
              statementNodeVerified = this.verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, proofContextB);

        if (statementNodeVerified) {
          nonTerminalNodeVerified = true;  ///
        } else {
          const nonTerminalNodeAChildNodes = nonTerminalNodeA.getChildNodes(),
                nonTerminalNodeBChildNodes = nonTerminalNodeB.getChildNodes(),
                childNodesA = nonTerminalNodeAChildNodes, ///
                childNodesB = nonTerminalNodeBChildNodes, ///
                childNodesVerified = this.verifyChildNodes(childNodesA, childNodesB, substitutions, fileContextA, proofContextB);

          nonTerminalNodeVerified = childNodesVerified;  ///
        }
      } else if (nonTerminalNodeBRuleName === nonTerminalNodeARuleName) {
        nonTerminalNodeVerified = super.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, fileContextA, proofContextB);
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyStatementNode(metastatementNodeA, statementNodeB, substitutions, fileContextA, proofContextB) {
    let statementNodeVerified = false;

    const metavariableNodeA = metavariableNodeQuery(metastatementNodeA);

    if (metavariableNodeA !== null) {
      const metavariableNodeVerified = this.verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, proofContextB);

      statementNodeVerified = metavariableNodeVerified; ///
    }

    return statementNodeVerified;
  }

  verifyMetavariableNode(metavariableNodeA, statementNodeB, substitutions, fileContextA, proofContextB) {
    let metavariableNodeVerified;

    const metavariableNameA = metavariableNameFromMetavariableNode(metavariableNodeA),
          substitution = substitutions.find((substitution) => {
            const metavariableName = substitution.getMetavariableName();

            if (metavariableName === metavariableNameA) {
              return true;
            }
          }) || null;

    if (substitution !== null) {
      const statementNode = statementNodeB, ///
            statementNodeMatches = substitution.matchStatementNode(statementNode);

      metavariableNodeVerified = statementNodeMatches;  ///
    } else {
      const { createSubstitutions } = this.constructor;

      if (createSubstitutions) {
        const metavariableName = metavariableNameA, ///
              statementNode = statementNodeB, ///
              statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNameAndStatementNode(metavariableName, statementNode),
              substitution = statementForMetavariableSubstitution;  ///

        substitutions.push(substitution);
      }

      metavariableNodeVerified = true;
    }

    return metavariableNodeVerified;
  }
}
