"use strict";

const { loggingUtilities } = require("necessary");

const Variable = require("../variable"),
      verifyTerm = require("../verify/term");

const { nodeQuery, typeNameFromTypeNode, variableNameFromVariableNode} = require("../utilities/query");

const { log } = loggingUtilities;

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type"),
      variableNodeQuery = nodeQuery("/typeAssertion/term/variable!");

function verifyTypeAssertion(typeAssertionNode, context) {
  let typeAssertionVerified = false;

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    log.error(`The ${typeName} type is not present.`);
  } else {
    const type = context.findTypeByTypeName(typeName),
          types = [],
          values = [],
          termNode = termNodeQuery(typeAssertionNode),
          termVerified = verifyTerm(termNode, types, values, context);

    if (termVerified) {
      const antecedent = context.isAntecedent();

      if (antecedent) {
        const variableNode = variableNodeQuery(typeAssertionNode),
              variableName = variableNameFromVariableNode(variableNode),
              name = variableName,  ///
              variable = Variable.fromNameAndType(name, type);

        context.addVariable(variable);

        typeAssertionVerified = true;
      } else {
        debugger
      }
    }
  }

  return typeAssertionVerified;
}

module.exports = verifyTypeAssertion;
