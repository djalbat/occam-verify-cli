"use strict";

import { matcher } from "../matcher";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalChildNodeFromChildNodes } from "../utilities/substitution";

export default class MetastatementForMetavariableSubstitution {
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
          nodeMatches = matcher.matchNode(nodeA, nodeB);

    matchesMetastatementNode = nodeMatches;  ///

    if (!matchesMetastatementNode) {
      const nonTerminalNode = metastatementNode,  ///
            childNodes = nonTerminalNode.getChildNodes(), ///
            ruleName = METASTATEMENT_RULE_NAME;

      metastatementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

      if (metastatementNode !== null) {
        const nodeA = this.metastatementNode,  ///
              nodeB = metastatementNode,
              nodeMatches = matcher.matchNode(nodeA, nodeB);

        matchesMetastatementNode = nodeMatches;  ///
      }
    }

    return matchesMetastatementNode;
  }

  static fromMetavariableNameAndMetastatementNode(metavariableName, metastatementNode) {
    let metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);

    const nonTerminalNode = metastatementNode,  ///
          childNodes = nonTerminalNode.getChildNodes(),
          ruleName = METASTATEMENT_RULE_NAME;

    metastatementNode = bracketedNonTerminalChildNodeFromChildNodes(childNodes, ruleName);  ///

    if (metastatementNode !== null) {
      metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
    }

    return metastatementForMetavariableSubstitution;
  }
}
