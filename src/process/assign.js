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
  let leftVariableAssignment = (contxt) => {
    ///
  };

  const type = equality.getType(),
        leftTermNode = equality.getLeftTermNode(),
        singularVariableNode = leftTermNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const leftVariableNode = singularVariableNode;  ///

    leftVariableAssignment = variableAssignmentFromVariableNodeAndType(leftVariableNode, type, context);
  }

  return leftVariableAssignment;
}

export function rightVariableAssignmentFromEquality(equality, context) {
  let rightVariableAssignment = (context) => {
    ///
  };

  const type = equality.getType(),
        rightTermNode = equality.getRightTermNode(),
        singularVariableNode = rightTermNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const rightVariableNode = singularVariableNode;  ///

    rightVariableAssignment = variableAssignmentFromVariableNodeAndType(rightVariableNode, type, context);
  }

  return rightVariableAssignment;
}

export function variableAssignmentFromTypeAssertion(typeAssertion, context) {
  let variableAssignment = (context) => {
    ///
  };

  const term = typeAssertion.getTerm(),
        termSingular = term.isSingular();

  if (termSingular) {
    const variableIdentifier = term.getVariableIdentifier(),
          variable = context.findVariableByVariableIdentifier(variableIdentifier);

    if (variable !== null) {
      const type = typeAssertion.getType(),
            variableNode = variable.getNode();

      variableAssignment = variableAssignmentFromVariableNodeAndType(variableNode, type, context);
    }
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

function variableAssignmentFromVariableNodeAndType(variableNode, type, context) {
  const variable = variableFromVariableNode(variableNode, context);

  variable.setType(type);

  const variableAssignment = (context) => {
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

  return variableAssignment;
}
