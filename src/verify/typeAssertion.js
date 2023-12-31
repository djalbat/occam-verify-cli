"use strict";

import Variable from "../variable";
import VariableAssignment from "../assignment/variable";

import { first } from "../utilities/array";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term!"),
      typeNodeQuery = nodeQuery("/typeAssertion/type!");

export default function verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
  let typeAssertionVerified = false;

  const typeAssertionString = context.nodeAsString(typeAssertionNode);

  context.trace(`Verifying the '${typeAssertionString}' type assertion...`, typeAssertionNode);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        assertedTypeName = typeName,  ///
        assertedType = context.findTypeByTypeName(assertedTypeName);

  if (assertedType === null) {
    context.debug(`The '${typeName}' asserted type is not present.`, typeAssertionNode);
  } else {
    const verifyTypeAssertionFunctions = [
      verifyVariableTypeAssertion,
      verifyTermTypeAssertion
    ];

    typeAssertionVerified = verifyTypeAssertionFunctions.some((verifyTypeAssertionFunction) => {
      const typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assertedType, assignments, derived, context, verifyAhead);

      if (typeAssertionVerified) {
        return true;
      }
    });
  }

  if (typeAssertionVerified) {
    context.debug(`...verified the '${typeAssertionString}' statement type assertion.`, typeAssertionNode);
  }

  return typeAssertionVerified;
}

export function verifyVariableTypeAssertion(typeAssertionNode, assertedType, assignments, derived, context, verifyAhead) {
  let variableTypeAssertionVerified;

  const typeAssertionString = context.nodeAsString(typeAssertionNode);

  context.trace(`Verifying the '${typeAssertionString}' variable type assertion...`, typeAssertionNode);

  const variables = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, () => {
          let verifiedAhead = false;

          const firstVariable = first(variables),
                variable = firstVariable, ///
                variableName = variable.getName(),
                variableType = variable.getType();

          if (derived) {
            const assertedTypeEqualToOrSuperTypeOfVariableType = assertedType.isEqualToOrSuperTypeOf(variableType);

            if (!assertedTypeEqualToOrSuperTypeOfVariableType) {
              const assertedTypeName = assertedType.getName(),
                    variableTypeName = variableType.getName();

              context.debug(`The '${assertedTypeName}' asserted type is not equal to or a super-type of the '${variableName}' variable's '${variableTypeName}' type.`, typeAssertionNode);
            } else {
              verifiedAhead = verifyAhead();
            }
          } else {
            const assertedTypeEqualToOrSubTypeOfVariableType = assertedType.isEqualToOrSubTypeOf(variableType);

            if (!assertedTypeEqualToOrSubTypeOfVariableType) {
              const assertedTypeName = assertedType.getName(),
                    variableTypeName = variableType.getName();

              context.debug(`The '${assertedTypeName}' asserted type is not equal to or a sub-type of the '${variableName}' variable's '${variableTypeName}' type.`, typeAssertionNode);
            } else {
              const name = variableName,  ///
                    type = assertedType,  ///
                    variable = Variable.fromNameAndType(name, type),
                    variableAssignment = VariableAssignment.fromVariable(variable),
                    assignment = variableAssignment; ///

              assignments.push(assignment);

              verifiedAhead = verifyAhead();

              if (!verifiedAhead) {
                assignments.pop();
              }
            }
          }

          return verifiedAhead;
        });

  variableTypeAssertionVerified = termVerifiedAsVariable; ///

  if (variableTypeAssertionVerified) {
    context.debug(`...verified the '${typeAssertionString}' variable type assertion.`, typeAssertionNode);
  }

  return variableTypeAssertionVerified;
}

function verifyTermTypeAssertion(typeAssertionNode, assertedType, assignments, derived, context, verifyAhead) {
  let termTypeAssertionVerified;

  const typeAssertionString = context.nodeAsString(typeAssertionNode);

  context.trace(`Verifying the '${typeAssertionString}' term type assertion...`, typeAssertionNode);

  const types = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, context, () => {
          let verifiedAhead = false;

          const firstType = first(types),
                termType = firstType; ///

          if (derived) {
            const assertedTypeIsEqualToOrSuperTypeOfTermType = assertedType.isEqualToOrSuperTypeOf(termType);

            if (!assertedTypeIsEqualToOrSuperTypeOfTermType) {
              const termString = context.nodeAsString(termNode),
                    termTypeName = termType.getName(),
                    assertedTypeName = assertedType.getName();

              context.debug(`The '${assertedTypeName}' asserted type is not equal to or a super-type of the '${termString}' term's '${termTypeName}' type.`, typeAssertionNode);
            } else {
              verifiedAhead = verifyAhead();
            }
          } else {
            const assertedTypeIsEqualToOrSubTypeOfTermType = assertedType.isEqualToOrSubTypeOf(termType);

            if (!assertedTypeIsEqualToOrSubTypeOfTermType) {
              const termString = context.nodeAsString(termNode),
                    termTypeName = termType.getName(),
                    assertedTypeName = assertedType.getName();

              context.debug(`The '${assertedTypeName}' asserted type is not equal to or a sub-type of the '${termString}' term's '${termTypeName}' type.`, typeAssertionNode);
            } else {
              verifiedAhead = verifyAhead();
            }
          }

          return verifiedAhead;
        });

  termTypeAssertionVerified = termVerifiedAgainstConstructors;  ///

  if (termTypeAssertionVerified) {
    context.debug(`...verified the '${typeAssertionString}' term type assertion.`, typeAssertionNode);
  }

  return termTypeAssertionVerified;
}
