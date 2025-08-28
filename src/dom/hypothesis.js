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

  unifyHypothesis(hypothesis, substitutions, generalContext, specificContext) {
    let hypothesisUnifies;

    const context = specificContext,  ///
          specificHypothesis = hypothesis,  ///
          generalHypothesisString = this.string, ///
          specificHypothesisString = specificHypothesis.getString();

    context.trace(`Unifying the '${specificHypothesisString}' hypothesis with the '${generalHypothesisString}' hypothesis...`);

    const statement = specificHypothesis.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    hypothesisUnifies = statementUnifies;  ///

    if (hypothesisUnifies) {
      context.debug(`...unified the '${specificHypothesisString}' hypothesis with the '${generalHypothesisString}' hypothesis.`);
    }

    return hypothesisUnifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently;

    if (this.statement !== null) {
      const statementResolvedIndependently = this.statement.unifyIndependently(substitutions, context);

      unifiesIndependently = statementResolvedIndependently;  ///
    }

    if (this.procedureCall !== null) {
      const procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);

      unifiesIndependently = procedureCallResolvedIndependently;  ///
    }

    return unifiesIndependently;
  }

  unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext) {
    let stepOrSubproofUnifies = false;

    const stepOrSubProofStep = stepOrSubproof.isStep(),
          subproof = stepOrSubProofStep ?
                        null :
                          stepOrSubproof,
          step = stepOrSubProofStep ?
                   stepOrSubproof :
                     null;

    substitutions.snapshot();

    if (subproof !== null) {
      const subproofUnifies = this.unifySubproof(subproof, substitutions, generalContext, specificContext);

      stepOrSubproofUnifies = subproofUnifies; ///
    }

    if (step !== null) {
      const statementUnifies = this.unifyStep(step, substitutions, generalContext, specificContext);

      stepOrSubproofUnifies = statementUnifies;  ///
    }

    if (stepOrSubproofUnifies) {
      substitutions.resolve(generalContext, specificContext);
    }

    stepOrSubproofUnifies ?
      substitutions.continue() :
        substitutions.rollback(specificContext);

    return stepOrSubproofUnifies;
  }

  unifyStep(step, substitutions, generalContext, specificContext) {
    let stepUnifies;

    const statement = step.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    stepUnifies = statementUnifies;  ///

    return stepUnifies;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnifies = false;

    const hypothesis = this, ///
          subproofString = subproof.getString(),
          hypothesisStatement = hypothesis.getStatement(),
          hypothesisStatementString = hypothesisStatement.getString();

    specificContext.trace(`Unifying the '${subproofString}' subproof with the hypothesis's '${hypothesisStatementString}' statement...`);

    if (this.statement !== null) {
      const context = generalContext, ///
            subproofAssertion = subproofAssertionFromStatement(this.statement, context);

      if (subproofAssertion !== null) {
        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
      }
    }

    if (subproofUnifies) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the hypothesis's '${hypothesisStatementString}' statement.`);
    }

    return subproofUnifies;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const hypothesis = this, ///
          statementString = statement.getString(),
          hypothesisString = hypothesis.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${hypothesisString}' hypothesis...`);

    if (this.statement !== null) {
      statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
    }

    if (statementUnifies) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${hypothesisString}' hypothesis.`);
    }

    return statementUnifies;
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
