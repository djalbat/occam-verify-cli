"use strict";

const MetaSubstitution = require("./metaSubstitution");

const { first } = require("./utilities/array"),
      { metavariableNameFromMetavariableNode } = require("./utilities/query"),
      { METAVARIABLE_RULE_NAME, METASTATEMENT_RULE_NAME } = require("./ruleNames");

class Premise {
  constructor(metastatementNode) {
    this.metastatementNode = metastatementNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchNonTerminalNode(nonTerminalNode, metaSubstitutions) {
    const premiseNonTerminalNode = this.metastatementNode,  ///
          premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions),
          nonTerminalNodeMatches = premiseNonTerminalNodeMatches; ///

    return nonTerminalNodeMatches;
  }

  static fromMetastatementNode(metastatementNode) {
    const premise = new Premise(metastatementNode);

    return premise;
  }
}

module.exports = Premise;

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
    const nonTerminalNodeMatches = metaSubstitution.matchNodes(nodes);

    premiseMetavariableMatches = nonTerminalNodeMatches;  ///
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
