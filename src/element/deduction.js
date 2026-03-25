"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateDeduction } from "../process/instantiate";
import { declare, attempt, descend, serialise, unserialise, instantiate } from "../utilities/context";

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

    declare((context) => {
      attempt((context) => {
        const statementValidates = this.validateStatement(context);

        if (statementValidates) {
          validates = true;
        }

        if (validates) {
          context.commit(this);
        }
      }, context);
    }, context);

    if (validates) {
      context.debug(`...validated the '${deductionString}' deduction.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const statementString = this.statement.getString(),
          deductionnString = this.getString();  ///

    context.trace(`Validating the '${deductionnString}' deductionn's '${statementString}' statement...`);

    descend((context) => {
      const statement = this.statement.validate(context);

      if (statement !== null) {
        statementValidates = true;
      }
    }, context);

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

  static name = "Deduction";

  static fromJSON(json, context) {
    let deduction;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string } = json,
              deductionNode = instantiateDeduction(string, context),
              node = deductionNode,  ///
              statement = statementFromDeductionNode(deductionNode, context);

        deduction = new Deduction(context, string, node, statement);
      }, context);
    }, json, context);

    return deduction;
  }
});

function statementFromDeductionNode(deductionNode, context) {
  const statementNode = deductionNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
