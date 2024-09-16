"use strict";

import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { nodeQuery } from "../utilities/query";

const metavariableNodeQuery = nodeQuery("/statement/metavariable");

export default function unifyMetavariableWithStatementGivenSubstitution(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB) {
  let metavariableUnifiedWithStatement = false;

  const substitution = substitutions.findSubstitution((substitution) => {
    const substitutionMatchesMetavariableNodeA = substitution.matchMetavariableNode(metavariableNodeA);

    if (substitutionMatchesMetavariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const statementNodeMatches = substitution.matchStatementNode(statementNodeB);

    if (statementNodeMatches) {
      metavariableUnifiedWithStatement = true;
    }
  } else {
    const metavariableA = localContextA.findMetavariableByMetavariableNode(metavariableNodeA),
          metavariableB = metavariableFromStatementNode(statementNodeB, localContextB);

    if (metavariableA !== metavariableB) {
      const statementNode = statementNodeB, ///
            substitutionNode = substitutionNodeA, ///
            metavariableNode = metavariableNodeA, ///
            statementForMetavariableSubstitution = (substitutionNode !== null) ?
                                                     StatementForMetavariableSubstitution.fromStatementNodeMetavariableNodeAndSubstitutionNode(statementNode, metavariableNode, substitutionNode) :
                                                       StatementForMetavariableSubstitution.fromStatementNodeAndMetavariableNode(statementNode, metavariableNode),
            substitution = statementForMetavariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);
    }

    metavariableUnifiedWithStatement = true;
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
