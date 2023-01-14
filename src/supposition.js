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

export default class Supposition {
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
                                          suppositionNonTerminalNode = subproofAssertionStatementNode,  ///
                                          suppositionNonTerminalNodeMatches = matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions);

                                    if (suppositionNonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return subproofNodeMatches;
  }

  matchStatementNode(statementNode, substitutions) {
    const nonTerminalNode = statementNode,  ///
          suppositionNonTerminalNode = this.statementNode,  ///
          suppositionNonTerminalNodeMatches = matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions),
          statementNodeMatches = suppositionNonTerminalNodeMatches; ///

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
          supposition = new Supposition(statementNode);

    return supposition;
  }

  static fromStatementNode(statementNode) {
    const supposition = new Supposition(statementNode);

    return supposition;
  }
}

function matchSuppositionNode(suppositionNode, node, substitutions) {
  let suppositionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = suppositionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            suppositionTerminalNode = suppositionNode,  ///
            suppositionTerminalNodeMatches = matchSuppositionTerminalNode(suppositionTerminalNode, terminalNode, substitutions);

      suppositionNodeMatches = suppositionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            suppositionNonTerminalNode = suppositionNode,  ///
            suppositionNonTerminalNodeMatches = matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions);

      suppositionNodeMatches = suppositionNonTerminalNodeMatches; ///
    }
  }

  return suppositionNodeMatches;
}

function matchSuppositionNodes(suppositionNodes, nodes, substitutions) {
  let suppositionNodesMatches = false;

  const nodesLength = nodes.length,
        suppositionNodesLength = suppositionNodes.length;

  if (nodesLength === suppositionNodesLength) {
    suppositionNodesMatches = nodes.every((node, index) => {
      const suppositionNode = suppositionNodes[index],
            suppositionNodeMatches = matchSuppositionNode(suppositionNode, node, substitutions);

      if (suppositionNodeMatches) {
        return true;
      }
    });
  }

  return suppositionNodesMatches;
}

function matchSuppositionVariable(suppositionVariableNode, nodes, substitutions) {
  let suppositionVariableMatches;

  const suppositionVariableName = variableNameFromVariableNode(suppositionVariableNode),
        substitution = substitutions.find((substitution) => {
          const variableName = substitution.getVariableName();

          if (variableName === suppositionVariableName) {
            return true;
          }
        }) || null;

  if (substitution !== null) {
    const substitutionNodesMatch = substitution.matchNodes(nodes);

    suppositionVariableMatches = substitutionNodesMatch;  ///
  } else {
    const variableName = suppositionVariableName, ///
          substitution = Substitution.fromVariableNameAndNodes(variableName, nodes);

    substitutions.push(substitution);

    suppositionVariableMatches = true;
  }

  return suppositionVariableMatches;
}

function matchSuppositionTerminalNode(suppositionTerminalNode, terminalNode, substitutions) {
  const matches = suppositionTerminalNode.match(terminalNode),
        suppositionTerminalNodeMatches = matches;

  return suppositionTerminalNodeMatches;
}

function matchSuppositionNonTerminalNode(suppositionNonTerminalNode, nonTerminalNode, substitutions) {
  let suppositionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        suppositionRuleName = suppositionNonTerminalNode.getRuleName(); ///

  if (ruleName === suppositionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          suppositionChildNodes = suppositionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          suppositionNodes = suppositionChildNodes, ///
          suppositionChildNodesMatches = matchSuppositionNodes(suppositionNodes, nodes, substitutions);

    suppositionNonTerminalNodeMatches = suppositionChildNodesMatches; ///

    if (!suppositionNonTerminalNodeMatches) {
      const ruleNameStatementRuleName = (ruleName === STATEMENT_RULE_NAME);

      if (ruleNameStatementRuleName) {
        const statementNode = nonTerminalNode,  ///
              suppositionStatementNode = suppositionNonTerminalNode,  ///
              suppositionStatementNodeMatches = matchSuppositionStatementNode(suppositionStatementNode, statementNode, substitutions);

        suppositionNonTerminalNodeMatches = suppositionStatementNodeMatches; ///
      }
    }
  }

  return suppositionNonTerminalNodeMatches;
}

function matchSuppositionStatementNode(suppositionStatementNode, statementNode, substitutions) {
  let suppositionStatementNodeMatches = false;

  const suppositionNonTerminalNode = suppositionStatementNode,  ///
        suppositionChildNodes = suppositionNonTerminalNode.getChildNodes(),
        suppositionChildNodesLength = suppositionChildNodes.length;

  if (suppositionChildNodesLength === 1) {
    const firstSuppositionChildNode = first(suppositionChildNodes),
          suppositionChildNode = firstSuppositionChildNode,  ///
          suppositionChildNodeNonTerminalNode = suppositionChildNode.isNonTerminalNode();

    if (suppositionChildNodeNonTerminalNode) {
      const suppositionNonTerminalChildNode = suppositionChildNode,  ///
            suppositionNonTerminalChildNodeRuleName = suppositionNonTerminalChildNode.getRuleName(),
            suppositionNonTerminalChildNodeRuleNameVariableRuleName = (suppositionNonTerminalChildNodeRuleName === VARIABLE_RULE_NAME);

      if (suppositionNonTerminalChildNodeRuleNameVariableRuleName) {
        const suppositionVariableNode = suppositionNonTerminalChildNode,  ///
              nonTerminalNode = statementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              suppositionVariableMatches = matchSuppositionVariable(suppositionVariableNode, nodes, substitutions);

        suppositionStatementNodeMatches = suppositionVariableMatches; ///
      }
    }
  }

  return suppositionStatementNodeMatches;
}
