"use strict";

import verifyTermGivenType from "./verify/termGivenType";

import { nodeQuery } from "./utilities/query";
import { nodeAsString } from "./utilities/string";
import { nameFromMetavariableNode } from "./utilities/name";

const termNodeQuery = nodeQuery("/metavariable/argument/term!"),
      typeNodeQuery = nodeQuery("/metavariable/argument/type!");

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
    const matchesName = (this.name === name);

    return matchesName;
  }

  matchMetavariableNode(metavariableNode, localContext) {
    let matchesNode = false;

    const typeNode = typeNodeQuery(metavariableNode);

    if (typeNode === null) {
      const name = nameFromMetavariableNode(metavariableNode);

      if (this.name === name) {
        const termNode = termNodeQuery(metavariableNode);

        if (false) {
          ///
        } else if ((termNode === null) && (this.termType === null)) {
          matchesNode = true;
        } else if ((termNode !== null) && (this.termType !== null)) {
          const type = this.termType,  ///
                termUnifiedWithTermType = verifyTermGivenType(termNode, type, localContext);

          matchesNode = termUnifiedWithTermType;  ///
        }
      }
    }

    return matchesNode;
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
