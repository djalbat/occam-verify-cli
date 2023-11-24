"use strict";

import Equality from "../equality";
import verifyTerms from "../verify/terms";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/typeAssertion";
import statementNodesVerifier from "../verifier/nodes/statement";

import { nodeQuery } from "../utilities/query";

const typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerified;

  const statementString = context.nodeAsString(statementNode);

  context.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAsTypeAssertion,
    verifyStatementAgainstCombinators
  ];

  statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, verifyAhead);

    if (statementVerified) {
      return true;
    }
  });

  if (statementVerified) {
    context.debug(`...verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}

Object.assign(verifyStatement, {
  statementNodesVerifier
});

export default verifyStatement;

export function verifyStatementAgainstCombinators(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAgainstCombinators;

  let combinators = context.getCombinators();

  combinators = [ ///
    bracketedCombinator,
    ...combinators
  ];

  statementVerifiedAgainstCombinators = combinators.some((combinator) => {
    const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead);

    if (statementVerifiedAgainstCombinator) {
      return true;
    }
  });

  return statementVerifiedAgainstCombinators;
}

function verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead) {
  let statementVerifiedAgainstCombinator;

  const statementString = context.nodeAsString(statementNode),
        combinatorString = combinator.getString();

  context.trace(`Verifying the '${statementString}' statement against the '${combinatorString}' combinator...`, statementNode);

  const combinatorStatementNode = combinator.getStatementNode(),
        nonTerminalNodeA = statementNode, ///
        nonTerminalNodeB = combinatorStatementNode, ///
        nonTerminalNodeVerified = statementNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead);

  statementVerifiedAgainstCombinator = nonTerminalNodeVerified;  ///

  if (statementVerifiedAgainstCombinator) {
    context.debug(`...verified the '${statementString}' statement against the '${combinatorString}' combinator.`, statementNode);
  }

  return statementVerifiedAgainstCombinator;
}

function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      context.debug(`...verified the '${statementString}' statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsEquality = false;

  const equality = Equality.fromStatementNode(statementNode);

  if (equality !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const verifyStatementAsEqualityFunctions = [
      verifyStatementAsDerivedEquality,
      verifyStatementAsStandaloneEquality
    ];

    statementVerifiedAsEquality = verifyStatementAsEqualityFunctions.some((verifyStatementAsEqualityFunction) => {
      const statementVerified = verifyStatementAsEqualityFunction(statementNode, equality, derived, context, verifyAhead);

      if (statementVerified) {
        return true;
      }
    });

    if (statementVerifiedAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
}

function verifyStatementAsDerivedEquality(statementNode, equality, derived, context, verifyAhead) {
  let verifiedStatementAsDerivedEquality = false;

  if (derived) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' derived equality...`, statementNode);

    const equalities = context.getEqualities(),
          equalityVerified = equality.verify(equalities, context, verifyAhead);

    verifiedStatementAsDerivedEquality = equalityVerified;  ///

    if (verifiedStatementAsDerivedEquality) {
      context.debug(`...verified the '${statementString}' derived equality.`, statementNode);
    }
  }

  return verifiedStatementAsDerivedEquality;
}

function verifyStatementAsStandaloneEquality(statementNode, equality, derived, context, verifyAhead) {
  let statementVerifiedAsStandaloneEquality = false;

  if (!derived) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as a standalone equality...`, statementNode);

    const leftTermNode = equality.getLeftTermNode(),
          rightTermNode = equality.getRightTermNode(),
          termsVerified = verifyTerms(leftTermNode, rightTermNode, context, verifyAhead);

    statementVerifiedAsStandaloneEquality = termsVerified; ///

    if (statementVerifiedAsStandaloneEquality) {
      context.trace(`...verified the '${statementString}' statement as a standalone equality.`, statementNode);
    }
  }

  return statementVerifiedAsStandaloneEquality;
}
