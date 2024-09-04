"use strict";

import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { isStatementNegated } from "../utilities/verify";
import { nodeQuery, nodesQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/statement/term!"),
      statementTermNodesQuery = nodesQuery("/statement/metaArgument/statement//term");

export default function verifyContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let statementVerifiedAsContainedAssertion;

  const statementContainedAssertion = isStatementContainedAssertion(containedAssertionNode);

  if (statementContainedAssertion) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.trace(`Verifying the '${containedAssertionString}' statement as a contained assertion...`, containedAssertionNode);

    const statementFunctions = [
      verifyStatementAsDerivedContainedAssertion,
      verifyStatementAsStatedContainedAssertion
    ];

    statementVerifiedAsContainedAssertion = statementFunctions.some((statementFunction) => {
      const statementVerifiedAsContainedAssertion = statementFunction(containedAssertionNode, assignments, derived, localContext);

      if (statementVerifiedAsContainedAssertion) {
        return true;
      }
    });

    if (statementVerifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${containedAssertionString}' statement as a contained assertion.`, containedAssertionNode);
    }
  }

  return statementVerifiedAsContainedAssertion;
}

function verifyStatementAsDerivedContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let statementVerifiedAsDefinedContainedAssertion = false;

  if (derived) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.trace(`Verifying the '${containedAssertionString}' derived statement as a contained assertion...`, containedAssertionNode);

    const statementNegated = isStatementNegated(containedAssertionNode),
          termNode = termNodeQuery(containedAssertionNode),
          negated = statementNegated, ///
          statementTermNodes = statementTermNodesQuery(containedAssertionNode),
          termNodeMatchesMetaArgumentVariableNode = statementTermNodes.some((statementTermNode) => {
            const termNodeMatchesMetaArgumentVariableNode = termNode.match(statementTermNode);

            if (termNodeMatchesMetaArgumentVariableNode) {
              return true;
            }
          });

    if (!negated) {
      if (termNodeMatchesMetaArgumentVariableNode) {
        statementVerifiedAsDefinedContainedAssertion = true;
      }
    }

    if (negated) {
      if (!termNodeMatchesMetaArgumentVariableNode) {
        statementVerifiedAsDefinedContainedAssertion = true;
      }
    }

    if (statementVerifiedAsDefinedContainedAssertion) {
      localContext.debug(`...verified the '${containedAssertionString}' derived statement as a contained assertion.`, containedAssertionNode);
    }
  }

  return statementVerifiedAsDefinedContainedAssertion;
}

function verifyStatementAsStatedContainedAssertion(containedAssertionNode, assignments, derived, localContext) {
  let statementVerifiedAsStatedContainedAssertion = false;

  if (!derived) {
    const containedAssertionString = localContext.nodeAsString(containedAssertionNode);

    localContext.trace(`Verifying the '${containedAssertionString}' stated statement as a contained assertion...`, containedAssertionNode);

    const intrinsicLevel = localContext.isIntrinsicLevel();

    if (intrinsicLevel) {
      localContext.debug(`The '${containedAssertionString}' stated statement as a contained assertion cannot be verified at intrinsic level.`, containedAssertionNode);
    } else {
      const nonTerminalNode = containedAssertionNode, ///
            nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      statementVerifiedAsStatedContainedAssertion = nonTerminalNodeVerified; ///
    }

    if (statementVerifiedAsStatedContainedAssertion) {
      localContext.debug(`...verified the '${containedAssertionString}' stated statement as a contained assertion.`, containedAssertionNode);
    }
  }

  return statementVerifiedAsStatedContainedAssertion;
}
