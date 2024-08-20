"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { matchStatementNode } from "../substitution/statementForMetavariable";

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
            statementNodeA = statementNode, ///
            statementNodeB = substitutionStatementNode, ///
            statementNodeMatches = matchStatementNode(statementNodeA, statementNodeB, substitution, substitutions, localContextA, localContextB);

      if (statementNodeMatches) {
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
  } else {
    let verifiedAhead;

    const substitution = substitutionFromSubstitutionNodeMetavariableNodeAndStatementNode(substitutionNode, metavariableNode, statementNode);  ///

    substitutions.push(substitution);

    verifiedAhead = verifyAhead();

    if (!verifiedAhead) {
      substitutions.pop();
    }

    metavariableVerifiedAgainstStatement = verifiedAhead;  ///
  }

  return metavariableVerifiedAgainstStatement;
}

function substitutionFromSubstitutionNodeMetavariableNodeAndStatementNode(substitutionNode, metavariableNode, statementNode) {
  let statementForMetavariableSubstitution;

  if (substitutionNode !== null) {
    const termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
          substitution = termForVariableSubstitution; ///

    statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeStatementNodeAndSubstitution(metavariableNode, statementNode, substitution);
  } else {
    statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeAndStatementNode(metavariableNode, statementNode);
  }

  const substitution = statementForMetavariableSubstitution;  ///

  return substitution;
}
