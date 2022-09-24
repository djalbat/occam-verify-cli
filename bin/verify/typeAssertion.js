"use strict";

const { loggingUtilities } = require("necessary");

const Variable = require("../variable"),
      verifyTerm = require("../verify/term");

const { nodeQuery, typeNameFromTypeNode, variableNameFromVariableNode} = require("../utilities/query");

const { log } = loggingUtilities;

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type"),
      variableNodeQuery = nodeQuery("/typeAssertion/term/variable!");

function verifyTypeAssertion(typeAssertionNode, supposition, context) {
  let typeAssertionVerified = false;

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    log.error(`The ${typeName} type is not present.`);
  } else {
    const type = context.findTypeByTypeName(typeName),
          types = [],
          termNode = termNodeQuery(typeAssertionNode),
          termVerified = verifyTerm(termNode, types, supposition, context);

    if (termVerified) {
      if (supposition) {
        const variableNode = variableNodeQuery(typeAssertionNode),
              variableName = variableNameFromVariableNode(variableNode),
              name = variableName,  ///
              variable = Variable.fromNameAndType(name, type);

        context.addVariable(variable);
      } else {
        debugger
      }
    }
  }

  return typeAssertionVerified;
}

module.exports = verifyTypeAssertion;
