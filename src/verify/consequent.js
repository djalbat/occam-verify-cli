"use strict";

import Consequent from "../consequent";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/*/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement!");

export default function verifyConsequent(consequentNode, consequents, proofContext) {
  let consequentVerified = false;

  proofContext.begin(consequentNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode),
        unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

  if (unqualifiedStatementVerified) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          consequent = Consequent.fromStatementNode(statementNode);

    consequents.push(consequent);

    consequentVerified = true;
  }

  consequentVerified ?
    proofContext.complete(consequentNode) :
      proofContext.halt(consequentNode);

  return consequentVerified;
}
