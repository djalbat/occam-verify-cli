"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt } from "../utilities/context";
import { statementToStatementJSON } from "../utilities/json";

export  default define(class Conclusion extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getConclusionNode() {
    const node = this.getNode(),
          conclusionNode = node;  ///

    return conclusionNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const conclusionString = this.getString();  ///

    context.trace(`Verifying the '${conclusionString}' conclusion...`);

    if (this.statement !== null) {
      attempt((context) => {
        let statementValidates = false;

        const stated = true,
              statement = this.statement.validate(stated, context);

        if (statement !== null) {
          statementValidates = true;
        }

        if (statementValidates) {
          this.setContext(context);

          verifies = true;
        }
      }, context);
    } else {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${conclusionString}' conclusion.`);
    }

    return verifies;
  }

  unifyStatement(statement, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          conclusionString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement with the '${conclusionString}' conclusion...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${conclusionString}' conclusion.`);
    }

    return statementUnifies;
  }

  toJSON() {
    let context;

    context = this.getContext();

    const contextJSON = context.toJSON();

    context = contextJSON;  ///

    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          string = this.getString(),
          json = {
            context,
            string,
            statement
          };

    return json;
  }

  static name = "Conclusion";

  static fromJSON(json, context) {
    debugger
  }
});
