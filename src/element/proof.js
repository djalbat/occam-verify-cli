"use strict";

import { Element } from "occam-languages";

import { scope } from "../utilities/context";
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

  verify(conclusion, context) {
    let verifies = false;

    scope((context) => {
      const derivationVerifies = this.derivation.verify(context);

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
    }, context);

    return verifies;
  }

  static name = "Proof";
});
