"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

import { isAssertionNegated } from "../../utilities/assertion";
import { nodeQuery, nodesQuery } from "../../utilities/query";

const variableNodeQuery = nodeQuery("/containedAssertion/term/variable!"),
      metavariableNodeQuery = nodeQuery("/containedAssertion/statement[0]/metavariable"),
      statementVariableNodesQuery = nodesQuery("/containedAssertion/statement[-1]//variable"),
      statementMetavariableNodesQuery = nodesQuery("/containedAssertion/statement[-1]//metavariable");

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
          metavariableNode = metavariableNodeQuery(containedAssertionNode),
          variableNode = variableNodeQuery(containedAssertionNode),
          negated = assertionNegated; ///

    if (false) {
      ///
    } else if (metavariableNode !== null) {
      const statementMetavariableNodes = statementMetavariableNodesQuery(containedAssertionNode),
            variableNodeMatchesStatementMetavariableNode = statementMetavariableNodes.some((statementMetavariableNode) => {
              const variableNodeMatchesStatementMetavariableNode = metavariableNode.match(statementMetavariableNode);

              if (variableNodeMatchesStatementMetavariableNode) {
                return true;
              }
            });

      if (!negated) {
        if (variableNodeMatchesStatementMetavariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!variableNodeMatchesStatementMetavariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }
    } else if (variableNode !== null) {
      const statementVariableNodes = statementVariableNodesQuery(containedAssertionNode),
            variableNodeMatchesStatementVariableNode = statementVariableNodes.some((statementVariableNode) => {
              const variableNodeMatchesStatementVariableNode = variableNode.match(statementVariableNode);

              if (variableNodeMatchesStatementVariableNode) {
                return true;
              }
            });

      if (!negated) {
        if (variableNodeMatchesStatementVariableNode) {
          derivedContainedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!variableNodeMatchesStatementVariableNode) {
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
