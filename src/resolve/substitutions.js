"use strict";

import LocalContext from "../context/local";
import Substitutions from "../substitutions";
import metaLevelUnifier from "../unifier/metaLevel";

export default function resolveSubstitutions(substitutions, fileContextA, localContextB) {
  let substitutionsResolved = substitutions.areResolved();

  if (!substitutionsResolved) {
    const localContextA = LocalContext.fromFileContext(fileContextA),
          metavariableNodes = substitutions.getMetavariableNodes();

    substitutionsResolved = metavariableNodes.every((metavariableNode) => {
      const complexSubstitutions = substitutions.findComplexSubstitutionsByMetavariableNode(metavariableNode),
            complexSubstitutionsResolved = resolveComplexSubstitutions(complexSubstitutions, substitutions, localContextA, localContextB);

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  return substitutionsResolved;
}

function resolveComplexSubstitution(complexSubstitution, substitutions, localContextA, localContextB) {
  let complexSubstitutionResolved = false;

  const metavariableNode = complexSubstitution.getMetavariableNode(),
        simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);

  if (simpleSubstitution !== null) {
    const complexSubstitutionResolvedAgainstSimpleSubstitution = resolveComplexSubstitutionAgainstSimpleSubstitution(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB);

    complexSubstitutionResolved = complexSubstitutionResolvedAgainstSimpleSubstitution; ///
  }

  return complexSubstitutionResolved;
}

function resolveComplexSubstitutions(complexSubstitutions, substitutions, localContextA, localContextB) {
  const complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
    const complexSubstitutionResolved = resolveComplexSubstitution(complexSubstitution, substitutions, localContextA, localContextB);

    if (complexSubstitutionResolved) {
      return true;
    }
  });

  return complexSubstitutionsResolved;
}

function resolveComplexSubstitutionAgainstSimpleSubstitution(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB) {
  let complexSubstitutionResolvedAgainstSimpleSubstitution = false;

  const statementNode = complexSubstitution.getStatementNode(),
        simpleSubstitutionString = simpleSubstitution.asString(localContextA, localContextB),
        complexSubstitutionString = complexSubstitution.asString(localContextA, localContextB);

  localContextB.trace(`Resolving the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution...`, statementNode);

  let substitution,
      transformedSubstitution;

  substitution = complexSubstitution.getSubstitution();

  transformedSubstitution = substitution.transformed(substitutions);

  if (transformedSubstitution !== null) {
    const complexSubstitutionStatementNode = complexSubstitution.getStatementNode(),
          simpleSubstitutionStatementNode = simpleSubstitution.getStatementNode(),
          outerSubstitutions = substitutions, ///
          innerSubstitutions = Substitutions.fromNothing(),
          nodeA = complexSubstitutionStatementNode,  ///
          nodeB = simpleSubstitutionStatementNode; ///

    substitutions = innerSubstitutions; ///

    localContextA = localContextB;  ///

    const unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    if (unified) {
      substitution = transformedSubstitution; ///

      transformedSubstitution = substitution.transformed(substitutions);

      if (transformedSubstitution !== null) {
        substitution = transformedSubstitution; ///

        ///
      }
    }
  }

  if (complexSubstitutionResolvedAgainstSimpleSubstitution) {
    localContextB.debug(`...resolved the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution.`, statementNode);
  }

  return complexSubstitutionResolvedAgainstSimpleSubstitution;
}
