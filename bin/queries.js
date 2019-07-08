'use strict';

const dom = require('occam-dom');

const { Query } = dom;

const maximumDepth = 1,
      keywordQuery = Query.fromExpression('//@keyword', maximumDepth),
      typeNameQuery = Query.fromExpression('//typeName/@*', maximumDepth),
      declarationQuery = Query.fromExpression('//declaration', maximumDepth),
      typeDeclarationQuery = Query.fromExpression('//typeDeclaration', maximumDepth),
      constructorNameQuery = Query.fromExpression('//constructorName/@*', maximumDepth),
      constructorDeclarationQuery = Query.fromExpression('//constructorDeclaration', maximumDepth),
      constructorsDeclarationQuery = Query.fromExpression('//constructorsDeclaration', maximumDepth);

module.exports = {
  keywordQuery,
  typeNameQuery,
  declarationQuery,
  typeDeclarationQuery,
  constructorNameQuery,
  constructorDeclarationQuery,
  constructorsDeclarationQuery
};
