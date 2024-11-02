"use strict";

import shim from "./shim";

import { statementFromJSON, statementToStatementJSON } from "./utilities/json";

class Conclusion {
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

    const conclusion = this,  ///
          statementString = statement.getString(),
          conclusionString = conclusion.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
    }

    return statementUnified;
  }

  verify(context) {
    let verified = false;

    const conclusionString = this.string;  ///

    if (this.statement !== null) {
      context.trace(`Verifying the '${conclusionString}' conclusion...`);

      const stated = true,
            assignments = [],
            statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        verified = true;
      }

      if (verified) {
        context.debug(`...verified the '${conclusionString}' conclusion.`);
      }
    } else {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
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
          conclusion = new Conclusion(string, statement);

    return conclusion;
  }

  static fromConclusionNode(conclusionNode, fileContext) {
    const { Statement } = shim,
          statement = Statement.fromConclusionNode(conclusionNode, fileContext),
          node = conclusionNode,  ///
          string = fileContext.nodeAsString(node),
          conclusion = new Conclusion(string, statement);

    return conclusion;
  }
}

Object.assign(shim, {
  Conclusion
});

export default Conclusion;
