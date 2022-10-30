"use strict";

import verifyRule from "../../verify/rule";
import verifyAxiom from "../../verify/axiom";
import verifyTypeDeclaration from "../../verify/declaration/type";
import verifyVariableDeclaration from "../../verify/declaration/variable";
import verifyCombinatorDeclaration from "../../verify/declaration/combinator";
import verifyConstructorDeclaration from "../../verify/declaration/constructor";

import { nodeQuery } from "../../utilities/query";

const ruleNodeQuery = nodeQuery("/topLevelDeclaration/rule!"),
      axiomNodeQuery = nodeQuery("/topLevelDeclaration/axiom!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/variableDeclaration!"),
      combinatorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/combinatorDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/constructorDeclaration!");

export default function verifyTopLevelDeclaration(topLevelDeclarationNode, context) {
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

  topLevelDeclarationVerified ?
    context.complete(topLevelDeclarationNode) :
      context.halt(topLevelDeclarationNode);

  return topLevelDeclarationVerified;
}
