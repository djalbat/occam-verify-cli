"use strict";

import TopLevelAssertion  from "./topLevelAssertion";

import { domAssigned } from "../dom";

export default domAssigned(class Axiom extends TopLevelAssertion {
  isSatisfiable() {
    const signature = this.getSignature(),
          satisfiable = (signature !== null);

    return satisfiable;
  }

  verify() {
    let verifies;

    const axiom = this, ///
          context = this.getContext(),
          axiomString = axiom.getString();

    context.trace(`Verifying the '${axiomString}' axiom...`);

    const signatureVerifies = this.verifySignature();

    if (signatureVerifies) {
      verifies = super.verify();
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

  matchSignature(signature, substitutions, context) {
    let signatureMatches = false;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const signatureA = signature; ///

      signature = this.getSignature()

      const signatureB = signature, ///
            specificContext = context;  ///

      context = this.getContext();

      const generalContext = context;  ///

      signatureMatches = signatureA.match(signatureB, substitutions, generalContext, specificContext);
    }

    return signatureMatches;
  }

  unifyStep(step, substitutions, context) {
    let stepUnifies = false;

    const stepString = step.getString(),
          axiomString = this.string;  ///

    context.trace(`Unifying the '${stepString}' step with the '${axiomString}' axiom...`);

    const unconditional = this.isUnconditional();

    if (!unconditional) {
      context.trace(`Cannot unify the '${stepString}' step with the '${axiomString}' axiom because the axiom is not unconditional.`);
    } else {
      const statement = step.getStatement(),
            specificContext = context;  ///

      context = this.getContext();

      const generalContext = context,  ///
            statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

      if (statementUnifiesWithDeduction) {
        stepUnifies = true;
      }
    }

    if (stepUnifies) {
      context.debug(`...unified the '${stepString}' step with the '${axiomString}' axiom.`);
    }

    return stepUnifies;
  }

  unifyLastStep(lastStep, substitutions, generalContext, specificContext) {
    let lastStepUnifies = false;

    const context = specificContext,  ///
          axiomString = this.string,  ///
          lastStepString = lastStep.getString();

    context.trace(`Unifying the '${lastStepString}' last step with the '${axiomString}' axiom...`)

    const statement = lastStep.getStatement(),
          statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

    if (statementUnifiesWithDeduction) {
      lastStepUnifies = true;
    }

    if (lastStepUnifies) {
      context.debug(`...unified the '${lastStepString}' last step with the '${axiomString}' axiom.`)
    }

    return lastStepUnifies;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const axiomString = this.string,  ///
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${axiomString}' axiom...`);

    const unconditional = this.isUnconditional();

    if (unconditional) {
      context.trace(`Cannot unify the '${subproofString}' subproof with the '${axiomString}' axiom because the axiom is unconditional.`);
    } else {
      const lastStep = subproof.getLastStep(),
            specificContext = context;  ///

      context = this.getContext();

      const generalContext = context,  ///
            lastStepUnifies = this.unifyLastStep(lastStep, substitutions, generalContext, specificContext);

      if (lastStepUnifies) {
        const suppositions = subproof.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);

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

      const suppositionsMatch = suppositions.every((supposition, index) => {
        const suppositionUnifies = this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);

        if (suppositionUnifies) {
          return true;
        }
      });

      if (suppositionsMatch) {
        suppositionsUnify = true;
      }
    }

    return suppositionsUnify;
  }

  unifyAxiomLemmaTheoremOrConjecture(axiomLemmaTheoremOrConjecture, substitutions, context) {
    let axiomLemmaTheoremOrConjectureUnifies = false;

    const axiomString = this.getString(),
          axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom...`);

    const hypothesesCorrelate = axiomLemmaTheoremOrConjecture.correlateHypotheses(context);

    if (hypothesesCorrelate) {
      const deduction = axiomLemmaTheoremOrConjecture.getDeduction(),  ///
            specificContext = context;  ///

      context = this.getContext();

      const generalContext = context, ///
            deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);

      if (deductionUnifies) {
        const suppositions = axiomLemmaTheoremOrConjecture.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);

        axiomLemmaTheoremOrConjectureUnifies = suppositionsUnify; ///
      }
    }

    if (axiomLemmaTheoremOrConjectureUnifies) {
      context.debug(`...unified the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom.`);
    }

    return axiomLemmaTheoremOrConjectureUnifies;
  }

  static name = "Axiom";

  static fromJSON(json, context) { return TopLevelAssertion.fromJSON(Axiom, json, context); }

  static fromAxiomNode(axiomNode, context) {
    const node = axiomNode, ///
          axiom = TopLevelAssertion.fromNode(Axiom, node, context);

    return axiom;
  }
});
