"use strict";

import { variableFromVariableNode } from "../utilities/element";

export function equalityAssignmentFromEquality(equality, context) {
  const equalityAssignment = (context) => {
    const equalityAdded = context.addEquality(equality);

    return equalityAdded;
  };

  return equalityAssignment;
}

export function judgementAssignmentFromJudgement(judgement, context) {
  const judgementAssignment = (context) => {
    const declaredJudgement = judgement,  ///
          declaredJudgementAdded = context.addDeclaredJudgement(declaredJudgement);

    return declaredJudgementAdded;
  };

  return judgementAssignment;
}

export function leftVariableAssignmentFromEquality(equality, context) {
  const type = equality.getType(),
        leftTerm = equality.getLeftTerm(),
        leftVariableAssignment = variableAssignmentFromTermAndType(leftTerm, type, context);

  return leftVariableAssignment;
}

export function rightVariableAssignmentFromEquality(equality, context) {
  const type = equality.getType(),
        rightTerm = equality.getRightTerm(),
        rightVariableAssignment = variableAssignmentFromTermAndType(rightTerm, type, context);

  return rightVariableAssignment;
}

export function variableAssignmentFromTypeAssertion(typeAssertion, context) {
  let variableAssignment = (context) => {
    ///
  };

  const term = typeAssertion.getTerm(),
        termSingular = term.isSingular();

  if (termSingular) {
    const type = typeAssertion.getType(),
          variableNode = term.getVariableNode();

    variableAssignment = variableAssignmentFromTermAndType(variableNode, type, context);
  }

  return variableAssignment;
}

export function variableAssignmentFromPrepertyAssertion(propertyAssertion, context) {

  debugger

  // let variable;
  //
  // const { Variable } = elements,
  //   termNode = this.term.getNode();
  //
  // variable = Variable.fromTermNode(termNode, context);
  //
  // if (variable !== null) {
  //   const variableIdentifier = variable.getIdentifier();
  //
  //   variable = context.findVariableByVariableIdentifier(variableIdentifier);
  //
  //   variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);
  //
  //   const variableAssignment = variableAssignmentFromVariable(variable),

  }

function variableAssignmentFromTermAndType(term, type, context) {
  let variableAssignment = (context) => {
    ///
  };

  const termSingular = term.isSingular();

  if (termSingular) {
    const termType = term.getType(),
          termTypeEqualToType = termType.isEqualTo(type);

    if (!termTypeEqualToType) {
      const variableNode = term.getVariableNode(),
            variable = variableFromVariableNode(variableNode, context);

      variable.setType(type);

      variableAssignment = (context) => {
        const declaredVariable = variable;  ///

        context.addDeclaredVariable(declaredVariable);

        const declaredVariableTypeString = declaredVariable.getTypeString(),
              declaredVariableString = declaredVariable.getString(),
              assigned = true;  ///

        assigned ?
          context.trace(`Assigned the '${declaredVariableString}' declared variable with type '${declaredVariableTypeString}'.`) :
             context.debug(`Unable to assign the '${declaredVariableString}' declared variable with type '${declaredVariableTypeString}'.`);

        return assigned;
      };
    }
  }

  return variableAssignment;
}
