"use strict";

import ontology from "../ontology";
import TemporaryContext from "../context/temporary";

import { define } from "../ontology";
import { assignAssignments } from "../utilities/assignments";
import { subproofAssertionFromStatement } from "../utilities/context";
import { termsFromJSON, statementFromJSON, procedureCallFromJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../utilities/json";

export default define(class Supposition {
  constructor(context, node, string, statement, procedureCall) {
    this.context = context;
    this.node = node;
    this.string = string;
    this.statement = statement;
    this.procedureCall = procedureCall;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
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

    const temporaryContext = TemporaryContext.fromNothing(context);

    context = temporaryContext; ///

    const suppositionString = this.string; ///

    context.trace(`Verifying the '${suppositionString}' supposition...`, this.node);

    if (false) {
      ///
    } else if (this.statement !== null) {
      const stated = true,
            assignments = [],
            statementVerifies = this.statement.verify(assignments, stated, context);

      if (statementVerifies) {
        const assignmentsAssigned = assignAssignments(assignments, context);

        if (assignmentsAssigned) {
          const { Step } = ontology,
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
      context.debug(`Unable to verify the '${suppositionString}' supposition because it is nonsense.`, this.node);
    }

    if (verifies) {
      this.context = context;

      context.debug(`...verified the '${suppositionString}' supposition.`, this.node);
    }

    return verifies;
  }

  unifySupposition(supposition, substitutions, generalContext, specificContext) {
    let suppositionUnifies;

    const context = specificContext,  ///
          specificSupposition = supposition,  ///
          generalSuppositionString = this.string, ///
          specificSuppositionString = specificSupposition.getString();

    context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition...`, this.node);

    const statement = specificSupposition.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    suppositionUnifies = statementUnifies;  ///

    if (suppositionUnifies) {
      context.debug(`...unified the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition.`, this.node);
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

  unifyStepOrSubproof(stepOrSubproof, substitutions, context) {
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
      const subproofUnifies = this.unifySubproof(subproof, substitutions, context);

      stepOrSubproofUnifies = subproofUnifies; ///
    }

    if (step !== null) {
      const statementUnifies = this.unifyStep(step, substitutions, context);

      stepOrSubproofUnifies = statementUnifies;  ///
    }

    if (stepOrSubproofUnifies) {
      substitutions.resolve(context);
    }

    stepOrSubproofUnifies ?
      substitutions.continue() :
        substitutions.rollback(context);

    return stepOrSubproofUnifies;
  }

  unifyStep(step, substitutions, context) {
    let stepUnifies;

    context = step.getContext();

    const statement = step.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, context);

    stepUnifies = statementUnifies;  ///

    return stepUnifies;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const supposition = this, ///
          subproofString = subproof.getString(),
          suppositionStatement = supposition.getStatement(),
          suppositionStatementString = suppositionStatement.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement...`);

    if (this.statement !== null) {
      const context = generalContext, ///
            subproofAssertion = subproofAssertionFromStatement(this.statement, context);

      if (subproofAssertion !== null) {
        const generalContext = this.context,  ///
              specificContext = context;  ///

        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the supposition's '${suppositionStatementString}' statement.`);
    }

    return subproofUnifies;
  }

  unifyStatement(statement, substitutions, context) {
    let statementUnifies;

    const supposition = this, ///
          statementString = statement.getString(),
          suppositionString = supposition.getString();

    context.trace(`Unifying the '${statementString}' statement with the '${suppositionString}' supposition...`);

    if (this.statement !== null) {
      const generalContext = this.context,  ///
            specificContext = context;  ///

      statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
    }

    if (statementUnifies) {
      context.debug(`...unified the '${statementString}' statement with the '${suppositionString}' supposition.`);
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

  static fromJSON(json, context) {
    const terms = termsFromJSON(json, context),
          statement = statementFromJSON(json, context),
          procedureCall = procedureCallFromJSON(json, context),
          temporaryContext = TemporaryContext.fromTerms(terms, context);

    let string;

    if (statement !== null) {
      string = statement.getString();
    }

    if (procedureCall !== null) {
      string = procedureCall.getString();
    }

    const node = null;

    context = temporaryContext; ///

    const supposition = new Supposition(context, node, string, statement, procedureCall);

    return supposition;
  }

  static fromSuppositionNode(suppositionNode, context) {
    const { Statement, ProcedureCall } = ontology,
          node = suppositionNode, ///
          string = context.nodeAsString(node),
          statement = Statement.fromSuppositionNode(suppositionNode, context),
          procedureCall = ProcedureCall.fromSuppositionNode(suppositionNode, context),
          temporaryContext = null;

    context = temporaryContext; ///

    const supposition = new Supposition(context, node, string, statement, procedureCall);

    return supposition
  }
});
