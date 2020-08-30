"use strict";

const dom = require("occam-dom");

const { Query } = dom;

const log = require("../log"),
      constants = require("../constants"),
      verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyTypesDeclaration = require("../verify/declaration/types"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyVariablesDeclaration = require("../verify/declaration/variables");

const { TYPE_DECLARATION,
        TYPES_DECLARATION,
        VARIABLE_DECLARATION,
        VARIABLES_DECLARATION } = constants;

const declarationNodesQuery = Query.fromExpression("//declaration/*", 2);

function verifyDeclarations(fileContext) {
  let declarationsVerified;

  log.debug(`Verifying declarations...`);

  const node = fileContext.getNode(),
        declarationNodes = declarationNodesQuery.execute(node);

  declarationsVerified = declarationNodes.every((declarationNode) => {
    let declarationVerified = false;

    const ruleName = declarationNode.getRuleName();

    switch (ruleName) {
      case TYPE_DECLARATION: {
        const typeDeclarationNode = declarationNode,  ///
              typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, fileContext);

        declarationVerified = typeDeclarationVerified;  ///

        break;
      }

      case TYPES_DECLARATION: {
        const typesDeclarationNode = declarationNode,  ///
              typesDeclarationVerified = verifyTypesDeclaration(typesDeclarationNode, fileContext);

        declarationVerified = typesDeclarationVerified;  ///

        break;
      }

      case VARIABLE_DECLARATION: {
        const variableDeclarationNode = declarationNode,  ///
              variableDeclarationVerified = verifyVariableDeclaration(variableDeclarationNode, fileContext);

        declarationVerified = variableDeclarationVerified;  ///

        break;
      }

      case VARIABLES_DECLARATION: {
        const variablesDeclarationNode = declarationNode,  ///
              variablesDeclarationVerified = verifyVariablesDeclaration(variablesDeclarationNode, fileContext);

        declarationVerified = variablesDeclarationVerified;  ///

        break;
      }
    }

    return declarationVerified;
  });

  return declarationsVerified;
}

module.exports = verifyDeclarations;
