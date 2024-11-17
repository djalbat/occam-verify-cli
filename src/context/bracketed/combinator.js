"use strict";

import BracketedContext from "../../context/bracketted";
import StatementPartialContext from "../../context/partial/statement";

import { STATEMENT_META_TYPE_NAME } from "../../metaTypeNames";
import { nominalLexer, nominalParser } from "../../utilities/nominal";

class CombinatorBracketedContext extends BracketedContext {
  getBracketedStatementNode() {
    const node = this.getNode(),
          bracketedStatementNode = node;  ///

    return bracketedStatementNode;
  }

  static fromNothing() {
    const string = `(${STATEMENT_META_TYPE_NAME})`,
          lexer = nominalLexer, ///
          parser = nominalParser, ///
          statementPartialContext = StatementPartialContext.fromStringLexerAndParser(string, lexer, parser),
          context = statementPartialContext,  ///
          combinatorBracketedContext = BracketedContext.fromString(CombinatorBracketedContext, string, context);

    return combinatorBracketedContext;
  }
}

const combinatorBracketedContext = CombinatorBracketedContext.fromNothing();

export default  combinatorBracketedContext;
