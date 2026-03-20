"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateConclusion } from "../process/instantiate";
import { attempt, descend, serialise, unserialise, instantiate } from "../utilities/context";

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
      const validates = this.validate(context);

      if (validates) {
        verifies = true;
      }
    } else {
      context.debug(`Unable to verify the '${conclusionString}' conclusion because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${conclusionString}' conclusion.`);
    }

    return verifies;
  }

  validate(context) {
    let validates = false;

    const conclusionString = this.getString();  ///

    context.trace(`Validating the '${conclusionString}' conclusion...`);

    attempt((context) => {
      const statementValidates = this.validateStatement(context);

      if (statementValidates) {
        context.commit(this);

        validates = true;
      }
    }, context);

    if (validates) {
      context.debug(`...validated the '${conclusionString}' conclusion.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const statementString = this.statement.getString(),
          conclusionString = this.getString();  ///

    context.trace(`Validating the '${conclusionString}' conclusion's '${statementString}' statement...`);

    descend((stated, context) => {
      const statement = this.statement.validate(stated, context);

      if (statement !== null) {
        statementValidates = true;
      }
    }, context);

    if (statementValidates) {
      context.trace(`...validated the '${conclusionString}' conclusion's '${statementString}' statement.`);
    }

    return statementValidates;
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
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString(),
            json = {
              context,
              string
            };

      return json;
    }, context);
  }

  static name = "Conclusion";

  static fromJSON(json, context) {
    let conclusion;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string } = json,
              conclusionNode = instantiateConclusion(string, context),
              node = conclusionNode,  ///
              statement = statementFromConclusionNode(conclusionNode, context);

        conclusion = new Conclusion(context, string, node, statement);
      }, context);
    }, json, context);

    return conclusion;
  }
});

function statementFromConclusionNode(conclusionNode, context) {
  const statementNode = conclusionNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
