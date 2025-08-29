"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";
import { subproofAssertionFromStatement } from "../utilities/context";
import { statementFromJSON, statementToStatementJSON } from "../utilities/json";

export default domAssigned(class Hypothesis {
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
    let verifies = false;

    const hypothesisString = this.string; ///

    context.trace(`Verifying the '${hypothesisString}' hypothesis...`);

    if (false) {
      ///
    } else if (this.statement !== null) {
      const stated = true,
            assignments = [],
            statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const { Step } = dom,
                step = Step.fromStatement(this.statement, context),
                stepOrSubproof = step;  ///

          context.addStepOrSubproof(stepOrSubproof);

          verifies = true;
        }
      }
    } else {
      context.debug(`Unable to verify the '${hypothesisString}' hypothesis because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${hypothesisString}' hypothesis.`);
    }

    return verifies;
  }

  isEqualToStep(step, context) {
    let equalToStep = false;

    const stepString = step.getString(),
          hypothesisString = this.string; ///

    context.trace(`Is the '${hypothesisString}' hypothesis equal to the '${stepString}' step...`);

    const stepStatement = step.getStatement(),
          statementEqualToStepStatement = this.statement.isEqualTo(stepStatement);

    if (statementEqualToStepStatement) {
      equalToStep = true;
    }

    if (equalToStep) {
      context.trace(`...the '${hypothesisString}' hypothesis is equal to the '${stepString}' step.`);
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

    const hypothesis = new Hypothesis(string, statement);

    return hypothesis;
  }

  static fromHypothesisNode(hypothesisNode, context) {
    const { Statement } = dom,
          node = hypothesisNode, ///
          string = context.nodeAsString(node),
          statement = Statement.fromHypothesisNode(hypothesisNode, context),
          hypothesis = new Hypothesis(string, statement);

    return hypothesis
  }
});
