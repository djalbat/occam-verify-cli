"use strict";

import verifyStatement from "../statement";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, derived, proofContext) {
  let unqualifiedStatementVerified = false;

  proofContext.begin(unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = nodeAsString(statementNode);

    proofContext.debug(`Verifying the ${statementString} unqualified statement...`);

    if (derived) {
      const assertionMatches = proofContext.matchStatement(statementNode);

      unqualifiedStatementVerified = assertionMatches;  ///
    } else {
      const qualified = false,
            statementVerified = verifyStatement(statementNode, qualified, proofContext);

      unqualifiedStatementVerified = statementVerified;  ///
    }
  }

  unqualifiedStatementVerified ?
    proofContext.complete(unqualifiedStatementNode) :
      proofContext.halt(unqualifiedStatementNode);

  return unqualifiedStatementVerified;
}
