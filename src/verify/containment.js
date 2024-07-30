"use strict";

import { third } from "../utilities/array";
import { CONTAINED } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const statementVariableNodesQuery = nodesQuery("/statement//variable"),
      containmentVariableNodeQuery = nodeQuery("/containment/argument/term/variable!");

export default function verifyContainment(containmentNode, statementNode) {
  let containmentVerified = false;

  const contained = containedFromContainmendNode(containmentNode),
        statementVariableNodes = statementVariableNodesQuery(statementNode),
        containmentVariableNode = containmentVariableNodeQuery(containmentNode),
        containmentVariableNodeMatchesStatementVariableNode = statementVariableNodes.some((statementVariableNode) => {
          const containmentVariableNodeMatchesStatementVariableNode = containmentVariableNode.match(statementVariableNode);

          if (containmentVariableNodeMatchesStatementVariableNode) {
            return true;
          }
        });

  if (contained === containmentVariableNodeMatchesStatementVariableNode) {
    containmentVerified = true;
  }

  return containmentVerified;
}

function containedFromContainmendNode(containmentNode) {
  const childNodes = containmentNode.getChildNodes(),
        thirdChildNode = third(childNodes),
        terminalNode = thirdChildNode,  ///
        content = terminalNode.getContent(),
        contained = (content === CONTAINED);

  return contained;
}
