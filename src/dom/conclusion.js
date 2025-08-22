"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export  default domAssigned(class Conclusion {
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

  verify(context) {
    let verified = false;

    const conclusionString = this.string;  ///

    context.trace(`Verifying the '${conclusionString}' conclusion...`);

    if (this.statement !== null) {
      const stated = true,
            assignments = null,
            statementVerified = this.statement.verify(assignments, stated, context);

      verified = statementVerified; ///

    } else {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
    }

    if (verified) {
      context.debug(`...verified the '${conclusionString}' conclusion.`);
    }

    return verified;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const conclusion = this,  ///
          statementString = statement.getString(),
          conclusionString = conclusion.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
    }

    return statementUnifies;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static name = "Conclusion";

  static fromJSON(json, fileContext) {
    const statement = statementFromJSON(json, fileContext),
          string = statement.getString(),
          conclusion = new Conclusion(string, statement);

    return conclusion;
  }

  static fromConclusionNode(conclusionNode, fileContext) {
    const { Statement } = dom,
          node = conclusionNode,  ///
          string = fileContext.nodeAsString(node),
          statement = Statement.fromConclusionNode(conclusionNode, fileContext),
          conclusion = new Conclusion(string, statement);

    return conclusion;
  }
});
