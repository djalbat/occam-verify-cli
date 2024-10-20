"use strict";

import shim from "../../shim";
import TypeAssertion from "../../assertion/type";
import DefinedAssertion from "../../assertion/defined";
import SubproofAssertion from "../../assertion/subproof";
import ContainedAssertion from "../../assertion/contained";

import { nodeQuery } from "../../utilities/query";

const frameNodeQuery = nodeQuery("/statement/frame"),
      equalityNodeQuery = nodeQuery("/statement/equality"),
      judgementNodeQuery = nodeQuery("/statement/judgement"),
      declarationNodeQuery = nodeQuery("/statement/declaration"),
      metavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion");

function verifyAsMetavariable(statement, assignments, stated, localContext) {
  let verifiedAsMetavariable = false;

  const { Metavariable } = shim,
        statementNode = statement.getNode(),
        metavariableNode = metavariableNodeQuery(statementNode),
        metavariable = Metavariable.fromMetavariableNode(metavariableNode, localContext);

  if (metavariable !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a metavariable...`);

    const metavariableVerified = metavariable.verify(localContext);

    verifiedAsMetavariable = metavariableVerified; ///

    if (verifiedAsMetavariable) {
      localContext.debug(`...verified the '${statementString}' statement as a metavariable.`);
    }
  }

  return verifiedAsMetavariable;
}

function verifyAsEquality(statement, assignments, stated, localContext) {
  let verifiedAsEquality = false;

  const { Equality } = shim,
        statementNode = statement.getNode(),
        equalityNode = equalityNodeQuery(statementNode),
        equality = Equality.fromEqualityNode(equalityNode, localContext);

  if (equality !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as an equality...`);

    const equalityVerified = equality.verify(assignments, stated, localContext);

    verifiedAsEquality = equalityVerified; ///

    if (verifiedAsEquality) {
      localContext.debug(`...verified the '${statementString}' statement as an equality.`);
    }
  }

  return verifiedAsEquality;
}

function verifyAsFrame(statement, assignments, stated, localContext) {
  let verifiedAsFrame = false;

  const { Frame } = shim,
        statementNode = statement.getNode(),
        frameNode = frameNodeQuery(statementNode),
        frame = Frame.fromFrameNode(frameNode, localContext);

  if (frame !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a frame...`);

    const frameVerified = frame.verify(assignments, stated, localContext);

    verifiedAsFrame = frameVerified; ///

    if (verifiedAsFrame) {
      localContext.debug(`...verified the '${statementString}' statement as a frame.`);
    }
  }

  return verifiedAsFrame;
}

function verifyAsJudgement(statement, assignments, stated, localContext) {
  let verifiedAsJudgement = false;

  const { Judgement } = shim,
        statementNode = statement.getNode(),
        judgementNode = judgementNodeQuery(statementNode),
        judgement = Judgement.fromJudgementNode(judgementNode, localContext);

  if (judgement !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a judgement...`);

    const judgementVerified = judgement.verify(assignments, stated, localContext);

    verifiedAsJudgement = judgementVerified;  ///

    if (verifiedAsJudgement) {
      localContext.debug(`...verified the '${statementString}' statement as a judgement.`);
    }
  }

  return verifiedAsJudgement;
}

function verifyAsDeclaration(statement, assignments, stated, localContext) {
  let verifiedAsDeclaration = false;

  const { Declaration } = shim,
        statementNode = statement.getNode(),
        declarationNode = declarationNodeQuery(statementNode),
        declaration = Declaration.fromDeclarationNode(declarationNode, localContext);

  if (declaration !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a declaration...`);

    const declarationVerified = declaration.verify(assignments, stated, localContext);

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
        typeAssertionNode = typeAssertionNodeQuery(statementNode),
        typeAssertion = TypeAssertion.fromTypeAssertionNode(typeAssertionNode, localContext);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a type assertion...`);

    const typeAssertionVerified = typeAssertion.verify(assignments, stated, localContext);

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
        definedAssertionNode = definedAssertionNodeQuery(statementNode),
        definedAssertion = DefinedAssertion.fromDefinedAssertionNode(definedAssertionNode, localContext);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a defined assertion...`);

    const definedAssertionVerified = definedAssertion.verify(assignments, stated, localContext);

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
        subproofAssertionNode = subproofAssertionNodeQuery(statementNode),
        subproofAssertion = SubproofAssertion.fromSubproofAssertionNode(subproofAssertionNode, localContext);

  if (subproofAssertionNode !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionVerified = subproofAssertion.verify(assignments, stated, localContext);

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
        containedAssertionNode = containedAssertionNodeQuery(statementNode),
        containedAssertion = ContainedAssertion.fromContainedAssertionNode(containedAssertionNode, localContext);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    localContext.trace(`Verifying the '${statementString}' statement as a contained assertion...`);

    const containedAssertionVerified = containedAssertion.verify(assignments, stated, localContext);

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
