"use strict";

import VariableAssignment from "../assignment/variable";
import verifyTermAndStandaloneType from "../verify/termAndStandaloneType";
import verifyTermAsVariableAndStandaloneType from "../verify/termAsVariableAndStandaloneType";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";

const termNodeQuery = nodeQuery("/typeAssertion/term!"),
      typeNodeQuery = nodeQuery("/typeAssertion/type!");

export default function verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
  let typeAssertionVerified;

  const typeAssertionString = context.nodeAsString(typeAssertionNode);

  context.trace(`Verifying the '${typeAssertionString}' type assertion...`, typeAssertionNode);

  const verifyTypeAssertionFunctions = [
    verifyDerivedTypeAssertion,
    verifyStandaloneTypeAssertion
  ];

  typeAssertionVerified = verifyTypeAssertionFunctions.some((verifyTypeAssertionFunction) => {
    const typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assignments, derived, context, verifyAhead);

    if (typeAssertionVerified) {
      return true;
    }
  });

  if (typeAssertionVerified) {
    context.debug(`...verified the '${typeAssertionString}' type assertion.`, typeAssertionNode);
  }

  return typeAssertionVerified;
}

function verifyDerivedTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
  let derivedTypeAssertionVerified = false;

  if (derived) {
    const typeAssertionString = context.nodeAsString(typeAssertionNode);

    context.trace(`Verifying the '${typeAssertionString}' derived type assertion...`, typeAssertionNode);

    const terms = [],
          types = [],
          termNode = termNodeQuery(typeAssertionNode),
          typeNode = typeNodeQuery(typeAssertionNode),
          termAndStandaloneTypeVerified = verifyTermAndStandaloneType(termNode, typeNode, terms, types, context, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  firstType = first(types),
                  term = firstTerm, ///
                  type = firstType, ///
                  termType = term.getType(),
                  termTypeEqualToOrSuperTypeOfType = termType.isEqualToOrSuperTypeOf(type);

            if (termTypeEqualToOrSuperTypeOfType) {
              debugger

              if (false) {  ///
                verifiedAhead = verifyAhead();
              }
            }

            return verifiedAhead;
          });

    derivedTypeAssertionVerified = termAndStandaloneTypeVerified; ///

    if (derivedTypeAssertionVerified) {
      context.trace(`...verified the '${typeAssertionString}' derived type assertion.`, typeAssertionNode);
    }
  }

  return derivedTypeAssertionVerified;
}

function verifyStandaloneTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
  let standaloneTypeAssertionVerified = false;

  if (!derived) {
    const typeAssertionString = context.nodeAsString(typeAssertionNode);

    context.trace(`Verifying the '${typeAssertionString}' standalone type assertion...`, typeAssertionNode);

    const types = [],
          variables = [],
          termNode = termNodeQuery(typeAssertionNode),
          typeNode = typeNodeQuery(typeAssertionNode),
          termAsVariableAndStandaloneTypeVerified = verifyTermAsVariableAndStandaloneType(termNode, typeNode, variables, types, context, () => {
            let verifiedAhead = false;

            const firstVariable = first(variables),
                  firstType = first(types),
                  variable = firstVariable, ///
                  type = firstType, ///
                  variableType = variable.getType(),
                  variableTypeEqualToOrSuperTypeOfType = variableType.isEqualToOrSuperTypeOf(type);

            if (variableTypeEqualToOrSuperTypeOfType) {
              const variableAssignment = VariableAssignment.fromVariable(variable),
                    assignment = variableAssignment; ///

              assignments.push(assignment);

              verifiedAhead = verifyAhead();

              if (!verifiedAhead) {
                assignments.pop();
              }
            }

            return verifiedAhead;
          });

    standaloneTypeAssertionVerified = termAsVariableAndStandaloneTypeVerified; ///

    if (standaloneTypeAssertionVerified) {
      context.trace(`...verified the '${typeAssertionString}' standalone type assertion.`, typeAssertionNode);
    }
  }

  return standaloneTypeAssertionVerified;
}
