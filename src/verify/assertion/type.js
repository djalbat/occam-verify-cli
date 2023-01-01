"use strict";

import { first } from "../../utilities/array";
import { nodeAsString } from "../../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";
import Variable from "../../variable";

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
    const context = proofContext, ///
          termNode = termNodeQuery(typeAssertionNode),
          variables = [],
          termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

    if (termVerifiedAsVariable) {
      const variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, proofContext);

      typeAssertionVerified = variableTypeAssertionVerified;  ///
    } else {
      const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, proofContext);

      typeAssertionVerified = termTypeAssertionVerified;  ///
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

function verifyTermTypeAssertion(typeAssertionNode, proofContext) {
  let termTypeAssertionVerified = false;

  const types = [],
        context = proofContext, ///
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);

  if (termVerifiedAgainstConstructors) {
    const typeNode = typeNodeQuery(typeAssertionNode),
          typeName = typeNameFromTypeNode(typeNode),
          assertedTypeName = typeName,  ///
          assertedType = proofContext.findTypeByTypeName(assertedTypeName),
          firstType = first(types),
          termType = firstType,
          assertedTypeEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);

    if (!assertedTypeEqualToOrSubTypeOfTermType) {
      const termString = nodeAsString(termNode);

      proofContext.error(`The asserted type is not equal to or a sub-type of the '${termString}' term type.`);
    } else {
      termTypeAssertionVerified = true;
    }
  }

  return termTypeAssertionVerified;
}

function verifyVariableTypeAssertion(typeAssertionNode, proofContext) {
  let variableTypeAssertionVerified = false;

  const context = proofContext, ///
        variables = [],
        termNode = termNodeQuery(typeAssertionNode);

  verifyTermAsVariable(termNode, variables, context);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        assertedTypeName = typeName,  ///
        assertedType = proofContext.findTypeByTypeName(assertedTypeName),
        firstVariable = first(variables),
        variable = firstVariable, ///
        variableName = variable.getName(),
        variableType = variable.getType(),
        assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);

  if (!assertedTypeEqualToOrSubTypeOfVariableType) {
    proofContext.error(`The asserted type is not equal to or a sub-type of the '${variableName}' variable type.`);
  } else {
    const derived = proofContext.isDerived();

    if (!derived) {
      const type = assertedType,  ///
            name = variableName,  ///
            variable = Variable.fromTypeAndName(type, name);

      proofContext.addVariable(variable);
    }

    variableTypeAssertionVerified = true;
  }

  return variableTypeAssertionVerified;
}
