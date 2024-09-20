"use strict";

import { nodeAsString } from "./utilities/string";

export default class Metavariable {
  constructor(node, name, termType, metaType) {
    this.node = node;
    this.name = name;
    this.termType = termType;
    this.metaType = metaType;
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

  asString(tokens) {
    const metaTypeName = this.metaType.getName();

    let string = nodeAsString(this.node, tokens);

    string = `${string}:${metaTypeName}`; ///

    return string;
  }

  static fromNodeNameTermTypeAndMetaType(node, name, termType, metaType) {
    const metavariable = new Metavariable(node, name, termType, metaType);

    return metavariable;
  }
}
