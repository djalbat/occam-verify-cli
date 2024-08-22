"use strict";

import verifyTerm from "../verify/term";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { first } from "../utilities/array";

export default function verifyVariableAgainstTerm(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead) {
  let variableVerifiedAginastTerm = false;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNode);

    if (substitutionMatchesVariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const termNodeMatches = substitution.matchTermNode(termNode);

    if (termNodeMatches) {
      const verifiedAhead = verifyAhead();

      variableVerifiedAginastTerm = verifiedAhead;  ///
    }
  } else {
    const localContext = localContextA, ///
          variable = localContext.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      const terms = [],
            localContext = localContextB, ///
            termVerified = verifyTerm(termNode, terms, localContext, () => {
              let verifiedAhead = false;

              const firstTerm = first(terms),
                    term = firstTerm, ///
                    termType = term.getType(),
                    variableType = variable.getType(),
                    variableTypeEqualToOrSuperTypeOfTermType = variableType.isEqualToOrSuperTypeOf(termType);

              if (variableTypeEqualToOrSuperTypeOfTermType) {
                const termForVariableSubstitution = TermForVariableSubstitution.fromVariableNodeAndTermNode(variableNode, termNode),
                      substitution = termForVariableSubstitution;  ///

                substitutions.push(substitution);

                verifiedAhead = verifyAhead();

                if (!verifiedAhead) {
                  substitutions.pop();
                }
              }

              return verifiedAhead;
            });

      variableVerifiedAginastTerm = termVerified;  ///
    }
  }

  return variableVerifiedAginastTerm;
}
