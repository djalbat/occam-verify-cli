"use strict";

function verifyTypeName(typeNameTerminalNode, context) {
  const typeNameTerminalNodeContent = typeNameTerminalNode.getContent(),
        typeName = typeNameTerminalNodeContent, ///
        type = context.findTypeByTypeName(typeName);

  return type;
}

module.exports = verifyTypeName;
