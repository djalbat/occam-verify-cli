"use strict";

import verifyTerm from "../verify/term";
import verifyTypeAssertion from "../verify/assertion/type";

import { first } from "../utilities/array";
import { nodeAsString } from "../utilities/string";
import { ARGUMENT_RULE_NAME } from "../ruleNames";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, assertions, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assertions, proofContext);

    statementVerified = typeAssertionVerified; ///
  } else {
    const context = proofContext, ///
          statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, context);

    statementVerified = statementVerifiedAgainstCombinators;  ///
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}

function verifyStatementAgainstCombinators(statementNode, context) {
  let statementVerifiedAgainstCombinators = false;

  context.begin(statementNode);

  const combinators = context.getCombinators(),
        combinator = combinators.find((combinator) => {
          const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, context);

          if (statementVerifiedAgainstCombinator) {
            return true;
          }
        }) || null;

  if (combinator !== null) {
    statementVerifiedAgainstCombinators = true;
  }

  statementVerifiedAgainstCombinators ?
    context.complete(statementNode) :
      context.halt(statementNode);

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
    const argumentString = nodeAsString(argumentNode);

    context.error(`The ${argumentString} argument should be a term, not a type`);
  } else {
    const types = [],
          termVerified = verifyTerm(termNode, types, context);

    if (termVerified) {
      const firstType = first(types),
            termType = firstType, ///
            typeNode = typeNodeQuery(combinatorArgumentNode),
            typeName = typeNameFromTypeNode(typeNode),
            type = context.findTypeByTypeName(typeName),
            statementTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

      if (statementTypeEqualToOrSubTypeOfType) {
        argumentNodeVerified = true;
      }
    }
  }

  return argumentNodeVerified;
}
