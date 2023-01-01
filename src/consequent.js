"use strict";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { variableNameFromVariableNode } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/string";
import { VARIABLE_RULE_NAME, STATEMENT_RULE_NAME } from "./ruleNames";

export default class Consequent {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, metaSubstitutions) {
    const nonTerminalNode = statementNode,  ///
          consequentNonTerminalNode = this.statementNode,  ///
          consequentNonTerminalNodeMatches = matchConsequentNonTerminalNode(consequentNonTerminalNode, nonTerminalNode, metaSubstitutions),
          statementNodeMatches = consequentNonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  toJSON() {
    const statementString = nodeAsString(this.statementNode),
          statement = statementString,  ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { statement } = json,
          statementString = statement,  ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          consequent = new Consequent(statementNode);

    return consequent;
  }

  static fromStatementNode(statementNode) {
    const consequent = new Consequent(statementNode);

    return consequent;
  }
}

function matchConsequentNode(consequentNode, node, metaSubstitutions) {
  let consequentNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = consequentNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            consequentTerminalNode = consequentNode,  ///
            consequentTerminalNodeMatches = matchConsequentTerminalNode(consequentTerminalNode, terminalNode, metaSubstitutions);

      consequentNodeMatches = consequentTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            consequentNonTerminalNode = consequentNode,  ///
            consequentNonTerminalNodeMatches = matchConsequentNonTerminalNode(consequentNonTerminalNode, nonTerminalNode, metaSubstitutions);

      consequentNodeMatches = consequentNonTerminalNodeMatches; ///
    }
  }

  return consequentNodeMatches;
}

function matchConsequentNodes(consequentNodes, nodes, metaSubstitutions) {
  let consequentNodesMatches = false;

  const nodesLength = nodes.length,
        consequentNodesLength = consequentNodes.length;

  if (nodesLength === consequentNodesLength) {
    consequentNodesMatches = nodes.every((node, index) => {
      const consequentNode = consequentNodes[index],
            consequentNodeMatches = matchConsequentNode(consequentNode, node, metaSubstitutions);

      if (consequentNodeMatches) {
        return true;
      }
    });
  }

  return consequentNodesMatches;
}

function matchConsequentVariable(consequentVariableNode, nodes, metaSubstitutions) {
  let consequentVariableMatches = true;

  const consequentVariableName = variableNameFromVariableNode(consequentVariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const variableName = metaSubstitution.getVariableName();

          if (variableName === consequentVariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

    consequentVariableMatches = metaSubstitutionNodesMatch;  ///
  }

  return consequentVariableMatches;
}

function matchConsequentTerminalNode(consequentTerminalNode, terminalNode, metaSubstitutions) {
  const matches = consequentTerminalNode.match(terminalNode),
        consequentTerminalNodeMatches = matches;  ///

  return consequentTerminalNodeMatches;
}

function matchConsequentNonTerminalNode(consequentNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let consequentNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        consequentRuleName = consequentNonTerminalNode.getRuleName(); ///

  if (ruleName === consequentRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          consequentChildNodes = consequentNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          consequentNodes = consequentChildNodes, ///
          consequentChildNodesMatches = matchConsequentNodes(consequentNodes, nodes, metaSubstitutions);

    consequentNonTerminalNodeMatches = consequentChildNodesMatches; ///

    if (!consequentNonTerminalNodeMatches) {
      const ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME);

      if (ruleNameStatementRuleName) {
        const statementNode = nonTerminalNode,  ///
              consequentStatementNode = consequentNonTerminalNode,  ///
              consequentStatementNodeMatches = matchConsequentStatementNode(consequentStatementNode, statementNode, metaSubstitutions);

        consequentNonTerminalNodeMatches = consequentStatementNodeMatches; ///
      }
    }
  }

  return consequentNonTerminalNodeMatches;
}

function matchConsequentStatementNode(consequentStatementNode, statementNode, metaSubstitutions) {
  let consequentStatementNodeMatches = false;

  const consequentNonTerminalNode = consequentStatementNode,  ///
        consequentChildNodes = consequentNonTerminalNode.getChildNodes(),
        consequentChildNodesLength = consequentChildNodes.length;

  if (consequentChildNodesLength === 1) {
    const firstConsequentChildNode = first(consequentChildNodes),
          consequentChildNode = firstConsequentChildNode,  ///
          consequentChildNodeNonTerminalNode = consequentChildNode.isNonTerminalNode();

    if (consequentChildNodeNonTerminalNode) {
      const consequentNonTerminalChildNode = consequentChildNode,  ///
            consequentNonTerminalChildNodeRuleName = consequentNonTerminalChildNode.getRuleName(),
            consequentNonTerminalChildNodeRuleNameVariableRuleName = (consequentNonTerminalChildNodeRuleName === VARIABLE_RULE_NAME);

      if (consequentNonTerminalChildNodeRuleNameVariableRuleName) {
        const consequentVariableNode = consequentNonTerminalChildNode,  ///
              nonTerminalNode = statementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              consequentMetaVariableMatches = matchConsequentVariable(consequentVariableNode, nodes, metaSubstitutions);

        consequentStatementNodeMatches = consequentMetaVariableMatches; ///
      }
    }
  }

  return consequentStatementNodeMatches;
}
