'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      Constructor = require('../../../constructor');

const { termNodeQuery } = queries;

function verifyTermConstructorDeclaration(constructorDeclarationNode, context) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  debugger
}

module.exports = verifyTermConstructorDeclaration;
