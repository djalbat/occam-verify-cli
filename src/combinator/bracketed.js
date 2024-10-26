"use strict";

import shim from "../shim";
import Combinator from "../combinator";
import StatementNodeAndTokens from "../nodeAndTokens/statement";

import { STATEMENT_META_TYPE_NAME } from "../metaTypeNames";
import { nominalLexer, nominalParser } from "../utilities/nominal";

const getLexer = () => {
        const lexer = nominalLexer; ///

        return lexer;
      },
      getParser = () => {
        const parser = nominalParser; ///

        return parser;
      },
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
      context = {
        getLexer,
        getParser,
        nodeAsTokens,
        nodeAsString,
        tokensAsString
      },
      string = `(${STATEMENT_META_TYPE_NAME})`,
      statementNodeAndTokens = StatementNodeAndTokens.fromString(string, context),
      statementTokens = statementNodeAndTokens.getStatementTokens(),
      statementNode = statementNodeAndTokens.getStatementNode();

export const bracketedStatementNode = statementNode;  ///

export default class BracketedCombinator extends Combinator {
  static fromNothing() {
    const { Statement } = shim,
          statement = Statement.fromStatementNode(statementNode, context),
          bracketedCombinator = new BracketedCombinator(statement);

    return bracketedCombinator;
  }
}
