"use strict";

import verifyFrame from "../../verify/frame";
import verifyEquality from "../../verify/equality";
import verifyJudgement from "../../verify/judgement";
import verifyDeclaration from "../../verify/declaration";
import verifyTypeAssertion from "../../verify/assertion/type";
import metavariableUnifier from "../../unifier/metavariable";
import verifyDefinedAssertion from "../../verify/assertion/defined";
import verifySubproofAssertion from "../../verify/assertion/subproof";
import verifyContainedAssertion from "../../verify/assertion/contained";

import { nodeQuery } from "../../utilities/query";
import { metavariableNameFromMetavariableNode } from "../../utilities/name";

const frameNodeQuery = nodeQuery("/statement/frame!"),
      equalityNodeQuery = nodeQuery("/statement/equality!"),
      judgementNodeQuery = nodeQuery("/statement/judgement!"),
      declarationNodeQuery = nodeQuery("/statement/declaration!"),
      metavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion!"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion!");

function verifyAsMetavariable(statement, assignments, stated, localContext) {
  let verifiedAsMetavariable = false;

  const statementNode = statement.getNode(),
        metavariableNode = metavariableNodeQuery(statementNode);

  if (metavariableNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a metavariable...`);

    const metavariableUnified = unifyMetavariable(metavariableNode, localContext);

    verifiedAsMetavariable = metavariableUnified;  ///

    if (verifiedAsMetavariable) {
      localContext.debug(`...verified the '${statementString}' statement as a metavariable.`);
    }
  }

  return verifiedAsMetavariable;
}

function verifyAsEquality(statement, assignments, stated, localContext) {
  let verifiedAsEquality = false;

  const statementNode = statement.getNode(),
        equalityNode = equalityNodeQuery(statementNode);

  if (equalityNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`);

    const equalityVerified = verifyEquality(equalityNode, assignments, stated, localContext);

    verifiedAsEquality = equalityVerified; ///

    if (verifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`);
    }
  }

  return verifiedAsEquality;
}

function verifyAsFrame(statement, assignments, stated, localContext) {
  let verifiedAsFrame = false;

  const statementNode = statement.getNode(),
        frameNode = frameNodeQuery(statementNode);

  if (frameNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a frame...`);

    const frameVerified = verifyFrame(frameNode, assignments, stated, localContext);

    verifiedAsFrame = frameVerified; ///

    if (verifiedAsFrame) {
      localContext.debug(`...verified the '${statementString}' statement as a frame.`);
    }
  }

  return verifiedAsFrame;
}

function verifyAsJudgement(statement, assignments, stated, localContext) {
  let verifiedAsJudgement = false;

  const statementNode = statement.getNode(),
        judgementNode = judgementNodeQuery(statementNode);

  if (judgementNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a judgement...`);

    const judgementVerified = verifyJudgement(judgementNode, assignments, stated, localContext);

    verifiedAsJudgement = judgementVerified;  ///

    if (verifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' statement as a judgement.`);
    }
  }

  return verifiedAsJudgement;
}

function verifyAsDeclaration(statement, assignments, stated, localContext) {
  let verifiedAsDeclaration = false;

  const statementNode = statement.getNode(),
        declarationNode = declarationNodeQuery(statementNode);

  if (declarationNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a declaration...`);

    const declarationVerified = verifyDeclaration(declarationNode, assignments, stated, localContext);

    verifiedAsDeclaration = declarationVerified; ///

    if (verifiedAsDeclaration) {
      localContext.debug(`...verified the '${statementString}' statement as a declaration.`);
    }
  }

  return verifiedAsDeclaration;
}

function verifyAsTypeAssertion(statement, assignments, stated, localContext) {
  let verifiedAsTypeAssertion = false;

  const statementNode = statement.getNode(),
        typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, stated, localContext);

    verifiedAsTypeAssertion = typeAssertionVerified; ///

    if (verifiedAsTypeAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a type assertion.`);
    }
  }

  return verifiedAsTypeAssertion;
}

function verifyAsDefinedAssertion(statement, assignments, stated, localContext) {
  let verifiedAsDefinedAssertion = false;

  const statementNode = statement.getNode(),
        definedAssertionNode = definedAssertionNodeQuery(statementNode);

  if (definedAssertionNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`);

    const definedAssertionVerified = verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext);

    verifiedAsDefinedAssertion = definedAssertionVerified; ///

    if (verifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a defined assertion.`);
    }
  }

  return verifiedAsDefinedAssertion;
}

function verifyAsSubproofAssertion(statement, assignments, stated, localContext) {
  let verifiedAsSubproofAssertion = false;

  const statementNode = statement.getNode(),
        subproofAssertionNode = subproofAssertionNodeQuery(statementNode);

  if (subproofAssertionNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionVerified = verifySubproofAssertion(subproofAssertionNode, assignments, stated, localContext);

    verifiedAsSubproofAssertion = subproofAssertionVerified; ///

    if (verifiedAsSubproofAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return verifiedAsSubproofAssertion;
}

function verifyAsContainedAssertion(statement, assignments, stated, localContext) {
  let verifiedAsContainedAssertion = false;

  const statementNode = statement.getNode(),
        containedAssertionNode = containedAssertionNodeQuery(statementNode);

  if (containedAssertionNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a contained assertion...`);

    const containedAssertionVerified = verifyContainedAssertion(containedAssertionNode, assignments, stated, localContext);

    verifiedAsContainedAssertion = containedAssertionVerified; ///

    if (verifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${statementString}' statement as a contained assertion.`);
    }
  }

  return verifiedAsContainedAssertion;
}

const verifyMixins = [
  verifyAsMetavariable,
  verifyAsEquality,
  verifyAsFrame,
  verifyAsJudgement,
  verifyAsDeclaration,
  verifyAsTypeAssertion,
  verifyAsDefinedAssertion,
  verifyAsSubproofAssertion,
  verifyAsContainedAssertion
];

export default verifyMixins;

function unifyMetavariable(metavariableNode, localContext) {
  let metavariableUnified;

  const metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Unifying the '${metavariableString}' metavariable...`);

  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariable = localContext.findMetavariableByMetavariableName(metavariableName);

  if (metavariable !== null) {
    const metavariableNodeA = metavariableNode; ///

    metavariableNode = metavariable.getNode();

    const metavariableNodeB = metavariableNode; ///

    const unified = metavariableUnifier.unify(metavariableNodeA, metavariableNodeB, localContext);

    metavariableUnified = unified;  ///
  }

  if (metavariableUnified) {
    localContext.debug(`...unified the '${metavariableString}' metavariable.`);
  }

  return metavariableUnified;
}
