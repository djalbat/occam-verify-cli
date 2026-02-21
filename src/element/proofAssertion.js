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

  getProofAssertionNode() {
    const node = this.getNode(),
          proofAssertionNode = node;  ///

    return proofAssertionNode;
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

  validateStatement(context) {
    let statementValidates = false;

    const statementString = this.statement.getString(),
          proofAssertionString = this.getString();  ///

    context.trace(`Validating the '${proofAssertionString}' proof assertion's '${statementString}' statement... `);

    const stated = this.isStated(),
          statement = this.statement.validate(stated, context);

    if (statement !== null) {
      statementValidates = true;
    }

    if (statementValidates) {
      context.debug(`...validated the '${proofAssertionString}' proof assertion's '${statementString}' statement. `);
    }

    return statementValidates;
  }

  unifyStatement(statement, generalContext, specificContext) {
    let statementUnifies = false;

    if (this.statement !== null) {
      const context = specificContext, ///
            statementString = statement.getString(),
            proofAssertionString = this.getString();  ///

      context.trace(`Unifying the '${statementString}' statement with the '${proofAssertionString}' proof assertion...`);

      statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);

      if (statementUnifies) {
        context.debug(`...unified the '${statementString}' statement with the '${proofAssertionString}' proof assertion.`);
      }
    }

    return statementUnifies;
  }
}
