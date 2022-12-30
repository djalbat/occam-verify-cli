"use strict";

import Variable from "../../variable";
import verifyTerm from "../../verify/term";

import { first } from "../../utilities/array";
import { nodeAsString } from "../../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

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
            values = [],
            context = proofContext, ///
            termNode = termNodeQuery(typeAssertionNode),
            termString = nodeAsString(termNode),
            termVerifiedAsVariable = verifyTermAsVariable(termNode, types, values, context);

      if (termVerifiedAsVariable) {
        const firstValue = first(values),
              variableName = termString, ///
              value = firstValue; ///

        if (value !== undefined) {
          proofContext.error(`The value of the ${variableName} variable is not undefined.`);
        } else {
          const type = proofContext.findTypeByTypeName(typeName),
                firstType = first(types),
                variableType = firstType, ///
                typeEqualToOrSubTypeOfVariableType = type.isEqualToOrSubTypeOf(variableType);

          if (!typeEqualToOrSubTypeOfVariableType) {
            proofContext.error(`The asserted type of the ${variableName} variable is not equal to or a sub-type of its declared type.`);
          } else {
            const name = variableName,  ///
                  variable = Variable.fromTypeAndName(type, name);

            proofContext.addVariable(variable);

            typeAssertionVerified = true;
          }
        }
      } else {
        const termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, values, context);

        if (termVerifiedAgainstConstructors) {
          const type = proofContext.findTypeByTypeName(typeName),
                firstType = first(types),
                termType = firstType, ///
                typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);

          if (!typeEqualToOrSubTypeOfTermType) {
            proofContext.error(`The asserted type of the '${termString}' term is not equal to or a sub-type of its declared type.`);
          } else {

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
