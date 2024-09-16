"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";

import { nodeQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable");

export default function unifyVariableWithTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB) {
  let variableUnifiedWithTerm = false;

  const substitution = substitutions.findSubstitution((substitution) => {
    const substitutionMatchesVariableNodeA = substitution.matchVariableNode(variableNodeA);

    if (substitutionMatchesVariableNodeA) {
      return true;
    }
  }) || null;

  if (substitution !== null) {
    const termNodeMatches = substitution.matchTermNode(termNodeB);

    if (termNodeMatches) {
      variableUnifiedWithTerm = true;
    }
  } else {
    const variableA = localContextA.findVariableByVariableNode(variableNodeA),
          variableB = variableFromTermNode(termNodeB, localContextB);

    if (variableA !== variableB) {
      const termNode = termNodeB, ///
            variableNode = variableNodeA, ///
            termForVariableSubstitution = TermForVariableSubstitution.fromTernNodeAndVariableNode(termNode, variableNode),
            substitution = termForVariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);
    }

    variableUnifiedWithTerm = true;
  }

  return variableUnifiedWithTerm;
}

function variableFromTermNode(termNode, localContext) {
  let variable = null;

  const variableNode = variableNodeQuery(termNode);

  if (variableNode !== null) {
    variable = localContext.findVariableByVariableNode(variableNode);
  }

  return variable;
}
