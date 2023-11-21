"use strict";

import Equality from "../equality";
import verifyTerm from "../verify/term";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeInference from "../verify/typeInference";
import verifyTypeAssertion from "../verify/assertion/type";
import equalityStatementNode from "../node/statement/equality";
import statementNodesVerifier from "../verifier/nodes/statement";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";
import { EQUALITY_DEPTH } from "../constants";

const leftTermNodeQuery = nodeQuery("/statement/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/statement/argument[1]/term!"),
      typeInferenceNodeQuery = nodeQuery("/statement/typeInference!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerified;

  const statementString = context.nodeAsString(statementNode);

  context.trace(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAsEquality,
    verifyStatementAsTypeInference,
    verifyStatementAsTypeAssertion,
    verifyStatementAgainstCombinators
  ];

  statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, verifyAhead);

    if (statementVerified) {
      return true;
    }
  });

  if (statementVerified) {
    context.debug(`...verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}

Object.assign(verifyStatement, {
  statementNodesVerifier
});

export default verifyStatement;

export function verifyStatementAgainstCombinators(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAgainstCombinators;

  let combinators = context.getCombinators();

  combinators = [ ///
    bracketedCombinator,
    ...combinators
  ];

  statementVerifiedAgainstCombinators = combinators.some((combinator) => {
    const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead);

    if (statementVerifiedAgainstCombinator) {
      return true;
    }
  });

  return statementVerifiedAgainstCombinators;
}

export function verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead) {
  let statementVerifiedAgainstCombinator;

  const statementString = context.nodeAsString(statementNode),
        combinatorString = combinator.getString();

  context.trace(`Verifying the '${statementString}' statement against the '${combinatorString}' combinator...`, statementNode);

  const combinatorStatementNode = combinator.getStatementNode(),
        nonTerminalNodeA = statementNode, ///
        nonTerminalNodeB = combinatorStatementNode, ///
        nonTerminalNodeVerified = statementNodesVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead);

  statementVerifiedAgainstCombinator = nonTerminalNodeVerified;  ///

  if (statementVerifiedAgainstCombinator) {
    context.debug(`...verified the '${statementString}' statement against the '${combinatorString}' combinator.`, statementNode);
  }

  return statementVerifiedAgainstCombinator;
}

function verifyStatementAsTypeInference(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsTypeInference = false;

  const typeInferenceNode = typeInferenceNodeQuery(statementNode);

  if (typeInferenceNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as a type inference...`, statementNode);

    if (!derived) {
      const typeInferenceString = context.nodeAsString(typeInferenceNode);

      context.info(`The '${typeInferenceString}' type inference can only be derived.`, typeInferenceNode);
    } else {
      const typeInferenceVerified = verifyTypeInference(typeInferenceNode, context, verifyAhead);

      statementVerifiedAsTypeInference = typeInferenceVerified; ///
    }

    if (statementVerifiedAsTypeInference) {
      context.debug(`...verified the '${statementString}' statement as a type inference.`, statementNode);
    }
  }

  return statementVerifiedAsTypeInference;
}

function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as a type assertion...`, statementNode);

    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///

    if (statementVerifiedAsTypeAssertion) {
      context.debug(`...verified the '${statementString}' statement as a type assertion.`, statementNode);
    }
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsEquality = false;

  const depth = EQUALITY_DEPTH,
        statementNodeMatchesEqualityStatementNode = statementNode.match(equalityStatementNode, depth);

  if (statementNodeMatchesEqualityStatementNode) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const verifyStatementAsEqualityFunctions = [
      verifyStatementAsDerivedEquality,
      verifyStatementAsStandaloneEquality
    ];

    statementVerifiedAsEquality = verifyStatementAsEqualityFunctions.some((verifyStatementAsEqualityFunction) => {
      const statementVerified = verifyStatementAsEqualityFunction(statementNode, derived, context, verifyAhead);

      if (statementVerified) {
        return true;
      }
    });

    if (statementVerifiedAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
}

function verifyStatementAsDerivedEquality(statementNode, derived, context, verifyAhead) {
  let verifiedStatementAsDerivedEquality = false;

  if (derived) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as a derived equality...`, statementNode);

    const equality = Equality.fromStatementNode(statementNode),
          equalities = context.getEqualities(),
          equalityVerified = equality.verify(equalities, context, verifyAhead);

    verifiedStatementAsDerivedEquality = equalityVerified;  ///

    if (verifiedStatementAsDerivedEquality) {
      context.debug(`...verified the '${statementString}' statement as a derived equality.`, statementNode);
    }
  }

  return verifiedStatementAsDerivedEquality;
}

function verifyStatementAsStandaloneEquality(statementNode, derived, context, verifyAhead) {
  let statementVerifiedAsStandaloneEquality;

  const statementString = context.nodeAsString(statementNode);

  context.trace(`Verifying the '${statementString}' statement as a standalone equality...`, statementNode);

  const types = [],
        leftTermNode = leftTermNodeQuery(statementNode),
        leftTermVerified = verifyTerm(leftTermNode, types, context, () => {
          let verifiedAhead;

          const rightTermNode = rightTermNodeQuery(statementNode),
                rightTermVerified = verifyTerm(rightTermNode, types, context, () => {
                  let verifiedAhead = false;

                  const firstType = first(types),
                        secondType = second(types),
                        leftType = firstType, ///
                        rightType = secondType, ///
                        leftTypeEqualToOrSubTypeOfOfSuperTypeOfRightType = leftType.isEqualToOrSubTypeOfOfSuperTypeOf(rightType);

                  if (!leftTypeEqualToOrSubTypeOfOfSuperTypeOfRightType) {
                    const leftTypeName = leftType.getName(),
                          rightTypeName = rightType.getName(),
                          leftTermString = context.nodeAsString(leftTermNode),
                          rightTermString = context.nodeAsString(rightTermNode);

                    context.info(`The left '${leftTermString}' term's '${leftTypeName}' type is not equal to, a sub-type of nor a super-type of the right '${rightTermString}' term's '${rightTypeName}' type.`, statementNode);
                  } else {
                    verifiedAhead = verifyAhead();
                  }

                  return verifiedAhead;
                });

              verifiedAhead = rightTermVerified;  ///

              return verifiedAhead;
            });

  statementVerifiedAsStandaloneEquality = leftTermVerified; ///

  if (statementVerifiedAsStandaloneEquality) {
    context.trace(`...verified the '${statementString}' statement as a standalone equality.`, statementNode);
  }

  return statementVerifiedAsStandaloneEquality;
}
