'use strict';

const dom = require('occam-dom');

const verifyTypeDeclarationNode = require('../../verify/node/declaration/type');

const { Query } = dom;

const maximumDepth = 1,
      keywordQuery = Query.fromExpression('//@keyword', maximumDepth),
      typeDeclarationQuery = Query.fromExpression('//typeDeclaration', maximumDepth);

function verifyDeclarationNode(declarationNode, context) {
  const keywordNodes = keywordQuery.execute(declarationNode),
        keywordNode = keywordNodes.shift(),
        keywordNodeContent = keywordNode.getContent(),
        keyword = keywordNodeContent;  ///

  switch (keyword) {
    case 'Type': {
      const typeDeclarationNodes = typeDeclarationQuery.execute(declarationNode),
            typeDeclarationNode = typeDeclarationNodes.shift();

      verifyTypeDeclarationNode(typeDeclarationNode, context);

      break;
    }
  }
}

module.exports = verifyDeclarationNode;
