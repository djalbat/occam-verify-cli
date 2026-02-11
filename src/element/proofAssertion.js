"use strict";

import { Element } from "occam-languages";

import { equateStatements } from "../process/equate";

export default class ProofAssertion extends Element {
  constructor(context, string, node, statement) {
    super(context, string, node);

    this.statement = statement;
  }

  getStatement() {
    return this.statement;
  }

  isProofAssertion() {
    const proofAssertion = true;

    return proofAssertion;
  }

  compareStatement(statement, context) {
    let comparesToStatement = false;

    const statementString = statement.getString(),
          proofAssertionString = this.getString();  ///

    context.trace(`Comparing the '${statementString}' statement to the '${proofAssertionString}' proof assertion...`);

    const leftStatement = statement,  ///
          rightStatement = this.statement,  ///
          leftStatementNode = leftStatement.getNode(),
          rightStatementNode = rightStatement.getNode(),
          statementsEquate = equateStatements(leftStatementNode, rightStatementNode, context);

    if (statementsEquate) {
      comparesToStatement = true;
    }

    if (comparesToStatement) {
      context.debug(`...compared the '${statementString}' statement to the '${proofAssertionString}' proof assertion.`);
    }

    return comparesToStatement;
  }

  validateStatement(assignments, context) {
    let statementValidates;

    const statementString = this.statement.getString(),
          proofAssertionString = this.getString();  ///

    context.trace(`Validating the '${proofAssertionString}' proof assertion's '${statementString}' statement... `);

    const stated = this.isStated();

    statementValidates = this.statement.validate(assignments, stated, context);

    if (statementValidates) {
      context.debug(`...validated the '${proofAssertionString}' proof assertion's '${statementString}' statement. `);
    }

    return statementValidates;
  }

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies = false;

    if (this.statement !== null) {
      const context = specificContext, ///
            statementString = statement.getString(),
            proorAssertionString = this.getString();  ///

      context.trace(`Unifying the '${statementString}' statement with the '${proorAssertionString}' proof assertion...`);

      statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUnifies) {
        context.debug(`...unified the '${statementString}' statement with the '${proorAssertionString}' proof assertion.`);
      }
    }

    return statementUnifies;
  }
}
