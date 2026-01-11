"use strict";

import Element from "../element";
import elements from "../elements";
import TemporaryContext from "../context/temporary";
import assignAssignments from "../process/assign";

import { define } from "../elements";
import { termsFromJSON, framesFromJSON, statementFromJSON, procedureCallFromJSON, termsToTermsJSON, framesToFramesJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../utilities/json";

export default define(class Premise extends Element {
  constructor(context, string, node, statement, procedureCall) {
    super(context, string, node);

    this.statement = statement;
    this.procedureCall = procedureCall;
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

    const node = this.getNode(),
          premiseString = this.getString(); ///

    context.trace(`Verifying the '${premiseString}' premise...`, node);

    if ((this.statement === null) && (this.procedureCall === null)) {
      context.debug(`Unable to verify the '${premiseString}' premise because it is nonsense.`, node);
    } else {
      if (this.statement !== null) {
        const stated = true,
              assignments = [],
              statementValidates = this.statement.validate(assignments, stated, context);

        if (statementValidates) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          if (assignmentsAssigned) {
            const { Step } = elements,
                  step = Step.fromStatement(this.statement, context),
                  stepOrSubproof = step;  ///

            context.addStepOrSubproof(stepOrSubproof);

            verifies = true;
          }
        }
      }

      if (this.procedureCall !== null) {
        const stated = true,
              assignments = null,
              procedureCallVerifies = this.procedureCall.verify(assignments, stated, context);

        if (procedureCallVerifies) {
          verifies = true;
        }
      }
    }

    if (verifies) {
      this.setContext(context);

      context.debug(`...verified the '${premiseString}' premise.`, node);
    }

    return verifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently = false;

    const node = this.getNode(),
          premiseString = this.getString(),  ///
          generalContext = this.context,  ///
          specificContext = context;  ///

    context.trace(`Unifying the '${premiseString}' premise independently...`, node);

    if (this.statement !== null) {
      const statementUnifiesIndependently = this.statement.unifyIndependently(substitutions, generalContext, specificContext);

      if (statementUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (this.procedureCall !== null) {
      const procedureCallResolvedIndependently = this.procedureCall.unifyIndependently(substitutions, context);

      if (procedureCallResolvedIndependently) {
        unifiesIndependently = true;
      }
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${premiseString}' premise independenly.`, node);
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

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const premise = this, ///
          subproofString = subproof.getString(),
          premiseStatement = premise.getStatement(),
          premiseStatementString = premiseStatement.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    if (this.statement !== null) {
      const context = generalContext, ///
            subproofAssertion = subproofAssertionFromStatement(this.statement, context);

      if (subproofAssertion !== null) {
        subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the premise's '${premiseStatementString}' statement.`);
    }

    return subproofUnifies;
  }

  unifyStep(step, substitutions, context) {
    let stepUnifies = false;

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const statement = step.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      stepUnifies = true;
    }

    return stepUnifies;
  }

  toJSON() {
    let frames,
        terms;

    frames = this.context.getFrames();

    terms = this.context.getTerms();

    const procedureCallJSON = procedureCallToProcedureCallJSON(this.procedureCall),
          statementJSON = statementToStatementJSON(this.statement),
          framesJSON = framesToFramesJSON(frames),
          termsJSON = termsToTermsJSON(terms);

    frames = framesJSON;  ///

    terms = termsJSON;  ///

    const procedureCall = procedureCallJSON,  ///
          statement = statementJSON,  ///
          json = {
            procedureCall,
            statement,
            frames,
            terms
          };

    return json;
  }

  static name = "Premise";

  static fromJSON(json, context) {
    const terms = termsFromJSON(json, context),
          frames = framesFromJSON(json, context),
          statement = statementFromJSON(json, context),
          procedureCall = procedureCallFromJSON(json, context),
          temporaryContext = TemporaryContext.fromTermsAndFrames(terms, frames, context);

    let string;

    if (statement !== null) {
      string = statement.getString();
    }

    if (procedureCall !== null) {
      string = procedureCall.getString();
    }

    const node = null;

    context = temporaryContext; ///

    const premise = new Premise(context, string, node, statement, procedureCall);

    return premise;
  }
});
