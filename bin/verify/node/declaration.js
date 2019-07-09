'use strict';

const queries = require('../../queries'),
      verifyTypeDeclarationNode = require('../../verify/node/declaration/type'),
      verifyVariableDeclarationNode = require('../../verify/node/declaration/variable'),
      verifyVariablesDeclarationNode = require('../../verify/node/declaration/variables'),
      verifyConstructorDeclarationNode = require('../../verify/node/declaration/constructor'),
      verifyConstructorsDeclarationNode = require('../../verify/node/declaration/constructors');

const { keywordNodeQuery,
        typeDeclarationNodeQuery,
        variableDeclarationNodeQuery,
        variablesDeclarationNodeQuery,
        constructorDeclarationNodeQuery,
        constructorsDeclarationNodeQuery } = queries;

function verifyDeclarationNode(declarationNode, context) {
  const keywordNode = keywordNodeQuery(declarationNode),
        keywordNodeContent = keywordNode.getContent(),
        keyword = keywordNodeContent;  ///

  switch (keyword) {
    case 'Type': {
      const typeDeclarationNode = typeDeclarationNodeQuery(declarationNode);

      verifyTypeDeclarationNode(typeDeclarationNode, context);
      break;
    }

    case 'Variable': {
      const variableDeclarationNode = variableDeclarationNodeQuery(declarationNode);

      verifyVariableDeclarationNode(variableDeclarationNode, context);
      break;
    }

    case 'Variables': {
      const variablesDeclarationNode = variablesDeclarationNodeQuery(declarationNode);

      verifyVariablesDeclarationNode(variablesDeclarationNode, context);
      break;
    }

    case 'Constructor': {
      const constructorDeclarationNode = constructorDeclarationNodeQuery(declarationNode);

      verifyConstructorDeclarationNode(constructorDeclarationNode, context);
      break;
    }

    case 'Constructors': {
      const constructorsDeclarationNode = constructorsDeclarationNodeQuery(declarationNode);

      verifyConstructorsDeclarationNode(constructorsDeclarationNode, context);
      break;
    }
  }
}

module.exports = verifyDeclarationNode;
