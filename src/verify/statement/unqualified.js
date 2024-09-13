"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";
import { verifyStatementTrivially } from "../../verify/statement";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

  if (statementVerified) {
    if (derived) {
      const statementVerifiedTrivially = verifyStatementTrivially(statementNode, localContext);

      if (statementVerifiedTrivially) {
        unqualifiedStatementVerified = true;
      } else {
        const derivedUnqualifiedStatementUnified = unifyDerivedUnqualifiedStatement(unqualifiedStatementNode, localContext);

        unqualifiedStatementVerified = derivedUnqualifiedStatementUnified; ///
      }
    } else {
      unqualifiedStatementVerified = true;
    }
  }

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}

function unifyDerivedUnqualifiedStatement(unqualifiedStatementNode, localContext) {
  let derivedUnqualifiedStatementUnified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Unifying the '${unqualifiedStatementString}' derived unqualified statement...`, unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementUnified = localContext.unifyStatement(statementNode, localContext);

  derivedUnqualifiedStatementUnified = statementUnified;  ///

  if (derivedUnqualifiedStatementUnified) {
    localContext.debug(`...unified the '${unqualifiedStatementString}' derived unqualified statement.`, unqualifiedStatementNode);
  }

  return derivedUnqualifiedStatementUnified;
}
