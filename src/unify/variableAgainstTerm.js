"use strict";

import verifyTerm from "../verify/term";
import TermForVariableSubstitution from "../substitution/termForVariable";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable");

export default function unifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB, verifyAhead) {
  let variableUnifiedAgainstTerm = false;

  const substitution = substitutions.find((substitution) => {
    const substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);

    if (substitutionMatchesVariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const substitutionMatchesTermNodeB = substitution.matchTermNode(termNodeB);

    if (substitutionMatchesTermNodeB) {
      const verifiedAhead = verifyAhead();

      variableUnifiedAgainstTerm = verifiedAhead;  ///
    }
  } else {
    const variableA = localContextA.findVariableByVariableNode(variableNodeA);

    if (variableA !== null) {
      const terms = [],
            termUnified = verifyTerm(termNodeB, terms, localContextB, () => {
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
                  const termNode = termNodeB, ///
                        variableNode = variableNodeA, ///
                        termForVariableSubstitution = TermForVariableSubstitution.fromVariableNodeAndTermNode(variableNode, termNode),
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

      variableUnifiedAgainstTerm = termUnified;  ///
    }
  }

  return variableUnifiedAgainstTerm;
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