"use strict";

import { arrayUtilities } from "necessary";

import Assertion from "../assertion";

import { define } from "../../elements";
import { reconcile } from "../../utilities/context";
import { join, instantiate } from "../../utilities/context";
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

    reconcile((specificContext) => {
      const lastStep = subproof.getLastStep(),
            lastStepUnifies = this.unifyLastStep(lastStep, generalContext, specificContext);

      if (lastStepUnifies) {
        const suppositions = subproof.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);

        if (suppositionsUnify) {
          specificContext.commit();

          subproofUnifies = true;
        }
      }
    }, specificContext);

    if (subproofUnifies) {
      context.debug(`...unified the '${subproofString}' subproof with the '${subproofAssertionString}' subproof assertion.`);
    }

    return subproofUnifies;
  }

  unifyLastStep(lastStep, generalContext, specificContext) {
    let lastStepUnifies = false;

    const context = specificContext,  ///
          lastStatement = this.getLastStatement(),
          lastStepString = lastStep.getString(),
          lastStatementString = lastStatement.getString();

    context.trace(`Unifying the '${lastStepString}' last step with the '${lastStatementString}' last statement...`)

    const lastStepContext = lastStep.getContext(),
          lastStepStatement = lastStep.getStatement();

    specificContext = lastStepContext;  ///

    join((specificContext) => {
      reconcile((specificContext) => {
        const lastStepStatementUnifies = lastStatement.unifyStatement(lastStepStatement, generalContext, specificContext);

        if (lastStepStatementUnifies) {
          specificContext.commit(context);

          lastStepUnifies = true;
        }
      }, specificContext);
    }, specificContext, context);

    if (lastStepUnifies) {
      context.debug(`...unified the '${lastStepString}' last step with the '${lastStatementString}' last statement.`)
    }

    return lastStepUnifies;
  }

  unifyDeduction(deduction, generalContext, specificContext) {
    let deductionUnifies = false;

    const context = specificContext,  ///
          lastStatement = this.getLastStatement(),
          deductionString = deduction.getString(),
          lastStatementString = lastStatement.getString();

    context.trace(`Unifying the '${deductionString}' deduction with the '${lastStatementString}' last statement...`)

    const deductionContext = deduction.getContext(),
          deductionStatement = deduction.getStatement();

    specificContext = deductionContext;  ///

    join((specificContext) => {
      reconcile((specificContext) => {
        const deductionStatementUnifies = lastStatement.unifyStatement(deductionStatement, generalContext, specificContext);

        if (deductionStatementUnifies) {
          specificContext.commit(context);

          deductionUnifies = true;
        }
      }, specificContext);
    }, specificContext, context);

    if (deductionUnifies) {
      context.debug(`...unified the '${deductionString}' deduction with the '${lastStatementString}' last statement.`)
    }

    return deductionUnifies;
  }

  unifySupposition(supposition, index, generalContext, specificContext) {
    let suppositionUnifies = false;

    const context = specificContext,  ///
          supposedStatement = this.getSupposedStatement(index),
          suppositionString = supposition.getString(),
          supposedStatementString = supposedStatement.getString();

    context.trace(`Unifying the '${suppositionString}' supposition with the '${supposedStatementString}' supposed statement...`)

    const suppositionContext = supposition.getContext(),
          suppositionStatement = supposition.getStatement();

    specificContext = suppositionContext;  ///

    join((specificContext) => {
      reconcile((specificContext) => {
        const suppositionStatementUnifies = supposedStatement.unifyStatement(suppositionStatement, generalContext, specificContext);

        if (suppositionStatementUnifies) {
          specificContext.commit(context);

          suppositionUnifies = true;
        }
      }, specificContext);
    }, specificContext, context);

    if (suppositionUnifies) {
      context.debug(`...unified the '${suppositionString}' supposition with the '${supposedStatementString}' supposed statement.`)
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

  unifyTopLevelMetaAssertion(topLevelMetaAssertion, generalContext, specificContext) {
    let topLevelMetaAssertionUnifies = false;

    const context = specificContext,  ///
          subproofAssertionString = this.getString(),  ///
          topLevelMetaAssertionString = topLevelMetaAssertion.getString();

    context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${subproofAssertionString}' subproof assertion...`);

    reconcile((specificContext) => {
      const deduction = topLevelMetaAssertion.getDeduction(),
            deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);

      if (deductionUnifies) {
        const suppositions = topLevelMetaAssertion.getSuppositions(),
              suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);

        if (suppositionsUnify) {
          specificContext.commit();

          topLevelMetaAssertionUnifies = true;
        }
      }
    }, specificContext);

    if (topLevelMetaAssertionUnifies) {
      context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${subproofAssertionString}' subproof assertion.`);
    }

    return topLevelMetaAssertionUnifies;
  }

  static name = "SubproofAssertion";

  static fromJSON(json, context) {
    let subproorAssertion = null;

    const { name } = json;

    if (this.name === name) {
      subproorAssertion = instantiate((context) => {
        const { string } = json,
              subproofAssertionNode = instantiateSubproofAssertion(string, context),
              statements = statementsFromSubproofAssertionNode(subproofAssertionNode, context),
              node = subproofAssertionNode; ///

        context = null;

        const subproorAssertion = new SubproofAssertion(context, string, node, statements);

        return subproorAssertion;
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
