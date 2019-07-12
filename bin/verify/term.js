'use strict';

const Term = require('../term'),
      Error = require('../error'),
      queries = require('../queries');

const { nameNodeQuery, termNodesQuery, parenthesisedTermsNodeQuery } = queries;

function verifyTerm(termNode, context) {
  let term = undefined;

  const nameNode = nameNodeQuery(termNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent, ///
        parenthesisedTermsNode = parenthesisedTermsNodeQuery(termNode);

  if (parenthesisedTermsNode === undefined) {
    const typeNames = undefined,
          constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
          constructorPresent = (constructor !== undefined);

    if (constructorPresent) {
      const typeName = constructor.getTypeName();

      term = Term.fromNameAndTypeName(name, typeName);
    }
  } else {
    const termNodes = termNodesQuery(parenthesisedTermsNode),
          terms = termNodes.map((termNode) => {
            const term = verifyTerm(termNode, context);

            return term;
          }),
          typeNames = terms.map((term) => {
            const typeName = term.getTypeName();

            return typeName;
          }),
          constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
          constructorPresent = (constructor !== undefined);

    if (constructorPresent) {
      const typeName = constructor.getTypeName();

      term = Term.fromNameTermsAndTypeName(name, terms, typeName)
    }
  }

  if (term === undefined) {
    const node = termNode, ///
          message = `The term '${name}' cannot be verified.`;

    throw new Error(node, message);
  }

  return term;
}

module.exports = verifyTerm;
