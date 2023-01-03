"use strict";

import { matchNodes, bracketedChildNodeFromChildNodes } from "./utilities/node";

export default class Substitution {
  constructor(variableName, nodes) {
    this.variableName = variableName;
    this.nodes = nodes;
  }

  getVariableName() {
    return this.variableName;
  }

  getNodes() {
    return this.nodes;
  }

  matchNodes(nodes) {
    let matches;

    const nodesA = this.nodes,  ///
          nodesB = nodes,
          metaSubstitutionNodesMatch = matchNodes(nodesA, nodesB);

    matches = metaSubstitutionNodesMatch;  ///

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

  static fromMetavariableNameAndNodes(variableName, nodes) {
    const bracketedChildNode = bracketedChildNodeFromChildNodes(nodes);

    if (bracketedChildNode !== null) {
      const nonTerminalNode = bracketedChildNode,  ///
            childNodes = nonTerminalNode.getChildNodes();

      nodes = childNodes; ///
    }

    const metaSubstitution = new Substitution(variableName, nodes);

    return metaSubstitution;
  }
}
