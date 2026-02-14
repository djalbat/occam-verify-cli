"use strict";

import ProofAssertion from "../proofAssertion";

import { define } from "../../elements";
import { attempt, liminally } from "../../utilities/context";
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

  validate(assignments, context) {
    let validates = false;

    const suppositionString = this.getString(); ///

    context.trace(`Validatting the '${suppositionString}' supposition...`);

    const statement = this.getStatement(),
          procedureCall = this.getProcedureCall();

    if (false) {
      ///
    } else if (statement !== null) {
      const statementValidates = this.validateStatement(assignments, context);

      if (statementValidates) {
        validates = true;
      }
    } else if (procedureCall !== null) {
      const procedureCallValidates = this.validateProcedureCall(assignments, context);

      if (procedureCallValidates) {
        validates = true;
      }
    } else {
      context.debug(`Unable to validate the '${suppositionString}' supposition because it is nonsense.`);
    }

    if (validates) {
      context.debug(`...validated the '${suppositionString}' supposition.`);
    }

    return validates;
  }

  validateProcedureCall(assignments, context) {
    let procedureCallValidates = false;

    const suppositionString = this.getString(), ///
          procedureCallString = this.procedureCall.getString();

    context.trace(`Validatting the '${suppositionString}' supposition's '${procedureCallString}' procedure call...`);

    procedureCallValidates = this.procedureCall.validate(context);

    if (procedureCallValidates) {
      context.debug(`...validated the '${suppositionString}' supposition's '${procedureCallString}' procedure call.`);
    }

    return procedureCallValidates;
  }

  unifySupposition(supposition, generalContext, specificContext) {
    let suppositionUnifies;

    const context = specificContext,  ///
      specificSupposition = supposition,  ///
      generalSuppositionString = this.getString(), ///
      specificSuppositionString = specificSupposition.getString();

    context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition...`);

    const statement = specificSupposition.getStatement(),
      statementUnifies = this.unifyStatement(statement, generalContext, specificContext);

    suppositionUnifies = statementUnifies;  ///

    if (suppositionUnifies) {
      context.debug(`...unified the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition.`);
    }

    return suppositionUnifies;
  }

  unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
    let subproofOrProofAssertionUnifies;

    const suppositionString = this.getString(), ///
          subproofOrProofAssertionString = subproofOrProofAssertion.getString();

    context.trace(`Unifying the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${suppositionString}' supposition...`);

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
      context.debug(`...unified the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${suppositionString}' supposition.`);
    }

    return subproofOrProofAssertionUnifies;
  }

  unifyProofAssertion(proofAssertion, context) {
    let proofAssertionUnifies;

    const suppositionString = this.getString(), ///
          proofAssertionString = proofAssertion.getString();

    context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`);

    const proofAssertionContext = proofAssertion.getContext(),
          suppositionContext = this.getContext(),
          generalContext = suppositionContext, ///
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
      context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition.`);
    }

    return proofAssertionUnifies;
  }

  unifySubproof(subproof, context) {
    let subproofUnifies = false;

    const suppositionString = this.getString(),
          subproofString = subproof.getString();

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

  async verify(assignments, context) {
    let verifies = false;

    await this.break(context);

    const suppositionString = this.getString(); ///

    context.trace(`Verifying the '${suppositionString}' supposition...`);

    attempt((context) => {
      const validates = this.validate(assignments, context);

      if (validates) {
        this.setContext(context);

        verifies = true;
      }
    }, context);

    if (verifies) {
      context.debug(`...verified the '${suppositionString}' supposition.`);
    }

    return verifies;
  }

  async unifyIndependently(context) {
    let unifiesIndependently = false;

    const suppositionString = this.getString(); ///

    context.trace(`Unifying the '${suppositionString}' supposition independently...`);

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
      context.debug(`...unified the '${suppositionString}' supposition independenly.`);
    }

    return unifiesIndependently;
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

