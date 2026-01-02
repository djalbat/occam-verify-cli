"use strict";

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

export function equalityAssignmentFromEquality(equality) {
  return function (context) {
    const equalityString = equality.getString(),
          equalityAdded = context.addEquality(equality),
          assigned = equalityAdded; ///

    assigned ?
      context.trace(`Assigned the '${equalityString}' equality.`) :
        context.debug(`Unable to assign the '${equalityString}' equality.`);

    return assigned;
  };
}

export function variableAssignmentFromVariable(variable) {
  return function (context) {
    const nested = false;

    context.addVariable(variable, nested);

    const variableTypeString = variable.getTypeString(),
          variableString = variable.getString(),
          assigned = true;

    assigned ?
      context.trace(`Assigned the '${variableString}' variable with type '${variableTypeString}'.`) :
        context.debug(`Unable to assign the '${variableString}' variable with type '${variableTypeString}'.`);

    return assigned;
  };
}

export default function assignAssignments(assignments, context) {
  const assignmentsAssigned = assignments.every((assigment) => {
    const assigned = assigment(context);

    if (assigned) {
      return true;
    }
  });

  return assignmentsAssigned;
}
