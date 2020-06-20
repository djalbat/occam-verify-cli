"use strict";

const queries = require("../miscellaneous/queries"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { qualifiedStatementNodeQuery, unqualifiedStatementNodeQuery } = queries;

function verifyIndicativeConditional(indicativeConditionalNode, context, ruleMap) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(indicativeConditionalNode);

  verifyUnqualifiedStatement(unqualifiedStatementNode, context, ruleMap);

  const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode);

  verifyQualifiedStatement(qualifiedStatementNode, context, ruleMap);
}

module.exports = verifyIndicativeConditional;
