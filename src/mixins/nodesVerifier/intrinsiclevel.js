"use strict";

import verifyTerm from "../../verify/term";
import TermForVariableSubstitution from "../../substitution/termForVariable";

import { first } from "../../utilities/array";

function verifyVariableNode(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
  let variableNodeVerified = false;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);

    if (substitutionMatchesVariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const termNode = termNodeB, ///
          termNodeMatches = substitution.matchTermNode(termNode);

    if (termNodeMatches) {
      const verifiedAhead = verifyAhead();

      variableNodeVerified = verifiedAhead;  ///
    }
  } else {
    const variableNode = variableNodeA, ///
          localContext = localContextA, ///
          variable = localContext.findVariableByVariableNode(variableNode);

    if (variable !== null) {
      const terms = [],
            termNode = termNodeB, ///
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

      variableNodeVerified = termVerified;  ///
    }
  }

  return variableNodeVerified;
}

const intrinsicLevelNodesVerifierMixins = {
  verifyVariableNode
};

export default intrinsicLevelNodesVerifierMixins;
