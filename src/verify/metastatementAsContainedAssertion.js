"use strict";

import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { CONTAINED } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { isMetastatementNegated } from "../utilities/verify";

const termNodeQuery = nodeQuery("/metastatement/term!"),
      operatorTerminalNodesQuery = nodesQuery("/metastatement/@operator"),
      metastatementTermNodesQuery = nodesQuery("/metastatement/metastatement//term");

export default function verifyMetastatementAsContainedAssertion(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsContainedAssertion;

  const metastatementContainedAssertion = isMetastatementContainedAssertion(metastatementNode);

  if (metastatementContainedAssertion) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the '${metastatementString}' metastatement as a contained assertion...`, metastatementNode);

    const metastatementFunctions = [
      verifyMetastatementAsDerivedContainedAssertion,
      verifyMetastatementAsStatedContainedAssertion
    ];

    metastatementVerifiedAsContainedAssertion = metastatementFunctions.some((metastatementFunction) => {
      const metastatementVerifiedAsContainedAssertion = metastatementFunction(metastatementNode, assignments, derived, localContext);

      if (metastatementVerifiedAsContainedAssertion) {
        return true;
      }
    });

    if (metastatementVerifiedAsContainedAssertion) {
      localContext.debug(`...verified the '${metastatementString}' metastatement as a contained assertion.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsContainedAssertion;
}

function verifyMetastatementAsDerivedContainedAssertion(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsDefinedContainedAssertion = false;

  if (derived) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the derived '${metastatementString}' metastatement as a contained assertion...`, metastatementNode);

    const metastatementNegated = isMetastatementNegated(metastatementNode),
          negated = metastatementNegated,
          termNode = termNodeQuery(metastatementNode),
          metastatementTermNodes = metastatementTermNodesQuery(metastatementNode),
          termNodeMatchesMetaArgumentTermNode = metastatementTermNodes.some((metastatementTermNode) => {
            const termNodeMatchesMetaArgumentTermNode = termNode.match(metastatementTermNode);

            if (termNodeMatchesMetaArgumentTermNode) {
              return true;
            }
          });

    if (!negated) {
      if (termNodeMatchesMetaArgumentTermNode) {
        metastatementVerifiedAsDefinedContainedAssertion = true;
      }
    }

    if (negated) {
      if (!termNodeMatchesMetaArgumentTermNode) {
        metastatementVerifiedAsDefinedContainedAssertion = true;
      }
    }

    if (metastatementVerifiedAsDefinedContainedAssertion) {
      localContext.debug(`...verified the derived '${metastatementString}' metastatement as a contained assertion.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsDefinedContainedAssertion;
}

function verifyMetastatementAsStatedContainedAssertion(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsStatedContainedAssertion = false;

  if (!derived) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the stated '${metastatementString}' metastatement as a contained assertion...`, metastatementNode);

    const intrinsicLevel = localContext.isIntrinsicLevel();

    if (intrinsicLevel) {
      localContext.debug(`The stated '${metastatementString}' metastatement as a contained assertion cannot be verified at intrinsic level.`, metastatementNode);
    } else {
      const nonTerminalNode = metastatementNode, ///
            nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      metastatementVerifiedAsStatedContainedAssertion = nonTerminalNodeVerified; ///
    }

    if (metastatementVerifiedAsStatedContainedAssertion) {
      localContext.debug(`...verified the stated '${metastatementString}' metastatement as a contained assertion.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsStatedContainedAssertion;
}

export function isMetastatementContainedAssertion(metastatementNode) {
  const operatorTerminalNodes = operatorTerminalNodesQuery(metastatementNode),
        metastatementContainedAssertion = operatorTerminalNodes.some((operatorTerminalNode) => {
          const content = operatorTerminalNode.getContent(),
                contentContained = (content === CONTAINED);

          if (contentContained) {
            return true;
          }
        });

  return metastatementContainedAssertion;
}
