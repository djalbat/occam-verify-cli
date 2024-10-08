"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

import { isAssertionNegated } from "../../utilities/assertion";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const termVariableNodeQuery = nodeQuery("/containedAssertion/term/variable!"),
      frameMetavariableNodeQuery = nodeQuery("/containedAssertion/frame/metavariable!"),
      statementVariableNodesQuery = nodesQuery("/containedAssertion/statement//variable"),
      statementMetavariableNodesQuery = nodesQuery("/containedAssertion/statement//metavariable");

const verifyContainedAssertionFunctions = [
  verifyDerivedContainedAssertion,
  verifyStatedContainedAssertion
];

export default function verifyContainedAssertion(containedAssertionNode, assignments, stated, localContext) {
  let containedAssertionVerified = false;

  const containedAssertionString = localContext.nodeAsString(containedAssertionNode),
        savedStated = stated; ///

  localContext.trace(`Verifying the '${containedAssertionString}' contained assertion...`, containedAssertionNode);

  assignments = null; ///

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
          frameMetavariableNode = frameMetavariableNodeQuery(containedAssertionNode),
          termVariableNode = termVariableNodeQuery(containedAssertionNode),
          negated = assertionNegated; ///

    if (false) {
      ///
    } else if (frameMetavariableNode !== null) {
      const statementMetavariableNodes = statementMetavariableNodesQuery(containedAssertionNode),
            frameMetavariableNodeMatchesStatementMetavariableNode = statementMetavariableNodes.some((statementMetavariableNode) => {
              const frameMetavariableNodeMatchesStatementMetavariableNode = frameMetavariableNode.match(statementMetavariableNode);

              if (frameMetavariableNodeMatchesStatementMetavariableNode) {
                return true;
              }
            });

      if (!negated) {
        if (frameMetavariableNodeMatchesStatementMetavariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!frameMetavariableNodeMatchesStatementMetavariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }
    } else if (termVariableNode !== null) {
      const statementVariableNodes = statementVariableNodesQuery(containedAssertionNode),
            termVariableNodeMatchesStatementVariableNode = statementVariableNodes.some((statementVariableNode) => {
              const termVariableNodeMatchesStatementVariableNode = termVariableNode.match(statementVariableNode);

              if (termVariableNodeMatchesStatementVariableNode) {
                return true;
              }
            });

      if (!negated) {
        if (termVariableNodeMatchesStatementVariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!termVariableNodeMatchesStatementVariableNode) {
          derivedContainedAssertionVerified = true;
        }
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
