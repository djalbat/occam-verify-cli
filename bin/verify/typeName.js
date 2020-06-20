"use strict";

const Error = require("../error");

function verifyTypeName(typeNameTerminalNode, context, ruleMap) {
  const typeNameTerminalNodeContent = typeNameTerminalNode.getContent(),
        typeName = typeNameTerminalNodeContent, ///
        type = context.findTypeByTypeName(typeName);

  if (type === undefined) {
    const node = typeNameTerminalNode, ///
          message = `The type '${typeName}' is missing.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyTypeName;
