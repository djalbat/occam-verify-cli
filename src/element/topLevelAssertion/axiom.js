"use strict";

import TopLevelAssertion  from "../../node/topLevelAssertion";

import { define } from "../../elements";

export default define(class Axiom extends TopLevelAssertion {
  isSatisfiable() {
    const signature = this.getSignature(),
          satisfiable = (signature !== null);

    return satisfiable;
  }

  verify() {
    let verifies;

    const axiom = this, ///
          node = this.getNode(),
          context = this.getContext(),
          axiomString = axiom.getString();

    context.trace(`Verifying the '${axiomString}' axiom...`, node);

    const signatureVerifies = this.verifySignature();

    if (signatureVerifies) {
      verifies = super.verify();
    }

    if (verifies) {
      const axiom = this; ///

      context.addAxiom(axiom);

      context.debug(`...verified the '${axiomString}' axiom.`, node);
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

  compareSignature(signature, substitutions, context) {
    let comparesToSignature = false;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const signatureA = signature; ///

      signature = this.getSignature()

      const signatureB = signature, ///
            specificContext = context;  ///

      context = this.getContext();

      const generalContext = context;  ///

      comparesToSignature = signatureA.compare(signatureB, substitutions, generalContext, specificContext);
    }

    return comparesToSignature;
  }

  unifyStep(step, substitutions, context) {
    let stepUnifies = false;

    context = step.getContext();

    const node = this.getNode(),
          stepString = step.getString(),
          axiomString = this.getString();

    context.trace(`Unifying the '${stepString}' step with the '${axiomString}' axiom...`, node);

    const unconditional = this.isUnconditional();

    if (!unconditional) {
      context.trace(`Unable to unify the '${stepString}' step with the '${axiomString}' axiom because the axiom is not unconditional.`, node);
    } else {
      const statement = step.getStatement(),
            statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

      if (statementUnifiesWithDeduction) {
        stepUnifies = true;
      }
    }

    if (stepUnifies) {
      context.debug(`...unified the '${stepString}' step with the '${axiomString}' axiom.`, node);
    }

    return stepUnifies;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const node = this.getNode(),
          axiomString = this.getString(),
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${axiomString}' axiom...`, node);

    const unconditional = this.isUnconditional();

    if (unconditional) {
      context.trace(`Unable to unify the '${subproofString}' subproof with the '${axiomString}' axiom because the axiom is unconditional.`, node);
    } else {
      const lastProofAssertion = subproof.getLastProofAssertion(),
            lastProofAssertionUnifies = this.unifyLastProofAssertion(lastProofAssertion, substitutions, context);

      if (lastProofAssertionUnifies) {
        const suppositions = subproof.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, substitutions, context);

        if (suppositionsUnify) {
          subproofUnifies = true;
        }
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the '${axiomString}' axiom.`, node);
    }

    return subproofUnifies;
  }

  unifyDeduction(deduction, substitutions, generalContext, specificContext) {
    let deductionUnifies;

    const specificDeduction = deduction;  ///

    deduction = this.getDeduction();

    const generalDeduction = deduction; ///

    deduction = specificDeduction;  ///

    deductionUnifies = generalDeduction.unifyDeduction(deduction, substitutions, generalContext, specificContext);

    return deductionUnifies;
  }

  unifySupposition(supposition, index, substitutions, generalContext, specificContext) {
    let suppositionUnifies;

    const specificSupposition = supposition;  ///

    supposition = this.getSupposition(index);

    const generalSupposition = supposition; ///

    supposition = specificSupposition;  ///

    suppositionUnifies = generalSupposition.unifySupposition(supposition, substitutions, generalContext, specificContext);

    return suppositionUnifies;
  }

  unifySuppositions(suppositions, substitutions, generalContext, specificContext) {
    let suppositionsUnify = false;

    const specificSuppositions = suppositions;  ///

    suppositions = this.getSuppositions();

    const generalSuppositions = suppositions, ///
          generalSuppositionsLength = generalSuppositions.length,
          specificSuppositionsLength = specificSuppositions.length;

    if (generalSuppositionsLength === specificSuppositionsLength) {
      suppositions = specificSuppositions;  ///

      suppositionsUnify = suppositions.every((supposition, index) => {
        const suppositionUnifies = this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);

        if (suppositionUnifies) {
          return true;
        }
      });
    }

    return suppositionsUnify;
  }

  unifyLastProofAssertion(lastProofAssertion, substitutions, context) {
    let lastProofAssertionUnifies = false;

    const node = this.getNode(),
          axiomString = this.getString(),
          lastProofAssertionString = lastProofAssertion.getString();

    context.trace(`Unifying the '${lastProofAssertionString}' last proof assertion with the '${axiomString}' axiom...`, node)

    const statement = lastProofAssertion.getStatement(),
          statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

    if (statementUnifiesWithDeduction) {
      lastProofAssertionUnifies = true;
    }

    if (lastProofAssertionUnifies) {
      context.debug(`...unified the '${lastProofAssertionString}' last proof assertion with the '${axiomString}' axiom.`, node)
    }

    return lastProofAssertionUnifies;
  }

  unifyTopLevelAssertion(topLevelAssertion, substitutions, context) {
    let topLevelAssertionUnifies = false;

    const node = this.getNode(),
          axiomString = this.getString(),
          topLevelAssertionString = topLevelAssertion.getString();

    context.trace(`Unifying the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom...`, node);

    const hypothesesCorrelate = topLevelAssertion.correlateHypotheses(context);

    if (hypothesesCorrelate) {
      const specificContext = context;  ///

      context = this.getContext();

      const generalContext = context; ///

      context = specificContext;  ///

      const deduction = topLevelAssertion.getDeduction(),
            deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);

      if (deductionUnifies) {
        const suppositions = topLevelAssertion.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);

        topLevelAssertionUnifies = suppositionsUnify; ///
      }
    }

    if (topLevelAssertionUnifies) {
      context.debug(`...unified the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom.`, node);
    }

    return topLevelAssertionUnifies;
  }

  static name = "Axiom";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Axiom, json, context); }
});
