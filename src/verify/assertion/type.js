"use strict";

import Variable from "../../variable";

import { first } from "../../utilities/array";
import { nodeAsString } from "../../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyTypeAssertion(typeAssertionNode, types, variables, proofContext) {
  let typeAssertionVerified = false;

  proofContext.begin(typeAssertionNode);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = proofContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    proofContext.error(`The ${typeName} type is not present.`);
  } else {
    const type = proofContext.findTypeByTypeName(typeName),
          context = proofContext, ///
          termNode = termNodeQuery(typeAssertionNode),
          variables = [],
          termString = nodeAsString(termNode),
          termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

    if (termVerifiedAsVariable) {
      types.add(type);

      typeAssertionVerified = true;
    } else {
      const termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, values, context);

    }


    const ;


    const derived = proofContext.isDerived();

    if (derived) {
      debugger
    } else {

      if (termVerifiedAsVariable) {
        const firstVariable = first(variables),
              variable = firstVariable, ///
              variableName = variable.getName(),
              variableDefined = variable.isDefined();

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
