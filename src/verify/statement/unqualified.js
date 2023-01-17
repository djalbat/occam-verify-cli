"use strict";

import verifyStatement from "../statement";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assertions, derived, proofContext) {
  let unqualifiedStatementVerified = false;

  proofContext.begin(unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = nodeAsString(statementNode);

    proofContext.debug(`Verifying the ${statementString} unqualified statement...`);

    let statementMatches = true;

    if (derived) {
      statementMatches = proofContext.matchStatement(statementNode);
    }

    if (statementMatches) {
      const statementVerified = verifyStatement(statementNode, assertions, proofContext);

      unqualifiedStatementVerified = statementVerified;  ///
    }
  }

  unqualifiedStatementVerified ?
    proofContext.complete(unqualifiedStatementNode) :
      proofContext.halt(unqualifiedStatementNode);

  return unqualifiedStatementVerified;
}
