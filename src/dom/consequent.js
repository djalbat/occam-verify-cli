"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default domAssigned(class Consequent {
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

  matchStatementNode(statementNode) { return this.statement.matchStatementNode(statementNode); }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const consequent = this,  ///
          statementString = statement.getString(),
          consequentString = consequent.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${consequentString}' consequent...`);

    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${consequentString}' consequent.`);
    }

    return statementUnified;
  }

  verify(context) {
    let verified = false;

    const consequentString = this.string;  ///

    context.trace(`Verifying the '${consequentString}' consequent...`);

    if (this.statement !== null) {
      const stated = true,
            assignments = null,
            statementVerified = this.statement.verify(assignments, stated, context);

      verified = statementVerified; ///
    } else {
      context.debug(`Unable to verify the '${consequentString}' consequent because it is nonsense.`);
    }

    if (verified) {
      context.debug(`...verified the '${consequentString}' consequent.`);
    }

    return verified;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static name = "Consequent";

  static fromJSON(json, fileContext) {
    const statement = statementFromJSON(json, fileContext),
          string = statement.getString(),
          consequent = new Consequent(string, statement);

    return consequent;
  }

  static fromConsequentNode(consequentNode, fileContext) {
    const { Statement } = dom,
          statement = Statement.fromConsequentNode(consequentNode, fileContext),
          statementString = statement.getString(),
          string = statementString, ///
          consequent = new Consequent(string, statement);

    return consequent;
  }
});
