"use strict";

const queries = require("../miscellaneous/queries"),
      verifyQualifiedStatement = require("../verify/qualifiedStatement"),
      verifyUnqualifiedStatement = require("../verify/unqualifiedStatement");

const { qualifiedStatementNodeQuery, unqualifiedStatementNodeQuery } = queries;

function verifyIndicativeConditional(indicativeConditionalNode, fileContext) {
  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(indicativeConditionalNode);

  verifyUnqualifiedStatement(unqualifiedStatementNode, fileContext);

  const qualifiedStatementNode = qualifiedStatementNodeQuery(indicativeConditionalNode);

  verifyQualifiedStatement(qualifiedStatementNode, fileContext);
}

module.exports = verifyIndicativeConditional;
