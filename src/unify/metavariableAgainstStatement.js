"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";
import unifyStatementAgainstStatement from "../unify/statementAtainstStatement";
import StatementForMetavariableSubstitution from "../substitution/statementForMetavariable";

import { nodeQuery } from "../utilities/query";

const metavariableNodeQuery = nodeQuery("/statement/metavariable");

export default function unifyMetavariableAgainstStatement(metavariableNodeA, statementNodeB, substitutionNodeA, substitutions, localContextA, localContextB) {
  let metavariableUnifiedAgainstStatement = false;

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
            statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

      if (statementUnifiedAgainstStatement) {
        metavariableUnifiedAgainstStatement = true;
      }
    } else {
      const substitutionSubstitution = substitution.getSubstitution();

      if (substitutionSubstitution !== null) {
        const statementNodeA = statementNodeB; ///

        statementNodeB = substitutionStatementNode; ///

        const localContext = localContextB,  ///
              substitution = substitutionSubstitution,
              statementUnifiedAgainstStatement = unifyStatementAgainstStatement(statementNodeA, statementNodeB, substitution, substitutions, localContext, localContext);

        if (statementUnifiedAgainstStatement) {
          metavariableUnifiedAgainstStatement = true;
        }
      } else {
        const substitutionMatchesStatementNodeB = substitution.matchStatementNode(statementNodeB);

        if (substitutionMatchesStatementNodeB) {
          metavariableUnifiedAgainstStatement = true;
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

      metavariableUnifiedAgainstStatement = true;
    }
  }

  return metavariableUnifiedAgainstStatement;
}

function metavariableFromStatementNode(statementNode, localContext) {
  let metavariable = null;

  const metavariableNode = metavariableNodeQuery(statementNode)

  if (metavariableNode !== null) {
    metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
  }

  return metavariable;
}
