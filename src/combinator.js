"use strict";

import Statement from "./statement";

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

  verify(fileContext) {
    const statementVerifiedAsCombinator = this.statement.verifyAsCombinator(fileContext),
          verified = statementVerifiedAsCombinator; ///

    return verified;
  }

  static fromCombinatorDeclarationNode(combinatorDeclarationNode, fileContext) {
    const statementNode = statementNodeQuery(combinatorDeclarationNode),
          statement = Statement.fromStatementNode(statementNode, fileContext),
          combinator = new Combinator(statement);

    return combinator;
  }
}
