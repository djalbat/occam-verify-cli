"use strict";

import { second } from "../utilities/array";
import { CONTAINED } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/term/variable!"),
      metaArgumentTermNodesQuery = nodesQuery("/metaArgument//term"),
      metastatementVariableNodesQuery = nodesQuery("/metastatement//variable");

export default function verifyContainment(termNode, containmentNode, metastatementNode, localContext) {
  let containmentVerified = false;

  const contained = containedFromContainmentNode(containmentNode),
        variableNode = variableNodeQuery(termNode);

  if (false) {
    ///
  } else if (variableNode !== null) {
    const metaArgumentVariableNodes = metastatementVariableNodesQuery(metastatementNode),
          variableNodeMatchesMetaArgumentVariableNode = metaArgumentVariableNodes.some((metaArgumentVariableNode) => {
            const variableNodeMatchesMetaArgumentVariableNode = variableNode.match(metaArgumentVariableNode);

            if (variableNodeMatchesMetaArgumentVariableNode) {
              return true;
            }
          });

    if (contained) {
      if (variableNodeMatchesMetaArgumentVariableNode) {
        containmentVerified = true;
      }
    }

    if (!contained) {
      if (!variableNodeMatchesMetaArgumentVariableNode) {
        containmentVerified = true;
      }
    }
  } else if (termNode !== null) {
    const metaArgumentTermNodes = metaArgumentTermNodesQuery(metastatementNode),
          termNodeMatchesMetaArgumentTermNode = metaArgumentTermNodes.some((metaArgumentTermNode) => {
            const termNodeMatchesMetaArgumentTermNode = termNode.match(metaArgumentTermNode);

            if (termNodeMatchesMetaArgumentTermNode) {
              return true;
            }
          });

    if (contained) {
      if (termNodeMatchesMetaArgumentTermNode) {
        containmentVerified = true;
      }
    }

    if (!contained) {
      if (!termNodeMatchesMetaArgumentTermNode) {
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
