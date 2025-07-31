"use strict";

import dom from "../dom";

import { objectType } from "../dom/type";

export function typeFromTypeNode(typeNode) {
  let type;

  if (typeNode === null) {
    type = objectType;
  } else {
    const { Type } = dom,
          typeName = typeNode.getTypeName(),
          name = typeName,  ///
          string = name,  ///
          superTypes = null,
          properties = null,
          provisional = null;

    type = new Type(string, name, superTypes, properties, provisional);
  }

  return type;
}

export function termFromTermNode(termNode, context) {
  const { Term } = dom,
        node = termNode,  ///
        string = context.nodeAsString(node),
        type = null,
        term = new Term(string, node, type);

  return term;
}

export function statementFromStatementNode(statementNode, context) {
  const { Statement } = dom,
        node = statementNode, ///
        tokens = context.nodeAsTokens(node),
        string = context.tokensAsString(tokens),
        statement = new Statement(string, node, tokens);

  return statement;
}

function isNodeRuleNodeByRuleName(node, ruleName) {
  let nodeRuleNode = false;

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          nonTerminalNodeRuleName = nonTerminalNode.getRuleName(),
          nonTerminalNodeRuleNameRuleName = (nonTerminalNodeRuleName === ruleName);

    if (nonTerminalNodeRuleNameRuleName) {
      nodeRuleNode = true;
    }
  }

  return nodeRuleNode;
}
