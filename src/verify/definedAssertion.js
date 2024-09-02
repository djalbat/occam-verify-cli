"use strict";

import verifyTerm from "./term";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import { isAssertionNegated } from "../utilities/verify";

const termNodeQuery = nodeQuery("/definedAssertion/term!"),
      variableNodeQuery = nodeQuery("/definedAssertion/term/variable!");

export default function verifyDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let definedAssertionVerified;

  const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

  localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`, definedAssertionNode);

  const definedAssertionFunctions = [
    verifyDerivedDefinedAssertion,
    verifyStatedDefinedAssertion
  ];

  definedAssertionVerified = definedAssertionFunctions.some((definedAssertionFunction) => {
    const definedAssertionVerified = definedAssertionFunction(definedAssertionNode, assignments, derived, localContext);

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

    localContext.trace(`Verifying the derived '${definedAssertionString}' defined assertion...`, definedAssertionNode);

    const definedAssertionNegated = isAssertionNegated(definedAssertionNode),
          variableNode = variableNodeQuery(definedAssertionNode),
          termNode = termNodeQuery(definedAssertionNode),
          negated = definedAssertionNegated;  ///

    if (false) {
      ///
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode);

      if (variable !== null) {
        const variableDefined = localContext.isVariableDefined(variable);

        if (!negated) {
          if (variableDefined) {
            derivedDefinedAssertionVerified = true;
          }
        }

        if (negated) {
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

        if (!negated) {
          if (termGrounded) {
            derivedDefinedAssertionVerified = true;
          }
        }

        if (negated) {
          if (!termGrounded) {
            derivedDefinedAssertionVerified = true;
          }
        }
      }
    }

    if (derivedDefinedAssertionVerified) {
      localContext.debug(`...verified the derived '${definedAssertionString}' defined assertion.`, definedAssertionNode);
    }
  }

  return derivedDefinedAssertionVerified;
}

function verifyStatedDefinedAssertion(definedAssertionNode, assignments, derived, localContext) {
  let derivedStatedAssertionVerified = false;

  if (!derived) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.debug(`The stated '${definedAssertionString}' defined assertion cannot be verified.`, definedAssertionNode);
  }

  return derivedStatedAssertionVerified;
}
