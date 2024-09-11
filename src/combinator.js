"use strict";

import { nodeAsString } from "./utilities/string";

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

  static fromStatementNodeAndTokens(statementNode, tokens) {
    const string = stringFromStatementNodeAndTokens(statementNode, tokens),
          combinator = new Combinator(statementNode, string);

    return combinator;
  }
}

function stringFromStatementNodeAndTokens(statementNode, tokens) {
  const statementString = nodeAsString(statementNode, tokens),
        string = statementString; ///

  return string;
}
