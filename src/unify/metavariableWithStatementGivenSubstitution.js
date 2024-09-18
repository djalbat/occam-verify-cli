"use strict";

import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { metavariableFromStatementNode } from "../utilities/unify";

export default function unifyMetavariableWithStatementGivenSubstitution(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB) {
  let metavariableUnifiedWithStatementGivenSubstitution = false;

  const complexSubstitution = substitutions.findComplexSubstitutionByMetavariableNodeAndSubstitutionNode(metavariableNodeA, substitutionNodeA),
        substitution = complexSubstitution; ///

  if (substitution !== null) {
    const statementNodeMatches = substitution.matchStatementNode(statementNodeB);

    if (statementNodeMatches) {
      metavariableUnifiedWithStatementGivenSubstitution = true;
    }
  } else {
    const metavariableA = localContextA.findMetavariableByMetavariableNode(metavariableNodeA),
          metavariableB = metavariableFromStatementNode(statementNodeB, localContextB);

    if (metavariableA === metavariableB) {
      metavariableUnifiedWithStatementGivenSubstitution = false;  ///
    } else {
      const statementNode = statementNodeB, ///
            substitutionNode = substitutionNodeA, ///
            metavariableNode = metavariableNodeA, ///
            statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode),
            substitution = statementForMetavariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);

      metavariableUnifiedWithStatementGivenSubstitution = true;
    }
  }

  return metavariableUnifiedWithStatementGivenSubstitution;
}
