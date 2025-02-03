"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";
import { subproofAssertionFromStatement } from "../utilities/context";
import { statementFromJSON, procedureCallFromJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../utilities/json";

export default domAssigned(class Premise {
  constructor(string, statement, procedureCall) {
    this.string = string;
    this.statement = statement;
    this.procedureCall = procedureCall;
  }

  getString() {
    return this.string;
  }

  getStatement() {
    return this.statement;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  verify(context) {
    let verified = false;

    const premiseString = this.string; ///

    context.trace(`Verifying the '${premiseString}' premise...`);

    if (false) {
      ///
    } else if (this.statement !== null) {
      const stated = true,
            assignments = [],
            statementVerified = this.statement.verify(assignments, stated, context);

      if (statementVerified) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const { Step } = dom,
                step = Step.fromStatement(this.statement, context),
                stepOrSubproof = step;  ///

          context.addStepOrSubproof(stepOrSubproof);

          verified = true;
        }
      }
    } else if (this.procedureCall !== null) {
      const stated = true,
            assignments = null,
            procedureCallVerified = this.procedureCall.verify(assignments, stated, context);

      if (procedureCallVerified) {
        verified = true;
      }
    } else {
      context.debug(`Unable to verify the '${premiseString}' premise because it is nonsense.`);
    }

    if (verified) {
      context.debug(`...verified the '${premiseString}' premise.`);
    }

    return verified;
  }

  unifyIndependently(substitutions, context) {
    let unifiedIndependently;

    if (this.statement !== null) {
      const statementResolvedIndependently = this.statement.unifyIndependently(substitutions, context);

      unifiedIndependently = statementResolvedIndependently;  ///
    }

    if (this.procedureCall !== null) {
      const procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);

      unifiedIndependently = procedureCallResolvedIndependently;  ///
    }

    return unifiedIndependently;
  }

  unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext) {
    let stepOrSubproofUnified = false;

    const stepOrSubProofStep = stepOrSubproof.isStep(),
          subproof = stepOrSubProofStep ?
                       null :
                         stepOrSubproof,
          step = stepOrSubProofStep ?
                        stepOrSubproof :
                          null;

    substitutions.snapshot();

    if (subproof !== null) {
      const subproofUnified = this.unifySubproof(subproof, substitutions, generalContext, specificContext);

      stepOrSubproofUnified = subproofUnified; ///
    }

    if (step !== null) {
      const statementUnified = this.unifyStep(step, substitutions, generalContext, specificContext);

      stepOrSubproofUnified = statementUnified;  ///
    }

    if (stepOrSubproofUnified) {
      substitutions.resolve(generalContext, specificContext);
    }

    stepOrSubproofUnified ?
      substitutions.continue() :
        substitutions.rollback(specificContext);

    return stepOrSubproofUnified;
  }

  unifyStep(step, substitutions, generalContext, specificContext) {
    let stepUnified;

    const statement = step.getStatement(),
          statementUnified = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    stepUnified = statementUnified;  ///

    return stepUnified;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnified = false;

    const premise = this, ///
          subproofString = subproof.getString(),
          premiseStatement = premise.getStatement(),
          premiseStatementString = premiseStatement.getString();

    specificContext.trace(`Unifying the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement...`);

    if (this.statement !== null) {
      const context = generalContext,
            subproofAssertion = subproofAssertionFromStatement(this.statement, context);

      if (subproofAssertion !== null) {
        subproofUnified = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
      }
    }

    if (subproofUnified) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement.`);
    }

    return subproofUnified;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnified;

    const premise = this, ///
          premiseString = premise.getString(),
          statementString = statement.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${premiseString}' premise...`);

    if (this.statement !== null) {
      statementUnified = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
    }

    if (statementUnified) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${premiseString}' premise.`);
    }

    return statementUnified;
  }

  toJSON() {
    const statementJSON = statementToStatementJSON(this.statement),
          procedureCallJSON = procedureCallToProcedureCallJSON(this.procedureCall),
          statement = statementJSON,  ///
          procedureCall = procedureCallJSON,  ///
          json = {
            statement,
            procedureCall
          };

    return json;
  }

  static name = "Premise";

  static fromJSON(json, fileContext) {
    const statement = statementFromJSON(json, fileContext),
          procedureCall = procedureCallFromJSON(json, fileContext);

    let string;

    if (statement !== null) {
      string = statement.getString();
    }

    if (procedureCall !== null) {
      string = procedureCall.getString();
    }

    const premise = new Premise(string, statement, procedureCall);

    return premise;
  }

  static fromPremiseNode(premiseNode, fileContext) {
    const { Statement, ProcedureCall } = dom,
          node = premiseNode,
          string = fileContext.nodeAsString(node),
          statement = Statement.fromPremiseNode(premiseNode, fileContext),
          procedureCall = ProcedureCall.fromPremiseNode(premiseNode, fileContext),
          premise = new Premise(string, statement, procedureCall);

    return premise
  }
});
