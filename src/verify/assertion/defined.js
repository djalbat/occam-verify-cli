"use strict";

import verifyTerm from "../../verify/term";
import metaLevelNodeVerifier from "../../verifier/node/metaLevel";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { isAssertionNegated } from "../../utilities/verify";

const termNodeQuery = nodeQuery("/statement/term!"),
      variableNodeQuery = nodeQuery("/statement/term/variable!");

export default function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let definedAssertionVerified;

  const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

  localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`, definedAssertionNode);

  const verifyDefinedAssertionFunctions = [
    verifyDerivedDefinedAssertion,
    verifyStatedDefinedAssertion
  ];

  definedAssertionVerified = verifyDefinedAssertionFunctions.some((verifyDefinedAssertionFunction) => {
    const definedAssertionVerified = verifyDefinedAssertionFunction(definedAssertionNode, assignments, derived, localContext);

    if (definedAssertionVerified) {
      return true;
    }
  });

  if (definedAssertionVerified) {
    localContext.debug(`...verified the '${definedAssertionString}' defined assertion.`, definedAssertionNode);
  }

  return definedAssertionVerified;
}

function verifyDerivedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let derivedDefinedAssertionVerified = false;

  if (derived) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`, definedAssertionNode);

    const statementNegated = isAssertionNegated(definedAssertionNode),
          variableNode = variableNodeQuery(definedAssertionNode),
          termNode = termNodeQuery(definedAssertionNode);

    if (false) {
      ///
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode);

      if (variable !== null) {
        const variableDefined = localContext.isVariableDefined(variable);

        if (!statementNegated) {
          if (variableDefined) {
            derivedDefinedAssertionVerified = true;
          }
        }

        if (statementNegated) {
          if (!variableDefined) {
            derivedDefinedAssertionVerified = true;
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

        if (!statementNegated) {
          if (termGrounded) {
            derivedDefinedAssertionVerified = true;
          }
        }

        if (statementNegated) {
          if (!termGrounded) {
            derivedDefinedAssertionVerified = true;
          }
        }
      }
    }

    if (derivedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' derived defined assertion.`, definedAssertionNode);
    }
  }

  return derivedDefinedAssertionVerified;
}

function verifyStatedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let statedDefinedAssertionVerified = false;

  if (!derived) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`, definedAssertionNode);

    const nonTerminalNode = definedAssertionNode, ///
          nonTerminalNodeVerified = metaLevelNodeVerifier.verifyNonTerminalNode(nonTerminalNode, localContext, () => {
            const verifiedAhead = true;

            return verifiedAhead;
          });

    statedDefinedAssertionVerified = nonTerminalNodeVerified; ///

    if (statedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' stated defined assertion.`, definedAssertionNode);
    }
  }

  return statedDefinedAssertionVerified;
}
