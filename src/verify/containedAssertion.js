"use strict";

import { isAssertionNegated } from "../utilities/verify";
import { nodeQuery, nodesQuery } from "../utilities/query";

const variableNodeQuery = nodeQuery("/containedAssertion/term/variable!"),
      metastatementVariableNodesQuery = nodesQuery("/containedAssertion/statement//variable");

export default function verifyContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let containedAssertionVerified;

  const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

  localContext.trace(`Verifying the '${containedAssertionString}' contained assertion...`, containedAssertionNode);

  const containedAssertionFunctions = [
    verifyDerivedContainedAssertion,
    verifyStatedContainedAssertion
  ];

  containedAssertionVerified = containedAssertionFunctions.some((containedAssertionFunction) => {
    const containedAssertionVerified = containedAssertionFunction(containedAssertionNode, assignments, derived, localContext);

    if (containedAssertionVerified) {
      return true;
    }
  });

  if (containedAssertionVerified) {
    localContext.debug(`...verified the '${containedAssertionString}' contained assertion.`, containedAssertionNode);
  }

  return containedAssertionVerified;
}

function verifyDerivedContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let derivedContainedAssertionVerified = false;

  if (derived) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.trace(`Verifying the derived '${containedAssertionString}' contained assertion...`, containedAssertionNode);

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
          derivedContainedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!variableNodeMatchesMetaArgumentVariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }
    }

    if (derivedContainedAssertionVerified) {
      localContext.debug(`...verified the derived '${containedAssertionString}' contained assertion.`, containedAssertionNode);
    }
  }

  return derivedContainedAssertionVerified;
}

function verifyStatedContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let derivedStatedAssertionVerified = false;

  if (!derived) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.debug(`The stated '${containedAssertionString}' contained assertion cannot be verified.`, containedAssertionNode);
  }

  return derivedStatedAssertionVerified;
}
