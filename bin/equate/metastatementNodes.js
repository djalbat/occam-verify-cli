"use strict";

const MetaSubstitution = require("../metaSubstitution");

const { nodeAsString } = require("../utilities/string"),
      { METAVARIABLE_RULE_NAME } = require("../ruleNames"),
      { metavariableNameFromMetavariableNode } = require("../utilities/query");

function equateRuleMetastatementNodes(ruleMetastatementNodes, metastatementNodes, metaSubstitutions, context) {
  const ruleMetastatementsEqual = ruleMetastatementNodes.every((ruleMetastatementNode) => {
          const ruleMetastatementEqual = equateRuleMetastatementNode(ruleMetastatementNode, metastatementNodes, metaSubstitutions, context);

          if (ruleMetastatementEqual) {
            return true;
          }
        });

  return ruleMetastatementsEqual;
}

module.exports = equateRuleMetastatementNodes;

function equateRuleMetastatementNode(ruleMetastatementNode, metastatementNodes, metaSubstitutions, context) {
  const ruleMetastatementEqual = metastatementNodes.some((metastatementNode) => {
    const nonTerminalNode = metastatementNode,  ///
          ruleNonTerminalNode = ruleMetastatementNode,  ///
          nonTerminalNodeEqual = equateNonTerminalNode(ruleNonTerminalNode, nonTerminalNode, metaSubstitutions, context),
          metastatementNodeEqual = nonTerminalNodeEqual;  ///

    if (metastatementNodeEqual) {
      return true;
    }
  });

  return ruleMetastatementEqual;
}

function equateNonTerminalNode(ruleNonTerminalNode, nonTerminalNode, metaSubstitutions, context) {
  let nonTerminalNodeEqual = false;

  const ruleRuleName = ruleNonTerminalNode.getRuleName();

  switch (ruleRuleName) {
    case METAVARIABLE_RULE_NAME: {
      const metavariableNode = ruleNonTerminalNode, ///
            metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
            nonTerminalString = nodeAsString(nonTerminalNode),
            metaSubstitution = metaSubstitutions.find((metaSubstitution) => {
              const metaSubstitutionMetavariableName = metaSubstitution.getMetavariableName();

              if (metavariableName === metaSubstitutionMetavariableName) {
                return true;
              }
            }) || null;

      if (metaSubstitution !== null) {
        const metaSubstitutionNonTerminalNode = metaSubstitution.getNonTerminalNode(),
              metaSubstitutionNonTerminalString = nodeAsString(metaSubstitutionNonTerminalNode);

        if (nonTerminalString === metaSubstitutionNonTerminalString) {
          nonTerminalNodeEqual = true;
        }
      } else {
        const metaSubstitution = MetaSubstitution.fromMetavariableNameAndNonTerminalNode(metavariableName, nonTerminalNode);

        metaSubstitutions.push(metaSubstitution);

        nonTerminalNodeEqual = true;
      }

      break;
    }

    default: {
      const ruleName = nonTerminalNode.getRuleName();

      if (ruleName === ruleRuleName) {
        const childNodes = nonTerminalNode.getChildNodes(),
              ruleChildNodes = ruleNonTerminalNode.getChildNodes(),
              childNodesEqual = equateChildNodes(ruleChildNodes, childNodes, metaSubstitutions, context);

        nonTerminalNodeEqual = childNodesEqual; ///
      }
    }
  }

  return nonTerminalNodeEqual;
}

function equateTerminalNode(ruleTerminalNode, terminalNode, metaSubstitutions, context) {
  let terminalNodeEqual = false;

  const matches = ruleTerminalNode.match(terminalNode);

  if (matches) {
    terminalNodeEqual = true;
  }

  return terminalNodeEqual;
}

function equateChildNodes(ruleChildNodes, childNodes, metaSubstitutions, context) {
  let childNodesEqual = false;

  const childNodesLength = childNodes.length,
        ruleChildNodesLength = ruleChildNodes.length;

  if (childNodesLength === ruleChildNodesLength) {
    childNodesEqual = childNodes.every((childNode, index) => {
      const ruleChildNode = ruleChildNodes[index],
            node = childNode, ///
            ruleNode = ruleChildNode, ///
            nodeEqual = equateNode(ruleNode, node, metaSubstitutions, context);

      if (nodeEqual) {
        return true;
      }
    })
  }

  return childNodesEqual;
}

function equateNode(ruleNode, node, metaSubstitutions, context) {
  let nodeEqual = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = ruleNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            ruleTerminalNode = ruleNode,  ///
            terminalNodeEqual = equateTerminalNode(ruleTerminalNode, terminalNode, metaSubstitutions, context);

      nodeEqual = terminalNodeEqual;  ///
    } else {
      const nonTerminalNode = node, ///
            ruleNonTerminalNode = ruleNode,  ///
            nonTerminalNodeEqual = equateNonTerminalNode(ruleNonTerminalNode, nonTerminalNode, metaSubstitutions, context);

      nodeEqual = nonTerminalNodeEqual; ///
    }
  }

  return nodeEqual;
}
