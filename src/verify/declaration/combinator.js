"use strict";

import verifyStatementAsCombinator from "../../verify/statementAsCombinator";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default function verifyCombinatorDeclaration(combinatorDeclarationNode, context) {
  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementVerifiedAsCombinator = verifyStatementAsCombinator(statementNode, context),
        combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  return combinatorDeclarationVerified;
}
