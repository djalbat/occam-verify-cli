"use strict";

import elements from "../elements";
import TemporaryContext from "../context/temporary";

import { define } from "../elements";
import { termsFromJSON, framesFromJSON, statementFromJSON, termsToTermsJSON, framesToFramesJSON, statementToStatementJSON } from "../utilities/json";

export default define(class Deduction {
  constructor(context, string, statement) {
    this.context = context;
    this.string = string;
    this.node = node;
    this.string = string;
    this.statement = statement;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getStatement() {
    return this.statement;
  }

  verify(context) {
    let verifies = false;

    const temporaryContext = TemporaryContext.fromNothing(context);

    context = temporaryContext; ///

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
      this.context = context;

      context.debug(`...verified the '${deductionString}' deduction.`, this.node);
    }

    return verifies;
  }

  unifyStatement(statement, substitutions, context) {
    let statementUnifies;

    const deduction = this,  ///
          statementString = statement.getString(),
          deductionString = deduction.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${deductionString}' deduction...`);

    const generalContext = this.context,  ///
          specificContext = context;  ///

    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${deductionString}' deduction.`);
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
    const terms = termsFromJSON(json, context),
          frames = framesFromJSON(json, context),
          statement = statementFromJSON(json, context),
          node = null,
          string = statement.getString(),
          temporaryContext = TemporaryContext.fromTermsAndFrames(terms, frames, context);

    context = temporaryContext; ///

    const deduction = new Deduction(context, string, statement);

    return deduction;
  }
});
