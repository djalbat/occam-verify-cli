"use strict";

export default class Declaration {
  constructor(context, node, string) {
    this.context = context;
    this.node = node;
    this.string = string;
  }

  getContext() {
    return this.context;
  }

  getNode() {
    return this.node;
  }

  getString() {
    return this.string;
  }
}
