"use strict";

import ProofAssertion from "../proofAssertion";
import TemporaryContext from "../../context/temporary";
import assignAssignments from "../../process/assign";

import { define } from "../../elements";
import { termsFromJSON, framesFromJSON, statementFromJSON, procedureCallFromJSON, termsToTermsJSON, framesToFramesJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../../utilities/json";

export default define(class Supposition extends ProofAssertion {
  constructor(context, string, node, statement, procedureCall) {
    super(context, string, node);

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
          suppositionString = this.getString(); ///

    context.trace(`Verifying the '${suppositionString}' supposition...`, node);

    const statement = this.getStatement();

    if ((statement === null) && (this.procedureCall === null)) {
      context.debug(`Unable to verify the '${suppositionString}' supposition because it is nonsense.`, node);
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

      context.debug(`...verified the '${suppositionString}' supposition.`, node);
    }

    return verifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently = false;

    const node = this.getNode(),
          suppositionString = this.getString();

    context.trace(`Unifying the '${suppositionString}' supposition independently...`, node);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

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
      context.debug(`...unified the '${suppositionString}' supposition independenly.`, node);
    }

    return unifiesIndependently;
  }

  unifySubproofOrProosAssertion(subproofOrProofAssertion, substitutions, context) {
    let subproofOrProofAssertionUnifies = false;

    const subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(),
          subproof = subproofOrProofAssertionProofAssertion ?
                        null :
                          subproofOrProofAssertion,
          proofAssertion = subproofOrProofAssertionProofAssertion ?
                             subproofOrProofAssertion :
                               null;

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
    let stepUnifies = false;

    const node = this.getNode(),
          suppositionString = this.getString(),
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`, node);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const statement = proofAssertion.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    if (statementUnifies) {
      stepUnifies = true;
    }

    if (stepUnifies) {
      context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition.`, node);
    }

    return stepUnifies;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const node = this.getNode(),
          subproofString = subproof.getString(),
          suppositionString = this.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${suppositionString}' supposition...`, node);

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
      context.debug(`...unified the '${subproofString}' subproof with the '${suppositionString}' supposition.`, node);
    }

    return subproofUnifies;
  }

  unifySupposition(supposition, substitutions, generalContext, specificContext) {
    let suppositionUnifies;

    const node = this.getNode(),
          context = specificContext,  ///
          specificSupposition = supposition,  ///
          generalSuppositionString = this.getString(), ///
          specificSuppositionString = specificSupposition.getString();

    context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition...`, node);

    const statement = specificSupposition.getStatement(),
          statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

    suppositionUnifies = statementUnifies;  ///

    if (suppositionUnifies) {
      context.debug(`...unified the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition.`, node);
    }

    return suppositionUnifies;
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

  static name = "Supposition";

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

    const supposition = new Supposition(context, string, node, statement, procedureCall);

    return supposition;
  }
});
