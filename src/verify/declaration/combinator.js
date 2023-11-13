"use strict";

import verifyStatementAsCombinator from "../../verify/statementAsCombinator";

import { nodeQuery } from "../../utilities/query";

const statementNodeQuery = nodeQuery("/combinatorDeclaration/statement");

export default function verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext) {
  let combinatorDeclarationVerified;

  const statementNode = statementNodeQuery(combinatorDeclarationNode),
        statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' combinator declaration...`, combinatorDeclarationNode);

  const statementVerifiedAsCombinator = verifyStatementAsCombinator(statementNode, fileContext);

  combinatorDeclarationVerified = statementVerifiedAsCombinator; ///

  if (combinatorDeclarationVerified) {
    fileContext.debug(`...verified the '${statementString}' combinator declaration.`, combinatorDeclarationNode);
  }

  return combinatorDeclarationVerified;
}
