"use strict";

import verifyTerm from "./term";
import metaLevelNodeVerifier from "../verifier/node/metaLevel";

import { first } from "../utilities/array";
import { DEFINED } from "../constants";
import { nodeQuery, nodesQuery } from "../utilities/query";
import { isMetastatementNegated } from "../utilities/verify";

const termNodeQuery = nodeQuery("/metastatement/term!"),
      variableNodeQuery = nodeQuery("/metastatement/term/variable!"),
      operatorTerminalNodesQuery = nodesQuery("/metastatement/@operator");

export default function verifyMetastatementAsDefinedAssertion(metastatementNode, assignments, derived, localContext) {
  let metastatementVerifiedAsDefinedAssertion = false;

  const metastatementDefinedAssertion = isMetastatementDefinedAssertion(metastatementNode);

  if (metastatementDefinedAssertion) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the '${metastatementString}' metastatement as a defined assertion...`, metastatementNode);

    const definedAssertionFunctions = [
      verifyDerivedMetastatementAsDefinedAssertion,
      verifyStatedMetastatementAsDefinedAssertion
    ];

    metastatementVerifiedAsDefinedAssertion = definedAssertionFunctions.some((definedAssertionFunction) => {
      const metastatementVerifiedAsDefinedAssertion = definedAssertionFunction(metastatementNode, assignments, derived, localContext);

      if (metastatementVerifiedAsDefinedAssertion) {
        return true;
      }
    });

    if (metastatementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the '${metastatementString}' metastatement as a defined assertion.`, metastatementNode);
    }
  }

  return metastatementVerifiedAsDefinedAssertion;
}

function verifyDerivedMetastatementAsDefinedAssertion(metastatementNode, assignments, derived, localContext) {
  let derivedMetastatementVerifiedAsDefeindAssertion = false;

  if (derived) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the derived '${metastatementString}' metastatement as a defined assertion...`, metastatementNode);

    const metastatementNegated = isMetastatementNegated(metastatementNode),
          variableNode = variableNodeQuery(metastatementNode),
          termNode = termNodeQuery(metastatementNode);

    if (false) {
      ///
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode);

      if (variable !== null) {
        const variableDefined = localContext.isVariableDefined(variable);

        if (!metastatementNegated) {
          if (variableDefined) {
            derivedMetastatementVerifiedAsDefeindAssertion = true;
          }
        }

        if (metastatementNegated) {
          if (!variableDefined) {
            derivedMetastatementVerifiedAsDefeindAssertion = true;
          }
        }
      }
    } else if (termNode !== null) {
      const terms = [],
            termVerified = verifyTerm(termNode, terms, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      if (termVerified) {
        const firstTerm = first(terms),
              term = firstTerm, ///
              termGrounded = localContext.isTermGrounded(term);

        if (!metastatementNegated) {
          if (termGrounded) {
            derivedMetastatementVerifiedAsDefeindAssertion = true;
          }
        }

        if (metastatementNegated) {
          if (!termGrounded) {
            derivedMetastatementVerifiedAsDefeindAssertion = true;
          }
        }
      }
    }

    if (derivedMetastatementVerifiedAsDefeindAssertion) {
      localContext.debug(`...verified the derived '${metastatementString}' metastatement as a defined assertion.`, metastatementNode);
    }
  }

  return derivedMetastatementVerifiedAsDefeindAssertion;
}

function verifyStatedMetastatementAsDefinedAssertion(metastatementNode, assignments, derived, localContext) {
  let statedMetastatementVerifiedAsDefinedAssertion = false;

  if (!derived) {
    const metastatementString = localContext.nodeAsString(metastatementNode);

    localContext.trace(`Verifying the stated '${metastatementString}' metastatement as a defined assertion...`, metastatementNode);

    const intrinsicLevel = localContext.isIntrinsicLevel();

    if (intrinsicLevel) {
      localContext.debug(`The stated '${metastatementString}' metastatement as a defined assertion cannot be verified at intrinsic level.`, metastatementNode);
    } else {
      const nonTerminalNode = metastatementNode, ///
            nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
              const verifiedAhead = true;

              return verifiedAhead;
            });

      statedMetastatementVerifiedAsDefinedAssertion = nonTerminalNodeVerified; ///
    }

    if (statedMetastatementVerifiedAsDefinedAssertion) {
      localContext.debug(`...verified the stated '${metastatementString}' metastatement as a defined assertion.`, metastatementNode);
    }
  }

  return statedMetastatementVerifiedAsDefinedAssertion;
}

export function isMetastatementDefinedAssertion(metastatementNode) {
  const operatorTerminalNodes = operatorTerminalNodesQuery(metastatementNode),
        metastatementDefinedAssertion = operatorTerminalNodes.some((operatorTerminalNode) => {
          const content = operatorTerminalNode.getContent(),
                contentDefined = (content === DEFINED);

          if (contentDefined) {
            return true;
          }
        });

  return metastatementDefinedAssertion;
}
