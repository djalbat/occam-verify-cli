"use strict";

export default class Callbacks {
  constructor(halt, begin, complete) {
    this.halt = halt;
    this.begin = begin;
    this.complete = complete;
  }

  getHalt() {
    return this.halt;
  }

  getBegin() {
    return this.begin;
  }

  getComplete() {
    return this.complete;
  }

  static fromHaltBeginAndComplete(halt, begin, complete) {
    const callbacks = new Callbacks(halt, begin, complete);

    return callbacks;
  }
}
