"use strict";

import Consequent from "../consequent";
import verifyStatement from "../verify/statement";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

export default function verifyConsequent(consequentNode, consequents, localContext) {
  let consequentVerified = false;

  const consequentString = localContext.nodeAsString(consequentNode);

  localContext.trace(`Verifying the '${consequentString}' consequent...`, consequentNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode);

  if (unqualifiedStatementNode !== null) {
    const stated = true,
          assignments = [],
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const consequent = Consequent.fromStatementNode(statementNode);

      consequents.push(consequent);

      consequentVerified = true;
    }
  }

  if (consequentVerified) {
    localContext.debug(`...verified the '${consequentString}' consequent.`, consequentNode);
  }

  return consequentVerified;
}
