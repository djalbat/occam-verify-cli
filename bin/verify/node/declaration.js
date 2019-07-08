'use strict';

const queries = require('../../queries'),
      verifyTypeDeclarationNode = require('../../verify/node/declaration/type'),
      verifyConstructorsDeclarationNode = require('../../verify/node/declaration/constructors');

const { keywordQuery, typeDeclarationQuery, constructorsDeclarationQuery } = queries;

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

    case 'Constructors': {
      const constructorsDeclarationNodes = constructorsDeclarationQuery.execute(declarationNode),
            constructorsDeclarationNode = constructorsDeclarationNodes.shift();

      verifyConstructorsDeclarationNode(constructorsDeclarationNode, context);

      break;
    }
  }
}

module.exports = verifyDeclarationNode;
