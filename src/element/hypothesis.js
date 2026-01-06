"use strict";

import elements from "../elements";
import assignAssignments from "../process/assign";

import { define } from "../elements";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default define(class Hypothesis {
  constructor(context, string, node, statement) {
    this.context = context;
    this.string = string;
    this.node = node;
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

    const hypothesisString = this.string; ///

    context.trace(`Verifying the '${hypothesisString}' hypothesis...`, this.node);

    if (false) {
      ///
    } else if (this.statement !== null) {
      const stated = true,
            assignments = [],
            statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const { Step } = elements,
                step = Step.fromStatement(this.statement, context),
                stepOrSubproof = step;  ///

          context.addStepOrSubproof(stepOrSubproof);

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

  isEqualToStep(step, context) {
    let equalToStep = false;

    const stepString = step.getString(),
          hypothesisString = this.string; ///

    context.trace(`Is the '${hypothesisString}' hypothesis equal to the '${stepString}' step...`, this.node);

    const stepStatement = step.getStatement(),
          statementEqualToStepStatement = this.statement.isEqualTo(stepStatement);

    if (statementEqualToStepStatement) {
      equalToStep = true;
    }

    if (equalToStep) {
      context.trace(`...the '${hypothesisString}' hypothesis is equal to the '${stepString}' step.`, this.node);
    }

    return equalToStep;
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
          hypothesis = new Hypothesis(string, node, statement);

    return hypothesis;
  }
});
