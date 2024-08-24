"use strict";

import MetaEquality from "../metaEquality";

import { nodeQuery } from "../utilities/query";

const leftMetastatementNodeQuery = nodeQuery("/metaEquality/metastatement[0]"),
      rightMetastatementNodeQuery = nodeQuery("/metaEquality/metastatement[1]");

export default function verifyMetaEquality(metaEqualityNode, derived, localMetaContext) {
  let metaEqualityVerified;

  const metaEqualityString = localMetaContext.nodeAsString(metaEqualityNode);

  localMetaContext.trace(`Verifying the '${metaEqualityString}' meta-equality...`, metaEqualityNode);

  const verifyMetaEqualityFunctions = [
    verifyDerivedMetaEquality,
    verifyStatedMetaEquality
  ];

  metaEqualityVerified = verifyMetaEqualityFunctions.some((verifyMetaEqualityFunction) => {
    const metaEqualityVerified = verifyMetaEqualityFunction(metaEqualityNode, derived, localMetaContext);

    if (metaEqualityVerified) {
      return true;
    }
  });

  if (metaEqualityVerified) {
    localMetaContext.debug(`...verified the '${metaEqualityString}' meta-equality.`, metaEqualityNode);
  }

  return metaEqualityVerified;
}

function verifyDerivedMetaEquality(metaEqualityNode, derived, localMetaContext) {
  let derivedMetaEqualityVerified = false;

  if (derived) {
    const metaEqualityString = localMetaContext.nodeAsString(metaEqualityNode);

    localMetaContext.trace(`Verifying the '${metaEqualityString}' derived meta-equality...`, metaEqualityNode);

    const leftMetastatementNode = leftMetastatementNodeQuery(metaEqualityNode),
          rightMetastatementNode = rightMetastatementNodeQuery(metaEqualityNode),
          metaEquality = MetaEquality.fromLeftMetastatementNodeRightMetastatementNodeAndMetaEqualityNode(leftMetastatementNode, rightMetastatementNode, metaEqualityNode, localMetaContext);

    if (metaEquality !== null) {
      debugger
    }

    if (derivedMetaEqualityVerified) {
      localMetaContext.debug(`...verified the '${metaEqualityString}' derived meta-equality.`, metaEqualityNode);
    }
  }

  return derivedMetaEqualityVerified;
}

function verifyStatedMetaEquality(metaEqualityNode, derived, localMetaContext) {
  let statedMetaEqualityVerified = false;

  if (!derived) {
    const metaEqualityString = localMetaContext.nodeAsString(metaEqualityNode);

    localMetaContext.trace(`Verifying the '${metaEqualityString}' stated meta-equality...`, metaEqualityNode);

    debugger

    if (statedMetaEqualityVerified) {
      localMetaContext.debug(`...verified the '${metaEqualityString}' stated meta-equality.`, metaEqualityNode);
    }
  }

  return statedMetaEqualityVerified;
}