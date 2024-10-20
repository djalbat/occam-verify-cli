"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";
import { unqualifiedStatementFromJSON, unqualifiedStatementToUnqualifiedStatementJSON } from "./utilities/json";

const unqualifiedStatementNodeQuery = nodeQuery("/conclusion/unqualifiedStatement");

class Conclusion {
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

    const localContextB = localContext; ///

    localContext = LocalContext.fromFileContext(this.fileContext);

    const localContextA = localContext; ///

    localContextB.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, localContextA, localContextB);

    if (statementUnified) {
      localContextB.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
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
    const unqualifiedStatementJSON = unqualifiedStatementToUnqualifiedStatementJSON(this.unqualifiedStatement),
          unqualifiedStatement = unqualifiedStatementJSON,  ///
          json = {
            unqualifiedStatement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const unqualifiedStatement = unqualifiedStatementFromJSON(json, fileContext),
          conclusion = new Conclusion(fileContext, unqualifiedStatement);

    return conclusion;
  }

  static fromConclusionNode(conclusionNode, fileContext) {
    const { UnqualifiedStatement } = shim,
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          conclusion = new Conclusion(fileContext, unqualifiedStatement);

    return conclusion;
  }
}

Object.assign(shim, {
  Conclusion
});

export default Conclusion;
