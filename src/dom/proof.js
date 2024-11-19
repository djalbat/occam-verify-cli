"use strict";

import dom from "../dom";
import LocalContext from "../context/local";

import { nodeQuery } from "../utilities/query";
import { domAssigned } from "../dom";

const derivationNodeQuery = nodeQuery("/proof/derivation");

export default domAssigned(class Proof {
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

  verify(substitutions, conclusion, context) {
    let verified = false;

    const localContext = LocalContext.fromContext(context); ///

    context = localContext; ///

    const derivationVerified = this.derivation.verify(substitutions, context);

    if (derivationVerified) {
      const lastProofStep = context.getLastProofStep();

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

  static name = "Proof";

  static fromProofNode(proofNode, fileContext) {
    let proof = null;

    if (proofNode !== null) {
      const { Derivation } = dom,
            derivationNode = derivationNodeQuery(proofNode),
            derivation = Derivation.fromDerivationNode(derivationNode, fileContext);

      proof = new Proof(derivation);
    }

    return proof;
  }
});