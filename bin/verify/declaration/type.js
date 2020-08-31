"use strict";

const dom = require("occam-dom"),
      necessary = require("necessary");

const verifyType = require("../../verify/type"),
      nodeUtilities = require("../../utilities/node");

const { Query } = dom,
      { arrayUtilities } = necessary,
      { first, second } = arrayUtilities,
      { nameFromNameNameNode } = nodeUtilities;

const typeNameNameNodesQuery = Query.fromExpression("/*/typeName/@name");

function verifyTypeDeclaration(typeDeclarationNode, fileContext) {
  let typeDeclarationVerified;

  const typeNameNameNodes = typeNameNameNodesQuery.execute(typeDeclarationNode),
        typeNames = typeNameNameNodes.map((typeNameNameNode) => nameFromNameNameNode(typeNameNameNode)),
        firstTypeName = first(typeNames),
        secondTypeName = second(typeNames),
        typeName = firstTypeName, ///
        superTypeName = secondTypeName, ///
        typeVerified = verifyType(typeName, superTypeName, fileContext);

  typeDeclarationVerified = typeVerified; ///

  return typeDeclarationVerified;
}

module.exports = verifyTypeDeclaration;
