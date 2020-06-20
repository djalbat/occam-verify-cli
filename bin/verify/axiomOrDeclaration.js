"use strict";

const ruleNames = require("../miscellaneous/ruleNames"),
      verifyAxiom = require("../verify/axiom"),
      verifyDeclaration = require("../verify/declaration");

const { AXIOM_RULE_NAME, DECLARATION_RULE_NAME } = ruleNames;

function verifyAxiomOrDeclaration(axiomOrDeclarationNode, context, rules) {
  const ruleName = axiomOrDeclarationNode.getRuleName();

  switch (ruleName) {
    case AXIOM_RULE_NAME:
      const axiomNode = axiomOrDeclarationNode;  ///

      verifyAxiom(axiomNode, context, rules);
      break;

    case DECLARATION_RULE_NAME:
      const declarationNode = axiomOrDeclarationNode;  ///

      verifyDeclaration(declarationNode, context, rules);
      break;
  }
}

module.exports = verifyAxiomOrDeclaration;
