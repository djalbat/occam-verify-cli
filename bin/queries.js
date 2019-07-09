'use strict';

const dom = require('occam-dom');

const { Query } = dom;

const typeNameNodesQuery = nodesQuery(Query.fromExpression('//typeName/@*', 2)),
      declarationNodesQuery = nodesQuery(Query.fromExpression('//declaration', 1)),
      variableDeclarationNodesQuery = nodesQuery(Query.fromExpression('//variableDeclaration', 1)),
      constructorDeclarationNodesQuery = nodesQuery(Query.fromExpression('//constructorDeclaration', 1)),
      nameNodeQuery = nodeQuery(Query.fromExpression('//name/@*', 1)),
      keywordNodeQuery = nodeQuery(Query.fromExpression('//@keyword', 1)),
      typeNameNodeQuery = nodeQuery(Query.fromExpression('//typeName/@*', 1)),
      typeDeclarationNodeQuery = nodeQuery(Query.fromExpression('//typeDeclaration', 1)),
      variableDeclarationNodeQuery = nodeQuery(Query.fromExpression('//variableDeclaration', 1)),
      variablesDeclarationNodeQuery = nodeQuery(Query.fromExpression('//variablesDeclaration', 1)),
      parenthesisedTypeNamesNodeQuery = nodeQuery(Query.fromExpression('//parenthesisedTypeNames', 1)),
      constructorDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorDeclaration', 1)),
      constructorsDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorsDeclaration', 1));

module.exports = {
  typeNameNodesQuery,
  declarationNodesQuery,
  variableDeclarationNodesQuery,
  constructorDeclarationNodesQuery,
  nameNodeQuery,
  keywordNodeQuery,
  typeNameNodeQuery,
  typeDeclarationNodeQuery,
  variableDeclarationNodeQuery,
  variablesDeclarationNodeQuery,
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
