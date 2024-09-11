"use strict";

import { nodeAsString } from "./utilities/string";

export default class Constructor {
  constructor(termNode, string, type) {
    this.termNode = termNode;
    this.string = string;
    this.type = type;
  }

  getTermNode() {
    return this.termNode;
  }

  getString() {
    return this.string;
  }

  getType() {
    return this.type;
  }

  static fromTermNodeTypeAndTokens(termNode, type, tokens) {
    const string = stringFromTermNodeTypeAndTokens(termNode, type, tokens),
          constructor = new Constructor(termNode, string, type);

    return constructor;
  }
}

function stringFromTermNodeTypeAndTokens(termNode, type, tokens) {
  let string;

  const termString = nodeAsString(termNode, tokens);

  if (type === null) {
    string = `${termString}`;
  } else {
    const noSuperType = true,
          typeString = type.asString(tokens, noSuperType);

    string = `${termString}:${typeString}`;
  }

  return string;
}
