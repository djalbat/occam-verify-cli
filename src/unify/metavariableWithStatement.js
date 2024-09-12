"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import unifyStatementWithStatement from "../unify/statementAtainstStatement";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

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

  if (substitution !== null) {
    const substitutionStatementNode = substitution.getStatementNode();

    if (substitutionNodeA !== null) {
      const substitutionNode = substitutionNodeA, ///
            termForVariableSubstitution = TermForVariableSubstitution.fromSubstitutionNode(substitutionNode),
            localContext = localContextB,  ///
            substitution = termForVariableSubstitution, ///
            statementNodeA = substitutionStatementNode, ///
            statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

      if (statementUnifiedWithStatement) {
        metavariableUnifiedWithStatement = true;
      }
    } else {
      const substitutionSubstitution = substitution.getSubstitution();

      if (substitutionSubstitution !== null) {
        const statementNodeA = statementNodeB; ///

        statementNodeB = substitutionStatementNode; ///

        const localContext = localContextB,  ///
              substitution = substitutionSubstitution,
              statementUnifiedWithStatement = unifyStatementWithStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

        if (statementUnifiedWithStatement) {
          metavariableUnifiedWithStatement = true;
        }
      } else {
        const substitutionMatchesStatementNodeB = substitution.matchStatementNode(statementNodeB);

        if (substitutionMatchesStatementNodeB) {
          metavariableUnifiedWithStatement = true;
        }
      }
    }
  } else {
    const metavariableA = localContextA.findMetavariableByMetavariableNode(metavariableNodeA);

    if (metavariableA !== null) {
      const metavariableB = metavariableFromStatementNode(statementNodeB, localContextB);

      if (metavariableA !== metavariableB) {
        const statementNode = statementNodeB, ///
              substitutionNode = substitutionNodeA, ///
              metavariableNode = metavariableNodeA, ///
              statementForMetavariableSubstitution = StatementForMetavariableSubstitution.fromMetavariableNodeStatementNodeAndSubstitutionNode(metavariableNode, statementNode, substitutionNode),
              substitution = statementForMetavariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContextA, localContextB);
      }

      metavariableUnifiedWithStatement = true;
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
