"use strict";

import Element from "../element";

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
          proofAssertionString = this.getString();

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

  unifyStatement(statement, substitutions, generalContext, specificContext) {
    let statementUnifies = false;

    if (this.statement !== null) {
      const node = this.getNode(),
            context = specificContext,  ///
            premiseString = this.getString(), ///
            statementString = statement.getString();

      context.trace(`Unifying the '${statementString}' statement with the '${premiseString}' proof assertion...`, node);

      statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);

      if (statementUnifies) {
        context.debug(`...unified the '${statementString}' statement with the '${premiseString}' proof assertion.`, node);
      }
    }

    return statementUnifies;
  }
}
