"use strict";

const { nodeQuery } = require("../utilities/query");

const verifyAxiom = require("../verify/axiom"),
      verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyConstructorDeclaration = require("../verify/declaration/constructor"),
      verifyConstructorsDeclaration = require("../verify/declaration/constructors");

const axiomNodeQuery = nodeQuery("/topLevelInstruction/axiom!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelInstruction/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelInstruction/variableDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelInstruction/constructorDeclaration!"),
      constructorsDeclarationNodeQuery = nodeQuery("/topLevelInstruction/constructorsDeclaration!");

function verifyTopLevelInstruction(topLevelInstructionNode, fileContext) {
  let topLevelInstructionVerified = false;

  const node = topLevelInstructionNode, ///
        axiomNode = axiomNodeQuery(node),
        typeDeclarationNode = typeDeclarationNodeQuery(node),
        variableDeclarationNode = variableDeclarationNodeQuery(node),
        constructorDeclarationNode = constructorDeclarationNodeQuery(node),
        constructorsDeclarationNode = constructorsDeclarationNodeQuery(node);

  if (false) {
    ///
  } else if (axiomNode !== null) {
    const axiomVerified = verifyAxiom(axiomNode, fileContext);

    topLevelInstructionVerified = axiomVerified;  ///
  } else if (typeDeclarationNode !== null) {
    const typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, fileContext);

    topLevelInstructionVerified = typeDeclarationVerified;  ///
  } else if (variableDeclarationNode !== null) {
    const variableDeclarationVerified = verifyVariableDeclaration(variableDeclarationNode, fileContext);

    topLevelInstructionVerified = variableDeclarationVerified;  ///
  } else if (constructorDeclarationNode !== null) {
    const constructorDeclarationVerified = verifyConstructorDeclaration(constructorDeclarationNode, fileContext);

    topLevelInstructionVerified = constructorDeclarationVerified;  ///
  } else if (constructorsDeclarationNode !== null) {
    const constructorsDeclarationVerified = verifyConstructorsDeclaration(constructorsDeclarationNode, fileContext);

    topLevelInstructionVerified = constructorsDeclarationVerified;  ///
  }

  return topLevelInstructionVerified;
}

module.exports = verifyTopLevelInstruction;
