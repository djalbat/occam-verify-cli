"use strict";

import metaLevelVerifier from "../../verifier/metaLevel";

import { nodeQuery } from "../../utilities/query";
import { isAssertionNegated } from "../../utilities/assertion";
import { variableNameFromVariableNode, metavariableNameFromMetavariableNode } from "../../utilities/name";

const variableNodeQuery = nodeQuery("/definedAssertion/term/variable!"),
      metavariableNodeQuery = nodeQuery("/definedAssertion/frame/metavariable!");

const verifyDefinedAssertionFunctions = [
  verifyDerivedDefinedAssertion,
  verifyStatedDefinedAssertion
];

export default function verifyDefinedAssertion(definedAssertionNode, assignments, stated, localContext) {
  let definedAssertionVerified;

  const definedAssertionString = localContext.nodeAsString(definedAssertionNode),
        savedStated = stated; ///;

  localContext.trace(`Verifying the '${definedAssertionString}' defined assertion...`, definedAssertionNode);

  assignments = null; ///

  stated = true;  ///

  const verifiedAtMetaLevel = metaLevelVerifier.verify(definedAssertionNode, assignments, stated, localContext);

  stated = savedStated; ///

  if (verifiedAtMetaLevel) {
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
      const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            metavariableDefinedByMetavariableName = localContext.isMetavariableDefinedByMetavariableName(metavariableName);

      if (!assertionNegated) {
        if (metavariableDefinedByMetavariableName) {
          derivedDefinedAssertionVerified = true;
        }
      }

      if (assertionNegated) {
        if (!metavariableDefinedByMetavariableName) {
          derivedDefinedAssertionVerified = true;
        }
      }
    } else if (variableNode !== null) {
      const variableName = variableNameFromVariableNode(variableNode),
            variable = localContext.findVariableByVariableName(variableName),
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
