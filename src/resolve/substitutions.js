"use strict";

import LocalContext from "../context/local";
import resolveSubstitution from "../resolve/substitution";

export default function resolveSubstitutions(substitutions, fileContextA, localContextB) {
  let substitutionsResolved = substitutions.areResolved();

  if (!substitutionsResolved) {
    const localContextA = LocalContext.fromFileContext(fileContextA),
          metavariableNodes = substitutions.getMetavariableNodes();

    substitutionsResolved = metavariableNodes.every((metavariableNode) => {
      const complexSubstitutions = substitutions.findComplexSubstitutionsByMetavariableNode(metavariableNode),
            complexSubstitutionsResolved = complexSubstitutions.everySubstitution((complexSubstitution) => {
              const substitution = complexSubstitution, ///
                    complexSubstitutionResolved = resolveSubstitution(substitution, substitutions, localContextA, localContextB);

              if (complexSubstitutionResolved) {
                return true;
              }
            });

      if (complexSubstitutionsResolved) {
        return true;
      }
    });
  }

  return substitutionsResolved;
}
