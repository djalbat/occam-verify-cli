"use strict";

import Variable from "../../variable";
import Assignment from "../../assignment";

import { first } from "../../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term!"),
      typeNodeQuery = nodeQuery("/typeAssertion/type!");

export default function verifyTypeAssertion(typeAssertionNode, assignments, derived, context) {
  let typeAssertionVerified = false;

  const typeAssertionString = context.nodeAsString(typeAssertionNode);

  context.debug(`Verifying the '${typeAssertionString}' type assertion...`, typeAssertionNode);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = context.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    context.error(`The ${typeName} type is not present.`, typeAssertionNode);
  } else {
    if (!typeAssertionVerified) {
      const variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assignments, derived, context);

      typeAssertionVerified = variableTypeAssertionVerified;  ///
    }

    if (!typeAssertionVerified) {
      const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, derived, context);

      typeAssertionVerified = termTypeAssertionVerified;  ///
    }
  }

  if (typeAssertionVerified) {
    context.info(`Verified the '${typeAssertionString}' statement type assertion.`, typeAssertionNode);
  }

  return typeAssertionVerified;
}

export function verifyVariableTypeAssertion(typeAssertionNode, assignments, derived, context) {
  let variableTypeAssertionVerified = false;

  const variables = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

  if (termVerifiedAsVariable) {
    const typeNode = typeNodeQuery(typeAssertionNode),
          typeName = typeNameFromTypeNode(typeNode),
          assertedTypeName = typeName,  ///
          assertedType = context.findTypeByTypeName(assertedTypeName);

    if (assertedType === null) {
      context.error(`The '${assertedTypeName}' asserted type is not present.`, typeAssertionNode);
    } else {
      const firstVariable = first(variables),
            variable = firstVariable, ///
            variableName = variable.getName(),
            variableType = variable.getType();

      if (derived) {
        const assertedTypeEqualToOrSuperTypeOfVariableType = assertedType.isEqualToOrSuperTypeOf(variableType);

        if (!assertedTypeEqualToOrSuperTypeOfVariableType) {
          const assertedTypeName = assertedType.getName(),
                variableTypeName = variableType.getName();

          context.error(`The '${assertedTypeName}' asserted type is not equal to or a super-type of the '${variableName}' variable's '${variableTypeName}' type.`, typeAssertionNode);
        } else {
          variableTypeAssertionVerified = true;
        }
      } else {
        const assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);

        if (!assertedTypeEqualToOrSubTypeOfVariableType) {
          const assertedTypeName = assertedType.getName(),
                variableTypeName = variableType.getName();

          context.error(`The '${assertedTypeName}' asserted type is not equal to or a sub-type of the '${variableName}' variable's '${variableTypeName}' type.`, typeAssertionNode);
        } else {
          const name = variableName,  ///
                type = assertedType,  ///
                variable = Variable.fromNameAndType(name, type),
                assignment = Assignment.fromVariable(variable);

          assignments.push(assignment);

          variableTypeAssertionVerified = true;
        }
      }
    }
  }

  return variableTypeAssertionVerified;
}

function verifyTermTypeAssertion(typeAssertionNode, derived, context) {
  let termTypeAssertionVerified = false;

  const types = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context);

  if (termVerifiedAgainstConstructors) {
    const typeNode = typeNodeQuery(typeAssertionNode),
          typeName = typeNameFromTypeNode(typeNode),
          assertedTypeName = typeName,  ///
          assertedType = context.findTypeByTypeName(assertedTypeName);

    if (assertedType === null) {
      context.error(`The '${assertedTypeName}' asserted type is not present.`, typeAssertionNode);
    } else {
      const firstType = first(types),
            termType = firstType; ///

      if (derived) {
        const assertedTypeIsEqualToOrSuperTypeOfTermType = assertedType.isEqualToOrSuperTypeOf(termType);

        if (!assertedTypeIsEqualToOrSuperTypeOfTermType) {
          const termString = context.nodeAsString(termNode),
                termTypeName = termType.getName(),
                assertedTypeName = assertedType.getName();

          context.error(`The '${assertedTypeName}' asserted type is not equal to or a super-type of the '${termString}' term's '${termTypeName}' type.`, typeAssertionNode);
        } else {
          termTypeAssertionVerified = true;
        }
      } else {
        const assertedTypeIsEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);

        if (!assertedTypeIsEqualToOrSubTypeOfTermType) {
          const termString = context.nodeAsString(termNode),
                termTypeName = termType.getName(),
                assertedTypeName = assertedType.getName();

          context.error(`The '${assertedTypeName}' asserted type is not equal to or a sub-type of the '${termString}' term's '${termTypeName}' type.`, typeAssertionNode);
        } else {
          termTypeAssertionVerified = true;
        }
      }
    }
  }

  return termTypeAssertionVerified;
}

