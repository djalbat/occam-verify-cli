"use strict";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { variableNameFromVariableNode } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/string";
import { VARIABLE_RULE_NAME, STATEMENT_RULE_NAME } from "./ruleNames";

export default class Consequence {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchStatementNode(statementNode, metaSubstitutions) {
    const nonTerminalNode = statementNode,  ///
          consequenceNonTerminalNode = this.statementNode,  ///
          consequenceNonTerminalNodeMatches = matchConsequenceNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions),
          statementNodeMatches = consequenceNonTerminalNodeMatches; ///

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
          consequence = new Consequence(statementNode);

    return consequence;
  }

  static fromStatementNode(statementNode) {
    const consequence = new Consequence(statementNode);

    return consequence;
  }
}

function matchConsequenceNode(consequenceNode, node, metaSubstitutions) {
  let consequenceNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = consequenceNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            consequenceTerminalNode = consequenceNode,  ///
            consequenceTerminalNodeMatches = matchConsequenceTerminalNode(consequenceTerminalNode, terminalNode, metaSubstitutions);

      consequenceNodeMatches = consequenceTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            consequenceNonTerminalNode = consequenceNode,  ///
            consequenceNonTerminalNodeMatches = matchConsequenceNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions);

      consequenceNodeMatches = consequenceNonTerminalNodeMatches; ///
    }
  }

  return consequenceNodeMatches;
}

function matchConsequenceNodes(consequenceNodes, nodes, metaSubstitutions) {
  let consequenceNodesMatches = false;

  const nodesLength = nodes.length,
        consequenceNodesLength = consequenceNodes.length;

  if (nodesLength === consequenceNodesLength) {
    consequenceNodesMatches = nodes.every((node, index) => {
      const consequenceNode = consequenceNodes[index],
            consequenceNodeMatches = matchConsequenceNode(consequenceNode, node, metaSubstitutions);

      if (consequenceNodeMatches) {
        return true;
      }
    });
  }

  return consequenceNodesMatches;
}

function matchConsequenceVariable(consequenceVariableNode, nodes, metaSubstitutions) {
  let consequenceVariableMatches = true;

  const consequenceVariableName = variableNameFromVariableNode(consequenceVariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const variableName = metaSubstitution.getVariableName();

          if (variableName === consequenceVariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

    consequenceVariableMatches = metaSubstitutionNodesMatch;  ///
  }

  return consequenceVariableMatches;
}

function matchConsequenceTerminalNode(consequenceTerminalNode, terminalNode, metaSubstitutions) {
  const matches = consequenceTerminalNode.match(terminalNode),
        consequenceTerminalNodeMatches = matches;  ///

  return consequenceTerminalNodeMatches;
}

function matchConsequenceNonTerminalNode(consequenceNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let consequenceNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        consequenceRuleName = consequenceNonTerminalNode.getRuleName(); ///

  if (ruleName === consequenceRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          consequenceChildNodes = consequenceNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          consequenceNodes = consequenceChildNodes, ///
          consequenceChildNodesMatches = matchConsequenceNodes(consequenceNodes, nodes, metaSubstitutions);

    consequenceNonTerminalNodeMatches = consequenceChildNodesMatches; ///

    if (!consequenceNonTerminalNodeMatches) {
      const ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME);

      if (ruleNameStatementRuleName) {
        const statementNode = nonTerminalNode,  ///
              consequenceStatementNode = consequenceNonTerminalNode,  ///
              consequenceStatementNodeMatches = matchConsequenceStatementNode(consequenceStatementNode, statementNode, metaSubstitutions);

        consequenceNonTerminalNodeMatches = consequenceStatementNodeMatches; ///
      }
    }
  }

  return consequenceNonTerminalNodeMatches;
}

function matchConsequenceStatementNode(consequenceStatementNode, statementNode, metaSubstitutions) {
  let consequenceStatementNodeMatches = false;

  const consequenceNonTerminalNode = consequenceStatementNode,  ///
        consequenceChildNodes = consequenceNonTerminalNode.getChildNodes(),
        consequenceChildNodesLength = consequenceChildNodes.length;

  if (consequenceChildNodesLength === 1) {
    const firstConsequenceChildNode = first(consequenceChildNodes),
          consequenceChildNode = firstConsequenceChildNode,  ///
          consequenceChildNodeNonTerminalNode = consequenceChildNode.isNonTerminalNode();

    if (consequenceChildNodeNonTerminalNode) {
      const consequenceNonTerminalChildNode = consequenceChildNode,  ///
            consequenceNonTerminalChildNodeRuleName = consequenceNonTerminalChildNode.getRuleName(),
            consequenceNonTerminalChildNodeRuleNameVariableRuleName = (consequenceNonTerminalChildNodeRuleName === VARIABLE_RULE_NAME);

      if (consequenceNonTerminalChildNodeRuleNameVariableRuleName) {
        const consequenceVariableNode = consequenceNonTerminalChildNode,  ///
              nonTerminalNode = statementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              consequenceMetaVariableMatches = matchConsequenceVariable(consequenceVariableNode, nodes, metaSubstitutions);

        consequenceStatementNodeMatches = consequenceMetaVariableMatches; ///
      }
    }
  }

  return consequenceStatementNodeMatches;
}
