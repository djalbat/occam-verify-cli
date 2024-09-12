"use strict";

import shim from "../shim";
import verifyEquality from "../verify/equality";
import verifyJudgement from "../verify/judgement";
import metaLevelVerifier from "../verifier/metaLevel";
import verifyTypeAssertion from "../verify/assertion/type";
import verifyDefinedAssertion from "../verify/assertion/defined";
import verifySubproofAssertion from "../verify/assertion/subproof";
import verifyContainedAssertion from "../verify/assertion/contained";
import unifyStatementWithCombinators from "../unify/statementWithCombinators";
import unifyStatementWithBracketedCombinator from "../unify/statementWithBracketedCombinator";

import { nodeQuery } from "../utilities/query";

const frameNodeQuery = nodeQuery("/statement/frame!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      judgementNodeQuery = nodeQuery("/statement/judgement!"),
      declarationNodeQuery = nodeQuery("/statement/declaration!"),
      substitutionNodeQuery = nodeQuery("/statement/substitution!"),
      metavariableNodeQuery = nodeQuery("/*/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion!"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion!");

function verifyStatement(statementNode, assignments, derived, localContext) {
  let statementVerified;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verified = metaLevelVerifier.verifyStatement(statementNode, assignments, derived, localContext);

  if (verified) {
    const verifyStatementFunctions = [
      verifyStatementAsMetavariable,
      unifyStatementWithCombinators,  ///
      unifyStatementWithBracketedCombinator,  ///
      verifyStatementAsEquality,
      verifyStatementAsTypeAssertion,
      verifyStatementAsDefinedAssertion,
      verifyStatementAsContainedAssertion,
      verifyStatementAsSubproofAssertion,
      verifyStatementAsJudgement,
      verifyStatementAsFrame,
      verifyStatementAsDeclaration,
      verifyStatementAsSubstitution
    ];

    statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
      const statementVerified = verifyStatementFunction(statementNode, assignments, derived, localContext);

      if (statementVerified) {
        return true;
      }
    });
  }

  if (statementVerified) {
    localContext.debug(`...verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}

Object.assign(shim, {
  verifyStatement
});

export default verifyStatement;

function verifyStatementAsMetavariable(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsMetavariable = false;

  const metavariableNode = metavariableNodeQuery(statementNode);

  if (metavariableNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a metavariable...`, statementNode);

    const metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode);

    if (!metavariablePresent) {
      const metavariableString = localContext.nodeAsString(metavariableNode);

      localContext.trace(`The '${metavariableString}' metavariable is not present.`, statementNode);
    } else {
      statementVerifiedAsMetavariable = true; ///
    }

    if (statementVerifiedAsMetavariable) {
      localContext.debug(`...verified the '${statementString}' statement as a metavariable.`, statementNode);
    }
  }

  return statementVerifiedAsMetavariable;
}

function verifyStatementAsEquality(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsEquality = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, derived, localContext);

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
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

function verifyStatementAsTypeAssertion(statementNode, assignments, derived, localContext) {
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

function verifyStatementAsDefinedAssertion(statementNode, assignments, derived, localContext) {
  let statementVerifiedAsDefinedAssertion = false;

  const definedAssertionNode = definedAssertionNodeQuery(statementNode);

  if (definedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`, statementNode);

    const definedAssertionVerified = verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext);

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

    const subproofAssertionVerified = verifySubproofAssertion(subproofAssertionNode, assignments, derived, localContext);

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

    const containedAssertionVerified = verifyContainedAssertion(containedAssertionNode, assignments, derived, localContext);

    statementVerifiedAsContainedAssertion = containedAssertionVerified; ///

    if (statementVerifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return statementVerifiedAsContainedAssertion;
}
