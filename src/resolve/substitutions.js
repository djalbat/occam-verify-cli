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

  const transformedSubstitution = transformedSubstitutionFromComplexSubstitutionSimpleSubstitutionAndSubstitutions(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB);

  if (transformedSubstitution !== null) {
    const variableNode = transformedSubstitution.getVariableNode(),
          substitution = substitutions.findSubstitutionByVariableNode(variableNode);

    if (substitution === null) {
      simpleSubstitution = transformedSubstitution; ///

      substitutions.addSubstitution(simpleSubstitution, localContextA, localContextB);

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
  }

  if (complexSubstitutionResolvedAgainstSimpleSubstitution) {
    localContextB.debug(`...resolved the complex ${complexSubstitutionString} substitution against the simple ${simpleSubstitutionString} substitution.`, statementNode);
  }

  return complexSubstitutionResolvedAgainstSimpleSubstitution;
}

function unifyComplexSubstitutionStatementWithSimpleSubstitutionStatement(complexSubstitutionStatementNode, simpleSubstitutionStatementNode, substitutions, localContextA, localContextB) {
  let complexSubstitutionStatementWithSimpleSubstitutionStatement;

  const nodeA = complexSubstitutionStatementNode,  ///
        nodeB = simpleSubstitutionStatementNode;  ///

  localContextA = localContextB;  ///

  const unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

  complexSubstitutionStatementWithSimpleSubstitutionStatement = unified;  ///

  return complexSubstitutionStatementWithSimpleSubstitutionStatement;
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
