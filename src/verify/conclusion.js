"use strict";

import Conclusion from "../conclusion";
import verifyStatement from "../verify/statement";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/conclusion/unqualifiedStatement!");

export default function verifyConclusion(conclusionNode, conclusions, localContext) {
  let conclusionVerified = false;

  const conclusionString = localContext.nodeAsString(conclusionNode);

  localContext.trace(`Verifying the '${conclusionString}' conclusion...`, conclusionNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode);

  if (unqualifiedStatementNode !== null) {
    const stated = true,
          assignments = null,
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          statementVerified = verifyStatement(statementNode, assignments, stated, localContext);

    if (statementVerified) {
      const conclusion = Conclusion.fromStatementNode(statementNode);

      conclusions.push(conclusion);

      conclusionVerified = true;
    }
  }

  if (conclusionVerified) {
    localContext.debug(`...verified the '${conclusionString}' conclusion.`, conclusionNode);
  }

  return conclusionVerified;
}
