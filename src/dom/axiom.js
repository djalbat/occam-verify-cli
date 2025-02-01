"use strict";

import { arrayUtilities } from "necessary";

import Substitutions from "../substitutions";
import TopLevelAssertion  from "./topLevelAssertion";

import { nodeQuery } from "../utilities/query";
import { SATISFYING } from "../constants";
import { domAssigned } from "../dom";
import { labelsFromJSON, deductionFromJSON, satisfyingFromJSON, suppositionsFromJSON } from "../utilities/json";
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

  unifyAxiomLemmaTheoremConjecture(axiomLemmaTheoremConjecture, context) {
    let axiomLemmaTheoremConjectureUnified = false;

    const axiomString = this.getString(),
          axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();

    context.trace(`Unifying the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture against the '${axiomString}' axiom...`);

    const fileContext = this.getFileContext(),
          substitutions = Substitutions.fromNothing(),
          generalContext = fileContext, ///
          specificContext = context;  ///

    let suppositions;

    suppositions = this.getSuppositions();

    const generalSuppositions = suppositions; ///

    suppositions = axiomLemmaTheoremConjecture.getSuppositions();

    const specificSuppositions = suppositions,  ///
          suppositionsMatch = match(generalSuppositions, specificSuppositions, (generalSupposition, specificSupposition) => {
            const statement = specificSupposition.getStatement(),
                  statementUnified = generalSupposition.unifyStatement(statement, substitutions, generalContext, specificContext);

            if (statementUnified) {
              return true;
            }
          });

    if (suppositionsMatch) {
      let deduction;

      deduction = this.getDeduction();

      const generalDeduction = deduction; ///

      deduction = axiomLemmaTheoremConjecture.getDeduction();

      const specificDeduction = deduction,
            statement = specificDeduction.getStatement(),
            statementUnified = generalDeduction.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUnified) {
        axiomLemmaTheoremConjectureUnified = true;
      }
    }

    if (axiomLemmaTheoremConjectureUnified) {
      context.debug(`...unified the '${axiomLemmaTheoremConjectureString}' axiom, lemma, theorem or conjecture against the '${axiomString}' axiom.`);
    }

    return axiomLemmaTheoremConjectureUnified;
  }

  unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context) {
    let statementAndProofStepSubproofsUnified;

    statementAndProofStepSubproofsUnified = super.unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context);

    if (statementAndProofStepSubproofsUnified) {
      if (this.satisfying) {
        debugger
      }
    }

    return statementAndProofStepSubproofsUnified;
  }

  static name = "Axiom";

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

