"use strict";

import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { nodeQuery } from "../utilities/query";
import { resolveSubstitutionsByMetavariableNode } from "../utilities/substitutions";

const metavariableNodeQuery = nodeQuery("/statement/metavariable");

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

      const substitutionsResolvedByMetavariableNode = resolveSubstitutionsByMetavariableNode(metavariableNodeA, substitutions, localContextA, localContextB);

      metavariableUnifiedWithStatement = substitutionsResolvedByMetavariableNode; ///
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
