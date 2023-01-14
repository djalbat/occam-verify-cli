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

export default class MetaSupposition {
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
                                          metaSuppositionNonTerminalNode = metaSubproofAssertionMetastatementNode,  ///
                                          metaSuppositionNonTerminalNodeMatches = matchMetaSuppositionNonTerminalNode(metaSuppositionNonTerminalNode, nonTerminalNode, metaSubstitutions);

                                    if (metaSuppositionNonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          metaSuppositionNonTerminalNode = this.metastatementNode,  ///
          metaSuppositionNonTerminalNodeMatches = matchMetaSuppositionNonTerminalNode(metaSuppositionNonTerminalNode, nonTerminalNode, metaSubstitutions),
          metastatementNodeMatches = metaSuppositionNonTerminalNodeMatches; ///

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
          metaSupposition = new MetaSupposition(metastatementNode);

    return metaSupposition;
  }

  static fromMetastatementNode(metastatementNode) {
    const metaSupposition = new MetaSupposition(metastatementNode);

    return metaSupposition;
  }
}

function matchMetaSuppositionNode(metaSuppositionNode, node, metaSubstitutions) {
  let metaSuppositionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaSuppositionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaSuppositionTerminalNode = metaSuppositionNode,  ///
            metaSuppositionTerminalNodeMatches = matchMetaSuppositionTerminalNode(metaSuppositionTerminalNode, terminalNode, metaSubstitutions);

      metaSuppositionNodeMatches = metaSuppositionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaSuppositionNonTerminalNode = metaSuppositionNode,  ///
            metaSuppositionNonTerminalNodeMatches = matchMetaSuppositionNonTerminalNode(metaSuppositionNonTerminalNode, nonTerminalNode, metaSubstitutions);

      metaSuppositionNodeMatches = metaSuppositionNonTerminalNodeMatches; ///
    }
  }

  return metaSuppositionNodeMatches;
}

function matchMetaSuppositionNodes(metaSuppositionNodes, nodes, metaSubstitutions) {
  let metaSuppositionNodesMatches = false;

  const nodesLength = nodes.length,
        metaSuppositionNodesLength = metaSuppositionNodes.length;

  if (nodesLength === metaSuppositionNodesLength) {
    metaSuppositionNodesMatches = nodes.every((node, index) => {
      const metaSuppositionNode = metaSuppositionNodes[index],
            metaSuppositionNodeMatches = matchMetaSuppositionNode(metaSuppositionNode, node, metaSubstitutions);

      if (metaSuppositionNodeMatches) {
        return true;
      }
    });
  }

  return metaSuppositionNodesMatches;
}

function matchMetaSuppositionMetavariable(metaSuppositionMetavariableNode, nodes, metaSubstitutions) {
  let metaSuppositionMetavariableMatches;

  const metaSuppositionMetavariableName = metavariableNameFromMetavariableNode(metaSuppositionMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === metaSuppositionMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

    metaSuppositionMetavariableMatches = metaSubstitutionNodesMatch;  ///
  } else {
    const metavariableName = metaSuppositionMetavariableName, ///
          metaSubstitution = MetaSubstitution.fromMetavariableNameAndNodes(metavariableName, nodes);

    metaSubstitutions.push(metaSubstitution);

    metaSuppositionMetavariableMatches = true;
  }

  return metaSuppositionMetavariableMatches;
}

function matchMetaSuppositionTerminalNode(metaSuppositionTerminalNode, terminalNode, metaSubstitutions) {
  const matches = metaSuppositionTerminalNode.match(terminalNode),
        metaSuppositionTerminalNodeMatches = matches;

  return metaSuppositionTerminalNodeMatches;
}

function matchMetaSuppositionNonTerminalNode(metaSuppositionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let metaSuppositionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaSuppositionRuleName = metaSuppositionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaSuppositionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaSuppositionChildNodes = metaSuppositionNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaSuppositionNodes = metaSuppositionChildNodes, ///
          metaSuppositionChildNodesMatches = matchMetaSuppositionNodes(metaSuppositionNodes, nodes, metaSubstitutions);

    metaSuppositionNonTerminalNodeMatches = metaSuppositionChildNodesMatches; ///

    if (!metaSuppositionNonTerminalNodeMatches) {
      const ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

      if (ruleNameMetastatementRuleName) {
        const metastatementNode = nonTerminalNode,  ///
              metaSuppositionMetastatementNode = metaSuppositionNonTerminalNode,  ///
              metaSuppositionMetastatementNodeMatches = matchMetaSuppositionMetastatementNode(metaSuppositionMetastatementNode, metastatementNode, metaSubstitutions);

        metaSuppositionNonTerminalNodeMatches = metaSuppositionMetastatementNodeMatches; ///
      }
    }
  }

  return metaSuppositionNonTerminalNodeMatches;
}

function matchMetaSuppositionMetastatementNode(metaSuppositionMetastatementNode, metastatementNode, metaSubstitutions) {
  let metaSuppositionMetastatementNodeMatches = false;

  const metaSuppositionNonTerminalNode = metaSuppositionMetastatementNode,  ///
        metaSuppositionChildNodes = metaSuppositionNonTerminalNode.getChildNodes(),
        metaSuppositionChildNodesLength = metaSuppositionChildNodes.length;

  if (metaSuppositionChildNodesLength === 1) {
    const firstMetaSuppositionChildNode = first(metaSuppositionChildNodes),
          metaSuppositionChildNode = firstMetaSuppositionChildNode,  ///
          metaSuppositionChildNodeNonTerminalNode = metaSuppositionChildNode.isNonTerminalNode();

    if (metaSuppositionChildNodeNonTerminalNode) {
      const metaSuppositionNonTerminalChildNode = metaSuppositionChildNode,  ///
            metaSuppositionNonTerminalChildNodeRuleName = metaSuppositionNonTerminalChildNode.getRuleName(),
            metaSuppositionNonTerminalChildNodeRuleNameMetavariableRuleName = (metaSuppositionNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (metaSuppositionNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const metaSuppositionMetavariableNode = metaSuppositionNonTerminalChildNode,  ///
              nonTerminalNode = metastatementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              metaSuppositionMetavariableMatches = matchMetaSuppositionMetavariable(metaSuppositionMetavariableNode, nodes, metaSubstitutions);

        metaSuppositionMetastatementNodeMatches = metaSuppositionMetavariableMatches; ///
      }
    }
  }

  return metaSuppositionMetastatementNodeMatches;
}
