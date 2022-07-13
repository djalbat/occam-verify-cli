"use strict";

const { nodeQuery } = require("../utilities/query");

const verifyTypeDeclaration = require("../verify/declaration/type");

const typeDeclarationNodeQuery = nodeQuery("/topLevelInstruction/typeDeclaration!");

function verifyTopLevelInstruction(topLevelInstructionNode, fileContext) {
  let topLevelInstructionVerified = false;

  const node = topLevelInstructionNode, ///
        typeDeclarationNode = typeDeclarationNodeQuery(node);

  if (false) {
    ///
  } else if (typeDeclarationNode !== undefined) {
    const typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, fileContext);

    topLevelInstructionVerified = typeDeclarationVerified;  ///
  }

  return topLevelInstructionVerified;
}

module.exports = verifyTopLevelInstruction;
