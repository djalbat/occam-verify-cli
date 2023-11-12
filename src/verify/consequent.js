"use strict";

import Consequent from "../consequent";
import verifyUnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

export default function verifyConsequent(consequentNode, consequents, proofContext) {
  let consequentVerified = false;

  const consequentString = proofContext.nodeAsString(consequentNode);

  proofContext.debug(`Verifying the '${consequentString}' consequent.`, consequentNode);

  const derived = false,
        assignments = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          consequent = Consequent.fromStatementNode(statementNode);

    consequents.push(consequent);

    consequentVerified = true;
  }

  if (consequentVerified) {
    proofContext.info(`Verified the '${consequentString}' consequent.`, consequentNode);
  }

  return consequentVerified;
}
