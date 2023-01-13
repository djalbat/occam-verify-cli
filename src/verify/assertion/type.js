"use strict";

import Variable from "../../variable";

import { first } from "../../utilities/array";
import { nodeAsString } from "../../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type");

export default function verifyStatementTypeAssertion(typeAssertionNode, qualified, proofContext) {
  let typeAssertionVerified = false;

  proofContext.begin(typeAssertionNode);

  const statementString = nodeAsString(typeAssertionNode);

  proofContext.debug(`Verifying the '${statementString}' type assertion...`);

  const typeNode = typeNodeQuery(typeAssertionNode),
        typeName = typeNameFromTypeNode(typeNode),
        typePresent = proofContext.isTypePresentByTypeName(typeName);

  if (!typePresent) {
    proofContext.error(`The ${typeName} type is not present.`);
  } else {
    if (!typeAssertionVerified) {
      const variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, qualified, proofContext);

      typeAssertionVerified = variableTypeAssertionVerified;  ///
    }

    if (!typeAssertionVerified) {
      const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, qualified, proofContext);

      typeAssertionVerified = termTypeAssertionVerified;  ///
    }
  }

  if (typeAssertionVerified) {
    proofContext.info(`Verified the '${statementString}' statement type assertion.`);
  }

  typeAssertionVerified ?
    proofContext.complete(typeAssertionNode) :
      proofContext.halt(typeAssertionNode);

  return typeAssertionVerified;
}

function verifyVariableTypeAssertion(typeAssertionNode, qualified, proofContext) {
  let variableTypeAssertionVerified = false;

  const context = proofContext, ///
        variables = [],
        termNode = termNodeQuery(typeAssertionNode),
        termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);

  if (termVerifiedAsVariable) {
    const typeNode = typeNodeQuery(typeAssertionNode),
          typeName = typeNameFromTypeNode(typeNode),
          assertedTypeName = typeName,  ///
          assertedType = proofContext.findTypeByTypeName(assertedTypeName),
          firstVariable = first(variables),
          variable = firstVariable, ///
          variableName = variable.getName(),
          variableType = variable.getType();

    const assertedTypeEqualToOrSubTypeOfVariableType = (variableType === null) ?
                                                         true : ///
                                                           assertedType.isEqualToOrSubTypeOf(variableType);

    if (!assertedTypeEqualToOrSubTypeOfVariableType) {
      proofContext.error(`The asserted type is not equal to or a sub-type of the '${variableName}' variable type.`);
    } else {
      if (!qualified) {
        const type = assertedType,  ///
              name = variableName,  ///
              variable = Variable.fromTypeAndName(type, name);

        proofContext.addVariable(variable);
      }

      variableTypeAssertionVerified = true;
    }
  }

  return variableTypeAssertionVerified;
}

function verifyTermTypeAssertion(typeAssertionNode, qualified, proofContext) {
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
          termString = nodeAsString(termNode),
          assertedTypeEqualToOrSubTypeOfTermType = (termType === null) ?
                                                     true : ///
                                                       assertedType.isEqualToOrSubTypeOf(termType);

    if (!assertedTypeEqualToOrSubTypeOfTermType) {
      proofContext.error(`The asserted type is not equal to or a sub-type of the '${termString}' term type.`);
    } else {
      if (!qualified) {
        debugger
      }

      termTypeAssertionVerified = true;
    }
  }

  return termTypeAssertionVerified;
}

