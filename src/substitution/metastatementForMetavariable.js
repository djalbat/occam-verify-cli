"use strict";

import { matcher } from "../matcher";
import { METASTATEMENT_RULE_NAME } from "../ruleNames";
import { bracketedNonTerminalNodeFromNonTerminalNode } from "../utilities/nonTerminalNode";

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
      const ruleName = METASTATEMENT_RULE_NAME,
            nonTerminalNode = metastatementNode,  ///
            bracketedNonTerminalNode = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNode, ruleName);

      metastatementNode = bracketedNonTerminalNode; ///

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

    const ruleName = METASTATEMENT_RULE_NAME,
          nonTerminalNode = metastatementNode,  ///
          bracketedNonTerminalNode = bracketedNonTerminalNodeFromNonTerminalNode(nonTerminalNode, ruleName);

    metastatementNode = bracketedNonTerminalNode; ///

    if (metastatementNode !== null) {
      metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableName, metastatementNode);
    }

    return metastatementForMetavariableSubstitution;
  }
}
