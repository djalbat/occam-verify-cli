"use strict";

export function resolveSubstitutionsByMetavariableNode(metavariableNode, substitutions, localContextA, localContextB) {
  substitutions = substitutions.findSubstitutionsByMetavariableNode(metavariableNode);  ///

  const substitutionsResolved = resolveSubstitutions(substitutions, localContextA, localContextB),
        substitutionsResolvedByMetavariableNode = substitutionsResolved;  ///

  return substitutionsResolvedByMetavariableNode;
}

function resolveSubstitutions(substitutions, localContextA, localContextB) {
  let substitutionsResolved = substitutions.areResolved();

  if (!substitutionsResolved) {
    const simpleSubstitution = substitutions.findSimpleSubstitution();

    if (simpleSubstitution === null) {
      substitutionsResolved = true;
    } else {
      debugger
    }
  }

  return substitutionsResolved;
}