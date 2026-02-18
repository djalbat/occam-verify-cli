"use strict";

import { Element } from "occam-languages";

import { define } from "../elements";
import { asyncScope } from "../utilities/context";

export default define(class Proof extends Element {
  constructor(context, string, node, derivation) {
    super(context, string, node);

    this.derivation = derivation;
  }

  getDerivation() {
    return this.derivation;
  }

  getProofNode() {
    const node = this.getNode(),
          proofNode = node; ///

    return proofNode;
  }

  getLastProofAssertion() { return this.derivation.getLastProofAssertion(); }

  getStatement() {
    const lastProofAssertion = this.getLastProofAssertion(),
          lastProofAssertionStatement = lastProofAssertion.getStatement(),
          statement = lastProofAssertionStatement; ///

    return statement;
  }

  async verify(statement, context) {
    let verifies = false;

    await asyncScope(async (context) => {
      const derivationVerifies = await this.derivation.verify(context);

      if (derivationVerifies) {
        const lastProofAssertion = context.getLastProofAssertion();

        if (lastProofAssertion !== null) {
          const proof = this, ///
                proofStatement = proof.getStatement(),
                proofStatementEqualToStatement = proofStatement.isEqualTo(statement);

          if (proofStatementEqualToStatement) {
            verifies = true;
          }
        }
      }
    }, context);

    return verifies;
  }

  static name = "Proof";
});
