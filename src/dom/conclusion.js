"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export  default domAssigned(class Conclusion {
  constructor(node, string, statement) {
    this.node = node;
    this.string = string;
    this.statement = statement;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }

  getStatement() {
    return this.statement;
  }

  verify(context) {
    let verifies = false;

    const conclusionString = this.string;  ///

    context.trace(`Verifying the '${conclusionString}' conclusion...`, this.node);

    if (this.statement !== null) {
      const stated = true,
            assignments = null,
            statementVerifies = this.statement.verify(assignments, stated, context);

      verifies = statementVerifies; ///

    } else {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`, this.node);
    }

    if (verifies) {
      context.debug(`...verified the '${conclusionString}' conclusion.`, this.node);
    }

    return verifies;
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

  static fromJSON(json, context) {
    const statement = statementFromJSON(json, context),
          node = null,
          string = statement.getString(),
          conclusion = new Conclusion(node, string, statement);

    return conclusion;
  }

  static fromConclusionNode(conclusionNode, context) {
    const { Statement } = dom,
          node = conclusionNode,  ///
          string = context.nodeAsString(node),
          statement = Statement.fromConclusionNode(conclusionNode, context),
          conclusion = new Conclusion(node, string, statement);

    return conclusion;
  }
});
