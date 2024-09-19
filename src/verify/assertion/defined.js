"use strict";

import verifyTerm from "../../verify/term";
import metaLevelVerifier from "../../verifier/metaLevel";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";
import { isAssertionNegated } from "../../utilities/assertion";

const variableNodeQuery = nodeQuery("/definedAssertion/term/variable!"),
      metavariableNodeQuery = nodeQuery("/definedAssertion/statement[-1]/metavariable!");

const verifyDefinedAssertionFunctions = [
  verifyDerivedDefinedAssertion,
  verifyStatedDefinedAssertion
];

export default function verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let definedAssertionVerified;

  const definedAssertionString = localContext.nodeAsString(definedAssertionNode),
        savedStated = stated; ///;

  localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`, definedAssertionNode);

  assignments = []; ///

  stated = true;  ///

  const verified = metaLevelVerifier.verify(definedAssertionNode, assignments, stated, localContext);

  stated = savedStated; ///

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

function verifyDerivedDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let derivedDefinedAssertionVerified = false;

  if (!stated) {
    const definedAssertionString = localContext.nodeAsString(definedAssertionNode);

    localContext.trace(`Verifying the '${definedAssertionString}' derived defined assertion...`, definedAssertionNode);

    const assertionNegated = isAssertionNegated(definedAssertionNode),
          metavariableNode = metavariableNodeQuery(definedAssertionNode),
          variableNode = variableNodeQuery(definedAssertionNode);

    if (false) {
      ///
    } else if (metavariableNode !== null) {
      const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode),
            metavariableDefined = localContext.isMetavariableDefined(metavariable);

      if (!assertionNegated) {
        if (metavariableDefined) {
          derivedDefinedAssertionVerified = true;
        }
      }

      if (assertionNegated) {
        if (!metavariableDefined) {
          derivedDefinedAssertionVerified = true;
        }
      }
    } else if (variableNode !== null) {
      const variable = localContext.findVariableByVariableNode(variableNode),
            variableDefined = localContext.isVariableDefined(variable);

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

    if (derivedDefinedAssertionVerified) {
      localContext.debug(`...verified the '${definedAssertionString}' derived defined assertion.`, definedAssertionNode);
    }
  }

  return derivedDefinedAssertionVerified;
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
