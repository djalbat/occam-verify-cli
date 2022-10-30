"use strict";

import Variable from "../../variable";
import verifyTermAsVariable from "../../verify/termAsVariable";

import { first } from "../../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyTypeAssertion(typeAssertionNode, context) {
  let typeAssertionVerified = false;

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    context.error(`The ${typeName} type is not present.`);
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
          context.error(`The value of the ${variableName} variable is not undefined.`);
        } else {
          const type = context.findTypeByTypeName(typeName),
                firstType = first(types),
                variableType = firstType, ///
                typeSubTypeOfVariableType = type.isSubTypeOf(variableType);

          if (!typeSubTypeOfVariableType) {
            context.error(`The asserted type of the ${variableName} variable is not a sub-type of its declared type.`);
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
