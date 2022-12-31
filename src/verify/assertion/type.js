"use strict";

import { first } from "../../utilities/array";
import { nodeAsString } from "../../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyTypeAssertion(typeAssertionNode, proofContext) {
  let typeAssertionVerified = false;

  proofContext.begin(typeAssertionNode);

  const typeAssertionString = nodeAsString(typeAssertionNode);

  proofContext.debug(`Verifying the '${typeAssertionString}' type assertion...`);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = proofContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    proofContext.error(`The ${typeName} type is not present.`);
  } else {
    let assertedType = null;

    const type = proofContext.findTypeByTypeName(typeName),
          context = proofContext, ///
          termNode = termNodeQuery(typeAssertionNode);

    const variables = [],
          termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

    if (termVerifiedAsVariable) {
      const firstVariable = first(variables),
            variable = firstVariable, ///
            variableType = variable.getType();

      assertedType = variableType;  ///
    } else {
      const types = [],
            termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);

      if (termVerifiedAgainstConstructors) {
        const firstType = first(types),
              termType = firstType; ///

        assertedType = termType;  ///
      }
    }

    if (assertedType !== null) {
      const typeEqualToOrSubTypeOfAssertedType = type.isEqualToOrSubTypeOf(assertedType);

      if (!typeEqualToOrSubTypeOfAssertedType) {
        const termString = nodeAsString(termNode);

        proofContext.error(`The type of the '${termString}' term or variable is not equal to or a sub-type of the asserted type.`);
      } else {
        typeAssertionVerified = true;
      }
    }
  }

  if (typeAssertionVerified) {
    proofContext.info(`Verified the '${typeAssertionString}' type assertion.`);
  }

  typeAssertionVerified ?
    proofContext.complete(typeAssertionNode) :
      proofContext.halt(typeAssertionNode);

  return typeAssertionVerified;
}
