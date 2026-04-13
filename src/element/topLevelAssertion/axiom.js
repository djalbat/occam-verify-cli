"use strict";

import { arrayUtilities } from "necessary";

import TopLevelAssertion from "../topLevelAssertion";

import { define } from "../../elements";

const { backwardsEvery } = arrayUtilities;

export default define(class Axiom extends TopLevelAssertion {
  getAxiomNode() {
    const node = this.getNode(),
          axiomNode = node; ///

    return axiomNode;
  }

  isSatisfiable() {
    const signature = this.getSignature(),
          satisfiable = (signature !== null);

    return satisfiable;
  }

  async verify(context) {
    let verifies;

    await this.break(context);

    const axiomString = this.getString(); ///

    context.trace(`Verifying the '${axiomString}' axiom...`);

    const signatureVerifies = this.verifySignature(context);

    if (signatureVerifies) {
      verifies = await super.verify(context);
    }

    if (verifies) {
      const axiom = this; ///

      context.addAxiom(axiom);

      context.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verifies;
  }

  verifySignature(context) {
    let signatureVerifies;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const axiomString = this.getString(); ///

      context.trace(`Verifying the '${axiomString}' axiom's signature...`);

      const signature = this.getSignature();

      signatureVerifies = signature.verify(context);

      if (signatureVerifies) {
        context.trace(`...verified the '${axiomString}' axiom's signature.`);
      }
    } else {
      signatureVerifies = true
    }

    return signatureVerifies;
  }

  unifyStep(step, context) {
    let stepUnifies = false;

    context = step.getContext();

    const stepString = step.getString(),
          axiomString = this.getString();

    context.trace(`Unifying the '${stepString}' step with the '${axiomString}' axiom...`);

    const unconditional = this.isUnconditional();

    if (!unconditional) {
      context.trace(`Unable to unify the '${stepString}' step with the '${axiomString}' axiom because the axiom is not unconditional.`);
    } else {
      const statement = step.getStatement(),
            statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);

      if (statementUnifiesWithDeduction) {
        stepUnifies = true;
      }
    }

    if (stepUnifies) {
      context.debug(`...unified the '${stepString}' step with the '${axiomString}' axiom.`);
    }

    return stepUnifies;
  }

  unifySubproof(subproof, context) {
    let subproofUnifies = false;

    const axiomString = this.getString(), ///
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${axiomString}' axiom...`);

    const unconditional = this.isUnconditional();

    if (unconditional) {
      context.trace(`Unable to unify the '${subproofString}' subproof with the '${axiomString}' axiom because the axiom is unconditional.`);
    } else {
      const lastStep = subproof.getLastStep(),
            lastStepUnifies = this.unifyLastStep(lastStep, context);

      if (lastStepUnifies) {
        const suppositions = subproof.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, context);

        if (suppositionsUnify) {
          subproofUnifies = true;
        }
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the '${axiomString}' axiom.`);
    }

    return subproofUnifies;
  }

  unifyDeduction(deduction, generalContext, specificContext) {
    let deductionUnifies;

    const specificDeduction = deduction;  ///

    deduction = this.getDeduction();

    const generalDeduction = deduction; ///

    deduction = specificDeduction;  ///

    deductionUnifies = generalDeduction.unifyDeduction(deduction, generalContext, specificContext);

    return deductionUnifies;
  }

  unifySupposition(supposition, index, generalContext, specificContext) {
    let suppositionUnifies;

    const specificSupposition = supposition;  ///

    supposition = this.getSupposition(index);

    const generalSupposition = supposition; ///

    supposition = specificSupposition;  ///

    suppositionUnifies = generalSupposition.unifySupposition(supposition, generalContext, specificContext);

    return suppositionUnifies;
  }

  unifySuppositions(suppositions, generalContext, specificContext) {
    let suppositionsUnify = false;

    const specificSuppositions = suppositions;  ///

    suppositions = this.getSuppositions();

    const generalSuppositions = suppositions, ///
          generalSuppositionsLength = generalSuppositions.length,
          specificSuppositionsLength = specificSuppositions.length;

    if (generalSuppositionsLength === specificSuppositionsLength) {
      suppositions = specificSuppositions;  ///

      suppositionsUnify = backwardsEvery(suppositions, (supposition, index) => {
        const suppositionUnifies = this.unifySupposition(supposition, index, generalContext, specificContext);

        if (suppositionUnifies) {
          return true;
        }
      });
    }

    return suppositionsUnify;
  }

  unifyLastStep(lastStep, context) {
    let lastStepUnifies = false;

    const axiomString = this.getString(), ///
          lastStepString = lastStep.getString();

    context.trace(`Unifying the '${lastStepString}' last step with the '${axiomString}' axiom...`);

    const statement = lastStep.getStatement(),
          statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);

    if (statementUnifiesWithDeduction) {
      lastStepUnifies = true;
    }

    if (lastStepUnifies) {
      context.debug(`...unified the '${lastStepString}' last step with the '${axiomString}' axiom.`);
    }

    return lastStepUnifies;
  }

  unifySignature(signature, generalContext, specificContext) {
    let signatureUnifies;

    const context = specificContext,  ///
          axiomString = this.getString(), ///
          signatureString = signature.getString();

    context.trace(`Unifying the '${signatureString}' signature with the '${axiomString}' axiom...`);

    const specificSignature = signature;  ///

    signature = this.getSignature();

    const generalSignature = signature; ///

    signatureUnifies = generalSignature.unifySignature(specificSignature, generalContext, specificContext);

    if (signatureUnifies) {
      context.debug(`...unified the '${signatureString}' signature with the '${axiomString}' axiom.`);
    }

    return signatureUnifies;
  }

  static name = "Axiom";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Axiom, json, context); }
});
