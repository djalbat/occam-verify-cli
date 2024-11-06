"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

export function metavariableFromFrame(frame, context) {
  context = contextFromFrame(frame, context); ///

  const { Metavariable } = dom,
        frameNode = frame.getNode(),
        metavariable = Metavariable.fromFrameNode(frameNode, context);

  return metavariable;
}

export function metavariableFromReference(reference, context) {
  context = contextFromReference(reference, context); ///

  const { Metavariable } = dom,
    referenceNode = reference.getNode(),
    metavariable = Metavariable.fromReferenceNode(referenceNode, context);

  return metavariable;
}

export function equalityFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Equality } = dom,
        statementNode = statement.getNode(),
        equality = Equality.fromStatementNode(statementNode, context);

  return equality;
}

export function judgementFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Judgement } = dom,
        statementNode = statement.getNode(),
        judgement = Judgement.fromStatementNode(statementNode, context);

  return judgement;
}

export function metavariableFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Metavariable } = dom,
        statementNode = statement.getNode(),
        metavariable = Metavariable.fromStatementNode(statementNode, context);

  return metavariable;
}

export function typeAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { TypeAssertion } = dom,
        statementNode = statement.getNode(),
        typeAssertion = TypeAssertion.fromStatementNode(statementNode, context);

  return typeAssertion;
}

export function definedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { DefinedAssertion } = dom,
        statementNode = statement.getNode(),
        definedAssertion = DefinedAssertion.fromStatementNode(statementNode, context);

  return definedAssertion;
}

export function subproofAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { SubproofAssertion } = dom,
        statementNode = statement.getNode(),
        subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

  return subproofAssertion;
}

export function containedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { ContainedAssertion } = dom,
        statementNode = statement.getNode(),
        containedAssertion = ContainedAssertion.fromStatementNode(statementNode, context);

  return containedAssertion;
}

function contextFromFrame(frame, context) {
  const frameTokens = frame.getTokens(),
        tokens = frameTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}

function contextFromReference(reference, context) {
  const referenceTokens = reference.getTokens(),
        tokens = referenceTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}

function contextFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}
