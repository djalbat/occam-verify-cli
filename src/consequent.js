"use strict";

import LocalContext from "./context/local";
import metaLevelUnifier from "./unifier/metaLevel";
import UnqualifiedStatement from "./statement/unqualified";

import { nodeQuery } from "./utilities/query";

const unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement");

export default class Consequent {
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

    const consequent = this, ///
          statementString = statement.getString(),
          consequentStatement = consequent.getStatement(),
          consequentStatementString = consequentStatement.getString();

    localContext.trace(`Unifying the '${statementString}' statement with the consequent's '${consequentStatementString}' statement...`);

    const statementNode = statement.getNode(),
          consequentStatementNode = consequentStatement.getNode(),
          nodeA = consequentStatementNode,  ///
          nodeB = statementNode,  ///
          fileContextA = this.fileContext,  ///
          localContextA = LocalContext.fromFileContext(fileContextA),
          localContextB = localContext, ///
          unified = metaLevelUnifier.unify(nodeA, nodeB, substitutions, localContextA, localContextB);

    statementUnified = unified; ///

    if (statementUnified) {
      localContext.debug(`...unified the '${statementString}' statement with the consequent's '${consequentStatementString}' statement.`);
    }

    return statementUnified;
  }

  verify(localContext) {
    let verified = false;

    const consequentString = this.getString();  ///

    localContext.trace(`Verifying the '${consequentString}' consequent...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, localContext);

    if (unqualifiedStatementVerified) {
      verified = true;
    }

    if (verified) {
      localContext.debug(`...verified the '${consequentString}' consequent.`);
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

    const consequent = new Consequent(fileContext, unqualifiedStatement);

    return consequent;
  }

  static fromConsequentNode(consequentNode, fileContext) {
    const unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          consequent = new Consequent(fileContext, unqualifiedStatement);

    return consequent;
  }
}
