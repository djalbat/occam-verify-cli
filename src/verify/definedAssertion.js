"use strict";

import verifyTerm from "./term";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import { isAssertionNegated } from "../utilities/verify";

const termNodeQuery = nodeQuery("/definedAssertionNode/term!"),
      variableNodeQuery = nodeQuery("/definedAssertionNode/term/variable!");

export default function verifyDefinedAssertion(definedAssertionNode, localContext) {
  let definedAssertionVerified = false;

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
          definedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!variableDefined) {
          definedAssertionVerified = true;
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
          definedAssertionVerified = true;
        }
      }

      if (negated) {
        if (!termGrounded) {
          definedAssertionVerified = true;
        }
      }
    }
  }

  return definedAssertionVerified;
}
