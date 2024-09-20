"use strict";

import shim from "../shim";
import verifyFrame from "../verify/frame";
import verifyEquality from "../verify/equality";
import verifyJudgement from "../verify/judgement";
import verifyDeclaration from "../verify/declaration";
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
      metavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion!"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion!");

const unifyStatementFunctions = [
        unifyStatementWithBracketedCombinator,
        unifyStatementWithCombinators
      ],
      verifyStatementFunctions = [
        verifyStatementAsMetavariable,
        verifyStatementAsEquality,
        verifyStatementAsFrame,
        verifyStatementAsJudgement,
        verifyStatementAsDeclaration,
        verifyStatementAsTypeAssertion,
        verifyStatementAsDefinedAssertion,
        verifyStatementAsSubproofAssertion,
        verifyStatementAsContainedAssertion
      ];

function verifyStatement(statementNode, assignments, stated, localContext) {
  let statementVerified = false;

  const statementString = localContext.nodeAsString(statementNode);

  localContext.trace(`Verifying the '${statementString}' statement...`, statementNode);

  if (!statementVerified) {
    const statementUnified = unifyStatementFunctions.some((unifyStatementFunction) => {
      const statementUnified = unifyStatementFunction(statementNode, assignments, stated, localContext);

      if (statementUnified) {
        return true;
      }
    });

    statementVerified = statementUnified; ///
  }

  if (!statementVerified) {
    statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
      const statementVerified = verifyStatementFunction(statementNode, assignments, stated, localContext);

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

function verifyStatementAsMetavariable(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsMetavariable = false;

  const metavariableNode = metavariableNodeQuery(statementNode);

  if (metavariableNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a metavariable...`, statementNode);

    const metavariableVerified = verifyMetavariable(metavariableNode, localContext);

    statementVerifiedAsMetavariable = metavariableVerified;

    if (statementVerifiedAsMetavariable) {
      localContext.debug(`...verified the '${statementString}' statement as a metavariable.`, statementNode);
    }
  }

  return statementVerifiedAsMetavariable;
}

function verifyStatementAsEquality(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsEquality = false;

  const equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equalityVerified = verifyEquality(equalityNode, assignments, stated, localContext);

    statementVerifiedAsEquality = equalityVerified; ///

    if (statementVerifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
}

function verifyStatementAsFrame(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsFrame = false;

  const frameNode = frameNodeQuery(statementNode);

  if (frameNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a frame...`, statementNode);

    const frameVerified = verifyFrame(frameNode, assignments, stated, localContext);

    statementVerifiedAsFrame = frameVerified; ///

    if (statementVerifiedAsFrame) {
      localContext.debug(`...verified the '${statementString}' statement as a frame.`, statementNode);
    }
  }

  return statementVerifiedAsFrame;
}

function verifyStatementAsJudgement(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsJudgement = false;

  const judgementNode = judgementNodeQuery(statementNode);

  if (judgementNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a judgement...`, statementNode);

    const judgementVerified = verifyJudgement(judgementNode, assignments, stated, localContext);

    statementVerifiedAsJudgement = judgementVerified;  ///

    if (statementVerifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' statement as a judgement.`, statementNode);
    }
  }

  return statementVerifiedAsJudgement;
}

function verifyStatementAsDeclaration(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsDeclaration = false;

  const declarationNode = declarationNodeQuery(statementNode);

  if (declarationNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a declaration...`, statementNode);

    const declarationVerified = verifyDeclaration(declarationNode, assignments, stated, localContext);

    statementVerifiedAsDeclaration = declarationVerified; ///

    if (statementVerifiedAsDeclaration) {
      localContext.debug(`...verified the '${statementString}' statement as a declaration.`, statementNode);
    }
  }

  return statementVerifiedAsDeclaration;
}

function verifyStatementAsTypeAssertion(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, stated, localContext);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsDefinedAssertion(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsDefinedAssertion = false;

  const definedAssertionNode = definedAssertionNodeQuery(statementNode);

  if (definedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`, statementNode);

    const definedAssertionVerified = verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext);

    statementVerifiedAsDefinedAssertion = definedAssertionVerified; ///

    if (statementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`, statementNode);
    }
  }

  return statementVerifiedAsDefinedAssertion;
}

function verifyStatementAsSubproofAssertion(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsSubproofAssertion = false;

  const subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

  if (subproofAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a subproof assertion...`, statementNode);

    const subproofAssertionVerified = verifySubproofAssertion(subproofAssertionNode, assignments, stated, localContext);

    statementVerifiedAsSubproofAssertion = subproofAssertionVerified; ///

    if (statementVerifiedAsSubproofAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a subproof assertion.`, statementNode);
    }
  }

  return statementVerifiedAsSubproofAssertion;
}

function verifyStatementAsContainedAssertion(statementNode, assignments, stated, localContext) {
  let statementVerifiedAsContainedAssertion = false;

  const containedAssertionNode = containedAssertionNodeQuery(statementNode);

  if (containedAssertionNode !== null) {
    const statementString = localContext.nodeAsString(statementNode);

    localContext.trace(`Verifying the '${statementString}' statement as a contained assertion...`, statementNode);

    const containedAssertionVerified = verifyContainedAssertion(containedAssertionNode, assignments, stated, localContext);

    statementVerifiedAsContainedAssertion = containedAssertionVerified; ///

    if (statementVerifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a contained assertion.`, statementNode);
    }
  }

  return statementVerifiedAsContainedAssertion;
}

function verifyMetavariable(metavariableNode, localContext) {
  let metavariableVerified = false;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariablePresent = localContext.isMetavariablePresentByMetavariableNode(metavariableNode);

  if (!metavariablePresent) {
    localContext.trace(`The '${metavariableString}' metavariable is not present.`, metavariableNode);
  } else {
    metavariableVerified = true;
  }

  if (metavariableVerified) {
    localContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
