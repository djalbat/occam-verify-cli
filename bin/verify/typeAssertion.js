"use strict";

const { arrayUtilities, loggingUtilities } = require("necessary");

const Variable = require("../variable"),
      verifyTermAsVariable = require("../verify/termAsVariable");

const { nodeQuery, typeNameFromTypeNode } = require("../utilities/query");

const { log } = loggingUtilities,
      { first } = arrayUtilities;

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

function verifyTypeAssertion(typeAssertionNode, context) {
  let typeAssertionVerified = false;

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    log.error(`The ${typeName} type is not present.`);
  } else {
    const derived = context.isDerived();

    if (derived) {
      debugger
    } else {
      const types = [],
            names = [],
            values = [],
            termNode = termNodeQuery(typeAssertionNode),
            termVerified = verifyTermAsVariable(termNode, types, names, values, context);

      if (termVerified) {
        const firstName = first(names),
              firstValue = first(values),
              variableName = firstName, ///
              value = firstValue;

        if (value !== undefined) {
          log.error(`The value of the ${variableName} variable is not undefined.`);
        } else {
          const type = context.findTypeByTypeName(typeName),
                firstType = first(types),
                variableType = firstType, ///
                typeSubTypeOfVariableType = type.isSubTypeOf(variableType);

          if (!typeSubTypeOfVariableType) {
            log.error(`The asserted type of the ${variableName} variable is not a sub-type of its declared type.`);
          } else {
            const name = variableName,  ///
                  variable = Variable.fromTypeAndName(type, name);

            context.addVariable(variable);

            typeAssertionVerified = true;
          }
        }
      }
    }
  }

  return typeAssertionVerified;
}

module.exports = verifyTypeAssertion;
