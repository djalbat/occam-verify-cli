"use strict";

import ProofAssertion from "./proofAssertion";
import TemporaryContext from "../context/temporary";
import assignAssignments from "../process/assign";

import { define } from "../elements";
import { termsFromJSON,
         framesFromJSON,
         termsToTermsJSON,
         statementFromJSON,
         framesToFramesJSON,
         procedureCallFromJSON,
         statementToStatementJSON,
         procedureCallToProcedureCallJSON } from "../utilities/json";

export default define(class Premise extends ProofAssertion {
  constructor(context, string, node, statement, procedureCall) {
    super(context, string, node, statement);

    this.procedureCall = procedureCall;
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

    const statement = this.getStatement();

    if ((statement === null) && (this.procedureCall === null)) {
      context.debug(`Unable to verify the '${premiseString}' premise because it is nonsense.`, node);
    } else {
      if (statement !== null) {
        const stated = true,
              assignments = [],
              statementValidates = statement.validate(assignments, stated, context);

        if (statementValidates) {
          const assignmentsAssigned = assignAssignments(assignments, context);

          if (assignmentsAssigned) {
            const subproofOrProofAssertion = this;  ///

            context.addSubproofOrProofAssertion(subproofOrProofAssertion);

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
          premiseString = this.getString(); ///

    context.trace(`Unifying the '${premiseString}' premise independently...`, node);

    const generalContext = context; ///

    context = this.getContext();

    const specificContext = context;  ///

    context = specificContext;  ///

    const statement = this.getStatement();

    if (statement !== null) {
      const statementUnifiesIndependently = statement.unifyIndependently(substitutions, generalContext, specificContext);

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

  unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, context) {
    let subproofOrProofAssertionUnifies = false;

    const subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(),
          proofAssertion = subproofOrProofAssertionProofAssertion ?
                        subproofOrProofAssertion :
                          null,
          subproof = subproofOrProofAssertionProofAssertion ?
                        null :
                          subproofOrProofAssertion;

    substitutions.snapshot();

    if (subproof !== null) {
      const subproofUnifies = this.unifySubproof(subproof, substitutions, context);

      if (subproofUnifies) {
        subproofOrProofAssertionUnifies = true;
      }
    }

    if (proofAssertion !== null) {
      const proofAssertionUnifies = this.unifyProofAssertion(proofAssertion, substitutions, context);

      if (proofAssertionUnifies) {
        subproofOrProofAssertionUnifies = true;
      }
    }

    if (subproofOrProofAssertionUnifies) {
      substitutions.resolve(context);
    }

    subproofOrProofAssertionUnifies ?
      substitutions.continue() :
        substitutions.rollback(context);

    return subproofOrProofAssertionUnifies;
  }

  unifyProofAssertion(proofAssertion, substitutions, context) {
    let proofAssertionUnifies = false;

    const node = this.getNode(),
          premiseString = this.getString(),
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${premiseString}' premise...`, node);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const statement = proofAssertion.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      proofAssertionUnifies = true;
    }

    if (proofAssertionUnifies) {
      context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${premiseString}' premise.`, node);
    }

    return proofAssertionUnifies;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const node = this.getNode(),
          premiseString = this.getString(),
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${premiseString}' premise...`, node);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const statement = this.getStatement();

    if (statement !== null) {
      const statementNode = statement.getNode(),
            subproofAssertionNode = statementNode.getSubproofAssertionNode();

      if (subproofAssertionNode !== null) {
        const context = generalContext, ///
              assertionNode = subproofAssertionNode,  ///
              assertion = context.findAssertionByAssertionNode(assertionNode)

        if (assertion !== null) {
          const subproofAssertion = assertion;  ///

          subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
        }
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the '${premiseString}' premise.`, node);
    }

    return subproofUnifies;
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
