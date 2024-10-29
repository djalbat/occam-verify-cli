"use strict";

import shim from "./shim";

import { nodeQuery } from "./utilities/query";
import { unqualifiedStatementFromJSON, unqualifiedStatementToUnqualifiedStatementJSON } from "./utilities/json";

const unqualifiedStatementNodeQuery = nodeQuery("/consequent/unqualifiedStatement");

class Consequent {
  constructor(unqualifiedStatement) {
    this.unqualifiedStatement = unqualifiedStatement;
  }

  getUnqualifiedStatement() {
    return this.unqualifiedStatement;
  }

  getString() { return this.unqualifiedStatement.getString(); }

  getStatement() { return this.unqualifiedStatement.getStatement(); }

  matchStatementNode(statementNode) { return this.unqualifiedStatement.matchStatementNode(statementNode); }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const consequent = this,  ///
          statementString = statement.getString(),
          consequentString = consequent.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${consequentString}' consequent...`);

    statementUnified = this.unqualifiedStatement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${consequentString}' consequent.`);
    }

    return statementUnified;
  }

  verify(context) {
    let verified = false;

    const consequentString = this.getString();  ///

    context.trace(`Verifying the '${consequentString}' consequent...`);

    const stated = true,
          assignments = [],
          unqualifiedStatementVerified = this.unqualifiedStatement.verify(assignments, stated, context);

    if (unqualifiedStatementVerified) {
      verified = true;
    }

    if (verified) {
      context.debug(`...verified the '${consequentString}' consequent.`);
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
          consequent = new Consequent(unqualifiedStatement);

    return consequent;
  }

  static fromConsequentNode(consequentNode, fileContext) {
    const { UnqualifiedStatement } = shim,
          unqualifiedStatementNode = unqualifiedStatementNodeQuery(consequentNode),
          unqualifiedStatement = UnqualifiedStatement.fromUnqualifiedStatementNode(unqualifiedStatementNode, fileContext),
          consequent = new Consequent(unqualifiedStatement);

    return consequent;
  }
}

Object.assign(shim, {
  Consequent
});

export default Consequent;
