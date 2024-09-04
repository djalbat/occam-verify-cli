"use strict";

import verifyEquality from "../verify/equality";
import verifyJudgement from "../verify/judgement";
import verifyTypeAssertion from "../verify/assertion/type";
import verifyDefinedAssertion from "../verify/assertion/defined";
import verifySubproofAssertion from "../verify/assertion/subproof";
import verifyContainedAssertion from "../verify/assertion/contained";
import statementAgainstCombinatorNodesVerifier from "../verifier/nodes/statementAgainstCombinator";

import { nodeQuery } from "../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";

const equalityNodeQuery = nodeQuery("/statement/equality!"),
      judgementNodeQuery = nodeQuery("/statement/judgement!"),
      metavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion!"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion!");

function verifyStatement(statementNode, assignments, derived, localContext) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsMetavariable,
    verifyStatementAsEquality,
    verifyStatementAsJudgement,
    verifyStatementAsTypeAssertion,
    verifyStatementAsDefinedAssertion,
    verifyStatementAsSubproofAssertion,
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
        statementVerified = verifyStatement(statementNode, assignments, derived, localContext);

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

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext, () => {
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

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsJudgement(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsJudgement = false;

  const judgementNode = judgementNodeQuery(statementNode);

  if (judgementNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a judgement...`, statementNode);

    const judgementVerified = verifyJudgement(judgementNode, assignments, derived, localContext);

    statementVerifiedAsJudgement = judgementVerified;  ///

    if (statementVerifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' statement as a judgement.`, statementNode);
    }
  }

  return statementVerifiedAsJudgement;
}

function verifyStatementAsMetavariable(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsMetavariable = false;

  const metavariableNode = metavariableNodeQuery(statementNode);

  if (metavariableNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a metavariable...`, statementNode);

    const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);

    if (metavariable !== null) {
      const metaTypeName  = metavariable.getMetaTypeName();

      if (metaTypeName === STATEMENT_META_TYPE_NAME) {
        statementVerifiedAsMetavariable = true;
      }
    }

    if (statementVerifiedAsMetavariable) {
      localContext.debug(`...verified the '${statementString}' statement as a metavariable.`, statementNode);
    }
  }

  return statementVerifiedAsMetavariable;
}

function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsDefinedAssertion = false;

  const definedAssertionNode = definedAssertionNodeQuery(statementNode);

  if (definedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`, statementNode);

    const definedAssertionVerified = verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    statementVerifiedAsDefinedAssertion = definedAssertionVerified; ///

    if (statementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return statementVerifiedAsDefinedAssertion;
}

function verifyStatementAsSubproofAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsSubproofAssertion = false;

  const subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

  if (subproofAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a subproof assertion...`, statementNode);

    const subproofAssertionVerified = verifySubproofAssertion(subproofAssertionNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    statementVerifiedAsSubproofAssertion = subproofAssertionVerified; ///

    if (statementVerifiedAsSubproofAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return statementVerifiedAsSubproofAssertion;
}

function verifyStatementAsContainedAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsContainedAssertion = false;

  const containedAssertionNode = containedAssertionNodeQuery(statementNode);

  if (containedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`, statementNode);

    const containedAssertionVerified = verifyContainedAssertion(containedAssertionNode, assignments, derived, localContext, () => {
      const verifiedAhead = true;

      return verifiedAhead;
    });

    statementVerifiedAsContainedAssertion = containedAssertionVerified; ///

    if (statementVerifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return statementVerifiedAsContainedAssertion;
}

function verifyStatementAgainstCombinators(statementNode, assignments, derived, localContext) {
  let statementVerifiedAgainstCombinators = false;

  const equalityNode = equalityNodeQuery(statementNode),
        judgementNode = judgementNodeQuery(statementNode),
        metavariableNode = metavariableNodeQuery(statementNode),
        typeAssertionNode = typeAssertionNodeQuery(statementNode),
        definedAssertionNode = definedAssertionNodeQuery(statementNode),
        subproofAssertionNode = subproofAssertionNodeQuery(statementNode),
        containedAssertionNode = containedAssertionNodeQuery(statementNode);

  if (  (equalityNode === null) &&
        (judgementNode === null) &&
        (metavariableNode === null) &&
        (typeAssertionNode === null) &&
        (definedAssertionNode === null) &&
        (subproofAssertionNode === null) &&
        (containedAssertionNode === null) ) {

    const combinators = localContext.getCombinators();

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