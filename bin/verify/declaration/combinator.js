"use strict";

const verifyStatementAsCombinator = require("../../verify/statementAsCombinator");

const { nodeQuery } = require("../../utilities/query");

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

function verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext) {
  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementVerifiedAsCombinator = verifyStatementAsCombinator(statementNode, fileContext),
        combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  return combinatorDeclarationVerified;
}

module.exports = verifyCombinatorDeclaration;
