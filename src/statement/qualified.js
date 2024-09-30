"use strict";

import Statement from "../statement";
import LocalContext from "../context/local";

import { trim } from "../utilities/string";
import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/qualifiedStatement/statement");

export default class QualifiedStatement {
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

  static fromQualifiedStatementNode(qualifiedStatementNode, fileContext) {
    let qualifiedStatement = null;

    if (qualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(qualifiedStatementNode),
            localContext = LocalContext.fromFileContext(fileContext),
            statement = (statementNode !== null) ?
                          Statement.fromStatementNode(statementNode, localContext) :
                            null,
            node = qualifiedStatementNode,  ///
            string = trim(fileContext.nodeAsString(node));

        qualifiedStatement = new QualifiedStatement(string, statement);
    }

    return qualifiedStatement;
  }
}
