"use strict";

import { nodeQuery, nodesQuery } from "./query";
import { nodeAsString, nodesAsString } from "./string";

const suppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement/statement"),
      lastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement");

export function subproofStringFromSubproofNode(subproofNode, fileContext) {
  let subproofString = null;

  const tokens = fileContext.getTokens(),
        suppositionStatementNodes = suppositionStatementNodesQuery(subproofNode),
        lastProofStepStatementNode = lastProofStepStatementNodeQuery(subproofNode),
        suppositionStatementNodesLength = suppositionStatementNodes.length;

  if ((lastProofStepStatementNode !== null) && (suppositionStatementNodesLength)) {
    const suppositionStatementsString = nodesAsString(suppositionStatementNodes, tokens),
          lastProofStepStatementString = nodeAsString(lastProofStepStatementNode, tokens);

    subproofString = `[${suppositionStatementsString}]...${lastProofStepStatementString}`;
  }

  return subproofString;
}
