"use strict";

import Substitution from "./substitution";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { variableNameFromVariableNode } from "./utilities/query";
import { statementNodeFromStatementString } from "./utilities/string";
import { VARIABLE_RULE_NAME, STATEMENT_RULE_NAME } from "./ruleNames";

const statementNodesQuery = nodesQuery("/subproofAssertion/statement"),
      subproofAssertionNodeQuery = nodeQuery("/statement/subproofAssertion!"),
      unqualifiedStatementStatementNodesQuery = nodesQuery("/subproof/unqualifiedStatement/statement!"),
      qualifiedOrUnqualifiedStatementStatementNodeQuery = nodeQuery("/subproof/subDerivation/qualifiedStatement|unqualifiedStatement[-1]/statement!");

export default class Antecedent {
  constructor(statementNode) {
    this.statementNode = statementNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  matchSubproofNode(subproofNode, substitutions) {
    let subproofNodeMatches = false;

    const subproofAssertionNode = subproofAssertionNodeQuery(this.statementNode);

    if (subproofAssertionNode !== null) {
      const subproofAssertionStatementNodes = statementNodesQuery(subproofAssertionNode),
            unqualifiedStatementStatementNodes = unqualifiedStatementStatementNodesQuery(subproofNode),
            qualifiedOrUnqualifiedStatementStatementNode = qualifiedOrUnqualifiedStatementStatementNodeQuery(subproofNode),
            statementNodes = [
              ...unqualifiedStatementStatementNodes,
              qualifiedOrUnqualifiedStatementStatementNode
            ],
            statementNodesLength = statementNodes.length,
            subproofAssertionStatementNodesLength = subproofAssertionStatementNodes.length;

      if (statementNodesLength === subproofAssertionStatementNodesLength) {
        subproofNodeMatches = subproofAssertionStatementNodes.every((subproofAssertionStatementNode, index) => {
                                    const statementNode = statementNodes[index],
                                          nonTerminalNode = statementNode, ///
                                          antecedentNonTerminalNode = subproofAssertionStatementNode,  ///
                                          antecedentNonTerminalNodeMatches = matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions);

                                    if (antecedentNonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return subproofNodeMatches;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNode = statementNode,  ///
          antecedentNonTerminalNode = this.statementNode,  ///
          antecedentNonTerminalNodeMatches = matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions),
          statementNodeMatches = antecedentNonTerminalNodeMatches; ///

    return statementNodeMatches;
  }

  toJSON() {
    const statementString = nodeAsString(this.statementNode),
          statement = statementString, ///
          json = {
            statement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { statement } = json,
          statementString = statement,  ///
          statementNode = statementNodeFromStatementString(statementString, releaseContext),
          antecedent = new Antecedent(statementNode);

    return antecedent;
  }

  static fromStatementNode(statementNode) {
    const antecedent = new Antecedent(statementNode);

    return antecedent;
  }
}

function matchAntecedentNode(antecedentNode, node, substitutions) {
  let antecedentNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = antecedentNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            antecedentTerminalNode = antecedentNode,  ///
            antecedentTerminalNodeMatches = matchAntecedentTerminalNode(antecedentTerminalNode, terminalNode, substitutions);

      antecedentNodeMatches = antecedentTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            antecedentNonTerminalNode = antecedentNode,  ///
            antecedentNonTerminalNodeMatches = matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions);

      antecedentNodeMatches = antecedentNonTerminalNodeMatches; ///
    }
  }

  return antecedentNodeMatches;
}

function matchAntecedentNodes(antecedentNodes, nodes, substitutions) {
  let antecedentNodesMatches = false;

  const nodesLength = nodes.length,
        antecedentNodesLength = antecedentNodes.length;

  if (nodesLength === antecedentNodesLength) {
    antecedentNodesMatches = nodes.every((node, index) => {
      const antecedentNode = antecedentNodes[index],
            antecedentNodeMatches = matchAntecedentNode(antecedentNode, node, substitutions);

      if (antecedentNodeMatches) {
        return true;
      }
    });
  }

  return antecedentNodesMatches;
}

function matchAntecedentVariable(antecedentVariableNode, nodes, substitutions) {
  let antecedentVariableMatches;

  const antecedentVariableName = variableNameFromVariableNode(antecedentVariableNode),
        substitution = substitutions.find((substitution) => {
          const variableName = substitution.getVariableName();

          if (variableName === antecedentVariableName) {
            return true;
          }
        }) || null;

  if (substitution !== null) {
    const substitutionNodesMatch = substitution.matchNodes(nodes);

    antecedentVariableMatches = substitutionNodesMatch;  ///
  } else {
    const variableName = antecedentVariableName, ///
          substitution = Substitution.fromVariableNameAndNodes(variableName, nodes);

    substitutions.push(substitution);

    antecedentVariableMatches = true;
  }

  return antecedentVariableMatches;
}

function matchAntecedentTerminalNode(antecedentTerminalNode, terminalNode, substitutions) {
  const matches = antecedentTerminalNode.match(terminalNode),
        antecedentTerminalNodeMatches = matches;

  return antecedentTerminalNodeMatches;
}

function matchAntecedentNonTerminalNode(antecedentNonTerminalNode, nonTerminalNode, substitutions) {
  let antecedentNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        antecedentRuleName = antecedentNonTerminalNode.getRuleName(); ///

  if (ruleName === antecedentRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          antecedentChildNodes = antecedentNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          antecedentNodes = antecedentChildNodes, ///
          antecedentChildNodesMatches = matchAntecedentNodes(antecedentNodes, nodes, substitutions);

    antecedentNonTerminalNodeMatches = antecedentChildNodesMatches; ///

    if (!antecedentNonTerminalNodeMatches) {
      const ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME);

      if (ruleNameStatementRuleName) {
        const statementNode = nonTerminalNode,  ///
              antecedentStatementNode = antecedentNonTerminalNode,  ///
              antecedentStatementNodeMatches = matchAntecedentStatementNode(antecedentStatementNode, statementNode, substitutions);

        antecedentNonTerminalNodeMatches = antecedentStatementNodeMatches; ///
      }
    }
  }

  return antecedentNonTerminalNodeMatches;
}

function matchAntecedentStatementNode(antecedentStatementNode, statementNode, substitutions) {
  let antecedentStatementNodeMatches = false;

  const antecedentNonTerminalNode = antecedentStatementNode,  ///
        antecedentChildNodes = antecedentNonTerminalNode.getChildNodes(),
        antecedentChildNodesLength = antecedentChildNodes.length;

  if (antecedentChildNodesLength === 1) {
    const firstAntecedentChildNode = first(antecedentChildNodes),
          antecedentChildNode = firstAntecedentChildNode,  ///
          antecedentChildNodeNonTerminalNode = antecedentChildNode.isNonTerminalNode();

    if (antecedentChildNodeNonTerminalNode) {
      const antecedentNonTerminalChildNode = antecedentChildNode,  ///
            antecedentNonTerminalChildNodeRuleName = antecedentNonTerminalChildNode.getRuleName(),
            antecedentNonTerminalChildNodeRuleNameVariableRuleName = (antecedentNonTerminalChildNodeRuleName === VARIABLE_RULE_NAME);

      if (antecedentNonTerminalChildNodeRuleNameVariableRuleName) {
        const antecedentVariableNode = antecedentNonTerminalChildNode,  ///
              nonTerminalNode = statementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              antecedentVariableMatches = matchAntecedentVariable(antecedentVariableNode, nodes, substitutions);

        antecedentStatementNodeMatches = antecedentVariableMatches; ///
      }
    }
  }

  return antecedentStatementNodeMatches;
}
