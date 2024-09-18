"use strict";

import TermForVariableSubstitution from "../substitution/termForVariable";

import { variableFromTermNode } from "../utilities/unify";

export default function unifyVariableWithTerm(variableNodeA, termNodeB, substitutions, localContextA, localContextB) {
  let variableUnifiedWithTerm = false;

  const substitution = substitutions.findSubstitutionByVariableNode(variableNodeA);

  if (substitution !== null) {
    const termNodeMatches = substitution.matchTermNode(termNodeB);

    if (termNodeMatches) {
      variableUnifiedWithTerm = true;
    }
  } else {
    const variableA = localContextA.findVariableByVariableNode(variableNodeA),
          variableB = variableFromTermNode(termNodeB, localContextB);

    if (variableA === variableB) {
      variableUnifiedWithTerm = true;
    } else {
      const termNode = termNodeB, ///
            variableNode = variableNodeA, ///
            termForVariableSubstitution = TermForVariableSubstitution.fromTernNodeAndVariableNode(termNode, variableNode),
            substitution = termForVariableSubstitution;  ///

      substitutions.addSubstitution(substitution, localContextA, localContextB);

      variableUnifiedWithTerm = true;
    }
  }

  return variableUnifiedWithTerm;
}
