"use strict";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";
import { unqualifiedStatementTokensFromStatementString } from "./utilities/node";

export default class Combinator {
  constructor(statementNode, string) {
    this.statementNode = statementNode;
    this.string = string;
  }

  getStatementNode() {
    return this.statementNode;
  }

  getString() {
    return this.string;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromStatementNodeAndTokens(statementNode, tokens) {
    const string = stringFromStatementNodeAndTokens(statementNode, tokens),
          combinator = new Combinator(statementNode, string);

    return combinator;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { statement } = json,
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          unqualifiedStatementTokens = unqualifiedStatementTokensFromStatementString(statementString, lexer),
          tokens = unqualifiedStatementTokens,  //
          string = stringFromStatementNodeAndTokens(statementNode, tokens),
          combinator = new Combinator(statementNode, string);

    return combinator;
  }
}

function stringFromStatementNodeAndTokens(statementNode, tokens) {
  const statementString = nodeAsString(statementNode, tokens),
        string = statementString; ///

  return string;
}
