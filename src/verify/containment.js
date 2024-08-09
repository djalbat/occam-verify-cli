"use strict";

import { second } from "../utilities/array";
import { CONTAINED } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      variableNodeQuery = nodeQuery("/argument/term/variable!"),
      metaArgumentTermNodesQuery = nodesQuery("/metaArgument//term"),
      metaArgumentVariableNodesQuery = nodesQuery("/metaArgument//variable");

export default function verifyContainment(argumentNode, containmentNode, metaArgumentNode, context) {
  let containmentVerified = false;

  const contained = containedFromContainmentNode(containmentNode),
        termNode = termNodeQuery(argumentNode),
        variableNode = variableNodeQuery(argumentNode);

  if (false) {
    ///
  } else if (variableNode !== null) {
    const metaArgumentVariableNodes = metaArgumentVariableNodesQuery(metaArgumentNode),
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
    const metaArgumentTermNodes = metaArgumentTermNodesQuery(metaArgumentNode),
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
