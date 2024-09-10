"use strict";

import Variable from "../../variable";
import verifyTerm from "../../verify/term";
import VariableAssignment from "../../assignment/variable";

import { first } from "../../utilities/array";
import { nodeQuery } from "../../utilities/query";

const termNodeQuery = nodeQuery("/typeAssertion/term!"),
      typeNodeQuery = nodeQuery("/typeAssertion/type!"),
      variableNodeQuery = nodeQuery("/term/variable!");

export default function verifyTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
  let typeAssertionVerified;

  const typeAssertionString = localContext.nodeAsString(typeAssertionNode);

  localContext.trace(`Verifying the '${typeAssertionString}' type assertion...`, typeAssertionNode);

  const verifyTypeAssertionFunctions = [
    verifyDerivedTypeAssertion,
    verifyStatedTypeAssertion
  ];

  typeAssertionVerified = verifyTypeAssertionFunctions.some((verifyTypeAssertionFunction) => {
    const typeAssertionVerified = verifyTypeAssertionFunction(typeAssertionNode, assignments, derived, localContext);

    if (typeAssertionVerified) {
      return true;
    }
  });

  if (typeAssertionVerified) {
    localContext.debug(`...verified the '${typeAssertionString}' type assertion.`, typeAssertionNode);
  }

  return typeAssertionVerified;
}

function verifyDerivedTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
  let derivedTypeAssertionVerified = false;

  if (derived) {
    const typeAssertionString = localContext.nodeAsString(typeAssertionNode);

    localContext.trace(`Verifying the '${typeAssertionString}' derived type assertion...`, typeAssertionNode);

    const terms = [],
          termNode = termNodeQuery(typeAssertionNode),
          termVerified = verifyTerm(termNode, terms, localContext, () => {
            let verifiedAhead = false;

            const typeNode = typeNodeQuery(typeAssertionNode),
                  type = localContext.findTypeByTypeNode(typeNode);

            if (type !== null) {
              const firstTerm = first(terms),
                    term = firstTerm, ///
                    termType = localContext.getTermType(term),
                    typeEqualToOrSuperTypeOfTermType = type.isEqualToOrSuperTypeOf(termType);

              if (typeEqualToOrSuperTypeOfTermType) {
                const variableNode = variableNodeQuery(termNode);

                if (variableNode === null) {
                  verifiedAhead = true;
                } else {
                  let variable = localContext.findVariableByVariableNode(variableNode);

                  variable = Variable.fromVariableAndType(variable, type);

                  const variableAssignment = VariableAssignment.fromVariable(variable),
                        assignment = variableAssignment;  ///

                  assignments.push(assignment);

                  verifiedAhead = true;

                  assignments.pop();
                }
              }
            }

            return verifiedAhead;
          });

    derivedTypeAssertionVerified = termVerified; ///

    if (derivedTypeAssertionVerified) {
      localContext.debug(`...verified the '${typeAssertionString}' derived type assertion.`, typeAssertionNode);
    }
  }

  return derivedTypeAssertionVerified;
}

function verifyStatedTypeAssertion(typeAssertionNode, assignments, derived, localContext) {
  let statedTypeAssertionVerified = false;

  if (!derived) {
    const typeAssertionString = localContext.nodeAsString(typeAssertionNode);

    localContext.trace(`Verifying the '${typeAssertionString}' stated type assertion...`, typeAssertionNode);

    const terms = [],
          termNode = termNodeQuery(typeAssertionNode),
          termVerified = verifyTerm(termNode, terms, localContext, () => {
            let verifiedAhead = false;

            const typeNode = typeNodeQuery(typeAssertionNode),
                  type = localContext.findTypeByTypeNode(typeNode);

            if (type !== null) {
              const firstTerm = first(terms),
                    term = firstTerm, ///
                    termType = term.getType(),
                    typeEqualToOrSubTypeOfTermType = type.isEqualToOrSubTypeOf(termType);

              if (typeEqualToOrSubTypeOfTermType) {
                const variableNode = variableNodeQuery(termNode);

                if (variableNode === null) {
                  verifiedAhead = true;
                } else {
                  let variable = localContext.findVariableByVariableNode(variableNode);

                  variable = Variable.fromVariableAndType(variable, type);

                  const variableAssignment = VariableAssignment.fromVariable(variable),
                        assignment = variableAssignment;  ///

                  assignments.push(assignment);

                  verifiedAhead = true;

                  assignments.pop();
                }
              }
            }

            return verifiedAhead;
          });

    statedTypeAssertionVerified = termVerified; ///

    if (statedTypeAssertionVerified) {
      localContext.debug(`...verified the '${typeAssertionString}' stated type assertion.`, typeAssertionNode);
    }
  }

  return statedTypeAssertionVerified;
}
