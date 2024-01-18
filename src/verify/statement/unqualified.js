"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified = false;

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' unqualified statement...`, unqualifiedStatementNode);

    if (derived) {
      const statementMatches = localContext.matchStatement(statementNode);

      unqualifiedStatementVerified = statementMatches;  ///
    }

    if (!unqualifiedStatementVerified) {
      const context = localContext, ///
            statementVerified = verifyStatement(statementNode, assignments, derived, context, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      unqualifiedStatementVerified = statementVerified;  ///
    }

    if (unqualifiedStatementVerified) {
      localContext.debug(`...verified the '${statementString}' unqualified statement.`, unqualifiedStatementNode);
    }
  }

  return unqualifiedStatementVerified;
}
