"use strict";

import { metaTypeFromJSON } from "./metaType";
import { metavariableNameFromMetavariableNode } from "./utilities/name";

export default class Metavariable {
  constructor(string, node, name, termType, metaType) {
    this.string = string;
    this.node = node;
    this.name = name;
    this.termType = termType;
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

  getTermType() {
    return this.termType;
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

  toJSON(fileContext) {
    const metaTypeJSON = this.metaType.toJSON(fileContext),
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
          termType = termTypeFromMetavariableNode(metavariableNode, fileContext),
          metavariable = new Metavariable(string, node, name, termType, metaType);

    return metavariable;
  }

  static fromMetavariableNode(metavariableNode, fileContext) {

  }

  static fromMetavariableNodeNameTermTypeAndMetaType(metavariableNode, termType, metaType, fileContext) {
    const metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          name = metavariableName,  ///
          node = metavariableNode,  ///
          string = fileContext.nodeAsString(node),
          metavariable = new Metavariable(string, node, name, termType, metaType);

    return metavariable;
  }
}
