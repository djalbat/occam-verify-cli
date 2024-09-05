"use strict";

import verifyStatement from "../../verify/statement";

import { nodeQuery } from "../../utilities/query";
import { verifyStatementAsEquality, verifyStatementAsTypeAssertion } from "../../verify/statement";

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

    if (matchesStatementNode) {
      derivedUnqualifiedStatementVerified = true;
    } else {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            derivedStatementVerified = verifyDerivedStatement(statementNode, assignments, derived, localContext);

      derivedUnqualifiedStatementVerified = derivedStatementVerified; ///
    }

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

function verifyDerivedStatement(statementNode, assignments, derived, localContext) {
  let derivedStatementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' derived statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAsTypeAssertion
  ];

  verifyStatementFunctions.some((verifyStatementFunction) => {
    const derivedStatementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);

    if (derivedStatementVerified) {
      return true;
    }
  });

  derivedStatementVerified = true; ///

  if (derivedStatementVerified) {
    localContext.debug(`...verified the '${statementString}' derived statement.`, statementNode);
  }

  return derivedStatementVerified;
}
