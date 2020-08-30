"use strict";

const dom = require("occam-dom");

const { Query } = dom;

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

const declarationNodesQuery = Query.fromExpression("/document/declaration/*", 2);

function verifyDeclarations(fileContext) {
  let declarationsVerified;

  const node = fileContext.getNode(),
        declarationNodes = declarationNodesQuery.execute(node);

  declarationsVerified = declarationNodes.every((declarationNode) => {
    const ruleName = declarationNode.getRuleName(),
          verifyDeclaration = ruleNameToVerifyDeclarationMap[ruleName],
          declarationVerified = verifyDeclaration(declarationNode, fileContext);

    return declarationVerified;
  });

  return declarationsVerified;
}

module.exports = verifyDeclarations;
