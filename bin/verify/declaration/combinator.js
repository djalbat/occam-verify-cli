"use strict";

const verifyStatementAsCombinator = require("../../verify/statementAsCombinator");

const { nodeQuery } = require("../../utilities/query");

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

function verifyCombinatorDeclaration(combinatorDeclarationNode, context) {
  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementVerifiedAsCombinator = verifyStatementAsCombinator(statementNode, context),
        combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  return combinatorDeclarationVerified;
}

module.exports = verifyCombinatorDeclaration;
