"use strict";

import verifyStatement from "../../verify/statement";
import unifyQualifiedStatement from "../../unify/qualifiedStatement";

import { nodeQuery } from "../../utilities/query";
import { assignAssignments } from "../../utilities/assignments";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement!");

export default function verifyQualifiedStatement(qualifiedStatementNode, substitutions, localContext) {
  let qualifiedStatementVerified = false;

  const qualifiedStatementString = localContext.nodeAsString(qualifiedStatementNode);

  localContext.trace(`Verifying the '${qualifiedStatementString}' qualified statement...`, qualifiedStatementNode);

  if (!qualifiedStatementVerified) {
    const stated = true,
          assignments = [],
          statementNode = statementNodeQuery(qualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const qualifiedStatementUnified = unifyQualifiedStatement(qualifiedStatementNode, substitutions, localContext);

      if (qualifiedStatementUnified) {
        const assignmentsAssigned = assignAssignments(assignments, localContext);

        qualifiedStatementVerified = assignmentsAssigned; ///
      }
    }
  }

  if (qualifiedStatementVerified) {
    localContext.debug(`...verified the '${qualifiedStatementString}' qualified statement.`, qualifiedStatementNode);
  }

  return qualifiedStatementVerified;
}
