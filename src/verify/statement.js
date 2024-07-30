"use strict";

import verifyEquality from "../verify/equality";
import verifyContainment from "../verify/containment";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/typeAssertion";
import statementNodesVerifier from "../verifier/nodes/statement";

import { nodeQuery } from "../utilities/query";
import { containmentVariableNodeQuery } from "../verify/containment";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      statementNodeQuery = nodeQuery("/statement/statement!"),
      containmentNodeQuery = nodeQuery("/statement/containment!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerified;

  const statementString = context.nodeAsString(statementNode);

  context.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAsTypeAssertion,
    verifyStatementWithContainment,
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

export function verifyStandaloneStatement(statementNode, fileContext, verifyAhead) {
  let standaloneStatementVerified;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' standalone statement...`, statementNode);

  const context = fileContext,  ///
        derived = false,
        assignments = [],
        statementVerified = verifyStatement(statementNode, assignments, derived, context, verifyAhead);

  standaloneStatementVerified = statementVerified;  ///

  if (standaloneStatementVerified) {
    fileContext.debug(`...verified the '${statementString}' standalone statement.`, statementNode);
  }

  return standaloneStatementVerified;
}

Object.assign(statementNodesVerifier, {
  verifyStatement
});

export default verifyStatement;

function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsEquality = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, context, verifyAhead);

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
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

function verifyStatementWithContainment(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedWithContainment = false;

  const containmentNode = containmentNodeQuery(statementNode);

  if (containmentNode !== null) {
    statementNode = statementNodeQuery(statementNode);  ///

    const statementString = context.nodeAsString(statementNode),
          containmentVariableNode = containmentVariableNodeQuery(containmentNode),
          containmentVariableString = context.nodeAsString(containmentVariableNode);

    context.trace(`Verifying that the '${containmentVariableString}' is either contained in or omitted from the '${statementString}' statement...`, statementNode);

    const containmentVerified = verifyContainment(containmentNode, statementNode);

    if (containmentVerified) {
      const verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAgainstCombinators
      ];

      const statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
        const derived = false,
              assignments = [],
              statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, verifyAhead);

        if (statementVerified) {
          return true;
        }
      });

      statementVerifiedWithContainment = statementVerified; ///
    }

    if (statementVerifiedWithContainment) {
      context.debug(`...verified that '${containmentVariableString}' is either contained in or omitted from the '${statementString}' statement.`, statementNode);
    }
  }

  return statementVerifiedWithContainment;
}

function verifyStatementAgainstCombinators(statementNode, assignments, derived, context, verifyAhead) {
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
