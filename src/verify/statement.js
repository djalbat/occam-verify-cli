"use strict";

import Verifier from "../verifier";
import Equality from "../equality";
import verifyTerm from "../verify/term";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeInference from "../verify/typeInference";
import verifyTypeAssertion from "../verify/assertion/type";

import { objectType } from "../type";
import { termVerifier } from "../verify/term";
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
      typeInferenceNodeQuery = nodeQuery("/statement/typeInference!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!"),
      metaTypeTerminalNodeQuery = nodeQuery("/metaType/@meta-type");

class StatementVerifier extends Verifier {
  verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead) {
    let nonTerminalNodeVerified = false;

    const nonTerminalNode = nonTerminalNodeA, ///
          combinatorNonTerminalNode = nonTerminalNodeB; ///

    const ruleName = nonTerminalNode.getRuleName(), ///
          combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

    if (ruleName === combinatorRuleName) {
      switch (ruleName) {
        case ARGUMENT_RULE_NAME: {
          const argumentNode = nonTerminalNode, ///
                constructorArgumentNode = combinatorNonTerminalNode, ///
                argumentNodeVerified = termVerifier.verifyArgumentNode(argumentNode, constructorArgumentNode, context, verifyAhead);

          nonTerminalNodeVerified = argumentNodeVerified; ///

          break;
        }

        case META_ARGUMENT_RULE_NAME: {
          const metaArgumentNode = nonTerminalNode, ///
                combinatorMetaargumentNode = combinatorNonTerminalNode, ///
                metaArgumentNodeVerified = this.verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead);

          nonTerminalNodeVerified = metaArgumentNodeVerified; ///

          break;
        }

        default: {
          const childNodes = nonTerminalNode.getChildNodes(),
                combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(),
                nodesA = childNodes, ///
                nodesB = combinatorChildNodes, ///
                nodesVerified = this.verifyNodes(nodesA, nodesB, context, verifyAhead);

          nonTerminalNodeVerified = nodesVerified; ///

          break;
        }
      }
    }

    return nonTerminalNodeVerified;
  }

  verifyArgumentNode(argumentNode, combinatorArgumentNode, context, verifyAhead) {
    let argumentNodeVerified = false;

    const termNode = termNodeQuery(argumentNode);

    if (termNode === null) {
      const argumentString = context.nodeAsString(argumentNode);

      context.error(`The '${argumentString}' argument should be a term, not a type`, argumentNode);
    } else {
      const types = [],
            termVerified = verifyTerm(termNode, types, context, verifyAhead);

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

  verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context, verifyAhead) {
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

export const statementVerifier = new StatementVerifier();

export default function verifyStatement(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerified;

  const statementString = context.nodeAsString(statementNode);

  context.debug(`Verifying the '${statementString}' statement...`, statementNode);

  const verifyStatementFunctions = [
    verifyStatementAgainstCombinators,
    verifyStatementAsTypeInference,
    verifyStatementAsTypeAssertion,
    verifyStatementAsEquality
  ];

  statementVerified = verifyStatementFunctions.some((verifyStatementFunction) => {
    const statementVerified = verifyStatementFunction(statementNode, assignments, derived, context, verifyAhead);

    if (statementVerified) {
      return true;
    }
  });

  if (statementVerified) {
    context.debug(`Verified the '${statementString}' statement.`, statementNode);
  }

  return statementVerified;
}

export function verifyStatementAgainstCombinators(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAgainstCombinators;

  const statementString = context.nodeAsString(statementNode);

  context.trace(`Verifying the '${statementString}' statement against combinators.`, statementNode);

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
  const statementString = context.nodeAsString(statementNode),
        combinatorString = combinator.getString();

  context.trace(`Verifying the '${statementString}' statement against the '${combinatorString}' combinator.`, statementNode);

  const combinatorStatementNode = combinator.getStatementNode(),
        nonTerminalNodeA = statementNode, ///
        nonTerminalNodeB = combinatorStatementNode, ///
        nonTerminalNodeVerified = statementVerifier.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, context, verifyAhead),
        statementVerifiedAgainstCombinator = nonTerminalNodeVerified;  ///

  return statementVerifiedAgainstCombinator;
}

function verifyStatementAsTypeInference(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsTypeInference = false;

  const typeInferenceNode = typeInferenceNodeQuery(statementNode);

  if (typeInferenceNode !== null) {
    if (!derived) {
      const typeInferenceString = context.nodeAsString(typeInferenceNode);

      context.error(`The '${typeInferenceString}' type inference can only be derived.`, typeInferenceNode);
    } else {
      const typeInferenceVerified = verifyTypeInference(typeInferenceNode, context, verifyAhead);

      statementVerifiedAsTypeInference = typeInferenceVerified; ///
    }
  }

  return statementVerifiedAsTypeInference;
}

function verifyStatementAsTypeAssertion(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assignments, derived, context, verifyAhead);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsEquality(statementNode, assignments, derived, context, verifyAhead) {
  let statementVerifiedAsEquality = false;

  const combinator = equalityCombinator,  ///
        statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context, verifyAhead);

  if (statementVerifiedAgainstCombinator) {
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

          context.error(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to, a sub-type of nor a super-type of the right '${rightVariableName}' variable's '${rightVariableTypeName}' type.`, statementNode);
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

          context.error(`The left '${leftVariableName}' variable's '${leftVariableTypeName}' type is not equal to or a super-type of the right '${rightTermString}' term's '${rightTermTypeName}' type.`, statementNode);
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

          context.error(`The right '${rightVariableName}' variable's '${rightVariableTypeName}' type is not equal to or a super-type of the left '${leftTermString}' term's '${leftTermTypeName}' type.`, statementNode);
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
