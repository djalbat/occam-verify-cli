"use strict";

import Combinator from "../combinator";
import statementAsCombinatorVerifier from "../verifier/statementAsCombinator";

export default function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator = false;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' statement as a combinator....`, statementNode);

  const nonTerminalNode = statementNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = statementAsCombinatorVerifier.verifyChildNodes(childNodes, fileContext, () => {
          const verifiedAhead = true;

          return verifiedAhead;
        });

  if (childNodesVerified) {
    const tokens = fileContext.getTokens(),
          combinator = Combinator.fromStatementNodeAndTokens(statementNode, tokens);

    fileContext.addCombinator(combinator);

    statementVerifiedAsCombinator = true;
  }

  if (statementVerifiedAsCombinator) {
    fileContext.debug(`...verified the '${statementString}' statement as a combinator.`, statementNode);
  }

  return statementVerifiedAsCombinator;
}
