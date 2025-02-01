"use strict";

import { arrayUtilities } from "necessary";

import TopLevelAssertion  from "./topLevelAssertion";

import { nodeQuery } from "../utilities/query";
import { SATISFYING } from "../constants";
import { domAssigned } from "../dom";
import { labelsFromJSON,
         deductionFromJSON,
         satisfyingFromJSON,
         labelsToLabelsJSON,
         suppositionsFromJSON,
         deductionToDeductionJSON,
         suppositionsToSuppositionsJSON } from "../utilities/json";
import { proofFromNode, labelsFromNode, deductionFromNode, suppositionsFromNode, stringFromLabelsAndDeduction } from "./topLevelAssertion";

const { match } = arrayUtilities;

const firstPrimaryKeywordTerminalNodeQuery = nodeQuery("/axiom/@primary-keyword[0]");

export default domAssigned(class Axiom extends TopLevelAssertion {
  constructor(fileContext, string, labels, suppositions, deduction, proof, satisfying) {
    super(fileContext, string, labels, suppositions, deduction, proof);

    this.satisfying = satisfying;
  }

  isSatisfying() {
    return this.satisfying;
  }

  verify() {
    let verified;

    const axiom = this, ///
          axiomString = axiom.getString(),
          fileContext = this.getFileContext();

    fileContext.trace(`Verifying the '${axiomString}' axiom...`);

    verified = super.verify();

    if (verified) {
      const axiom = this; ///

      fileContext.addAxiom(axiom);

      fileContext.debug(`...verified the '${axiomString}' axiom.`);
    }

    return verified;
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

  unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context) {
    let statementAndProofStepSubproofsUnified;

    statementAndProofStepSubproofsUnified = super.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context);

    // if (statementAndProofStepSubproofsUnified) {
    //   if (this.satisfying) {
    //     debugger
    //   }
    // }

    return statementAndProofStepSubproofsUnified;
  }

  static name = "Axiom";

  toJSON() {
    let labels = this.getLabels(),
        deduction = this.getDeduction(),
        suppositions = this.getSuppositions();

    const labelsJSON = labelsToLabelsJSON(labels),
          deductionJSON = deductionToDeductionJSON(deduction),
          suppositionsJSON = suppositionsToSuppositionsJSON(suppositions);

    labels = labelsJSON;  ///
    deduction = deductionJSON;  ///
    suppositions = suppositionsJSON;  ///

    const satisfying = this.satisfying,
          json = {
            labels,
            deduction,
            suppositions,
            satisfying
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const labels = labelsFromJSON(json, fileContext),
          suppositions = suppositionsFromJSON(json, fileContext),
          deduction = deductionFromJSON(json, fileContext),
          proof = null,
          satisfying = satisfyingFromJSON(json, fileContext),
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying);

    return topLevelAssertion;
  }

  static fromAxiomNode(axiomNode, fileContext) {
    const node = axiomNode, ///
          labels = labelsFromNode(node, fileContext),
          suppositions = suppositionsFromNode(node, fileContext),
          deduction = deductionFromNode(node, fileContext),
          proof = proofFromNode(node, fileContext),
          satisfying = satisfyingFromNode(node, fileContext),
          string = stringFromLabelsAndDeduction(labels, deduction),
          topLevelAssertion = new Axiom(fileContext, string, labels, suppositions, deduction, proof, satisfying);

    return topLevelAssertion;
  }
});

function satisfyingFromNode(node, fileContext) {
  const firstPrimaryKeywordTerminalNode = firstPrimaryKeywordTerminalNodeQuery(node),
        content = firstPrimaryKeywordTerminalNode.getContent(),
        contentSatisfying = (content === SATISFYING),
        satisfying = contentSatisfying; ///

  return satisfying;
}

