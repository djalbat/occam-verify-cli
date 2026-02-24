"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default define(class Hypothesis extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  getHypothesisNode() {
    const node = this.getNode(),
          hypothesisNode = node;  ///

    return hypothesisNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const hypothesisString = this.getString(); ///

    context.trace(`Verifying the '${hypothesisString}' hypothesis...`);

    if (false) {
      ///
    } else if (this.statement !== null) {
      let statementValidates = false;

      const stated = true,
            statement = this.statement.validate(stated, context);

      if (statement !== null) {
        statementValidates = true;
      }

      if (statementValidates) {
        const subproofOrProofAssertion = this;  ///

        context.assignAssignments();

        context.addSubproofOrProofAssertion(subproofOrProofAssertion);

        verifies = true;
      }
    } else {
      context.debug(`Unable to verify the '${hypothesisString}' hypothesis because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${hypothesisString}' hypothesis.`);
    }

    return verifies;
  }

  compareProofAssertion(proofAssertion, context) {
    let comparesToProofAssertion = false;

    const hypothesisString = this.getString(), ///
          proofAssertionString = proofAssertion.getString();

    context.trace(`Is the '${hypothesisString}' hypothesis equal to the '${proofAssertionString}' proof assertion...`);

    const proofAssertionStatement = proofAssertion.getStatement(),
          statementEqualToStepStatement = this.statement.isEqualTo(proofAssertionStatement);

    if (statementEqualToStepStatement) {
      comparesToProofAssertion = true;
    }

    if (comparesToProofAssertion) {
      context.trace(`...the '${hypothesisString}' hypothesis is equal to the '${proofAssertionString}' proof assertion.`);
    }

    return comparesToProofAssertion;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          statement = statementJSON,  ///
          json = {
            statement
          };

    return json;
  }

  static name = "Hypothesis";

  static fromJSON(json, context) {
    debugger
  }
});
