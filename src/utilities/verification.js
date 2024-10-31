"use strict";

import shim from "../shim";
import LocalContext from "../context/local";
import TypeAssertion from "../assertion/type";
import DefinedAssertion from "../assertion/defined";
import SubproofAssertion from "../assertion/subproof";
import ContainedAssertion from "../assertion/contained";

import { bracketedStatementChildNodeFromStatementNode } from "../utilities/brackets";

export function stripBracketsFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    context = contextFromStatement(statement, context); ///

    const { Statement } = shim,
          statementNode = bracketedStatementChildNode;  ///

    statement = Statement.fromStatementNode(statementNode, context);
  }

  return statement;
}

export function equalityFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Equality } = shim,
        statementNode = statement.getNode(),
        equality = Equality.fromStatementNode(statementNode, context);

  return equality;
}

export function judgementFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Judgement } = shim,
        statementNode = statement.getNode(),
        judgement = Judgement.fromStatementNode(statementNode, context);

  return judgement;
}

export function metavariableFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const { Metavariable } = shim,
        statementNode = statement.getNode(),
        metavariable = Metavariable.fromStatementNode(statementNode, context);

  return metavariable;
}

export function typeAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const statementNode = statement.getNode(),
        typeAssertion = TypeAssertion.fromStatementNode(statementNode, context);

  return typeAssertion;
}

export function definedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const statementNode = statement.getNode(),
        definedAssertion = DefinedAssertion.fromStatementNode(statementNode, context);

  return definedAssertion;
}

export function subproofAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const statementNode = statement.getNode(),
        subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

  return subproofAssertion;
}

export function containedAssertionFromStatement(statement, context) {
  context = contextFromStatement(statement, context); ///

  const statementNode = statement.getNode(),
        containedAssertion = ContainedAssertion.fromStatementNode(statementNode, context);

  return containedAssertion;
}

function contextFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}