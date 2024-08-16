"use strict";

import verifyMetavariable from "../../verify/metavariable";

import { nodeQuery } from "../../utilities/query";

const metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable");

export default function verifyMetavariableDeclaration(metavariableDeclarationNode, fileContext) {
  let metavariableDeclarationVerified;

  const metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
        metavariableNode = metavariableNodeQuery(metavariableDeclarationNode),
        metaTypeString = fileContext.nodeAsString(metaTypeNode),
        metavariableString = fileContext.nodeAsString(metavariableNode);

  fileContext.trace(`Verifying the '${metavariableString}:${metaTypeString}' metavariable declaration...`, metavariableDeclarationNode);

  const metavariableVVerified = verifyMetavariable(metavariableNode, metaTypeNode, fileContext);

  metavariableDeclarationVerified = metavariableVVerified;  ///

  if (metavariableDeclarationVerified) {
    fileContext.debug(`...verified the '${metavariableString}:${metaTypeString}' metavariable declaration.`, metavariableDeclarationNode);
  }

  return metavariableDeclarationVerified;
}
