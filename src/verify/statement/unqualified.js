"use strict";

import verifyStatement from "../statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, proofContext) {
  let unqualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = proofContext.nodeAsString(statementNode);

    proofContext.debug(`Verifying the '${statementString}' unqualified statement...`, unqualifiedStatementNode);

    let statementMatches = true;

    if (derived) {
      statementMatches = proofContext.matchStatement(statementNode);
    }

    if (statementMatches) {
      const context = proofContext, ///
            statementVerified = verifyStatement(statementNode, assignments, derived, context);

      unqualifiedStatementVerified = statementVerified;  ///
    }
  }

  if (unqualifiedStatementVerified) {
    const statementString = proofContext.nodeAsString(statementNode);

    proofContext.info(`Verified the '${statementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}
