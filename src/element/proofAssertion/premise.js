"use strict";

import ProofAssertion from "../proofAssertion";

import { define } from "../../elements";
import { instantiatePremise } from "../../process/instantiate";
import { procedureCallFromPremiseNode } from "../../utilities/element";
import { join, declare, attempt, reconcile, serialise, unserialise, instantiate } from "../../utilities/context";

export default define(class Premise extends ProofAssertion {
  constructor(context, string, node, breakPoint, statement, procedureCall) {
    super(context, string, node, breakPoint, statement);

    this.procedureCall = procedureCall;
  }

  getProcedureCall() {
    return this.procedureCall;
  }

  getPremiseNode() {
    const node = this.getNode(),
          premiseNode = node; ///

    return premiseNode;
  }

  async verify(context) {
    let verifies = false;

    await this.break(context);

    const premiseString = this.getString();

    context.trace(`Verifying the '${premiseString}' premise...`);

    const statement = this.getStatement(),
          procedureCall = this.getProcedureCall();

    if ((statement !== null) || (procedureCall !== null)) {
      const validates = this.validate(context);

      if (validates) {
        verifies = true;
      }
    } else {
      context.debug(`Unable to validate the '${premiseString}' premise because it is nonsense.`);
    }

    return verifies;
  }

  validate(context) {
    let validates = false;

    const premiseString = this.getString(); ///

    context.trace(`Validatting the '${premiseString}' premise...`);

    declare((context) => {
      attempt((context) => {
        const statement = this.getStatement(),
              procedureCall = this.getProcedureCall();

        if (statement !== null) {
          const statementValidates = this.validateStatement(context);

          if (statementValidates) {
            validates = true;
          }
        }

        if (procedureCall !== null) {
          const procedureCallValidates = this.validateProcedureCall(context);

          if (procedureCallValidates) {
            validates = true;
          }
        }

        if (validates) {
          this.commit(context);
        }
      }, context);
    }, context);

    if (validates) {
      context.debug(`...validated the '${premiseString}' premise.`);
    }

    return validates;
  }

  validateStatement(context) {
    let statementValidates = false;

    const premiseString = this.getString();

    context.trace(`Validating the '${premiseString}' premise's statsement... `);

    let statement;

    statement = this.getStatement();

    statement = statement.validate(context);  ///

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${premiseString}' premise's statement. `);
    }

    return statementValidates;
  }

  validateProcedureCall(context) {
    let procedureCallValidates = false;

    const premiseString = this.getString(); ///

    context.trace(`Validatting the '${premiseString}' premise's procedure call...`);

    const procedureCall = this.procedureCall.validate(context);

    if (procedureCall !== null) {
      procedureCallValidates = true;
    }

    if (procedureCallValidates) {
      context.debug(`...validated the '${premiseString}' premise's procedure call.`);
    }

    return procedureCallValidates;
  }

  async unifyIndependently(context) {
    let unifiesIndependently = false;

    const premiseString = this.getString(); ///

    context.trace(`Unifying the '${premiseString}' premise independently...`);

    const statement = this.getStatement(),
          procedureCall = this.getProcedureCall();

    if (statement !== null) {
      const specificContext = context;  ///

      context = this.getContext();

      const generalContext = context; ///

      context = specificContext;  ///

      const statementUnifiesIndependently = statement.unifyIndependently(generalContext, specificContext);

      if (statementUnifiesIndependently) {
        unifiesIndependently = true;
      }
    }

    if (procedureCall !== null) {
      const procedureCallResolvedIndependently = await procedureCall.unifyIndependently(context);

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
    let proofAssertionUnifies = false;

    const premiseString = this.getString(), ///
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${premiseString}' premise...`);

    const proofAssertionContext = proofAssertion.getContext(),
          premiseContext = this.getContext(), ///
          generalContext = premiseContext, ///
          specificContext = proofAssertionContext;  ///

    join((specificContext) => {
      reconcile((specificContext) => {
        const statement = proofAssertion.getStatement(),
              statementUnifies = this.unifyStatement(statement, generalContext, specificContext);

        if (statementUnifies) {
          specificContext.commit(context);

          proofAssertionUnifies = true;
        }
      }, specificContext);
    }, specificContext, context);

    if (proofAssertionUnifies) {
      context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${premiseString}' premise.`);
    }

    return proofAssertionUnifies;
  }

  unifySubproof(subproof, context) {
    let subproofUnifies = false;

    const premiseString = this.getString(), ///
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${premiseString}' premise...`);

    const statement = this.getStatement();

    if (statement !== null) {
      const statementNode = statement.getNode(),
            subproofAssertionNode = statementNode.getSubproofAssertionNode();

      if (subproofAssertionNode !== null) {
        const specificContext = context;  ///

        context = this.getContext();

        const generalContext = context, ///
              subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);

        context = specificContext;  ///

        subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, specificContext);
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the '${premiseString}' premise.`);
    }

    return subproofUnifies;
  }

  toJSON() {
    const context = this.getContext();

    return serialise((context) => {
      const string = this.getString();

      let breakPoint;

      breakPoint = this.getBreakPoint();

      const breakPointJSON = breakPoint.toJSON();

      breakPoint = breakPointJSON;  ///

      const json = {
        context,
        string,
        breakPoint
      };

      return json;
    }, context);
  }

  static name = "Premise";

  static fromJSON(json, context) {
    let premise;

    unserialise((json, context) => {
      instantiate((context) => {
        const { string, breakPoint } = json,
              premiseNode = instantiatePremise(string, context),
              node = premiseNode,  ///
              statement = statementFromPremiseNode(premiseNode, context),
              procedureCall = procedureCallFromPremiseNode(premiseNode, context);

        premise = new Premise(context, string, node, breakPoint, statement, procedureCall);
      }, context);
    }, json, context);

    return premise;
  }
});

function statementFromPremiseNode(premiseNode, context) {
  const statementNode = premiseNode.getStatementNode(),
        statement = context.findStatementByStatementNode(statementNode);

  return statement;
}
