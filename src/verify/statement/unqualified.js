"use strict";

import verifyStatement from "../../verify/statement";

import Assertion from "../../assertion";

import { nodeQuery } from "../../utilities/query";
import { nodeAsString } from "../../utilities/string";

const statementNodeQuery = nodeQuery("/unqualifiedStatement/statement!");

export default function verifyUnqualifiedStatement(unqualifiedStatementNode, proofContext) {
  let unqualifiedStatementVerified = false;

  proofContext.begin(unqualifiedStatementNode);

  const statementNode = statementNodeQuery(unqualifiedStatementNode);

  if (statementNode !== null) {
    const derived = proofContext.isDerived();

    if (derived) {
      const assertion = Assertion.fromStatementNode(statementNode),
            assertionMatches = proofContext.matchAssertion(assertion);

      unqualifiedStatementVerified = assertionMatches;  ///
    } else {
      unqualifiedStatementVerified = true;
    }
  }

  if (unqualifiedStatementVerified) {
    const statementString = nodeAsString(statementNode);

    proofContext.debug(`Verified the '${statementString}' unqualified statement.`);
  }

  unqualifiedStatementVerified ?
    proofContext.complete(unqualifiedStatementNode) :
      proofContext.halt(unqualifiedStatementNode);

  return unqualifiedStatementVerified;
}

// if (derived) {
//   debugger
// } else {
//   const types = [],
//     context = proofContext, ///
//     termNode = termNodeQuery(typeAssertionNode),
//     variables = [],
//     termString = nodeAsString(termNode),
//     termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context);
//
//   if (termVerifiedAsVariable) {
//     const firstValue = first(values),
//       variableName = termString, ///
//       value = firstValue; ///
//
//     if (value !== undefined) {
//       proofContext.error(`The value of the ${variableName} variable is not undefined.`);
//     } else {
//       const type = proofContext.findTypeByTypeName(typeName),
//         firstType = first(types),
//         variableType = firstType, ///
//         typeEqualToOrSubTypeOfVariableType = type.isEqualToOrSubTypeOf(variableType);
//
//       if (!typeEqualToOrSubTypeOfVariableType) {
//         proofContext.error(`The asserted type of the ${variableName} variable is not equal to or a sub-type of its declared type.`);
//       } else {
//         const name = variableName,  ///
//           variable = Variable.fromTypeAndName(type, name);
//
//         proofContext.addVariable(variable);
//
//         typeAssertionVerified = true;
//       }
//     }
//   } else {
//     const termVerifiedAgainstConstructors = verifyTermAgainstConstructors(termNode, types, values, context);
//
//     if (termVerifiedAgainstConstructors) {
//       const type = proofContext.findTypeByTypeName(typeName),
//         firstType = first(types),
//         termType = firstType, ///
//         typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);
//
//       if (!typeEqualToOrSubTypeOfTermType) {
//         proofContext.error(`The asserted type of the '${termString}' term is not equal to or a sub-type of its declared type.`);
//       } else {
//
//         typeAssertionVerified = true;
//       }
//     }
//   }
// }
