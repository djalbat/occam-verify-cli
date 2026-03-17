"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, instantiate } from "../utilities/context";
import { instantiateDeduction } from "../process/instantiate";
import { ephemeralContextFromJSON, ephemeralContextToEphemeralContextJSON } from "../utilities/json";

export default define(class Deduction extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getDeductionNode() {
    const node = this.getNode(),
          deductionNode = node; ///

    return deductionNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const deductionString = this.getString();  ///

    context.trace(`Verifying the '${deductionString}' deduction...`);

    if (this.statement !== null) {
      const validates = this.validate(context);

      if (validates) {
        verifies = true;
      }
    } else {
      context.debug(`Unable to verify the '${deductionString}' deduction because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${deductionString}' deduction.`);
    }

    return verifies;
  }

  validate(context) {
    let validates = false;

    const deductionString = this.getString();  ///

    context.trace(`Validating the '${deductionString}' deduction...`);

    attempt((context) => {
      const statementValidates = this.validateStatement(context);

      if (statementValidates) {
        context.commit(this);

        validates = true;
      }
    }, context);

    if (validates) {
      context.debug(`...validated the '${deductionString}' deduction.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates;

    const statementString = this.statement.getString(),
          deductionnString = this.getString();  ///

    context.trace(`Validating the '${deductionnString}' deductionn's '${statementString}' statement...`);

    const stated = true,
          statement = this.statement.validate(stated, context);

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.trace(`...validated the '${deductionnString}' deductionn's '${statementString}' statement.`);
    }

    return statementValidates;
  }

  unifyStatement(statement, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          deductionString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement with the '${deductionString}' deduction...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${deductionString}' deduction.`);
    }

    return statementUnifies;
  }

  unifyDeduction(deduction, substitutions, generalContext, specificContext) {
    let deductionUnifies = false;

    const context = specificContext,  ///
          generalDeduction = this,  ///
          specificDeduction = deduction,  ///
          generalDeductionString = generalDeduction.getString(),
          specificDeductionString = specificDeduction.getString();

    context.trace(`Unifying the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction...`);

    const statement = specificDeduction.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      deductionUnifies = true;
    }

    if (deductionUnifies) {
      context.debug(`...unified the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction.`);
    }

    return deductionUnifies;
  }

  toJSON() {
    let context;

    context = this.getContext();

    const ephemeralContext = context, ///
          ephemeralContextJSON = ephemeralContextToEphemeralContextJSON(ephemeralContext),
          contextJSON = ephemeralContextJSON; ///

    context = contextJSON;  ///

    const string = this.getString(),
          json = {
            context,
            string
          };

    return json;
  }

  static name = "Deduction";

  static fromJSON(json, context) {
    const ephemeralContext = ephemeralContextFromJSON(json, context),
          sanitised = true;

    return instantiate((context) => {
      const { string } = json,
            deductionNode = instantiateDeduction(string, context);

      context = ephemeralContext; ///

      const node = deductionNode,  ///
            statement = statementFromDeductionNode(deductionNode, context),
            deduction = new Deduction(context, string, node, statement);

      return deduction;
    }, sanitised, context);
  }
});

function statementFromDeductionNode(deductionNode, context) {
  const statementNode = deductionNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
