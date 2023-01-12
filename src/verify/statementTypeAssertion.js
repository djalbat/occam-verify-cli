"use strict";

import Variable from "../variable";

import { first } from "../utilities/array";
import { nodeAsString } from "../utilities/string";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { verifyTermAsVariable, verifyTermAgainstConstructors } from "../verify/term";

const termNodeQuery = nodeQuery("/typeAssertion/term"),
      typeNodeQuery = nodeQuery("/typeAssertion/type"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatementTypeAssertion(statementNode, qualified, proofContext) {
  let statementTypeAssertionVerified = false;

  proofContext.begin(statementNode);

  const statementString = nodeAsString(statementNode);

  proofContext.debug(`Verifying the '${statementString}' statement type assertion...`);

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeNode = typeNodeQuery(typeAssertionNode),
          typeName = typeNameFromTypeNode(typeNode),
          typePresent = proofContext.isTypePresentByTypeName(typeName);

    if (!typePresent) {
      proofContext.error(`The ${typeName} type is not present.`);
    } else {
      if (!statementTypeAssertionVerified) {
        const variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, qualified, proofContext);

        statementTypeAssertionVerified = variableTypeAssertionVerified;  ///
      }

      if (!statementTypeAssertionVerified) {
        const termTypeAssertionVerified = verifyTermTypeAssertion(typeAssertionNode, qualified, proofContext);

        statementTypeAssertionVerified = termTypeAssertionVerified;  ///
      }
    }
  }

  if (statementTypeAssertionVerified) {
    proofContext.info(`Verified the '${statementString}' statement type assertion.`);
  }

  statementTypeAssertionVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementTypeAssertionVerified;
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

