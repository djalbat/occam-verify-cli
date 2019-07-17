'use strict';

const verifyAxiom = require('../verify/axiom'),
      verifyDeclaration = require('../verify/declaration');

function verifyAxiomOrDeclaration(axiomOrDeclarationNode, context, rules) {
  const ruleName = axiomOrDeclarationNode.getRuleName();

  switch (ruleName) {
    case 'axiom':
      const axiomNode = axiomOrDeclarationNode;  ///

      verifyAxiom(axiomNode, context, rules);
      break;

    case 'declaration':
      const declarationNode = axiomOrDeclarationNode;  ///

      verifyDeclaration(declarationNode, context, rules);
      break;
  }
}

module.exports = verifyAxiomOrDeclaration;
