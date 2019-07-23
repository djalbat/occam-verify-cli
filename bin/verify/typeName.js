'use strict';

const Error = require('../error');

function verifyTypeName(typeNameNode, context, rules) {
  const typeNameNodeContent = typeNameNode.getContent(),
        typeName = typeNameNodeContent, ///
        type = context.findTypeByTypeName(typeName);

  if (type === undefined) {
    const node = typeNameNode, ///
          message = `The type '${typeName}' is missing.`;

    throw new Error(node, message);
  }

  return type;
}

module.exports = verifyTypeName;
