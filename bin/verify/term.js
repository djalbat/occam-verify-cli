'use strict';

const Error = require('../error'),
      queries = require('../queries');

const { nameNodeQuery,
        termNodesQuery,
        parenthesisedTermsNodeQuery } = queries;

function verifyTerm(termNode, context) {
  let typeName = undefined;

  const nameNode = nameNodeQuery(termNode),
        nameNodeContent = nameNode.getContent(),
        name = nameNodeContent, ///
        parenthesisedTermsNode = parenthesisedTermsNodeQuery(termNode);

  if (parenthesisedTermsNode === undefined) {
    const variable = context.retrieveVariableByName(name),
          variablePresent = (variable !== undefined);

    if (variablePresent) {
      typeName = variable.getTypeName();
    }

    const typeNames = undefined,
          constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
          constructorPresent = (constructor !== undefined);

    if (constructorPresent) {
      typeName = constructor.getTypeName();
    }
  } else {
    const termNodes = termNodesQuery(parenthesisedTermsNode),
          typeNames = termNodes.reduce((typeNames, termNode) => {
            if (typeNames !== undefined) {
              const typeName = verifyTerm(termNode, context);

              if (typeName === undefined) {
                typeNames = undefined;
              } else {
                typeNames.push(typeName);
              }
            }

            return typeNames;
          }, []);

    const constructor = context.retrieveConstructorByNameAndTypeNames(name, typeNames),
          constructorPresent = (constructor !== undefined);

    if (constructorPresent) {
      typeName = constructor.getTypeName();
    }
  }

  if (typeName === undefined) {
    const node = termNode, ///
          message = `The term '${name}' cannot be verified.`;

    throw new Error(node, message);
  }

  return typeName;
}

module.exports = verifyTerm;
