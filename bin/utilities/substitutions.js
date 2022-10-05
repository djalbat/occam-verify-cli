"use strict";

const { METAVARIABLE_RULE_NAME } = require("../ruleNames"),
      { metavariableNameFromMetavariableNode } = require("../utilities/query");

function applyMetaSubstitutions(metastatementNode, metaSubstitutions) {
  let nonTerminalNode = metastatementNode;  ///

  nonTerminalNode = nonTerminalNode.clone();

  nonTerminalNode = applyMetaSubstitutionsToNonTerminalNode(nonTerminalNode, metaSubstitutions);

  metastatementNode = nonTerminalNode;  ///

  return metastatementNode;
}

module.exports = {
  applyMetaSubstitutions
};

function applyMetaSubstitutionsToNonTerminalNode(nonTerminalNode, metaSubstitutions) {
  const ruleName = nonTerminalNode.getRuleName();

  if (ruleName === METAVARIABLE_RULE_NAME) {
    const metaVariableNode = nonTerminalNode, ///
          metavariableName = metavariableNameFromMetavariableNode(metaVariableNode),
          metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
            const metaSubstitutionMetavariableName = metaSubstitution.getMetavariableName();

            if (metaSubstitutionMetavariableName === metavariableName) {
              return true;
            }
          });

    nonTerminalNode = metaSubstitution.getNonTerminalNode();  ///

    nonTerminalNode = nonTerminalNode.clone();  ///
  } else {
    let childNodes = nonTerminalNode.getChildNodes();

    childNodes = childNodes.map((childNode) => {
      let node = childNode; ///

      node = applyMetaSubstitutionsToNode(node, metaSubstitutions);

      childNode = node; ///

      return childNode;
    });

    nonTerminalNode.setChildNodes(childNodes);
  }

  return nonTerminalNode;
}

function applyMetaSubstitutionsToNode(node, metaSubstitutions) {
  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    let nonTerminalNode = node; ///

    nonTerminalNode = applyMetaSubstitutionsToNonTerminalNode(nonTerminalNode, metaSubstitutions);

    node = nonTerminalNode; ///
  }

  return node;
}
