"use strict";

import statementAsCombinatorVerifier from "./verifier/statementAsCombinator";

import { statementNodeFromStatementString } from "./utilities/node";

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

  verify(assignments, localContext) {
    let verified;

    debugger

    return verified;
  }

  verifyAsCombinator(fileContext) {
    let verifiedAsCombinator;

    const statementNode = this.node,  ///
          statementString = this.string;  ///

    fileContext.trace(`Verifying the '${statementString}' statement as a combinator...`);

    verifiedAsCombinator = statementAsCombinatorVerifier.verifyStatement(statementNode, fileContext);

    if (verifiedAsCombinator) {
      fileContext.debug(`...verified the '${statementString}' statement as a combinator.`, statementNode);
    }

    return verifiedAsCombinator;
  }

  toJSON(fileContext) {
    const string = this.string, ///
          json = {
            string
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          statementString = string, ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          statementNode = statementNodeFromStatementString(statementString, lexer, parser),
          node = statementNode,  ///
          statement = new Statement(string, node);

    return statement;
  }

  static fromStatementNode(statementNode, fileContext) {
    const node = statementNode, ///
          string = fileContext.nodeAsString(node),
          statement = new Statement(string, node);

    return statement;
  }
}
