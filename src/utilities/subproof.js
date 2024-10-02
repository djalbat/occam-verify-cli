"use strict";

import { nodeQuery, nodesQuery } from "./query";
import { nodeAsString, nodesAsString } from "./string";

const subproofSuppositionStatementNodesQuery = nodesQuery("/subproof/supposition/unqualifiedStatement/statement!"),
      subproofLastProofStepStatementNodeQuery = nodeQuery("/subproof/subDerivation/lastProofStep/unqualifiedStatement|qualifiedStatement/statement!");

export function subproofStringFromSubproofNode(subproofNode, fileContext) {
  const tokens = fileContext.getTokens(),
        subproofSuppositionStatementNodes = subproofSuppositionStatementNodesQuery(subproofNode),
        subproofLastProofStepStatementNode = subproofLastProofStepStatementNodeQuery(subproofNode),
        subproofSuppositionStatementsString = nodesAsString(subproofSuppositionStatementNodes, tokens),
        subproofLastProofStepStatementString = nodeAsString(subproofLastProofStepStatementNode, tokens),
        subproofString = `[${subproofSuppositionStatementsString}]...${subproofLastProofStepStatementString}`;

  return subproofString;
}
