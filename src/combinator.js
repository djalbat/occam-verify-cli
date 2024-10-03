"use strict";

import shim from "./shim";
import Statement from "./statement";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default class Combinator {
  constructor(statement) {
    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getString() { return this.statement.getString(); }

  getStatementNode() {
    const statementNode = this.statement.getNode();

    return statementNode;
  }

  verify(fileContext) {
    let verified;

    const combinatorString = this.string; ///

    fileContext.trace(`Verifying the '${combinatorString}' combinator...`);

    const statementVerifiedAsCombinator = this.statement.verifyAsCombinator(fileContext);

    verified = statementVerifiedAsCombinator; ///

    if (verified) {
      fileContext.debug(`...verified the '${combinatorString}' combinator.`);
    }

    return verified;
  }

  toJSON() {
    const statementString = this.statement.getString(),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { statement } = json;

    const string = statement;  ///

    json = {  ///
      string
    };

    statement = Statement.fromJSON(json, fileContext);

    const combinator = new Combinator(statement);

    return combinator;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const { Statement } = shim,
          statementNode = statementNodeQuery(combinatorDeclarationNode),
          localContext = LocalContext.fromFileContext(fileContext),
          statement = Statement.fromStatementNode(statementNode, localContext),
          combinator = new Combinator(statement);

    return combinator;
  }
}
