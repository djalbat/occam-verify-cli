"use strict";

import Variable from "../variable";
import VariableAssignment from "../assignment/variable";
import verifyTermAndGivenType from "../verify/termAndGivenType";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import { verifyTermAsGivenVariable } from "./term";

const termNodeQuery = nodeQuery("/typeAssertion/term!"),
      typeNodeQuery = nodeQuery("/typeAssertion/type!"),
      variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
  let typeAssertionVerified;

  const typeAssertionString = context.nodeAsString(typeAssertionNode);

  context.trace(`Verifying the '${typeAssertionString}' type assertion...`, typeAssertionNode);

  const verifyTypeAssertionFunctions = [
    verifyDerivedTypeAssertion,
    verifyGivenTypeAssertion
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
          termAndGivenTypeVerified = verifyTermAndGivenType(termNode, typeNode, terms, types, context, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  firstType = first(types),
                  term = firstTerm, ///
                  type = firstType, ///
                  termType = term.getType(),
                  typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);

            if (typeEqualToOrSuperTypeOfTermType) {
              verifiedAhead = verifyAhead();
            }

            return verifiedAhead;
          });

    derivedTypeAssertionVerified = termAndGivenTypeVerified; ///

    if (derivedTypeAssertionVerified) {
      context.trace(`...verified the '${typeAssertionString}' derived type assertion.`, typeAssertionNode);
    }
  }

  return derivedTypeAssertionVerified;
}

function verifyGivenTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead) {
  let givenTypeAssertionVerified = false;

  if (!derived) {
    const typeAssertionString = context.nodeAsString(typeAssertionNode);

    context.trace(`Verifying the '${typeAssertionString}' given type assertion...`, typeAssertionNode);

    const terms = [],
          types = [],
          termNode = termNodeQuery(typeAssertionNode),
          typeNode = typeNodeQuery(typeAssertionNode),
          termAndGivenTypeVerified = verifyTermAndGivenType(termNode, typeNode, terms, types, context, () => {
            let verifiedAhead = false;

            const firstTerm = first(terms),
                  firstType = first(types),
                  term = firstTerm, ///
                  type = firstType, ///
                  termType = term.getType(),
                  typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);

            if (typeEqualToOrSubTypeOfTermType) {
              const variableNode = variableNodeQuery(termNode);

              if (variableNode === null) {
                verifiedAhead = verifyAhead();
              } else {
                let variable = context.findVariableByVariableNode(variableNode);

                variable = Variable.fromVariableAndType(variable, type);

                const variableAssignment = VariableAssignment.fromVariable(variable),
                      assignment = variableAssignment;  ///

                assignments.push(assignment);

                verifiedAhead = verifyAhead();

                if (!verifiedAhead) {
                  assignments.pop();
                }
              }
            }

            return verifiedAhead;
          });

    givenTypeAssertionVerified = termAndGivenTypeVerified; ///

    if (givenTypeAssertionVerified) {
      context.trace(`...verified the '${typeAssertionString}' given type assertion.`, typeAssertionNode);
    }
  }

  return givenTypeAssertionVerified;
}
