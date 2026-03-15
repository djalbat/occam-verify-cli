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

  compareSignature(signature, context) {
    let comparesToSignature = false;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const signatureA = signature; ///

      signature = this.getSignature()

      const signatureB = signature, ///
            specificContext = context;  ///

      context = this.getContext();

      const generalContext = context;  ///

      comparesToSignature = signatureA.compare(signatureB, generalContext, specificContext);
    }

    return comparesToSignature;
  }

  async verify() {
    let verifies;

    const context = this.getContext();

    await this.break(context);

    const axiomString = this.getString(); ///

    context.trace(`Verifying the '${axiomString}' axiom...`);

    const signatureVerifies = this.verifySignature();

    if (signatureVerifies) {
      verifies = await super.verify();
    }

    if (verifies) {
      const axiom = this; ///

      context.addAxiom(axiom);

      context.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verifies;
  }

  verifySignature() {
    let signatureVerifies;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const context = this.getContext(),
            signature = this.getSignature();

      signatureVerifies = signature.verify(context);
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

  unifyTopLevelAssertion(topLevelAssertion, context) {
    let topLevelAssertionUnifies = false;

    const axiomString = this.getString(), ///
          topLevelAssertionString = topLevelAssertion.getString();

    context.trace(`Unifying the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom...`);

    const hypothesesCorrelate = topLevelAssertion.correlateHypotheses(context);

    if (hypothesesCorrelate) {
      const specificContext = context;  ///

      context = this.getContext();

      const generalContext = context; ///

      context = specificContext;  ///

      const deduction = topLevelAssertion.getDeduction(),
            deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);

      if (deductionUnifies) {
        const suppositions = topLevelAssertion.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);

        topLevelAssertionUnifies = suppositionsUnify; ///
      }
    }

    if (topLevelAssertionUnifies) {
      context.debug(`...unified the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom.`);
    }

    return topLevelAssertionUnifies;
  }

  static name = "Axiom";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Axiom, json, context); }
});
