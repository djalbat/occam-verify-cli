"use strict";

import Equality from "../equality";
import verifyTerm from "../verify/term";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeInference from "../verify/typeInference";
import verifyTypeAssertion from "../verify/assertion/type";
import statementNodesVerifier from "../verifier/nodes/statement";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";
import { verifyTermAsVariable } from "../verify/term";

const typeInferenceNodeQuery = nodeQuery("/statement/typeInference!"),
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
    const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, () => {
      const verifiedAhead = verifyAhead();

      return verifiedAhead;
    });

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

  const combinator = equalityCombinator,  ///
        statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead);

  if (statementVerifiedAgainstCombinator) {
    const statementString = context.nodeAsString(statementNode);

    context.trace(`Verifying the '${statementString}' statement as an equality...`, statementNode);

    const equality = Equality.fromStatementNode(statementNode);

    if (derived) {
      const equalities = context.getEqualities(),
            equalityVerified = equality.verify(equalities, context, verifyAhead);

      statementVerifiedAsEquality = equalityVerified;  ///
    } else {
      const variables = [],
            leftTermNode = equality.getLeftTermNode(),
            rightTermNode = equality.getRightTermNode(),
            leftTermVerifiedAsVariable = verifyTermAsVariable(leftTermNode, variables, context, verifyAhead),
            rightTermVerifiedAsVariable = verifyTermAsVariable(rightTermNode, variables, context, verifyAhead);

      if (leftTermVerifiedAsVariable && rightTermVerifiedAsVariable) {
        const firstVariable = first(variables),
              secondVariable = second(variables),
              leftVariable = firstVariable, ///
              rightVariable = secondVariable, ///
              leftVariableName = leftVariable.getName(),
              leftVariableType = leftVariable.getType(),
              rightVariableName = rightVariable.getName(),
              rightVariableType = rightVariable.getType(),
              leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType = leftVariableType.isEqualToOrSubTypeOfOfSuperTypeOf(rightVariableType);

        if (!leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
          const leftVariableTypeName = leftVariableType.getName(),
                rightVariableTypeName = rightVariableType.getName();

          context.info(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to, a sub-type of nor a super-type of the right '${rightVariableName}' variable's '${rightVariableTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      } else if (leftTermVerifiedAsVariable) {
        const types = [];

        verifyTerm(rightTermNode, types, context, verifyAhead);

        const firstType = first(types),
              firstVariable = first(variables),
              leftVariable = firstVariable, ///
              rightTermType = firstType,  ///
              leftVariableName = leftVariable.getName(),
              leftVariableType = leftVariable.getType(),
              leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);

        if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
          const rightTermString = context.nodeAsString(rightTermNode),
                rightTermTypeName = rightTermType.getName(),
                leftVariableTypeName = leftVariableType.getName();

          context.info(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to or a super-type of the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      } else if (rightTermVerifiedAsVariable) {
        const types = [];

        verifyTerm(leftTermNode, types, context, verifyAhead);

        const firstType = first(types),
              firstVariable = first(variables),
              leftTermType = firstType,  ///
              rightVariable = firstVariable, ///
              rightVariableName = rightVariable.getName(),
              rightVariableType = rightVariable.getType(),
              rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType.isEqualToOrSuperTypeOf(leftTermType);

        if (!rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
          const leftTermString = context.nodeAsString(leftTermNode),
                leftTermTypeName = leftTermType.getName(),
                rightVariableTypeName = rightVariableType.getName();

          context.info(`The right '${rightVariableName}' variable's '${rightVariableTypeName}' type is not equal to or a super-type of the left '${leftTermString}' term's '${leftTermTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      } else {
        const types = [];

        verifyTerm(leftTermNode, types, context, verifyAhead);

        verifyTerm(rightTermNode, types, context, verifyAhead);

        const firstType = first(types),
              secondType = second(types),
              leftTermType = firstType, ///
              rightTermType = secondType, ///
              leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf = leftTermType.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType);

        if (!leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf) {
          const leftTermString = context.nodeAsString(leftTermNode),
                rightTermString = context.nodeAsString(rightTermNode),
                leftTermTypeName = leftTermType.getName(),
                rightTermTypeName = rightTermType.getName();

          context.info(`The left '${leftTermString}' term's '${leftTermTypeName}' type is not equal to, a sub-type of or a super-type of the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      }
    }

    if (statementVerifiedAsEquality) {
      context.debug(`...verified the '${statementString}' statement as an equality.`, statementNode);
    }
  }

  return statementVerifiedAsEquality;
}
