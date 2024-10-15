"use strict";

import LocalContext from "./context/local";
import UnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "./utilities/query";

const unqualifiedStatementNodeQuery = nodeQuery("/conclusion/unqualifiedStatement");

export default class Conclusion {
  constructor(fileContext, unqualifiedStatement) {
    this.fileContext = fileContext;
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getFileContext() {
    return this.fileContext;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  unifyStatement(statement, substitutions, localContext) {
    let statementUnified;

    const statementString = statement.getString(),
          conclusionString = this.getString();

    localContext.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    const localContextB = localContext;

    localContext = LocalContext.fromFileContext(this.fileContext);

    const localContextA = localContext; ///

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
    }

    return statementUnified;
  }

  verify(localContext) {
    let verified = false;

    const conclusionString = this.getString();  ///

    localContext.trace(`Verifying the '${conclusionString}' conclusion...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

    if (unqualifiedStatementVerified) {
      verified = true;
    }

    if (verified) {
      localContext.debug(`...verified the '${conclusionString}' conclusion.`);
    }

    return verified;
  }

  toJSON() {
    const unqualifiedStatementJSON = this.unqualifiedStatement.toJSON(),
          unqualifiedStatement = unqualifiedStatementJSON,  ///
          json = {
            unqualifiedStatement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let { unqualifiedStatement } = json;

    json = unqualifiedStatement;  ///

    unqualifiedStatement = UnqualifiedStatement.fromJSON(json, fileContext);

    const conclusion = new Conclusion(fileContext, unqualifiedStatement);

    return conclusion;
  }

  static fromConclusionNode(conclusionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          conclusion = new Conclusion(fileContext, unqualifiedStatement);

    return conclusion;
  }
}
