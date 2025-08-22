"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default domAssigned(class Deduction {
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

    const deductionString = this.string;  ///

    context.trace(`Verifying the '${deductionString}' deduction...`);

    if (this.statement !== null) {
      const stated = true,
            assignments = null,
            statementVerified = this.statement.verify(assignments, stated, context);

      verified = statementVerified; ///
    } else {
      context.debug(`Unable to verify the '${deductionString}' deduction because it is nonsense.`);
    }

    if (verified) {
      context.debug(`...verified the '${deductionString}' deduction.`);
    }

    return verified;
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

    context.trace(`Unifying the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction...`);

    const statement = specificDeduction.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    deductionUnifies = statementUnifies;  ///

    if (deductionUnifies) {
      context.debug(`...unified the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction.`);
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

  static fromJSON(json, fileContext) {
    const statement = statementFromJSON(json, fileContext),
          string = statement.getString(),
          deduction = new Deduction(string, statement);

    return deduction;
  }

  static fromDeductionNode(deductionNode, fileContext) {
    const { Statement } = dom,
          node = deductionNode,  ///
          string = fileContext.nodeAsString(node),
          statement = Statement.fromDeductionNode(deductionNode, fileContext),
          deduction = new Deduction(string, statement);

    return deduction;
  }
});
