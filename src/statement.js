"use strict";

export default class Statement {
  constructor(string, node) {
    this.string = string;
    this.node = node;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  verifyAsCombinator(fileContext) {
    debugger
  }

  toJSON(fileContext) {
    const string = this.string, ///
          json = {
            string
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    debugger
  }

  static fromStatementNode(statementNode, fileContext) {
    const node = statementNode, ///
          string = fileContext.nodeAsString(node),
          statement = new Statement(string, node);

    return statement;
  }
}
