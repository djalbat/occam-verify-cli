"use strict";

import TopLevelAssertion  from "./topLevelAssertion";

import { define } from "../ontology";

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

    context = step.getContext();

    const node = this.getNode(),
          stepString = step.getString(),
          axiomString = this.getString();

    context.trace(`Unifying the '${stepString}' step with the '${axiomString}' axiom...`, node);

    const unconditional = this.isUnconditional();

    if (!unconditional) {
      context.trace(`Cannot unify the '${stepString}' step with the '${axiomString}' axiom because the axiom is not unconditional.`, node);
    } else {
      const statement = step.getStatement(),
            statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

      if (statementUnifiedWithDeduction) {
        stepUnifies = true;
      }
    }

    if (stepUnifies) {
      context.debug(`...unified the '${stepString}' step with the '${axiomString}' axiom.`, node);
    }

    return stepUnifies;
  }

  unifyLastStep(lastStep, substitutions, context) {
    let lastStepUnifies = false;

    const node = this.getNode(),
          axiomString = this.getString(),
          lastStepString = lastStep.getString();

    context.trace(`Unifying the '${lastStepString}' last step with the '${axiomString}' axiom...`, node)

    const statement = lastStep.getStatement(),
          statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);

    if (statementUnifiedWithDeduction) {
      lastStepUnifies = true;
    }

    if (lastStepUnifies) {
      context.debug(`...unified the '${lastStepString}' last step with the '${axiomString}' axiom.`, node)
    }

    return lastStepUnifies;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnifies = false;

    const node = this.getNode(),
          axiomString = this.getString(),
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${axiomString}' axiom...`, node);

    const unconditional = this.isUnconditional();

    if (unconditional) {
      context.trace(`Cannot unify the '${subproofString}' subproof with the '${axiomString}' axiom because the axiom is unconditional.`, node);
    } else {
      const lastStep = subproof.getLastStep(),
            lastStepUnifies = this.unifyLastStep(lastStep, substitutions, context);

      if (lastStepUnifies) {
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

    const node = this.getNode(),
          axiomString = this.getString(),
          axiomLemmaTheoremOrConjectureString = axiomLemmaTheoremOrConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom...`, node);

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
      context.debug(`...unified the '${axiomLemmaTheoremOrConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom.`, node);
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
