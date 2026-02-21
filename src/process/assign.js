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
    const judgementAdded = context.addJudgement(judgement);

    return judgementAdded;
  };

  return judgementAssignment;
}

export function leftVariableAssignmentFromEquality(equality, context) {
  let leftVariableAssignment = null;

  const leftTermNode = equality.getLeftTermNode(),
        singularVariableNode = leftTermNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const type = equality.getType(),
          leftVariableNode = singularVariableNode;  ///

    leftVariableAssignment = variableAssignmentFromVariableNodeAndType(leftVariableNode, type, context);
  }

  return leftVariableAssignment;
}

export function rightVariableAssignmentFromEquality(equality, context) {
  let rightVariableAssignment = null;

  const rightTermNode = equality.getRightTermNode(),
        singularVariableNode = rightTermNode.getSingularVariableNode();

  if (singularVariableNode !== null) {
    const type = equality.getType(),
          rightVariableNode = singularVariableNode;  ///

    rightVariableAssignment = variableAssignmentFromVariableNodeAndType(rightVariableNode, type, context);
  }

  return rightVariableAssignment;
}

export function variableAssignmentFromTypeAssertion(typeAssertion, context) {

  debugger

  // const { Type, Variable } = elements,
  //   termNode = this.term.getNode();
  //
  // let type,
  //   provisional;
  //
  // provisional = this.type.isProvisional();
  //
  // if (!provisional) {
  //   type = this.type;
  // } else {
  //   provisional = false;
  //
  //   type = Type.fromTypeAndProvisional(this.type, provisional);
  // }
  //
  // const singularVariableNode = termNode.getSingularVariableNode();
  //
  // if (singularVariableNode !== null) {
  //   const variableNode = singularVariableNode,  ///
  //     variable = Variable.fromVariableNodeAndType(variableNode, type, context),
  //     variableAssignment = variableAssignmentFromVariable(variable),

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
    context.addVariable(variable);

    const variableTypeString = variable.getTypeString(),
          variableString = variable.getString(),
          assigned = true;

    assigned ?
      context.trace(`Assigned the '${variableString}' variable with type '${variableTypeString}'.`) :
        context.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeString}'.`);

    return assigned;
  };

  return variableAssignment;
}
