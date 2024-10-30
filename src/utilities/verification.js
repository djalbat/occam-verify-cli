"use strict";

import shim from "../shim";
import LocalContext from "../context/local";
import SubproofAssertion from "../assertion/subproof";

import { bracketedStatementChildNodeFromStatementNode } from "../utilities/brackets";

export function stripBracketsFromStatement(statement, context) {
  const statementNode = statement.getNode(),
        bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    const statementTokens = statement.getTokens(),
          tokens = statementTokens, ///
          localContext = LocalContext.fromContextAndTokens(context, tokens);

    context = localContext; ///

    const { Statement } = shim,
          statementNode = bracketedStatementChildNode;  ///

    statement = Statement.fromStatementNode(statementNode, context);
  }

  return statement;
}

export function subproofAssertionFromStatement(statement, context) {
  const statementTokens = statement.getTokens(),
        tokens = statementTokens, ///
        localContext = LocalContext.fromContextAndTokens(context, tokens);

  context = localContext; ///

  const statementNode = statement.getNode(),
        subproofAssertion = SubproofAssertion.fromStatementNode(statementNode, context);

  return subproofAssertion;
}
