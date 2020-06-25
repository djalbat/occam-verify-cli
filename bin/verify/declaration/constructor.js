"use strict";

const Error = require("../../error"),
      queries = require("../../miscellaneous/queries"),
      Constructor = require("../../constructor"),
      nodeUtilities = require("../../utilities/node"),
			verifyTypeName = require("../../verify/typeName"),
      verifyTermAsConstructor = require("../../verify/termAsConstructor");

const { nodeAsString } = nodeUtilities,
      { termNodeQuery, typeNameTerminalNodeQuery } = queries;

function verifyConstructorDeclaration(constructorDeclarationNode, context, ruleMap) {
  const typeNameTerminalNode = typeNameTerminalNodeQuery(constructorDeclarationNode),
        termNode = termNodeQuery(constructorDeclarationNode),
        type = verifyTypeName(typeNameTerminalNode, context, ruleMap);

  if (type === undefined) {
    const node = termNode,  ///
          termString = nodeAsString(termNode),
          message = `The constructor '${termString}' cannot be verified because the type cannot be found.`;

    throw new Error(node, message);
  }

  const verified = verifyTermAsConstructor(termNode, context, ruleMap);

  if (!verified) {
    const node = termNode,  ///
          termString = nodeAsString(termNode),
          message = `The constructor '${termString}' cannot be verified.`;

    throw new Error(node, message);
  }

  const constructor = Constructor.fromTermNodeAndType(termNode, type);

	context.addConstructor(constructor);
}

module.exports = verifyConstructorDeclaration;
