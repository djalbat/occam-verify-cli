"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import unifyStatementAgainstStatement from "../unify/statementAtainstStatement";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

export default function unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB, unifyAhead) {
  let metavariableUnifiedAgainstStatement = false;

  const substitution = substitutions.findSubstitution((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const substitutionStatementNode = substitution.getStatementNode();

    if (substitutionNodeA !== null) {
      const substitutionNode = substitutionNodeA, ///
            termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
            localContext = localContextB,  ///
            substitution = termForVariableSubstitution, ///
            statementNodeA = substitutionStatementNode, ///
            statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

      if (statementUnifiedAgainstStatement) {
        const unifiedAhead = unifyAhead();

        metavariableUnifiedAgainstStatement = unifiedAhead;  ///
      }
    } else {
      const substitutionSubstitution = substitution.getSubstitution();

      if (substitutionSubstitution !== null) {
        const statementNodeA = statementNodeB; ///

        statementNodeB = substitutionStatementNode; ///

        const localContext = localContextB,  ///
              substitution = substitutionSubstitution,
              statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

        if (statementUnifiedAgainstStatement) {
          const unifiedAhead = unifyAhead();

          metavariableUnifiedAgainstStatement = unifiedAhead;  ///
        }
      } else {
        const substitutionMatchesStatementNodeB = substitution.matchStatementNode(statementNodeB);

        if (substitutionMatchesStatementNodeB) {
          const unifiedAhead = unifyAhead();

          metavariableUnifiedAgainstStatement = unifiedAhead;  ///
        }
      }
    }
  } else {
    let unifiedAhead;

    const statementNode = statementNodeB, ///
          substitutionNode = substitutionNodeA, ///
          metavariableNode = metavariableNodeA, ///
          statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode),
          substitution = statementForMetavariableSubstitution;  ///

    substitutions.addSubstitution(substitution);

    unifiedAhead = unifyAhead();

    if (!unifiedAhead) {
      substitutions.removeSubstitution(substitution);
    }

    metavariableUnifiedAgainstStatement = unifiedAhead;  ///
  }

  return metavariableUnifiedAgainstStatement;
}
