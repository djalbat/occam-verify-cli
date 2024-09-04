"use strict";

import { nodesQuery } from "../../utilities/query";
import { STATEMENT_META_TYPE_NAME } from "../../metaTypeNames";

const metavariableNodesQuery = nodesQuery("/subproofAssertion/statement/metavariable!");

export default function verifySubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
  let subproofAssertionVerified;

  const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

  localContext.trace(`Verifying the '${subproofAssertionString}' subproof assertion...`, subproofAssertionNode);

  const verifySubproofAssertionFunctions = [
    verifyDerivedSubproofAssertion,
    verifyStatedSubproofAssertion
  ];

  subproofAssertionVerified = verifySubproofAssertionFunctions.some((verifySubproofAssertionFunction) => {
    const subproofAssertionVerified = verifySubproofAssertionFunction(subproofAssertionNode, assignments, derived, localContext);

    if (subproofAssertionVerified) {
      return true;
    }
  });

  if (subproofAssertionVerified) {
    localContext.debug(`...verified the '${subproofAssertionString}' subproof assertion.`, subproofAssertionNode);
  }

  return subproofAssertionVerified;
}

function verifyDerivedSubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
  let derivedSubproofAssertionVerified = false;

  if (derived) {
    const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

    if (derivedSubproofAssertionVerified) {
      localContext.debug(`The '${subproofAssertionString}' derived subproof assertion cannot be verified.`, subproofAssertionNode);
    }
  }

  return derivedSubproofAssertionVerified;
}

function verifyStatedSubproofAssertion(subproofAssertionNode, assignments, derived, localContext) {
  let statedSubproofAssertionVerified = false;

  if (!derived) {
    const subproofAssertionString = localContext.nodeAsString(subproofAssertionNode);

    localContext.trace(`Verifying the '${subproofAssertionString}' stated subproof assertion...`, subproofAssertionNode);

    const metavariableNodes = metavariableNodesQuery(subproofAssertionNode);

    statedSubproofAssertionVerified = metavariableNodes.every((metavariableNode) => {
      const metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);

      if (metavariable !== null) {
        const metaTypeName = metavariable.getMetaTypeName();

        if (metaTypeName === STATEMENT_META_TYPE_NAME) {
          return true;
        }
      }
    });

    if (statedSubproofAssertionVerified) {
      localContext.debug(`...verified the '${subproofAssertionString}' stated subproof assertion.`, subproofAssertionNode);
    }
  }

  return statedSubproofAssertionVerified;
}
