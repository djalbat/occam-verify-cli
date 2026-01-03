"use strict";

export default class Declaration {
  constructor(context, string, node) {
    this.context = context;
    this.string = string;
    this.node = node;
  }

  getContext() {
    return this.context;
  }

  getString() {
    return this.string;
  }

  getNode() {
    return this.node;
  }
}
