'use strict';

const queries = require('../queries'),
      verifyTypeName = require('../verify/typeName');

const { typeNameNodesQuery } = queries;

function verifyParenthesizedTypeNames(parenthesisedTypeNamesNode, context) {
  const typeNameNodes = typeNameNodesQuery(parenthesisedTypeNamesNode),
        typeNames = typeNameNodes.map((typeNameNode) => {
          const typeName = verifyTypeName(typeNameNode, context);

          return typeName;
        });

  return typeNames;
}

module.exports = verifyParenthesizedTypeNames;
