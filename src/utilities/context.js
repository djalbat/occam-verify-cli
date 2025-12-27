"use strict";

import structure from "../structure";
import TemporaryContext from "../context/temporary";

export function equalityFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Equality } = structure,
        statementNode = statement.getNode(),
        equality = Equality.fromStatementNode(statementNode, context);

  return equality;
}

export function judgementFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Judgement } = structure,
        statementNode = statement.getNode(),
        judgement = Judgement.fromStatementNode(statementNode, context);

  return judgement;
}

export function metavariableFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Metavariable } = structure,
        statementNode = statement.getNode(),
        metavariable = Metavariable.fromStatementNode(statementNode, context);

  return metavariable;
}

export function typeAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { TypeAssertion } = structure,
        statementNode = statement.getNode(),
        typeAssertion = TypeAssertion.fromStatementNode(statementNode, context);

  return typeAssertion;
}

export function definedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { DefinedAssertion } = structure,
        statementNode = statement.getNode(),
        definedAssertion = DefinedAssertion.fromStatementNode(statementNode, context);

  return definedAssertion;
}

export function propertyAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { PropertyAssertion } = structure,
        statementNode = statement.getNode(),
        propertyAssertion = PropertyAssertion.fromStatementNode(statementNode, context);

  return propertyAssertion;
}

export function subproofAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { SubproofAssertion } = structure,
        statementNode = statement.getNode(),
        subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

  return subproofAssertion;
}

export function containedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { ContainedAssertion } = structure,
        statementNode = statement.getNode(),
        containedAssertion = ContainedAssertion.fromStatementNode(statementNode, context);

  return containedAssertion;
}

export function satisfiesAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { SatisfiesAssertion } = structure,
        statementNode = statement.getNode(),
        satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);

  return satisfiesAssertion;
}

export function contextFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        temporaryContext = TemporaryContext.fromContextAndTokens(context, tokens);

  context = temporaryContext; ///

  return context;
}
