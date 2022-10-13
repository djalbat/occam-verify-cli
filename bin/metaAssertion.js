"use strict";

const { first, second } = require("./utilities/array"),
      { nodeQuery, nodesQuery } = require("./utilities/query"),
      { METASTATEMENT_RULE_NAME } = require("./ruleNames"),
      { matchBracketedMetastatementChildNode } = require("./utilities/metastatement");

const metastatementNodeQuery = nodeQuery("/*/metastatement!"),
      metastatementNodesQuery = nodesQuery("/metaSubproofAssertion/metastatement"),
      metaSubproofAssertionNodeQuery = nodeQuery("/metastatement/metaSubproofAssertion"),
      metaAntecedentMetastatementNodeQuery = nodeQuery("/metaSubproof/metaAntecedent!/unqualifiedMetastatement!/metastatement!"),
      qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery = nodeQuery("/metaSubproof/qualifiedMetastatement|UnqualifiedMetastatement!/metastatement!");

class MetaAssertion {
  constructor(metaSubproofNode, metastatementNode) {
    this.metaSubproofNode = metaSubproofNode;
    this.metastatementNode = metastatementNode;
  }

  getNonTerminalNode() {
    const nonTerminalNode = (this.metastatementNode !== null) ?
                               this.metastatementNode :
                                 null;

    return nonTerminalNode;
  }

  getMetaSubproofNode() {
    return this.metaSubproofNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  match(metaAssertion) {
    let matches = false;

    const metastatementNode = metaAssertion.getMetastatementNode();

    if (metastatementNode !== null) {
      const metaSubproofAssertionNode = metaSubproofAssertionNodeQuery(metastatementNode);

      if (metaSubproofAssertionNode === null) {
        const metastatementMatches = this.matchMetastatement(metastatementNode);

        matches = metastatementMatches;  ///
      } else {
        const metaSubproofAssertionMatches = this.matchMetaSubproofAssertion(metaSubproofAssertionNode);

        matches = metaSubproofAssertionMatches; ///
      }
    }

    return matches;
  }

  matchMetastatement(metastatementNode) {
    let metastatementMatches = false;

    if (this.metastatementNode !== null) {
      const nonTerminalNode = metastatementNode, ///
            metaAssertionNonTerminalNode = this.metastatementNode, ///
            metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

      metastatementMatches = metaAssertionNonTerminalNodeMatches;  ///
    }

    return metastatementMatches;
  }

  matchMetaSubproofAssertion(metaSubproofAssertionNode) {
    let metaSubproofAssertionMatches = false;

    if (this.metaSubproofNode !== null) {
      const metaAntecedentMetastatementNode = metaAntecedentMetastatementNodeQuery(this.metaSubproofNode),
            metaSubproofAssertionMetastatementNodes = metastatementNodesQuery(metaSubproofAssertionNode),
            firstMetaSubproofAssertionMetastatementNode = first(metaSubproofAssertionMetastatementNodes);

      const nonTerminalNode = firstMetaSubproofAssertionMetastatementNode,  ///
            metaAssertionNonTerminalNode = metaAntecedentMetastatementNode, ///
            metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

      if (metaAssertionNonTerminalNodeMatches) {
        const qualifiedOrUnqualifiedMetastatementMetastatementNode = qualifiedOrUnqualifiedMetastatementMetastatementNodeQuery(this.metaSubproofNode),
              secondMetaSubproofAssertionMetastatementNode = second(metaSubproofAssertionMetastatementNodes);

        const nonTerminalNode = secondMetaSubproofAssertionMetastatementNode, ///
              metaAssertionNonTerminalNode = qualifiedOrUnqualifiedMetastatementMetastatementNode, ///
              metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

        metaSubproofAssertionMatches = metaAssertionNonTerminalNodeMatches; ///
      }
    }

    return metaSubproofAssertionMatches;
  }

  static fromMetaSubproofNode(metaSubproofNode) {
    const metastatementNode = null,
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }

  static fromMetastatementNode(metastatementNode) {
    const metaSubproofNode = null,
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }

  static fromQualifiedMetastatementNode(qualifiedMetastatementNode) {
    const metaSubproofNode = null,
          metastatementNode = metastatementNodeQuery(qualifiedMetastatementNode),
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }

  static fromUnqualifiedMetastatementNode(unqualifiedMetastatementNode) {
    const metaSubproofNode = null,
          metastatementNode = metastatementNodeQuery(unqualifiedMetastatementNode),
          metaAssertion = new MetaAssertion(metaSubproofNode, metastatementNode);

    return metaAssertion;
  }
}

module.exports = MetaAssertion;

function matchMetaAssertionNode(metaAssertionNode, node) {
  let metaAssertionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = metaAssertionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            metaAssertionTerminalNode = metaAssertionNode,  ///
            metaAssertionTerminalNodeMatches = matchMetaAssertionTerminalNode(metaAssertionTerminalNode, terminalNode);

      metaAssertionNodeMatches = metaAssertionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            metaAssertionNonTerminalNode = metaAssertionNode,  ///
            metaAssertionNonTerminalNodeMatches = matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode);

