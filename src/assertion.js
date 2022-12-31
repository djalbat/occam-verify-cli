"use strict";

import { nodeQuery } from "./utilities/query";

const statementNodeQuery = nodeQuery("/*/statement!");

export default class Assertion {
  constructor(subproofNode, statementNode) {
    this.subproofNode = subproofNode;
    this.statementNode = statementNode;
  }

  getNonTerminalNode() {
    const nonTerminalNode = (this.statementNode !== null) ?
                               this.statementNode :
                                 null;

    return nonTerminalNode;
  }

  getSubproofNode() {
    return this.subproofNode;
  }

  getStatementNode() {
    return this.statementNode;
  }

  match(assertion) {
    let matches = false;

    const statementNode = assertion.getstatementNode();

    if ((statementNode !== null) && (this.statementNode !== null)) {
      const nonTerminalNode = this.statementNode, ///
            assertionNonTerminalNode = statementNode, ///
            assertionNonTerminalNodeMatches = matchAssertionNonTerminalNode(assertionNonTerminalNode, nonTerminalNode);

      matches = assertionNonTerminalNodeMatches;  ///
    }

    return matches;
  }

  static fromSubproofNode(subproofNode) {
    const statementNode = null,
          assertion = new Assertion(subproofNode, statementNode);

    return assertion;
  }

  static fromStatementNode(statementNode) {
    const subproofNode = null,
          assertion = new Assertion(subproofNode, statementNode);

    return assertion;
  }

  static fromQualifiedStatementNode(qualifiedStatementNode) {
    const subproofNode = null,
          statementNode = statementNodeQuery(qualifiedStatementNode),
          assertion = new Assertion(subproofNode, statementNode);

    return assertion;
  }

  static fromUnqualifiedStatementNode(unqualifiedStatementNode) {
    const subproofNode = null,
          statementNode = statementNodeQuery(unqualifiedStatementNode),
          assertion = new Assertion(subproofNode, statementNode);

    return assertion;
  }
}

function matchAssertionNode(assertionNode, node) {
  let assertionNodeMatches = false;

  const nodeTerminalNode = node.isTerminalNode(),
        ruleNodeTerminalNode = assertionNode.isTerminalNode();

  if (nodeTerminalNode === ruleNodeTerminalNode) {
    if (nodeTerminalNode) {
      const terminalNode = node,  ///
            assertionTerminalNode = assertionNode,  ///
            assertionTerminalNodeMatches = matchAssertionTerminalNode(assertionTerminalNode, terminalNode);

      assertionNodeMatches = assertionTerminalNodeMatches;  ///
    } else {
      const nonTerminalNode = node, ///
            assertionNonTerminalNode = assertionNode,  ///
            assertionNonTerminalNodeMatches = matchAssertionNonTerminalNode(assertionNonTerminalNode, nonTerminalNode);

      assertionNodeMatches = assertionNonTerminalNodeMatches; ///
    }
  }

  return assertionNodeMatches;
}

function matchAssertionChildNodes(assertionChildNodes, childNodes) {
  let assertionChildNodesMatches = false;

  const childNodesLength = childNodes.length,
        assertionChildNodesLength = assertionChildNodes.length;

  if (childNodesLength === assertionChildNodesLength) {
    assertionChildNodesMatches = childNodes.every((childNode, index) => {
      const assertionChildNode = assertionChildNodes[index],
            assertionNode = assertionChildNode, ///
            node = childNode, ///
            assertionNodeMatches = matchAssertionNode(assertionNode, node);

      if (assertionNodeMatches) {
        return true;
      }
    })
  }

  return assertionChildNodesMatches;
}

function matchAssertionTerminalNode(assertionTerminalNode, terminalNode) {
  let assertionTerminalNodeMatches = false;

  const matches = assertionTerminalNode.match(terminalNode);

  if (matches) {
    assertionTerminalNodeMatches = true;
  }

  return assertionTerminalNodeMatches;
}

function matchAssertionNonTerminalNode(assertionNonTerminalNode, nonTerminalNode) {
  let assertionNonTerminalNodeMatches = false;

  const ruleName = nonTerminalNode.getRuleName(),
        assertionRuleName = assertionNonTerminalNode.getRuleName(); ///

  if (ruleName === assertionRuleName) {
    const childNodes = nonTerminalNode.getChildNodes(),
          assertionChildNodes = assertionNonTerminalNode.getChildNodes(),
          assertionChildNodesMatches = matchAssertionChildNodes(assertionChildNodes, childNodes);

    assertionNonTerminalNodeMatches = assertionChildNodesMatches; ///
  }

  return assertionNonTerminalNodeMatches;
}
