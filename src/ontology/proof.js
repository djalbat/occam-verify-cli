"use strict";

import ontology from "../ontology";
import LocalContext from "../context/local";

import { define } from "../ontology";

export default define(class Proof {
  constructor(derivation) {
    this.derivation = derivation;
  }

  getDerivation() {
    return this.derivation;
  }

  getLastStep() { return this.derivation.getLastStep(); }

  getStatement() {
    const lastStep = this.getLastStep(),
          lastStepStatement = lastStep.getStatement(),
          statement = lastStepStatement; ///

    return statement;
  }

  verify(substitutions, conclusion, context) {
    let verifies = false;

    const localContext = LocalContext.fromNothing(context); ///

    context = localContext; ///

    const derivationVerifies = this.derivation.verify(substitutions, context);

    if (derivationVerifies) {
      const lastStep = context.getLastStep();

      if (lastStep !== null) {
        const statement = this.getStatement(),
              conclusionStatement = conclusion.getStatement(),
              conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);

        if (conclusionStatementEqualToStatement) {
          verifies = true;
        }
      }
    }

    return verifies;
  }

  static name = "Proof";

  static fromProofNode(proofNode, context) {
    let proof = null;

    if (proofNode !== null) {
      const { Derivation } = ontology,
            derivationNode = proofNode.getDerivationNode(),
            derivation = Derivation.fromDerivationNode(derivationNode, context);

      proof = new Proof(derivation);
    }

    return proof;
  }
});
