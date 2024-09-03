"use strict";

import verifyEquality from "../verify/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/typeAssertion";
import verifyStatementAsDefinedAssertion from "../verify/statementAsDefinedAssertion";
import verifyStatementAsContainedAssertion from "../verify/statementAsContainedAssertion";
import statementAgainstCombinatorNodesVerifier from "../verifier/nodes/statementAgainstCombinator";

import { nodeQuery } from "../utilities/query";
import { isStatementDefinedAssertion } from "../verify/statementAsDefinedAssertion";
import { isStatementContainedAssertion } from "../verify/statementAsContainedAssertion";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, assignments, derived, localContext) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAsTypeAssertion,
    verifyStatementAsDefinedAssertion,
    verifyStatementAsContainedAssertion,
    verifyStatementAgainstCombinators
  ];

  statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);

    if (statementVerified) {
      return true;
    }
  });

  if (statementVerified) {
    localContext.debug(`...verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}

export function verifyStandaloneStatement(statementNode, localContext, verifyAhead) {
  let standaloneStatementVerified = false;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' standalone statement...`, statementNode);

  const derived = false,
        assignments = [],
        statementVerified = verifyStatement(statementNode, assignments, derived);

  if (statementVerified) {
    const verifiedAhead = verifyAhead();

    standaloneStatementVerified = verifiedAhead; ///
  }

  if (standaloneStatementVerified) {
    localContext.debug(`...verified the '${statementString}' standalone statement.`, statementNode);
  }

  return standaloneStatementVerified;
}

Object.assign(statementAgainstCombinatorNodesVerifier, {
  verifyStatement
});

export default verifyStatement;

export function verifyStatementAsEquality(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsEquality = false;

  const statementEquality = isStatementEquality(statementNode);

  if (statementEquality) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equalityNode = equalityNodeQuery(statementNode),
          equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
}

export function verifyStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsTypeAssertion = false;

  const statementTypeAssertion = isStatementTypeAssertion(statementNode);

  if (statementTypeAssertion) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`, statementNode);

    const typeAssertionNode = typeAssertionNodeQuery(statementNode),
          typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAgainstCombinators(statementNode, assignments, derived, localContext) {
  let statementVerifiedAgainstCombinators = false;

  const statementEquality = isStatementEquality(statementNode),
        statementTypeAssertion = isStatementTypeAssertion(statementNode),
        statementDefinedAssertion = isStatementDefinedAssertion(statementNode),
        statementContainedAssertion = isStatementContainedAssertion(statementNode);

  if (!statementEquality && !statementTypeAssertion && !statementDefinedAssertion && !statementContainedAssertion) {
    let combinators = localContext.getCombinators();

    combinators = [ ///
      bracketedCombinator,
      ...combinators
    ];

    statementVerifiedAgainstCombinators = combinators.some((combinator) => {
      const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, localContext);

      if (statementVerifiedAgainstCombinator) {
        return true;
      }
    });
  }

  return statementVerifiedAgainstCombinators;
}

function verifyStatementAgainstCombinator(statementNode, combinator, localContext) {
  let statementVerifiedAgainstCombinator;

  const statementString = localContext.nodeAsString(statementNode),
        combinatorString = combinator.getString();

  localContext.trace(`Verifying the '${statementString}' statement against the '${combinatorString}' combinator...`, statementNode);

  const combinatorStatementNode = combinator.getStatementNode(),
        nonTerminalNodeA = statementNode, ///
        nonTerminalNodeB = combinatorStatementNode, ///
        nonTerminalNodeVerified = statementAgainstCombinatorNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  statementVerifiedAgainstCombinator = nonTerminalNodeVerified;  ///

  if (statementVerifiedAgainstCombinator) {
    localContext.debug(`...verified the '${statementString}' statement against the '${combinatorString}' combinator.`, statementNode);
  }

  return statementVerifiedAgainstCombinator;
}

function isStatementEquality(statementNode) {
  const equalityNode = equalityNodeQuery(statementNode),
        statementEquality = (equalityNode !== null);

  return statementEquality;
}

function isStatementTypeAssertion(statementNode) {
  const typeAssertionNode = typeAssertionNodeQuery(statementNode),
        statementTypeAssertion = (typeAssertionNode !== null);

  return statementTypeAssertion;
}
