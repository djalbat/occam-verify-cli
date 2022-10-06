"use strict";

const MetaSubstitution = require("../metaSubstitution");

const { nodeAsString } = require("../utilities/string"),
      { prune, someCombination } = require("../utilities/array"),
      { METAVARIABLE_RULE_NAME } = require("../ruleNames"),
      { metavariableNameFromMetavariableNode } = require("../utilities/query");

function matchRule(rule, metastatementNode, context) {
  let metastatementNodes = context.getMetastatementNodes();

  const premiseMetastatementNodes = rule.getPremiseMetastatementNodes(),
        conclusionMetastatementNode = rule.getConclusionMetastatementNode(),
        premiseMetastatementNodesLength = premiseMetastatementNodes.length,
        start = -premiseMetastatementNodesLength;

  metastatementNodes = metastatementNodes.slice(start); ///

  const ruleMatches = someCombination(metastatementNodes, (metastatementNodes) => {
    const premisesMatchConclusion = matchPremisesAndConclusion(premiseMetastatementNodes, conclusionMetastatementNode, metastatementNodes, metastatementNode, context);

    if (premisesMatchConclusion) {
      return true;
    }
  });

  return ruleMatches;
}

module.exports = {
  matchRule
};

function matchPremisesAndConclusion(premiseMetastatementNodes, conclusionMetastatementNode, metastatementNodes, metastatementNode, context) {
  let premisesMatchConclusion = false;

  const metaSubstitutions = [],
        premisesMatch = matchPremises(premiseMetastatementNodes, metastatementNodes, metaSubstitutions, context);

  if (premisesMatch) {
    const conclusionNonTerminalNode = matchConclusion(conclusionMetastatementNode, metaSubstitutions), ///
          conclusionMetastatementString = nodeAsString(conclusionNonTerminalNode),
          metastatementString = nodeAsString(metastatementNode);

    premisesMatchConclusion = (metastatementString === conclusionMetastatementString);
  }

  return premisesMatchConclusion;
}

function matchPremises(premiseMetastatementNodes, metastatementNodes, metaSubstitutions) {
  const premisesMatches = premiseMetastatementNodes.every((premiseMetastatementNode) => {
    const premiseMatches = matchPremise(premiseMetastatementNode, metastatementNodes, metaSubstitutions);

    if (premiseMatches) {
      return true;
    }
  });

  return premisesMatches;
}

function matchPremise(premiseMetastatementNode, metastatementNodes, metaSubstitutions) {
  const metastatementNode = prune(metastatementNodes, (metastatementNode) => {
    const nonTerminalNode = metastatementNode,  ///
          premiseNonTerminalNode = premiseMetastatementNode,  ///
          premiseNonTerminalNodeMatches = matchPremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

    if (!premiseNonTerminalNodeMatches) {
      return true;
    }
  }) || null;

  const premiseMatches = (metastatementNode !== null);

  return premiseMatches;
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
  let premiseMetavariableMatches = false;

  const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
        nonTerminalString = nodeAsString(nonTerminalNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === premiseMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNonTerminalNode = metaSubstitution.getNonTerminalNode(),
          metaSubstitutionNonTerminalString = nodeAsString(metaSubstitutionNonTerminalNode);

    if (nonTerminalString === metaSubstitutionNonTerminalString) {
      premiseMetavariableMatches = true;
    }
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

function matchConclusion(conclusionMetastatementNode, metaSubstitutions) {
  let conclusionNonTerminalNode = conclusionMetastatementNode;  ///

  conclusionNonTerminalNode = conclusionNonTerminalNode.clone();

  conclusionNonTerminalNode = matchConclusionNonTerminalNode(conclusionNonTerminalNode, metaSubstitutions);

  return conclusionNonTerminalNode;
}

function matchConclusionNode(conclusionNode, metaSubstitutions) {
  const conclusionNodeNonTerminalNode = conclusionNode.isNonTerminalNode();

  if (conclusionNodeNonTerminalNode) {
    let conclusionNonTerminalNode = conclusionNode; ///

    conclusionNonTerminalNode = matchConclusionNonTerminalNode(conclusionNonTerminalNode, metaSubstitutions);

    conclusionNode = conclusionNonTerminalNode; ///
  }

  return conclusionNode;
}

function matchConclusionChildNodes(conclusionChildNodes, metaSubstitutions) {
  conclusionChildNodes = conclusionChildNodes.map((conclusionChildNode) => {
    let conclusionNode = conclusionChildNode; ///

    conclusionNode = matchConclusionNode(conclusionNode, metaSubstitutions);

    conclusionChildNode = conclusionNode; ///

    return conclusionChildNode;
  });

  return conclusionChildNodes;
}

function matchConclusionNonTerminalNode(conclusinNonTerminalNode, metaSubstitutions) {
  const ruleName = conclusinNonTerminalNode.getRuleName();

  if (ruleName === METAVARIABLE_RULE_NAME) {
    let conclusionMetaVariableNode = conclusinNonTerminalNode; ///

    conclusinNonTerminalNode = matchConclusionMetavariableNode(conclusionMetaVariableNode, metaSubstitutions);
  } else {
    let childNodes = conclusinNonTerminalNode.getChildNodes();

    let conclusionChildNodes = childNodes;  ///

    conclusionChildNodes = matchConclusionChildNodes(conclusionChildNodes, metaSubstitutions);

    childNodes = conclusionChildNodes;  ///

    conclusinNonTerminalNode.setChildNodes(childNodes);
  }

  return conclusinNonTerminalNode;
}

function matchConclusionMetavariableNode(conclusionMetavariableNode, metaSubstitutions) {
  const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === conclusionMetavariableName) {
            return true;
          }
        });

  let nonTerminalNode = metaSubstitution.getNonTerminalNode();  ///

  nonTerminalNode = nonTerminalNode.clone();  ///

  const conclusionNonTerminalNode = nonTerminalNode;  ///

  return conclusionNonTerminalNode;
}
