"use strict";

import LocalContext from "../context/local";
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
          axiomString = axiom.getString(),
          fileContext = this.getFileContext();

    fileContext.trace(`Verifying the '${axiomString}' axiom...`);

    const signatureVerifies = this.verifySignature();

    if (signatureVerifies) {
      verifies = super.verify();
    }

    if (verifies) {
      const axiom = this; ///

      fileContext.addAxiom(axiom);

      fileContext.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verifies;
  }

  verifySignature() {
    let signatureVerifies;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const signature = this.getSignature(),
            fileContext = this.getFileContext(),
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext; ///

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

      const signatureB = signature; ///

      const fileContext = this.getFileContext(),
            localContext = LocalContext.fromFileContext(fileContext),
            generalContext = localContext,  ///
            specificContext = context;  ///

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
            fileContext = this.getFileContext(),
            localContext = LocalContext.fromFileContext(fileContext),
            generalContext = localContext,  ///
            specificContext = context,  ///
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
            fileContext = this.getFileContext(),
            localContext = LocalContext.fromFileContext(fileContext),
            generalContext = localContext,  ///
            specificContext = context,  ///
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

  unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context) {
    let axiomLemmaTheoremConjectureUnifies = false;

    const axiomString = this.getString(),
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom...`);

    const deduction = axiomLemmaTheoremConjecture.getDeduction(),  ///
          fileContext = this.getFileContext(),
          generalContext = fileContext, ///
          specificContext = context,  ///
          deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);

    if (deductionUnifies) {
      const suppositions = axiomLemmaTheoremConjecture.getSuppositions(),
            suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);

      axiomLemmaTheoremConjectureUnifies = suppositionsUnify; ///
    }

    if (axiomLemmaTheoremConjectureUnifies) {
      context.debug(`...unified the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom.`);
    }

    return axiomLemmaTheoremConjectureUnifies;
  }

  static name = "Axiom";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) {
    const node = axiomNode, ///
          axiom = TopLevelAssertion.fromNode(Axiom, node, fileContext);

    return axiom;
  }
});
