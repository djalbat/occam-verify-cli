"use strict";

import { nodeQuery } from "../utilities/query";

const typeTerminalNodeQuery = nodeQuery("/type/@type"),
      nameTerminalNodeQuery = nodeQuery("/metavariable/@name"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

export function typeNameFromTypeNode(typeNode) {
  let typeName = null;

  if (typeNode !== null) {
    const typeTerminalNode = typeTerminalNodeQuery(typeNode),
          typeTerminalNodeContent = typeTerminalNode.getContent();

    typeName = typeTerminalNodeContent; ///
  }

  return typeName;
}

export function nameFromMetavariableNode(metavariableNode) {
  const nameTerminalNode = nameTerminalNodeQuery(metavariableNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        name = nameTerminalNodeContent; ///

  return name;
}

export function metaTypeNameFromMetaTypeNode(metaTypeNode) {
  let metaTypeName = null;

  if (metaTypeNode !== null) {
    const metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
          metaTypeTerminalNodeContent = metaTypeTerminalNode.getContent();

    metaTypeName = metaTypeTerminalNodeContent; ///
  }

  return metaTypeName;
}
