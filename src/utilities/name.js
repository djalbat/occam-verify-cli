"use strict";

import { nodeQuery } from "../utilities/query";

const typeTerminalNodeQuery = nodeQuery("/type/@type"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type"),
      labelNameTerminalNodeQuery = nodeQuery("/label/@name"),
      referenceNameTerminalNodeQuery = nodeQuery("/reference/@name");

export function typeNameFromTypeNode(typeNode) {
  let typeName = null;

  if (typeNode !== null) {
    const typeTerminalNode = typeTerminalNodeQuery(typeNode),
          typeTerminalNodeContent = typeTerminalNode.getContent();

    typeName = typeTerminalNodeContent; ///
  }

  return typeName;
}

export function labelNameFromLabelNode(labelNode) {
  const labelNameTerminalNode = labelNameTerminalNodeQuery(labelNode),
        labelNameTerminalNodeContent = labelNameTerminalNode.getContent(),
        labelName = labelNameTerminalNodeContent; ///

  return labelName;
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

export function referenceNameFromReferenceNode(referenceNode) {
  const referenceNameTerminalNode = referenceNameTerminalNodeQuery(referenceNode),
        referenceNameTerminalNodeContent = referenceNameTerminalNode.getContent(),
        referenceName = referenceNameTerminalNodeContent; ///

  return referenceName;
}
