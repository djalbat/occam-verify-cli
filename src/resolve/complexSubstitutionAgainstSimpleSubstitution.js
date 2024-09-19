"use strict";

import Substitutions from "../substitutions";
import unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement from "../unify/complexSubstitutionStatementWithSimpleSubstitutionStatement";

export default function resolveComplexSubstitutionAgainstSimpleSubstitution(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB) {
  let complexSubstitutionResolvedAgainstSimpleSubstitution = false;

  const statementNode = complexSubstitution.getStatementNode(),
        simpleSubstitutionString = simpleSubstitution.asString(localContextA, localContextB),
        complexSubstitutionString = complexSubstitution.asString(localContextA, localContextB);

  localContextB.trace(`Resolving the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution...`, statementNode);

  const transformedSubstitution = transformedSubstitutionFromComplexSubstitutionSimpleSubstitutionAndSubstitutions(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB);

  if (transformedSubstitution !== null) {
    const variableNode = transformedSubstitution.getVariableNode(),
          metavariableNode = transformedSubstitution.getMetavariableNode();

    if (false) {
      ///
    } else if (variableNode !== null) {
      const substitution = substitutions.findSubstitutionByVariableNode(variableNode);

      if (substitution === null) {
        substitutions.addSubstitution(transformedSubstitution, localContextA, localContextB);

        substitutions.removeSubstitution(complexSubstitution, localContextA, localContextB);

        complexSubstitutionResolvedAgainstSimpleSubstitution = true;
      } else {
        const termNode = transformedSubstitution.getTermNode(),
              termNodeMatches = substitution.matchTermNode(termNode);

        if (termNodeMatches) {
          substitutions.removeSubstitution(complexSubstitution, localContextA, localContextB);

          complexSubstitutionResolvedAgainstSimpleSubstitution = true;
        }
      }
    } else if (metavariableNode !== null) {
      const substitution = substitutions.findSubstitutionByMetavariableNode(metavariableNode);

      if (substitution === null) {
        substitutions.addSubstitution(transformedSubstitution, localContextA, localContextB);

        substitutions.removeSubstitution(complexSubstitution, localContextA, localContextB);

        complexSubstitutionResolvedAgainstSimpleSubstitution = true;
      } else {
        const statementNode = transformedSubstitution.getStatementNode(),
              statementNodeMatches = substitution.matchStatementNode(statementNode);

        if (statementNodeMatches) {
          substitutions.removeSubstitution(complexSubstitution, localContextA, localContextB);

          complexSubstitutionResolvedAgainstSimpleSubstitution = true;
        }
      }
    }
  }

  if (complexSubstitutionResolvedAgainstSimpleSubstitution) {
    localContextB.debug(`...resolved the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution.`, statementNode);
  }

  return complexSubstitutionResolvedAgainstSimpleSubstitution;
}

function transformedSubstitutionFromComplexSubstitutionSimpleSubstitutionAndSubstitutions(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB) {
  let transformedSubstitution;

  const substitution = complexSubstitution.getSubstitution();

  transformedSubstitution = substitution.transformed(substitutions);

  if (transformedSubstitution !== null) {
    const simpleSubstitutionStatementNode = simpleSubstitution.getStatementNode(),
          complexSubstitutionStatementNode = complexSubstitution.getStatementNode();

    substitutions = Substitutions.fromNothing();  ///

    const complexSubstitutionStatementWithSimpleSubstitutionStatement = unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement(complexSubstitutionStatementNode, simpleSubstitutionStatementNode, substitutions, localContextA, localContextB);

    if (complexSubstitutionStatementWithSimpleSubstitutionStatement) {
      const substitution = transformedSubstitution; ///

      transformedSubstitution = substitution.transformed(substitutions);
    }
  }

  return transformedSubstitution;
}
