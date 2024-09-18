"use strict";

import verifyTerm from "../../verify/term";
import metaLevelVerifier from "../../verifier/metaLevel";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { isAssertionNegated } from "../../utilities/assertion";

const termNodeQuery = nodeQuery("/definedAssertion/term!"),
      variableNodeQuery = nodeQuery("/definedAssertion/term/variable!");

const verifyDefinedAssertionFunctions = [
  verifyUnstatedDefinedAssertion,
  verifyStatedDefinedAssertion
];

export default function verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let definedAssertionVerified;

  const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

  localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`, definedAssertionNode);

  assignments = []; ///

  const verified = metaLevelVerifier.verify(definedAssertionNode, assignments, stated, localContext);

  if (verified) {
    definedAssertionVerified = verifyDefinedAssertionFunctions.some((verifyDefinedAssertionFunction) => {
      const definedAssertionVerified = verifyDefinedAssertionFunction(definedAssertionNode, assignments, stated, localContext);

      if (definedAssertionVerified) {
        return true;
      }
    });
  }

  if (definedAssertionVerified) {
    localContext.debug(`...verified the '${definedAssertionString}' defined assertion.`, definedAssertionNode);
  }

  return definedAssertionVerified;
}

function verifyUnstatedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let unstatedDefinedAssertionVerified = false;

  if (!stated) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' unstated defined assertion...`, definedAssertionNode);

    const assertionNegated = isAssertionNegated(definedAssertionNode),
          variableNode = variableNodeQuery(definedAssertionNode),
          termNode = termNodeQuery(definedAssertionNode);

    if (false) {
      ///
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode),
            variableDefined = localContext.isVariableDefined(variable);

      if (!assertionNegated) {
        if (variableDefined) {
          unstatedDefinedAssertionVerified = true;
        }
      }

      if (assertionNegated) {
        if (!variableDefined) {
          unstatedDefinedAssertionVerified = true;
        }
      }
    } else if (termNode !== null) {
      const term = termFromTermNode(termNode, localContext),
            termGrounded = localContext.isTermGrounded(term);

      if (!assertionNegated) {
        if (termGrounded) {
          unstatedDefinedAssertionVerified = true;
        }
      }

      if (assertionNegated) {
        if (!termGrounded) {
          unstatedDefinedAssertionVerified = true;
        }
      }
    }

    if (unstatedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' unstated defined assertion.`, definedAssertionNode);
    }
  }

  return unstatedDefinedAssertionVerified;
}

function verifyStatedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let statedDefinedAssertionVerified;

  if (stated) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' stated defined assertion...`, definedAssertionNode);

    statedDefinedAssertionVerified = true;

    if (statedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' stated defined assertion.`, definedAssertionNode);
    }
  }

  return statedDefinedAssertionVerified;
}

function termFromTermNode(termNode, localContext) {
  const terms = [];

  verifyTerm(termNode, terms, localContext, () => {
    const verifiedAhead = true;

    return verifiedAhead;
  });

  const firstTerm = first(terms),
        term = firstTerm; ///

  return term;
}
