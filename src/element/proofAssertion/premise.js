"use strict";

import ProofAssertion from "../proofAssertion";
import assignAssignments from "../../process/assign";

import { define } from "../../elements";
import { attempt, liminally } from "../../utilities/context";
import { statementFromJSON, procedureCallFromJSON, statementToStatementJSON, procedureCallToProcedureCallJSON } from "../../utilities/json";

export default define(class Premise extends ProofAssertion {
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

    await this.break(context);

    const premiseString = this.getString(); ///

    context.trace(`Verifying the '${premiseString}' premise...`);

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
      context.debug(`Unable to verify the '${premiseString}' premise because it is nonsense.`);
    }

    if (verifies) {
      context.debug(`...verified the '${premiseString}' premise.`);
    }

    return verifies;
  }

  async unifyIndependently(context) {
    let unifiesIndependently = false;

    const premiseString = this.getString(); ///

    context.trace(`Unifying the '${premiseString}' premise independently...`);

    const statement = this.getStatement();

    if (statement !== null) {
      const statementUnifiesIndependently = statement.unifyIndependently(context);

      if (statementUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (this.procedureCall !== null) {
      const procedureCallResolvedIndependently = await this.procedureCall.unifyIndependently(context);

      if (procedureCallResolvedIndependently) {
        unifiesIndependently = true;
      }
    }

    if (unifiesIndependently) {
      context.debug(`...unified the '${premiseString}' premise independenly.`);
    }

    return unifiesIndependently;
  }

  unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
    let subproofOrProofAssertionUnifies;

    const premiseString = this.getString(), ///
          subproofOrProofAssertionString = subproofOrProofAssertion.getString();

    context.trace(`Unifying the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${premiseString}' premise...`);

    const subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(),
          proofAssertion = subproofOrProofAssertionProofAssertion ?
                             subproofOrProofAssertion :
                               null,
          subproof = subproofOrProofAssertionProofAssertion ?
                        null :
                          subproofOrProofAssertion;

    if (proofAssertion !== null) {
      const proofAssertionUnifies = this.unifyProofAssertion(proofAssertion, context);

      if (proofAssertionUnifies) {
        subproofOrProofAssertionUnifies = true;
      }
    }

    if (subproof !== null) {
      const subproofUnifies = this.unifySubproof(subproof, context);

      if (subproofUnifies) {
        subproofOrProofAssertionUnifies = true;
      }
    }

    if (subproofOrProofAssertionUnifies) {
      context.debug(`...unified the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${premiseString}' premise.`);
    }

    return subproofOrProofAssertionUnifies;
  }

  unifyProofAssertion(proofAssertion, context) {
    let proofAssertionUnifies;

    const premiseString = this.getString(), ///
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${premiseString}' premise...`);

    const proofAssertionContext = proofAssertion.getContext(),
          premiseContext = this.getContext(),
          generalContext = premiseContext, ///
          specificContext = proofAssertionContext; ///

    proofAssertionUnifies = liminally((specificContext) => {
      const statement = proofAssertion.getStatement(),
            statementUnifies = this.unifyStatement(statement, generalContext, specificContext);

      if (statementUnifies) {
        specificContext.commit(context);

        return true;
      }
    }, specificContext);

    if (proofAssertionUnifies) {
      context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${premiseString}' premise.`);
    }

    return proofAssertionUnifies;
  }

  unifySubproof(subproof, context) {
    let subproofUnifies = false;

    const premiseString = this.getString(),
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${premiseString}' premise...`);

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
      context.debug(`...unified the '${subproofString}' subproof with the '${premiseString}' premise.`);
    }

    return subproofUnifies;
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

  static name = "Premise";

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

    const premise = new Premise(context, string, node, statement, procedureCall);

    return premise;
  }
});
