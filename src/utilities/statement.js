"use strict";

import elements from "../elements";

export function equalityFromStatement(statement, context) {
  const { Equality } = elements,
        statementNode = statement.getNode(),
        equality = Equality.fromStatementNode(statementNode, context);

  return equality;
}

export function judgementFromStatement(statement, context) {
  const { Judgement } = elements,
        statementNode = statement.getNode(),
        judgement = Judgement.fromStatementNode(statementNode, context);

  return judgement;
}

export function metavariableFromStatement(statement, context) {
  const { Metavariable } = elements,
        statementNode = statement.getNode(),
        metavariable = Metavariable.fromStatementNode(statementNode, context);

  return metavariable;
}

export function typeAssertionFromStatement(statement, context) {
  const { TypeAssertion } = elements,
        statementNode = statement.getNode(),
        typeAssertion = TypeAssertion.fromStatementNode(statementNode, context);

  return typeAssertion;
}

export function definedAssertionFromStatement(statement, context) {
  const { DefinedAssertion } = elements,
        statementNode = statement.getNode(),
        definedAssertion = DefinedAssertion.fromStatementNode(statementNode, context);

  return definedAssertion;
}

export function propertyAssertionFromStatement(statement, context) {
  const { PropertyAssertion } = elements,
        statementNode = statement.getNode(),
        propertyAssertion = PropertyAssertion.fromStatementNode(statementNode, context);

  return propertyAssertion;
}

export function subproofAssertionFromStatement(statement, context) {
  const { SubproofAssertion } = elements,
        statementNode = statement.getNode(),
        subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

  return subproofAssertion;
}

export function containedAssertionFromStatement(statement, context) {
  const { ContainedAssertion } = elements,
        statementNode = statement.getNode(),
        containedAssertion = ContainedAssertion.fromStatementNode(statementNode, context);

  return containedAssertion;
}

export function satisfiesAssertionFromStatement(statement, context) {
  const { SatisfiesAssertion } = elements,
        statementNode = statement.getNode(),
        satisfiesAssertion = SatisfiesAssertion.fromStatementNode(statementNode, context);

  return satisfiesAssertion;
}
