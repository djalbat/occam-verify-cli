"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

  if (statementVerified) {
    if (derived) {
      const derivedUnqualifiedStatementVerified = verifyDerivedUnqualifiedStatement(unqualifiedStatementNode, localContext);

      unqualifiedStatementVerified = derivedUnqualifiedStatementVerified; ///
    } else {
      unqualifiedStatementVerified = true;
    }
  }

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}

function verifyDerivedUnqualifiedStatement(unqualifiedStatementNode, localContext) {
  let derivedUnqualifiedStatementVerified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' derived unqualified statement...`, unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementUnified = localContext.unifyStatement(statementNode, localContext);

  derivedUnqualifiedStatementVerified = statementUnified;  ///

  if (derivedUnqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' derived unqualified statement.`, unqualifiedStatementNode);
  }

  return derivedUnqualifiedStatementVerified;
}
