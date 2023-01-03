"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext) {
  let unqualifiedStatementVerified = false;

  proofContext.begin(unqualifiedStatementNode);

  const unqualifiedStatementString = nodeAsString(unqualifiedStatementNode);

  proofContext.debug(`Verifying the '${unqualifiedStatementString}' unqualified statement...`);

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementVerified = verifyStatement(statementNode, proofContext);

    if (statementVerified) {
      const derived = proofContext.isDerived();

      if (derived) {
        const assertionMatches = proofContext.matchStatement(statementNode);

        unqualifiedStatementVerified = assertionMatches;  ///
      } else {
        unqualifiedStatementVerified = true;
      }
    }
  }

  if (unqualifiedStatementVerified) {
    proofContext.info(`Verified the '${unqualifiedStatementString}' unqualified statement.`);
  }

  unqualifiedStatementVerified ?
    proofContext.complete(unqualifiedStatementNode) :
      proofContext.halt(unqualifiedStatementNode);

  return unqualifiedStatementVerified;
}
