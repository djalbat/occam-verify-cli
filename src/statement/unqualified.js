"use strict";

import Statement from "../statement";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

export default class UnqualifiedStatement {
  constructor(statement) {
    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getString() { return this.statement.getString(); }

  verify(assignments, stated, localContext) {
    let verified;

    const unqualifiedStatementString = this.getString(); ///

    localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`);

    const statementVerified = this.statement.verify(assignments, stated, localContext);

    verified = statementVerified; ///

    if (verified) {
      localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`);
    }

    return verified;
  }

  toJSON() {
    const statementJSON = this.statement.toJSON(),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { statement } = json;

    json = statement; ///

    statement = Statement.fromJSON(json, fileContext);

    const unqualifiedStatement = new UnqualifiedStatement(statement);

    return unqualifiedStatement;
  }

  static fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
    let unqualifiedStatement = null;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            localContext = LocalContext.fromFileContext(fileContext),
            statement = Statement.fromStatementNode(statementNode, localContext);

      unqualifiedStatement = new UnqualifiedStatement(statement);
    }

    return unqualifiedStatement;
  }
}
