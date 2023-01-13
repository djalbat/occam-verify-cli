"use strict";

import MetaSubstitution from "./metaSubstitution";

import { first } from "./utilities/array";
import { nodeAsString } from "./utilities/string";
import { nodeQuery, nodesQuery } from "./utilities/query";
import { metavariableNameFromMetavariableNode } from "./utilities/query";
import { metastatementNodeFromMetastatementString } from "./utilities/string";
import { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } from "./ruleNames";

const metastatementNodesQuery = nodesQuery("/metaSubproofAssertion/metastatement"),
      metaSubproofAssertionNodeQuery = nodeQuery("/metastatement/metaSubproofAssertion!"),
      unqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/metaSubproof/unqualifiedMetastatement/metastatement!"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery = nodeQuery("/metaSubproof/subDerivation/qualifiedMetastatement|unqualifiedMetastatement[-1]/metastatement!");

export default class MetaAntecedent {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchSubproofNode(metaSubproofNode, metaSubstitutions) {
    let metaSubproofNodeMatches = false;

    const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);

    if (metaSubproofAssertionNode !== null) {
      const metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode),
            unqualifiedMetastatementMetastatementNodes = unqualifiedMetastatementMetastatementNodesQuery(metaSubproofNode),
            qualifiedOrUnqualifiedMetastatementMetastatementNode = qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery(metaSubproofNode),
            metastatementNodes = [
              ...unqualifiedMetastatementMetastatementNodes,
              qualifiedOrUnqualifiedMetastatementMetastatementNode
            ],
            metastatementNodesLength = metastatementNodes.length,
            metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length;

      if (metastatementNodesLength === metaSubproofAssertionMetastatementNodesLength) {
        metaSubproofNodeMatches = metaSubproofAssertionMetastatementNodes.every((metaSubproofAssertionMetastatementNode, index) => {
                                    const metastatementNode = metastatementNodes[index],
                                          nonTerminalNode = metastatementNode, ///
                                          metaAntecedentNonTerminalNode = metaSubproofAssertionMetastatementNode,  ///
                                          metaAntecedentNonTerminalNodeMatches = matchMetaAntecedentNonTerminalNode(metaAntecedentNonTerminalNode, nonTerminalNode, metaSubstitutions);

                                    if (metaAntecedentNonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          metaAntecedentNonTerminalNode = this.metastatementNode,  ///
          metaAntecedentNonTerminalNodeMatches = matchMetaAntecedentNonTerminalNode(metaAntecedentNonTerminalNode, nonTerminalNode, metaSubstitutions),
          metastatementNodeMatches = metaAntecedentNonTerminalNodeMatches; ///

    return metastatementNodeMatches;
  }

  toJSON() {
    const metastatementString = nodeAsString(this.metastatementNode),
          metastatement = metastatementString, ///
          json = {
            metastatement
          };

    return json;
  }

  static fromJSON(json, releaseContext) {
    const { metastatement } = json,
          metastatementString = metastatement,  ///
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, releaseContext),
          metaAntecedent = new MetaAntecedent(metastatementNode);

    return metaAntecedent;
  }

  static fromMetastatementNode(metastatementNode) {
    const metaAntecedent = new MetaAntecedent(metastatementNode);

    return metaAntecedent;
  }
}

function matchMetaAntecedentNode(metaAntecedentNode, node, metaSubstitutions) {
  let metaAntecedentNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaAntecedentNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaAntecedentTerminalNode = metaAntecedentNode,  ///
            metaAntecedentTerminalNodeMatches = matchMetaAntecedentTerminalNode(metaAntecedentTerminalNode, terminalNode, metaSubstitutions);

      metaAntecedentNodeMatches = metaAntecedentTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaAntecedentNonTerminalNode = metaAntecedentNode,  ///
            metaAntecedentNonTerminalNodeMatches = matchMetaAntecedentNonTerminalNode(metaAntecedentNonTerminalNode, nonTerminalNode, metaSubstitutions);

      metaAntecedentNodeMatches = metaAntecedentNonTerminalNodeMatches; ///
    }
  }

  return metaAntecedentNodeMatches;
}

