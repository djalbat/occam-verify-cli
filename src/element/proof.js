"use strict";

import Element from "../element";
import LocalContext from "../context/local";

import { define } from "../elements";

export default define(class Proof extends Element {
  constructor(context, string, node, derivation) {
    super(context, string, node);
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
});
