"use strict";

import { push } from "./utilities/array";

export default class Frame {
  constructor(declarations) {
    this.declarations = declarations;
  }

  getDeclarations() {
    return this.declarations;
  }

  addDeclarations(declarations) {
    push(this.declarations, declarations);
  }

  static fromDeclarations(declarations) {
    const frame = new Frame(declarations);

    return frame;
  }
}