function matchMetaAntecedentNodes(metaAntecedentNodes, nodes, metaSubstitutions) {
  let metaAntecedentNodesMatches = false;

  const nodesLength = nodes.length,
        metaAntecedentNodesLength = metaAntecedentNodes.length;

  if (nodesLength === metaAntecedentNodesLength) {
    metaAntecedentNodesMatches = nodes.every((node, index) => {
      const metaAntecedentNode = metaAntecedentNodes[index],
            metaAntecedentNodeMatches = matchMetaAntecedentNode(metaAntecedentNode, node, metaSubstitutions);

      if (metaAntecedentNodeMatches) {
        return true;
      }
    });
  }

  return metaAntecedentNodesMatches;
}

function matchMetaAntecedentMetavariable(metaAntecedentMetavariableNode, nodes, metaSubstitutions) {
  let metaAntecedentMetavariableMatches;

  const metaAntecedentMetavariableName = metavariableNameFromMetavariableNode(metaAntecedentMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === metaAntecedentMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

    metaAntecedentMetavariableMatches = metaSubstitutionNodesMatch;  ///
  } else {
    const metavariableName = metaAntecedentMetavariableName, ///
          metaSubstitution = MetaSubstitution.fromMetavariableNameAndNodes(metavariableName, nodes);

    metaSubstitutions.push(metaSubstitution);

    metaAntecedentMetavariableMatches = true;
  }

  return metaAntecedentMetavariableMatches;
}

function matchMetaAntecedentTerminalNode(metaAntecedentTerminalNode, terminalNode, metaSubstitutions) {
  const matches = metaAntecedentTerminalNode.match(terminalNode),
        metaAntecedentTerminalNodeMatches = matches;

  return metaAntecedentTerminalNodeMatches;
}

function matchMetaAntecedentNonTerminalNode(metaAntecedentNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let metaAntecedentNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaAntecedentRuleName = metaAntecedentNonTerminalNode.getRuleName(); ///

  if (ruleName === metaAntecedentRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaAntecedentChildNodes = metaAntecedentNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaAntecedentNodes = metaAntecedentChildNodes, ///
          metaAntecedentChildNodesMatches = matchMetaAntecedentNodes(metaAntecedentNodes, nodes, metaSubstitutions);

    metaAntecedentNonTerminalNodeMatches = metaAntecedentChildNodesMatches; ///

    if (!metaAntecedentNonTerminalNodeMatches) {
      const ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

      if (ruleNameMetastatementRuleName) {
        const metastatementNode = nonTerminalNode,  ///
              metaAntecedentMetastatementNode = metaAntecedentNonTerminalNode,  ///
              metaAntecedentMetastatementNodeMatches = matchMetaAntecedentMetastatementNode(metaAntecedentMetastatementNode, metastatementNode, metaSubstitutions);

        metaAntecedentNonTerminalNodeMatches = metaAntecedentMetastatementNodeMatches; ///
      }
    }
  }

  return metaAntecedentNonTerminalNodeMatches;
}

function matchMetaAntecedentMetastatementNode(metaAntecedentMetastatementNode, metastatementNode, metaSubstitutions) {
  let metaAntecedentMetastatementNodeMatches = false;

  const metaAntecedentNonTerminalNode = metaAntecedentMetastatementNode,  ///
        metaAntecedentChildNodes = metaAntecedentNonTerminalNode.getChildNodes(),
        metaAntecedentChildNodesLength = metaAntecedentChildNodes.length;

  if (metaAntecedentChildNodesLength === 1) {
    const firstMetaAntecedentChildNode = first(metaAntecedentChildNodes),
          metaAntecedentChildNode = firstMetaAntecedentChildNode,  ///
          metaAntecedentChildNodeNonTerminalNode = metaAntecedentChildNode.isNonTerminalNode();

    if (metaAntecedentChildNodeNonTerminalNode) {
      const metaAntecedentNonTerminalChildNode = metaAntecedentChildNode,  ///
            metaAntecedentNonTerminalChildNodeRuleName = metaAntecedentNonTerminalChildNode.getRuleName(),
            metaAntecedentNonTerminalChildNodeRuleNameMetavariableRuleName = (metaAntecedentNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (metaAntecedentNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const metaAntecedentMetavariableNode = metaAntecedentNonTerminalChildNode,  ///
              nonTerminalNode = metastatementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              metaAntecedentMetavariableMatches = matchMetaAntecedentMetavariable(metaAntecedentMetavariableNode, nodes, metaSubstitutions);

        metaAntecedentMetastatementNodeMatches = metaAntecedentMetavariableMatches; ///
      }
    }
  }

  return metaAntecedentMetastatementNodeMatches;
}
