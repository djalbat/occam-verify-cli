"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

import { isAssertionNegated } from "../../utilities/assertion";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/containedAssertion/term!"),
      statementTermNodesQuery = nodesQuery("/containedAssertion/statement//term");

const verifyContainedAssertionFunctions = [
  verifyDerivedContainedAssertion,
  verifyStatedContainedAssertion
];

export default function verifyContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
  let containedAssertionVerified = false;

  const containedAssertionString = localContext.nodeAsString(containedAssertionNode),
        savedStated = stated; ///

  localContext.trace(`Verifying the '${containedAssertionString}' contained assertion...`, containedAssertionNode);

  assignments = []; ///

  stated = true;  ///

  const verified = metaLevelVerifier.verify(containedAssertionNode, assignments, stated, localContext);

  stated = savedStated; ///

  if (verified) {
    containedAssertionVerified = verifyContainedAssertionFunctions.some((verifyContainedAssertionFunction) => {
      const containedAssertionVerified = verifyContainedAssertionFunction(containedAssertionNode, assignments, stated, localContext);

      if (containedAssertionVerified) {
        return true;
      }
    });
  }

  if (containedAssertionVerified) {
    localContext.debug(`...verified the '${containedAssertionString}' contained assertion.`, containedAssertionNode);
  }

  return containedAssertionVerified;
}

function verifyDerivedContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
  let derivedContainedAssertionVerified = false;

  if (!stated) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.trace(`Verifying the '${containedAssertionString}' derived contained assertion...`, containedAssertionNode);

    const assertionNegated = isAssertionNegated(containedAssertionNode),
          termNode = termNodeQuery(containedAssertionNode),
          negated = assertionNegated, ///
          statementTermNodes = statementTermNodesQuery(containedAssertionNode),
          termNodeMatchesAssertionTermNode = statementTermNodes.some((statementTermNode) => {
            const termNodeMatchesAssertionTermNode = termNode.match(statementTermNode);

            if (termNodeMatchesAssertionTermNode) {
              return true;
            }
          });

    if (!negated) {
      if (termNodeMatchesAssertionTermNode) {
        derivedContainedAssertionVerified = true;
      }
    }

    if (negated) {
      if (!termNodeMatchesAssertionTermNode) {
        derivedContainedAssertionVerified = true;
      }
    }

    if (derivedContainedAssertionVerified) {
      localContext.debug(`...verified the '${containedAssertionString}' derived contained assertion.`, containedAssertionNode);
    }
  }

  return derivedContainedAssertionVerified;
}

function verifyStatedContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
  let statedContainedAssertionVerified;

  if (stated) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.trace(`Verifying the '${containedAssertionString}' stated contained assertion...`, containedAssertionNode);

    statedContainedAssertionVerified = true;

    if (statedContainedAssertionVerified) {
      localContext.debug(`...verified the '${containedAssertionString}' stated contained assertion.`, containedAssertionNode);
    }
  }

  return statedContainedAssertionVerified;
}
