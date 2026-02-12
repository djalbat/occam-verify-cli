"use strict";

import ProofAssertion from "../proofAssertion";
import assignAssignments from "../../process/assign";

import { define } from "../../elements";
import { attempt } from "../../utilities/context";
import { statementFromJSON, procedureCallFromJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../../utilities/json";

export default define(class Supposition extends ProofAssertion {
  constructor(context, string, node, statement, procedureCall) {
    super(context, string, node, statement);

    this.procedureCall = procedureCall;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  isStated() {
    const stated = true; ///

    return stated;
  }

  async verify(context) {
    let verifies = false;

    this.break(context);

    const suppositionString = this.getString(); ///

    context.trace(`Verifying the '${suppositionString}' supposition...`);

    const statement = this.getStatement(),
          procedureCall = this.getProcedureCall();

    if ((statement !== null) || (procedureCall !== null)) {
      attempt((context) => {
        if (statement !== null) {
          const assignments = [],
                statementValidates = this.validateStatement(assignments, context);

          if (statementValidates) {
            const assignmentsAssigned = assignAssignments(assignments, context);

            if (assignmentsAssigned) {
              const subproofOrProofAssertion = this;  ///

              context.addSubproofOrProofAssertion(subproofOrProofAssertion);

              this.setContext(context);

              verifies = true;
            }
          }
        }

        if (procedureCall !== null) {
          const procedureCallValidates = procedureCall.validate(context);

          if (procedureCallValidates) {
            this.setContext(context);

            verifies = true;
          }
        }
      }, context);
    } else {
      context.debug(`Unable to verify the '${suppositionString}' supposition because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${suppositionString}' supposition.`);
    }

    return verifies;
  }

  unifyIndependently(substitutions, context) {
    let unifiesIndependently = false;

    const suppositionString = this.getString(); ///

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

    substitutions.snapshot(context);

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
      substitutions.continue(context) :
        substitutions.rollback(context);

    return subproofOrProofAssertionUnifies;
  }

  unifyProofAssertion(proofAssertion, substitutions, context) {
    let proofAssertionUnifies = false;

    const suppositionString = this.getString(), ///
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`);

    const specificContext = context;  ///

    context = this.getContext();

    const generalContext = context; ///

    context = specificContext;  ///

    debugger

    // const proofAssertionContext = proofAssertion.getContext(),
    //       statementUnifies = synthetically((specificContext) => {
    //         const statement = proofAssertion.getStatement(),
    //               statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
    //
    //         return statementUnifies;
    //       }, specificContext, proofAssertionContext);

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

    const subproofString = subproof.getString(),
          suppositionString = this.getString(); ///

    context.trace(`Unifying the '${subproofString}' subproof with the '${suppositionString}' supposition...`);

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
      context.debug(`...unified the '${subproofString}' subproof with the '${suppositionString}' supposition.`);
    }

    return subproofUnifies;
  }

  unifySupposition(supposition, substitutions, generalContext, specificContext) {
    let suppositionUnifies;

    const context = specificContext,  ///
          specificSupposition = supposition,  ///
          generalSuppositionString = this.getString(), ///
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

  toJSON() {
    const procedureCallJSON = procedureCallToProcedureCallJSON(this.procedureCall),
          statementJSON = statementToStatementJSON(this.statement),
          procedureCall = procedureCallJSON,  ///
          statement = statementJSON,  ///
          json = {
            statement,
            procedureCall
          };

    return json;
  }

  static name = "Supposition";

  static fromJSON(json, context) {
    const statement = statementFromJSON(json, context),
          procedureCall = procedureCallFromJSON(json, context);

    let string;

    if (statement !== null) {
      string = statement.getString();
    }

    if (procedureCall !== null) {
      string = procedureCall.getString();
    }

    const node = null;

    const supposition = new Supposition(context, string, node, statement, procedureCall);

    return supposition;
  }
});
