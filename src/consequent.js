"use strict";

import shim from "./shim";

import { statementFromJSON, statementToStatementJSON } from "./utilities/json";

class Consequent {
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

    if (this.statement !== null) {
      context.trace(`Verifying the '${consequentString}' consequent...`);

      const stated = true,
            assignments = [],
            statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        verified = true;
      }

      if (verified) {
        context.debug(`...verified the '${consequentString}' consequent.`);
      }
    } else {
      context.debug(`Unable to verify the '${consequentString}' consequent because it is nonsense.`);
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

  static fromJSON(json, fileContext) {
    const statement = statementFromJSON(json, fileContext),
          string = statement.getString(),
          consequent = new Consequent(string, statement);

    return consequent;
  }

  static fromConsequentNode(consequentNode, fileContext) {
    const { Statement } = shim,
          statement = Statement.fromConsequentNode(consequentNode, fileContext),
          node = consequentNode,  ///
          string = fileContext.nodeAsString(node),
          consequent = new Consequent(string, statement);

    return consequent;
  }
}

Object.assign(shim, {
  Consequent
});

export default Consequent;
