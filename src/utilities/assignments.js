"use strict";

export function assignAssignments(assignments, localContext) {
  const assignmentsAssigned = assignments.every((assigment) => {
    const assignmentAssigned = assigment.assign(localContext);

    return assignmentAssigned
  });

  return assignmentsAssigned;
}
