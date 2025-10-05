"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default domAssigned(class Deduction {
  constructor(node, string, statement) {
    this.node = node;
    this.string = string;
    this.statement = statement;
  }

  getNode(node) {
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

    const deductionString = this.string;  ///

    context.trace(`Verifying the '${deductionString}' deduction...`, this.node);

    if (this.statement !== null) {
      const stated = true,
            assignments = null,
            statementVerifies = this.statement.verify(assignments, stated, context);

      verifies = statementVerifies; ///
    } else {
      context.debug(`Unable to verify the '${deductionString}' deduction because it is nonsense.`, this.node);
    }

    if (verifies) {
      context.debug(`...verified the '${deductionString}' deduction.`, this.node);
    }

    return verifies;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const deduction = this,  ///
          statementString = statement.getString(),
          deductionString = deduction.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${deductionString}' deduction...`);

    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${deductionString}' deduction.`);
    }

    return statementUnifies;
  }

  unifyDeduction(deduction, substitutions, generalContext, specificContext) {
    let deductionUnifies;

    const context = specificContext,  ///
          specificDeduction = deduction,  ///
          generalDeductionString = this.string, ///
          specificDeductionString = specificDeduction.getString();

    context.trace(`Unifying the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction...`, this.node);

    const statement = specificDeduction.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    deductionUnifies = statementUnifies;  ///

    if (deductionUnifies) {
      context.debug(`...unified the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction.`, this.node);
    }

    return deductionUnifies;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static name = "Deduction";

  static fromJSON(json, context) {
    const statement = statementFromJSON(json, context),
          node = null,
          string = statement.getString(),
          deduction = new Deduction(node, string, statement);

    return deduction;
  }

  static fromDeductionNode(deductionNode, context) {
    const { Statement } = dom,
          node = deductionNode,  ///
          string = context.nodeAsString(node),
          statement = Statement.fromDeductionNode(deductionNode, context),
          deduction = new Deduction(node, string, statement);

    return deduction;
  }
});
