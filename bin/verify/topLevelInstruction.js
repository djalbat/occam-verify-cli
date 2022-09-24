"use strict";

const { nodeQuery } = require("../utilities/query");

const verifyAxiom = require("../verify/axiom"),
      verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyCombinatorDeclaration = require("../verify/declaration/combinator"),
      verifyConstructorDeclaration = require("../verify/declaration/constructor");

const axiomNodeQuery = nodeQuery("/topLevelInstruction/axiom!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelInstruction/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelInstruction/variableDeclaration!"),
      combinatorDeclarationNodeQuery = nodeQuery("/topLevelInstruction/combinatorDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelInstruction/constructorDeclaration!");

function verifyTopLevelInstruction(topLevelInstructionNode, context) {
  let topLevelInstructionVerified = false;

  const node = topLevelInstructionNode, ///
        axiomNode = axiomNodeQuery(node),
        typeDeclarationNode = typeDeclarationNodeQuery(node),
        variableDeclarationNode = variableDeclarationNodeQuery(node),
        combinatorDeclarationNode = combinatorDeclarationNodeQuery(node),
        constructorDeclarationNode = constructorDeclarationNodeQuery(node);

  if (false) {
    ///
  } else if (axiomNode !== null) {
    const axiomVerified = verifyAxiom(axiomNode, context);

    topLevelInstructionVerified = axiomVerified;  ///
  } else if (typeDeclarationNode !== null) {
    const typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, context);

    topLevelInstructionVerified = typeDeclarationVerified;  ///
  } else if (variableDeclarationNode !== null) {
    const variableDeclarationVerified = verifyVariableDeclaration(variableDeclarationNode, context);

    topLevelInstructionVerified = variableDeclarationVerified;  ///
  } else if (combinatorDeclarationNode !== null) {
    const combinatorDeclarationVerified = verifyCombinatorDeclaration(combinatorDeclarationNode, context);

    topLevelInstructionVerified = combinatorDeclarationVerified;  ///
  } else if (constructorDeclarationNode !== null) {
    const constructorDeclarationVerified = verifyConstructorDeclaration(constructorDeclarationNode, context);

    topLevelInstructionVerified = constructorDeclarationVerified;  ///
  }

  return topLevelInstructionVerified;
}

module.exports = verifyTopLevelInstruction;
