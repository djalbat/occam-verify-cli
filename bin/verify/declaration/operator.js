"use strict";

const queries = require("../../miscellaneous/queries"),
      Operator = require("../../operator"),
      verifyStatementAsOperator = require("../../verify/statementAsOperator");

const { statementNodeQuery } = queries;

function verifyOperatorDeclaration(operatorDeclarationNode, context, ruleMap) {
  const statementNode = statementNodeQuery(operatorDeclarationNode);

  verifyStatementAsOperator(statementNode, context, ruleMap);

  const operator = Operator.fromStatementNode(statementNode);

  context.addOperator(operator);
}

module.exports = verifyOperatorDeclaration;
