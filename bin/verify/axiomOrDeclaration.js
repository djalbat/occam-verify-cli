"use strict";

const ruleNames = require("../miscellaneous/ruleNames"),
      verifyAxiom = require("../verify/axiom"),
      verifyDeclaration = require("../verify/declaration");

const { AXIOM_RULE_NAME, DECLARATION_RULE_NAME } = ruleNames;

function verifyAxiomOrDeclaration(axiomOrDeclarationNode, context, ruleMap) {
  const ruleName = axiomOrDeclarationNode.getRuleName();

  switch (ruleName) {
    case AXIOM_RULE_NAME:
      const axiomNode = axiomOrDeclarationNode;  ///

      verifyAxiom(axiomNode, context, ruleMap);
      break;

    case DECLARATION_RULE_NAME:
      const declarationNode = axiomOrDeclarationNode;  ///

      verifyDeclaration(declarationNode, context, ruleMap);
      break;
  }
}

module.exports = verifyAxiomOrDeclaration;
