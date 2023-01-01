"use strict";

import { matchBracketedStatementChildNode, bracketedStatementChildNodeFromChildNodes } from "./utilities/statement";

export default class Substitution {
  constructor(variableName, nodes) {
    this.variableName = variableName;
    this.nodes = nodes;
  }

  getVariableName() {
    return this.variableName;
  }

  getNodes() {
    return this.nodes;
  }

  matchNodes(nodes) {
    let matches;

    const substitutionNodes = this.nodes,  ///
          substitutionNonTerminalNodeMatches = matchSubstitutionNodes(substitutionNodes, nodes);

    matches = substitutionNonTerminalNodeMatches;  ///

    if (!matches) {
      const childNodes = nodes, ///
            bracketedStatementChildNodeMatches = matchBracketedStatementChildNode(childNodes, (bracketedStatementChildNode) => {
              const nonTerminalNode = bracketedStatementChildNode,  ///
                    childNodes = nonTerminalNode.getChildNodes(),
                    nodes = childNodes, ///
                    assertionNonTerminalNodeMatches = matchSubstitutionNodes(substitutionNodes, nodes),
                    bracketedStatementChildNodeMatches = assertionNonTerminalNodeMatches; ///

              return bracketedStatementChildNodeMatches;
            });

      matches = bracketedStatementChildNodeMatches; ///
    }

    return matches;
  }

  static fromVariableNameAndNodes(variableName, nodes) {
    const bracketedStatementChildNode = bracketedStatementChildNodeFromChildNodes(nodes);

    if (bracketedStatementChildNode !== null) {
      const nonTerminalNode = bracketedStatementChildNode,  ///
            childNodes = nonTerminalNode.getChildNodes();

      nodes = childNodes; ///
    }

    const substitution = new Substitution(variableName, nodes);

    return substitution;
  }
}

function matchSubstitutionNode(substitutionNode, node) {
  let substitutionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = substitutionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            substitutionTerminalNode = substitutionNode,  ///
            substitutionTerminalNodeMatches = matchSubstitutionTerminalNode(substitutionTerminalNode, terminalNode);

      substitutionNodeMatches = substitutionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            substitutionNonTerminalNode = substitutionNode,  ///
            substitutionNonTerminalNodeMatches = matchSubstitutionNonTerminalNode(substitutionNonTerminalNode, nonTerminalNode);

      substitutionNodeMatches = substitutionNonTerminalNodeMatches; ///
    }
  }

  return substitutionNodeMatches;
}

function matchSubstitutionNodes(substitutionNodes, nodes) {
  let substitutionNodesMatches = false;

  const nodesLength = nodes.length,
        substitutionNodesLength = substitutionNodes.length;

  if (nodesLength === substitutionNodesLength) {
    substitutionNodesMatches = nodes.every((node, index) => {
      const substitutionNode = substitutionNodes[index],
            substitutionNodeMatches = matchSubstitutionNode(substitutionNode, node);

      if (substitutionNodeMatches) {
        return true;
      }
    })
  }

  return substitutionNodesMatches;
}

function matchSubstitutionTerminalNode(substitutionTerminalNode, terminalNode) {
  const matches = substitutionTerminalNode.match(terminalNode),
        substitutionTerminalNodeMatches = matches;  ///

  return substitutionTerminalNodeMatches;
}

function matchSubstitutionNonTerminalNode(substitutionNonTerminalNode, nonTerminalNode) {
  let substitutionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        substitutionRuleName = substitutionNonTerminalNode.getRuleName(); ///

  if (ruleName === substitutionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          substitutionChildNodes = substitutionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          substitutionNodes = substitutionChildNodes, ///
          substitutionNodesMatches = matchSubstitutionNodes(substitutionNodes, nodes);

    substitutionNonTerminalNodeMatches = substitutionNodesMatches; ///
  }

  return substitutionNonTerminalNodeMatches;
}
