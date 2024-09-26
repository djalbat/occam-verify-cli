"use strict";

import Substitutions from "../substitutions";
import unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement from "../unify/simpleSubstitutionStatementWithComplexSubstitutionStatement";

export default function resolveComplexSubstitutionAgainstSimpleSubstitution(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB) {
  let complexSubstitutionResolvedAgainstSimpleSubstitution = false;

  const statementNode = complexSubstitution.getStatementNode(),
        simpleSubstitutionString = simpleSubstitution.asString(localContextA, localContextB),
        complexSubstitutionString = complexSubstitution.asString(localContextA, localContextB);

  localContextB.trace(`Resolving the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution...`, statementNode);

  const transformedSubstitution = transformedSubstitutionFromComplexSubstitution(complexSubstitution, substitutions, localContextA, localContextB);

  if (transformedSubstitution !== null) {
    const substitution = substitutionFromComplexSubstitutionAndAndSimpleSubstitution(complexSubstitution, simpleSubstitution, localContextA, localContextB);

    if (substitution !== null) {
      const substitutionString = substitution.asString(localContextB, localContextB),
            transformedSubstitutionString = transformedSubstitution.asString(localContextB, localContextB);

      localContextB.trace(`Equating the ${substitutionString} substitution to the transformed ${transformedSubstitutionString} substitution...`, statementNode);

      const substitutionEqualToTransformedSubstitution = substitution.isEqualTo(transformedSubstitution);

      complexSubstitutionResolvedAgainstSimpleSubstitution = substitutionEqualToTransformedSubstitution;  ///
    }
  }

  if (complexSubstitutionResolvedAgainstSimpleSubstitution) {
    localContextB.debug(`...resolved the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution.`, statementNode);
  }

  return complexSubstitutionResolvedAgainstSimpleSubstitution;
}

function transformedSubstitutionFromComplexSubstitution(complexSubstitution, substitutions, localContextA, localContextB) {
  const substitution = complexSubstitution.getSubstitution(),
        substitutionString = substitution.asString(localContextA, localContextA),
        complexSubstitutionStatementNode = complexSubstitution.getStatementNode();

  localContextB.trace(`Transforming the complex substitution's '${substitutionString}' substitution....`, complexSubstitutionStatementNode);

  const transformedSubstitution = substitution.transformed(substitutions);

  if (transformedSubstitution !== null) {
    const transformedSubstitutionString = transformedSubstitution.asString(localContextB, localContextB);

    localContextB.debug(`Transformed the complex substitution's '${substitutionString}' substitution into the '${transformedSubstitutionString}' substitution.`, complexSubstitutionStatementNode);
  }

  return transformedSubstitution;
}

function substitutionFromComplexSubstitutionAndAndSimpleSubstitution(complexSubstitution, simpleSubstitution, localContextA, localContextB) {
  let substitution = null;

  const substitutions = Substitutions.fromNothing(),  ///
        simpleSubstitutionStatementNode = simpleSubstitution.getStatementNode(),
        complexSubstitutionStatementNode = complexSubstitution.getStatementNode();

  localContextA = localContextB;  ///

  const simpleSubstitutionStatementUnifiedWithComplexSubstitutionStatement = unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement(complexSubstitutionStatementNode, simpleSubstitutionStatementNode, substitutions, localContextA, localContextB);

  if (simpleSubstitutionStatementUnifiedWithComplexSubstitutionStatement) {
    const substitutionsLength = substitutions.getLength();

    if (substitutionsLength === 1) {
      const firstSubstitution = substitutions.getFirstSubstitution();

      substitution = firstSubstitution; ///
    }
  }

  return substitution;
}
