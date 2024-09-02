"use strict";

import Conclusion from "../conclusion";
import verifyUnqualifiedStatement from "./statement/unqualified";
import verifyUnqualifiedMetastatement from "../verify/metastatement/unqualified";

import { nodeQuery } from "../utilities/query";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!"),
      metastatementNodeQuery = nodeQuery("/unqualifiedMetastatement/metastatement!"),
      unqualifiedStatementNodeQuery = nodeQuery("/conclusion/unqualifiedStatement!"),
      unqualifiedMetastatementNodeQuery = nodeQuery("/conclusion/unqualifiedMetastatement!");

export default function verifyConclusion(conclusionNode, conclusions, localContext) {
  let conclusionVerified = false;

  const conclusionString = localContext.nodeAsString(conclusionNode);

  localContext.trace(`Verifying the '${conclusionString}' conclusion...`, conclusionNode);

  const unqualifiedStatementNode = unqualifiedStatementNodeQuery(conclusionNode),
        unqualifiedMetastatementNode = unqualifiedMetastatementNodeQuery(conclusionNode);

  if (unqualifiedStatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, assignments, derived, localContext);

    conclusionVerified = unqualifiedStatementVerified; ///
  }

  if (unqualifiedMetastatementNode !== null) {
    const derived = false,
          assignments = [],
          unqualifiedMetastatementVerified = verifyUnqualifiedMetastatement(unqualifiedMetastatementNode, assignments, derived, localContext);

    conclusionVerified = unqualifiedMetastatementVerified; ///
  }

  if (conclusionVerified) {
    let conclusion;

    if (unqualifiedStatementNode !== null) {
      const statementNode = statementNodeQuery(unqualifiedStatementNode);

      conclusion = Conclusion.fromStatementNode(statementNode);
    }

    if (unqualifiedMetastatementNode !== null) {
      const metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode);

      conclusion = Conclusion.fromMetastatementNode(metastatementNode);
    }

    conclusions.push(conclusion);

    localContext.debug(`...verified the '${conclusionString}' conclusion.`, conclusionNode);
  }

  return conclusionVerified;
}
