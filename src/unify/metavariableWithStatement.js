"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";
import unifyStatementWithStatementGivenSubstitution from "../unify/statementWithStatementGivenSubstitution";

import { nodeQuery } from "../utilities/query";

const metavariableNodeQuery = nodeQuery("/statement/metavariable");

export default function unifyMetavariableWithStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB) {
  let metavariableUnifiedWithStatement = false;

  const substitution = substitutions.findSubstitution((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution === null) {
    const metavariableA = localContextA.findMetavariableByMetavariableNode(metavariableNodeA),
          metavariableB = metavariableFromStatementNode(statementNodeB, localContextB);

    if (metavariableA !== metavariableB) {
      const statementNode = statementNodeB, ///
            substitutionNode = substitutionNodeA, ///
            metavariableNode = metavariableNodeA, ///
            statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode),
            substitution = statementForMetavariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);
    }

    metavariableUnifiedWithStatement = true;
  } else {
    const substitutionSubstitution = substitution.getSubstitution(),
          substitutionStatementNode = substitution.getStatementNode();

    if ((substitutionNodeA !== null) && (substitutionSubstitution !== null)) {
      ///
    } else if (substitutionNodeA !== null) {
      const termForVariableSubstitutionA = TermForVariableSubstitution.fromSubstitutionNode(substitutionNodeA),
            substitutionA = termForVariableSubstitutionA, ///
            statementNodeA = substitutionStatementNode, ///
            statementUnifiedWithStatementGivenSubstitution = unifyStatementWithStatementGivenSubstitution(statementNodeA, statementNodeB, substitutionA, substitutions, localContextA, localContextB);

      if (statementUnifiedWithStatementGivenSubstitution) {
        metavariableUnifiedWithStatement = true;
      }
    } else if (substitutionSubstitution !== null) {
      const substitutionA = substitutionSubstitution,
            statementNodeA = substitutionStatementNode, ///
            statementUnifiedWithStatementGivenSubstitution = unifyStatementWithStatementGivenSubstitution(statementNodeA, statementNodeB, substitutionA, substitutions, localContextA, localContextB);

      if (statementUnifiedWithStatementGivenSubstitution) {
        metavariableUnifiedWithStatement = true;
      }
    } else {
      const substitutionMatchesStatementNodeB = substitution.matchStatementNode(statementNodeB);

      if (substitutionMatchesStatementNodeB) {
        metavariableUnifiedWithStatement = true;
      }
    }
  }

  return metavariableUnifiedWithStatement;
}

function metavariableFromStatementNode(statementNode, localContext) {
  let metavariable = null;

  const metavariableNode = metavariableNodeQuery(statementNode)

  if (metavariableNode !== null) {
    metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
  }

  return metavariable;
}
