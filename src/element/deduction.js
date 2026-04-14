"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { instantiateDeduction } from "../process/instantiate";
import { join, declare, attempt, descend, reconcile, serialise, unserialise, instantiate } from "../utilities/context";

export default define(class Deduction extends Element {
  constructor(context, string, node, lineIndex, statement) {
    super(context, string, node, lineIndex);

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
          this.commit(context);
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

    const deductionnString = this.getString();  ///

    context.trace(`Validating the '${deductionnString}' deductionn's statement...`);

    descend((context) => {
      const statement = this.statement.validate(context);

      if (statement !== null) {
        statementValidates = true;
      }
    }, context);

    if (statementValidates) {
      context.trace(`...validated the '${deductionnString}' deductionn's statement.`);
    }

    return statementValidates;
  }

  unifyStep(step, context) {
    let stepUnifies = false;

    const stepString = step.getString(),
          deductionString = this.getString();  ///

    context.trace(`Unifying the '${stepString}' step with the '${deductionString}' deduction...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context;  ///

    context = specificContext;  ///

    const statement = step.getStatement(),
          statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);

    if (statementUnifies) {
      stepUnifies = true;
    }

    if (stepUnifies) {
      context.debug(`...unified the '${stepString}' step with the '${deductionString}' deduction.`);
    }

    return stepUnifies;
  }

  unifyDeduction(deduction, context) {
    let deductionUnifies = false;

    const generalDeduction = this,  ///
          specificDeduction = deduction,  ///
          generalDeductionString = generalDeduction.getString(),
          specificDeductionString = specificDeduction.getString();

    context.trace(`Unifying the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction...`);

    const specificDeductionContext = specificDeduction.getContext(),
          generalDeductionContext = generalDeduction.getContext(),
          specificContext = specificDeductionContext,  ///
          generalContext = generalDeductionContext; ///

    join((specificContext) => {
      reconcile((specificContext) => {
        const statement = specificDeduction.getStatement(),
              statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);

        if (statementUnifies) {
          specificContext.commit();

          deductionUnifies = true;
        }
      }, specificContext);
    }, specificContext, context);

    if (deductionUnifies) {
      context.debug(`...unified the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction.`);
    }

    return deductionUnifies;
  }

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString(),
            lineIndex = this.getLineIndex(),
            json = {
              context,
              string,
              lineIndex
            };

      return json;
    }, context);
  }

  static name = "Deduction";

  static fromJSON(json, context) {
    let deduction;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string, lineIndex } = json,
              deductionNode = instantiateDeduction(string, context),
              node = deductionNode,  ///
              statement = statementFromDeductionNode(deductionNode, context);

        deduction = new Deduction(context, string, node, lineIndex, statement);
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
