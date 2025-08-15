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
    let verified;

    const axiom = this, ///
          axiomString = axiom.getString(),
          fileContext = this.getFileContext();

    fileContext.trace(`Verifying the '${axiomString}' axiom...`);

    const signatureVerified = this.verifySignature();

    if (signatureVerified) {
      verified = super.verify();
    }

    if (verified) {
      const axiom = this; ///

      fileContext.addAxiom(axiom);

      fileContext.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verified;
  }

  verifySignature() {
    let signatureVerified = true;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const signature = this.getSignature(),
            fileContext = this.getFileContext(),
            localContext = LocalContext.fromFileContext(fileContext),
            context = localContext; ///

      signatureVerified = signature.verify(context);
    }

    return signatureVerified;
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
    let stepUnified = false;

    const stepString = step.getString(),
          axiomString = this.string;  ///

    context.trace(`Unifying the '${stepString}' step with the '${axiomString}' axiom...`);

    const statement = step.getStatement(),
          statementUnified = this.unifyStatement(statement, substitutions, context);

    if (statementUnified) {
      stepUnified = true;
    }

    if (stepUnified) {
      context.debug(`...unified the '${stepString}' step with the '${axiomString}' axiom.`);
    }

    return stepUnified;
  }

  unifyLastStep(lastStep, substitutions, generalContext, specificContext) {
    let lastStepUnified = false;

    const context = specificContext,  ///
          axiomString = this.string,  ///
          lastStepString = lastStep.getString();

    context.trace(`Unifying the '${lastStepString}' last step with the '${axiomString}' axiom...`)

    const statement = lastStep.getStatement(),
          statementUnified = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);

    if (statementUnified) {
      lastStepUnified = true;
    }

    if (lastStepUnified) {
      context.debug(`...unified the '${lastStepString}' last step with the '${axiomString}' axiom.`)
    }

    return lastStepUnified;
  }

  unifySubproof(subproof, substitutions, context) {
    let subproofUnified = false;

    const axiomString = this.string,  ///
          subproofString = subproof.getString();

    context.trace(`Unifying the '${subproofString}' subproof with the '${axiomString}' axiom...`);

    const lastStep = subproof.getLastStep(),
          fileContext = this.getFileContext(),
          localContext = LocalContext.fromFileContext(fileContext),
          generalContext = localContext,  ///
          specificContext = context,  ///
          lastStepUnified = this.unifyLastStep(lastStep, substitutions, generalContext, specificContext);

    if (lastStepUnified) {
      const suppositions = subproof.getSuppositions(),
            suppositionsUnified = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);

      if (suppositionsUnified) {
        subproofUnified = true;
      }
    }

    if (subproofUnified) {
      context.debug(`...unified the '${subproofString}' subproof with the '${axiomString}' axiom.`);
    }

    return subproofUnified;
  }

  unifyDeduction(deduction, substitutions, generalContext, specificContext) {
    let deductionUnified;

    const specificDeduction = deduction;  ///

    deduction = this.getDeduction();

    const generalDeduction = deduction; ///

    deduction = specificDeduction;  ///

    deductionUnified = generalDeduction.unifyDeduction(deduction, substitutions, generalContext, specificContext);

    return deductionUnified;
  }

  unifySupposition(supposition, index, substitutions, generalContext, specificContext) {
    let suppositionUnified;

    const specificSupposition = supposition;  ///

    supposition = this.getSupposition(index);

    const generalSupposition = supposition; ///

    supposition = specificSupposition;  ///

    suppositionUnified = generalSupposition.unifySupposition(supposition, substitutions, generalContext, specificContext);

    return suppositionUnified;
  }

  unifySuppositions(suppositions, substitutions, generalContext, specificContext) {
    let suppositionsUnified = false;

    const specificSuppositions = suppositions;  ///

    suppositions = this.getSuppositions();

    const generalSuppositions = suppositions, ///
          generalSuppositionsLength = generalSuppositions.length,
          specificSuppositionsLength = specificSuppositions.length;

    if (generalSuppositionsLength === specificSuppositionsLength) {
      suppositions = specificSuppositions;  ///

      const suppositionsMatch = suppositions.every((supposition, index) => {
        const suppositionUnified = this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);

        if (suppositionUnified) {
          return true;
        }
      });

      if (suppositionsMatch) {
        suppositionsUnified = true;
      }
    }

    return suppositionsUnified;
  }

  unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context) {
    let axiomLemmaTheoremConjectureUnified = false;

    const axiomString = this.getString(),
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom...`);

    const deduction = axiomLemmaTheoremConjecture.getDeduction(),  ///
          fileContext = this.getFileContext(),
          generalContext = fileContext, ///
          specificContext = context,  ///
          deductionUnified = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);

    if (deductionUnified) {
      const suppositions = axiomLemmaTheoremConjecture.getSuppositions(),
            suppositionsUnified = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);

      axiomLemmaTheoremConjectureUnified = suppositionsUnified; ///
    }

    if (axiomLemmaTheoremConjectureUnified) {
      context.debug(`...unified the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom.`);
    }

    return axiomLemmaTheoremConjectureUnified;
  }

  static name = "Axiom";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) {
    const node = axiomNode, ///
          axiom = TopLevelAssertion.fromNode(Axiom, node, fileContext);

    return axiom;
  }
});
