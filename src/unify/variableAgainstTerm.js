"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable");

export default function unifyVariableAgainstTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB) {
  let variableUnifiedAgainstTerm = false;

  const substitution = substitutions.findSubstitution((substitution) => {
    const substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);

    if (substitutionMatchesVariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const substitutionMatchesTermNodeB = substitution.matchTermNode(termNodeB);

    if (substitutionMatchesTermNodeB) {
      variableUnifiedAgainstTerm = true;
    }
  } else {
    const variableA = localContextA.findVariableByVariableNode(variableNodeA);

    if (variableA !== null) {
      const variableB = variableFromTermNode(termNodeB, localContextB);

      if (variableA !== variableB) {
        const termNode = termNodeB, ///
              variableNode = variableNodeA, ///
              termForVariableSubstitution = TermForVariableSubstitution.fromVariableNodeAndTermNode(variableNode, termNode),
              substitution = termForVariableSubstitution;  ///

        substitutions.addSubstitution(substitution, localContextA, localContextB);
      }

      variableUnifiedAgainstTerm = true;
    }
  }

  return variableUnifiedAgainstTerm;
}

function variableFromTermNode(termNode, localContext) {
  let variable = null;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    variable = localContext.findVariableByVariableNode(variableNode);
  }

  return variable;
}
