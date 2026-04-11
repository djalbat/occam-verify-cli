"use strict";

import { variableFromVariableNode } from "../utilities/element";

export function variableAssignmentFromTermAndType(term, type, context) {
  let variableAssignment = (context) => {
    ///
  };

  const termSingular = term.isSingular();

  if (termSingular) {
    const termType = term.getType(),
          termTypeSuperTypeOfType = termType.isSuperTypeOf(type);

    if (termTypeSuperTypeOfType) {
      const variableNode = term.getVariableNode(),
            variable = variableFromVariableNode(variableNode, context);

      variable.setType(type);

      variableAssignment = (context) => {
        const declaredVariable = variable;  ///

        context.addDeclaredVariable(declaredVariable);
      };
    }
  }

  return variableAssignment;
}
