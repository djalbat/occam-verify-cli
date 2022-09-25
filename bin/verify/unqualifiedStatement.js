"use strict";

const verifyStatement = require("../verify/statement");

const { nodeQuery } = require("../utilities/query");

const statementNodeQuery = nodeQuery("/*/statement!");

function verifyUnqualifiedStatement(unqualifiedStatementNode, context) {
  const statementNode = statementNodeQuery(unqualifiedStatementNode),
        statementVerified = verifyStatement(statementNode, context),
        unqualifiedStatementVerified = statementVerified; ///

  return unqualifiedStatementVerified;
}

module.exports = verifyUnqualifiedStatement;
