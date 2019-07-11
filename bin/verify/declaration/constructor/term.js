'use strict';

const Error = require('../../../error'),
      queries = require('../../../queries'),
      verifyTerm = require('../../../verify/term'),
      Constructor = require('../../../constructor');

const { termNodeQuery } = queries;

function verifyTermConstructorDeclaration(constructorDeclarationNode, context) {
  const termNode = termNodeQuery(constructorDeclarationNode);

  verifyTerm(termNode, context);
}

module.exports = verifyTermConstructorDeclaration;
