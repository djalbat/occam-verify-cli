"use strict";

import verifyStatementAsCombinator from "../../verify/statementAsCombinator";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default function verifyCombinatorDeclaration(combinatorDeclarationNode, context) {
  let combinatorDeclarationVerified;

  context.begin(combinatorDeclarationNode);

  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementVerifiedAsCombinator = verifyStatementAsCombinator(statementNode, context);

  combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  combinatorDeclarationVerified ?
    context.complete(combinatorDeclarationNode) :
      context.halt(combinatorDeclarationNode);

  return combinatorDeclarationVerified;
}
