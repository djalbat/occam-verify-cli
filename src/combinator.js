"use strict";

export default class Combinator {
  constructor(statement) {
    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getString() { return this.statement.string; }

  verify(fileContext) {
    const statementVerifiedAsCombinator = this.statement.verifyAsCombinator(fileContext),
          verified = statementVerifiedAsCombinator; ///

    return verified;
  }

  static fromStatement(statement) {
    const combinator = new Combinator(statement);

    return combinator;
  }
}
