"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/conclusion/unqualifiedStatement!");

export default function verifyConclusion(conclusionNode, conclusions, localContext) {
  let conclusionVerified = false;

  const conclusionString = localContext.nodeAsString(conclusionNode);

  localContext.trace(`Verifying the '${conclusionString}' conclusion...`, conclusionNode);

  const derived = false,
        assignments = [],
        unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode);

  if (unqualifiedStatementNode !== null) {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    if (unqualifiedStatementVerified) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode),
            conclusion = Conclusion.fromStatementNode(statementNode);

      conclusions.push(conclusion);

      conclusionVerified = true;
    }
  }

  if (conclusionVerified) {
    localContext.debug(`...verified the '${conclusionString}' conclusion.`, conclusionNode);
  }

  return conclusionVerified;
}
