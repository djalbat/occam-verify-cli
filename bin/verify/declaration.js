"use strict";

const verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyTypesDeclaration = require("../verify/declaration/types"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyVariablesDeclaration = require("../verify/declaration/variables"),
      verifyOperatorDeclaration = require("../verify/declaration/operator"),
      verifyOperatorsDeclaration = require("../verify/declaration/operators"),
      verifyConstructorDeclaration = require("../verify/declaration/constructor"),
      verifyConstructorsDeclaration = require("../verify/declaration/constructors");

const ruleNameToVerifyDeclarationMap = {
  "typeDeclaration": verifyTypeDeclaration,
  "typesDeclaration": verifyTypesDeclaration,
  "variableDeclaration": verifyVariableDeclaration,
  "variablesDeclaration": verifyVariablesDeclaration,
  "operatorDeclaration": verifyOperatorDeclaration,
  "operatorsDeclaration": verifyOperatorsDeclaration,
  "constructorDeclaration": verifyConstructorDeclaration,
  "constructorsDeclaration": verifyConstructorsDeclaration
};

function verifyDeclaration(declarationNode, fileContext) {
  const ruleName = declarationNode.getRuleName(),
        verifyDeclaration = ruleNameToVerifyDeclarationMap[ruleName],
        declarationVerified = verifyDeclaration(declarationNode, fileContext);

  return declarationVerified;
}

module.exports = verifyDeclaration;
