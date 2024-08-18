"use strict";

import verifyEquality from "../verify/equality";
import verifyDefining from "../verify/defining";
import verifyContainment from "../verify/containment";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/typeAssertion";
import statementAgainstCombinatorNodesVerifier from "../verifier/nodes/statementAgainstCombinator";

import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/statement/term!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      definingNodeQuery = nodeQuery("/statement/defining!"),
      statementNodeQuery = nodeQuery("/metastatement/statement!"),
      containmentNodeQuery = nodeQuery("/statement/containment!"),
      metastatementNodeQuery = nodeQuery("/statement/metastatement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAboutDefining,
    verifyStatementAsTypeAssertion,
    verifyStatementAboutContainment,
    verifyStatementAgainstCombinators
  ];

  statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext, verifyAhead);

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
  let standaloneStatementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' standalone statement...`, statementNode);

  const derived = false,
        assignments = [],
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext, verifyAhead);

  standaloneStatementVerified = statementVerified;  ///

  if (standaloneStatementVerified) {
    localContext.debug(`...verified the '${statementString}' standalone statement.`, statementNode);
  }

  return standaloneStatementVerified;
}

Object.assign(statementAgainstCombinatorNodesVerifier, {
  verifyStatement
});

export default verifyStatement;

function verifyStatementAsEquality(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAsEquality = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, verifyAhead);

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
}

function verifyStatementAboutDefining(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAboutDefining = false;

  const definingNode = definingNodeQuery(statementNode);

  if (definingNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement about defining...`, statementNode);

    const termNode = termNodeQuery(statementNode),
          definingVerified = verifyDefining(termNode, definingNode, localContext);

    statementVerifiedAboutDefining = definingVerified; ///

    if (statementVerifiedAboutDefining) {
      localContext.debug(`...verified the '${statementString}' statement about defining.`, statementNode);
    }
  }

  return statementVerifiedAboutDefining;
}

function verifyStatementAsTypeAssertion(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext, verifyAhead);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAboutContainment(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAboutContainment = false;

  const containmentNode = containmentNodeQuery(statementNode);

  if (containmentNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement about containment...`, statementNode);

    const termNode = termNodeQuery(statementNode),
          metastatementNode = metastatementNodeQuery(statementNode),
          containmentVerified = verifyContainment(termNode, containmentNode, metastatementNode, localContext);

    if (containmentVerified) {
      statementNode = statementNodeQuery(metastatementNode); ///

      const verifyStatementFunctions = [
        verifyStatementAsEquality,
        verifyStatementAgainstCombinators
      ];

      const statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
        const derived = false,
              assignments = [],
              statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext, verifyAhead);

        if (statementVerified) {
          return true;
        }
      });

      statementVerifiedAboutContainment = statementVerified; ///
    }

    if (statementVerifiedAboutContainment) {
      localContext.debug(`...verified the '${statementString}' statement about containment.`, statementNode);
    }
  }

  return statementVerifiedAboutContainment;
}

function verifyStatementAgainstCombinator(statementNode, combinator, localContext, verifyAhead) {
  let statementVerifiedAgainstCombinator;

  const statementString = localContext.nodeAsString(statementNode),
        combinatorString = combinator.getString();

  localContext.trace(`Verifying the '${statementString}' statement against the '${combinatorString}' combinator...`, statementNode);

  const combinatorStatementNode = combinator.getStatementNode(),
        nonTerminalNodeA = statementNode, ///
        nonTerminalNodeB = combinatorStatementNode, ///
        nonTerminalNodeVerified = statementAgainstCombinatorNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, verifyAhead);

  statementVerifiedAgainstCombinator = nonTerminalNodeVerified;  ///

  if (statementVerifiedAgainstCombinator) {
    localContext.debug(`...verified the '${statementString}' statement against the '${combinatorString}' combinator.`, statementNode);
  }

  return statementVerifiedAgainstCombinator;
}

function verifyStatementAgainstCombinators(statementNode, assignments, derived, localContext, verifyAhead) {
  let statementVerifiedAgainstCombinators = false;

  const equalityNode = equalityNodeQuery(statementNode),
        definingNode = definingNodeQuery(statementNode),
        containmentNode = containmentNodeQuery(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if ((equalityNode === null) && (definingNode === null) && (containmentNode === null) && (typeAssertionNode === null)) {
    let combinators = localContext.getCombinators();

    combinators = [ ///
      bracketedCombinator,
      ...combinators
    ];

    statementVerifiedAgainstCombinators = combinators.some((combinator) => {
      const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, localContext, verifyAhead);

      if (statementVerifiedAgainstCombinator) {
        return true;
      }
    });
  }

  return statementVerifiedAgainstCombinators;
}
