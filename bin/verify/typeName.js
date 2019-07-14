'use strict';

const Error = require('../error');

function verifyTypeName(typeNameNode, context, rules) {
  const typeNameNodeContent = typeNameNode.getContent(),
        typeName = typeNameNodeContent, ///
        typeMissing = context.isTypeMissingByTypeName(typeName);

  if (typeMissing) {
    const node = typeNameNode, ///
          message = `The type '${typeName}' is missing.`;

    throw new Error(node, message);
  }

  return typeName;
}

module.exports = verifyTypeName;
