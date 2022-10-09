"use strict";

const MetaSubstitution = require("./metaSubstitution");

const { METAVARIABLE_RULE_NAME } = require("./ruleNames"),
      { metavariableNameFromMetavariableNode } = require("./utilities/query");

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

function matchPremiseChildNodes(premiseChildNodes, childNodes, metaSubstitutions) {
  let premiseChildNodesMatches = false;

  const childNodesLength = childNodes.length,
      premiseChildNodesLength = premiseChildNodes.length;

  if (childNodesLength === premiseChildNodesLength) {
    premiseChildNodesMatches = childNodes.every((childNode, index) => {
      const premiseChildNode = premiseChildNodes[index],
            premiseNode = premiseChildNode, ///
            node = childNode, ///
            premiseNodeMatches = matchPremiseNode(premiseNode, node, metaSubstitutions);

      if (premiseNodeMatches) {
        return true;
      }
    })
  }

  return premiseChildNodesMatches;
}

function matchPremiseMetavariable(premiseMetavariableNode, nonTerminalNode, metaSubstitutions) {
  let premiseMetavariableMatches;

  const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
        const metavariableName = metaSubstitution.getMetavariableName();

        if (metavariableName === premiseMetavariableName) {
          return true;
        }
      }) || null;

  if (metaSubstitution !== null) {
    const nonTerminalNodeMatches = metaSubstitution.matchNonTerminalNode(nonTerminalNode);

    premiseMetavariableMatches = nonTerminalNodeMatches;  ///
  } else {
    const metavariableName = premiseMetavariableName, ///
          metaSubstitution = MetaSubstitution.fromMetavariableNameAndNonTerminalNode(metavariableName, nonTerminalNode);

    metaSubstitutions.push(metaSubstitution);

    premiseMetavariableMatches = true;
  }

  return premiseMetavariableMatches;
}

function matchPremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions) {
  let premiseTerminalNodeMatches = false;

  const matches = premiseTerminalNode.match(terminalNode);

  if (matches) {
    premiseTerminalNodeMatches = true;
  }

  return premiseTerminalNodeMatches;
}

function matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let premiseNonTerminalNodeMatches = false;

  const premiseRuleName = premiseNonTerminalNode.getRuleName(); ///

  switch (premiseRuleName) {
    case METAVARIABLE_RULE_NAME: {
      const premiseMetavariableNode = premiseNonTerminalNode, ///
            premiseMetavariableMatches = matchPremiseMetavariable(premiseMetavariableNode, nonTerminalNode, metaSubstitutions);

      premiseNonTerminalNodeMatches = premiseMetavariableMatches;

      break;
    }

    default: {
      const ruleName = nonTerminalNode.getRuleName();

      if (ruleName === premiseRuleName) {
        const childNodes = nonTerminalNode.getChildNodes(),
              premiseChildNodes = premiseNonTerminalNode.getChildNodes(),
              premiseChildNodesMatches = matchPremiseChildNodes(premiseChildNodes, childNodes, metaSubstitutions);

        premiseNonTerminalNodeMatches = premiseChildNodesMatches; ///
      }
    }
  }

  return premiseNonTerminalNodeMatches;
}
