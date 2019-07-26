'use strict';

const queries = require('../miscellaneous/queries'),
			keywords = require('../miscellaneous/keywords'),
			verifyTypeDeclaration = require('../verify/declaration/type'),
			verifyTypesDeclaration = require('../verify/declaration/types'),
      verifyVariableDeclaration = require('../verify/declaration/variable'),
      verifyVariablesDeclaration = require('../verify/declaration/variables'),
      verifyConstructorDeclaration = require('../verify/declaration/constructor'),
      verifyConstructorsDeclaration = require('../verify/declaration/constructors');

const { TYPE_KEYWORD,
				TYPES_KEYWORD,
				VARIABLE_KEYWORD,
				VARIABLES_KEYWORD,
				CONSTRUCTOR_KEYWORD,
				CONSTRUCTORS_KEYWORD } = keywords,
			{ keywordNodeQuery,
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
    case TYPE_KEYWORD : {
      const typeDeclarationNode = typeDeclarationNodeQuery(declarationNode);

      verifyTypeDeclaration(typeDeclarationNode, context, rules);
      break;
    }

	  case TYPES_KEYWORD : {
		  const typesDeclarationNode = typesDeclarationNodeQuery(declarationNode);

		  verifyTypesDeclaration(typesDeclarationNode, context, rules);
		  break;
	  }

	  case VARIABLE_KEYWORD : {
      const variableDeclarationNode = variableDeclarationNodeQuery(declarationNode);

      verifyVariableDeclaration(variableDeclarationNode, context, rules);
      break;
    }

    case VARIABLES_KEYWORD : {
      const variablesDeclarationNode = variablesDeclarationNodeQuery(declarationNode);

      verifyVariablesDeclaration(variablesDeclarationNode, context, rules);
      break;
    }

    case CONSTRUCTOR_KEYWORD : {
      const constructorDeclarationNode = constructorDeclarationNodeQuery(declarationNode);

      verifyConstructorDeclaration(constructorDeclarationNode, context, rules);
      break;
    }

    case CONSTRUCTORS_KEYWORD : {
      const constructorsDeclarationNode = constructorsDeclarationNodeQuery(declarationNode);

      verifyConstructorsDeclaration(constructorsDeclarationNode, context, rules);
      break;
    }
  }
}

module.exports = verifyDeclaration;
