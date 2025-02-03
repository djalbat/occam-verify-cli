"use strict";

import { nodeQuery, nodesQuery } from "./query";
import { nodeAsString, nodesAsString } from "./string";

const lastStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/step[-1]/statement"),
      suppositionStatementNodesQuery = nodesQuery("/subproof/supposition/statement");

export function subproofStringFromSubproofNode(subproofNode, fileContext) {
  const tokens = fileContext.getTokens(),
        suppositionStatementNodes = suppositionStatementNodesQuery(subproofNode),
        lastStepStatementNode = lastStepStatementNodeQuery(subproofNode),
        suppositionStatementsString = nodesAsString(suppositionStatementNodes, tokens),
        lastStepStatementString = nodeAsString(lastStepStatementNode, tokens),
        subproofString = `[${suppositionStatementsString}]...${lastStepStatementString}`;

  return subproofString;
}
