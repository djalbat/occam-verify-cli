"use strict";

const Error = require("../error");

function verifyName(nameNode, context, rules) {
  const nameNodeContent = nameNode.getContent(),
        name = nameNodeContent; ///

  const variablePresent = context.isVariablePresentByName(name);

  if (variablePresent) {
    const node = nameNode, ///
          message = `The variable '${name}' is already present.`;

    throw new Error(node, message);
  }

  const constructorPresent = context.isConstructorPresentByName(name);

  if (constructorPresent) {
    const node = nameNode, ///
          message = `The constructor '${name}' is already present.`;

    throw new Error(node, message);
  }

  return name;
}

module.exports = verifyName;
