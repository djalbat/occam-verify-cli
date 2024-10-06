"use strict";

import metavariableUnifier from "../unifier/metavariable";

import { metavariableNameFromMetavariableNode } from "../utilities/name";

export default function verifyMetavariableGivenMetaType(metavariableNode, metaType, localContext) {
  let metavariableVerifiedGivenMetaType = false;

  const metaTypeName = metaType.getName(),
        metavariableString = localContext.nodeAsString(metavariableNode);

  localContext.trace(`Verifying the '${metavariableString}' metavariable given the '${metaTypeName}' meta-type...`, metavariableNode);

  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariable = localContext.findMetavariableByMetavariableName(metavariableName);

  if (metavariable !== null) {
    const metavariableMetaType = metavariable.getMetaType();

    if (metavariableMetaType === metaType) {
      const metavariableNodeA = metavariableNode; ///

      metavariableNode = metavariable.getNode();

      const metavariableNodeB = metavariableNode; ///

      const metavariableUnified = metavariableUnifier.unify(metavariableNodeA, metavariableNodeB, localContext);

      metavariableVerifiedGivenMetaType = metavariableUnified;  ///
    } else {
      const metavariableMetaTypeName = metavariableMetaType.getName();

      localContext.debug(`The '${metavariableString}' metavariable's meta-type is '${metavariableMetaTypeName}' when it should be '${metaTypeName}'.`, metavariableNode);
    }
  } else {
    localContext.debug(`The '${metavariableString}' metavariable is not present'.`, metavariableNode);
  }

  if (metavariableVerifiedGivenMetaType) {
    localContext.debug(`...verified the '${metavariableString}' metavariable given the '${metaTypeName}' meta-type.`, metavariableNode);
  }

  return metavariableVerifiedGivenMetaType;
}
