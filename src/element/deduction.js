"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt, literally } from "../utilities/context";
import { instantiateDeduction } from "../process/instantiate";
import { statementToStatementJSON, ephemeralContextFromJSON } from "../utilities/json";

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

    const duductionString = this.getString();  ///

    context.trace(`Verifying the '${duductionString}' duduction...`);

    attempt((context) => {
      const validates = this.validate(context);

      if (validates) {
        this.setContext(context);

        verifies = true;
      }
    }, context);

    if (verifies) {
      context.debug(`...verified the '${duductionString}' duduction.`);
    }

    return verifies;
  }

  validate(context) {
    let validates = false;

    const duductionString = this.getString();  ///

    context.trace(`Validating the '${duductionString}' duduction...`);

    if (this.statement !== null) {
      const statementValidates = this.validateStatement(context);

      if (statementValidates) {
        validates = true;
      }
    } else {
      context.debug(`Unable to verify the '${duductionString}' duduction because it is nonsense.`);
    }

    if (validates) {
      context.debug(`...validated the '${duductionString}' duduction.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates;

    const statementString = this.statement.getString(),
          duductionnString = this.getString();  ///

    context.trace(`Validating the '${duductionnString}' duductionn's '${statementString}' statement...`);

    const stated = true,
          statement = this.statement.validate(stated, context);

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.trace(`...validated the '${duductionnString}' duductionn's '${statementString}' statement.`);
    }

    return statementValidates;
  }

  unifyStatement(statement, substitutions, context) {
    let statementUnifies;

    const statementString = statement.getString(),
          deductionString = this.getString();  ///

    context.trace(`Unifying the '${statementString}' statement with the '${deductionString}' deduction...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

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

  static name = "Deduction";

  static fromJSON(json, context) {
    const duduction = literally((context) => {
      const { string } = json,
            duductionNode = instantiateDeduction(string, context),
            node = duductionNode,  ///
            statement = statementFromJSON(json, context),
            ephemeralContext = ephemeralContextFromJSON(json, context);

      context = ephemeralContext; ///

      const duduction = new Deduction(context, string, node, statement);

      return duduction;
    }, context);

    return duduction;
  }
});
