'use strict';

const queries = require('../miscellaneous/queries'),
      verifyTypeDeclaration = require('../verify/declaration/type'),
			verifyTypesDeclaration = require('../verify/declaration/types'),
      verifyVariableDeclaration = require('../verify/declaration/variable'),
      verifyVariablesDeclaration = require('../verify/declaration/variables'),
      verifyConstructorDeclaration = require('../verify/declaration/constructor'),
      verifyConstructorsDeclaration = require('../verify/declaration/constructors');

const { keywordNodeQuery,
        typeDeclarationNodeQuery,
				typesDeclarationNodeQuery,
        variableDeclarationNodeQuery,
        variablesDeclarationNodeQuery,
        constructorDeclarationNodeQuery,
        constructorsDeclarationNodeQuery } = queries;

function verifyDeclaration(declarationNode, context, rules) {
  const keywordNode = keywordNodeQuery(declarationNode),
        keywordNodeContent = keywordNode.getContent(),
        keyword = keywordNodeContent;  ///

  switch (keyword) {
    case 'Type': {
      const typeDeclarationNode = typeDeclarationNodeQuery(declarationNode);

      verifyTypeDeclaration(typeDeclarationNode, context, rules);
      break;
    }

	  case 'Types': {
		  const typesDeclarationNode = typesDeclarationNodeQuery(declarationNode);

		  verifyTypesDeclaration(typesDeclarationNode, context, rules);
		  break;
	  }

	  case 'Variable': {
      const variableDeclarationNode = variableDeclarationNodeQuery(declarationNode);

      verifyVariableDeclaration(variableDeclarationNode, context, rules);
      break;
    }

    case 'Variables': {
      const variablesDeclarationNode = variablesDeclarationNodeQuery(declarationNode);

      verifyVariablesDeclaration(variablesDeclarationNode, context, rules);
      break;
    }

    case 'Constructor': {
      const constructorDeclarationNode = constructorDeclarationNodeQuery(declarationNode);

      verifyConstructorDeclaration(constructorDeclarationNode, context, rules);
      break;
    }

    case 'Constructors': {
      const constructorsDeclarationNode = constructorsDeclarationNodeQuery(declarationNode);

      verifyConstructorsDeclaration(constructorsDeclarationNode, context, rules);
      break;
    }
  }
}

module.exports = verifyDeclaration;
