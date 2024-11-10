"use strict";

import { nodeQuery, nodesQuery } from "./query";
import { nodeAsString, nodesAsString } from "./string";

const suppositionStatementNodesQuery = nodesQuery("/subproof/supposition/statement"),
      lastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/proofStep[-1]/statement");

export function subproofStringFromSubproofNode(subproofNode, fileContext) {
  const tokens = fileContext.getTokens(),
        suppositionStatementNodes = suppositionStatementNodesQuery(subproofNode),
        lastProofStepStatementNode = lastProofStepStatementNodeQuery(subproofNode),
        suppositionStatementsString = nodesAsString(suppositionStatementNodes, tokens),
        lastProofStepStatementString = nodeAsString(lastProofStepStatementNode, tokens),
        subproofString = `[${suppositionStatementsString}]...${lastProofStepStatementString}`;

  return subproofString;
}
