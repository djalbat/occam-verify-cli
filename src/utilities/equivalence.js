"use strict";

import { arrayUtilities } from "necessary";

const { compress } = arrayUtilities;

export function variablesFromTerm(term, context) {
  const termNode = term.getNode(),
        variableNodes = termNode.getVariableNodes(),
        variables = variableNodes.map((variableNode) => {
          const variableIdentifier = variableNode.getVariableIdentifier(),
                variable = context.findVariableByVariableIdentifier(variableIdentifier);

          return variable;
        });

  compress(variables, (variableA, variableB) => {
    const variableAEqualToVariableB = variableA.isEqualTo(variableB);

    if (!variableAEqualToVariableB) {
      return true;
    }
  });

  return variables;
}
