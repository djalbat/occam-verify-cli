'use strict';

const verifyAxiom = require('../verify/axiom'),
      verifyDeclaration = require('../verify/declaration');

function verifyTopLevelInstruction(topLevelInstructionNode, context) {
  const ruleName = topLevelInstructionNode.getRuleName();

  switch (ruleName) {
    case 'axiom':
      const axiomNode = topLevelInstructionNode;  ///

      verifyAxiom(axiomNode, context);
      break;

    case 'declaration':
      const declarationNode = topLevelInstructionNode;  ///

      verifyDeclaration(declarationNode, context);
      break;
  }
}

module.exports = verifyTopLevelInstruction;
