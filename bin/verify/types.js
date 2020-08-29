"use strict";

const dom = require("occam-dom");

const { Query } = dom;

const verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyTypesDeclaration = require("../verify/declaration/types");

const typeDeclarationNodesQuery = Query.fromExpression("//typeDeclaration", 2),
      typesDeclarationNodesQuery = Query.fromExpression("//typesDeclaration", 2);

function verifyTypes(fileContext) {
  let verified = false;

  const node = fileContext.getNode(),
        typeDeclarationNodes = typeDeclarationNodesQuery.execute(node),
        typesDeclarationNodes = typesDeclarationNodesQuery.execute(node);

  typeDeclarationNodes.every((typeDeclarationNode) => {
    verified = verifyTypeDeclaration(typeDeclarationNode, fileContext);

    if (verified) {
      return true;
    }
  });

  typesDeclarationNodes.every((typesDeclarationNode) => {
    verified = verifyTypesDeclaration(typesDeclarationNode, fileContext);

    if (verified) {
      return true;
    }
  });

  return verified;
}

module.exports = verifyTypes;
