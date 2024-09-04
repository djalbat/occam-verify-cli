"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
    unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  if (derived) {
    const matchesStatementNode = localContext.matchStatementNode(statementNode);

    unqualifiedStatementVerified = matchesStatementNode;  ///
  }

  if (!unqualifiedStatementVerified) {
    const statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

    unqualifiedStatementVerified = statementVerified; ///
  }

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}

"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  if (derived) {
    const matchesStatementNode = localContext.matchStatementNode(statementNode);

    unqualifiedStatementVerified = matchesStatementNode;  ///
  }

  if (!unqualifiedStatementVerified) {
    const statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

    unqualifiedStatementVerified = statementVerified;  ///
  }

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}
