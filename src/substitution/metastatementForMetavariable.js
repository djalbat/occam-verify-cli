"use strict";

import Substitution from "../substitution";

import { nodeAsString } from "../utilities/string";
import { bracketedMetastatementChildNodeFromMetastatementNode } from "../utilities/match";
import { metavariableNodeFromMetavariableString, metastatementNodeFromMetastatementString } from "../utilities/node";

export default class MetastatementForMetavariableSubstitution extends Substitution {
  constructor(metavariableNode, metastatementNode) {
    super();

    this.metavariableNode = metavariableNode;
    this.metastatementNode = metastatementNode;
  }

  getMetavariableNode() {
    return this.metavariableNode;
  }

  getMetastatementNode() {
    return this.metastatementNode;
  }

  matchMetavariableNode(metavariableNode) {
    const matchesMetavariableNode = this.metavariableNode.match(metavariableNode);

    return matchesMetavariableNode;
  }

  matchMetastatementNode(metastatementNode) {
    let matchesMetastatementNode;

    matchesMetastatementNode = this.metastatementNode.match(metastatementNode)

    if (!matchesMetastatementNode) {
      const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode);

      if (bracketedMetastatementChildNode !== null) {
        const metastatementNode = bracketedMetastatementChildNode; ///

        matchesMetastatementNode = this.metastatementNode.match(metastatementNode);
      }
    }

    return matchesMetastatementNode;
  }

  toJSON(tokens) {
    const metavariableString = nodeAsString(this.metavariableNode, tokens),
          metastatementString = nodeAsString(this.metastatementNode, tokens),
          metavariable = metavariableString, ///
          metastatement = metastatementString,  ///
          json = {
            metavariable,
            metastatement
          };

    return json;
  }

  static fromJSONAndFileContext(json, fileContext) {
    const { metavariable, metastatement } = json,
          metavariableString = metavariable,  ///
          metastatementString = metastatement,  ///
          lexer = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metastatementNode = metastatementNodeFromMetastatementString(metastatementString, lexer, parser),
          metavariableNode = metavariableNodeFromMetavariableString(metavariableString, lexer, parser),
          metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metastatementNode, metavariableNode);

    return metastatementForMetavariableSubstitution;
  }

  static fromMetavariableNodeAndMetastatementNode(metavariableNode, metastatementNode) {
    let metastatementForMetavariableSubstitution;

    metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);

    const bracketedMetastatementChildNode = bracketedMetastatementChildNodeFromMetastatementNode(metastatementNode);

    if (bracketedMetastatementChildNode !== null) {
      const metastatementNode = bracketedMetastatementChildNode; ///

      metastatementForMetavariableSubstitution = new MetastatementForMetavariableSubstitution(metavariableNode, metastatementNode);
    }

    return metastatementForMetavariableSubstitution;
  }
}
