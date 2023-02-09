"use strict";

import Verifier from "../verifier";
import Variable from "../variable";
import Equality from "../equality";
import verifyTerm from "../verify/term";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/assertion/type";

import { objectType } from "../type";
import { first, second } from "../utilities/array";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { STATEMENT_META_TYPE } from "../metaTypes";
import { verifyTermAsVariable } from "../verify/term";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../ruleNames";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

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

class StatementVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          combinatorNonTerminalNode = nonTerminalNodeB; ///

    const ruleName = nonTerminalNode.getRuleName(), ///
      combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

    if (ruleName === combinatorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                combinatorArgumentNode = combinatorNonTerminalNode, ///
                argumentNodeVerified = this.verifyArgumentNode(argumentNode, combinatorArgumentNode, context);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        case META_ARGUMENT_RULE_NAME: {
          const metaArgumentNode = nonTerminalNode, ///
                combinatorMetaargumentNode = combinatorNonTerminalNode, ///
                metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context);

          nonTerminalNodeVerified = metaArgumentNodeVerified; ///

          break;
        }

        default: {
          const childNodes = nonTerminalNode.getChildNodes(),
                combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(),
                nodesA = childNodes, ///
                nodesB = combinatorChildNodes, ///
                nodesVerified = this.verifyNodes(nodesA, nodesB, context);

          nonTerminalNodeVerified = nodesVerified; ///

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyArgumentNode(argumentNode, combinatorArgumentNode, context) {
    let argumentNodeVerified = false;

    const termNode = termNodeQuery(argumentNode);

    if (termNode === null) {
      const argumentString = context.nodeAsString(argumentNode);

      context.error(`The ${argumentString} argument should be a term, not a type`, argumentNode);
    } else {
      const types = [],
            termVerified = verifyTerm(termNode, types, context);

      if (termVerified) {
        const firstType = first(types),
              termType = firstType, ///
              typeNode = typeNodeQuery(combinatorArgumentNode),
              typeName = typeNameFromTypeNode(typeNode),
              type = (typeName === OBJECT_TYPE_NAME) ?
                       objectType :  ///
                         context.findTypeByTypeName(typeName),
              statementTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

        if (statementTypeEqualToOrSubTypeOfType) {
          argumentNodeVerified = true;
        }
      }
    }

    return argumentNodeVerified;
  }

  verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context) {
    let metaArgumentNodeVerified = false;

    const statementNode = statementNodeQuery(metaArgumentNode),
          combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

    if (statementNode === null) {
      const metaArgumentString = context.nodeAsString(metaArgumentNode);

      context.error(`Expected a statement but got a '${metaArgumentString}' meta-type.`, metaArgumentNode);
    } else {
      if (combinatorMetaTYpeNode === null) {
        const combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);

        context.error(`Expected a meta-type but got a '${combinatorMetaargumentString}' statement.`, metaArgumentNode);
      } else {
        const combinatorMetaTypeTerminalNode = metaTypeTerminalNodeQuery(combinatorMetaTYpeNode),
              content = combinatorMetaTypeTerminalNode.getContent(),
              contentStatementMetaType = (content === STATEMENT_META_TYPE);

        if (!contentStatementMetaType) {
          context.error(`Expected the meta-type to be 'Statement' but got '${content}'.`, metaArgumentNode);
        } else {
          metaArgumentNodeVerified = true;
        }
      }
    }

    return metaArgumentNodeVerified;
  }
}

const statementVerifier = new StatementVerifier();

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

          context.error(`The right '${rightVariableName}' variable's '${rightVariableTypeName}' type is not equal to or a super-type of the left '${leftTermString}' term's '${leftTermTypeName}' type.`, statementNode);
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
              leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf = leftTermType.isEqualToOrSubTypeOfOfSuperTypeOf(rightTermType);

        if (!leftTermTypeEqualToOrSubTypeOfOfSuperTypeOf) {
          const leftTermString = context.nodeAsString(leftTermNode),
                rightTermString = context.nodeAsString(rightTermNode),
                leftTermTypeName = leftTermType.getName(),
                rightTermTypeName = rightTermType.getName();

          context.error(`The left '${leftTermString}' term's '${leftTermTypeName}' type is not equal to, a sub-type of or a super-type of the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
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
