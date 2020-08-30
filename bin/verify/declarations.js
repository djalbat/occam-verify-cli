"use strict";

const dom = require("occam-dom");

const { Query } = dom;

const log = require("../log"),
      constants = require("../constants"),
      verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyTypesDeclaration = require("../verify/declaration/types");

const { TYPE_DECLARATION, TYPES_DECLARATION } = constants;

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
    }

    return declarationVerified;
  });

  return declarationsVerified;
}

module.exports = verifyDeclarations;
