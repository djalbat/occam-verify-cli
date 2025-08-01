"use strict";

import { nodeAsString, nodesAsString } from "./string";

export function subproofStringFromSubproofNode(subproofNode, fileContext) {
  const tokens = fileContext.getTokens(),
        suppositionStatementNodes = suppositionStatementNodesFromSubproofNode(subproofNode),
        lastStepStatementNode = lastStepStatementNodeFromSubproofNode(subproofNode),
        suppositionStatementsString = nodesAsString(suppositionStatementNodes, tokens),
        lastStepStatementString = nodeAsString(lastStepStatementNode, tokens),
        subproofString = `[${suppositionStatementsString}]...${lastStepStatementString}`;

  return subproofString;
}

function lastStepStatementNodeFromSubproofNode(subproofNode) {
  const lastStepNode = subproofNode.getLastStepNode(),
        lastStepNodeStatementNode = lastStepNode.getStatementNode(),
        lastStepStatementNode = lastStepNodeStatementNode;  ///

  return lastStepStatementNode;
}

function suppositionStatementNodesFromSubproofNode(subproofNode) {
  const suppositionNodes = subproofNode.getSuppositionNodes(),
        suppositionNodeStatementNodes = suppositionNodes.map((suppositionNode) => {
          const suppositionNodeStatementNode = suppositionNode.getStatementNode();

          return suppositionNodeStatementNode;
        }),
        suppositionStatementNodes = suppositionNodeStatementNodes;  ///

  return suppositionStatementNodes;
}
