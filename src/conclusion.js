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

  unifyStatement(statement, substitutions, context) {
    let statementUnified;

    const localContext = LocalContext.fromFileContext(this.fileContext),
          generalContext = localContext, ///
          specificContext = context; ///

    const conclusion = this,  ///
          statementString = statement.getString(),
          conclusionString = conclusion.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
    }

    return statementUnified;
  }

  verify(context) {
    let verified = false;

    const conclusionString = this.getString();  ///

    context.trace(`Verifying the '${conclusionString}' conclusion...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);

    if (unqualifiedStatementVerified) {
      verified = true;
    }

    if (verified) {
      context.debug(`...verified the '${conclusionString}' conclusion.`);
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
