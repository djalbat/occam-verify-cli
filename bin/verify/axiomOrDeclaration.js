"use strict";

const ruleNames = require("../miscellaneous/ruleNames"),
      verifyAxiom = require("../verify/axiom"),
      verifyDeclaration = require("../verify/declaration");

const { AXIOM_RULE_NAME, DECLARATION_RULE_NAME } = ruleNames;

function verifyAxiomOrDeclaration(axiomOrDeclarationNode, fileContext) {
  const ruleName = axiomOrDeclarationNode.getRuleName();

  switch (ruleName) {
    case AXIOM_RULE_NAME:
      const axiomNode = axiomOrDeclarationNode;  ///

      verifyAxiom(axiomNode, fileContext);

      break;

    case DECLARATION_RULE_NAME:
      const declarationNode = axiomOrDeclarationNode;  ///

      verifyDeclaration(declarationNode, fileContext);

      break;
  }
}

module.exports = verifyAxiomOrDeclaration;
