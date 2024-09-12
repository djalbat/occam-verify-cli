"use strict";

import Combinator from "../combinator";
import statementAsCombinatorVerifier from "../verifier/statementAsCombinator";

export default function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' statement as a combinator...`, statementNode);

  statementVerifiedAsCombinator = statementAsCombinatorVerifier.verifyStatement(statementNode, fileContext);

  if (statementVerifiedAsCombinator) {
    const tokens = fileContext.getTokens(),
          combinator = Combinator.fromStatementNodeAndTokens(statementNode, tokens);

    fileContext.addCombinator(combinator);
  }

  if (statementVerifiedAsCombinator) {
    fileContext.debug(`...verified the '${statementString}' statement as a combinator.`, statementNode);
  }

  return statementVerifiedAsCombinator;
}
