"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

import { isAssertionNegated } from "../../utilities/verify";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/statement/term!"),
      statementTermNodesQuery = nodesQuery("/statement/metaArgument/statement//term");

export default function verifyContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let containedAssertionVerified;

  const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

  localContext.trace(`Verifying the '${containedAssertionString}' contained assertion...`, containedAssertionNode);

  const verifyContainedAssertionFunctions = [
    verifyDerivedContainedAssertion,
    verifyStatedContainedAssertion
  ];

  containedAssertionVerified = verifyContainedAssertionFunctions.some((verifyContainedAssertionFunction) => {
    const containedAssertionVerified = verifyContainedAssertionFunction(containedAssertionNode, assignments, derived, localContext);

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

    localContext.trace(`Verifying the '${containedAssertionString}' derived contained assertion...`, containedAssertionNode);

    const assertionNegated = isAssertionNegated(containedAssertionNode),
          termNode = termNodeQuery(containedAssertionNode),
          negated = assertionNegated, ///
          statementTermNodes = statementTermNodesQuery(containedAssertionNode),
          termNodeMatchesMetaArgumentVariableNode = statementTermNodes.some((statementTermNode) => {
            const termNodeMatchesMetaArgumentVariableNode = termNode.match(statementTermNode);

            if (termNodeMatchesMetaArgumentVariableNode) {
              return true;
            }
          });

    if (!negated) {
      if (termNodeMatchesMetaArgumentVariableNode) {
        derivedContainedAssertionVerified = true;
      }
    }

    if (negated) {
      if (!termNodeMatchesMetaArgumentVariableNode) {
        derivedContainedAssertionVerified = true;
      }
    }

    if (derivedContainedAssertionVerified) {
      localContext.debug(`...verified the '${containedAssertionString}' derived contained assertion.`, containedAssertionNode);
    }
  }

  return derivedContainedAssertionVerified;
}

function verifyStatedContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let statedContainedAssertionVerified = false;

  if (!derived) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.debug(`The '${containedAssertionString}' stated contained assertion cannot be verified.`, containedAssertionNode);

    const nonTerminalNode = containedAssertionNode, ///
          nonTerminalNodeVerified = metaLevelVerifier.verify(nonTerminalNode, localContext);

    statedContainedAssertionVerified = nonTerminalNodeVerified; ///

    if (statedContainedAssertionVerified) {
      localContext.debug(`...verified the '${containedAssertionString}' stated contained assertion.`, containedAssertionNode);
    }
  }

  return statedContainedAssertionVerified;
}
