"use strict";

import verifyTerm from "../verify/term";
import equalityCombinator from "../ocmbinator/equality";
import bracketedCombinator from "../ocmbinator/bracketed";
import verifyTypeAssertion from "../verify/assertion/type";

import { first } from "../utilities/array";
import { objectType } from "../type";
import { nodeAsString } from "../utilities/string";
import { OBJECT_TYPE_NAME } from "../typeNames";
import { STATEMENT_META_TYPE } from "../metaTypes";
import { nodeQuery, typeNameFromTypeNode } from "../utilities/query";
import { ARGUMENT_RULE_NAME, META_ARGUMENT_RULE_NAME } from "../ruleNames";

const termNodeQuery = nodeQuery("/argument/term!"),
      typeNodeQuery = nodeQuery("/argument/type!"),
      metaTypeNodeQuery = nodeQuery("/metaArgument/metaType!/@meta-type"),
      statementNodeQuery = nodeQuery("/metaArgument/statement!"),
      typeAssertionNodeQuery = nodeQuery("/statement/typeAssertion!");

export default function verifyStatement(statementNode, assertions, proofContext) {
  let statementVerified = false;

  proofContext.begin(statementNode);

  if (!statementVerified) {
    const statementVerifiedAsEquality = verifyStatementAsEquality(statementNode, proofContext);

    statementVerified = statementVerifiedAsEquality;  //
  }

  if (!statementVerified) {
    const statementVerifiedAsTypeAssertion = verifyStatementAsTypeAssertion(statementNode, assertions, proofContext);

    statementVerified = statementVerifiedAsTypeAssertion; ///
  }

  if (!statementVerified) {
    const statementVerifiedAgainstCombinators = verifyStatementAgainstCombinators(statementNode, proofContext);

    statementVerified = statementVerifiedAgainstCombinators;  ///
  }

  statementVerified ?
    proofContext.complete(statementNode) :
      proofContext.halt(statementNode);

  return statementVerified;
}

function verifyStatementAsEquality(statementNode, proofContext) {
  let statementVerifiedAsEquality = false;

  const combinator = equalityCombinator,  ///
        statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, proofContext);

  if (statementVerifiedAgainstCombinator) {
    statementVerifiedAsEquality = true;
  }

  return statementVerifiedAsEquality;
}

function verifyStatementAsTypeAssertion(statementNode, assertions, proofContext) {
  let statementVerifiedAsTypeAssertion = false;

  const typeAssertionNode = typeAssertionNodeQuery(statementNode);

  if (typeAssertionNode !== null) {
    const typeAssertionVerified = verifyTypeAssertion(typeAssertionNode, assertions, proofContext);

    statementVerifiedAsTypeAssertion = typeAssertionVerified; ///
  }

  return statementVerifiedAsTypeAssertion;
}

function verifyStatementAgainstCombinators(statementNode, proofContext) {
  let statementVerifiedAgainstCombinators = false;

  let combinators = proofContext.getCombinators();

  combinators = [ ///
    bracketedCombinator,
    ...combinators
  ];

  const combinator = combinators.find((combinator) => {
          const statementVerifiedAgainstCombinator = verifyStatementAgainstCombinator(statementNode, combinator, proofContext);

          if (statementVerifiedAgainstCombinator) {
            return true;
          }
        }) || null;

  if (combinator !== null) {
    statementVerifiedAgainstCombinators = true;
  }

  return statementVerifiedAgainstCombinators;
}

function verifyStatementAgainstCombinator(statementNode, combinator, proofContext) {
  const combinatorStatementNode = combinator.getStatementNode(),
        node = statementNode,  ///
        combinatorNode = combinatorStatementNode, ///
        nodeVerified = verifyNode(node, combinatorNode, proofContext),
        statementVerifiedAgainstCombinator = nodeVerified;  ///

  return statementVerifiedAgainstCombinator;
}

function verifyNode(node, combinatorNode, proofContext) {
  let nodeVerified;

  const nodeTerminalNode = node.isTerminalNode(),
        combinatorNodeTerminalNode = combinatorNode.isTerminalNode();

  if (nodeTerminalNode === combinatorNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            combinatorTerminalNode = combinatorNode,  ///
            terminalNodeVerified = verifyTerminalNode(terminalNode, combinatorTerminalNode, proofContext);

      nodeVerified = terminalNodeVerified;  ///
    } else {
      const nonTerminalNode = node, ///
            combinatorNonTerminalNode = combinatorNode,  ///
            nonTerminalNodeVerified = verifyNonTerminalNode(nonTerminalNode, combinatorNonTerminalNode, proofContext);

      nodeVerified = nonTerminalNodeVerified; ///
    }
  }

  return nodeVerified;
}

