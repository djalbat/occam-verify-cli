'use strict';

const queries = require('../queries'),
      verifyTypeName = require('../verify/typeName');

const { typeNameNodesQuery } = queries;

function verifyParenthesizedTypeNames(parenthesisedTypeNamesNode, context, rules) {
  const typeNameNodes = typeNameNodesQuery(parenthesisedTypeNamesNode),
        typeNames = typeNameNodes.map((typeNameNode) => verifyTypeName(typeNameNode, context, rules));

  return typeNames;
}

module.exports = verifyParenthesizedTypeNames;
