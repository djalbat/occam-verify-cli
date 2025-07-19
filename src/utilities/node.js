"use strict";

import dom from "../dom";

import { objectType } from "../dom/type";
import { TYPE_RULE_NAME, VARIABLE_RULE_NAME, PROPERTY_RULE_NAME, PROPERTY_DECLARATION_RULE_NAME } from "../ruleNames";

export function isNodeTypeNode(node) { return isNodeRuleNode(node, TYPE_RULE_NAME); }

export function isNodeVariableNode(node) { return isNodeRuleNode(node, VARIABLE_RULE_NAME); }

export function isNodePropertyNode(node) { return isNodeRuleNode(node, PROPERTY_RULE_NAME); }

export function isNodePropertyDeclarationNode(node) { return isNodeRuleNode(node, PROPERTY_DECLARATION_RULE_NAME); }

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

function isNodeRuleNode(node, ruleName) {
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
