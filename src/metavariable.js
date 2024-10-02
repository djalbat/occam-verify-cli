"use strict";

import { metaTypeFromJSON } from "./metaType";
import { metavariableNameFromMetavariableNode } from "./utilities/name";
import { metavariableNodeFromMetavariableString } from "./utilities/node";

export default class Metavariable {
  constructor(string, node, name, metaType) {
    this.string = string;
    this.node = node;
    this.name = name;
    this.metaType = metaType;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }

  getName() {
    return this.name;
  }

  getMetaType() {
    return this.metaType;
  }

  getMetaTypeName() {
    const metaTypeName = this.metaType.getName();

    return metaTypeName;
  }

  matchName(name) {
    const nameMatches = (this.name === name);

    return nameMatches;
  }

  matchMetavariableNode(metavariableNode) {
    const metavariableNodeMatches = this.node.match(metavariableNode);

    return metavariableNodeMatches;
  }

  toJSON() {
    const metaTypeJSON = (this.metaType !== null) ?
                            this.metaType.toJSON() :
                              null,
          string = this.string,
          metaType = metaTypeJSON,  ///
          json = {
            string,
            metaType
          };

    return json;
  }

  static fromJSON(json, fileContext) {
    const { string } = json,
          lexer  = fileContext.getLexer(),
          parser = fileContext.getParser(),
          metavariableString = string,  ///
          metavariableNode = metavariableNodeFromMetavariableString(metavariableString, lexer, parser),
          node = metavariableNode;  ///

    let { metaType } = json;

    json = metaType;  ///

    metaType = metaTypeFromJSON(json, fileContext);

    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          name = metavariableName,  ///
          metavariable = new Metavariable(string, node, name, metaType);

    return metavariable;
  }

  static fromMetavariableNode(metavariableNode, fileContext) {
    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          name = metavariableName,  ///
          node = metavariableNode,  ///
          string = fileContext.nodeAsString(node),
          metaType = null,
          metavariable = new Metavariable(string, node, name, metaType);

    return metavariable;
  }

  static fromMetavariableNodeAndMetaType(metavariableNode, metaType, fileContext) {
    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          name = metavariableName,  ///
          node = metavariableNode,  ///
          string = fileContext.nodeAsString(node),
          metavariable = new Metavariable(string, node, name, metaType);

    return metavariable;
  }
}
