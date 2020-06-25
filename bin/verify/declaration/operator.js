"use strict";

const Error = require("../../error"),
      queries = require("../../miscellaneous/queries"),
      Operator = require("../../operator"),
      verifyStatementAsOperator = require("../../verify/statementAsOperator");

const { statementNodeQuery } = queries;

function verifyOperatorDeclaration(operatorDeclarationNode, context, ruleMap) {
  const statementNode = statementNodeQuery(operatorDeclarationNode),
        verified = verifyStatementAsOperator(statementNode, context, ruleMap);

  if (!verified) {
    const node = statementNode,  ///
          statementString = nodeAsString(statementNode),
          message = `The operator '${statementString}' cannot be verified.`;

    throw new Error(node, message);
  }

  const operator = Operator.fromStatementNode(statementNode);

  context.addOperator(operator);
}

module.exports = verifyOperatorDeclaration;
