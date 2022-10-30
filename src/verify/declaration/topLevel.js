"use strict";

import { nodeQuery } from "../../utilities/query";

const ruleNodeQuery = nodeQuery("/topLevelDeclaration/rule!"),
      axiomNodeQuery = nodeQuery("/topLevelDeclaration/axiom!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/variableDeclaration!"),
      combinatorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/combinatorDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/constructorDeclaration!");

export default function verifyTopLevelDeclaration(topLevelDeclarationNode, context = this) {
  let topLevelDeclarationVerified = false;

  context.begin(topLevelDeclarationNode);

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
    const ruleVerified = context.verifyRule(ruleNode);

    topLevelDeclarationVerified = ruleVerified;  ///
  } else if (axiomNode !== null) {
    const axiomVerified = context.verifyAxiom(axiomNode);

    topLevelDeclarationVerified = axiomVerified;  ///
  } else if (typeDeclarationNode !== null) {
    const typeDeclarationVerified = context.verifyTypeDeclaration(typeDeclarationNode);

    topLevelDeclarationVerified = typeDeclarationVerified;  ///
  } else if (variableDeclarationNode !== null) {
    const variableDeclarationVerified = context.verifyVariableDeclaration(variableDeclarationNode);

    topLevelDeclarationVerified = variableDeclarationVerified;  ///
  } else if (combinatorDeclarationNode !== null) {
    const combinatorDeclarationVerified = context.verifyCombinatorDeclaration(combinatorDeclarationNode);

    topLevelDeclarationVerified = combinatorDeclarationVerified;  ///
  } else if (constructorDeclarationNode !== null) {
    const constructorDeclarationVerified = context.verifyConstructorDeclaration(constructorDeclarationNode);

    topLevelDeclarationVerified = constructorDeclarationVerified;  ///
  }

  topLevelDeclarationVerified ?
    context.complete(topLevelDeclarationNode) :
      context.halt(topLevelDeclarationNode);

  return topLevelDeclarationVerified;
}
