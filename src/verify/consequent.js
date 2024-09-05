"use strict";

import Consequent from "../consequent";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

export default function verifyConsequent(consequentNode, consequents, localContext) {
  let consequentVerified = false;

  const consequentString = localContext.nodeAsString(consequentNode);

  localContext.trace(`Verifying the '${consequentString}' consequent...`, consequentNode);

  const derived = false,
        assignments = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode);

  if (unqualifiedStatementNode !== null) {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            consequent = Consequent.fromStatementNode(statementNode);

      consequents.push(consequent);

      consequentVerified = true;
    }
  }

  if (consequentVerified) {
    localContext.debug(`...verified the '${consequentString}' consequent.`, consequentNode);
  }

  return consequentVerified;
}
