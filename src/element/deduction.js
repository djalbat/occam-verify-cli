"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { attempt } from "../utilities/context";
import { statementFromJSON, termsToTermsJSON, framesToFramesJSON, statementToStatementJSON } from "../utilities/json";

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
      attempt((context) => {
        const stated = true,
              assignments = null,
              statementValidates = this.statement.validate(assignments, stated, context);

        if (statementValidates) {
          this.setContext(context);

          verifies = true;
        }
      }, context);
    } else {
      context.debug(`Unable to verify the '${deductionString}' deduction because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${deductionString}' deduction.`);
    }

    return verifies;
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
    let frames,
        terms;

    frames = this.context.getFrames();

    terms = this.context.getTerms();

    const statementJSON = statementToStatementJSON(this.statement),
          framesJSON = framesToFramesJSON(frames),
          termsJSON = termsToTermsJSON(terms);

    frames = framesJSON;  ///

    terms = termsJSON;  ///

    const statement = statementJSON,  ///
          json = {
            statement,
            frames,
            terms
          };

    return json;
  }

  static name = "Deduction";

  static fromJSON(json, context) {
    const statement = statementFromJSON(json, context),
          string = statement.getString();

    const deduction = new Deduction(context, string, statement);

    return deduction;
  }
});
