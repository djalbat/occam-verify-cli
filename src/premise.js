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
      qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery = nodesQuery("/metaSubproof/qualifiedMetastatement|unqualifiedMetastatement/metastatement!");

export default class Premise {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetaSubproofNode(metaSubproofNode, metaSubstitutions) {
    let metaSubproofNodeMatches = false;

    const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(this.metastatementNode);

    if (metaSubproofAssertionNode !== null) {
      const metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode),
            metaSubproofAssertionMetastatementNodesLength = metaSubproofAssertionMetastatementNodes.length,
            qualifiedOrUnqualifiedMetastatementMetastatementNodes = qualifiedOrUnqualifiedMetastatementMetastatementNodesQuery(metaSubproofNode),
            qualifiedOrUnqualifiedMetastatementMetastatementNodesLength = qualifiedOrUnqualifiedMetastatementMetastatementNodes.length;

      if (metaSubproofAssertionMetastatementNodesLength === qualifiedOrUnqualifiedMetastatementMetastatementNodesLength) {
        metaSubproofNodeMatches = metaSubproofAssertionMetastatementNodes.every((metaSubproofAssertionMetastatementNode, index) => {
                                    const qualifiedOrUnqualifiedMetastatementMetastatementNode = qualifiedOrUnqualifiedMetastatementMetastatementNodes[index],
                                          nonTerminalNode = qualifiedOrUnqualifiedMetastatementMetastatementNode, ///
                                          premiseNonTerminalNode = metaSubproofAssertionMetastatementNode,  ///
                                          premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

                                    if (premiseNonTerminalNodeMatches) {
                                      return true;
                                    }
                                  });
      }
    }

    return metaSubproofNodeMatches;
  }

  matchMetastatementNode(metastatementNode, metaSubstitutions) {
    const nonTerminalNode = metastatementNode,  ///
          premiseNonTerminalNode = this.metastatementNode,  ///
          premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions),
          metastatementNodeMatches = premiseNonTerminalNodeMatches; ///

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
          premise = new Premise(metastatementNode);

    return premise;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}

function matchPremiseNode(premiseNode, node, metaSubstitutions) {
  let premiseNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = premiseNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            premiseTerminalNode = premiseNode,  ///
            premiseTerminalNodeMatches = matchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions);

      premiseNodeMatches = premiseTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            premiseNonTerminalNode = premiseNode,  ///
            premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

      premiseNodeMatches = premiseNonTerminalNodeMatches; ///
    }
  }

  return premiseNodeMatches;
}

function matchPremiseNodes(premiseNodes, nodes, metaSubstitutions) {
  let premiseNodesMatches = false;

  const nodesLength = nodes.length,
        premiseNodesLength = premiseNodes.length;

  if (nodesLength === premiseNodesLength) {
    premiseNodesMatches = nodes.every((node, index) => {
      const premiseNode = premiseNodes[index],
            premiseNodeMatches = matchPremiseNode(premiseNode, node, metaSubstitutions);

      if (premiseNodeMatches) {
        return true;
      }
    });
  }

  return premiseNodesMatches;
}

function matchPremiseMetavariable(premiseMetavariableNode, nodes, metaSubstitutions) {
  let premiseMetavariableMatches;

  const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === premiseMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNodesMatch = metaSubstitution.matchNodes(nodes);

    premiseMetavariableMatches = metaSubstitutionNodesMatch;  ///
  } else {
    const metavariableName = premiseMetavariableName, ///
          metaSubstitution = MetaSubstitution.fromMetavariableNameAndNodes(metavariableName, nodes);

    metaSubstitutions.push(metaSubstitution);

    premiseMetavariableMatches = true;
  }

  return premiseMetavariableMatches;
}

function matchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions) {
  const matches = premiseTerminalNode.match(terminalNode),
        premiseTerminalNodeMatches = matches;

  return premiseTerminalNodeMatches;
}

function matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let premiseNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        premiseRuleName = premiseNonTerminalNode.getRuleName(); ///

  if (ruleName === premiseRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          premiseChildNodes = premiseNonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          premiseNodes = premiseChildNodes, ///
          premiseChildNodesMatches = matchPremiseNodes(premiseNodes, nodes, metaSubstitutions);

    premiseNonTerminalNodeMatches = premiseChildNodesMatches; ///

    if (!premiseNonTerminalNodeMatches) {
      const ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

      if (ruleNameMetastatementRuleName) {
        const metastatementNode = nonTerminalNode,  ///
              premiseMetastatementNode = premiseNonTerminalNode,  ///
              premiseMetastatementNodeMatches = matchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions);

        premiseNonTerminalNodeMatches = premiseMetastatementNodeMatches; ///
      }
    }
  }

  return premiseNonTerminalNodeMatches;
}

function matchPremiseMetastatementNode(premiseMetastatementNode, metastatementNode, metaSubstitutions) {
  let premiseMetastatementNodeMatches = false;

  const premiseNonTerminalNode = premiseMetastatementNode,  ///
        premiseChildNodes = premiseNonTerminalNode.getChildNodes(),
        premiseChildNodesLength = premiseChildNodes.length;

  if (premiseChildNodesLength === 1) {
    const firstPremiseChildNode = first(premiseChildNodes),
          premiseChildNode = firstPremiseChildNode,  ///
          premiseChildNodeNonTerminalNode = premiseChildNode.isNonTerminalNode();

    if (premiseChildNodeNonTerminalNode) {
      const premiseNonTerminalChildNode = premiseChildNode,  ///
            premiseNonTerminalChildNodeRuleName = premiseNonTerminalChildNode.getRuleName(),
            premiseNonTerminalChildNodeRuleNameMetavariableRuleName = (premiseNonTerminalChildNodeRuleName === METAVARIABLE_RULE_NAME);

      if (premiseNonTerminalChildNodeRuleNameMetavariableRuleName) {
        const premiseMetavariableNode = premiseNonTerminalChildNode,  ///
              nonTerminalNode = metastatementNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodes = childNodes, ///
              premiseMetaVariableMatches = matchPremiseMetavariable(premiseMetavariableNode, nodes, metaSubstitutions);

        premiseMetastatementNodeMatches = premiseMetaVariableMatches; ///
      }
    }
  }

  return premiseMetastatementNodeMatches;
}
