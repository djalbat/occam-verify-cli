"use strict";

import verifyUnqualifiedStatement from "../verify/metastatement/unqualified";

import { nodesQuery } from "../utilities/query";

const unqualifiedStatementNodesQuery = nodesQuery("/indicativeConditional/unqualifiedStatement");

export default function verifyIndicativeConditional(indicativeConditionalNode, statementNodes, context) {
  const unqualifiedStatementNodes = unqualifiedStatementNodesQuery(indicativeConditionalNode),
        indicativeConditionalVerified = unqualifiedStatementNodes.every((unqualifiedStatementNode) => {
          const unqualifiedStatementVerified = verifyUnqualifiedStatement(unqualifiedStatementNode, context);

          if (unqualifiedStatementVerified) {
            return true;
          }
        });

  return indicativeConditionalVerified;
}
