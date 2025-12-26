"use strict";

import ontology from "../ontology";
import TemporaryContext from "../context/temporary";

export function equalityFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Equality } = ontology,
        statementNode = statement.getNode(),
        equality = Equality.fromStatementNode(statementNode, context);

  return equality;
}

export function judgementFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Judgement } = ontology,
        statementNode = statement.getNode(),
        judgement = Judgement.fromStatementNode(statementNode, context);

  return judgement;
}

export function metavariableFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Metavariable } = ontology,
        statementNode = statement.getNode(),
        metavariable = Metavariable.fromStatementNode(statementNode, context);

  return metavariable;
}

export function typeAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { TypeAssertion } = ontology,
        statementNode = statement.getNode(),
        typeAssertion = TypeAssertion.fromStatementNode(statementNode, context);

  return typeAssertion;
}

export function definedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { DefinedAssertion } = ontology,
        statementNode = statement.getNode(),
        definedAssertion = DefinedAssertion.fromStatementNode(statementNode, context);

  return definedAssertion;
}

export function propertyAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { PropertyAssertion } = ontology,
        statementNode = statement.getNode(),
        propertyAssertion = PropertyAssertion.fromStatementNode(statementNode, context);

  return propertyAssertion;
}

export function subproofAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { SubproofAssertion } = ontology,
        statementNode = statement.getNode(),
        subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

  return subproofAssertion;
}

export function containedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { ContainedAssertion } = ontology,
        statementNode = statement.getNode(),
        containedAssertion = ContainedAssertion.fromStatementNode(statementNode, context);

  return containedAssertion;
}

export function satisfiesAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { SatisfiesAssertion } = ontology,
        statementNode = statement.getNode(),
        satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);

  return satisfiesAssertion;
}

function contextFromFrame(frame, context) {
  const frameTokens = frame.getTokens(),
        tokens = frameTokens, ///
        temporaryContext = TemporaryContext.fromContextAndTokens(context, tokens);

  context = temporaryContext; ///

  return context;
}

function contextFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        temporaryContext = TemporaryContext.fromContextAndTokens(context, tokens);

  context = temporaryContext; ///

  return context;
}
