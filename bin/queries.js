'use strict';

const dom = require('occam-dom');

const { Query } = dom;

const termNodesQuery = nodesQuery(Query.fromExpression('//term', 2)),
      typeNameNodesQuery = nodesQuery(Query.fromExpression('//typeName/@*', 2)),
      labelNameNodesQuery = nodesQuery(Query.fromExpression('//labelName/@*', 3)),
      expressionNodesQuery = nodesQuery(Query.fromExpression('//expression', 1)),
      axiomOrDeclarationNodesQuery = nodesQuery(Query.fromExpression('/document/axiom|declaration', 1)),
      variableDeclarationNodesQuery = nodesQuery(Query.fromExpression('//variableDeclaration', 1)),
      constructorDeclarationNodesQuery = nodesQuery(Query.fromExpression('//constructorDeclaration', 1)),
      termNodeQuery = nodeQuery(Query.fromExpression('//term', 1)),
      nameNodeQuery = nodeQuery(Query.fromExpression('//name/@*', 1)),
      keywordNodeQuery = nodeQuery(Query.fromExpression('//@keyword', 1)),
      equalityNodeQuery = nodeQuery(Query.fromExpression('//equality', 1)),
      typeNameNodeQuery = nodeQuery(Query.fromExpression('//typeName/@*', 1)),
      statementNodeQuery = nodeQuery(Query.fromExpression('//statement', 2)),
      typeDeclarationNodeQuery = nodeQuery(Query.fromExpression('//typeDeclaration', 1)),
      parenthesisedTermsNodeQuery = nodeQuery(Query.fromExpression('//parenthesisedTerms', 1)),
      parenthesisedLabelsNodeQuery = nodeQuery(Query.fromExpression('//parenthesisedLabels', 1)),
      variableDeclarationNodeQuery = nodeQuery(Query.fromExpression('//variableDeclaration', 1)),
      variablesDeclarationNodeQuery = nodeQuery(Query.fromExpression('//variablesDeclaration', 1)),
      parenthesisedTypeNamesNodeQuery = nodeQuery(Query.fromExpression('//parenthesisedTypeNames', 1)),
      constructorDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorDeclaration', 1)),
      constructorsDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorsDeclaration', 1));

module.exports = {
  termNodesQuery,
  typeNameNodesQuery,
  labelNameNodesQuery,
  expressionNodesQuery,
  axiomOrDeclarationNodesQuery,
  variableDeclarationNodesQuery,
  constructorDeclarationNodesQuery,
  termNodeQuery,
  nameNodeQuery,
  keywordNodeQuery,
  equalityNodeQuery,
  typeNameNodeQuery,
  statementNodeQuery,
  typeDeclarationNodeQuery,
  parenthesisedTermsNodeQuery,
  parenthesisedLabelsNodeQuery,
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
