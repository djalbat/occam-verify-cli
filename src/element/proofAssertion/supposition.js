"use strict";

import ProofAssertion from "../proofAssertion";
import EphemeralContext from "../../context/ephemeral";
import assignAssignments from "../../process/assign";

import { define } from "../../elements";
import { synthetically } from "../../utilities/context";
import { termsFromJSON,
         framesFromJSON,
         termsToTermsJSON,
         statementFromJSON,
         framesToFramesJSON,
         procedureCallFromJSON,
         statementToStatementJSON,
         procedureCallToProcedureCallJSON } from "../../utilities/json";

export default define(class Supposition extends ProofAssertion {
  constructor(context, string, node, statement, procedureCall) {
    super(context, string, node, statement);

    this.procedureCall = procedureCall;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  verify(context) {
    let verifies = false;

    const ephemeralContext = EphemeralContext.fromNothing(context);

    context = ephemeralContext; ///

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
        const procedureCallValidates = this.procedureCall.validate(context);

        if (procedureCallValidates) {
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

    const suppositionString = this.getString();

    context.trace(`Unifying the '${suppositionString}' supposition independently...`);

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
      context.debug(`...unified the '${suppositionString}' supposition independenly.`);
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
    let proofAssertionUnifies = false;

    const suppositionString = this.getString(),
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    const proofAssertionContext = proofAssertion.getContext(),
          statementUnifies = synthetically((specificContext) => {
            const statement = proofAssertion.getStatement(),
                  statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);

            return statementUnifies;
          }, specificContext, proofAssertionContext);

    if (statementUnifies) {
      proofAssertionUnifies = true;
    }

    if (proofAssertionUnifies) {
      context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition.`);
    }

    return proofAssertionUnifies;
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
          ephemeralContext = EphemeralContext.fromTermsAndFrames(terms, frames, context);

    let string;

    if (statement !== null) {
      string = statement.getString();
    }

    if (procedureCall !== null) {
      string = procedureCall.getString();
    }

    const node = null;

    context = ephemeralContext; ///

    const supposition = new Supposition(context, string, node, statement, procedureCall);

    return supposition;
  }
});
