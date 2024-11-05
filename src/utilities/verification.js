"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { bracketedStatementChildNodeFromStatementNode } from "../utilities/brackets";

export function stripBracketsFromTerm(term, context) {
  const termNode = term.getNode(),
        bracketedTermChildNode = bracketedTermChildNodeFromTermNode(termNode);

  if (bracketedTermChildNode !== null) {
    context = contextFromTerm(term, context); ///

    const { Term } = dom,
          termNode = bracketedTermChildNode;  ///

    term = Term.fromStatementNode(termNode, context);
  }

  return term;
}

export function stripBracketsFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    context = contextFromStatement(statement, context); ///

    const { Statement } = dom,
          statementNode = bracketedStatementChildNode;  ///

    statement = Statement.fromStatementNode(statementNode, context);
  }

  return statement;
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

function contextFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  return context;
}