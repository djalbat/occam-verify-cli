"use strict";

import { METASTATEMENT_RULE_NAME } from "./ruleNames";
import { matchNode, bracketedNonTerminalChildNodeFromChildNodes } from "./utilities/node";

export default class MetaSubstitution {
  constructor(metavariableName, metastatementNode) {
    this.metavariableName = metavariableName;
    this.metastatementNode = metastatementNode;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetastatementNode(metastatementNode) {
    let matchesMetastatementNode;

    const nodeA = this.metastatementNode,  ///
          nodeB = metastatementNode,
          nodeMatches = matchNode(nodeA, nodeB);

    matchesMetastatementNode = nodeMatches;  ///

    if (!matchesMetastatementNode) {
      const nonTerminalNode = metastatementNode,  ///
            childNodes = nonTerminalNode.getChildNodes(), ///
            ruleName = METASTATEMENT_RULE_NAME;

      metastatementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

      if (metastatementNode !== null) {
        const nodeA = this.metastatementNode,  ///
              nodeB = metastatementNode,
              nodeMatches = matchNode(nodeA, nodeB);

        matchesMetastatementNode = nodeMatches;  ///
      }
    }

    return matchesMetastatementNode;
  }

  static fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode) {
    let metaSubstitution = new MetaSubstitution(metavariableName, metastatementNode);

    const nonTerminalNode = metastatementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          ruleName = METASTATEMENT_RULE_NAME;

    metastatementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

    if (metastatementNode !== null) {
      metaSubstitution = new MetaSubstitution(metavariableName, metastatementNode);
    }

    return metaSubstitution;
  }
}
