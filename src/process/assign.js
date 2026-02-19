"use strict";

import { variableFromVariableNode } from "../utilities/element";

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

export function judgementAssignmentFromJudgement(judgement) {
  return function (context) {
    const judgementString = judgement.getString(),
          judgementAdded = context.addJudgement(judgement),
          assigned = judgementAdded; ///

    assigned ?
      context.trace(`Assigned the '${judgementString}' judgement.`) :
        context.debug(`Unable to assign the '${judgementString}' judgement.`);

    return assigned;
  };
}

export default function assignAssignments(assignments) {
  const assignmentsAssigned = assignments.every((assigment) => {
    const assigned = assigment();

    if (assigned) {
      return true;
    }
  });

  return assignmentsAssigned;
}

function variableAssignmentFromVariableNodeAndType(variableNode, type, context) {
  const variable = variableFromVariableNode(variableNode, context);

  variable.setType(type);

  const variableAssignment = () => {
    context.addVariable(variable);

    const variableTypeString = variable.getTypeString(),
          variableString = variable.getString(),
          assigned = true;

    assigned ?
      context.trace(`Assigned the '${variableString}' variable with type '${variableTypeString}'.`) :
        context.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeString}'.`);

    return assigned;
  }

  return variableAssignment;
}
