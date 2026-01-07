"use strict";

import { equalityFromStatementNode,
         judgementFromStatementNode,
         metavariableFromStatementNode,
         typeAssertionFromStatementNode,
         dDefinedAssertionFromStatementNode,
         propertyAssertionFromStatementNode,
         subproofAssertionFromStatementNode,
         containedAssertionFromStatementNode,
         satisfiesAssertionFromStatementNode } from "../utilities/element";

export function equalityFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        equality = equalityFromStatementNode(statementNode, context);

  return equality;
}

export function judgementFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        judgement = judgementFromStatementNode(statementNode, context);

  return judgement;
}

export function metavariableFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        metavariable = metavariableFromStatementNode(statementNode, context);

  return metavariable;
}

export function typeAssertionFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        typeAssertion = typeAssertionFromStatementNode(statementNode, context);

  return typeAssertion;
}

export function definedAssertionFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        definedAssertion = dDefinedAssertionFromStatementNode(statementNode, context);

  return definedAssertion;
}

export function propertyAssertionFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        propertyAssertion = propertyAssertionFromStatementNode(statementNode, context);

  return propertyAssertion;
}

export function subproofAssertionFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        subproofAssertion = subproofAssertionFromStatementNode(statementNode, context);

  return subproofAssertion;
}

export function containedAssertionFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        containedAssertion = containedAssertionFromStatementNode(statementNode, context);

  return containedAssertion;
}

export function satisfiesAssertionFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        satisfiesAssertion = satisfiesAssertionFromStatementNode(statementNode, context);

  return satisfiesAssertion;
}
