"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import verifyStatementAgainstStatement from "../verify/statementAtainstStatement";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

export default function verifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNode, substitutions, localContextA, localContextB, verifyAhead) {
  let metavariableVerifiedAgainstStatement = false;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const substitutionStatementNode = substitution.getStatementNode();

    if (substitutionNode !== null) {
      const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
            localContext = localContextB,  ///
            substitution = termForVariableSubstitution, ///
            statementNodeA = substitutionStatementNode, ///
            statementVerifiedAgainstStatement = verifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

      if (statementVerifiedAgainstStatement) {
        const verifiedAhead = verifyAhead();

        metavariableVerifiedAgainstStatement = verifiedAhead;  ///
      }
    } else {
      const substitutionSubstitution = substitution.getSubstitution();

      if (substitutionSubstitution !== null) {
        const statementNodeA = statementNodeB; ///

        statementNodeB = substitutionStatementNode; ///

        const localContext = localContextB,  ///
              substitution = substitutionSubstitution,
              statementVerifiedAgainstStatement = verifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

        if (statementVerifiedAgainstStatement) {
          const verifiedAhead = verifyAhead();

          metavariableVerifiedAgainstStatement = verifiedAhead;  ///
        }
      } else {
        const substitutionMatchesStatementNodeB = substitution.matchStatementNode(statementNodeB);

        if (substitutionMatchesStatementNodeB) {
          const verifiedAhead = verifyAhead();

          metavariableVerifiedAgainstStatement = verifiedAhead;  ///
        }
      }
    }
  } else {
    let verifiedAhead;

    const statementNode = statementNodeB, ///
          metavariableNode = metavariableNodeA, ///
          statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode),
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
