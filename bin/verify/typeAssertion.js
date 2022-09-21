"use strict";

const log = require("../log"),
      verifyTerm = require("../verify/term");

const { nodeQuery, typeNameFromTypeNode} = require("../utilities/query");

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

function verifyTypeAssertion(typeAssertionNode, context) {
  let typeAssertionVerified = false;

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    log.error(`The ${typeName} type is not present.`);
  } else {
    const type = context.findTypeByTypeName(typeName),
          types = [],
          termNode = termNodeQuery(typeAssertionNode),
          termVerified = verifyTerm(termNode, types, context);

    typeAssertionVerified = termVerified; ///
  }

  return typeAssertionVerified;
}

module.exports = verifyTypeAssertion;
