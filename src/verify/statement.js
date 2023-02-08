"use strict";

import Variable from "../variable";
import Equality from "../equality";
import verifyTerm from "../verify/term";
import statementVerifier from "../verifier/statement";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/assertion/type";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";
import { verifyTermAsVariable } from "../verify/term";

const typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, assignments, derived, context) {
  let statementVerified = false;

  if (!statementVerified) {
    const statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);

    statementVerified = statementVerifiedAgainstCombinators;  ///
  }

  if (!statementVerified) {
    const statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assignments, derived, context);

    statementVerified = statementVerifiedAsTypeAssertion; ///
  }

  if (!statementVerified) {
    const statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, derived, context);

    statementVerified = statementVerifiedAsEquality;  //
  }

  return statementVerified;
}

function verifyStatementAgainstCombinators(statementNode, context) {
  let statementVerifiedAgainstCombinators = false;

  let combinators = context.getCombinators();

  combinators = [ ///
    bracketedCombinator,
    ...combinators
  ];

  const combinator = combinators.find((combinator) => {
    const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);

    if (statementVerifiedAgainstCombinator) {
      return true;
    }
  }) || null;

  if (combinator !== null) {
    statementVerifiedAgainstCombinators = true;
  }

  return statementVerifiedAgainstCombinators;
}

function verifyStatementAgainstCombinator(statementNode, combinator, context) {
  const combinatorStatementNode = combinator.getStatementNode(),
        nonTerminalNodeA = statementNode,  ///
        nonTerminalNodeB = combinatorStatementNode, ///
        nodeVerified = statementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context),
        statementVerifiedAgainstCombinator = nodeVerified;  ///

  return statementVerifiedAgainstCombinator;
}

function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, context);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsEquality(statementNode, derived, context) {
  let statementVerifiedAsEquality = false;

  const combinator = equalityCombinator,  ///
        statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);

  if (statementVerifiedAgainstCombinator) {
    const equality = Equality.fromStatementNode(statementNode);

    if (derived) {
      const equalities = context.getEqualities(),
            equalityVerified = equality.verify(equalities, context);

      statementVerifiedAsEquality = equalityVerified;  ///
    } else {
      const variables = [],
            leftTermNode = equality.getLeftTermNode(),
            rightTermNode = equality.getRightTermNode(),
            leftTermVerifiedAsVariable = verifyTermAsVariable(leftTermNode, variables, context),
            rightTermVerifiedAsVariable = verifyTermAsVariable(rightTermNode, variables, context);

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

          context.error(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to, a sub-type of or a super-type of the right '${rightVariableName}' variable's '${rightVariableTypeName}' type.`, statementNode);
        } else {
          const leftVariableTypeSuperTypeOfRightVariableType = leftVariableType.isSuperTypeOf(rightVariableType),
                rightVariableTypeSuperTypeOfLeftVariableType = rightVariableType.isSuperTypeOf(leftVariableType);

          if (leftVariableTypeSuperTypeOfRightVariableType) {
            const type = rightVariableType,  ///
                  name = leftVariableName, ///
                  variable = Variable.fromTypeAndName(type, name);

            context.addVariable(variable);
          }

          if (rightVariableTypeSuperTypeOfLeftVariableType) {
            const type = leftVariableType,  ///
                  name = rightVariableName, ///
                  variable = Variable.fromTypeAndName(type, name);

            context.addVariable(variable);
          }

          statementVerifiedAsEquality = true;
        }
      } else if (leftTermVerifiedAsVariable) {
        const types = [];

        verifyTerm(rightTermNode, types, context);

        const firstType = first(types),
              firstVariable = first(variables),
              leftVariable = firstVariable, ///
              rightTermType = firstType,  ///
              leftVariableType = leftVariable.getType(),
              leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);

        if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
          const rightTermString = context.nodeAsString(rightTermNode),
                leftVariableName = leftVariable.getName(),
                rightTermTypeName = rightTermType.getName(),
                leftVariableTypeName = leftVariableType.getName();

          context.error(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to or a super-type of the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      } else if (rightTermVerifiedAsVariable) {
        const types = [];

        verifyTerm(leftTermNode, types, context);

        const firstType = first(types),
              firstVariable = first(variables),
              leftTermType = firstType,  ///
              rightVariable = firstVariable, ///
              rightVariableType = rightVariable.getType(),
              rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType.isEqualToOrSuperTypeOf(leftTermType);

        if (!rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
          const leftTermString = context.nodeAsString(leftTermNode),
                rightVariableName = rightVariable.getName(),
                leftTermTypeName = leftTermType.getName(),
                rightVariableTypeName = rightVariableType.getName();

          context.error(`The left '${rightVariableName}' variable's '${rightVariableTypeName}' type is not equal to or a super-type of the right '${leftTermString}' term's '${leftTermTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      } else {
        const types = [];

        verifyTerm(leftTermNode, types, context);

        verifyTerm(rightTermNode, types, context);

        const firstType = first(types),
              secondType = second(types),
              leftTermType = firstType, ///
              rightTermType = secondType, ///
              leftTermTypeEqualToRightTermType = leftTermType.isEqualTo(rightTermType);

        if (!leftTermTypeEqualToRightTermType) {
          const leftTermString = context.nodeAsString(leftTermNode),
                rightTermString = context.nodeAsString(rightTermNode),
                leftTermTypeName = leftTermType.getName(),
                rightTermTypeName = rightTermType.getName();

          context.error(`The left '${leftTermString}' term's '${leftTermTypeName}' type is not equal to the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      }
    }
  }

  if (statementVerifiedAsEquality) {
    const statementString = context.nodeAsString(statementNode);

    context.info(`Verified the '${statementString}' statement as an equality.`, statementNode);
  }

  return statementVerifiedAsEquality;
}
