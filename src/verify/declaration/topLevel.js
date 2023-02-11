"use strict";

import verifyRule from "../../verify/rule";
import verifyAxiom from "../../verify/axiom";
import verifyLemma from "../../verify/lemma";
import verifyTheorem from "../../verify/theorem";
import verifyConjecture from "../../verify/conjecture";
import verifyTypeDeclaration from "../../verify/declaration/type";
import verifyVariableDeclaration from "../../verify/declaration/variable";
import verifyCombinatorDeclaration from "../../verify/declaration/combinator";
import verifyConstructorDeclaration from "../../verify/declaration/constructor";
import verifyMetavariableDeclaration from "../../verify/declaration/metavariable";

import { nodeQuery } from "../../utilities/query";

const ruleNodeQuery = nodeQuery("/topLevelDeclaration/rule!"),
      axiomNodeQuery = nodeQuery("/topLevelDeclaration/axiom!"),
      lemmaNodeQuery = nodeQuery("/topLevelDeclaration/lemma!"),
      theoremNodeQuery = nodeQuery("/topLevelDeclaration/theorem!"),
      conjectureNodeQuery = nodeQuery("/topLevelDeclaration/conjecture!"),
      typeDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/typeDeclaration!"),
      variableDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/variableDeclaration!"),
      combinatorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/combinatorDeclaration!"),
      constructorDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/constructorDeclaration!"),
      metavariableDeclarationNodeQuery = nodeQuery("/topLevelDeclaration/metavariableDeclaration!");

export default function verifyTopLevelDeclaration(topLevelDeclarationNode, fileContext) {
  let topLevelDeclarationVerified = false;

  const node = topLevelDeclarationNode, ///
        ruleNode = ruleNodeQuery(node),
        axiomNode = axiomNodeQuery(node),
        lemmaNode = lemmaNodeQuery(node),
        theoremNode = theoremNodeQuery(node),
        conjectureNode = conjectureNodeQuery(node),
        typeDeclarationNode = typeDeclarationNodeQuery(node),
        variableDeclarationNode = variableDeclarationNodeQuery(node),
        combinatorDeclarationNode = combinatorDeclarationNodeQuery(node),
        constructorDeclarationNode = constructorDeclarationNodeQuery(node),
        metavariableDeclarationNode = metavariableDeclarationNodeQuery(node);

  if (false) {
    ///
  } else if (ruleNode !== null) {
    const ruleVerified = verifyRule(ruleNode, fileContext);

    topLevelDeclarationVerified = ruleVerified;  ///
  } else if (axiomNode !== null) {
    const axiomVerified = verifyAxiom(axiomNode, fileContext);

    topLevelDeclarationVerified = axiomVerified;  ///
  } else if (lemmaNode !== null) {
    const lemmaVerified = verifyLemma(lemmaNode, fileContext);

    topLevelDeclarationVerified = lemmaVerified;  ///
  } else if (theoremNode !== null) {
    const theoremVerified = verifyTheorem(theoremNode, fileContext);

    topLevelDeclarationVerified = theoremVerified;  ///
  } else if (conjectureNode !== null) {
    const conjectureVerified = verifyConjecture(conjectureNode, fileContext);

    topLevelDeclarationVerified = conjectureVerified;  ///
  } else if (typeDeclarationNode !== null) {
    const typeDeclarationVerified = verifyTypeDeclaration(typeDeclarationNode, fileContext);

    topLevelDeclarationVerified = typeDeclarationVerified;  ///
  } else if (variableDeclarationNode !== null) {
    const variableDeclarationVerified = verifyVariableDeclaration(variableDeclarationNode, fileContext);

    topLevelDeclarationVerified = variableDeclarationVerified;  ///
  } else if (combinatorDeclarationNode !== null) {
    const combinatorDeclarationVerified = verifyCombinatorDeclaration(combinatorDeclarationNode, fileContext);

    topLevelDeclarationVerified = combinatorDeclarationVerified;  ///
  } else if (constructorDeclarationNode !== null) {
    const constructorDeclarationVerified = verifyConstructorDeclaration(constructorDeclarationNode, fileContext);

    topLevelDeclarationVerified = constructorDeclarationVerified;  ///
  } else if (metavariableDeclarationNode !== null) {
    const metavariableDeclarationVerified = verifyMetavariableDeclaration(metavariableDeclarationNode, fileContext);

    topLevelDeclarationVerified = metavariableDeclarationVerified;  ///
  }

  return topLevelDeclarationVerified;
}
