"use strict";

import Variable from "../variable";
import Assignment from "../assignment";
import verifyTerm from "../verify/term";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/assertion/type";

import { first } from "../utilities/array";
import { objectType } from "../type";
import { nodeAsString } from "../utilities/string";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { STATEMENT_META_TYPE } from "../metaTypes";
import { verifyTermAsVariable } from "../verify/term";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../ruleNames";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      leftTermNodeQuery = nodeQuery("/statement/argument[0]/term!"),
      rightTermNodeQuery = nodeQuery("/statement/argument[1]/term!"),
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
      node = statementNode,  ///
      combinatorNode = combinatorStatementNode, ///
      nodeVerified = verifyNode(node, combinatorNode, context),
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
    if (derived) {
      debugger
    } else {
      const types = [],
            variables = [],
            leftTermNode = leftTermNodeQuery(statementNode),
            rightTermNode = rightTermNodeQuery(statementNode),
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

function verifyNode(node, combinatorNode, context) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode(),
        combinatorNodeTerminalNode = combinatorNode.isTerminalNode();

  if (nodeTerminalNode === combinatorNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            combinatorTerminalNode = combinatorNode,  ///
            terminalNodeVerified = verifyTerminalNode(terminalNode, combinatorTerminalNode, context);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node, ///
            combinatorNonTerminalNode = combinatorNode,  ///
            nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, combinatorNonTerminalNode, context);

      nodeVerified = nonTerminalNodeVerified; ///
    }
  }

  return nodeVerified;
}

function verifyNodes(nodes, combinatorNodes, context) {
  let nodesVerified = false;

  const nodesLength = nodes.length,
        combinatorNodesLength = combinatorNodes.length;

  if (nodesLength === combinatorNodesLength) {
    nodesVerified = nodes.every((node, index) => {
      const combinatorNode = combinatorNodes[index],
            nodeVerified = verifyNode(node, combinatorNode, context);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return nodesVerified;
}

function verifyTerminalNode(terminalNode, combinatorTerminalNode, context) {
  let terminalNodeVerified = false;

  const matches = terminalNode.match(combinatorTerminalNode);

  if (matches) {
    terminalNodeVerified = true;
  }

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, combinatorNonTerminalNode, context) {
  let nonTerminalNodeVerified = false;

  const ruleName = nonTerminalNode.getRuleName(), ///
        combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

  if (ruleName === combinatorRuleName) {
    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              combinatorArgumentNode = combinatorNonTerminalNode, ///
              argumentNodeVerified = verifyArgumentNode(argumentNode, combinatorArgumentNode, context);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      case META_ARGUMENT_RULE_NAME: {
        const metaArgumentNode = nonTerminalNode, ///
              combinatorMetaargumentNode = combinatorNonTerminalNode, ///
              metaArgumentNodeVerified = verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context);

        nonTerminalNodeVerified = metaArgumentNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              combinatorNodes = combinatorChildNodes, ///
              nodesVerified = verifyNodes(nodes, combinatorNodes, context);

        nonTerminalNodeVerified = nodesVerified; ///

        break;
      }
    }
  }

  return nonTerminalNodeVerified;
}

function verifyArgumentNode(argumentNode, combinatorArgumentNode, context) {
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

function verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, context) {
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
