"use strict";

import Metavariable from "../metavariable";

import { metaTypeNameFromMetaTypeNode, metavariableNameFromMetavariableNode } from "../utilities/query";

export default function verifyMetavariable(metavariableNode, metaTypeNode, fileContext) {
  let metavariableVerified = false;

  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metavariableString = fileContext.nodeAsString(metavariableNode),
        metavariablePresent = fileContext.isMetavariablePresentByMetavariableName(metavariableName);

  if (metavariablePresent) {
    fileContext.info(`The metavariable '${metavariableName}' is already present.`, metavariableNode);
  } else {
    const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
          metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName),
          name = metavariableName,  ///
          metavariable = Metavariable.fromNameAndMetaType(name, metaType);

    fileContext.addMetavariable(metavariable);

    metavariableVerified = true;
  }

  if (metavariableVerified) {
    fileContext.info(`Verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
