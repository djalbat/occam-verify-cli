"use strict";

import { first } from "../utilities/array";

export function assignAssignment(assignments, localContext) {
  let assignmentAssigned = true;

  const assignmentsLength = assignments.length;

  if (assignmentsLength === 1) {
    const firstAssignment = first(assignments),
          assignment = firstAssignment;

    assignmentAssigned = assignment.assign(localContext);
  }

  return assignmentAssigned;
}
