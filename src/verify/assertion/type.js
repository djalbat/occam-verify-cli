"use strict";

import Variable from "../../variable";
import verifyTermAsVariable from "../../verify/termAsVariable";

import { first } from "../../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyTypeAssertion(typeAssertionNode, proofContext) {
  let typeAssertionVerified = false;

  proofContext.begin(typeAssertionNode);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = proofContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    proofContext.error(`The ${typeName} type is not present.`);
  } else {
    const derived = proofContext.isDerived();

    if (derived) {
      debugger
    } else {
      const types = [],
            names = [],
            values = [],
            context = proofContext, ///
            termNode = termNodeQuery(typeAssertionNode),
            termVerifiedAsVariable = verifyTermAsVariable(termNode, types, names, values, context);

      if (termVerifiedAsVariable) {
        const firstName = first(names),
              firstValue = first(values),
              variableName = firstName, ///
              value = firstValue; ///

        if (value !== undefined) {
          proofContext.error(`The value of the ${variableName} variable is not undefined.`);
        } else {
          const type = proofContext.findTypeByTypeName(typeName),
                firstType = first(types),
                variableType = firstType, ///
                typeSubTypeOfVariableType = type.isSubTypeOf(variableType);

          if (!typeSubTypeOfVariableType) {
            proofContext.error(`The asserted type of the ${variableName} variable is not a sub-type of its declared type.`);
          } else {
            const name = variableName,  ///
                  variable = Variable.fromTypeAndName(type, name);

            proofContext.addVariable(variable);

            typeAssertionVerified = true;
          }
        }
      }
    }
  }

  typeAssertionVerified ?
    proofContext.complete(typeAssertionNode) :
      proofContext.halt(typeAssertionNode);

  return typeAssertionVerified;
}
