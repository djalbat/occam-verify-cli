"use strict";

import { matchNodes, bracketedChildNodeFromChildNodes } from "./utilities/node";

export default class MetaSubstitution {
  constructor(metavariableName, nodes) {
    this.metavariableName = metavariableName;
    this.nodes = nodes;
  }

  getMetavariableName() {
    return this.metavariableName;
  }

  getNodes() {
    return this.nodes;
  }

  matchNodes(nodes) {
    let matches;

    const nodesA = this.nodes,  ///
          nodesB = nodes,
          nodesMatch = matchNodes(nodesA, nodesB);

    matches = nodesMatch;  ///

    if (!matches) {
      const childNodes = nodes, ///
            bracketedChildNode = bracketedChildNodeFromChildNodes(childNodes);

      if (bracketedChildNode !== null) {
        const nonTerminalNode = bracketedChildNode,  ///
              childNodes = nonTerminalNode.getChildNodes(),
              nodesB = childNodes, ///
              nodesMatch = matchNodes(nodesA, nodesB);

        matches = nodesMatch; ///
      }
    }

    return matches;
  }

  static fromMetavariableNameAndNodes(metavariableName, nodes) {
    const bracketedChildNode = bracketedChildNodeFromChildNodes(nodes);

    if (bracketedChildNode !== null) {
      const nonTerminalNode = bracketedChildNode,  ///
            childNodes = nonTerminalNode.getChildNodes();

      nodes = childNodes; ///
    }

    const metaSubstitution = new MetaSubstitution(metavariableName, nodes);

    return metaSubstitution;
  }
}
