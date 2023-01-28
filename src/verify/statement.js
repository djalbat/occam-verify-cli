"use strict";

import Equality from "../equality";
import verifyTerm from "../verify/term";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/assertion/type";

import { first } from "../utilities/array";
import { objectType } from "../type";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { STATEMENT_META_TYPE } from "../metaTypes";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../ruleNames";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!/@meta-type"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, assertions, derived, context) {
  let statementVerified = false;

  if (!statementVerified) {
    const statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);

    statementVerified = statementVerifiedAgainstCombinators;  ///
  }

  if (!statementVerified) {
    const statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assertions, derived, context);

    statementVerified = statementVerifiedAsTypeAssertion; ///
  }

  if (!statementVerified) {
    const statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, derived, context);

    statementVerified = statementVerifiedAsEquality;  //
  }

  return statementVerified;
}

export function verifyStatementAgainstCombinator(statementNode, combinator, context) {
  const combinatorStatementNode = combinator.getStatementNode(),
        node = statementNode,  ///
        combinatorNode = combinatorStatementNode, ///
        nodeVerified = verifyNode(node, combinatorNode, context),
        statementVerifiedAgainstCombinator = nodeVerified;  ///

  return statementVerifiedAgainstCombinator;
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

function verifyStatementAsTypeAssertion(statementNode, assertions, derived, context) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assertions, derived, context);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAsEquality(statementNode, derived, context) {
  let statementVerifiedAsEquality = false;

  const equality = Equality.fromStatementNode(statementNode, context);

  if (equality !== null) {
    statementVerifiedAsEquality = true; ///

    if (derived) {
      const equalities = context.getEqualities();

      if (equalities !== null) {
        const equalityEquates = equality.equate(equalities, context);

        statementVerifiedAsEquality = equalityEquates; ///
      }
    }
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

    context.error(argumentNode, `The ${argumentString} argument should be a term, not a type`);
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

  const statementNode = statementNodeQuery(metaArgumentNode);

  if (statementNode === null) {
    const metaArgumentString = context.nodeAsString(metaArgumentNode);

    context.error(metaArgumentNode, `The '${metaArgumentString}' meta-argument should be a statement, not a meta-type.`);
  } else {
    const derived = false,
          assertions = [],
          statementVerified = verifyStatement(statementNode, assertions, derived, context);

    if (statementVerified) {
      const combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

      if (combinatorMetaTYpeNode !== null) {
        const terminalNode = combinatorMetaTYpeNode,  ///
              terminalNodeContent = terminalNode.getContent(),
              terminalNodeContentStatementMetaType = (terminalNodeContent === STATEMENT_META_TYPE);

        metaArgumentNodeVerified = terminalNodeContentStatementMetaType;  ///
      }

      if (!metaArgumentNodeVerified) {
        const combinatorMetaargumentString = context.nodeAsString(combinatorMetaargumentNode);

        context.error(metaArgumentNode, `The '${combinatorMetaargumentString}' combinator meta-argument should be the 'Statement' meta-type.`);
      }
    }
  }

  return metaArgumentNodeVerified;
}
