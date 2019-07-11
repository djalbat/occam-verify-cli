'use strict';

const Term = require('../term'),
      Error = require('../error'),
      queries = require('../queries'),
      verifyParenthesizedTerms = require('../verify/parenthesizedTerms');

const { nameNodeQuery, parenthesisedTermsNodeQuery } = queries;

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
    const terms = verifyParenthesizedTerms(parenthesisedTermsNode, context),
          typeNames = terms.map((term) => {
            const typeName = term.getTypeName();

            return typeName;
          });

    const constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
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
