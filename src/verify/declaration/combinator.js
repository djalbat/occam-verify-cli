"use strict";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default function verifyCombinatorDeclaration(combinatorDeclarationNode, context = this) {
  let combinatorDeclarationVerified;

  context.begin(combinatorDeclarationNode);

  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementVerifiedAsCombinator = context.verifyStatementAsCombinator(statementNode);

  combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  combinatorDeclarationVerified ?
    context.complete(combinatorDeclarationNode) :
      context.halt(combinatorDeclarationNode);

  return combinatorDeclarationVerified;
}
