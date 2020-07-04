"use strict";

const queries = require("../miscellaneous/queries"),
			keywords = require("../miscellaneous/keywords"),
			verifyTypeDeclaration = require("../verify/declaration/type"),
			verifyTypesDeclaration = require("../verify/declaration/types"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyOperatorDeclaration = require("../verify/declaration/operator"),
      verifyVariablesDeclaration = require("../verify/declaration/variables"),
      verifyOperatorsDeclaration = require("../verify/declaration/operators"),
      verifyConstructorDeclaration = require("../verify/declaration/constructor"),
      verifyConstructorsDeclaration = require("../verify/declaration/constructors");

const { TYPE_KEYWORD,
				TYPES_KEYWORD,
				VARIABLE_KEYWORD,
				VARIABLES_KEYWORD,
        OPERATOR_KEYWORD,
        OPERATORS_KEYWORD,
				CONSTRUCTOR_KEYWORD,
				CONSTRUCTORS_KEYWORD } = keywords,
			{ keywordTerminalNodeQuery,
        typeDeclarationNodeQuery,
				typesDeclarationNodeQuery,
        variableDeclarationNodeQuery,
        variablesDeclarationNodeQuery,
        operatorDeclarationNodeQuery,
        operatorsDeclarationNodeQuery,
        constructorDeclarationNodeQuery,
        constructorsDeclarationNodeQuery } = queries;

function verifyDeclaration(declarationNode, fileContext) {
  const keywordTerminalNode = keywordTerminalNodeQuery(declarationNode),
        keywordTerminalNodeContent = keywordTerminalNode.getContent(),
        keyword = keywordTerminalNodeContent;  ///

  switch (keyword) {
    case TYPE_KEYWORD: {
      const typeDeclarationNode = typeDeclarationNodeQuery(declarationNode);

      verifyTypeDeclaration(typeDeclarationNode, fileContext);

      break;
    }

	  case TYPES_KEYWORD: {
		  const typesDeclarationNode = typesDeclarationNodeQuery(declarationNode);

		  verifyTypesDeclaration(typesDeclarationNode, fileContext);

		  break;
	  }

	  case VARIABLE_KEYWORD: {
      const variableDeclarationNode = variableDeclarationNodeQuery(declarationNode);

      verifyVariableDeclaration(variableDeclarationNode, fileContext);

      break;
    }

    case VARIABLES_KEYWORD: {
      const variablesDeclarationNode = variablesDeclarationNodeQuery(declarationNode);

      verifyVariablesDeclaration(variablesDeclarationNode, fileContext);

      break;
    }

    case OPERATOR_KEYWORD: {
      const operatorDeclarationNode = operatorDeclarationNodeQuery(declarationNode);

      verifyOperatorDeclaration(operatorDeclarationNode, fileContext);

      break;
    }

    case OPERATORS_KEYWORD: {
      const operatorsDeclarationNode = operatorsDeclarationNodeQuery(declarationNode);

      verifyOperatorsDeclaration(operatorsDeclarationNode, fileContext);

      break;
    }

    case CONSTRUCTOR_KEYWORD: {
      const constructorDeclarationNode = constructorDeclarationNodeQuery(declarationNode);

      verifyConstructorDeclaration(constructorDeclarationNode, fileContext);

      break;
    }

    case CONSTRUCTORS_KEYWORD: {
      const constructorsDeclarationNode = constructorsDeclarationNodeQuery(declarationNode);

      verifyConstructorsDeclaration(constructorsDeclarationNode, fileContext);

      break;
    }

    default:

      debugger
  }
}

module.exports = verifyDeclaration;
