"use strict";

import Equality from "../equality";
import Variable from "../variable";
import Assignment from "../assignment";
import verifyTerm from "../verify/term";
import statementVerifier from "../verifier/statement";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/assertion/type";

import { first } from "../utilities/array";
import { nodeQuery } from "../utilities/query";
import { nodeAsString } from "../utilities/string";
import { verifyTermAsVariable } from "../verify/term";

const leftTermNodeQuery = nodeQuery("/statement/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/statement/argument[1]/term!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

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
    const statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, assignments, derived, context);

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
        substitutions = null,
        nodeVerified = statementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, substitutions, context),
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

function verifyStatementAsEquality(statementNode, assignments, derived, context) {
  let statementVerifiedAsEquality = false;

  const statementString = context.nodeAsString(statementNode);

  const combinator = equalityCombinator,  ///
        statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);

  if (statementVerifiedAgainstCombinator) {
    const leftTermNode = leftTermNodeQuery(statementNode),
          rightTermNode = rightTermNodeQuery(statementNode);

    if (derived) {
      const equality = Equality.fromLeftTermNodeAndRightTermNode(leftTermNode, rightTermNode),
            equalityEquates = equality.equate(context);

      statementVerifiedAsEquality = equalityEquates;  ///
    } else {
      const types = [],
            variables = [],
            leftTermVerifiedAsVariable = verifyTermAsVariable(leftTermNode, variables, context);

      if (leftTermVerifiedAsVariable) {
        verifyTerm(rightTermNode, types, context);

        const firstVariable = first(variables),
              leftVariable = firstVariable, ///
              firstType = first(types),
              rightTermType = firstType, ///
              leftVariableType = leftVariable.getType(),
              leftVariableName = leftVariable.getName(),
              leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);

        if (!leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
          const rightTermString = nodeAsString(rightTermNode),
                rightTermTypeName = rightTermType.getName(),
                leftVariableTypeName = leftVariableType.getName();

          context.error(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to or a super-type of the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
        } else {
          const type = leftVariableType,  ///
                name = leftVariableName,  ///
                termNode = rightTermNode, ///
                variable = Variable.fromTypeNameAndTermNode(type, name, termNode),
                assignment = Assignment.fromVariable(variable);

          assignments.push(assignment);

          statementVerifiedAsEquality = true;
        }
      } else {
        const rightTermVerifiedAsVariable = verifyTermAsVariable(rightTermNode, variables, context);

        if (rightTermVerifiedAsVariable) {
          const firstVariable = first(variables),
                rightVariable = firstVariable,  ///
                leftTermString = nodeAsString(leftTermNode),
                rightVariableName = rightVariable.getName();

          context.error(`The left '${leftTermString}' term cannot be equated with the right '${rightVariableName}' variable.`, statementNode);
        } else {
          statementVerifiedAsEquality = true;
        }
      }
    }
  }

  if (statementVerifiedAsEquality) {
    context.info(`Verified the '${statementString}' statement as an equality.`, statementNode);
  }

  return statementVerifiedAsEquality;
}
