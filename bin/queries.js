'use strict';

const dom = require('occam-dom');

const { Query } = dom;

const maximumDepth = 1,
      typeNameNodesQuery = nodesQuery(Query.fromExpression('//typeName/@*', maximumDepth)),
      declarationNodesQuery = nodesQuery(Query.fromExpression('//declaration', maximumDepth)),
      constructorDeclarationNodesQuery = nodesQuery(Query.fromExpression('//constructorDeclaration', maximumDepth)),
      keywordNodeQuery = nodeQuery(Query.fromExpression('//@keyword', maximumDepth)),
      typeNameNodeQuery = nodeQuery(Query.fromExpression('//typeName/@*', maximumDepth)),
      constructorNameNodeQuery = nodeQuery(Query.fromExpression('//constructorName/@*', maximumDepth)),
      typeDeclarationNodeQuery = nodeQuery(Query.fromExpression('//typeDeclaration', maximumDepth)),
      parenthesisedTypeNamesNodeQuery = nodeQuery(Query.fromExpression('//parenthesisedTypeNames', maximumDepth)),
      constructorDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorDeclaration', maximumDepth)),
      constructorsDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorsDeclaration', maximumDepth));

module.exports = {
  typeNameNodesQuery,
  declarationNodesQuery,
  constructorDeclarationNodesQuery,
  keywordNodeQuery,
  typeNameNodeQuery,
  constructorNameNodeQuery,
  typeDeclarationNodeQuery,
  parenthesisedTypeNamesNodeQuery,
  constructorDeclarationNodeQuery,
  constructorsDeclarationNodeQuery
};

function nodeQuery(query) {
  return function(node) {
    const nodes = query.execute(node);

    node = nodes.shift(); ///

    return node;
  };
}

function nodesQuery(query) {
  return function(node) {
    const nodes = query.execute(node);

    return nodes;
  };
}
