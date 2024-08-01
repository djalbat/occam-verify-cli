"use strict";

import verifyEquality from "../verify/equality";
import verifyDefining from "../verify/defining";
import verifyContainment from "../verify/containment";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/typeAssertion";
import statementNodesVerifier from "../verifier/nodes/statement";

import { nodeQuery } from "../utilities/query";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      argumentNodeQuery = nodeQuery("/statement/argument!"),
      definingNodeQuery = nodeQuery("/statement/defining!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      containmentNodeQuery = nodeQuery("/statement/containment!"),
      metaArgumentNodeQuery = nodeQuery("/statement/metaArgument!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerified;

  const statementString = context.nodeAsString(statementNode);

  context.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAboutDefining,
    verifyStatementAsTypeAssertion,
    verifyStatementAboutContainment,
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

function verifyStatementAboutDefining(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAboutDefining = false;

  const definingNode = definingNodeQuery(statementNode);

  if (definingNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement about defining...`, statementNode);

    const argumentNode = argumentNodeQuery(statementNode),
          definingVerified = verifyDefining(argumentNode, definingNode, context);

    statementVerifiedAboutDefining = definingVerified; ///

    if (statementVerifiedAboutDefining) {
      context.debug(`...verified the '${statementString}' statement about defining.`, statementNode);
    }
  }

  return statementVerifiedAboutDefining;
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

function verifyStatementAboutContainment(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAboutContainment = false;

  const containmentNode = containmentNodeQuery(statementNode);

  if (containmentNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement about containment...`, statementNode);

    const argumentNode = argumentNodeQuery(statementNode),
          metaArgumentNode = metaArgumentNodeQuery(statementNode),
          containmentVerified = verifyContainment(argumentNode, containmentNode, metaArgumentNode, context);

    if (containmentVerified) {
      statementNode = statementNodeQuery(metaArgumentNode); ///

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

      statementVerifiedAboutContainment = statementVerified; ///
    }

    if (statementVerifiedAboutContainment) {
      context.debug(`...verified the '${statementString}' statement about containment.`, statementNode);
    }
  }

  return statementVerifiedAboutContainment;
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
