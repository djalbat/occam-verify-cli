"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import verifyStatementAgainstStatement from "../verify/statementAtainstStatement";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

export default function verifyMetavariableAgainstStatement(metavariableNode, statementNode, substitutionNode, substitutions, localContextA, localContextB, verifyAhead) {
  let metavariableVerifiedAgainstStatement = false;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNode);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const substitutionStatementNode = substitution.getStatementNode();

    if (substitutionNode !== null) {
      const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
            substitution = termForVariableSubstitution, ///
            statementNodeA = substitutionStatementNode, ///
            statementNodeB = statementNode, ///
            statementVerifiedAgainstStatement = verifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);

      if (statementVerifiedAgainstStatement) {
        const verifiedAhead = verifyAhead();

        metavariableVerifiedAgainstStatement = verifiedAhead;  ///
      }
    } else {
      const substitutionSubstitution = substitution.getSubstitution();

      if (substitutionSubstitution !== null) {
        localContextA = localContextB;  ///

        const substitution = substitutionSubstitution,
              statementNodeA = statementNode, ///
              statementNodeB = substitutionStatementNode, ///
              statementVerifiedAgainstStatement = verifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);

        if (statementVerifiedAgainstStatement) {
          const verifiedAhead = verifyAhead();

          metavariableVerifiedAgainstStatement = verifiedAhead;  ///
        }
      } else {
        const statementNodeMatches = substitution.matchStatementNode(statementNode);

        if (statementNodeMatches) {
          const verifiedAhead = verifyAhead();

          metavariableVerifiedAgainstStatement = verifiedAhead;  ///
        }
      }
    }
  } else {
    let verifiedAhead;

    const statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode),
          substitution = statementForMetavariableSubstitution;  ///

    substitutions.push(substitution);

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      substitutions.pop();
    }

    metavariableVerifiedAgainstStatement = verifiedAhead;  ///
  }

  return metavariableVerifiedAgainstStatement;
}
