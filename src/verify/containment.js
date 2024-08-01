"use strict";

import { second } from "../utilities/array";
import { CONTAINED } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const variableNodesQuery = nodesQuery("/metaArgument//variable"),
      containmentVariableNodeQuery = nodeQuery("/argument/term/variable!");

export default function verifyContainment(argumentNode, containmentNode, metaArgumentNode, context) {
  let containmentVerified = false;

  const containmentVariableNode = containmentVariableNodeQuery(argumentNode);

  if (containmentVariableNode !== null) {
    const contained = containedFromContainmentNode(containmentNode),
          variableNodes = variableNodesQuery(metaArgumentNode),
          containmentVariableNodeMatchesStatementVariableNode = variableNodes.some((statementVariableNode) => {
            const containmentVariableNodeMatchesStatementVariableNode = containmentVariableNode.match(statementVariableNode);

            if (containmentVariableNodeMatchesStatementVariableNode) {
              return true;
            }
          });

    if (contained) {
      if (containmentVariableNodeMatchesStatementVariableNode) {
        containmentVerified = true;
      }
    }

    if (!contained) {
      if (!containmentVariableNodeMatchesStatementVariableNode) {
        containmentVerified = true;
      }
    }
  }

  return containmentVerified;
}

function containedFromContainmentNode(containmentNode) {
  const childNodes = containmentNode.getChildNodes(),
        secondChildNode = second(childNodes),
        terminalNode = secondChildNode,  ///
        content = terminalNode.getContent(),
        contained = (content === CONTAINED);

  return contained;
}
