"use strict";

import statementAsCombinatorNodeVerifier from "../verifier/node/statementAsCombinator";

export default function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' statement as a combinator....`, statementNode);

  const nonTerminalNode = statementNode, ///
        nonTerminalNodeVerified = statementAsCombinatorNodeVerifier.verifyNonTerminalNode(nonTerminalNode, fileContext);

  statementVerifiedAsCombinator = nonTerminalNodeVerified;  ///

  if (statementVerifiedAsCombinator) {
    fileContext.debug(`...verified the '${statementString}' statement as a combinator.`, statementNode);
  }

  return statementVerifiedAsCombinator;
}
