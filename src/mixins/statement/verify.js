"use strict";

import shim from "../../shim";
import TypeAssertion from "../../assertion/type";
import DefinedAssertion from "../../assertion/defined";
import SubproofAssertion from "../../assertion/subproof";
import ContainedAssertion from "../../assertion/contained";

import { nodeQuery } from "../../utilities/query";

const equalityNodeQuery = nodeQuery("/statement/equality"),
      judgementNodeQuery = nodeQuery("/statement/judgement"),
      metavariableNodeQuery = nodeQuery("/statement/metavariable!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion"),
      definedAssertionNodeQuery = nodeQuery("/statement/definedAssertion"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion"),
      containedAssertionNodeQuery = nodeQuery("/statement/containedAssertion");

function verifyAsMetavariable(statement, assignments, stated, context) {
  let verifiedAsMetavariable = false;

  const { Metavariable } = shim,
        statementNode = statement.getNode(),
        metavariableNode = metavariableNodeQuery(statementNode),
        metavariable = Metavariable.fromMetavariableNode(metavariableNode, context);

  if (metavariable !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a metavariable...`);

    const metavariableVerified = metavariable.verify(context);

    verifiedAsMetavariable = metavariableVerified; ///

    if (verifiedAsMetavariable) {
      context.debug(`...verified the '${statementString}' statement as a metavariable.`);
    }
  }

  return verifiedAsMetavariable;
}

function verifyAsEquality(statement, assignments, stated, context) {
  let verifiedAsEquality = false;

  const { Equality } = shim,
        statementNode = statement.getNode(),
        equalityNode = equalityNodeQuery(statementNode),
        equality = Equality.fromEqualityNode(equalityNode, context);

  if (equality !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as an equality...`);

    const equalityVerified = equality.verify(assignments, stated, context);

    verifiedAsEquality = equalityVerified; ///

    if (verifiedAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`);
    }
  }

  return verifiedAsEquality;
}

function verifyAsJudgement(statement, assignments, stated, context) {
  let verifiedAsJudgement = false;

  const { Judgement } = shim,
        statementNode = statement.getNode(),
        judgementNode = judgementNodeQuery(statementNode),
        judgement = Judgement.fromJudgementNode(judgementNode, context);

  if (judgement !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a judgement...`);

    const judgementVerified = judgement.verify(assignments, stated, context);

    verifiedAsJudgement = judgementVerified;  ///

    if (verifiedAsJudgement) {
      context.debug(`...verified the '${statementString}' statement as a judgement.`);
    }
  }

  return verifiedAsJudgement;
}

function verifyAsTypeAssertion(statement, assignments, stated, context) {
  let verifiedAsTypeAssertion = false;

  const statementNode = statement.getNode(),
        typeAssertionNode = typeAssertionNodeQuery(statementNode),
        typeAssertion = TypeAssertion.fromTypeAssertionNode(typeAssertionNode, context);

  if (typeAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a type assertion...`);

    const typeAssertionVerified = typeAssertion.verify(assignments, stated, context);

    verifiedAsTypeAssertion = typeAssertionVerified; ///

    if (verifiedAsTypeAssertion) {
      context.debug(`...verified the '${statementString}' statement as a type assertion.`);
    }
  }

  return verifiedAsTypeAssertion;
}

function verifyAsDefinedAssertion(statement, assignments, stated, context) {
  let verifiedAsDefinedAssertion = false;

  const statementNode = statement.getNode(),
        definedAssertionNode = definedAssertionNodeQuery(statementNode),
        definedAssertion = DefinedAssertion.fromDefinedAssertionNode(definedAssertionNode, context);

  if (definedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a defined assertion...`);

    const definedAssertionVerified = definedAssertion.verify(assignments, stated, context);

    verifiedAsDefinedAssertion = definedAssertionVerified; ///

    if (verifiedAsDefinedAssertion) {
      context.debug(`...verified the '${statementString}' statement as a defined assertion.`);
    }
  }

  return verifiedAsDefinedAssertion;
}

function verifyAsContainedAssertion(statement, assignments, stated, context) {
  let verifiedAsContainedAssertion = false;

  const statementNode = statement.getNode(),
        containedAssertionNode = containedAssertionNodeQuery(statementNode),
        containedAssertion = ContainedAssertion.fromContainedAssertionNode(containedAssertionNode, context);

  if (containedAssertion !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a contained assertion...`);

    const containedAssertionVerified = containedAssertion.verify(assignments, stated, context);

    verifiedAsContainedAssertion = containedAssertionVerified; ///

    if (verifiedAsContainedAssertion) {
      context.debug(`...verified the '${statementString}' statement as a contained assertion.`);
    }
  }

  return verifiedAsContainedAssertion;
}

function verifyAsSubproofAssertion(statement, assignments, stated, context) {
  let verifiedAsSubproofAssertion = false;

  const statementNode = statement.getNode(),
        subproofAssertionNode = subproofAssertionNodeQuery(statementNode),
        subproofAssertion = SubproofAssertion.fromSubproofAssertionNode(subproofAssertionNode, context);

  if (subproofAssertionNode !== null) {
    const statementString = statement.getString();

    context.trace(`Verifying the '${statementString}' statement as a subproof assertion...`);

    const subproofAssertionVerified = subproofAssertion.verify(assignments, stated, context);

    verifiedAsSubproofAssertion = subproofAssertionVerified; ///

    if (verifiedAsSubproofAssertion) {
      context.debug(`...verified the '${statementString}' statement as a subproof assertion.`);
    }
  }

  return verifiedAsSubproofAssertion;
}

const verifyMixins = [
  verifyAsMetavariable,
  verifyAsEquality,
  verifyAsJudgement,
  verifyAsTypeAssertion,
  verifyAsDefinedAssertion,
  verifyAsSubproofAssertion,
  verifyAsContainedAssertion
];

export default verifyMixins;
