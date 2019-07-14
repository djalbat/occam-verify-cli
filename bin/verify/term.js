'use strict';

const Error = require('../error'),
      queries = require('../queries'),
      CompoundTerm = require('../compoundTerm');

const { nameNodeQuery, termNodesQuery, parenthesisedTermsNodeQuery } = queries;

function verifyTerm(termNode, context, rules) {
  let term = undefined;

  const nameNode = nameNodeQuery(termNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent, ///
        parenthesisedTermsNode = parenthesisedTermsNodeQuery(termNode);

  if (parenthesisedTermsNode === undefined) {
    const variable = context.retrieveVariableByName(name);

    if (variable !== undefined) {
      term = variable;  ///
    } else {
      const typeNames = undefined,
            constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
            constructorPresent = (constructor !== undefined);

      if (constructorPresent) {
        const typeName = constructor.getTypeName(),
              compoundTerm = CompoundTerm.fromNameAndTypeName(name, typeName);

        term = compoundTerm;  ///
      }
    }
  } else {
    const termNodes = termNodesQuery(parenthesisedTermsNode),
          terms = termNodes.map((termNode) => verifyTerm(termNode, context, rules)),
          typeNames = terms.map((term) => term.getTypeName()),
          constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
          constructorPresent = (constructor !== undefined);

    if (constructorPresent) {
      const typeName = constructor.getTypeName(),
            compoundTerm = CompoundTerm.fromNameTermsAndTypeName(name, terms, typeName);

      term = compoundTerm;  ///
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
