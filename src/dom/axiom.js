"use strict";

import { arrayUtilities } from "necessary";

import LocalContext from "../context/local";
import TopLevelAssertion  from "./topLevelAssertion";

import { domAssigned } from "../dom";

const { match } = arrayUtilities;

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

  matchSignature(signature, substitutions, generalContext, specificContext) {
    let signatureMatches = false;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const signatureA = signature; ///

      signature = this.getSignature()

      const signatureB = signature; ///

      signatureMatches = signatureA.match(signatureB, substitutions, generalContext, specificContext);
    }

    return signatureMatches;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    const deduction = this.getDeduction(),
          statementUnified = deduction.unifyStatement(statement, substitutions, generalContext, specificContext);

    return statementUnified;
  }

  unifyDeduction(generalDeduction, specificDeduction, substitutions, generalContext, specificContext) {
    let deductionUnified;

    const context = specificContext,  ///
          generalDeductionString = generalDeduction.getString(),
          specificDeductionString = specificDeduction.getString();

    context.trace(`Unifying the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction...`);

    const statement = specificDeduction.getStatement(),
          statementUnified = generalDeduction.unifyStatement(statement, substitutions, generalContext, specificContext);

    deductionUnified = statementUnified;  ///

    if (deductionUnified) {
      context.debug(`...unified the '${specificDeductionString}' deduction with the '${generalDeductionString}' deduction.`);
    }

    return deductionUnified;
  }

  unifySupposition(generalSupposition, specificSupposition, substitutions, generalContext, specificContext) {
    let suppositionUnified;

    const context = specificContext,  ///
          generalSuppositionString = generalSupposition.getString(),
          specificSuppositionString = specificSupposition.getString();

    context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition...`);

    const statement = specificSupposition.getStatement(),
          statementUnified = generalSupposition.unifyStatement(statement, substitutions, generalContext, specificContext);

    suppositionUnified = statementUnified;  ///

    if (suppositionUnified) {
      context.debug(`...unified the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition.`);
    }

    return suppositionUnified;
  }

  unifySuppositions(generalSuppositions, specificSuppositions, substitutions, generalContext, specificContext) {
    let suppositionsUnified;

    const suppositionsMatch = match(generalSuppositions, specificSuppositions, (generalSupposition, specificSupposition) => {
      const suppositionUnified = this.unifySupposition(generalSupposition, specificSupposition, substitutions, generalContext, specificContext);

      if (suppositionUnified) {
        return true;
      }
    });

    suppositionsUnified = suppositionsMatch;  ///

    return suppositionsUnified;
  }

  unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, substitutions, context) {
    let axiomLemmaTheoremConjectureUnified = false;

    const axiomString = this.getString(),
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom...`);

    const fileContext = this.getFileContext(),
          generalContext = fileContext, ///
          specificContext = context;  ///

    let deduction;

    deduction = this.getDeduction();

    const generalDeduction = deduction; ///

    deduction = axiomLemmaTheoremConjecture.getDeduction();

    const specificDeduction = deduction,  ///
          deductionUnified = this.unifyDeduction(generalDeduction, specificDeduction, substitutions, generalContext, specificContext);

    if (deductionUnified) {
      let suppositions;

      suppositions = this.getSuppositions();

      const generalSuppositions = suppositions; ///

      suppositions = axiomLemmaTheoremConjecture.getSuppositions();

      const specificSuppositions = suppositions,  ///
            suppositionsUnified = this.unifySuppositions(generalSuppositions, specificSuppositions, substitutions, generalContext, specificContext);

      axiomLemmaTheoremConjectureUnified = suppositionsUnified; ///
    }

    if (axiomLemmaTheoremConjectureUnified) {
      context.debug(`...unified the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture with the '${axiomString}' axiom.`);
    }

    return axiomLemmaTheoremConjectureUnified;
  }

  unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
    let statementAndStepsOrSubproofsUnified = false;

    const satisfiable = this.isSatisfiable();

    if (satisfiable) {
      const string = this.getString(),
            axiomString = string, ///
            statementString = statement.getString();

      context.debug(`The '${statementString}' statement cannot be unified with the '${axiomString}' axiom because the latter is satisfiable.`);
    } else {
      statementAndStepsOrSubproofsUnified = super.unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context);
    }

    return statementAndStepsOrSubproofsUnified;
  }

  static name = "Axiom";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) {
    const node = axiomNode, ///
          axiom = TopLevelAssertion.fromNode(Axiom, node, fileContext);

    return axiom;
  }
});
