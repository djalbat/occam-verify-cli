"use strict";

import Element from "../element";
import assignAssignments from "../process/assign";

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

  verify(context) {
    let verifies = false;

    const hypothesisString = this.string; ///

    context.trace(`Verifying the '${hypothesisString}' hypothesis...`, this.node);

    if (false) {
      ///
    } else if (this.statement !== null) {
      const stated = true,
            assignments = [],
            statementValidates = this.statement.validate(assignments, stated, context);

      if (statementValidates) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const subproofOrProofAssertion = this;  ///

          context.addSubproofOrProofAssertion(subproofOrProofAssertion);

          verifies = true;
        }
      }
    } else {
      context.debug(`Unable to verify the '${hypothesisString}' hypothesis because it is nonsense.`, this.node);
    }

    if (verifies) {
      context.debug(`...verified the '${hypothesisString}' hypothesis.`, this.node);
    }

    return verifies;
  }

  compareProofAssertion(proofAssertion, context) {
    let comparesToProofAssertion = false;

    const node = this.getNode(),
          hypothesisString = this.getString(), ///
          proofAssertionString = proofAssertion.getString();

    context.trace(`Is the '${hypothesisString}' hypothesis equal to the '${proofAssertionString}' proof assertion...`, node);

    const proofAssertionStatement = proofAssertion.getStatement(),
          statementEqualToStepStatement = this.statement.isEqualTo(proofAssertionStatement);

    if (statementEqualToStepStatement) {
      comparesToProofAssertion = true;
    }

    if (comparesToProofAssertion) {
      context.trace(`...the '${hypothesisString}' hypothesis is equal to the '${proofAssertionString}' proof assertion.`, node);
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
    const statement = statementFromJSON(json, context);

    let string;

    if (statement !== null) {
      string = statement.getString();
    }

    const node = null,
          hypothesis = new Hypothesis(context, string, node, statement);

    return hypothesis;
  }
});
