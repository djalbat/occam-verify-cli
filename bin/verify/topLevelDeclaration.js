"use strict";

const { nodeQuery } = require("../utilities/query");

const verifyRule = require("../verify/rule"),
      verifyAxiom = require("../verify/axiom"),
      verifyTypeDeclaration = require("../verify/declaration/type"),
      verifyVariableDeclaration = require("../verify/declaration/variable"),
      verifyCombinatorDeclaration = require("../verify/declaration/combinator"),
      verifyConstructorDeclaration = require("../verify/declaration/constructor");

const ruleNodeQuery = nodeQuery("/topLevelDeclaration/rule!"),
      axiomNodeQuery = nodeQuery("/topLevelDeclaration/axiom!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/variableDeclaration!"),
      combinatorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/combinatorDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/constructorDeclaration!");

function verifyTopLevelDeclaration(topLevelDeclarationNode, context) {
  let topLevelDeclarationVerified = false;

  const node = topLevelDeclarationNode, ///
        ruleNode = ruleNodeQuery(node),
        axiomNode = axiomNodeQuery(node),
        typeDeclarationNode = typeDeclarationNodeQuery(node),
        variableDeclarationNode = variableDeclarationNodeQuery(node),
        combinatorDeclarationNode = combinatorDeclarationNodeQuery(node),
        constructorDeclarationNode = constructorDeclarationNodeQuery(node);

  if (false) {
    ///
  } else if (ruleNode !== null) {
    const ruleVerified = verifyRule(ruleNode, context);

    topLevelDeclarationVerified = ruleVerified;  ///
  } else if (axiomNode !== null) {
    const axiomVerified = verifyAxiom(axiomNode, context);

    topLevelDeclarationVerified = axiomVerified;  ///
  } else if (typeDeclarationNode !== null) {
    const typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, context);

    topLevelDeclarationVerified = typeDeclarationVerified;  ///
  } else if (variableDeclarationNode !== null) {
    const variableDeclarationVerified = verifyVariableDeclaration(variableDeclarationNode, context);

    topLevelDeclarationVerified = variableDeclarationVerified;  ///
  } else if (combinatorDeclarationNode !== null) {
    const combinatorDeclarationVerified = verifyCombinatorDeclaration(combinatorDeclarationNode, context);

    topLevelDeclarationVerified = combinatorDeclarationVerified;  ///
  } else if (constructorDeclarationNode !== null) {
    const constructorDeclarationVerified = verifyConstructorDeclaration(constructorDeclarationNode, context);

    topLevelDeclarationVerified = constructorDeclarationVerified;  ///
  }

  return topLevelDeclarationVerified;
}

module.exports = verifyTopLevelDeclaration;
