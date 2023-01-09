"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext) {
  let unqualifiedStatementVerified = false;

  proofContext.begin(unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const statementString = nodeAsString(statementNode);

    proofContext.debug(`Verifying the ${statementString} unqualified statement...`);

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

  unqualifiedStatementVerified ?
    proofContext.complete(unqualifiedStatementNode) :
      proofContext.halt(unqualifiedStatementNode);

  return unqualifiedStatementVerified;
}
