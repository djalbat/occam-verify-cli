"use strict";

import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";
import UnqualifiedStatement from "./statement/unqualified";

import { trim } from "./utilities/string";
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

    const conclusion = this, ///
          statementString = statement.getString(),
          conclusionStatement = conclusion.getStatement(),
          conclusionStatementString = conclusionStatement.getString();

    localContext.trace(`Unifying the '${statementString}' statement with the conclusion's '${conclusionStatementString}' statement...`);

    const statementNode = statement.getNode(),
          conclusionStatementNode = conclusionStatement.getNode(),
          nodeA = conclusionStatementNode,  ///
          nodeB = statementNode,  ///
          fileContextA = this.fileContext,  ///
          localContextA = LocalContext.fromFileContext(fileContextA),
          localContextB = localContext, ///
          unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    statementUnified = unified; ///

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the conclusion's '${conclusionStatementString}' statement.`);
    }

    return statementUnified;
  }

  verify(localContext) {
    let verified = false,
        conclusionString = this.getString();  ///

    conclusionString = trim(conclusionString);  ///

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
    const unqualifiedStatementString = this.unqualifiedStatement.getString(),
          unqualifiedStatement = unqualifiedStatementString,  ///
          json = {
            unqualifiedStatement
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    let conclusion = null;

    debugger

    return conclusion;
  }
  static fromConclusionNode(conclusionNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          conclusion = new Conclusion(fileContext, unqualifiedStatement);

    return conclusion;
  }
}
