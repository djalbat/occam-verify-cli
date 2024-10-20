"use strict";

import shim from "../shim";
import Combinator from "../combinator";

import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { nominalLexer, nominalParser } from "../utilities/nominal";
import { statementTokensFromUnqualifiedStatementTokens, unqualifiedStatementTokensFromUnqualifiedStatementString } from "../utilities/tokens";
import { statementNodeFromUnqualifiedStatementNode,
         unqualifiedStatementStringFromStatementString,
         unqualifiedStatementNodeFromUnqualifiedStatementTokens } from "../utilities/node";

const lexer = nominalLexer, ///
      parser = nominalParser, ///
      statementString = `(${STATEMENT_META_TYPE_NAME})`,
      unqualifiedStatementString = unqualifiedStatementStringFromStatementString(statementString),
      unqualifiedStatementTokens = unqualifiedStatementTokensFromUnqualifiedStatementString(unqualifiedStatementString, lexer),
      unqualifiedStatementNode = unqualifiedStatementNodeFromUnqualifiedStatementTokens(unqualifiedStatementTokens, parser),
      statementTokens = statementTokensFromUnqualifiedStatementTokens(unqualifiedStatementTokens),
      statementNode = statementNodeFromUnqualifiedStatementNode(unqualifiedStatementNode),
      nodeAsTokens = (node) => {
        const tokens = statementTokens; ///

        return tokens;
      },
      nodeAsString = (node) => {
        const string = statementString;  ///

        return string;
      },
      tokensAsString = (tokens) => {
        const string = statementNode;  ///

        return string;
      },
      localContext = {
        nodeAsTokens,
        nodeAsString,
        tokensAsString
      };

export const bracketedStatementNode = statementNode;  ///

export default class BracketedCombinator extends Combinator {
  static fromNothing() {
    const { Statement } = shim,
          statement = Statement.fromStatementNode(statementNode, localContext),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
}
