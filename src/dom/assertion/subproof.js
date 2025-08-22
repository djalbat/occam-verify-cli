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
    let subproofUnifies;

    const subproofString = subproof.getString(),
          subproofAssertionString = this.string;  ///

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

  verify(assignments, stated, context) {
    let verifies;

    const subproofAssertionString = this.string;  ///

    context.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`);

    const statementsVerify = this.verifyStatements(assignments, stated, context);

    verifies = statementsVerify;  ///

    if (verifies) {
      context.debug(`...verified the '${subproofAssertionString}' subproof assertion.`);
    }

    return verifies;
  }

  verifyStatements(assignments, stated, context) {
    stated = true;  ///

    assignments = null; ///

    const statementsVerify = this.statements.map((statement) => {
      const statementVerifies = statement.verify(assignments, stated, context);

      if (statementVerifies) {
        return true;
      }
    });

    return statementsVerify;
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
