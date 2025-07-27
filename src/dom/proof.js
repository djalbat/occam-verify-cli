"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { domAssigned } from "../dom";

export default domAssigned(class Proof {
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
    let verified = false;

    const localContext = LocalContext.fromContext(context); ///

    context = localContext; ///

    const derivationVerified = this.derivation.verify(substitutions, context);

    if (derivationVerified) {
      const lastStep = context.getLastStep();

      if (lastStep !== null) {
        const statement = this.getStatement(),
              conclusionStatement = conclusion.getStatement(),
              conclusionStatementEqualToStatement = conclusionStatement.isEqualTo(statement);

        if (conclusionStatementEqualToStatement) {
          verified = true;
        }
      }
    }

    return verified;
  }

  static name = "Proof";

  static fromProofNode(proofNode, fileContext) {
    let proof = null;

    if (proofNode !== null) {
      const { Derivation } = dom,
            derivationNode = proofNode.getDerivationNode(),
            derivation = Derivation.fromDerivationNode(derivationNode, fileContext);

      proof = new Proof(derivation);
    }

    return proof;
  }
});
