'use strict';

const verifyAxiom = require('../verify/axiom'),
      verifyDeclaration = require('../verify/declaration');

function verifyTopLevelInstruction(topLevelInstructionNode, context, rules) {
  const ruleName = topLevelInstructionNode.getRuleName();

  switch (ruleName) {
    case 'axiom':
      const axiomNode = topLevelInstructionNode;  ///

      verifyAxiom(axiomNode, context, rules);
      break;

    case 'declaration':
      const declarationNode = topLevelInstructionNode;  ///

      verifyDeclaration(declarationNode, context, rules);
      break;
  }
}

module.exports = verifyTopLevelInstruction;
