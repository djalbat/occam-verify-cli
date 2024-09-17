"use strict";

import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { resolveSubstitutionsByMetavariableNode } from "../utilities/substitutions";

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
    const statementNode = statementNodeB, ///
          substitutionNode = substitutionNodeA, ///
          metavariableNode = metavariableNodeA, ///
          statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode),
          substitution = statementForMetavariableSubstitution;  ///

    substitutions.addSubstitution(substitution, localContextA, localContextB);

    const substitutionsResolvedByMetavariableNode = resolveSubstitutionsByMetavariableNode(metavariableNodeA, substitutions, localContextA, localContextB);

    metavariableUnifiedWithStatementGivenSubstitution = substitutionsResolvedByMetavariableNode; ///
  }

  return metavariableUnifiedWithStatementGivenSubstitution;
}
