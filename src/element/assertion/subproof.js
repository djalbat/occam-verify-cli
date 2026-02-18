"use strict";

import { arrayUtilities } from "necessary";

import Assertion from "../assertion";

import { define } from "../../elements";
import { unifyStatement } from "../../process/unify";

const { match } = arrayUtilities;

export default define(class SubproofAssertion extends Assertion {
  constructor(context, string, node, statements) {
    super(context, string, node);

    this.statements = statements;
  }

  getStatements() {
    return this.statements;
  }

  getSubproofAssertionNode() {
    const node = this.getNode(),
          subproofAssertionNode = node; ///

    return subproofAssertionNode;
  }

  validate(assignments, stated, context) {
    let validates = false;

    const subproofAssertionString = this.getString();  ///

    context.trace(`Validating the '${subproofAssertionString}' subproof assertion...`);

    const valid = this.isValid(context);

    if (valid) {
      validates = true;

      context.debug(`...the '${subproofAssertionString}' subproof assertion is already valid.`);
    } else {
      const statementsValidate = this.validateStatements(assignments, stated, context);

      if (statementsValidate) {
        validates = true;
      }

      if (validates) {
        context.debug(`...validated the '${subproofAssertionString}' subproof assertion.`);
      }
    }

    return validates;
  }

  validateStatements(assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const statementsValidate = this.statements.map((statement) => {
      const statementValidates = statement.validate(assignments, stated, context);

      if (statementValidates) {
        return true;
      }
    });

    return statementsValidate;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnifies;

    const subproofString = subproof.getString(),
          subproofAssertionString = this.getString();  ///

    specificContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

    const subproofStatements = subproof.getStatements(),
          subproofAssertionStatements = this.statements;  ///

    subproofUnifies = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
      const generalStatement = subproofAssertionStatement,  ///
            specificStatement = subproofStatement,  ///
            statementUnifies = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

      if (statementUnifies) {
        return true;
      }
    });

    if (subproofUnifies) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
    }

    return subproofUnifies;
  }

  static name = "SubproofAssertion";
});

