"use strict";

import dom from "../dom";

import { domAssigned } from "../dom";
import { assignAssignments } from "../utilities/assignments";
import { subproofAssertionFromStatement } from "../utilities/context";
import { statementFromJSON, procedureCallFromJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../utilities/json";

export default domAssigned(class Supposition {
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
    let verifies = false;

    const suppositionString = this.string; ///

    context.trace(`Verifying the '${suppositionString}' supposition...`);

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
    } else if (this.procedureCall !== null) {
      const stated = true,
            assignments = null,
            procedureCallVerifies = this.procedureCall.verify(assignments, stated, context);

      if (procedureCallVerifies) {
        verifies = true;
      }
    } else {
      context.debug(`Unable to verify the '${suppositionString}' supposition because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${suppositionString}' supposition.`);
    }

    return verifies;
  }

  unifySupposition(supposition, substitutions, generalContext, specificContext) {
    let suppositionUnifies;

    const context = specificContext,  ///
          specificSupposition = supposition,  ///
          generalSuppositionString = this.string, ///
          specificSuppositionString = specificSupposition.getString();

    context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition...`);

    const statement = specificSupposition.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    suppositionUnifies = statementUnifies;  ///

    if (suppositionUnifies) {
      context.debug(`...unified the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition.`);
    }

    return suppositionUnifies;
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

    const supposition = this, ///
          subproofString = subproof.getString(),
          suppositionStatement = supposition.getStatement(),
          suppositionStatementString = suppositionStatement.getString();

    specificContext.trace(`Unifying the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement...`);

    if (this.statement !== null) {
      const context = generalContext, ///
            subproofAssertion = subproofAssertionFromStatement(this.statement, context);

      if (subproofAssertion !== null) {
        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
      }
    }

    if (subproofUnifies) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement.`);
    }

    return subproofUnifies;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies;

    const supposition = this, ///
          statementString = statement.getString(),
          suppositionString = supposition.getString();

    specificContext.trace(`Unifying the '${statementString}' statement with the '${suppositionString}' supposition...`);

    if (this.statement !== null) {
      statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
    }

    if (statementUnifies) {
      specificContext.debug(`...unified the '${statementString}' statement with the '${suppositionString}' supposition.`);
    }

    return statementUnifies;
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

  static name = "Supposition";

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

    const supposition = new Supposition(string, statement, procedureCall);

    return supposition;
  }

  static fromSuppositionNode(suppositionNode, fileContext) {
    const { Statement, ProcedureCall } = dom,
          node = suppositionNode, ///
          string = fileContext.nodeAsString(node),
          statement = Statement.fromSuppositionNode(suppositionNode, fileContext),
          procedureCall = ProcedureCall.fromSuppositionNode(suppositionNode, fileContext),
          supposition = new Supposition(string, statement, procedureCall);

    return supposition
  }
});
