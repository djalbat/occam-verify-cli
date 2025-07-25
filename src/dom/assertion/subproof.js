"use strict";

import { arrayUtilities } from "necessary";

import dom from "../../dom";

import { domAssigned } from "../../dom";
import { unifyStatement } from "../../utilities/unification";

const { match } = arrayUtilities;

export default domAssigned(class SubproofAssertion {
  constructor(string, node, statements) {
    this.string = string;
    this.node = node;
    this.statements = statements;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getStatements() {
    return this.statements;
  }

  unifySubproof(subproof, substitutions, generalContext, specificContext) {
    let subproofUnified;

    const subproofString = subproof.getString(),
          subproofAssertionString = this.string;  ///

    specificContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

    const subproofStatements = subproof.getStatements(),
          subproofAssertionStatements = this.statements;  ///

    subproofUnified = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
      const generalStatement = subproofAssertionStatement,  ///
            specificStatement = subproofStatement,  ///
            statementUnified = unifyStatement(generalStatement, specificStatement, substitutions, generalContext, specificContext);

      if (statementUnified) {
        return true;
      }
    });

    if (subproofUnified) {
      specificContext.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
    }

    return subproofUnified;
  }

  verify(assignments, stated, context) {
    let verified;

    const subproofAssertionString = this.string;  ///

    context.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`);

    const statementsVerified = this.verifyStatements(assignments, stated, context);

    verified = statementsVerified;  ///

    if (verified) {
      context.debug(`...verified the '${subproofAssertionString}' subproof assertion.`);
    }

    return verified;
  }

  verifyStatements(assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const statementsVerified = this.statements.map((statement) => {
      const statementVerified = statement.verify(assignments, stated, context);

      if (statementVerified) {
        return true;
      }
    });

    return statementsVerified;
  }

  static name = "SubproofAssertion";

  static fromStatementNode(statementNode, context) {
    let subproofAssertion = null;

    const subproofAssertionNode = statementNode.getSubproofAssertionNode();

    if (subproofAssertionNode !== null) {
      const node = subproofAssertionNode, ///
            string = context.nodeAsString(node),
            statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context);

      subproofAssertion = new SubproofAssertion(string, node, statements);
    }

    return subproofAssertion;
  }
});

function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
  const { Statement } = dom,
        statementNodes = subproofAssertionNode.getStatementNodes(),
        statements = statementNodes.map((statementNode) => {
          const statement = Statement.fromStatementNode(statementNode, context);

          return statement;
        });

  return statements;
}
