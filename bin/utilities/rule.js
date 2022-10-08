"use strict";

const MetaSubstitution = require("../metaSubstitution");

const { prune, someCombination } = require("../utilities/array"),
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
    const premisesMatchConclusion = matchPremisesAndConclusion(premiseMetastatementNodes, conclusionMetastatementNode, metastatementNodes, metastatementNode);

    if (premisesMatchConclusion) {
      return true;
    }
  });

  return ruleMatches;
}

module.exports = {
  matchRule
};

function matchPremisesAndConclusion(premiseMetastatementNodes, conclusionMetastatementNode, metastatementNodes, metastatementNode) {
  let premisesMatchConclusion = false;

  const metaSubstitutions = [],
        premisesMatches = matchPremises(premiseMetastatementNodes, metastatementNodes, metaSubstitutions);

  if (premisesMatches) {
    const conclusionMatches = matchConclusion(conclusionMetastatementNode, metastatementNode, metaSubstitutions);

    premisesMatchConclusion = conclusionMatches;  ///
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
  let premiseMetavariableMatches;

  const premiseMetavariableName = metavariableNameFromMetavariableNode(premiseMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === premiseMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    const metaSubstitutionNonTerminalNode = metaSubstitution.getNonTerminalNode(),
          metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode);

    premiseMetavariableMatches = metaSubstitutionNonTerminalNodeMatches;  ///
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

function matchConclusion(conclusionMetastatementNode, metastatementNode, metaSubstitutions) {
  const nonTerminalNode = metastatementNode,  ///
        conclusionNonTerminalNode = conclusionMetastatementNode,  ///
        conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions),
        conclusionMatches = conclusionNonTerminalNodeMatches; ///

  return conclusionMatches;
}

function matchConclusionNode(conclusionNode, node, metaSubstitutions) {
  let conclusionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = conclusionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            conclusionTerminalNode = conclusionNode,  ///
            conclusionTerminalNodeMatches = matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions);

      conclusionNodeMatches = conclusionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            conclusionNonTerminalNode = conclusionNode,  ///
            conclusionNonTerminalNodeMatches = matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions);

      conclusionNodeMatches = conclusionNonTerminalNodeMatches; ///
    }
  }

  return conclusionNodeMatches;
}

function matchConclusionChildNodes(conclusionChildNodes, childNodes, metaSubstitutions) {
  let conclusionChildNodesMatches = false;

  const childNodesLength = childNodes.length,
        conclusionChildNodesLength = conclusionChildNodes.length;

  if (childNodesLength === conclusionChildNodesLength) {
    conclusionChildNodesMatches = childNodes.every((childNode, index) => {
      const conclusionChildNode = conclusionChildNodes[index],
            conclusionNode = conclusionChildNode, ///
            node = childNode, ///
            conclusionNodeMatches = matchConclusionNode(conclusionNode, node, metaSubstitutions);

      if (conclusionNodeMatches) {
        return true;
      }
    })
  }

  return conclusionChildNodesMatches;
}

function matchConclusionMetavariable(conclusionMetavariableNode, nonTerminalNode, metaSubstitutions) {
  let conclusionMetavariableMatches = true;

  const conclusionMetavariableName = metavariableNameFromMetavariableNode(conclusionMetavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metavariableName = metaSubstitution.getMetavariableName();

          if (metavariableName === conclusionMetavariableName) {
            return true;
          }
        }) || null;

  if (metaSubstitution !== null) {
    let metaSubstitutionNonTerminalNode = metaSubstitution.getNonTerminalNode();  ///

    const metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode);

    conclusionMetavariableMatches = metaSubstitutionNonTerminalNodeMatches;  ///
  }

  return conclusionMetavariableMatches;
}

