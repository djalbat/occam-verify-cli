"use strict";

import Combinator from "../combinator";
import statementAsCombinatorNodeVerifier from "../verifier/node/statementAsCombinator";

export default function verifyStatementAsCombinator(statementNode, fileContext) {
  let statementVerifiedAsCombinator = false;

  const statementString = fileContext.nodeAsString(statementNode);

  fileContext.trace(`Verifying the '${statementString}' statement as a combinator....`, statementNode);

  const nonTerminalNode = statementNode, ///
        childNodes = nonTerminalNode.getChildNodes(),
        childNodesVerified = statementAsCombinatorNodeVerifier.verifyChildNodes(childNodes, fileContext);

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
