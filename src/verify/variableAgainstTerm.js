"use strict";

import verifyTerm from "../verify/term";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable");

export default function verifyVariableAgainstTerm(variableNode, termNode, substitutions, localContextA, localContextB, verifyAhead) {
  let variableVerifiedAgainstTerm = false;

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

      variableVerifiedAgainstTerm = verifiedAhead;  ///
    }
  } else {
    const variableA = localContextA.findVariableByVariableNode(variableNode);

    if (variableA !== null) {
      const terms = [],
            termVerified = verifyTerm(termNode, terms, localContextB, () => {
              let verifiedAhead = false;

              const firstTerm = first(terms),
                    termB = firstTerm, ///
                    variableB = variableFromTerm(termB, localContextB);

              if (variableA === variableB) {
                verifiedAhead = verifyAhead();
              } else {
                const term = termB, ///
                      variable = variableA, ///
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
              }

              return verifiedAhead;
            });

      variableVerifiedAgainstTerm = termVerified;  ///
    }
  }

  return variableVerifiedAgainstTerm;
}

function variableFromTerm(term, localContext) {
  let variable = null;

  const termNode = term.getNode(),
        variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    variable = localContext.findVariableByVariableNode(variableNode);
  }

  return variable;
}