      metaAssertionNodeMatches = metaAssertionNonTerminalNodeMatches; ///
    }
  }

  return metaAssertionNodeMatches;
}

function matchMetaAssertionNodes(metaAssertionNodes, nodes) {
  let metaAssertionNodesMatches = false;

  const nodesLength = nodes.length,
        metaAssertionNodesLength = metaAssertionNodes.length;

  if (nodesLength === metaAssertionNodesLength) {
    metaAssertionNodesMatches = nodes.every((node, index) => {
      const metaAssertionNode = metaAssertionNodes[index],
            metaAssertionNodeMatches = matchMetaAssertionNode(metaAssertionNode, node);

      if (metaAssertionNodeMatches) {
        return true;
      }
    });
  }

  return metaAssertionNodesMatches;
}

function matchMetaAssertionTerminalNode(metaAssertionTerminalNode, terminalNode) {
  let metaAssertionTerminalNodeMatches = false;

  const matches = metaAssertionTerminalNode.match(terminalNode);

  if (matches) {
    metaAssertionTerminalNodeMatches = true;
  }

  return metaAssertionTerminalNodeMatches;
}

function matchMetaAssertionNonTerminalNode(metaAssertionNonTerminalNode, nonTerminalNode) {
  let metaAssertionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        metaAssertionRuleName = metaAssertionNonTerminalNode.getRuleName(); ///

  if (ruleName === metaAssertionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          nodes = childNodes, ///
          metaAssertionChildNodes = metaAssertionNonTerminalNode.getChildNodes(),
          metaAssertionNodes = metaAssertionChildNodes, ///
          metaAssertionChildMatches = matchMetaAssertionNodes(metaAssertionNodes, nodes);

    metaAssertionNonTerminalNodeMatches = metaAssertionChildMatches;  ///

    if (!metaAssertionNonTerminalNodeMatches) {
      const ruleNameMetastatementRuleName = (ruleName === METASTATEMENT_RULE_NAME);

      if (ruleNameMetastatementRuleName) {
        const bracketedMetastatementChildNodeMatches = matchBracketedMetastatementChildNode(childNodes, (bracketedMetastatementChildNode) => {
                const nonTerminalNode = bracketedMetastatementChildNode,  ///
                      childNodes = nonTerminalNode.getChildNodes(),
                      nodes = childNodes, ///
                      metaAssertionChildMatches = matchMetaAssertionNodes(metaAssertionNodes, nodes),
                      bracketedMetastatementChildNodeMatches = metaAssertionChildMatches;  ///

                return bracketedMetastatementChildNodeMatches;
              });

        metaAssertionNonTerminalNodeMatches = bracketedMetastatementChildNodeMatches; ///
      }
    }
  }

  return metaAssertionNonTerminalNodeMatches;
}
