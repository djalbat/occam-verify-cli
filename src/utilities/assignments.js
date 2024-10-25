"use strict";

export function assignAssignments(assignments, context) {
  const assignmentsAssigned = assignments.every((assigment) => {
    const assignmentAssigned = assigment.assign(context);

    return assignmentAssigned
  });

  return assignmentsAssigned;
}
