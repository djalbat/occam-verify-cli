"use strict";

import verifyTerm from "../../verify/term";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { isAssertionNegated } from "../../utilities/assertion";

const termNodeQuery = nodeQuery("/definedAssertion/term!"),
      variableNodeQuery = nodeQuery("/definedAssertion/term/variable!");

const verifyDefinedAssertionFunctions = [
  verifyDerivedDefinedAssertion,
  verifyStatedDefinedAssertion
];

export default function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let definedAssertionVerified;

  const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

  localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`, definedAssertionNode);

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

    const assertionNegated = isAssertionNegated(definedAssertionNode),
          variableNode = variableNodeQuery(definedAssertionNode),
          termNode = termNodeQuery(definedAssertionNode);

    if (false) {
      ///
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode);

      if (variable !== null) {
        const variableDefined = localContext.isVariableDefined(variable);

        if (!assertionNegated) {
          if (variableDefined) {
            derivedDefinedAssertionVerified = true;
          }
        }

        if (assertionNegated) {
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

        if (!assertionNegated) {
          if (termGrounded) {
            derivedDefinedAssertionVerified = true;
          }
        }

        if (assertionNegated) {
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
  let statedDefinedAssertionVerified;

  if (!derived) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`, definedAssertionNode);

    statedDefinedAssertionVerified = true;

    if (statedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' stated defined assertion.`, definedAssertionNode);
    }
  }

  return statedDefinedAssertionVerified;
}
