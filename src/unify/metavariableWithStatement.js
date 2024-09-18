"use strict";

import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { metavariableFromStatementNode } from "../utilities/unify";

export default function unifyMetavariableWithStatement(metavariableNodeA, statementNodeB, substitutions, localContextA, localContextB) {
  let metavariableUnifiedWithStatement = false;

  const simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNodeA),
        substitution = simpleSubstitution;  ///

  if (substitution !== null) {
    const statementNodeMatches = substitution.matchStatementNode(statementNodeB);

    if (statementNodeMatches) {
      metavariableUnifiedWithStatement = true;
    }
  } else {
    const metavariableA = localContextA.findMetavariableByMetavariableNode(metavariableNodeA),
          metavariableB = metavariableFromStatementNode(statementNodeB, localContextB);

    if (metavariableA === metavariableB) {
      metavariableUnifiedWithStatement = true;
    } else {
      const statementNode = statementNodeB, ///
            metavariableNode = metavariableNodeA, ///
            statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementNodeAndMetavariableNode(statementNode, metavariableNode),
            substitution = statementForMetavariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);

      metavariableUnifiedWithStatement = true;
    }
  }

  return metavariableUnifiedWithStatement;
}
