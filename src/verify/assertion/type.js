"use strict";

import TypeAssertion from "../../assertion/type";

import { first } from "../../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyTypeAssertion(typeAssertionNode, assertions, proofContext) {
  let typeAssertionVerified = false;

  proofContext.begin(typeAssertionNode);

  const typeAssertionString = proofContext.nodeAsString(typeAssertionNode);

  proofContext.debug(`Verifying the '${typeAssertionString}' type assertion...`);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = proofContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    proofContext.error(`The ${typeName} type is not present.`);
  } else {
    if (!typeAssertionVerified) {
      const variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assertions, proofContext);

      typeAssertionVerified = variableTypeAssertionVerified;  ///
    }

    if (!typeAssertionVerified) {
      const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, assertions, proofContext);

      typeAssertionVerified = termTypeAssertionVerified;  ///
    }
  }

  if (typeAssertionVerified) {
    proofContext.info(`Verified the '${typeAssertionString}' statement type assertion.`);
  }

  typeAssertionVerified ?
    proofContext.complete(typeAssertionNode) :
      proofContext.halt(typeAssertionNode);

  return typeAssertionVerified;
}

function verifyVariableTypeAssertion(typeAssertionNode, assertions, proofContext) {
  let variableTypeAssertionVerified = false;

  const context = proofContext, ///
        variables = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

  if (termVerifiedAsVariable) {
    if (assertions === null) {
      variableTypeAssertionVerified = true;
    } else {
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
        const assertedTypeName = assertedType.getName(),
              variableTypeName = variableType.getName();

        proofContext.error(`The '${assertedTypeName}' asserted type is not equal to or a sub-type of the '${variableName}' variable's '${variableTypeName}' type.`);
      } else {
        const type = assertedType,  ///
              typeAssertion = TypeAssertion.fromTypeAndVariableName(type, variableName),
              assertion = typeAssertion;  ///

        assertions.push(assertion);

        variableTypeAssertionVerified = true;
      }
    }
  }

  return variableTypeAssertionVerified;
}

function verifyTermTypeAssertion(typeAssertionNode, assertions, proofContext) {
  let termTypeAssertionVerified = false;

  const types = [],
        context = proofContext, ///
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);

  if (termVerifiedAgainstConstructors) {
    if (assertions === null) {
      termTypeAssertionVerified = true;
    } else {
      const typeNode = typeNodeQuery(typeAssertionNode),
            typeName = typeNameFromTypeNode(typeNode),
            assertedTypeName = typeName,  ///
            assertedType = proofContext.findTypeByTypeName(assertedTypeName),
            firstType = first(types),
            termType = firstType,
            termString = proofContext.nodeAsString(termNode),
            assertedTypeEqualToTermType = (termType === null) ?
                                             true : ///
                                               assertedType.isEqualTo(termType);

      if (!assertedTypeEqualToTermType) {
        const termTypeName = termType.getName(),
              assertedTypeName = assertedType.getName();

        proofContext.error(`The '${assertedTypeName}' asserted type is not equal to the '${termString}' term's '${termTypeName}' type.`);
      } else {
        const type = assertedType,  ///
              typeAssertion = TypeAssertion.fromTypeAndTermNode(type, termNode),
              assertion = typeAssertion;  ///

        assertions.push(assertion);

        termTypeAssertionVerified = true;
      }
    }
  }

  return termTypeAssertionVerified;
}

