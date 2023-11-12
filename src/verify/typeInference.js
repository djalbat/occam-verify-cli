"use strict";

import Equality from "../equality";
import verifyTerm from "./term";
import equalityCombinator from "../ocmbinator/equality";

import { nodeQuery } from "../utilities/query";
import { first, second } from "../utilities/array";
import { verifyTermAsVariable } from "./term";
import { verifyVariableTypeAssertion } from "./assertion/type";
import { verifyStatementAgainstCombinator } from "../verify/statement";
import { bracketedStatementChildNodeFromStatementNode } from "../utilities/proof";

const statementNodeQuery = nodeQuery("/typeInference/statement!"),
      typeAssertionNodeQuery = nodeQuery("/typeInference/typeAssertion!");

export default function verifyTypeInference(typeInferenceNode, context) {
  let typeInferenceVerified = false;

  const typeInferenceString = context.nodeAsString(typeInferenceNode);

  context.trace(`Verifying the '${typeInferenceString}' type inference...`, typeInferenceNode);

  let statementNode = statementNodeQuery(typeInferenceNode);

  const bracketedStatementChildNode = bracketedStatementChildNodeFromStatementNode(statementNode);

  if (bracketedStatementChildNode !== null) {
    statementNode = bracketedStatementChildNode; ///
  }

  const statementString = context.nodeAsString(statementNode),
        statementMatches = context.matchStatement(statementNode);

  if (!statementMatches) {
    context.info(`The '${statementString}' statement is not present in the context.`, typeInferenceNode);
  } else {
    const combinator = equalityCombinator,  ///
          statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);

    if (!statementVerifiedAgainstCombinator) {
      context.info(`The '${statementString}' statement is not an equality.`, typeInferenceNode);
    } else {
      const derived = false,  ///
            equality = Equality.fromStatementNode(statementNode),
            assignments = [],
            typeAssertionNode = typeAssertionNodeQuery(typeInferenceNode),
            variableTypeAssertionVerified = verifyVariableTypeAssertion(typeAssertionNode, assignments, derived, context)

      if (variableTypeAssertionVerified) {
        const firstAssignment = first(assignments),
              assignment = firstAssignment, ///
              variables = [],
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

          if (leftVariableTypeEqualToOrSubTypeOfOfSuperTypeOfRightVariableType) {
            const leftVariableTypeSuperTypeOfRightVariableType = leftVariableType.isSuperTypeOf(rightVariableType),
                  rightVariableTypeSuperTypeOfLeftVariableType = rightVariableType.isSuperTypeOf(leftVariableType);

            if (leftVariableTypeSuperTypeOfRightVariableType) {
              const name = leftVariableName, ///
                    type = rightVariableType;  ///

              assignAssignment(name, type, assignment, context);
            }

            if (rightVariableTypeSuperTypeOfLeftVariableType) {
              const name = rightVariableName, ///
                    type = leftVariableType;  ///

              assignAssignment(name, type, assignment, context);
            }
          }
        } else if (leftTermVerifiedAsVariable) {
          const types = [];

          verifyTerm(rightTermNode, types, context);

          const firstType = first(types),
                firstVariable = first(variables),
                leftVariable = firstVariable, ///
                rightTermType = firstType,  ///
                leftVariableName = leftVariable.getName(),
                leftVariableType = leftVariable.getType(),
                leftVariableTypeEqualToOrSuperTypeOfRightTermType = leftVariableType.isEqualToOrSuperTypeOf(rightTermType);

          if (leftVariableTypeEqualToOrSuperTypeOfRightTermType) {
            const name = leftVariableName,  ///
                  type = rightTermType; ///

            assignAssignment(name, type, assignment, context);
          }
        } else if (rightTermVerifiedAsVariable) {
          const types = [];

          verifyTerm(leftTermNode, types, context);

          const firstType = first(types),
                firstVariable = first(variables),
                leftTermType = firstType,  ///
                rightVariable = firstVariable, ///
                rightVariableName = rightVariable.getName(),
                rightVariableType = rightVariable.getType(),
                rightVariableTypeEqualToOrSuperTypeOfRightTermType = rightVariableType.isEqualToOrSuperTypeOf(leftTermType);

          if (rightVariableTypeEqualToOrSuperTypeOfRightTermType) {
            const name = rightVariableName,  ///
                  type = leftTermType; ///

            assignAssignment(name, type, assignment, context);
          }
        }

        typeInferenceVerified = true;
      }
    }
  }

  if (typeInferenceVerified) {
    context.debug(`...verified the '${typeInferenceString}' type inference.`, typeInferenceNode);
  }

  return typeInferenceVerified;
}

function assignAssignment(name, type, assignment, context) {
  const assignmentMatchesNameAndType = assignment.matchNameAndType(name, type);

  if (assignmentMatchesNameAndType) {
    assignment.assign(context);
  }
}
