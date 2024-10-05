"use strict";

import { nodeQuery } from "../utilities/query";

const typeTerminalNodeQuery = nodeQuery("/type/@type"),
      nameTerminalNodeQuery = nodeQuery("/variable|metavariable/@name"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

export function typeNameFromTypeNode(typeNode) {
  const typeTerminalNode = typeTerminalNodeQuery(typeNode),
        typeTerminalNodeContent = typeTerminalNode.getContent(),
        typeName = typeTerminalNodeContent; ///

  return typeName;
}

export function variableNameFromVariableNode(variableNode) {
  const nameTerminalNode = nameTerminalNodeQuery(variableNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        variableName = nameTerminalNodeContent; ///

  return variableName;
}

export function metaTypeNameFromMetaTypeNode(metaTypeNode) {
    const metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode),
          metaTypeTerminalNodeContent = metaTypeTerminalNode.getContent(),
          metaTypeName = metaTypeTerminalNodeContent; ///

  return metaTypeName;
}

export function metavariableNameFromMetavariableNode(metavariableNode) {
  const nameTerminalNode = nameTerminalNodeQuery(metavariableNode),
        nameTerminalNodeContent = nameTerminalNode.getContent(),
        metavariableName = nameTerminalNodeContent; ///

  return metavariableName;
}
