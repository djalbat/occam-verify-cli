"use strict";

import verifyStatementAsCombinator from "../../verify/statementAsCombinator";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default function verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext) {
  let combinatorDeclarationVerified;

  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementVerifiedAsCombinator = verifyStatementAsCombinator(statementNode, fileContext);

  combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  return combinatorDeclarationVerified;
}
