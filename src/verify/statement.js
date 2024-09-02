"use strict";

import verifyEquality from "../verify/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/typeAssertion";
import verifyDefinedAssertion from "../verify/definedAssertion";
import verifyContainedAssertion from "../verify/containedAssertion";
import statementAgainstCombinatorNodesVerifier from "../verifier/nodes/statementAgainstCombinator";

import { nodeQuery } from "../utilities/query";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      statementNodeQuery = nodeQuery("/containedAssertion/statement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion!"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion!");

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

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`, equalityNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`, equalityNode);
    }
  }

  return statementVerifiedAsEquality;
}

export function verifyStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`, typeAssertionNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a type assertion.`, typeAssertionNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsDefinedAssertion = false;

  const definedAssertionNode = definedAssertionNodeQuery(statementNode);

  if (definedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`, definedAssertionNode);

    const definedAssertionVerified = verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext);

    statementVerifiedAsDefinedAssertion = definedAssertionVerified; ///

    if (statementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, definedAssertionNode);
    }
  }

  return statementVerifiedAsDefinedAssertion;
}

function verifyStatementAsContainedAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsContainedAssertion = false;

  const containedAssertionNode = containedAssertionNodeQuery(statementNode);

  if (containedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a contained assertion...`, containedAssertionNode);

    const containedVerified = verifyContainedAssertion(containedAssertionNode, assignments, derived, localContext);

    if (containedVerified) {
      statementNode = statementNodeQuery(containedAssertionNode); ///

      const verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAgainstCombinators
      ];

      const statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
        const derived = false,
              assignments = [],
              statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);

        if (statementVerified) {
          return true;
        }
      });

      statementVerifiedAsContainedAssertion = statementVerified; ///
    }

    if (statementVerifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a contained assertion.`, containedAssertionNode);
    }
  }

  return statementVerifiedAsContainedAssertion;
}

function verifyStatementAgainstCombinators(statementNode, assignments, derived, localContext) {
  let statementVerifiedAgainstCombinators = false;

  const equalityNode = equalityNodeQuery(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode),
        definedAssertionNode = definedAssertionNodeQuery(statementNode),
        containedAssertionNode = containedAssertionNodeQuery(statementNode);

  if ((equalityNode === null) && (typeAssertionNode === null) && (definedAssertionNode === null) && (containedAssertionNode === null)) {
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
