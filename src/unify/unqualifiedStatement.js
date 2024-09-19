"use strict";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function unifyUnqualifiedStatement(unqualifiedStatementNode, localContext) {
  let unqualifiedStatementUnified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Unifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementUnified = localContext.unifyStatement(statementNode, localContext);

  unqualifiedStatementUnified = statementUnified;  ///

  if (unqualifiedStatementUnified) {
    localContext.debug(`...unified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementUnified;
}
