"use strict";

function verifyTypeName(typeNameTerminalNode, context, ruleMap) {
  const typeNameTerminalNodeContent = typeNameTerminalNode.getContent(),
        typeName = typeNameTerminalNodeContent, ///
        type = context.findTypeByTypeName(typeName);

  return type;
}

module.exports = verifyTypeName;
