"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let unqualifiedStatementVerified;

  const unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

  localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`, unqualifiedStatementNode);

  const verifyUnqualifiedStatementFunctions = [
    verifyDerivedUnqualifiedStatement,
    verifyStatedUnqualifiedStatement
  ];

  unqualifiedStatementVerified = verifyUnqualifiedStatementFunctions.some((verifyUnqualifiedStatementFunction) => {
    const unqualifiedStatementVerified = verifyUnqualifiedStatementFunction(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      return true;
    }
  });

  if (unqualifiedStatementVerified) {
    localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`, unqualifiedStatementNode);
  }

  return unqualifiedStatementVerified;
}

function verifyDerivedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let derivedUnqualifiedStatementVerified = false;

  if (derived) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

    localContext.trace(`Verifying the '${unqualifiedStatementString}' derived unqualified statement...`, unqualifiedStatementNode);

    const matchesStatementNode = localContext.matchStatementNode(statementNode);

    derivedUnqualifiedStatementVerified = matchesStatementNode;  ///

    if (derivedUnqualifiedStatementVerified) {
      localContext.debug(`...verified the '${unqualifiedStatementString}' derived unqualified statement.`, unqualifiedStatementNode);
    }
  }

  return derivedUnqualifiedStatementVerified;
}

function verifyStatedUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext) {
  let statedUnqualifiedStatementVerified = false;

  if (!derived) {
    const statementNode = statementNodeQuery(unqualifiedStatementNode),
          unqualifiedStatementString = localContext.nodeAsString(unqualifiedStatementNode);

    localContext.trace(`Verifying the '${unqualifiedStatementString}' stated unqualified statement...`, unqualifiedStatementNode);

    const statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

    statedUnqualifiedStatementVerified = statementVerified; ///

    if (statedUnqualifiedStatementVerified) {
      localContext.debug(`...verified the '${unqualifiedStatementString}' stated unqualified statement.`, unqualifiedStatementNode);
    }
  }

  return statedUnqualifiedStatementVerified;
}
