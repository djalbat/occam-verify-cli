"use strict";

import verifyEquality from "../../verify/equality";
import verifyJudgement from "../../verify/judgement";
import verifyStatement from "../../verify/statement";
import verifyTypeAssertion from "../assertion/type";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      judgementNodeQuery = nodeQuery("/statement/judgement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

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

  const verifyDerivedStatementFunctions = [
    verifyDerivedStatementAsEquality,
    verifyDerivedStatementAsJudgement,
    verifyDerivedStatementAsTypeAssertion
  ];

  derivedStatementVerified = verifyDerivedStatementFunctions.every((verifyDerivedStatementFunction) => {  ///
    const derivedStatementVerified = verifyDerivedStatementFunction(statementNode, assignments, derived, localContext);

    if (derivedStatementVerified) {
      return true;
    }
  });

  if (derivedStatementVerified) {
    localContext.debug(`...verified the '${statementString}' derived statement.`, statementNode);
  }

  return derivedStatementVerified;
}

 function verifyDerivedStatementAsEquality(statementNode, assignments, derived, localContext) {
  let derivedStatementVerifiedAsEquality = true; ///

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' derived statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    derivedStatementVerifiedAsEquality = equalityVerified; ///

    if (derivedStatementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' derived statement as an equality.`, statementNode);
    }
  }

  return derivedStatementVerifiedAsEquality;
}

 function verifyDerivedStatementAsJudgement(statementNode, assignments, derived, localContext) {
  let derivedStatementVerifiedAsJudgement = true;

  const judgementNode = judgementNodeQuery(statementNode);

  if (judgementNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' derived statement as a judgement...`, statementNode);

    const judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);

    derivedStatementVerifiedAsJudgement = judgementVerified;  ///

    if (derivedStatementVerifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' derived statement as a judgement.`, statementNode);
    }
  }

  return derivedStatementVerifiedAsJudgement;
}

 function verifyDerivedStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsTypeAssertion = true;  ///

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' derived statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' derived statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}