function matchConclusionTerminalNode(conclusionTerminalNode, terminalNode, metaSubstitutions) {
  let conclusionTerminalNodeMatches = false;

  const matches = conclusionTerminalNode.match(terminalNode);

  if (matches) {
    conclusionTerminalNodeMatches = true;
  }

  return conclusionTerminalNodeMatches;
}

function matchConclusionNonTerminalNode(conclusionNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let conclusionNonTerminalNodeMatches = false;

  const conclusionRuleName = conclusionNonTerminalNode.getRuleName(); ///

  switch (conclusionRuleName) {
    case METAVARIABLE_RULE_NAME: {
      const conclusionMetavariableNode = conclusionNonTerminalNode, ///
            conclusionMetavariableMatches = matchConclusionMetavariable(conclusionMetavariableNode, nonTerminalNode, metaSubstitutions);

      conclusionNonTerminalNodeMatches = conclusionMetavariableMatches;

      break;
    }

    default: {
      const ruleName = nonTerminalNode.getRuleName();

      if (ruleName === conclusionRuleName) {
        const childNodes = nonTerminalNode.getChildNodes(),
              conclusionChildNodes = conclusionNonTerminalNode.getChildNodes(),
              conclusionChildNodesMatches = matchConclusionChildNodes(conclusionChildNodes, childNodes, metaSubstitutions);

        conclusionNonTerminalNodeMatches = conclusionChildNodesMatches; ///
      }
    }
  }

  return conclusionNonTerminalNodeMatches;
}

function matchMetaSubstitutionNode(metaSubstitutionNode, node) {
  let metaSubstitutionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaSubstitutionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaSubstitutionTerminalNode = metaSubstitutionNode,  ///
            metaSubstitutionTerminalNodeMatches = matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode);

      metaSubstitutionNodeMatches = metaSubstitutionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaSubstitutionNonTerminalNode = metaSubstitutionNode,  ///
            metaSubstitutionNonTerminalNodeMatches = matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode);

      metaSubstitutionNodeMatches = metaSubstitutionNonTerminalNodeMatches; ///
    }
  }

  return metaSubstitutionNodeMatches;
}

function matchMetaSubstitutionChildNodes(metaSubstitutionChildNodes, childNodes) {
  let metaSubstitutionChildNodesMatches = false;

  const childNodesLength = childNodes.length,
        metaSubstitutionChildNodesLength = metaSubstitutionChildNodes.length;

  if (childNodesLength === metaSubstitutionChildNodesLength) {
    metaSubstitutionChildNodesMatches = childNodes.every((childNode, index) => {
      const metaSubstitutionChildNode = metaSubstitutionChildNodes[index],
            metaSubstitutionNode = metaSubstitutionChildNode, ///
            node = childNode, ///
            metaSubstitutionNodeMatches = matchMetaSubstitutionNode(metaSubstitutionNode, node);

      if (metaSubstitutionNodeMatches) {
        return true;
      }
    })
  }

  return metaSubstitutionChildNodesMatches;
}

function matchMetaSubstitutionTerminalNode(metaSubstitutionTerminalNode, terminalNode) {
  let metaSubstitutionTerminalNodeMatches = false;

  const matches = metaSubstitutionTerminalNode.match(terminalNode);

  if (matches) {
    metaSubstitutionTerminalNodeMatches = true;
  }

  return metaSubstitutionTerminalNodeMatches;
}

function matchMetaSubstitutionNonTerminalNode(metaSubstitutionNonTerminalNode, nonTerminalNode) {
  let metaSubstitutionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaSubstitutionRuleName = metaSubstitutionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaSubstitutionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          metaSubstitutionChildNodes = metaSubstitutionNonTerminalNode.getChildNodes(),
          metaSubstitutionChildNodesMatches = matchMetaSubstitutionChildNodes(metaSubstitutionChildNodes, childNodes);

    metaSubstitutionNonTerminalNodeMatches = metaSubstitutionChildNodesMatches; ///
  }

  return metaSubstitutionNonTerminalNodeMatches;
}