function verifyNodes(nodes, combinatorNodes, proofContext) {
  let nodesVerified = false;

  const nodesLength = nodes.length,
        combinatorNodesLength = combinatorNodes.length;

  if (nodesLength === combinatorNodesLength) {
    nodesVerified = nodes.every((node, index) => {
      const combinatorNode = combinatorNodes[index],
            nodeVerified = verifyNode(node, combinatorNode, proofContext);

      if (nodeVerified) {
        return true;
      }
    });
  }

  return nodesVerified;
}

function verifyTerminalNode(terminalNode, combinatorTerminalNode, proofContext) {
  let terminalNodeVerified = false;

  const matches = terminalNode.match(combinatorTerminalNode);

  if (matches) {
    terminalNodeVerified = true;
  }

  return terminalNodeVerified;
}

function verifyNonTerminalNode(nonTerminalNode, combinatorNonTerminalNode, proofContext) {
  let nonTerminalNodeVerified = false;

  const ruleName = nonTerminalNode.getRuleName(), ///
        combinatorRuleName = combinatorNonTerminalNode.getRuleName(); ///

  if (ruleName === combinatorRuleName) {
    switch (ruleName) {
      case ARGUMENT_RULE_NAME: {
        const argumentNode = nonTerminalNode, ///
              combinatorArgumentNode = combinatorNonTerminalNode, ///
              argumentNodeVerified = verifyArgumentNode(argumentNode, combinatorArgumentNode, proofContext);

        nonTerminalNodeVerified = argumentNodeVerified; ///

        break;
      }

      case META_ARGUMENT_RULE_NAME: {
        const metaArgumentNode = nonTerminalNode, ///
              combinatorMetaargumentNode = combinatorNonTerminalNode, ///
              metaArgumentNodeVerified = verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, proofContext);

        nonTerminalNodeVerified = metaArgumentNodeVerified; ///

        break;
      }

      default: {
        const childNodes = nonTerminalNode.getChildNodes(),
              combinatorChildNodes = combinatorNonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              combinatorNodes = combinatorChildNodes, ///
              nodesVerified = verifyNodes(nodes, combinatorNodes, proofContext);

        nonTerminalNodeVerified = nodesVerified; ///

        break;
      }
    }
  }

  return nonTerminalNodeVerified;
}

function verifyArgumentNode(argumentNode, combinatorArgumentNode, proofContext) {
  let argumentNodeVerified = false;

  const termNode = termNodeQuery(argumentNode);

  if (termNode === null) {
    const argumentString = nodeAsString(argumentNode);

    proofContext.error(`The ${argumentString} argument should be a term, not a type`);
  } else {
    const types = [],
          context = proofContext, ///
          termVerified = verifyTerm(termNode, types, context);

    if (termVerified) {
      const firstType = first(types),
            termType = firstType, ///
            typeNode = typeNodeQuery(combinatorArgumentNode),
            typeName = typeNameFromTypeNode(typeNode),
            type = (typeName === OBJECT_TYPE_NAME) ?
                     objectType :  ///
                       proofContext.findTypeByTypeName(typeName),
            statementTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);

      if (statementTypeEqualToOrSubTypeOfType) {
        argumentNodeVerified = true;
      }
    }
  }

  return argumentNodeVerified;
}

function verifyMetaargumentNode(metaArgumentNode, combinatorMetaargumentNode, proofContext) {
  let metaArgumentNodeVerified = false;

  const statementNode = statementNodeQuery(metaArgumentNode);

  if (statementNode === null) {
    const metaArgumentString = nodeAsString(metaArgumentNode);

    proofContext.error(`The '${metaArgumentString}' meta-argument should be a statement, not a meta-type.`);
  } else {
    const assertions = null,
          statementVerified = verifyStatement(statementNode, assertions, proofContext);

    if (statementVerified) {
      const combinatorMetaTYpeNode = metaTypeNodeQuery(combinatorMetaargumentNode);

      if (combinatorMetaTYpeNode !== null) {
        const terminalNode = combinatorMetaTYpeNode,  ///
              terminalNodeContent = terminalNode.getContent(),
              terminalNodeContentStatementMetaType = (terminalNodeContent === STATEMENT_META_TYPE);

        metaArgumentNodeVerified = terminalNodeContentStatementMetaType;  ///
      }

      if (!metaArgumentNodeVerified) {
        const combinatorMetaargumentString = nodeAsString(combinatorMetaargumentNode);

        proofContext.error(`The '${combinatorMetaargumentString}' combinator meta-argument should be the 'Statement' meta-type.`);
      }
    }
  }

  return metaArgumentNodeVerified;
}
