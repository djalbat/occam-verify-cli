"use strict";

import { isAssertionNegated } from "../utilities/verify";
import { nodeQuery, nodesQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/containedAssertion/term/variable!"),
      metastatementVariableNodesQuery = nodesQuery("/containedAssertion/metastatement//variable");

export default function verifyContainedAssertion(containedAssertionNode) {
  let containedAssertionVerified = false;

  const containedAssertionNegated = isAssertionNegated(containedAssertionNode),
        variableNode = variableNodeQuery(containedAssertionNode),
        negated = containedAssertionNegated;  ///

  if (false) {
    ///
  } else if (variableNode !== null) {
    const metastatementVariableNodes = metastatementVariableNodesQuery(containedAssertionNode),
          variableNodeMatchesMetaArgumentVariableNode = metastatementVariableNodes.some((metastatementVariableNode) => {
            const variableNodeMatchesMetaArgumentVariableNode = variableNode.match(metastatementVariableNode);

            if (variableNodeMatchesMetaArgumentVariableNode) {
              return true;
            }
          });

    if (!negated) {
      if (variableNodeMatchesMetaArgumentVariableNode) {
        containedAssertionVerified = true;
      }
    }

    if (negated) {
      if (!variableNodeMatchesMetaArgumentVariableNode) {
        containedAssertionVerified = true;
      }
    }
  }

  return containedAssertionVerified;
}
