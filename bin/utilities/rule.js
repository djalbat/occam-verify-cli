"use strict";

const MetaSubstitution = require("../metaSubstitution");

const { nodeAsString } = require("../utilities/string"),
      { METAVARIABLE_RULE_NAME } = require("../ruleNames"),
      { metavariableNameFromMetavariableNode } = require("../utilities/query");

function equatePremises(premiseMetastatementNodes, metastatementNodes, metaSubstitutions) {
  const premisesEqual = premiseMetastatementNodes.every((premiseMetastatementNode) => {
          const premiseEqual = equatePremise(premiseMetastatementNode, metastatementNodes, metaSubstitutions);

          if (premiseEqual) {
            return true;
          }
        });

  return premisesEqual;
}

function adjustConclusion(conclusionMetastatementNode, metaSubstitutions) {
  let nonTerminalNode = conclusionMetastatementNode;  ///

  nonTerminalNode = nonTerminalNode.clone();

  nonTerminalNode = adjustNonTerminalNode(nonTerminalNode, metaSubstitutions);

  const metastatementNode = nonTerminalNode;  ///

  return metastatementNode;
}

module.exports = {
  equatePremises,
  adjustConclusion
};

function equatePremise(premiseMetastatementNode, metastatementNodes, metaSubstitutions) {
  const premiseEqual = metastatementNodes.some((metastatementNode) => {
    const nonTerminalNode = metastatementNode,  ///
          premiseNonTerminalNode = premiseMetastatementNode,  ///
          premiseNonTerminalNodeEqual = equatePremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

    if (premiseNonTerminalNodeEqual) {
      return true;
    }
  });

  return premiseEqual;
}

function equatePremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions) {
  let premiseNonTerminalNodeEqual = false;

  const premiseRuleName = premiseNonTerminalNode.getRuleName(); ///

  switch (premiseRuleName) {
    case METAVARIABLE_RULE_NAME: {
      const premiseMetavariableNode = premiseNonTerminalNode, ///
            premiseMetavariableEqual = equatePremiseMetavariable(premiseMetavariableNode, nonTerminalNode, metaSubstitutions);

      premiseNonTerminalNodeEqual = premiseMetavariableEqual;

      break;
    }

    default: {
      const ruleName = nonTerminalNode.getRuleName();

      if (ruleName === premiseRuleName) {
        const childNodes = nonTerminalNode.getChildNodes(),
              premiseChildNodes = premiseNonTerminalNode.getChildNodes(),
              premiseChildNodesEqual = equatePremiseChildNodes(premiseChildNodes, childNodes, metaSubstitutions);

        premiseNonTerminalNodeEqual = premiseChildNodesEqual; ///
      }
    }
  }

  return premiseNonTerminalNodeEqual;
}

function equatePremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions) {
  let premiseTerminalNodeEqual = false;

  const matches = premiseTerminalNode.match(terminalNode);

  if (matches) {
    premiseTerminalNodeEqual = true;
  }

  return premiseTerminalNodeEqual;
}

function equatePremiseMetavariable(premiseMetavariableNode, nonTerminalNode, metaSubstitutions) {
  let premiseMetavariableEqual = false;

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
      premiseMetavariableEqual = true;
    }
  } else {
    const metavariableName = premiseMetavariableName, ///
          metaSubstitution = MetaSubstitution.fromMetavariableNameAndNonTerminalNode(metavariableName, nonTerminalNode);

    metaSubstitutions.push(metaSubstitution);

    premiseMetavariableEqual = true;
  }

  return premiseMetavariableEqual;
}

function equatePremiseChildNodes(premiseChildNodes, childNodes, metaSubstitutions) {
  let premiseChildNodesEqual = false;

  const childNodesLength = childNodes.length,
        premiseChildNodesLength = premiseChildNodes.length;

  if (childNodesLength === premiseChildNodesLength) {
    premiseChildNodesEqual = childNodes.every((childNode, index) => {
      const premiseChildNode = premiseChildNodes[index],
            premiseNode = premiseChildNode, ///
            node = childNode, ///
            premiseNodeEqual = equatePremiseNode(premiseNode, node, metaSubstitutions);

      if (premiseNodeEqual) {
        return true;
      }
    })
  }

  return premiseChildNodesEqual;
}

function equatePremiseNode(premiseNode, node, metaSubstitutions) {
  let premiseNodeEqual = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = premiseNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            premiseTerminalNode = premiseNode,  ///
            premiseTerminalNodeEqual = equatePremiseTerminalNode(premiseTerminalNode, terminalNode, metaSubstitutions);

      premiseNodeEqual = premiseTerminalNodeEqual;  ///
    } else {
      const nonTerminalNode = node, ///
            premiseNonTerminalNode = premiseNode,  ///
            premiseNonTerminalNodeEqual = equatePremiseNonTerminalNode(premiseNonTerminalNode, nonTerminalNode, metaSubstitutions);

      premiseNodeEqual = premiseNonTerminalNodeEqual; ///
    }
  }

  return premiseNodeEqual;
}

function adjustMetavariableNode(metavariableNode, metaSubstitutions) {
  const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
        metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
          const metaSubstitutionMetavariableName = metaSubstitution.getMetavariableName();

          if (metaSubstitutionMetavariableName === metavariableName) {
            return true;
          }
        });

  let nonTerminalNode = metaSubstitution.getNonTerminalNode();  ///

  nonTerminalNode = nonTerminalNode.clone();  ///

  return nonTerminalNode;
}

function adjustNonTerminalNode(nonTerminalNode, metaSubstitutions) {
  const ruleName = nonTerminalNode.getRuleName();

  if (ruleName === METAVARIABLE_RULE_NAME) {
    let metaVariableNode = nonTerminalNode; ///

    nonTerminalNode = adjustMetavariableNode(metaVariableNode, metaSubstitutions);
  } else {
    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = adjustChildNodes(childNodes, metaSubstitutions);

    nonTerminalNode.setChildNodes(childNodes);
  }

  return nonTerminalNode;
}

function adjustChildNodes(childNodes, metaSubstitutions) {
  childNodes = childNodes.map((childNode) => {
    let node = childNode; ///

    node = adjustNode(node, metaSubstitutions);

    childNode = node; ///

    return childNode;
  });

  return childNodes;
}

function adjustNode(node, metaSubstitutions) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    let nonTerminalNode = node; ///

    nonTerminalNode = adjustNonTerminalNode(nonTerminalNode, metaSubstitutions);

    node = nonTerminalNode; ///
  }

  return node;
}
