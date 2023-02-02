"use strict";

import Variable from "../../variable";
import TypeAssertion from "../../assertion/type";

import { first } from "../../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyTypeAssertion(typeAssertionNode, assertions, derived, proofContext) {
  let typeAssertionVerified = false;

  const typeAssertionString = proofContext.nodeAsString(typeAssertionNode);

  proofContext.debug(`Verifying the '${typeAssertionString}' type assertion...`, typeAssertionNode);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = proofContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    proofContext.error(`The ${typeName} type is not present.`, typeAssertionNode);
  } else {
    if (!typeAssertionVerified) {
      const variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assertions, derived, proofContext);

      typeAssertionVerified = variableTypeAssertionVerified;  ///
    }

    if (!typeAssertionVerified) {
      const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, proofContext);

      typeAssertionVerified = termTypeAssertionVerified;  ///
    }
  }

  if (typeAssertionVerified) {
    proofContext.info(`Verified the '${typeAssertionString}' statement type assertion.`, typeAssertionNode);
  }

  return typeAssertionVerified;
}

function verifyVariableTypeAssertion(typeAssertionNode, assertions, derived, proofContext) {
  let variableTypeAssertionVerified = false;

  const context = proofContext, ///
        variables = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

  if (termVerifiedAsVariable) {
    const typeNode = typeNodeQuery(typeAssertionNode),
          typeName = typeNameFromTypeNode(typeNode),
          assertedTypeName = typeName,  ///
          assertedType = proofContext.findTypeByTypeName(assertedTypeName);

    if (assertedType === null) {
      proofContext.error(`The '${assertedTypeName}' asserted type is not present.`, typeAssertionNode);
    } else {
      const firstVariable = first(variables),
            variable = firstVariable, ///
            variableName = variable.getName(),
            variableType = variable.getType();

      if (derived) {
        const variableTypeEqualToOrSubTypeOfAssertedType = variableType.isEqualToOrSubTypeOf(assertedType);

        if (!variableTypeEqualToOrSubTypeOfAssertedType) {
          const assertedTypeName = assertedType.getName(),
                variableTypeName = variableType.getName();

          proofContext.error(`The '${variableName}' variable's '${variableTypeName}' type is not equal to or a sub-type of the '${assertedTypeName}' asserted type.`, typeAssertionNode);
        } else {
          variableTypeAssertionVerified = true;
        }
      } else {
        const assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);

        if (!assertedTypeEqualToOrSubTypeOfVariableType) {
          const assertedTypeName = assertedType.getName(),
                variableTypeName = variableType.getName();

          proofContext.error(`The '${assertedTypeName}' asserted type is not equal to or a sub-type of the '${variableName}' variable's '${variableTypeName}' type.`, typeAssertionNode);
        } else {
          const type = assertedType,  ///
                name = variableName,  ///
                variable = Variable.fromTypeAndName(type, name),
                typeAssertion = TypeAssertion.fromVariable(variable),
                assertion = typeAssertion;  ///

          assertions.push(assertion);

          variableTypeAssertionVerified = true;
        }
      }
    }
  }

  return variableTypeAssertionVerified;
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
          assertedType = proofContext.findTypeByTypeName(assertedTypeName);

    if (assertedType === null) {
      proofContext.error(`The '${assertedTypeName}' asserted type is not present.`, typeAssertionNode);
    } else {
      const firstType = first(types),
            termType = firstType, ///
            termTypeIsEqualToAssertedType = termType.isEqualTo(assertedType);

      if (!termTypeIsEqualToAssertedType) {
        const termString = proofContext.nodeAsString(termNode),
              termTypeName = termType.getName(),
              assertedTypeName = assertedType.getName();

        proofContext.error(`The '${assertedTypeName}' asserted type is not equal to the '${termString}' term's '${termTypeName}' type.`, typeAssertionNode);
      } else {
        termTypeAssertionVerified = true;
      }
    }
  }

  return termTypeAssertionVerified;
}

