'use strict';

const dom = require('occam-dom');

const { Query } = dom;

const termNodeQuery = nodeQuery(Query.fromExpression('//term', 1)),
      equalityNodeQuery = nodeQuery(Query.fromExpression('//equality', 1)),
      typeNameNodeQuery = nodeQuery(Query.fromExpression('//typeName/@*', 1)),
      statementNodeQuery = nodeQuery(Query.fromExpression('//statement', 2)),
			nameTerminalNodeQuery = nodeQuery(Query.fromExpression('//name/@*', 1)),
			keywordTerminalNodeQuery = nodeQuery(Query.fromExpression('//@keyword', 1)),
      typeDeclarationNodeQuery = nodeQuery(Query.fromExpression('//typeDeclaration', 1)),
			termNameTerminalNodeQuery = nodeQuery(Query.fromExpression('/term/name/@*', 2)),
			typesDeclarationNodeQuery = nodeQuery(Query.fromExpression('//typesDeclaration', 1)),
      parenthesisedLabelsNodeQuery = nodeQuery(Query.fromExpression('//parenthesisedLabels', 1)),
      variableDeclarationNodeQuery = nodeQuery(Query.fromExpression('//variableDeclaration', 1)),
      variablesDeclarationNodeQuery = nodeQuery(Query.fromExpression('//variablesDeclaration', 1)),
      constructorDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorDeclaration', 1)),
      constructorsDeclarationNodeQuery = nodeQuery(Query.fromExpression('//constructorsDeclaration', 1)),
			termNodesQuery = nodesQuery(Query.fromExpression('//term', 2)),
			expressionNodesQuery = nodesQuery(Query.fromExpression('//expression', 1)),
			typeDeclarationNodesQuery = nodesQuery(Query.fromExpression('//typeDeclaration', 1)),
			typeNameTerminalNodesQuery = nodesQuery(Query.fromExpression('//typeName/@*', 2)),
			labelNameTerminalNodesQuery = nodesQuery(Query.fromExpression('//labelName/@*', 3)),
			axiomOrDeclarationNodesQuery = nodesQuery(Query.fromExpression('/document/axiom|declaration', 1)),
			variableDeclarationNodesQuery = nodesQuery(Query.fromExpression('//variableDeclaration', 1)),
			constructorDeclarationNodesQuery = nodesQuery(Query.fromExpression('//constructorDeclaration', 1));

module.exports = {
  termNodeQuery,
  equalityNodeQuery,
  typeNameNodeQuery,
  statementNodeQuery,
	nameTerminalNodeQuery,
	keywordTerminalNodeQuery,
  typeDeclarationNodeQuery,
	termNameTerminalNodeQuery,
	typesDeclarationNodeQuery,
  parenthesisedLabelsNodeQuery,
  variableDeclarationNodeQuery,
  variablesDeclarationNodeQuery,
  constructorDeclarationNodeQuery,
  constructorsDeclarationNodeQuery,
  termNodesQuery,
	expressionNodesQuery,
	typeDeclarationNodesQuery,
	typeNameTerminalNodesQuery,
	labelNameTerminalNodesQuery,
	axiomOrDeclarationNodesQuery,
	variableDeclarationNodesQuery,
	constructorDeclarationNodesQuery
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
