"use strict";

import Metavariable from "../metavariable";
import MetavariableAssignment from "../assignment/metavariable";

import { metaTypeNameFromMetaTypeNode } from "../utilities/query";

export default function verifyMetavariable(metavariableNode, metaTypeNode, fileContext) {
  let metavariableVerified = false;

  const metavariableString = fileContext.nodeAsString(metavariableNode);

  fileContext.trace(`Verifying the '${metavariableString}' metavariable...`, metavariableNode);

  const metavariablePresent = fileContext.isMetavariablePresentByMetavariableNode(metavariableNode);

  if (metavariablePresent) {
    fileContext.debug(`The metavariable '${metavariableString}' is already present.`, metavariableNode);
  } else {
    const metaTypeName = metaTypeNameFromMetaTypeNode(metaTypeNode),
          metaType = fileContext.findMetaTypeByMetaTypeName(metaTypeName),
          metavariable = Metavariable.fromMetavariableNodeAndMetaType(metavariableNode, metaType),
          metavariableAssignment = MetavariableAssignment.fromMetavariable(metavariable),
          metavariableAssigned = metavariableAssignment.assign(fileContext);

    if (metavariableAssigned) {
      metavariableVerified = true;
    }
  }

  if (metavariableVerified) {
    fileContext.debug(`...verified the '${metavariableString}' metavariable.`, metavariableNode);
  }

  return metavariableVerified;
}
