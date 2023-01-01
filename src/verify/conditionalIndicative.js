"use strict";

import verifyUnqualifiedStatement from "../verify/statement/unqualified";

import { nodesQuery } from "../utilities/query";

const unqualifiedStatementNodesQuery = nodesQuery("/conditionalIndicative/unqualifiedStatement");

export default function verifyConditionalIndicative(conditionalIndicativeNode, proofContext) {
  let conditionalIndicativeVerified;

  proofContext.begin(conditionalIndicativeNode);

  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(conditionalIndicativeNode);

  conditionalIndicativeVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
    const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext);

    if (unqualifiedStatementVerified) {
      return true;
    }
  });

  conditionalIndicativeVerified ?
    proofContext.complete(conditionalIndicativeNode) :
      proofContext.halt(conditionalIndicativeNode);

  return conditionalIndicativeVerified;
}
