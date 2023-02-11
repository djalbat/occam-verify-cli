"use strict";

import verifyMetavariable from "../../verify/metavariable";

import { nodeQuery } from "../../utilities/query";

const metaTypeNodeQuery = nodeQuery("/metavariableDeclaration/metaType"),
      metavariableNodeQuery = nodeQuery("/metavariableDeclaration/metavariable");

export default function verifyMetavariableDeclaration(metavariableDeclarationNode, fileContext) {
  let metavariableDeclarationVerified;

  const metaTypeNode = metaTypeNodeQuery(metavariableDeclarationNode),
        metavariableNode = metavariableNodeQuery(metavariableDeclarationNode),
        metavariableVVerified = verifyMetavariable(metavariableNode, metaTypeNode, fileContext);

  metavariableDeclarationVerified = metavariableVVerified;  ///

  return metavariableDeclarationVerified;
}
