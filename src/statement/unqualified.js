"use strict";

import Statement from "../statement";
import LocalContext from "../context/local";

import { trim } from "../utilities/string";
import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement");

export default class UnqualifiedStatement {
  constructor(string, statement) {
    this.string = string;
    this.statement = statement;
  }

  getString() {
    return this.string;
  }

  getStatement() {
    return this.statement;
  }

  verify(assignments, stated, localContext) {
    let verified;

    const unqualifiedStatementString = this.string;

    localContext.trace(`Verifying the '${unqualifiedStatementString}' unqualified statement...`);

    const statementVerified = this.statement.verify(assignments, stated, localContext);

    verified = statementVerified; ///

    if (verified) {
      localContext.debug(`...verified the '${unqualifiedStatementString}' unqualified statement.`);
    }

    return verified;
  }

  static fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext) {
    let unqualifiedStatement = null;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            localContext = LocalContext.fromFileContext(fileContext),
            statement = (statementNode !== null) ?
                          Statement.fromStatementNode(statementNode, localContext) :
                            null,
            node = unqualifiedStatementNode,  ///
            string = trim(fileContext.nodeAsString(node));

      unqualifiedStatement = new UnqualifiedStatement(string, statement);
    }

    return unqualifiedStatement;
  }
}
