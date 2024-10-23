"use strict";

import shim from "./shim";
import LocalContext from "./context/local";

import { nodeQuery } from "./utilities/query";

const derivationNodeQuery = nodeQuery("/proof/derivation");

class Proof {
  constructor(derivation) {
    this.derivation = derivation;
  }

  getDerivation() {
    return this.derivation;
  }

  getLastProofStep() { return this.derivation.getLastProofStep(); }

  getStatement() {
    const lastProofStep = this.getLastProofStep(),
          lastProofStepStatement = lastProofStep.getStatement(),
          statement = lastProofStepStatement; ///

    return statement;
  }

  verify(substitutions, conclusion, localContext) {
    let verified = false;

    localContext = LocalContext.fromLocalContext(localContext); ///

    const derivationVerified = this.derivation.verify(substitutions, localContext);

    if (derivationVerified) {
      const lastProofStep = localContext.getLastProofStep();

      if (lastProofStep !== null) {
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

  static fromProofNode(proofNode, fileContext) {
    let proof = null;

    if (proofNode !== null) {
      const { Derivation } = shim,
            derivationNode = derivationNodeQuery(proofNode),
            derivation = Derivation.fromDerivationNode(derivationNode, fileContext);

      proof = new Proof(derivation);
    }

    return proof;
  }
}

Object.assign(shim, {
  Proof
});

export default Proof;
