"use strict";

import { arrayUtilities } from "necessary";

import Substitutions from "../substitutions";
import TopLevelAssertion from "./topLevelAssertion";

import { domAssigned } from "../dom";

const { match } = arrayUtilities;

export default domAssigned(class Axiom extends TopLevelAssertion {
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

  static name = "Axiom";

  static fromJSON(json, fileContext) { return TopLevelAssertion.fromJSON(Axiom, json, fileContext); }

  static fromAxiomNode(axiomNode, fileContext) { return TopLevelAssertion.fromNode(Axiom, axiomNode, fileContext); }
});