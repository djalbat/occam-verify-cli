"use strict";

import verifyStatement from "../../verify/statement";
import unifyUnqualifiedStatement from "../../unify/unqualifiedStatement";

import { nodeQuery } from "../../utilities/query";
import { assignAssignments } from "../../utilities/assignments";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, localContext) {
  let unqualifiedStatementVerified = false;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  if (!unqualifiedStatementVerified) {
    const stated = false,
          assignments = [],
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const assignmentsAssigned = assignAssignments(assignments, localContext);

      unqualifiedStatementVerified = assignmentsAssigned;  ///
    }
  }

  if (!unqualifiedStatementVerified) {
    const stated = true,
          assignments = [],
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const unqualifiedStatementUnified = unifyUnqualifiedStatement(unqualifiedStatementNode, localContext);

      unqualifiedStatementVerified = unqualifiedStatementUnified; ///
    }
  }

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}
