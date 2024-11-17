"use strict";

import PartialContext from "../../context/partial";

import { ruleFromBNF } from "../../context/partial";

const bnf = `

        _ ::= statement... <END_OF_LINE> ;
        
      `,
      rule = ruleFromBNF(bnf);

export default class StatementPartialContext extends PartialContext {
  getStatementNode() {
    const statementNode = this.node; ///

    return statementNode;
  }

  getStatementTokens() {
    const statementTokens = this.tokens; ///

    return statementTokens;
  }

  static rule = rule;

  static fromStatement(statement, context) {
    const string = statement.getString(),
          lexer = context.getLexer(),
          parser = context.getParser(),
          statementPartialContext = PartialContext.fromStringLexerAndParser(StatementPartialContext, string, lexer, parser);

    return statementPartialContext;
  }

  static fromStringLexerAndParser(string, lexer, parser) { return PartialContext.fromStringLexerAndParser(StatementPartialContext, string, lexer, parser); }
}
