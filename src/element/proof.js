"use strict";

import Element from "../element";
import ScopedContext from "../context/scoped";

import { define } from "../elements";

export default define(class Proof extends Element {
  constructor(context, string, node, derivation) {
    super(context, string, node);

    this.derivation = derivation;
  }

  getDerivation() {
    return this.derivation;
  }

  getLastProofAssertion() { return this.derivation.getLastProofAssertion(); }

  getStatement() {
    const lastProofAssertion = this.getLastProofAssertion(),
          lastProofAssertionStatement = lastProofAssertion.getStatement(),
          statement = lastProofAssertionStatement; ///

    return statement;
  }

  verify(substitutions, conclusion, context) {
    let verifies = false;

    const scopedContext = ScopedContext.fromNothing(context); ///

    context = scopedContext; ///

    const derivationVerifies = this.derivation.verify(substitutions, context);

    if (derivationVerifies) {
      const lastProofAssertion = context.getLastProofAssertion();

      if (lastProofAssertion !== null) {
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
});
