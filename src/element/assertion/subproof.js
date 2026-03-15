"use strict";

import { arrayUtilities } from "necessary";

import Assertion from "../assertion";

import { define } from "../../elements";
import { reconcile } from "../../utilities/context";
import { instantiate } from "../../utilities/context";
import { instantiateSubproofAssertion } from "../../process/instantiate";

const { last, front, backwardsEvery } = arrayUtilities;

export default define(class SubproofAssertion extends Assertion {
  constructor(context, string, node, statements) {
    super(context, string, node);

    this.statements = statements;
  }

  getStatements() {
    return this.statements;
  }

  getLastStatement() {
    const lastStatement = last(this.statements);

    return lastStatement;
  }

  getSupposedStatement(index) {
    const statement = this.statements[index],
          supposedStatement = statement;  ///

    return supposedStatement;
  }

  getSupposedStatements() {
    const frontStatements = front(this.statements),
          supposedStatements = frontStatements;  ///

    return supposedStatements;
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
    let subproofUnifies = false;

    const context = specificContext,  ///
          subproofString = subproof.getString(),
          subproofAssertionString = this.getString(); ///

    context.trace(`Unifying the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion...`);

    const lastStep = subproof.getLastStep(),
          lastStepUnifies = this.unifyLastStep(lastStep, generalContext, specificContext);

    if (lastStepUnifies) {
      const suppositions = subproof.getSuppositions(),
            suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);

      if (suppositionsUnify) {
        subproofUnifies = true;
      }
    }

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
    }

    return subproofUnifies;
  }

  unifyLastStep(lastStep, generalContext, specificContext) {
    let lastStepUnifies = false;

    const lastStatement = this.getLastStatement(),
          lastStepString = lastStep.getString(),
          lastStepStatement = lastStep.getStatement(),
          lastStatementString = lastStatement.getString(),
          lastStepStatementString = lastStepStatement.getString(),
          subproofAssertionString = this.getString(); ///

    let context;

    context = specificContext;  ///

    context.trace(`Unifying the '${lastStepString}' last step's '${lastStepStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${lastStatementString}' last statement...`)

    context = lastStep.getContext();

    specificContext = context;  ///

    reconcile((specificContext) => {
      const lastStepStatementUnifies = lastStatement.unifyStatement(lastStepStatement, generalContext, specificContext);

      if (lastStepStatementUnifies) {
        lastStepUnifies = true;
      }
    }, specificContext);

    if (lastStepUnifies) {
      context.debug(`...unified the '${lastStepString}' last step's '${lastStepStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${lastStatementString}' last statement.`)
    }

    return lastStepUnifies;
  }

  unifySupposition(supposition, index, generalContext, specificContext) {
    let suppositionUnifies = false;

    const supposedStatement = this.getSupposedStatement(index),
          suppositionString = supposition.getString(),
          suppositionStatement = supposition.getStatement(),
          subproofAssertionString = this.getString(), ///
          supposedStatementString = supposedStatement.getString(),
          suppositionStatementString = suppositionStatement.getString();  ///

    let context;

    context = specificContext;  ///

    context.trace(`Unifying the '${suppositionString}' supposition's '${suppositionStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${supposedStatementString}' supposed statement...`)

    context = supposition.getContext();

    specificContext = context;  ///

    reconcile((specificContext) => {
      const suppositionStatementUnifies = supposedStatement.unifyStatement(suppositionStatement, generalContext, specificContext);

      if (suppositionStatementUnifies) {
        suppositionUnifies = true;
      }
    }, specificContext);

    if (suppositionUnifies) {
      context.debug(`...unified the '${suppositionString}' supposition's '${suppositionStatementString}' statement with the '${subproofAssertionString}' subproof assertion's '${supposedStatementString}' supposed statement.`)
    }

    return suppositionUnifies;
  }

  unifySuppositions(suppositions, generalContext, specificContext) {
    let suppositionsUnify = false;

    const supposedStatements = this.getSupposedStatements(),
          suppositionsLength = suppositions.length,
          supposedStatementsLength = supposedStatements.length;

    if (suppositionsLength === supposedStatementsLength) {
      suppositionsUnify = backwardsEvery(suppositions, (supposition, index) => {
        const suppositionUnifies = this.unifySupposition(supposition, index, generalContext, specificContext);

        if (suppositionUnifies) {
          return true;
        }
      });
    }

    return suppositionsUnify;
  }

  static name = "SubproofAssertion";

  static fromJSON(json, context) {
    let subproorAssertion = null;

    const { name } = json;

    if (this.name === name) {
      instantiate((context) => {
        const { string } = json,
              subproofAssertionNode = instantiateSubproofAssertion(string, context),
              statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context),
              node = subproofAssertionNode; ///

        context = null;

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
