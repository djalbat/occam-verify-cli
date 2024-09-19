"use strict";

import resolveComplexSubstitutionAgainstSimpleSubstitution from "../resolve/complexSubstitutionAgainstSimpleSubstitution";

export default function resolveSubstitution(substitution, substitutions, localContextA, localContextB) {
  let complexSubstitutionResolved = false;

  const metavariableNode = substitution.getMetavariableNode(),
        simpleSubstitution = substitutions.findSimpleSubstitutionByMetavariableNode(metavariableNode);

  if (simpleSubstitution !== null) {
    const complexSubstitution = substitution, ///
          complexSubstitutionResolvedAgainstSimpleSubstitution = resolveComplexSubstitutionAgainstSimpleSubstitution(complexSubstitution, simpleSubstitution, substitutions, localContextA, localContextB);

    complexSubstitutionResolved = complexSubstitutionResolvedAgainstSimpleSubstitution; ///
  }

  return complexSubstitutionResolved;
}
