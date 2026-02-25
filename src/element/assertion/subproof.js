"use strict";

import { arrayUtilities } from "necessary";

import Assertion from "../assertion";

import { define } from "../../elements";
import { literally } from "../../utilities/context";
import { unifyStatement } from "../../process/unify";
import { statementsToStatementsJSON } from "../../utilities/json";
import { instantiateSubproofAssertion } from "../../process/instantiate";

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

  validate(stated, context) {
    let subproofAssertion = null;

    const subproofAssertionString = this.getString();  ///

    context.trace(`Validating the '${subproofAssertionString}' subproof assertion...`);

    const validAssertion = this.findValidAssertion(context);

    if (validAssertion) {
      subproofAssertion = validAssertion; ///

      context.debug(`...the '${subproofAssertionString}' subproof assertion is already valid.`);
    } else {
      let validates = false;

      const statementsValidate = this.validateStatements(stated, context);

      if (statementsValidate) {
        validates = true;
      }

      if (validates) {
        const assertion = this; ///

        subproofAssertion = assertion;  ///

        context.addAssertion(assertion);

        context.debug(`...validated the '${subproofAssertionString}' subproof assertion.`);
      }
    }

    return subproofAssertion;
  }

  validateStatements(stated, context) {
    stated = true;  ///

    const statementsValidate = this.statements.map((statement) => {
      let statementValidates = false;

      statement = statement.validate(stated, context);  ///

      if (statement !== null) {
        statementValidates = true;
      }

      if (statementValidates) {
        return true;
      }
    });

    return statementsValidate;
  }

  unifySubproof(subproof, generalContext, specificContext) {
    let subproofUnifies;

    const subproofString = subproof.getString(),
          subproofAssertionString = this.getString();  ///

    specificContext.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

    const subproofStatements = subproof.getStatements(),
          subproofAssertionStatements = this.statements;  ///

    subproofUnifies = match(subproofAssertionStatements, subproofStatements, (subproofAssertionStatement, subproofStatement) => {
      const generalStatement = subproofAssertionStatement,  ///
            specificStatement = subproofStatement,  ///
            statementUnifies = unifyStatement(generalStatement, specificStatement, generalContext, specificContext);

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

  toJSON() {
    const { name } = this.constructor,
          statementJSON = statementsToStatementsJSON(this.statements),
          statements = statementJSON, ///
          string = this.getString(),
          json = {
            name,
            string,
            statements
          };

    return json;
  }

  static fromJSON(json, context) {
    let subproorAssertion = null;

    const { name } = json;

    if (this.name === name) {
      subproorAssertion = literally((context) => {
        const { string } = json,
              subproofAssertionNode = instantiateSubproofAssertion(string, context),
              statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context),
              node = subproofAssertionNode; ///

        subproorAssertion = new SubproofAssertion(context, string, node, statements);
      }, context);
    }

    return subproorAssertion;
  }
});

function statementsFromSubproofAssertionNode(subproofAssertionNode, context) {
  const statementNodes = subproofAssertionNode.getStatementNodes(),
        statements = statementNodes.map((statemetNode) => {
          const statement = context.findStatementByStatementNode(statemetNode);

          return statement;
        });

  return statements;
}
