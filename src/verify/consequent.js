"use strict";

import Consequent from "../consequent";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

export default function verifyConsequent(consequentNode, consequents, localContext) {
  let consequentVerified = false;

  const consequentString = localContext.nodeAsString(consequentNode);

  localContext.trace(`Verifying the '${consequentString}' consequent...`, consequentNode);

  const derived = false,
        assignments = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

  if (unqualifiedStatementVerified) {
    consequentVerified = true;
  }

  if (consequentVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          consequent = Consequent.fromStatementNode(statementNode);

    consequents.push(consequent);

    localContext.debug(`...verified the '${consequentString}' consequent.`, consequentNode);
  }

  return consequentVerified;
}
