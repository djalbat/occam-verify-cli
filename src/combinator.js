"use strict";

import { nodeAsString } from "./utilities/string";
import { statementNodeFromStatementString } from "./utilities/node";

export default class Combinator {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  asString(tokens) {
    let string;

    const statementString = nodeAsString(this.statementNode, tokens);

    string = `${statementString}`;

    return string;
  }

  toJSON(tokens) {
    const statementString = nodeAsString(this.statementNode, tokens),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { statement } = json,
          statementString = statement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          combinator = new Combinator(statementNode);

    return combinator;
  }

  static fromStatementNode(statementNode) {
    const combinator = new Combinator(statementNode);

    return combinator;
  }
}
